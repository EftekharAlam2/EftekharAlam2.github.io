import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { JackInTheBox } from "react-awesome-reveal";

const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

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
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
      <div className="py-8" id="contact">
        <JackInTheBox>
          <div className="container mx-auto px-4">
            <div className="md:w-3/4 lg:w-2/3 mx-auto">
              <form
                className="bg-white shadow-md rounded-lg p-6 mt-12 flex flex-col gap-8"
                ref={form}
                onSubmit={sendEmail}
              >
                <h3 className="text-xl font-bold mb-4">Get in Touch</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <input
                      type="text"
                      name="from_name"
                      id="name"
                      className="border border-gray-300 rounded-lg py-2 px-4 w-full focus:outline-none focus:border-indigo-500"
                      placeholder="Your Name"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      name="from_email"
                      id="email"
                      className="border border-gray-300 rounded-lg py-2 px-4 w-full focus:outline-none focus:border-indigo-500"
                      placeholder="Your Email"
                    />
                  </div>
                </div>
                <textarea
                  id="message"
                  name="message"
                  className="border border-gray-300 rounded-lg py-2 px-4 w-full h-32 resize-none mt-4 focus:outline-none focus:border-indigo-500"
                  placeholder="Your Message"
                ></textarea>
                <button
                  className="btn btn-outline btn-accent mt-4 w-full"
                  type="submit"
                  value="Send"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </JackInTheBox>
      </div>
      <div className="py-3">
        <div className="mapouter">
          <div className="gmap_canvas">
            <iframe
              className="gmap_iframe"
              width="100%"
              frameBorder="0"
              scrolling="no"
              marginHeight="0"
              marginWidth="0"
              src="https://maps.google.com/maps?width=723&amp;height=559&amp;hl=en&amp;q=Monafeer mor, Rajshahi, Bangladesh&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            ></iframe>
            <a href="https://connectionsgame.org/">Connections NYT</a>
          </div>
          <style>
            {`.mapouter{position:relative;text-align:right;width:100%;height:559px;}.gmap_canvas{overflow:hidden;background:none!important;width:100%;height:559px;}.gmap_iframe{height:559px!important;}`}
          </style>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
