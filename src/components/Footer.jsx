import React from "react";

function Footer() {
  return (
    <div className="footer">
      <footer className="text-center text-lg-start bg-body-tertiary text-muted">
        <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom"></section>

        <section className="">
          <div className="container text-center text-md-start mt-5">
            <div className="row mt-3">
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">
                  <i className="fas fa-gem me-3"></i>Rightmove
                </h6>
                <p>
                Rightmove.co.uk was formed in 2000 by the top four corporate estate agencies at the time: Countrywide, Connells, Halifax and Royal and Sun Alliance, and was initially free to list with charging introduced in 2002.
                </p>
              </div>

              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Social Media</h6>
                <p>
                  <a href="#!" className="text-reset">
                    Facebook
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Twitter
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Youtube
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Linkedin
                  </a>
                </p>
              </div>

              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4 d-none d-sm-block">
                <h6 className="text-uppercase fw-bold mb-4">Useful Links</h6>
                <p>
                  <a href="#!" className="text-reset">
                    Pricing
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Booking
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Help
                  </a>
                </p>
              </div>

              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                <p>
                  <i className="fas fa-home me-3"></i> London, NY 10012, US
                </p>
                <p>
                  <i className="fas fa-envelope me-3"></i>
                  info@rightmove.com
                </p>
                <p>
                  <i className="fas fa-phone me-3"></i> + 44 234 567 88
                </p>
                <p>
                  <i className="fas fa-print me-3"></i> + 44 234 567 89
                </p>
              </div>
            </div>
          </div>
        </section>

        <div
          className="text-center p-4"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
        >
          © 2024 Copyright:
          <a className="text-reset fw-bold">
            {" "}
            rightmove
          </a>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
