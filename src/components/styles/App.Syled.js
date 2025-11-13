import styled from "styled-components";

export const Body = styled.div`
  background-color: ${(props) => (props.theme == true ? "#F2F2F2" : "#141D2F")};
  height: 100vh;
  color: ${(props) => (props.theme == true ? "#4B6A9B" : "#FFFFFF")};
  transition: 0.5s;

  .section {
    width: 90%;
    margin: auto;
    max-width: 730px;
  }

  .val {
    margin-top: 2px;
    display: flex;
    justify-content: end;
    font-size: 10px;
    @media (min-width: 1300px) {
      font-size: 18px;
      margin-top: -2px;
    }
    p {
      font-weight: bold;
      color: red;
      margin-top: -34px;
      margin-right: 100px;
    }
  }
`;
