import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./contact.css";
import Swal from 'sweetalert2'

const ContactUs = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    emailjs
      .sendForm(
        import.meta.env.VITE_YOUR_SERVICE_ID,
        import.meta.env.VITE_YOUR_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_YOUR_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
          e.target.reset();
          setLoading(false);
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Message has been send successfully",
            showConfirmButton: false,
            timer: 1500
          });
        },
        (error) => {
          setLoading(false);
          Swal.fire({
            icon: "error",
            title: "Something went wrong!",
            text: error.text,
          });
        }
      );
  };

  return (
    <div className="contact_us_6">
      <div className="responsive-container-block container">
        <form className="form-box" ref={form} onSubmit={sendEmail}>
          <div className="container-block form-wrapper">
            <div className="mob-text">
              <p className="text-blk contactus-head" id="contact">
                Get in Touch
              </p>
              <p className="text-blk contactus-subhead">
                Feel free to send me an message. I'd love to connect!
              </p>
            </div>
            <div className="responsive-container-block" id="i2cbk">
              <div className="responsive-cell-block wk-tab-12 wk-mobile-12 wk-desk-12 wk-ipadp-12" id="i10mt-3">
                <p className="text-blk input-title">
                  NAME
                </p>
                <input className="input" type="text" name="from_name"
                id="name" placeholder="Your name..." required/>
              </div>
              <div className="responsive-cell-block wk-tab-12 wk-mobile-12 wk-desk-12 wk-ipadp-12" id="ip1yp">
                <p className="text-blk input-title">
                  EMAIL
                </p>
                <input className="input" type="email" name="from_email"
                id="email" placeholder="Your email..." required/>
              </div>
              <div className="responsive-cell-block wk-tab-12 wk-mobile-12 wk-desk-12 wk-ipadp-12" id="i634i-3">
                <p className="text-blk input-title">
                  MESSAGE
                </p>
                <textarea className="textinput" id="message"
                name="message" placeholder="Your message..." required></textarea>
              </div>
            </div>
            <button className={`submit-btn ${loading ? "opacity-50 cursor-not-allowed" : ""}`} type="submit" value="Send" disabled={loading}>
              {loading ? (
                <div className="flex justify-center items-center">
                  <span className="loading loading-spinner loading-lg mr-2"></span>
                </div>
              ) : (
                "Submit"
              )}
            </button>
          </div>
        </form>
        <div className="responsive-cell-block wk-desk-7 wk-ipadp-12 wk-tab-12 wk-mobile-12" id="i772w">
          <div className="map-part">
            <p className="text-blk map-contactus-head" id="w-c-s-fc_p-1-dm-id">
              Reach me
            </p>
            <div className="map-box container-block mapouter">
              <div className="gmap_canvas">
                <iframe
                  className="gmap_iframe"
                  frameBorder="0"
                  scrolling="no"
                  marginHeight="0"
                  marginWidth="0"
                  src="https://maps.google.com/maps?width=723&height=559&hl=en&q=Monnafer more, rajshahi&t=&z=13&ie=UTF8&iwloc=B&output=embed"
                  title="Google Map"
                ></iframe>
                <a href="https://fridaynightfunkin.lol/">fnf</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
