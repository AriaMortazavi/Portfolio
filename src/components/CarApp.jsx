import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { toggleActiveTab } from "../store/actions";
import FadeIn from 'react-fade-in';
import img1 from "../assets/images/img1.jpg";
import img5 from "../assets/images/img5.jpg";
import img6 from "../assets/images/img6.jpg";
import img7 from "../assets/images/img7.jpg";
import photo4 from "../assets/images/goelectric.png";

class CarApp extends Component {
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
            <div onClick={e => this.volunteerButtonClick(e, "Projects")} className="back_img"><u>Projects &lt; GoElectric</u></div>
            <span>GoElectric</span>
            <br></br>
            <img alt="" className="big_img" src={photo4}></img>
            <br></br>
            <h3 className="headerone">Summary</h3>
            <span>
            GoElectric was a small mobile web app project myself and a two other programmer friends worked on. The purpose of the app is to intake specific information about a user's driving behaviour in order to produce a recommendation output. This output recommends what future car best suites the user as well as their carbon foot print year over year.


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
                  Research idea
                </li>
                <li>
                  Create a low fidelity design
                </li>
                <li>
                  Conduct user testing
                </li>
                <li>
                  Create medium fidelity design
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
            <h3 className="headerone">Creation process</h3>
            <br></br>
            <img className="small_img" src={img1} alt=""></img>
            <br></br>
            <img className="small_img" src={img5} alt=""></img>
            <br></br>
            <img className="small_img" src={img6} alt=""></img>
            <br></br>
            <img className="small_img" src={img7} alt=""></img>
            <br></br>
            <h3 className="headerone">High fidelity prototype</h3>
            <br></br>
            <img className="small_img" src="https://i.gyazo.com/d013ae40377598a0813f2179357db1f4.png" alt=""></img>
            <br></br>
            <h3 className="headerone">Conclusion</h3>
            <span>
              <ul>
                <li>
                  Web Application
                 </li>
                 <li>
                Connecting students to non-profit organizations
                </li>
                <li>
                Getting local communities the help they need
                </li>
                <li>
                Providing high schools an updated resource for students
                </li>
            </ul>
            </span>
            <br></br>
            <h3 className="headerone">What I learned</h3>
            <span>
             There were 2 objectives we wanted to accomplish through this project. First, we wanted to better introduce ourselves to a mobile focused web app. Second, and more importantly, we wanted to work on a project that allowed us to think more critically about every step. I believe we were succesful in accomplishing both objectives.
            </span><br></br>
            <div className="c-t-div">
              <a
                className="hire-span"
                target="_blank" rel="noopener noreferrer" href="https://github.com/AriaMortazavi/GoElectric"
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

export default connect(null, mapDispatchToProps)(CarApp);

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
  display: flex;
  width: 40%;
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
