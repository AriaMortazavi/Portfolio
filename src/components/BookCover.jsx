import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { toggleActiveTab } from "../store/actions";
import FadeIn from 'react-fade-in';
import photo9 from "../assets/images/BookCover.png";

class BookCover extends Component {
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
            <div onClick={e => this.volunteerButtonClick(e, "Projects")} className="back_img"><u>Projects &lt; Book Cover</u></div>
            <span>Book Cover</span>
            <br></br>
            <img alt="" className="big_img" src={photo9}></img>
            <br></br>
            <br></br>
            <h3 className="headerone">Summary</h3>
            <span>
            The following book cover was created using Adobe Photoshop. This final class assignment was an attempt to create a book cover that needed to include a photographed subject and background. In an attempt to create a visually appealing fantasy book cover, I combined the subject with fantastical elements and lighting.


            </span> 
            <br></br>
            <h3 className="headerone">Steps</h3>
            <br></br>
            <span>
              <ol>
              <li>
                  Collect all assets needed to create the project including the photos
                </li>
                <li>
                  Research the concept, art style to understand the target market
                </li>
                <li>
                  Create the environment in Photoshop usign the two images and additional assets
                </li>
                <li>
                  Modify chracter and environment to create a smooth realastic composition
                </li>
                <li>
                  Lightning and deatil work
                </li>
                <li>
                 Create appropriate typography that reflects the subject of the cover
                </li>
                <li>
                 Add finishing touches and finalize work
                </li>
                </ol>
                <br></br>
            </span> 
            <h3 className="headerone">Concept vs Execution</h3>
            <br></br>
            <img className="small_img" src="https://i.gyazo.com/84ec1ef261157b2408a0e5abb7596e06.jpg" alt=""></img>
            <br></br>
            <br></br>
            <div className="c-t-div">
              <a
                className="hire-span"
                target="_blank" rel="noopener noreferrer" href="https://www.behance.net/gallery/122151271/Narnia-Book-Cover"
              >
                Full view
              </a>
              <br></br>
              <br></br>
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

export default connect(null, mapDispatchToProps)(BookCover);

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
  width: 60%;
}
.small_img{
  display: block;
  width: 90%;
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
