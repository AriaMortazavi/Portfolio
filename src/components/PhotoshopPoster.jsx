import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { toggleActiveTab } from "../store/actions";
import FadeIn from 'react-fade-in';
import photo5 from "../assets/images/viking.png";
import photo4 from "../assets/images/acman.png";

class PhotoshopPoster extends Component {
  volunteerButtonClick(e, tab) {
    this.props.toggleActiveTab(tab);
  }

  render() {
    return (
      <Wrapper>
        <FadeIn>
        <div className="inside_text">
        <div className="about-container">
          <div className="parent-container">
            <div onClick={e => this.volunteerButtonClick(e, "Projects")} className="back_img"><u>Projects &lt; Photoshop Poster Art Work</u></div>
            <span>Photoshop Poster Art Work</span>
            <br></br>
            <img alt="" className="big_img" src={photo5}></img>
            <br></br>
            <h3 className="headerone">Summary</h3>
            <span>
            The following composition was a poster rendition of a physical statue turned into a composition using Photoshop. Using lighting work, filters and, color correction, the simple image taken using a camera was turned into a marketable graphic.


            </span> 
            <br></br>
            <h3 className="headerone">Steps</h3>
            <br></br>
            <span>
              <ol>
                <li>
                  Collect all assets needed to create the project
                </li>
                <li>
                  Research the concept and art style to understand what you are creating
                </li>
                <li>
                  Create the environment in Photoshop and Illustrator
                </li>
                <li>
                  Modify chracter and environment to create a smooth realastic composition
                </li>
                <li>
                  Lightning and deatil work
                </li>
                <li>
                 Text and final touches
                </li>
                <li>
                 Upload work
                </li>
            </ol>
            </span>
            <br></br>
            <h3 className="headerone">Concept vs Execution</h3>
            <br></br>
            <img
                alt=""
                  className="small_img"
                  src={photo4}
                ></img>
            <br></br>
            <div className="c-t-div">
              <a
                className="hire-span"
                target="_blank" rel="noopener noreferrer" href="https://www.behance.net/gallery/122130193/AC-Valhalla-Poster"
              >
                Full view
              </a>
              <br></br>
              <br></br>
              <a
                rel="noopener noreferrer" href="https://drive.google.com/uc?export=download&id=1Ceh2HHW5vlGgZkpYckleO-8hVh0WYNUY"
              >
                Download project
              </a>
              {/* <a className="resume-link" target="_blank" href="https://drive.google.com/open?id=1uBx5NHt0po_osHWxYuaeVDCDvzGDR8Rl">
                MY RESUME
              </a> */}
            </div>
          </div>
        </div>
        </div>
        </FadeIn>
      </Wrapper>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    toggleActiveTab: tab => {
      dispatch(toggleActiveTab(tab));
    }
  };
};

export default connect(null, mapDispatchToProps)(PhotoshopPoster);

const Wrapper = styled.div`
 overflow-y: auto;
 display: flex;  
   justify-content: center;
   margin-left: auto;
  margin-right: auto;
  width: 100%;
.back_img{
  cursor: pointer;
  color: #ff6e40;
}
.big_img{
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 70%;
}
.small_img{
  display: block;
  width: 100%;
}

.small_img2{
  width: 20%;
  display: flex;  
   justify-content: center;
   margin-left: auto;
  margin-right: auto;
}
.headerone{
  font-weight: bold;
  color: 707070;
}
.inside_text{
      width: 100%;
      height: 80vh;
      padding: 20px;
    }

  .about-container {
    .parent-container {
      display: flex;
      flex-direction: column;
      padding: 70px 15% 0;

      > span:nth-child(1) {
        color: #707070;
        font-size: 17px;
        font-family: "Rubik", sans-serif;
      }

      > span:nth-child(2) {
        color: #ff6e40;
        font-weight: bold;
        font-size: 56px;
        font-family: "Roboto", sans-serif;
        align-items: center;
      }
      .proj_title{
        display: flex;
       justify-content: center;
      }

      > span:nth-child(3) {
        color: #707070;
        font-family: "Rubik", sans-serif;
        font-size: 17px;
      }

      > span:nth-child(4) {
        color: #707070;
        font-family: "Fira Sans", sans-serif;
        font-size: 18px;
      }

      > span:nth-child(2),
      > span:nth-child(3),
      > span:nth-child(4) {
        margin-top: 25px;
      }

      > div:nth-child(5) {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 10px;

        a:nth-child(1) img {
          height: 50px;
          width: 50px;
          &:hover {
          transform: scale(1.1);
            transition: all .2s ;
        }
        }

        a:nth-child(2) img {
          height: 55px;
          width: 50px;
        }
        a:nth-child(2) img:hover {
          transform: scale(1.1);
            transition: all .2s ;
        }

        a:nth-child(3) img {
          height: 50px;
          width: 50px;
        }
        a:nth-child(3) img:hover {
          transform: scale(1.1);
            transition: all .2s ;
        }

        a:nth-child(4) img {
          height: 50px;
          width: 50px;
        }
        a:nth-child(4) img:hover {
          transform: scale(1.1);
            transition: all .2s ;
        }
      }

      .c-t-div {
        display: flex;
        margin: 50px 0 30px;
        > span {
          cursor: default;
        }
        .hire-span {
          background-color: #fa7249;
          border-radius: 50px;
          padding: 15px 40px;
          color: #fff;
          margin-right: 30px;
          border: 1px solid transparent;
          width: 50%;
        margin: 0 auto;
        text-align: center;
        transition: all .2s ;
        display: block;

          &:hover {
            background-color: #ededed;;
            border: 1px solid #fa7249;
            color: #fa7249;
            transform: scale(1.1);
            transition: all .2s ;
          }
        }

        .resume-link {
          border: 1px solid #fa7249;
          border-radius: 50px;
          padding: 15px 30px;
          color: #fa7249;

          &:hover {
            background-color: #fa7249;
            border: 1px solid transparent;
            color: #fff;
          }
        }
      }
    }

    @media (max-width: 600px) {
      .parent-container {
        padding: 60px 30px 80px !important;
      }
    }

    @media (max-width: 785px) {
      .parent-container {
        padding: 60px;
      }
      .hire-span {
        padding: 15px 25px !important;
      }
      .resume-link {
        padding: 15px 20px !important;
      }
    }
  }
`;
