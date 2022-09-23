import React from "react";
import styled from "styled-components";
import Header from "../components/Header/Header";
import Main from "../components/Main/Main";
import Footer from "../components/Footer/Footer";

const HomeWrapper = styled.div`
  background-color: #ff0000;
`;
const Home = () => {
  return (
    <HomeWrapper>
      <Header />
      <Main />
      <Footer />
    </HomeWrapper>
  );
};

export default Home;
