
import './style.css'
import React from 'react'
import myPhoto from '../../image/ananya.jpg'
import {AiFillGithub,AiFillLinkedin,AiFillPhone,AiFillMail,AiFillInstagram} from 'react-icons/ai'
function Index() {
    return (
        <>
            <div className="main">

                <div className="firstdiv">
                    <h1>Hello there, you can check my project here.<br /> It is on going ... </h1>
                </div>

                    <div className="seconddiv">
                        <div className="imageDiv">
                        <img src={myPhoto} alt='myPhoto' style={{width:'120px', height:'120px', borderRadius:'100%'}} />
                        <span className='nameDiv'>ANANYA BANDYOPADHYAY</span>
                        </div>
                        <div className='contact'>
                            <div className='iconDiv'>
                                <div className='icon'><AiFillPhone /></div>
                                <div className='icon'><AiFillMail /></div>
                                <div className='icon'><AiFillGithub /></div>
                                <div className='icon'><AiFillLinkedin /></div>
                                <div className='icon'><AiFillInstagram /></div>
                            </div>
                            <div className='urlDiv'>
                                <p className='url'>7278964229</p>
                                <p className='url'>ani99banerjee@gmail.com</p>
                                <p className='url'>github.com/ananyabandyopadhyay</p>
                                <p className='url'>linkedin.com/in/ananyabandyopadhyay</p>
                                <p className='url'>instagram.com/artyannanya/</p>
                            </div>
                        </div>
                    </div>
                </div>
        </>
    )
}
export default Index