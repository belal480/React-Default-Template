
const ContactUs = () => {
  return (
    <div className="bg-gray-100 py-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white p-8 rounded-lg shadow-md flex flex-col lg:flex-row">
          <div className="lg:w-1/2">
            <img
              src="https://www.lincad.co.uk/wp-content/uploads/2022/08/contact-us-scaled-1.jpg"
              alt="Contact Us"
              className="w-full h-auto rounded-lg"
            />
          </div>
          <div className="lg:w-1/2 lg:pl-8 mt-6 lg:mt-0">
            <h1 className="text-3xl font-semibold">Contact Us</h1>
            <p className="mt-4 text-gray-700">
              Have questions or want to get in touch? Feel free to reach out to
              us using the contact information below, or use the contact form to
              send us a message.
            </p>
            <div className="mt-4 text-gray-700">
              <h2 className="text-xl font-semibold">Contact Information</h2>
              <p>Email: amibelal20174@gmail.com</p>
              <p>Phone: +8801767650112</p>
              <p>Address: 132 Savar, Dhaka, Bangladesh</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
