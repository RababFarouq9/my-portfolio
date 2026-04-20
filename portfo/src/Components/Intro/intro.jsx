import React from 'react'
import './intro.css'
import bg from '../../assets/bg.jpg'
import {Link} from 'react-scroll'
import btnImg from '../../assets/hireme.png'
const Intro = () => {
  
  return (
   <section id="intro">
    <div className="introContent">
<span className="hello">hello</span>
<span className="introText">I`m <span className="introName">Rabab</span><br />
Software Engineer
</span>
<p className="introPara">Software engineer with high aspirations to deliver the best in the field of web development.</p> 
<Link><button className="btn"><img src={btnImg} alt="hire me"className='btnImg' />Hire Me</button></Link>
    </div>
    <img src={bg} alt="" className="bg" />

   </section>
  )
}

export default Intro