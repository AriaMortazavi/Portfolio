import React, { Component } from 'react'
import styled from "styled-components";

export default class Articles extends Component {
  render() {
    return (
      <Wrapper>
        <div className="inside_text">
    <tbody>
        <tr>
            <td  valign="top">
                <p>
                    <h2>Summary</h2>
                </p>
                <br/>
                <p>
                    BCIT Diploma in Digital Design and Development with
                </p>
                <p>
                skills in responsive front-end development,
                    UX/UI design,
                    </p>
                    <p> and graphic design.</p>
                <br/>
                <h2>
                    EXPERIENCE
                </h2>
                <br/>
                <h4>
                    Wildcat INC —
                    Video Editor<em></em>
                </h4>
                <h4>
                    OCT 2020 – Ongoing
                </h4>
                <br/>
                <p>
                    ● animating, color correcting, subtitling, and audio engineering
                </p>
                <p>
                    ● Commonly provided daily turnarounds with limited time
                </p>
                <p>
                    ● Creating graphics using the Adobe suite
                </p>
                <p>
                    ● Working with in a team
                </p>
                <br/>
                <h2>
                    Technical Skills
                </h2>
                <br/>
                <p>
                    <strong>FRONT-END</strong>
                </p>
                <br/>
                <p>
                    ● Responsive front-end design
                </p>
                <p>
                    ● Proficient in the React library
                </p>
                <p>
                    ● Converting prototypes to responsive applications
                </p>
                <p>
                    ● Connecting front-end to back-end
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
                    ● Creating industry standard interfaces using the Adobe suite, InDesign, and Sketch
                </p>
                <p>
                    ● Experience in conducting proper user research
                </p>
                <p>
                    ● Creating user testable prototypes
                </p>
                <p>
                    ● Creating industry competitive user persona for prototypes
                </p>
            </td>
            <br/>
            <td valign="top">
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
                </p>
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
                    ● Collaborating
                 </p>
                 <p>
                    ● Listening
                    </p>
                    <p>
                    ● Problem solving
                    </p>
                    <p>
                    ● Communication
                    </p>
                    <p>
                    ● Time management
                    </p>

            </td>
        </tr>
    </tbody>

</div>
      </Wrapper>
    );
  }
}



const Wrapper = styled.div`
 overflow-y: auto;
 display: flex;  
    font-size: 16px;
   justify-content: center;

  h2{
      color: #fa7249;
    }
    .inside_text{
      width: 90%;
      height: 100vh;
      padding: 20px;
    }
`
