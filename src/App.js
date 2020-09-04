import React from "react";
import { Provider } from "react-redux";
import "./styles.css";
import styled from "@emotion/styled";
import store from "./state/createStore";
import CardHolder from "./components/CardHolder";
import FilterBar from "./components/FilterBar";
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
        <FilterBar />
        <CardHolder />
        <List />
      </Wrapper>
    </Provider>
  );
}
