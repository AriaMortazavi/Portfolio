import React, { Component } from "react";
import photo from "../assets/images/portfolio_pic2.jpg";
import styled from "styled-components";
import { connect } from "react-redux";
import { toggleMobileView } from "../store/actions";

class Sidebar extends Component {

  portfolioPictureStyle = () => {
    return {
      height: "30%",
      width: "65%",
      borderRadius: "50%",
    };
  };

  closeSidebar = () => {
    this.props.closeSidebar();
  };

  render() {
    return (
      <Wrapper>
        <div className="portfolioContainer">
          <div className="top-container">
            <i className="fas fa-times" onClick={this.closeSidebar}></i>
          </div>
          <div className="n-container">
            <img
              src={photo}
              alt="Portfolio"
              className="portfolioPicture"
              style={this.portfolioPictureStyle()}
            />
            <span className="f-span">Aria Mortazavi</span>
            <span className="s-span">Front-End &#38; UX/UI Designer</span>
            <div className="p-div">
              <span>
                <i className="fas fa-dot-circle"></i>React, React Native, NextJS, and PHP <i className="fas fa-dot-circle"></i>
              </span>
              <span>
                <i className="fas fa-dot-circle"></i>The Adobe Suite <i className="fas fa-dot-circle"></i>
              </span>
              <span>
                <i className="fas fa-dot-circle"></i>Sketch, Figma, Balsamiq <i className="fas fa-dot-circle"></i>
              </span>
            </div>
          </div>
        </div>
      </Wrapper>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    closeSidebar: () => {
      dispatch(toggleMobileView());
    },
  };
};

export default connect(null, mapDispatchToProps)(Sidebar);

const Wrapper = styled.div`
  .portfolioContainer {
    height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    box-shadow: 3px 5px 16px 6px rgba(0,0,0,0.05);
    padding: 10px;
    padding-bottom: 50px;

    .portfolioPicture{
      border: 5px solid #fa7249;
      cursor: pointer;
    }

    .top-container{
      display:none;
      justify-content:flex-end;
      padding: 10px;
    }

    .fa-times{
      font-size: 30px;
    }

    .n-container{
      display: flex;
      height: 100%;
      width: 100%;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      > .f-span {
      margin-top: 40px;
      font-size: 1.4375rem;
      color: white;
    }

    > .s-span {
      margin-top: 20px;
      font-size: 17px;
      color: white;
    }

    > .p-div {
      margin-top: 40px;
      display: flex;
      flex-direction: column;
      width: 80%;
      font-size: 14px;
      color: white;
      text-align: center;

      > span {
        margin-bottom: 10px;
      }

      .fas {
        margin-right: 5px;
      }
    }

    > .l-span {
      position: fixed;
      bottom: 10px;
      font-size: 14px;
      font-family: 'Fira Sans Extra Condensed', sans-serif;

      > a {
        color: #ffdb59;
      }
    }

  }

  @media (min-width: 1326px) {
    .portfolioPicture{
      height: auto !important;
      width: 65% !important;
    }
  }

  @media (max-width: 1326px) {
    .portfolioPicture{
      height: auto !important;
      width: 65% !important;
    }
  }

  @media (max-width: 1160px) {
    .portfolioPicture{
      height: auto !important;
      width: 65% !important;
    }
  }

  @media (max-width: 992px) {
    .portfolioPicture{
      height: auto !important;
      width: 65% !important;
    }
    .p-div{
      font-size: 12px !important;
    }
    .l-span{
      font-size:0.625rem !important;
    }
  }

  @media (max-width: 880px) {
    .portfolioPicture{
      height: auto !important;
      width: 65% !important;
    }
  }

  @media (max-width: 785px) {
    .top-container{
      display:flex !important;
    }
    .portfolioPicture{
      height: auto !important;
      width: 65% !important;
    }
  }

  @media (max-width: 670px) {
    .portfolioPicture{
      height: auto !important;
      width: 65% !important;
    }
  }

  @media (max-width: 560px) {
    .portfolioPicture{
      height: auto !important;
      width: 65% !important;
    }
  }

  @media (max-width: 490px) {
    .portfolioPicture{
      height: auto !important;
      width: 65% !important;
    }
  }

  @media (max-width: 460px) {
    .portfolioPicture{
      height: auto !important;
      width: 65% !important;
    }
  }

  @media (max-width: 400px) {
    .portfolioPicture{
      height: auto !important;
      width: 65% !important;
    }
  }

  @media (max-width: 398px) {
    .portfolioPicture{
      height: auto !important;
      width: 65%!important;
    }
  }
}

`;
