import styled from "@emotion/styled";

const Card = styled.div`
  width: calc(50% - 3rem);
  height: 200px;
  border-radius: 4px;
  background: #d8b48d;
  margin: 0rem 1rem 2rem 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: #bc8243;
  position: relative;
  flex-wrap: wrap;
  align-content: center;
  cursor: pointer;
  &.active {
    background: black;
  }
`;

export { Card };
