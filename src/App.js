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
    portfolios: [
      {
        id: 1,
        logo: "https://i.picsum.photos/id/651/200/300.jpg?hmac=0w4DoCrs0gvMucmilCFXoqZAB9P3n94dVJ70mY8A4yQ",
        description: "test",
        playUrl: "https://www.youtube.com/",
        githubUrl: "https://github.com/babyazalea/forest2021",
      },
      {
        id: 2,
        logo: "https://i.picsum.photos/id/651/200/300.jpg?hmac=0w4DoCrs0gvMucmilCFXoqZAB9P3n94dVJ70mY8A4yQ",
        description: "test2",
        playUrl: "https://www.youtube.com/",
        githubUrl: "https://github.com/babyazalea/forest2021",
      },
      {
        id: 3,
        logo: "https://i.picsum.photos/id/651/200/300.jpg?hmac=0w4DoCrs0gvMucmilCFXoqZAB9P3n94dVJ70mY8A4yQ",
        description: "test3",
        playUrl: "https://www.youtube.com/",
        githubUrl: "https://github.com/babyazalea/forest2021",
      },
    ],
    reading: [
      {
        id: 1,
        title: "reading test",
        backgroundUrl: "https://www.gatsbyjs.com/Gatsby-Monogram.svg",
      },
      {
        id: 2,
        title: "reading test",
        backgroundUrl: "https://www.gatsbyjs.com/Gatsby-Monogram.svg",
      },
      {
        id: 3,
        title: "reading test",
        backgroundUrl: "https://www.gatsbyjs.com/Gatsby-Monogram.svg",
      },
    ],
    credits: null,
  });
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

  const editedContent = (sectionName, newContentData) => {
    setContentData((prevContentData) => {
      return {
        ...prevContentData,
        [sectionName]: newContentData,
      };
    });
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
            editedContent={editedContent}
            error={error}
          />
        </Layout>
      </AdminContext.Provider>
    </div>
  );
};

export default App;
