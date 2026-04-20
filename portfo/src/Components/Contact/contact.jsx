import React from 'react'
import './contact.css'
import walmart from '../../assets/walmart.png'
import microsoft from '../../assets/microsoft.png'
import facebook from '../../assets/facebook.png'
import adope  from '../../assets/adobe.png'
import facebookicon from '../../assets/facebook-icon.png'
import twittericon from '../../assets/twitter.png'
import youtubeicon from '../../assets/youtube.png'
import instagramicon from '../../assets/instagram.png'
const Contact = () => {
  return (
    <section id="contactPage">
        <div id="clients">
<h1 className="contactPageTitle">My Clients</h1>
<p className="clientsDesc">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam ea est ad. Quo quas soluta ut impedit tenetur, sit voluptatum.</p>
<div className="clientImgs">
    <img src={walmart} alt="walmart" className="clientImg" />
      <img src={microsoft} alt="microsoft" className="clientImg" />
        <img src={facebook} alt="facebook" className="clientImg" />
          <img src={adope} alt="adope" className="clientImg" />
</div>
        </div>
        <div id="contact">
<h1 className="contactPageTitle">Contact Me</h1>
<span className="contactDesc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, quas.</span>
<form className='contactForm'>
<input type="text" className="name" placeholder='Your Name'/>
<input type="email" className="email" placeholder=' Your Email' />
<textarea className='msg' name="message" rows={5} placeholder='Your Message'></textarea>
<button className="submitBtn" value='send' type='submit'>Submit</button>
<div className="links">
    <img src={facebookicon} alt="facebookicon" className="link" />
     <img src={twittericon} alt="twittericon" className="link" />
      <img src={youtubeicon} alt="youtubeicon" className="link" />
       <img src={instagramicon} alt="instagramicon" className="link" />
</div>
</form>

        </div>
    </section>
  )
}

export default Contact