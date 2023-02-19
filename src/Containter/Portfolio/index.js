import '../../Global.css';
import style from './style.module.css';
import myImage from "../../image/myImage.jpeg"
function Index(){
return(
    <div className={style.parentBlock}>
        <div className={style.projects}><a href={'/projectSummary'} >My Projects</a></div>
        
        <div className={style.introBlock}>
            <div className={style.leftIntroBlock}>
                <span className={style.name}>ANANYA BANDYOPADHYAY</span>
                <br/>
                <span className={style.designation}>Frontend Developer</span>
                <br/>
                <div className={style.subBlock}>
                    <span className={style.label}>Email: </span>
                    <a className={style.value} href={`mailto:"ani99banerjee@gmail.com"`}>ani99banerjee@gmail.com</a>
                    <br/>
                    <span className={style.label}>Linkedin:</span>
                    <a 
                        className={style.value} 
                        href={`https://www.linkedin.com/in/ananyabandyopadhyay`} 
                        rel='noreferrer' 
                        target="_blank">
                            https://www.linkedin.com/in/ananyabandyopadhyay/
                    </a>
                    <br/>
                    <span className={style.label}>Github: </span>
                    <a 
                        className={style.value} 
                        href={`https://github.com/ananyabandyopadhyay`} 
                        rel='noreferrer' 
                        target="_blank">
                            https://github.com/ananyabandyopadhyay
                    </a>
                    <br/>
                    <span className={style.label}>Phone Number: </span>
                    <span className={style.value}>7278964229</span>
                    <br/>
                    <span className={style.label}>Address: </span>
                    <span className={style.value}>Kolkata, India</span>
                    <br/>
                    <span className={style.label}>DOB: </span>
                    <span className={style.value}>10 June, 1999</span>
                </div>
            </div>
            <div className={style.rightIntroBlock}>
                <img src={myImage} alt="" className={style.myImage}/>
            </div>
        </div>

        <div className={style.subBlock}>
            <div className={style.subHeader}>Profile</div>
            <p>I am a frontend web developer with 2 years of experience. I have worked with 2 projects of
                react js on my previous company. My goal is to be a full stack developer.</p>
        </div>

        <div className={style.subBlock}>
            <div className={style.subHeader}>Work Experience</div>
            <div className={style.contentHeader}>
                <span style={{fontWeight: "bold", color: "rgb(90, 90, 90)"}}>
                    CBNITS - Developer
                </span>
                <span>
                    (March 2021 - Present)
                </span>
                </div>
                <ul>
                    <li>Developed a solid understanding of JavaScript and how JavaScript works inside the browser.</li>
                    <li>Performed pixel-perfect responsive frontend UI conversion of wireframe designs, with a new
                        beautiful UI of a large application and added multiple new features using Vanilla JavaScript,
                        JQuery, Bootstrap, HTML5 and CSS3 creating a great user experience.</li>
                    <li>Developed pixel-perfect frontend of an application with modern UI using ReactJS and SCSS for
                        styling, created features like user input, displaying data in tables.</li>
                    <li>Built a suite of Reusable components for two applications.</li>
                    <li>Implementation of api.</li>
                    <li>Maintained workflow using Github, Azure devops.</li>
                    <li>Experienced working in Scrum - Agile Environment.</li>
                    <li>Experienced with client meetings for stand up calls , sprint planning calls.</li>
                </ul>
        </div>

        <div className={style.subBlock}>
            <div className={style.subHeader}>Technical Skills</div>
            <span style={{fontWeight: "bold", color: "rgb(90, 90, 90)"}}>Languages & Libraries:</span> HTML5, CSS3, JavaScript, ReactJS, Bootstrap.
            <br/>
            <span style={{fontWeight: "bold", color: "rgb(90, 90, 90)"}}>Others:</span> Github, Azure DevOps.
        </div>

        <div className={style.subBlock}>
            <div className={style.subHeader}>Education</div>
            <span style={{fontWeight: "bold", color: "rgb(90, 90, 90)"}}>Masters of Computer Application</span> (2021 - present)
            <br/>
            Indira Gandhi National Open University Techno India University ▪ Kolkata
            <br/>
            <span style={{fontWeight: "bold", color: "rgb(90, 90, 90)"}}>Bachelor of Computer Application</span> (2017 - 2020)
            <br/>
            Techno India University ▪ Kolkata ▪ 8 CGPA
        </div>
    </div>

)
}
export default Index