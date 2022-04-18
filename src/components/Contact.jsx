import React from "react";
import EmailForm from "./EmailForm";
import ContactCard from "./ContactCard";

import getForm from "../assets/get-form.jpg";

function Contact() {
  return (
    <div
      name="contact"
      className="container myContainer w-full h-screen flex justify-center"
      id="contact"
    >
      <form
        method="POST"
        action="https://getform.io/f/23fde768-537b-4cae-9d35-3e996ac4f6dd"
        className="flex flex-col max-w-[600px] w-full"
      >
        <div className="pb-8">
          <p className="headerText">Contact Me</p>
          <p className="text-light-text dark:text-dark-text my-4">
            Want to chat more?
            <br /> Just send me a message!
          </p>
        </div>
        <input
          className="my-4 p-2"
          type="text"
          placeholder="Your Name"
          name="name"
          required
        />
        <input
          className="my-4 p-2"
          type="email"
          placeholder="Your Email"
          name="email"
          required
        />
        <textarea
          className="my-4 p-2"
          name="message"
          rows="10"
          placeholder="Message"
          required
        />
        <button className="primaryBtn mx-auto">send message</button>
      </form>
    </div>
  );
}

export default Contact;
