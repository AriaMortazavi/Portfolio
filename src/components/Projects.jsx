import React, { Component } from "react";
import styled from 'styled-components'
import { connect } from "react-redux";
import { toggleActiveTab } from "../store/actions";
import FadeIn from 'react-fade-in';
import photo1 from "../assets/images/commaid.png";
import photo2 from "../assets/images/fuse.png";
import photo3 from "../assets/images/teamtrees.png";
import photo4 from "../assets/images/goelectric.png";
import photo5 from "../assets/images/viking.png";
import photo6 from "../assets/images/PoromtionalPosters.png";

class Projects extends Component {
  volunteerButtonClick(e, tab) {
    this.props.toggleActiveTab(tab);
  }
  render() {
    return (
      <Wrapper>
        <FadeIn>
        <div className="projects-container">
          <div className='parent-container'>
       
            <div className='m-container'>
            <div className='item-container'>
              <span
                onClick={e => this.volunteerButtonClick(e, "PhotoshopPoster")}
              >
                <img
                alt=""
                  className="anImg"
                  src={photo5}
                ></img>
                <div className="text-container">
                  <span>
                     Photoshop Poster
                  </span>
                  <span>

                  </span>
                </div>
                </span>
              </div>
              <div className='item-container'>
              <span
                onClick={e => this.volunteerButtonClick(e, "ProductIllustration")}
              >
                 <img
                 alt=""
                  className="anImg"
                  src={photo2}
                ></img>
                <div className="text-container">
                  <span>
                      Product Illustration
                  </span>
                  <span>

                  </span>
                </div>
                </span>
              </div>
              <div className='item-container'>
              <span
                onClick={e => this.volunteerButtonClick(e, "PoromtionalPosters")}
              >
                <img
                alt=""
                  className="anImg"
                  src={photo6}
                ></img>
                <div className="text-container">
                  <span>
                    Poromtional Posters
                  </span>
                  <span>

                  </span>
                </div>
                </span>
              </div>
              <div className='item-container'>
              <span
                onClick={e => this.volunteerButtonClick(e, "VolApp")}
              >
                <img
                alt=""
                  className="anImg"
                  src={photo1}
                ></img>
                <div className="text-container">
                  <span>
                    Volunteer App
                  </span>
                  <span>
 
                  </span>
                </div>
                </span>
              </div>
              <div className='item-container'>
              <span
                onClick={e => this.volunteerButtonClick(e, "NonProfitApp")}
              >

                <img
                alt=""
                  className="anImg"
                  src={photo3}
                ></img>
                <div className="text-container">
                  <span>

                     Non-profit organization
                  </span>
                  <span>
 
                  </span>
                </div>
                </span>
              </div>
              <div className='item-container'>
              <span
                onClick={e => this.volunteerButtonClick(e, "CarApp")}
              >
                <img
                alt=""
                  className="anImg"
                  src={photo4}
                ></img>
                <div className="text-container">
                  <span>

                      GoElectric fuel calculator
                  </span>
                  <span>

                  </span>
                </div>
                </span>
              </div>
              {/* <div className='item-container'>
              <span
                onClick={e => this.volunteerButtonClick(e, "NFTApp")}
              >
                <img
                alt=""
                  className="anImg"
                  src={photo5}
                ></img>
                <div className="text-container">
                  <span>

                  NFT Digital Asset
                  </span>
                  <span>

                  </span>
                </div>
                </span>
              </div> */}
            </div>
          </div>
        </div>
        </FadeIn>
      </Wrapper>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    toggleActiveTab: tab => {
      dispatch(toggleActiveTab(tab));
    }
  };
};

export default connect(null, mapDispatchToProps)(Projects);

const Wrapper = styled.div`
  .projects-container {
    display: flex;
    align-items: center;    

    .parent-container{
      height: 100vh;
      overflow-y: auto;
      padding: 0 70px 0 50px;
      padding-bottom: 100px !important;
      
      .m-container {
        display: grid;
        grid-template-columns: repeat(2, 50% [col-start]);
        grid-row-gap: 50px;
        grid-column-gap: 40px;
        padding: 5% 0;

      .item-container {
        height: 100%;
        max-height: 400px;
        box-shadow: 0 2px 7px 0 rgba(0, 0, 0, 0.05),
          0 2px 7px 0 rgba(72, 22, 66, 0.05);
          background-color: #ffffff;
          padding: 15px;
          transition: all .2s ;
        &:hover {
          box-shadow: 0 2px 7px 0 #c9c9c9,
            0 2px 7px 0 #acacac;
            transform: scale(1.03);
            transition: all .2s ;
            background-color: #dfdfdf;
        }

        .anImg {
          padding: 20px;
          background-position: top left;
          background-size: cover;
          background-repeat: 'no-repeat';
          width: 100%;
          /* border-bottom: 1px solid #888888; */

        }

        .text-container {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          color: white;
          font-size: 24px;
          color: black ;

          > span:nth-child(1) {
            font-weight: bold;
            font-size: 15px;
            color: black ;
            font-family: 'Poppins', sans-serif;
          }


          > div:nth-child(3) {
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 13px;
            > span:nth-child(1) {
              margin-right: 5px;
              font-weight: bold;
            }
          }

          > span:nth-child(2) {
            font-size: 13px;
            margin-top: 5px;
            margin-bottom: 10px;
            color: #fa7249;
            cursor: default;
            font-weight: bold;
            font-family: 'Poppins', sans-serif;
            text-decoration: underline;
          }
        }
      }

    }    

  }
  @media (max-width: 600px) {
    .parent-container{
      padding: 0 15px 0 25px !important;
      padding-bottom: 100px !important;
    }
    .m-container {
      grid-template-columns: repeat(1, 100% [col-start]) !important;      
    }
  }
}
`
