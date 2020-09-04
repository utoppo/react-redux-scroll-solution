import styled from "@emotion/styled";

const FilterWrap = styled.div`
  overflow-x: hidden; /* left and right only */
  width: 100vw;
  height: 80px;
  background: green;
  flex: 1 0 100vw;
  display: flex;
  align-items: center;
  padding-left: 2rem;
  background: #ca9b68;
  background: white;

  margin-bottom: 20px;
  background: rgba(255, 255, 255, 0.75);
  position: fixed;
  top: 0;
  z-index: 10;
`;
const FilterItem = styled.div`
  border-radius: 4px;
  background: red;
  padding: 8px 32px 7px 32px;
  margin-right: 20px;
  height: 40px;
  display: flex;
  align-items: center;
  font-size: 24px;
  background: #d8b48d;
  color: #bc8243;
  background: white;

  cursor: pointer;
  &.active {
    font-weight: bold;
    background: black;
  }
`;

export { FilterWrap, FilterItem };
