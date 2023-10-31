import React from "react";
import "../css/hero.css"
import heroImage from "../images/test1.jpg"
import profilePic from "../images/me.jpg"
const Hero = () => {
    const heroImageStyle = {
        position: "sticky",
        color: "white",
        width: "100vw",
        height: "70vh",
        overflow: "hidden",
        top: "0",
        backgroundImage: `url(${heroImage})`,
        backgroundColor:"lightgray",
        backgroundSize: "100vw",
        backgroundRepeat: "no-repeat",
        display: "flex",
        zIndex: '-1',
        justifyContent: "center",
        alignItems : "center",
    }
    const style = {
        backdropFilter:"blur(6px)",
        height:"70vh",
        width:"100vw",
        justifyContent:"center",
        display:"flex",
        flexDirection:"column",
        alignItems:"center",
        fontWeight:"bold",
        fontSize:"1.3rem",
    }

    return (<>
        <div className="heroContainer" style={heroImageStyle}>
            <div style={style} className="herodiv">
                <img src={profilePic} alt="pfp" className="myImage"/>
               <p> Greetings!!! I am <span className="name">Sudhansu Upadhyay</span> an aspiring <span className="frontEnd">Front-end web developer</span><br /> looking for new opportunites to utilize my skills and make the world a better place.</p>
            </div>
        </div>
    </>)
}
export default Hero;