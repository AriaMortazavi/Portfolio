import React, { Component } from 'react'
import styled from 'styled-components'

export default class Projects extends Component {
  render() {
    return (
      <Wrapper>
        <div className="projects-container">
          <div className='parent-container'>
            <div className='m-container'>
              <div className='item-container'>
                <div
                  className="anImg"
                  style={{
                    backgroundImage: 'url(https://i.gyazo.com/18a91c32f31f9bfbd1a62a55d0a6b863.jpg)'
                  }}
                ></div>
                <div className="text-container">
                  <span>
                    <a target="_blank" rel="noopener noreferrer" href="https://worldnewsapp.netlify.com/">
                    Volunteer App
                  </a>
                  </span>
                  <span>Online Volunttering job web app</span>
                  <div>
                    <span>Technologies used:</span>
                    <span>NextJS</span>
                  </div>
                  <span>
                    <a target="_blank" rel="noopener noreferrer" href="https://www.google.com/webhp?hl=en&sa=X&ved=0ahUKEwjz7Lz51c3uAhVG7J4KHYD6DX4QPAgI">
                      View web app
                  </a>
                  </span>
                </div>
              </div>
              <div className='item-container'>
                <div
                  className="anImg"
                  style={{
                    backgroundImage: 'url(https://i.gyazo.com/87389f0bbcede6846e2a809cca63b10c.png)'
                  }}
                ></div>
                <div className="text-container">
                  <span>
                    <a
                      target="_blank" rel="noopener noreferrer"
                      href="https://www.google.com/webhp?hl=en&sa=X&ved=0ahUKEwjz7Lz51c3uAhVG7J4KHYD6DX4QPAgI"
                    >
                      Dating App
                  </a>
                  </span>
                  <span>Dating online web app</span>
                  <div>
                    <span>Technologies used:</span>
                    <span>NextJS</span>
                  </div>
                  <span>
                    <a
                      target="_blank" rel="noopener noreferrer"
                      href="https://www.google.com/webhp?hl=en&sa=X&ved=0ahUKEwjz7Lz51c3uAhVG7J4KHYD6DX4QPAgI"
                    >
                      View web app
                  </a>
                  </span>
                </div>
              </div>
              <div className='item-container'>
                <div
                  className="anImg"
                  style={{
                    backgroundImage: 'url(https://i.gyazo.com/37c7c7870000dbdf0ef5ec8752b59a30.jpg)'
                  }}
                ></div>
                <div className="text-container">
                  <span>
                    <a
                      target="_blank" rel="noopener noreferrer"
                      href="https://play.google.com/store/apps/details?id=com.princewill.e_laundry"
                    >
                     Non-profit organization
                  </a>
                  </span>
                  <span>Website to recieve donations for a non profit organization.</span>
                  <div>
                    <span>Technologies used:</span>
                    <span>PHP</span>
                  </div>
                  <span>
                    <a
                      target="_blank" rel="noopener noreferrer"
                      href="https://www.google.com/webhp?hl=en&sa=X&ved=0ahUKEwjz7Lz51c3uAhVG7J4KHYD6DX4QPAgI"
                    >
                      View Github files
                  </a>
                  </span>
                </div>
              </div>
              <div className='item-container'>
                <div
                  className="anImg"
                  style={{
                    backgroundImage: 'url()'
                  }}
                ></div>
                <div className="text-container">
                  <span>
                    <a
                      target="_blank" rel="noopener noreferrer"
                      href="https://www.google.com/webhp?hl=en&sa=X&ved=0ahUKEwjz7Lz51c3uAhVG7J4KHYD6DX4QPAgI"
                    >
                      lorem tm vfv fvdsvds dfsvdsv
                  </a>
                  </span>
                  <span>A web app for.</span>
                  <div>
                    <span>Technologies used:</span>
                    <span>Vue JS</span>
                  </div>
                  <span>
                    <a
                      target="_blank" rel="noopener noreferrer"
                      href="https://www.google.com/webhp?hl=en&sa=X&ved=0ahUKEwjz7Lz51c3uAhVG7J4KHYD6DX4QPAgI"
                    >
                      View web app
                  </a>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    )
  }
}

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
        height: 400px;
        max-height: 400px;
        border: 1px solid #eee;
        box-shadow: 0 2px 7px 0 rgba(0, 0, 0, 0.05),
          0 2px 7px 0 rgba(72, 22, 66, 0.05);
          background-color: #f4f4f4;
        &:hover {
          box-shadow: 0 2px 7px 0 rgba(0, 0, 0, 0.1),
            0 2px 7px 0 rgba(72, 22, 66, 0.1);
        }

        .anImg {
          background-position: top left;
          background-size: cover;
          background-repeat: 'no-repeat';
          width: 100%;
          height: 65%;
        }

        .text-container {
          display: flex;
          flex-direction: column;
          height: 35%;
          justify-content: center;
          align-items: center;

          > span:nth-child(1) {
            font-weight: bold;
            font-size: 13px;
            color: #1c699b;
            font-family: 'Poppins', sans-serif;
          }

          > span:nth-child(2) {
            font-size: 13px;
            margin: 10px 0;
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

          > span:nth-child(4) {
            font-size: 13px;
            margin-top: 10px;
            color: #fa7249;
            cursor: default;
            font-weight: bold;
            font-family: 'Poppins', sans-serif;
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
