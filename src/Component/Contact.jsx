import React,{useState} from "react";


const Contact = () => {
  const  [data, setData] = useState({Name:"",Email:"",Messege:""});

  function handleSubmit(e) {
    // e.preventDefault();
    console.log(data);
  }
 
  
  return (
    <div className='contact-container'>
      <div className="left-col">
        <img
          className="logo-c"
          src="./public/images/logo-design-49571.png"

          alt="Logo-c"
        />
      </div>
      <div className="right-col">
      
        <h1 className="h1">Contact us</h1>
        <p className="p">
          Planning to visit Indonesia soon? Get insider tips on where to go,
          things to do and find the best deals for your next adventure.
        </p>

        <form id="contact-form">
          <label className='email-label' htmlFor="name">Full name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={data?.Name}
            placeholder="Your Full Name"
            onChange={(e) => setData({...data, Name:e.target.value})}
            required

          />
          <br />
          <label className="email-label" htmlFor="email">Email Address</label>
          <input
            type="email"
            id="email"
            name="email"
            value={data?.Email}
            placeholder="Your Email Address"
            onChange={(e) => setData({...data, Email:e.target.value})}
            required
          />
          <br />
          <label className="email-label" htmlFor="message">Message</label>
          <textarea
            rows="6"
            placeholder="Your Message"
            id="message"
            name="message"
            value={data?.Messege}
            onChange={(e) => setData({...data, Messege:e.target.value})}
            required
          ></textarea>
          <button onClick={handleSubmit} className="button-c">
            Send
          </button>
        </form>
        <div id="error"></div>
        <div id="success-msg"></div>
      </div>
    </div>
  );
};

export default Contact;
