import React from 'react'
import './works.css'
import portfolio1 from '../../assets/portfolio-1.png'
import portfolio2 from '../../assets/portfolio-2.png'
import portfolio3 from '../../assets/portfolio-3.png'
import portfolio4 from '../../assets/portfolio-4.png'
import portfolio5 from '../../assets/portfolio-5.png'
import portfolio6 from '../../assets/portfolio-6.png'
const Works = () => {
  return (
  <section id="works">
<h2 className="worksTitle">My Portfolio</h2>
<span className="worksDesc">An ambitious graduate from Information Technology Institue (ITI), Web and User Interface Development track, where I have developed knowledge in technologies like Angular, React and VueJs, and improved my communication and presentation skills. Looking for a challenging position as a Frontend Developer, where I can utilize my knowledge and skills for the growth of the company.</span>
<div className="worksImgs">
    <img src={portfolio1} alt="portfolio1" className="worksImg" />
    <img src={portfolio2} alt="portfolio2" className="worksImg" />
    <img src={portfolio3} alt="portfolio3" className="worksImg" />
    <img src={portfolio4} alt="portfolio4" className="worksImg" />
    <img src={portfolio5} alt="portfolio5" className="worksImg" />
    <img src={portfolio6} alt="portfolio6" className="worksImg" />
</div>
<button className="worksBtn">See More</button>
  </section>
  )
}

export default Works