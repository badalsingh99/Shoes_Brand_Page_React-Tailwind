import React from 'react'

const About = () => {
  return (
    <div>
    <div class="about-us">
    <img
          className="logo-c"
          src="./public/images/logo-design-49571.png"

          alt="Logo-c"
            />
      <div className='about-page'>
      <div className="about">
          <div className='about-shoes'>
          <img src="./public/images\shoes-png-45072 (1).png" className="pic"/>
          </div>
          <div className="text">
            <h2>About Us</h2>
            <h5>Welcome to footwear page for more details and<span>designs</span></h5>
              <p>Explore a world of comfort and style with our curated collection of footwear. At my footwear page, we understand the importance of a comfortable and fashionable step. Our diverse range of shoes is designed to cater to various tastes and occasions. Discover quality and affordability as you step into a world where every shoe tells a story. Welcome to the perfect blend of comfort and style at my wesite.</p>
              <button className="button-c" type="submit" id="submit" name="submit">
              Contact Us
              </button>
          </div>
        </div>
     </div>
  </div>
  </div>
  )
}

export default About;