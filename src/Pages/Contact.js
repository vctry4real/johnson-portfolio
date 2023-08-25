import React from 'react';
import emailjs from 'emailjs-com';
import { MdOutlineEmail } from 'react-icons/md';
import { BsWhatsapp, BsLinkedin } from 'react-icons/bs';

const Contact = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const result = await emailjs.sendForm(
        'service_w9xldym',
        'template_clndznm',
        e.target,
        'QVDgnEzDtIWEWRueD'
      );
      console.log(result.text);
    } catch (error) {
      console.error(error.text);
    }

    e.target.reset();
  };

  return (
    <div className="bg-gray-100 min-h-screen py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto bg-white rounded-lg shadow-md overflow-hidden md:max-w-xl">
        <h2 className="text-center text-2xl font-semibold text-gray-800 py-4">
          Contact Me
        </h2>
        <div className="grid md:grid-cols-2 gap-6 p-6">
          <article className="bg-gray-50 p-6 rounded-lg shadow-md">
            <MdOutlineEmail className="text-3xl text-blue-500 mb-2 mx-auto" />
            <h4 className="text-xl font-semibold text-gray-800">Email</h4>
            <p className="text-gray-600">johnsonvictory911@gmail.com</p>
            <a
              href="mailto:johnsonvictory911@gmail.com"
              target="_blank"
              className="text-blue-500 hover:underline mt-2 block"
            >
              Send a Message
            </a>
          </article>

          <article className="bg-gray-50 p-6 rounded-lg shadow-md">
            <BsWhatsapp className="text-3xl text-green-500 mb-2 mx-auto" />
            <h4 className="text-xl font-semibold text-gray-800">Whatsapp</h4>
            <p className="text-gray-600">V's code works</p>
            <a
              href="https://api.whatsapp.com/send?phone+2349064286189"
              target="_blank"
              className="text-blue-500 hover:underline mt-2 block"
            >
              Send a Message
            </a>
          </article>

          <article className="bg-gray-50 p-6 rounded-lg shadow-md">
            <BsLinkedin className="text-3xl text-blue-600 mb-2 mx-auto" />
            <h4 className="text-xl font-semibold text-gray-800">LinkedIn</h4>
            <p className="text-gray-600">V's code works</p>
            <a
              href="https://www.linkedin.com/in/johnson-victory-1b19591b1/"
              target="_blank"
              className="text-blue-500 hover:underline mt-2 block"
            >
              Send a Message
            </a>
          </article>
        </div>

        <div className="bg-gray-50 p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Send Me a Message</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700 font-semibold">
                Name
              </label>
              <input
                type="text"
                name="name"
                required
                className="mt-1 block w-full border rounded-md py-2 px-3 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="email" className="block mt-4 text-gray-700 font-semibold">
                Email
              </label>
              <input
                type="email"
                name="email"
                required
                className="mt-1 block w-full border rounded-md py-2 px-3 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="message" className="block mt-4 text-gray-700 font-semibold">
                Message
              </label>
              <textarea
                name="message"
                rows="4"
                required
                className="mt-1 block w-full border rounded-md py-2 px-3 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>

            <div className="flex items-center justify-center">
              <button
                type="submit"
                className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
