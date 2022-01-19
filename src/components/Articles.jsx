import React, { Component } from 'react'
import styled from "styled-components";
import FadeIn from 'react-fade-in';

export default class Articles extends Component {
  render() {
    return (
      <Wrapper>
          <FadeIn>
        <div className="inside_text">
    <tbody>
                <p>
                    <h2>Summary</h2>
                </p>
                <br/>
                <p>
                British Columbia Institution of Technology Diploma in Digital Design and
                Development with extensive skills in responsive front-end development (HTML,
                CSS, JavaScript, PHP, and the React library), UX/UI design, user research, and
                graphic design.</p>
                <br/>
                <h2>
                    EXPERIENCE
                </h2>
                <br/>
                <h4>
                    Wildcat INC —
                    Content Producer<em></em>
                </h4>
                <h4>
                    OCT 2016 – Dec 2021 (Full-time)
                </h4>
                <br/>
                <p>
                    ● Managing multiple social media accounts with a combined total of 12+
million followers
                </p>
                <p>
                    ● Video editing video content
                </p>
                <p>
                    ● Overseeing video editors
                </p>
                <p>
                    ● Creating visuals using illustrator and photoshop
                </p>
                <p>
                    ● Working with publishing studios to promote new releases through
our social media and video platforms
                </p>
                <br/>
                <h2>
                    Technical Skills
                </h2>
                <br/>
                <p>
                    <strong>Front-End Development</strong>
                </p>
                <br/>
                <p>
                    ● Responsive front-end design skills in HTML, CSS, JS, and PHP
                </p>
                <p>
                    ● Proficient in the React library
                </p>
                <p>
                    ● Converting high fidelity prototypes to responsive applications
                </p>
                <p>
                    ● Proper implementation of front-end web apps for back end
                </p>
                <p>
                    ● Familiar with MySQL Database service navigation
                </p>
                <p>
                    ● Ability to navigate and collaborate using Git
                </p>
                <br/>
          
                <p>
                    <strong>Design and UX/UI</strong>
                </p>
                <br/>
                <p>
                    ● Creation of up to date industry standard interfaces using the Adobe
suite, InDesign, and Sketch
                </p>
                <p>
                    ● Experience in conducting professional user research
                </p>
                <p>
                    ● Skills in creating low and high-fidelity user testable prototypes
                </p>
                <p>
                    ● Creating competitive user personas for prototypes
                </p>

                <p>
                    <strong>Social Media Management</strong>
                </p>
                <br/>
                <p>
                    ● Creating/editing short and long from video and still visual content to
engage audiences on multiple different social media accounts
                </p>
                <p>
                    ● Studying analytics to maximize engagement and audience retention
                </p>
                <p>
                    ● Updating and informing audience on upcoming content and products
                </p>
                <p>
                    ● Over 7 years of professional experience editing content on YouTube and
various Social Media platforms
                </p>
            <br/>
                <h2>
                    Education
                </h2>
                <br/>
                <h4>
                    BCIT
                    <br/>
                    Burnaby, BC — <em>Diploma</em>
                </h4>
                <br/>
                <p>
                    Digital Design and Development in Business Media
                </p><br/>
                <p>
                    ● Industry competitive front-end design skills across
                    various digital platforms
                </p>
                <p>
                    ● Industry competitive UX/UI skills
                </p>
                <p>
                    ● Hands on experiences through real projects
                </p>
                <p>
                    ● Numerous team exercises conducting UX/UI practices
                </p>
                <p>
                    ● Small classes taught by industry experienced instructors
                </p>
                <br/>
                <h2>
                    LANGUAGES
                </h2>
                <br/>
                <p>
                    English (fluent), Farsi (native)
                </p>
                <br/>
                <h2>
                    Soft Skills
                </h2>
                <br/>
                   <p>
                    ● Problem solver
                 </p>
                 <p>
                    ● Adaptable
                    </p>
                    <p>
                    ● Creative
                    </p>
                    <p>
                    ● Time efficient
                    </p>
                    <p>
                    ● Highly coachable
                    </p>
                    <br></br>
                    <br></br>
                    <a
                className="hire-span"
                href="https://drive.google.com/uc?export=download&id=11xIs1l9Xlfp-DOLvlSeyJapwegW_rtAJ"
              >
                Download
              </a>
        <br></br><br></br>
    </tbody><br></br><br></br><br></br><br></br>

</div>
</FadeIn>
      </Wrapper>
    );
  }
}



const Wrapper = styled.div`
 overflow-y: auto;
 display: flex;  
    font-size: 16px;
   justify-content: center;
   margin-left: auto;
  margin-right: auto;
  width: 80%;
   

td{
    padding: 10px;
}
  h2{
      color: #fa7249;
    }
    .inside_text{
      width: 90%;
      height: 80vh;
      padding: 20px;
    }

    .hire-span {
          background-color: #fa7249;
          border-radius: 50px;
          padding: 15px 40px;
          color: #fff;
          margin-right: 30px;
          margin-bottom: 30px;
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
`
