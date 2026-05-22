import React from 'react'
import AboutIamge from './assets/About.png'
import './About.css'
function About() {
    return (
        <>
            <section className="about" id="About">
                
                    <h2>About Us</h2>

                <div className="container">

                    <div className="left">
                    <img src={AboutIamge} alt="About Us" />
                    </div>
                    
                  <div className="right">
                    <h3>Our Mission</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, tempora.  lorem10</p>
                    </div>
                    
             </div>
            </section>
        </>
    )
}

export default About
