import React from 'react'
import './Services.css'
import Card1 from './assets/avatar-01.png'
import Card2 from './assets/avatar-02.png'
import Card3 from './assets/avatar-03.png'
function Services() {
    return (
        <>
            <div className="services" id="Services">
                <h2>Our Services</h2>
                <div className="container">
                    <div className="card">
                        <img src={Card1} alt="" />
                        <h3>Service 1</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, tempora.</p>
                        <button>Learn More</button>
                    </div>
                    <div className="card">
                        <img src={Card2} alt="" />
                        <h3>Service 2</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, tempora.</p>
                        <button>Learn More</button>
                    </div>
                    <div className="card">
                        <img src={Card3} alt="" />
                        <h3>Service 3</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, tempora.</p>
                        <button>Learn More</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Services
