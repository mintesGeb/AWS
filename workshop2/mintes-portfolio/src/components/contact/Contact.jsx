import "./contact.css";
// import Phone from "../../img/phone.png";
// import Email from "../../img/email.png";
// import Address from "../../img/address.png";
// import emailjs from "emailjs-com";
import axios from "axios";
import React, { useContext } from "react";
// import { ThemeContext } from "../../context";

const Contact = () => {
  const formRef = React.useRef();
  const [done, setDone] = React.useState(false);
  const [message, setMessage] = React.useState({});
  // const { state, dispatch } = useContext(ThemeContext);

  const changeHandler = (e) => {
    setMessage({ ...message, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      message.name &&
      message.phone &&
      message.email &&
      message.subject &&
      message.content
    ) {
      console.log(message);

      axios
        .post(
          "https://9snog4m79h.execute-api.us-east-1.amazonaws.com/v1/contact",
          message
        )
        .then((res) => {
          console.log(res.data);
        });
    } else {
      console.log("please complete fields");
    }

    // emailjs
    //   .sendForm(
    //     "service_ncaxv84",
    //     "template_807v92p",
    //     formRef.current,
    //     "user_Qe2ZEfuZeqjHsXnoL3CCP"
    //   )
    //   .then(
    //     (result) => {
    //       console.log(result.text);
    //       setDone(true);
    //     },
    //     (error) => {
    //       console.log(error.text);
    //     }
    //   );
  };
  return (
    <div className="c">
      <div className="c-bg"></div>
      <div className="c-wrapper">
        {/* <div className="c-left">
          <h1 className="c-title">Let's discuss your project</h1>
          <div className="c-info">
            <div className="c-info-item">
              <img src={Phone} alt="" className="c-icon" />
              +1 234 345 5434
            </div>
            <div className="c-info-item">
              <img src={Email} alt="" className="c-icon" />
              mintes@geb
            </div>
            <div className="c-info-item">
              <img src={Address} alt="" className="c-icon" />
              Greenbelt, USA
            </div>
          </div>
        </div> */}
        <div className="c-right">
          <p className="c-desc">
            <b>What's Your Story </b> Get in touch.
          </p>
          <form ref={formRef} onSubmit={handleSubmit}>
            <input
              // style={{ backgroundColor: state.darkMode && "#333" }}
              type="text"
              placeholder="Name"
              name="name"
              onChange={changeHandler}
            />

            <input
              // style={{ backgroundColor: state.darkMode && "#333" }}
              type="email"
              placeholder="Email"
              name="email"
              onChange={changeHandler}
            />
            <input
              // style={{ backgroundColor: state.darkMode && "#333" }}
              type="number"
              placeholder="Phone"
              name="phone"
              onChange={changeHandler}
            />
            <input
              // style={{ backgroundColor: state.darkMode && "#333" }}
              type="text"
              placeholder="Subject"
              name="subject"
              onChange={changeHandler}
            />
            <textarea
              // style={{ backgroundColor: state.darkMode && "#333" }}
              row="5"
              placeholder="Message"
              name="content"
              onChange={changeHandler}
            />
            <button>Submit</button>
            {done && <p className="c-thankYou">Thank You ...</p>}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
