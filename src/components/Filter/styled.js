import styled from "@emotion/styled";

const FilterWrap = styled.div`
  overflow-x: hidden; /* left and right only */
  width: 100vw;
  height: 80px;
  background: green;
  flex: 1 0 100vw;
  display: flex;
  align-items: center;
  padding-left: 1rem;
  background: #e6e6e6;
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
  background: #cccccc;

  color: #9d9d9d;
  cursor: pointer;
`;

export { FilterWrap, FilterItem };
