import React from "react";
import { Link } from "react-router-dom";
import "./home.css";

function Detail() {
  return (
    <div>
      <div id="hero" className=" section hero d-flex align-items-center">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 d-flex flex-column justify-content-center">
              <h1 data-aos="fade-up">Dead Silence</h1>
              <small
                className="text-dark"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                <b>Author: </b>S. A. Barnes <br />
                <b> Description: </b>a SF horror novel in which a woman and her
                crew board a decades-lost luxury cruiser and find the wreckage
                of a nightmare that hasn't yet ended. A GHOST SHIP. A SALVAGE
                CREW. UNSPEAKABLE HORRORS. <br />
                <b>Price: </b>Rp 457,000. <br />
                <b>Stocks: </b>2.
              </small>
              <div data-aos="fade-up" data-aos-delay="600">
                <Link to="/books" className="btn btn-danger text-light mt-3">
                  Back
                </Link>
              </div>
            </div>
            <div className="card">
              <img
                src="https://static.periplus.com/tY4Q8uDt6a3pd37LTvdTRiGSc3kfv9AxSMvBoVva8Zkj0mKPvCDjQPDkz38yLw9CA--"
                alt="..."
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Detail;
