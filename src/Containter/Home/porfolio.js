
import './style.css'
import React from 'react'
function Index() {
    return (
        <>
            <div className="main">

                <div className="firstdiv">
                    {/* <img className="photo" src="ananya.jpg" alt="photo" width="300" height="300" /> */}
                    <h1>ANANYA BANDYOPADHYAY </h1>
                    <br /><br />
                    <div>
                        <h5>PERSONAL INFORMATION</h5>
                        <hr />
                        <table>
                            <tr>
                                <td>Nationality:</td>
                                <td>Indian</td>
                            </tr>
                            <tr>
                                <td>Gender:</td>
                                <td>Female</td>
                            </tr>
                            <tr>
                                <td>Date of Birth:</td>
                                <td>10th June 1999 </td>
                            </tr>
                            <tr>
                                <td>Language known:</td>
                                <td> English, Hindi, Bengali </td>
                            </tr>
                            <tr>
                                <td>Hobbies:</td>
                                <td> illustration, surfing internet, Reading books <br /> </td>
                        </tr>
                    </table>
                </div><br />
                        <h5>CONTACT</h5>
                        <hr />
                        <div>
                            PHONE:<br />
                            7278964229<br /><br />
                            ADDRESS:<br />
                            <address>Priyanka Apartment, Tarulia, kestopur Kolkata- 700102 </address>
                            EMAIL:<br />
                            {/* <div style="color:blue">ani99banerjee@gmail.com</div> */}
                        </div>
                    </div>

                    <div className="seconddiv">
                        {/* <p>I am a hardworking, honest individual. Also, a good timekeeper, always willing to learn new skills. I
                            am
                            able to work independently in busy environment and also within a team setting. I am outgoing and
                            tactful, and able listen effectively when solving problems. </p> */}

                        <div>
                            <u>
                                <h4>Academic Credentials </h4>
                            </u>
                            <table>
                                <th>
                                    Bachelor of Computer Application
                                </th>
                                <tr>
                                    <td>Techno India University</td>
                                    <td>8.33</td>
                                    <td>(2020)</td>
                                </tr>
                                <th>
                                    Higher Secondary Certificate
                                </th>
                                <tr>
                                    <td>Begum Rokeya Govt Girl’s High School</td>
                                    <td>68.2%</td>
                                    <td>(2017)</td>
                                </tr>
                                <th>
                                    Secondary Certificate
                                </th>
                                <tr>
                                    <td>Begum Rokeya Govt Girl’s High School</td>
                                    <td>72.43%</td>
                                    <td>(2015)</td>
                                </tr>
                            </table>
                        </div><br />
                        <div><u>
                            <h4>Technical Skill </h4>
                        </u>
                            <table>
                                <tr>
                                    <td>Programming languages : </td>
                                    <td>Java Script, React js</td>
                                </tr>
                                <tr>
                                    <td>Database :</td>
                                    <td> MySQL, Oracle 11g </td>
                                </tr>
                                <tr>
                                    <td>Web technologies : </td>
                                    <td> HTML, CSS, Bootstrap </td>
                                </tr>
                                <tr>
                                    <td>Extra activities : </td>
                                    <td> Microsoft word, excel, PowerPoint </td>
                                </tr>
                                <tr>
                                    <td>Area of interest :</td>
                                    <td> Front End </td>
                                </tr>
                            </table>
                        </div><br />


                        <div><u>
                            <h4>Project Work </h4>
                        </u>
                            <table>
                                <tr>
                                    <td>Title :</td>
                                    <td>Zuellig Pharma Analytics</td>
                                </tr>
                                <tr>
                                    <td>Role : </td>
                                    <td>front end developer
                                        write programming code on react JS and CSS to solve
                                        and modify the front end issue. </td>
                                </tr>
                            </table>
                        </div><br />
                        <div><b><u>
                            <h4>Experience </h4>
                        </u></b>
                            <p> Trainee Programmer, CBNITS India Development Center
                                from 24.02.21
                                <br />
                                As a trainee I was responsible for analyzing, developing and
                                modifying computer programs. And also to write formal
                                programming code for computer programs using structured
                                and well defined programming techniques that comply with
                                program specifications and programming standards.
                            </p>
                        </div>
                    </div>
                </div>
                {/* <script src="./index.js"></script> */}
            {/* </div> */}
        </>
    )
}
export default Index