import { FormEvent, useState } from "react";
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
      className="h-full w-full max-w-[30rem] mx-auto shadow-md rounded-lg "
    >
      <div className="flex gap-2">
        <div className="mb-4">
          <label
            htmlFor="firstName"
            className="block text-white-1 text-sm font-medium mb-2"
          >
            First Name*
          </label>
          <input
            required
            type="text"
            id="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className="w-full px-3 py-2 text-white-1 bg-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-1"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="lastName"
            className="block text-white-1 text-sm font-medium mb-2"
          >
            Last Name*
          </label>
          <input
            required
            type="text"
            id="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className="w-full px-3 py-2 text-white-1 bg-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-1"
          />
        </div>
      </div>
      <div className="mb-4">
        <label
          htmlFor="email"
          className="block text-white-1 text-sm font-medium mb-2"
        >
          Email*
        </label>
        <input
          required
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-3 py-2 text-white-1 bg-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-1"
        />
      </div>

      <div className="mb-4">
        <label
          htmlFor="message"
          className="block text-white-1 text-sm font-medium mb-2"
        >
          Message*
        </label>
        <textarea
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full px-3 py-2 text-white-1 bg-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-1"
          // rows : string="4"
          required
        />
      </div>

      <button
        type="submit"
        className="w-full bg-blue-1 hover:bg-blue-1 text-white font-semibold py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-1"
      >
        Submit
      </button>
    </form>
  );
};

export default ContactForm;