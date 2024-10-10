import { useRef } from "react";
import emailjs from "@emailjs/browser";

const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
console.log(e, 'ami');
console.log(import.meta.env.VITE_YOUR_PUBLIC_KEY, 'Public Key');
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
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your work has been saved",
            showConfirmButton: false,
            timer: 1500
          });
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="pb-10 flex items-center justify-center bg-gray-100">
      <div className="flex flex-col md:flex-row w-full max-w-4xl bg-white shadow-lg rounded-lg">
        {/* Left Section */}
        <div className="bg-green-500 text-white p-8 md:w-1/2 flex flex-col justify-center">
          <h2 className="text-2xl font-bold mb-4">Let's get in touch</h2>
          <p className="mb-6">You can send me an message with your email. </p>

          <div className="space-y-4">
            <div className="flex items-center">
              <svg
                className="w-6 h-6 text-white mr-2"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M12 2C6.48 2 2 6.48 2 12c0 3.33 1.63 6.31 4.39 8.12l.61.39-.15.73c-.09.45-.39 2.39 1.1 3.26 1.5.86 2.48-.08 3.39-.53l.55-.27.53.27c1.2.58 3.67 2.02 5.83-.53 1.17-1.36 1.1-3.31 1.1-3.31l-.13-.73.61-.39C20.37 18.31 22 15.33 22 12c0-5.52-4.48-10-10-10z" />
              </svg>
              <span>Address: Rajshahi, Bangladesh</span>
            </div>
            <div className="flex items-center">
              <svg
                className="w-6 h-6 text-white mr-2"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M3 6h18v2H3zm0 6h12v2H3zm0 6h18v2H3z" />
              </svg>
              <span>Phone: +8801860304023</span>
            </div>
            <div className="flex items-center">
              <svg
                className="w-6 h-6 text-white mr-2"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M3.5 3A2.5 2.5 0 0 0 1 5.5v13A2.5 2.5 0 0 0 3.5 21h17A2.5 2.5 0 0 0 23 18.5v-13A2.5 2.5 0 0 0 20.5 3h-17zm0 2h17c.28 0 .5.22.5.5V10L12 13.74 3 10V5.5c0-.28.22-.5.5-.5zm0 4.12l8.5 3.74 8.5-3.74v8.88c0 .28-.22.5-.5.5h-17a.5.5 0 0 1-.5-.5V9.12z" />
              </svg>
              <span>Email: mdeftekharul.innovx@gmail.com</span>
            </div>
            {/* <div className="flex items-center">
              <svg
                className="w-6 h-6 text-white mr-2"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M9 9v6h6V9H9zm2 2h2v2h-2v-2zm5-7H8v2h8V4zm4 4h-2V6c0-1.1-.9-2-2-2H7c-1.1 0-2 .9-2 2v2H3v14h18V8z" />
              </svg>
              <span>Website: yoursite.com</span>
            </div> */}
          </div>
        </div>

        {/* Right Section - Contact Form */}
        <div className="p-8 md:w-1/2">

          <form ref={form} onSubmit={sendEmail} className="space-y-4">
            <div>
              <input
                type="text"
                name="from_name"
                id="name"
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="Your Name"
                required
              />
            </div>
            <div>
              <input
                type="email"
                name="from_email"
                id="email"
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="Your Email"
                required
              />
            </div>

            <div>
              <textarea
                id="message"
                name="message"
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500 h-32"
                placeholder="Your Message"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              value="Send"
              className="px-6 py-3 bg-green-500 text-white rounded-lg shadow hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
