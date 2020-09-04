import styled from "@emotion/styled";

const CardWrap = styled.div`
  overflow-x: hidden; /* left and right only */
  flex: 1 0 50vw;
  height: calc(100vh);
`;
const CardContainer = styled.div`
  flex: 1 0 50vw;
  background: #ca9b68;
  overflow-y: scroll;
  display: flex;
  flex-wrap: wrap;
  margin-left: -4rem;
  padding: 0rem 1rem;
  overflow-x: hidden;
  background: white;
`;

const Name = styled.div`
  color: #bc8243;
  font-size: 24px;
  font-weight: bold;
  margin-top: 70px;
`;

const Category = styled.div`
  color: #bc8243;
  font-size: 16px;
  font-weight: normal;
  flex: 1 0 100%;
  margin-top: 12px;
  text-transform: uppercase;
`;

const Number = styled.div`
  position: absolute;
  left: 50%;
  top: 32px;
  transform: translateX(-50%);
  z-index: 5;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
  background: #bc8243;
  color: #d8b48d;
  font-size: 16px;
`;

export { CardWrap, CardContainer, Name, Category, Number };