import React from "react";

const Footer = () => {
  return (
    <div className="container-fluid">
      <div className="row p-4 text-bg-dark ">
        <div className="col-xs-12 col-md-6 col-lg-3">
          <p className="h3">
            Made With by
            <i className="bi bi-heart-fill m-1 text-danger"></i>
            Cesar Ospina
          </p>
        </div>
        <div className="col-xs-12 col-md-6 col-lg-3">
          <a
            href={"https://www.linkedin.com/in/cesarospina92/"}
            rel="noopener noreferrer"
            target="_blank"
          >
            Linkedin
          </a>
        </div>
        <div className="col-xs-12 col-md-6 col-lg-3">
          <a
            href={"https://github.com/capinedaos"}
            rel="noopener noreferrer"
            target="_blank"
          >
            GitHub
          </a>
        </div>
        <div className="col-xs-12 col-md-6 col-lg-3">
          <a
            href={"https://api.whatsapp.com/send?phone=573154039956"}
            rel="noopener noreferrer"
            target="_blank"
          >
            {/* <img src={logo} alt="" /> */}
            WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
