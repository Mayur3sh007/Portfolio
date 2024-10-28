"use client"
import React, { FormEvent, useState } from "react";
import { toast } from "react-hot-toast";

const ContactForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ firstName, lastName, email, message }),
      });

      if (response.ok) {
        setFirstName("");
        setLastName("");
        setEmail("");
        setMessage("");
        toast.success("Message sent successfully!");
      } else {
        toast.error("Failed to submit.");
      }
    } catch (error) {
      console.error("Error submitting form", error);
      toast.error("Failed to submit.");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-lg mx-auto p-6 rounded-lg shadow-md "
    >
      <h3 className="text-center text-xl text-white mb-5">Please enter your details</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="flex flex-col">
          <input
            type="text"
            id="firstName"
            placeholder="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className="py-3 px-4 bg-gray-900 text-white rounded-md border-2 border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
            required
          />
        </div>
        <div className="flex flex-col">
          <input
            type="text"
            id="lastName"
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className="py-3 px-4 bg-gray-900 text-white rounded-md border-2 border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
            required
          />
        </div>
      </div>

      <div className="mt-4">
        <input
          type="email"
          id="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="py-3 px-4 w-full bg-gray-900 text-white rounded-md border-2 border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
          required
        />
      </div>

      <div className="mt-4">
        <textarea
          id="message"
          placeholder="Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="py-3 px-4 w-full bg-gray-900 text-white rounded-md border-2 border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
          rows={4}
          required
        />
      </div>

      <button
        type="submit"
        className="w-full mt-3 bg-purple-500 hover:bg-purple-600 text-white font-semibold py-3 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
      >
        Submit
      </button>
    </form>
  );
};

export default ContactForm;
