import React, { useEffect, useState } from "react";
import { useHttp } from "./hooks/http-hooks";
import { useAuth } from "./hooks/auth-hooks";
import AdminContext from "./context/admin-context";

import Layout from "./components/layout/Layout";
import Lights from "./components/effects/Lights/Lights";
import Tap from "./components/tap/Tap";

import "./App.css";

const App = () => {
  const [contentData, setContentData] = useState({
    notice: null,
    portfolios: null,
    reading: null,
    credits: null,
  });
  const [editingData, setEditingData] = useState(null);
  const [selectedSection, setSelecetedSection] = useState(null);
  const { isLoggedIn, login, logout } = useAuth();
  const { error, sendGetRequest } = useHttp();

  useEffect(() => {
    const sectionTitles = ["notice", "portfoilos", "reading", "credits"];

    const fetchingData = async (title) => {
      const url = `https://forest2021-a1e4c-default-rtdb.firebaseio.com/${title}.json`;

      try {
        const responseData = await sendGetRequest(url);

        if (title === "notice" || title === "credits") {
          const text = responseData.description;
          setEditingData(text);
          const newContentData = text.split("\n");
          setContentData((prevContentData) => {
            return {
              ...prevContentData,
              [title]: newContentData,
            };
          });
        }
      } catch (err) {}
    };

    for (const sectionTitle of sectionTitles) {
      fetchingData(sectionTitle);
    }
  }, [sendGetRequest]);

  const selectSectionHandler = (section) => {
    setSelecetedSection(section);
  };

  const onEditedContent = (newContentData) => {
    setContentData(newContentData);
  };

  const closeTapHandler = () => {
    setSelecetedSection(null);
  };

  return (
    <div className="App">
      <Lights />
      <AdminContext.Provider value={{ isLoggedIn: isLoggedIn }}>
        <Layout
          selectedSection={selectedSection}
          selectSectionHandler={selectSectionHandler}
          login={login}
          logout={logout}
          closeTapHandler={closeTapHandler}
        >
          <Tap
            closeTapHandler={closeTapHandler}
            selectedSection={selectedSection}
            contentData={contentData}
            editingData={editingData}
            onEditedContent={onEditedContent}
            error={error}
          />
        </Layout>
      </AdminContext.Provider>
    </div>
  );
};

export default App;
