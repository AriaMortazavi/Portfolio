import React, { Component } from 'react'
import styled from "styled-components";
import photo2 from "../assets/images/LI-In-Bug.png";
import { connect } from "react-redux";
import { toggleActiveTab } from "../store/actions";
import Projects from './Projects';

export default class Articles extends Component {
  roundButtonClick(e, tab) {
    this.props.toggleActiveTab(tab);
  }
  render() {
    return (
      <Wrapper>
        <div className="inside_text">
    <tbody>
        <tr>
            <td  valign="top">
                <p>
                    <strong>Summary</strong>
                </p>
                <br/>
                <p>
                    BCIT Diploma in Digital Design and Development with
                    extensive skills in responsive front-end development (HTML,
                    CSS, JavaScript, PHP, and the React library), UX/UI design,
                    and graphic design.
                </p>
                <br/>
                <h2>
                    EXPERIENCE
                </h2>
                <br/>
                <h4>
                    Wildcat INC, <a name="_wj0puh61kxsr"></a>Nashville TN —
                    Video Editor<em></em>
                </h4>
                <h4>
                    OCT<a name="_8hk593fs3sag"></a> 2020 – Ongoing (Part-time)
                </h4>
                <br/>
                <p>
                    ● Cutting, stitching, color correcting, subtitling, sound
                    effect creation
                </p>
                <p>
                    ● Commonly provided daily turnarounds with limited time
                </p>
                <p>
                    ● Creation of visual images using illustrator and photoshop
                </p>
                <p>
                    ● Working with other team members to provide polished
                    products
                </p>
                <br/>
                <h2>
                    Technical <a name="_yk8luflkpwij"></a>Skills
                </h2>
                <br/>
                <p>
                    <strong>FRONT-END<a name="_6wymnhinx9q5"></a></strong>
                </p>
                <br/>
                <p>
                    ● Responsive front-end design skills in HTML, CSS, JS, and
                    PHP
                </p>
                <p>
                    ● Proficient in the React library
                </p>
                <p>
                    ● Converting high fidelity prototypes to responsive
                    applications
                </p>
                <p>
                    ● Proper implementation of front-end web apps for back end
                    connection
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
                    ● Creation of up to date industry standard interfaces using
                    the Adobe suite, InDesign, and Sketch
                </p>
                <p>
                    ● Experience in conducting proper user research
                </p>
                <p>
                    ● Skills in creating low and high-fidelity user testable
                    prototypes
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
                    British Columbia Institution of Technology
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
                <ul>
                    <li>
                        Collaborating
                    </li>
                    <li>
                        Listening
                    </li>
                    <li>
                        Problem solving
                    </li>
                    <li>
                        Communication
                    </li>
                    <li>
                        Time management
                    </li>
                </ul>
            </td>
        </tr>
    </tbody>

<p>
    <a name="_ca0awj8022e2"></a>
    <a name="_cxxkes25b26"></a>
    <a name="_x8fm1uorkbaw"></a>
</p>
</div>
      </Wrapper>
    );
  }
}



const Wrapper = styled.div`
 display: flex;  
    font-size: 16px;
   justify-content: center;
   margin: 30px;

  h2{
      color: #fa7249;
    }
    .inside_text{
      width: 80%;
    }
`
