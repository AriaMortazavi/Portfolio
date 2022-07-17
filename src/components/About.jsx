import React, { Component } from "react";
import styled from "styled-components";
import photo2 from "../assets/images/LI-In-Bug.png";
import { connect } from "react-redux";
import { toggleActiveTab } from "../store/actions";
import Projects from './Projects';
import FadeIn from 'react-fade-in';
import TypeWriterEffect from 'react-typewriter-effect';

class About extends Component {
  roundButtonClick(e, tab) {
    this.props.toggleActiveTab(tab);
  }
  render() {
    return (
      <Wrapper>
        <FadeIn>
        <div className="about-container">
          <div className="parent-container">
            <span>Hello, I'm</span>
            <TypeWriterEffect
            className="myname"
            textStyle={{
              color: '#ff6e40',
              fontWeight: 500,
              fontSize: '1.5em',
            }}
            startDelay={0}
            cursorColor='#ff6e40'
            text="Aria Mortazavi"
            typeSpeed={100}
          />
            <span>
              I am a Front-End Software Developer, and UX/UI Designer. I am passionate about
              developing dynamic, cutting-edge web and mobile
              apps and graphics. Using modern Software Architecture, I
              can work alone or in teams to deliver high
              quality results that exceed
              expectations.
            </span>
            <span></span>
            <div>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="mailto: ariamortazavi@ymail.com"
              >
                <img className="iconImg" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Circle-icons-mail.svg/1024px-Circle-icons-mail.svg.png" alt="Twitter" />
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/AriaMortazavi"
              >
                <img className="iconImg" src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="GitHub" />
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.linkedin.com/in/aria-m-165820170/"
              >
                <img className="iconImg" src={photo2} alt="LinkedIn" />
              </a>
              <button
                className="hire-span"
                onClick={e => this.roundButtonClick(e, "Projects")}
              >
                My Projects
              </button>
            </div>
            <div className="c-t-div">
              {/* <a className="resume-link" target="_blank" href="https://drive.google.com/open?id=1uBx5NHt0po_osHWxYuaeVDCDvzGDR8Rl">
                MY RESUME
              </a> */}
            </div>
            <div className="proj_bar">
            <Projects className="proj_item"/>
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

export default connect(null, mapDispatchToProps)(About);

const Wrapper = styled.div`
  .about-container {
    display: flex;
    .parent-container {
      display: flex;
      flex-direction: column;
      padding: 70px 8% 0;
      height: 100vh;
      overflow-y: auto;

      .proj_bar{
          display: flex;
          bottom: 60px;
        }

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

        a:nth-child(1) img {
          height: 55px;
          width: 55px;
          transition: all .2s ;
          &:hover {
          transform: scale(1.1);
            transition: all .2s ;
        }
        }

        a:nth-child(2) img {
          height: 55px;
          width: 55px;
          transition: all .2s ;
        }
        a:nth-child(2) img:hover {
          transform: scale(1.1);
            transition: all .2s ;
        }

        a:nth-child(3) img {
          height: 55px;
          width: 55px;
          transition: all .2s ;
        }
        a:nth-child(3) img:hover {
          transform: scale(1.1);
            transition: all .2s ;
        }

        a:nth-child(4) img {
         height: 55px;
          width: 55px;
          transition: all .2s ;
        }
        a:nth-child(4) img:hover {
          transform: scale(1.1);
            transition: all .2s ;
        }
      }
      .hire-span {
          background-color: #fa7249;
          border-radius: 50px;
          padding: 5px 50px;
          height: 100%;
          font-size: 14px;
          color: #fff;
          margin-right: 30px;
          border: 1px solid transparent;
          transition: all .2s ;

          &:hover {
            background-color: #ededed;;
            border: 1px solid #fa7249;
            color: #fa7249;
            transform: scale(1.1);
            transition: all .2s ;
          }
        }

      .c-t-div {
        display: flex;
        margin: 10px 0 30px;
        padding: 30px;
        > span {
          cursor: default;
        }


        .resume-link {
          border: 1px solid #fa7249;
          border-radius: 50px;
          padding: 15px 30px;
          color: #fa7249;
          width: 100%;

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
