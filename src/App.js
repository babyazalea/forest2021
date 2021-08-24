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
    notice: { content: null, editing: false },
    portfolios: {
      content: [
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
      editing: false,
    },
    reading: {
      content: [
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
      editing: false,
    },
    credits: { content: null, editing: false },
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
              [title]: {
                content: newContentData,
                editing: false,
              },
            };
          });
        }
      } catch (err) {}
    };

    for (const sectionTitle of sectionTitles) {
      fetchingData(sectionTitle);
    }
  }, [sendGetRequest]);

  const cancelEditingHandler = () => {
    setContentData((prevState) => {
      const updatedData = { ...prevState };
      for (const sectionData in prevState) {
        updatedData[sectionData].editing = false;
      }

      return updatedData;
    });
  };

  const editModeHandler = (sectionName) => {
    setContentData((prevState) => {
      const updatedState = { ...prevState };
      for (const content in prevState) {
        updatedState[content].editing = false;
      }
      return {
        ...updatedState,
        [sectionName]: {
          content: updatedState[sectionName].content,
          editing: true,
        },
      };
    });
  };

  const selectSectionHandler = (sectionName) => {
    setSelecetedSection(sectionName);
    cancelEditingHandler();
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
            contentData={contentData}
            cancelEditingHandler={cancelEditingHandler}
            editModeHandler={editModeHandler}
            closeTapHandler={closeTapHandler}
            selectedSection={selectedSection}
            editedContent={editedContent}
            error={error}
          />
        </Layout>
      </AdminContext.Provider>
    </div>
  );
};

export default App;
