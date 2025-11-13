import styled from "styled-components";

export const SearchBar = styled.div`
  .forFlex1 {
    display: flex;
    justify-content: space-between;
    padding-top: 31px;

    h1 {
      color: ${(props) => (props.theme == true ? "#222731" : "white")};
    }
    .forFlex2 {
      margin: 15px 0px 0px 0px;
      height: 100%;
      width: 110px;
      display: flex;
      justify-content: space-between;

      @media (min-width: 1350px) {
        &:hover {
          opacity: 0.5;
          cursor: pointer;
          transition: 0.3s;
        }
      }

      img {
        width: 23px;
      }

      .theme {
        font-weight: bold;
        letter-spacing: 5px;
      }
    }
  }

  .search {
    margin-top: 35px;

    input {
      width: calc(100% - 60px);
      height: 60px;
      border-radius: 15px;
      background-color: ${(props) =>
        props.theme == true ? "#FEFEFE" : "#1E2A47"};
      box-shadow: ${(props) =>
        props.theme == true
          ? "0px 16px 30px -10px rgba(70, 96, 187, 0.198567)"
          : null};
      outline: none;
      color: ${(props) => (props.theme == true ? "#222731" : "white")};
      border: none;
      letter-spacing: 2px;
      font-size: 10px;

      @media (min-width: 1300px) {
        font-size: 18px;
      }
      &[type="text"] {
        padding-left: 60px;
      }
    }
    img {
      display: block;
      margin-top: -40px;
      margin-left: 15px;
    }

    div {
      display: flex;
      justify-content: end;
    }
    button {
      width: 84px;
      height: 46px;
      background-color: #0079ff;
      color: white;
      border-radius: 15px;
      border: none;
      margin-top: -36px;
      margin-right: 5px;
      cursor: pointer;

      @media (min-width: 1350px) {
        &:hover {
          cursor: pointer;
          background-color: #60abff;
          transition: 0.3s;
        }
      }
    }
  }
`;
