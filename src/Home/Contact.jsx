import React, { useRef } from "react";
import emailjs from "emailjs-com";
import animation3 from "../assets/img/animation3.gif";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        // Replace 'YOUR_SERVICE_ID' with your EmailJS service ID
        "service_luuqe3a",
        // Replace 'YOUR_TEMPLATE_ID' with your EmailJS template ID
        "template_esuj5zn",
        // Use the ref to get the form element
        formRef.current,
        // Replace 'YOUR_USER_ID' with your EmailJS user ID
        "eX_bUJJ4uecQ2OGXx"
      )
      .then(
        (result) => {
          console.log("Email sent successfully!", result.text);
          // Show toast notification for successful email submission
          toast.success("Email sent successfully! I'll contact you later");

          // Add any actions after a successful email submission here
        },
        (error) => {
          console.log("Error sending email:", error.text);
          // Show toast notification for email sending error
          toast.error("Error sending email.");

          // Add any error handling code here
        }
      );

    // Reset the form after submission (optional)
    e.target.reset();
  };
  return (
    <>
      {/* title  */}
      <div className="p-5 sm:flex sm:mb-10 flex flex-col">
        <h2 className="sm:text-4xl sm:mb-2 text-2xl main-text-color font-bold">
          -Let's Connect
        </h2>
        <p className="sm:text-2xl text-lg sm:ml-10 ml-5">Connect To ME</p>
      </div>

      {/* cate and inputfield  */}
      <div className="p-5 sm:flex  mb-10">
        {/* cate  */}
        <div className="sm:w-3/5 mb-5 p-5">
          <p className="leading-8 text-sm">
            Thank you for your attention. I am excited about the opportunity to
            collaborate with you and bring your vision to life. With over a year
            of experience as a MERN stack developer, I have successfully
            contributed to a wide range of projects, from small business
            websites to large-scale e-commerce platforms. My expertise spans
            front-end development, back-end development, and website
            maintenance. I am proficient in programming languages and
            technologies such as HTML, CSS, JavaScript, React, Next.js, Node.js,
            Express, Mongoose, Prisma, MongoDB, PostgreSQL, and Redis. I
            recognize that effective communication is key to a project's
            success, and I am committed to keeping you informed throughout the
            development process. <br />I aim to work closely with you to ensure
            that your website not only meets your specific requirements but also
            exceeds your expectations. My goal is to deliver a high-quality
            website that combines an attractive design with seamless
            functionality. I am confident that my skills and experience align
            perfectly with your project needs. <br />
            Thank you for considering my application. I look forward to the
            opportunity to collaborate with you.
          </p>
          <div className="sm:flex sm:justify-center sm:items-center">
            <img src={animation3} className=" sm:w-64" alt="animation-3" />
            {/* information */}
            <div>
              <div className=" pl-2 sm:text-[20px] mb-5 md:text-[15px] border-l-4 border-l-[rgb(224,36,36)]">
                <p>+95 976 299 3470</p>
                <p>98tintzawhtun@gmail.com </p>
                <p>Yangon,TharKayTa</p>
              </div>
            </div>
          </div>
        </div>

        {/* input field  */}
        <form
          className="sm:w-2/5 w-full  flex flex-col justify-center items-center gap-5"
          ref={formRef}
          onSubmit={sendEmail}
        >
          <div className="flex flex-col gap-3">
            <p className="sm:text-xl main-text-color font-bold">
              Let's work with together
            </p>
            <hr className="border-[rgb(224,36,36)] border sm:border-2 w-36 " />
          </div>

          <div className="flex flex-col gap-3 text-black w-full ">
            <label className="text-white" htmlFor="email">
              Your Email*
            </label>
            <input
              type="text"
              className="rounded-sm p-2 px-5 outline-none border-none"
              placeholder="Enter Your Email "
              name="from_name"
              required
            />
            <label className="text-white" htmlFor="about">
              Message*
            </label>
            <textarea
              name="message"
              className="rounded-sm p-2 px-5 outline-none border-none"
              placeholder="Hit Me Something ....."
              id=""
              cols="30"
              rows="10"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="p-3 text-sm bg-gradient-to-r from-[rgb(224,36,36)] to-[rgb(185,33,33)] text-white font-semibold rounded-md"
          >
            Submit Now
          </button>
        </form>
      </div>
    </>
  );
};

export default Contact;
