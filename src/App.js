import React from "react";
import { Provider } from "react-redux";
import "./styles.css";
import styled from "@emotion/styled";
import store from "./state/createStore";
import Cards from "./components/Cards";
import Filter from "./components/Filter";
import List from "./components/List";

const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  flex-wrap: wrap;
`;

export default function App() {
  return (
    <Provider store={store}>
      <Wrapper>
        <Filter />
        <Cards />
        <List />
      </Wrapper>
    </Provider>
  );
}
