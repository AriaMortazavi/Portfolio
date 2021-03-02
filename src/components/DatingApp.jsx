import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { toggleActiveTab } from "../store/actions";
import FadeIn from 'react-fade-in';
import photo2 from "../assets/images/fuse.png";

class DatingApp extends Component {
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
            <div onClick={e => this.volunteerButtonClick(e, "Projects")} className="back_img"><u>Projects &lt; Fuse</u></div>
            <span>Fuse</span>
            <br></br>
            <img alt="" className="big_img" src={photo2}></img>
            <br></br>
            <h3 className="headerone">Summary</h3>
            <span>
            With our dating app Fuse, we bring to you a super fun prompt generator chat function for direct messaging that will make conversing feel more like 2 people relaxing on a road trip, playing 21 questions to get to know each other better. Our app also includes a filtering feature to narrow down potential matches, giving people a higher chance of matching up with someone they can connect with. That’s what FUSE is all about; bringing people together, making real connections!


            </span> 
            <br></br>
            <h3 className="headerone">Steps</h3>
            <br></br>
            <span>
              <ol>
                <li>
                  Brainstorm ideas to solve a specific problem
                </li>
                <li>
                  Research idea and competition
                </li>
                <li>
                  Create a low fidelity design
                </li>
                <li>
                  Conduct user testing
                </li>
                <li>
                  Create a styleguide
                </li>
                <li>
                 Conduct UX/UI testing
                </li>
                <li>
                 Create final high fidelity design
                </li>
                <li>
                 Create initial components using React
                </li>
                <li>
                 Create pages
                </li>
                <li>
                 Connect to back end
                </li>
                <li>
                 Conduct user testing
                </li>
                <li>
                 Bug fix
                </li>
                </ol>
                <br></br>
            </span> 
            <h3 className="headerone">Styleguide brain storming</h3>
            <br></br>
            <img className="small_img" src="https://i.gyazo.com/87366c3e181b275d6cfc2794a17b8ff3.png" alt=""></img>
            <br></br>
            <h3 className="headerone">Competitive analysis</h3>
            <br></br>
            <img className="small_img" src="https://i.gyazo.com/542d8b60a6e323409472336a613b7545.png" alt=""></img>
            <br></br>
            <h3 className="headerone">What I learned</h3>
            <span>
              This project helped familiarize me with efficient methods of creating React components as well as introduced me to back end functions. In this project, I was also given the chance to create a randomizer that connects to a backend database. Lastely, this was the first major group project I was involved in which ontorduced me to efficient group dynamics in a programming environment.
            </span>
            <br></br>
            <div className="c-t-div">
              <a
                className="hire-span"
                target="_blank" rel="noopener noreferrer" href="http://fuse2020.herokuapp.com/"
              >
                Visit
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

export default connect(null, mapDispatchToProps)(DatingApp);

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
  width: 70%;
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
