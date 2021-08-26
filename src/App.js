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
      content: [],
      editing: false,
    },
    reading: {
      content: [],
      editing: false,
    },
    credits: { content: null, editing: false },
  });
  const [selectedSection, setSelecetedSection] = useState(null);
  const { isLoggedIn, login, logout } = useAuth();
  const { error, sendGetRequest } = useHttp();

  useEffect(() => {
    const sectionTitles = ["notice", "portfolios", "reading", "credits"];

    const fetchingData = async (title) => {
      const url = `https://forest2021-a1e4c-default-rtdb.firebaseio.com/${title}.json`;

      try {
        const responseData = await sendGetRequest(url);

        let fetchedContent;

        if (title === "notice" || title === "credits") {
          const text = responseData.description;
          fetchedContent = text.split("\n");
        } else {
          const contentIdArr = Object.keys(responseData);
          const contents = [];
          for (const contentId of contentIdArr) {
            const content =
              title === "portfolios"
                ? {
                    id: contentId,
                    description: responseData[contentId].description,
                    logo: responseData[contentId].logoImageUrl,
                    githubUrl: responseData[contentId].githubUrl,
                    playUrl: responseData[contentId].playUrl,
                  }
                : {
                    id: contentId,
                    title: responseData[contentId].title,
                    logoImageUrl: responseData[contentId].logoImageUrl,
                  };
            contents.push(content);
          }
          const descContents = contents.reverse();
          fetchedContent = descContents;
        }

        setContentData((prevContentData) => {
          return {
            ...prevContentData,
            [title]: {
              content: fetchedContent,
              editing: false,
            },
          };
        });
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
    if (sectionName === "notice" || sectionName === "credits") {
      setContentData((prevContentData) => {
        return {
          ...prevContentData,
          [sectionName]: {
            content: newContentData,
            editing: false,
          },
        };
      });
    } else {
      console.log("edited content");
      setContentData((prevContentData) => {
        const updatedContentData = { ...prevContentData };
        updatedContentData[sectionName].content.push(newContentData);
        updatedContentData[sectionName].editing = false;
        return {
          ...updatedContentData,
        };
      });
    }
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
