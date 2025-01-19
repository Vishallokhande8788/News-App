import React, { useState } from "react";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [alertVisible, setAlertVisible] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here (e.g., send form data to the server)

    // Show success alert
    setAlertVisible(true);

    // Clear form fields after submission
    setName("");
    setEmail("");
    setMessage("");

    // Hide alert after 4 seconds
    setTimeout(() => {
      setAlertVisible(false);
    }, 4000);
  };

  return (
    <div
      className="container my-5"
      style={{ paddingTop: "70px", position: "relative" }}
    >
      {/* Background */}
      <div
        className="background"
        style={{
          position: "absolute",
          top: "0",
          left: "0",
          right: "0",
          bottom: "0",
          zIndex: "-1",
          backgroundColor:"aqua",
          opacity: "0.5",
          filter: "blur(1000px)",
        }}
      ></div>

      {/* Contact Section */}
      <div className="row justify-content-center mt-5">
        <div className="col-12 col-md-8">
          <div
            className="card shadow-lg p-4 mb-4 bg-light rounded-lg"
            style={{
              transition: "all 0.3s ease-in-out",
              boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
              borderRadius: "15px",
              background: "rgba(255, 255, 255, 0.9)",
            }}
          >
            <div className="card-body">
              <h2
                className="text-center text-primary mb-4 font-weight-bold"
                style={{ fontSize: "2rem" }}
              >
                Contact Us
              </h2>
              <p
                className="lead text-muted"
                style={{ fontSize: "1rem", lineHeight: "1.6" }}
              >
                If you have any questions, feel free to reach out to us. We're
                here to assist you with all your inquiries.
              </p>

              {/* Success Alert */}
              {alertVisible && (
                <div className="alert alert-success text-center" role="alert">
                  Your message has been sent successfully! We will get back to
                  you soon.
                </div>
              )}

              {/* Contact Form */}
              <form onSubmit={handleSubmit}>
                <div className="form-group mt-4">
                  <label htmlFor="name" className="text-secondary">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="form-control"
                    placeholder="Your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>

                <div className="form-group mt-4">
                  <label htmlFor="email" className="text-secondary">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="form-control"
                    placeholder="Your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>

                <div className="form-group mt-4">
                  <label htmlFor="message" className="text-secondary">
                    Message
                  </label>
                  <textarea
                    id="message"
                    className="form-control"
                    placeholder="Your message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    rows="4"
                    required
                  ></textarea>
                </div>

                <div className="text-center mt-4">
                  <button
                    type="submit"
                    className="btn btn-primary btn-lg"
                    style={{ fontSize: "1rem" }}
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      
    </div>
  );
};

export default Contact;