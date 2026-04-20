import React from 'react'
import './skills.css'
import UIdesign from '../../assets/ui-design.png'
import WebDesign from '../../assets/website-design.png'
import FrontEnd from '../../assets/images.webp'
const Skills = () => {
  return (
    <section id="skills" className='skills'>
<span className="skills-title">What I do</span>
<span className="skillsDesc">I design and develop complete web experiences, from creating intuitive user interfaces and seamless user experiences to building responsive front-end applications and scalable, secure back-end systems.
     </span>
     <div className="skillsBars">
        <div className="skillBar">
            <img src={FrontEnd} alt="" className="skillBarImg" />
            <div className="skillBarText">
                <h2>Front-End Development</h2>
                <p>Crafting modern, responsive, and user-centric web interfaces with a focus on performance, accessibility, and clean code.</p>
            </div>
        </div>
          <div className="skillBar">
            <img src={UIdesign} alt="" className="skillBarImg" />
            <div className="skillBarText">
                <h2>UI&UX Design</h2>
                <p>Designing seamless experiences and beautiful interfaces that put users first.</p>
            </div>
        </div>
          <div className="skillBar">
            <img src={WebDesign} alt="" className="skillBarImg" />
            <div className="skillBarText">
                <h2>Back-End Develpment</h2>
                <p>Building powerful server-side systems that ensure speed, security, and reliability.</p>
            </div>
        </div>
     </div>
    </section>
  )
}

export default Skills