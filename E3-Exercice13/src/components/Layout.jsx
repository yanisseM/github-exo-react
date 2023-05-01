import styled from "styled-components";
import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main";
import React from "react";

const Layout = () => {
  const [nbArticles, setNbArticles] = React.useState(0);

  const addArticle = () => {
    setNbArticles(nbArticles + 1);
  };

  return (
    <Container>
      <Header nbArticles={nbArticles} />
      <Main addArticle={addArticle} />
      <Footer />
    </Container>
  );
};

export default Layout;

const Container = styled.div`
  margin-left: 228px;

  & header {
    height: 64px;
    background-color: #efefef;
  }

  & main {
    min-height: calc(100vh - 64px);
    padding: 24px;
  }

  & footer {
    height: 128px;
    background-color: #6e6e6e;
  }
`;
