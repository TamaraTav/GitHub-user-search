import styled from "styled-components";

export const UserInfo = styled.div`
  background-color: ${(props) => (props.theme == true ? "#FFFFFF" : "#1e2a47")};
  width: 82%;
  padding: 30px 9%;
  margin-top: 20px;
  border-radius: 15px;
  box-shadow: ${(props) =>
    props.theme == true
      ? "0px 16px 30px -10px rgba(70, 96, 187, 0.198567)"
      : null};
  .section1 {
    display: flex;
    margin-left: 0px;
    max-width: 100%;
    div {
      margin-left: 10%;

      h1 {
        font-size: 16px;
      }

      .login {
        color: #0079ff;
      }
      .join {
        font-size: 13px;
        width: 160px;

        @media (min-width: 1350px) {
          margin-left: 190%;
          margin-top: -30px;
        }
      }
    }

    img {
      max-width: 70px;
      max-height: 70px;
      border-radius: 100%;
      @media (min-width: 550px) {
        max-width: 117px;
        max-height: 117px;
      }
    }
  }

  .bio {
    margin-top: 34px;
    font-size: 13px;
    @media (min-width: 1350px) {
      margin-left: 175px;
      margin-top: -50px;
    }
  }

  .mainInfo {
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-top: 24px;
    height: 85px;
    border-radius: 10px;
    background-color: ${(props) =>
      props.theme == true ? "#F6F8FF" : "#141D2F"};
    @media (min-width: 1350px) {
      margin-left: 175px;
    }
    p {
      text-align: center;
    }

    .p1 {
      font-size: 11px;
    }

    .p2 {
      font-size: 16px;
      font-weight: bold;
      margin-top: 8px;
      color: ${(props) => (props.theme == true ? "#2B3442" : "white")};
      @media (min-width: 600px) {
        font-size: 22px;
      }
    }
  }

  .mainInfo2 {
    @media (min-width: 1350px) {
      margin-left: 175px;
    }
    div {
      margin-top: 24px;

      @media (min-width: 550px) {
        display: flex;
        justify-content: space-between;
        width: 100%;
      }

      .forResponsive2 {
      }
      img {
        ${(props) =>
          props.theme == true
            ? null
            : "filter: invert(100%) sepia(100%) saturate(25%) hue-rotate(18deg) brightness(150%) contrast(106%)"};
      }

      p {
        position: absolute;
        margin-left: 35px;
        font-size: 13px;

        margin-top: -26px;
        @media (min-width: 550px) {
          margin-top: 0px;
        }
        a {
          text-decoration: none;
          color: ${(props) => (props.theme == true ? "#4B6A9B" : "white")};
        }
      }
    }
  }
`;
