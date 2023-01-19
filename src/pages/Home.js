import React from "react";
import { Link } from "react-router-dom";
import "./home.css";

function Home() {
  return (
    <div>
      <div id="hero" className=" section hero d-flex align-items-center">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 d-flex flex-column justify-content-center">
              <h1 data-aos="fade-up">
                Welcome to, <br />
                Ave BookStore
              </h1>
              <h3 data-aos="fade-up" data-aos-delay="400">
                Fisik Hanyalah Fatamorgana Yang Akan Lenyap Ditelan Usia.
              </h3>
              <div data-aos="fade-up" data-aos-delay="600">
                <Link to="/books" className="btn btn-danger text-light">
                  Show Books
                </Link>
              </div>
            </div>
            <div
              className="col-lg-6 hero-img"
              data-aos="zoom-out"
              data-aos-delay="200"
            >
              <img src="../img/pp.png" className="img-fluid" alt="" />
            </div>
          </div>
        </div>
      </div>
      <h1>Pilihan Editor</h1>
      <hr />
      <div className="container books">
        <div className="row">
          <div className="col-md-3 col-sm-6 item">
            <div className="card item-card card-block">
              <h4 className="card-title text-right">
                <i className="material-icons text-dark">Rp 457,000</i>
              </h4>
              <img
                src="https://static.periplus.com/tY4Q8uDt6a3pd37LTvdTRiGSc3kfv9AxSMvBoVva8Zk84c5ovBRXqjdUGCQPguYGw--"
                alt="Photo of sunset"
              />
              <h5 className="item-card-title mt-3 mb-3 text-dark">
                <b>Dead Silence</b>
              </h5>
              <p className="card-text text-dark">
                <b>Author: </b>S.A Barnes <br />
                <b>Tahun Rilis: </b>8 Februari 2022 <br />
                <small style={{ color: "gray" }}>Hardcover</small>
              </p>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 item">
            <div className="card item-card card-block">
              <h4 className="card-title text-right">
                <i className="material-icons text-dark">Rp 288,000</i>
              </h4>
              <img
                src="https://static.periplus.com/qHLcYrfYPOm7G7VV.pH2oiCvrA82EFb_YbmwTZ7lSVRflgGAh44Oj0OF59OJsey1Q--"
                alt="Photo of sunset"
              />
              <h5 className="item-card-title mt-3 mb-3 text-dark">
                <b>Hunt The Stars</b>
              </h5>
              <p className="card-text text-dark">
                <b>Author: </b>Jessie Mihalik <br />
                <b>Tahun Rilis: </b>1 Februari 2022 <br />
                <small style={{ color: "gray" }}>Paperback</small>
              </p>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 item">
            <div className="card item-card card-block">
              <h4 className="card-title text-right">
                <i className="material-icons text-dark">Rp 429,000</i>
              </h4>
              <img
                src="https://static.periplus.com/rpfZSccDhJnqFTaQUijjceZD9KsBJlqdfkZa5VvwOdvIYWLAo0fb8ZL7ke53FPaLA--"
                alt="Photo of sunset"
              />
              <h5 className="item-card-title mt-3 mb-3 text-dark">
                <b>The Hacienda</b>
              </h5>
              <p className="card-text text-dark">
                <b>Author: </b>Isabel Cañas <br />
                <b>Tahun Rilis: </b>3 Mei 2022 <br />
                <small style={{ color: "gray" }}>Hardcover</small>
              </p>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 item">
            <div className="card item-card card-block">
              <h4 className="card-title text-right">
                <i className="material-icons text-dark">Rp 132,300</i>
              </h4>
              <img
                src="https://static.periplus.com/upVrb5EahmuPH5qPmwpjSOM3ueTiiil3svlK2npQwXq0c2_Tj2lLRV_EfADUwm1xQ--"
                alt="Photo of sunset"
              />
              <h5 className="item-card-title mt-3 mb-3 text-dark">
                <b>Gallant</b>
              </h5>
              <p className="card-text text-dark">
                <b>Author: </b>V.E Schwab <br />
                <b>Tahun Rilis: </b>1 Maret 2022 <br />
                <small style={{ color: "gray" }}>Paperback</small>
              </p>
            </div>
          </div>
        </div>
      </div>
      <h1>Special Sale</h1>
      <hr />
      <div className="container books">
        <div className="row">
          <div className="col-md-3 col-sm-6 item">
            <div className="card item-card card-block">
              <h4 className="card-title text-right">
                <i className="material-icons text-dark">Rp 68,500</i>
              </h4>
              <img
                src="https://static.periplus.com/vekXuHKY0xiSkYdpkGHkAB_Ywf7MGNSvNi3lIOIwiDpfTVYMRn4RSfWPiv7J2OQGg--"
                alt="Photo of sunset"
              />
              <h5 className="item-card-title mt-3 mb-3 text-dark">
                <b>Tap to Tidy</b>
              </h5>
              <p className="card-text text-dark">
                <b>Author: </b>Solomon, Stacey <br />
                <b>Tahun Rilis: </b> 4 Maret 2021 <br />
                <small style={{ color: "gray" }}>Hardcover</small>
              </p>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 item">
            <div className="card item-card card-block">
              <h4 className="card-title text-right">
                <i className="material-icons text-dark">Rp 98,000</i>
              </h4>
              <img
                src="https://static.periplus.com/k3KbZcfR80mM2dhKnJlomNTkSoOF0KV4weDmI29Jh.cGNJdEZPJM4a39vTSd8yvVQ--"
                alt="Photo of sunset"
              />
              <h5 className="item-card-title mt-3 mb-3 text-dark">
                <b>Creativity</b>
              </h5>
              <p className="card-text text-dark">
                <b>Author: </b>Cleese, John <br />
                <b>Tahun Rilis: </b>1972 <br />
                <small style={{ color: "gray" }}>Paperback</small>
              </p>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 item">
            <div className="card item-card card-block">
              <h4 className="card-title text-right">
                <i className="material-icons text-dark">Rp 118,000</i>
              </h4>
              <img
                src="https://static.periplus.com/tpON.DSJYhAf48ydp4PSj4d1962.wNwOHv6FENljinxhV4_kbzpjfaUre1QijGxJA--"
                alt="Photo of sunset"
              />
              <h5 className="item-card-title mt-3 mb-3 text-dark">
                <b>Human Origins</b>
              </h5>
              <p className="card-text text-dark">
                <b>Author: </b>New Scientist <br />
                <b>Tahun Rilis: </b>21 Maret 2018 <br />
                <small style={{ color: "gray" }}>Hardcover</small>
              </p>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 item">
            <div className="card item-card card-block">
              <h4 className="card-title text-right">
                <i className="material-icons text-dark">Rp 59,500</i>
              </h4>
              <img
                src="https://static.periplus.com/upVrb5EahmuPH5qPmwpjSOM3ueTiiil3svlK2npQwXq0c2_Tj2lLRV_EfADUwm1xQ--"
                alt="Photo of sunset"
              />
              <h5 className="item-card-title mt-3 mb-3 text-dark">
                <b>Neglected</b>
              </h5>
              <p className="card-text text-dark">
                <b>Author: </b>Glass, Cathy <br />
                <b>Tahun Rilis: </b>3 Februari 2022 <br />
                <small style={{ color: "gray" }}>Paperback</small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
