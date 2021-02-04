import React, { Component } from "react";
import styled from "styled-components";
import photo2 from "../assets/images/LI-In-Bug.png";
import { connect } from "react-redux";
import { toggleActiveTab } from "../store/actions";
import Projects from './Projects';

class About extends Component {
  roundButtonClick(e, tab) {
    this.props.toggleActiveTab(tab);
  }

  // downloadResume() {
  //   const link = document.createElement("a");
  //   link.href = "./documents/Princewill_Iroka_Resume.pdf";
  //   link.download = "Princewill Iroka Resume";
  //   link.dispatchEvent(new MouseEvent("click"));
  // }

  render() {
    return (
      <Wrapper>
        <div className="about-container">
          <div className="parent-container">
            <span>Hello, I'm</span>
            <span>Aria Mortazavi</span>
            <span>
              I am a Front-End Software Developer and UX/UI Designer who is passionate about
              developing scalable, dynamic, cutting-edge web and mobile
              apps. Using modern Software Architecture, I
              can work in a team to deliver high
              quality result that meets and exceeds
              expectation.
            </span>
            <span>Find Me on</span>
            <div>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://twitter.com/AriaMortazavi"
              >
                <img src="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-2-1.png" alt="Twitter" />
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/AriaMortazavi"
              >
                <img src="https://image.flaticon.com/icons/png/512/25/25231.png" alt="GitHub" />
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.linkedin.com/in/aria-m-165820170/"
              >
                <img src={photo2} alt="LinkedIn" />
              </a>
              {/* <a
                target="_blank"
                rel="noopener noreferrer"
                href=""
              >
                <img src={photo3} alt="Stackoverflow" />
              </a>               */}
            </div>
            <div className="c-t-div">
              <span
                className="hire-span"
                onClick={e => this.roundButtonClick(e, "Contact")}
              >
                HIRE ME
              </span>
              {/* <a className="resume-link" target="_blank" href="https://drive.google.com/open?id=1uBx5NHt0po_osHWxYuaeVDCDvzGDR8Rl">
                MY RESUME
              </a> */}
            </div>
            <Projects></Projects>
          </div>
        </div>
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

export default connect(null, mapDispatchToProps)(About);

const Wrapper = styled.div`
  .about-container {
    display: flex;

    .parent-container {
      display: flex;
      flex-direction: column;
      padding: 70px 15% 0;
      height: 100vh;
      overflow-y: auto;

      > span:nth-child(1) {
        color: #707070;
        font-size: 17px;
        font-family: "Rubik", sans-serif;
      }

      > span:nth-child(2) {
        color: #ff6e40;
        font-weight: bold;
        font-size: 20px;
        font-family: "Roboto", sans-serif;
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

        a:nth-child(1) img {
          height: 40px;
          width: 40px;
        }

        a:nth-child(2) img {
          height: 50px;
          width: 50px;
        }

        a:nth-child(3) img {
          height: 35px;
          width: 45px;
        }

        a:nth-child(4) img {
          height: 35px;
          width: 35px;
        }
      }

      .c-t-div {
        display: flex;
        margin: 60px 0 100px;
        > span {
          cursor: default;
        }
        .hire-span {
          background-color: #ff6e40;
          border-radius: 50px;
          padding: 15px 40px;
          color: #fff;
          margin-right: 30px;
          border: 1px solid transparent;

          &:hover {
            background-color: #fff;
            border: 1px solid #ff6e40;
            color: #ff6e40;
          }
        }

        .resume-link {
          border: 1px solid #ff6e40;
          border-radius: 50px;
          padding: 15px 30px;
          color: #ff6e40;

          &:hover {
            background-color: #ff6e40;
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
