import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import Container from "../Container";
import toast, { Toaster } from "react-hot-toast";
import { Fade } from "react-awesome-reveal";
import { Element } from "react-scroll";

export default function Contacts() {
  const serviceOptions = [
    {
      value: "UI/UX_Design",
      label: "UI/UX Designing",
      name: "UI/UX Designing",
    },
    {
      value: "Web_Development",
      label: "Web Developement",
      name: " Web_Development",
    },
    {
      value: "Mobile_App_Development",
      label: "Mobile App Development",
      name: " Mobile_App_Development",
    },
  ];

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [phone, setPhone] = useState("");
  const [services, setServices] = useState("");
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    if (!name || !email || !message) {
      toast.error("Please fill all the required fields");
    } else {
      emailjs
        .sendForm(
          "service_b73ikc5",
          "template_amokvk8",
          e.target,
          "VzchgoVyTMjBEK-Zt"
        )
        .then(() => {
          toast.success("Your message has been sent successfully");
          setName("");
          setEmail("");
          setMessage("");
          setPhone("");
        })
        .catch(() => {
          toast.error("Oops ! Something went wrong");
          setName("");
          setEmail("");
          setMessage("");
          setPhone("");
        });
    }
  };

  return (
    <Element name="scroll-to-Contacts">
      <Container className={"mb-20"}>
        <Toaster
          toastOptions={{
            duration: 1000,
          }}
        />
        <p
          className="text-xl md:text-2xl lg:text-5xl font-semibold text-center"
          id="contactId"
        >
          Transform your Content Journey
        </p>
        <Fade direction="left">
          <form ref={form} onSubmit={sendEmail} className="flex flex-col">
            <div className="flex flex-col gap-7 bg-[#25B6AD] rounded-xl px-10 py-10 mt-7 h-[80%] md:w-7/12 mx-auto md:shadow-custom shadow-newcustom">
              <div className="flex flex-col gap-2">
                <label className="text-black font-semibold">
                  Enter your Name <span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  name="Name"
                  placeholder="Enter Your Name"
                  className="border-2 border-black rounded-xl text-black py-3 px-4"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-black font-semibold">
                  Enter your Email ID <span className="text-red-600">*</span>
                </label>
                <input
                  type="email"
                  name="Email"
                  placeholder="Email ID"
                  className="border-2 border-black rounded-xl text-black py-3 px-4"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-black font-semibold">
                  Enter your Phone Number{" "}
                  <span className="font-base text-sm">(optional)</span>
                </label>
                <input
                  type="tel"
                  name="Phone"
                  placeholder="Phone Number"
                  className="border-2 border-black rounded-xl text-black py-3 px-4"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-black font-semibold">
                  Send us a message <span className="text-red-600">*</span>
                </label>
                <textarea
                  cols={10}
                  rows={4}
                  name="Message"
                  placeholder="Enter Your Message"
                  className="border-2 border-black rounded-xl text-black py-3 px-4"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-black font-semibold">
                  Choose Our Services. <span className="text-red-600">*</span>
                </label>
                <select
                  className="border-2 border-black rounded-xl text-black py-3 px-4 w-full inline-block overflow-x-hidden "
                  name="ChooseService"
                  value={services}
                  onChange={(e) => setServices(e.target.value)}
                  placeholder="Choose a Service"
                >
                  {serviceOptions.map((el, index) => (
                    <option
                      key={el.value}
                      value={el.value}
                      className="overflow-auto text-clip"
                    >
                      {el.label}
                    </option>
                  ))}
                </select>
                <button
                  type="submit"
                  className="rounded-xl py-3 px-4 bg-black text-white text-sm md:text-lg font-semibold w-fit mt-10 mx-auto"
                >
                  SEND MESSAGE
                </button>
              </div>
            </div>
          </form>
        </Fade>
      </Container>
    </Element>
  );
}
