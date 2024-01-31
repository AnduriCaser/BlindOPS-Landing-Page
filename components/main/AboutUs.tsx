import React from "react";

const AboutUs = () => {
  return (
    <section className="flex items-center h-[700px]">
      <div className="max-w-6xl py-4 mx-auto lg:py-6 md:px-6">
        <div className="flex flex-wrap ">
          <div className="w-full px-6 mb-10 lg:mb-0 ">
            <div
              className="pl-4 mb-6 border-l-4 border-cyan-500"
              id="about-us"
            >
              <span className="text-sm uppercase text-gray-200">
                Who we are?
              </span>
              <h1 className="mt-2 text-3xl md:text-5xl text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
                About Us
              </h1>
            </div>
            <p className="mb-6 text-base text-gray-200">
              Welcome to Syndore, a leading provider of cybersecurity solutions.
              We are a team of dedicated security experts and technology
              enthusiasts, committed to helping organizations secure their
              digital assets. At Syndore, we believe that cybersecurity is not
              just about technology, it’s about people. That’s why we are
              dedicated to creating solutions that are easy to use and
              understand, empowering organizations of all sizes to improve their
              security posture. Our flagship product, Sucosh, is a cutting-edge
              Static Application Security Testing (SAST) tool that makes it easy
              to scan your codebase for vulnerabilities and improve the security
              of your applications. We are constantly working to improve Sucosh
              and add new features, ensuring that it remains at the forefront of
              SAST technology. In addition to Sucosh, we offer a range of
              services and solutions designed to help organizations improve
              their cybersecurity posture. Our team of experts is available to
              provide guidance and support, ensuring that you have the tools and
              resources you need to stay secure. At Syndore, we are passionate
              about cybersecurity and committed to helping organizations stay
              safe in the digital age. We would be honored to have the
              opportunity to work with you and help you achieve your security
              goals. Contact us today to learn more.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
