import React from "react";

const About = () => {
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
          backgroundColor: "aqua",
          opacity: "0.4",
          filter: "blur(8000px)",
        }}
      ></div>

      {/* About Section */}
      <div className="row justify-content-center">
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
              <h1
                className="text-center text-primary mb-4 font-weight-bold"
                style={{ fontSize: "2rem" }}
              >
                About Newsify
              </h1>
              <p
                className="lead text-muted"
                style={{ fontSize: "1rem", lineHeight: "1.6" }}
              >
                <strong>Newsify</strong> keeps you updated with the latest news
                in tech, business, sports, and more. A clean interface,
                real-time updates, and accuracy ensure you stay informed
                anywhere, anytime.
              </p>

              <p
                className="lead text-muted"
                style={{ fontSize: "1rem", lineHeight: "1.6" }}
              >
                We focus on providing relevant, timely, and reliable news to
                enhance your experience.
              </p>

              <div className="text-center">
                <h3 className="text-secondary mb-3 font-italic">Our Mission</h3>
                <p className="text-muted" style={{ fontSize: "1rem" }}>
                  To deliver the latest, most relevant news right to your
                  fingertips.
                </p>
              </div>

              <div className="text-center">
                <h3 className="text-secondary mb-3 font-italic">Our Vision</h3>
                <p className="text-muted" style={{ fontSize: "1rem" }}>
                  To be the go-to platform for seamless and trustworthy news
                  anytime, anywhere.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Developer Section */}
      <div className="row justify-content-center mt-5">
        <div className="col-12 col-md-8 text-center">
          <h2
            className="text-primary font-weight-bold"
            style={{ fontSize: "1.8rem" }}
          >
            The Developer Behind Newsify
          </h2>
          <p className="text-info mb-4" style={{ fontSize: "1rem" }}>
            I’m a software developer passionate about creating seamless and
            user-friendly experiences with modern technology.
          </p>
          <div className="row justify-content-center">
            <div className="col-8 col-md-4">
              <div className="card shadow-sm mb-4">
                <img
                  src="myimg.png"
                  alt="Vishal Lokhande"
                  className="card-img-top img-fluid"
                  style={{
                    objectFit: "cover",
                    height: "200px",
                    borderRadius: "10px",
                    boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.1)",
                  }}
                />
                <div className="card-body text-center">
                  <h5
                    className="card-title text-dark font-weight-bold"
                    style={{ fontSize: "1.2rem" }}
                  >
                    Vishal Lokhande
                  </h5>
                  <p
                    className="card-text text-muted"
                    style={{ fontSize: "0.9rem" }}
                  >
                    Software Developer & Creator
                    <br />
                    Email: lvishal108@gmail.com
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* API Info Section */}
      <div className="row justify-content-center mt-5">
        <div className="col-12 col-md-8">
          <div className="card shadow-lg p-4 mb-4 bg-light rounded-lg">
            <div className="card-body">
              <h3 className="text-primary text-center mb-3 font-weight-bold">
                Powered by NewsData API
              </h3>
              <p
                className="text-muted"
                style={{ fontSize: "1rem", lineHeight: "1.6" }}
              >
                <strong>Newsify</strong> uses the <strong>NewsData API</strong>{" "}
                for real-time access to global news, including categories like
                tech, business, and sports, ensuring you stay up-to-date.
              </p>
              <p className="text-muted" style={{ fontSize: "1rem" }}>
                NewsData API provides fast and reliable news coverage to give
                you the latest stories as they break.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
