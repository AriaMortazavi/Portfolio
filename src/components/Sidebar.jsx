import React, { Component } from "react";
import photo from "../assets/images/portfolio_pic2.jpg";
import styled from "styled-components";
import { connect } from "react-redux";
import { toggleMobileView } from "../store/actions";
import { toggleActiveTab } from "../store/actions";

class Sidebar extends Component {
  roundButtonClick(e, tab) {
    this.props.toggleActiveTab(tab);
  }

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
          <span className="f-span" onClick={e => this.roundButtonClick(e, "About")}>Aria Mortazavi</span>
            <img
              src={photo}
              alt="Portfolio"
              className="portfolioPicture"
              style={this.portfolioPictureStyle()}
            />
            <span className="p-span"><a href="tel:778-683-4414">(778) 683 - 4414</a> </span>
            <br></br>
            <span className="s-span"></span>
            <div className="p-div">
            <span>
            Front-End, Graphic &#38; UX/UI Designer
            </span>
              <span>
                HTML, CSS, JavaScript,
                React, React Native, NextJS, and PHP 
              </span>
              <span>
              The Adobe Suite, 
               Sketch, Figma, and Balsamiq 
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
    toggleActiveTab: tab => {
      dispatch(toggleActiveTab(tab));
    }
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
      border: 5px solid #dc7a5c;
      margin-bottom: 40px;
      position: relative;
    bottom: 20px;
    }

    .top-container{
      display:none;
      justify-content:flex-end;
      padding: 10px;
      position: relative;
    bottom: 20px;
    }

    .fa-times{
      font-size: 30px;
      color: white;
      position: relative;
    top: 20px;
    right: 10px;
    &:hover {
            transform: scale(1.4);
            transition: all .2s ;
          }
    }

    .n-container{
      display: flex;
      height: 100%;
      width: 100%;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      > .f-span {
      font-size: 1.7rem;
      color: white;
      position: relative;
    bottom: 60px;

    &:hover {
            transform: scale(1.1);
            transition: all .2s ;
          }

    border-radius: 40px;
    padding: 15px;
    cursor: pointer;
    }

    > .s-span {
      font-size: 17px;
      color: white;
      position: relative;
    bottom: 20px;
    }

    .p-span{
      font-size: 19px;
      color: white;
      font-weight: bold;
      position: relative;
    bottom: 20px;
    }

    > .p-div {
      margin-top: 20px;
      display: flex;
      flex-direction: column;
      width: 80%;
      font-size: 14px;
      color: white;
      text-align: center;
      position: relative;
    bottom: 20px;

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
