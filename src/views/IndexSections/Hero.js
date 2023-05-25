import React from "react";
import "assets/css/stylesbasic.css";

import { Button, Container, Row, Col } from "reactstrap";

class Hero extends React.Component {
  render() {
    return (
      // <>
      <div className="position-relative">
        <section className="section section-hero section-shaped">
          <div className="shape shape-style-1 shape-default">
            <span className="span-150" />
            <span className="span-50" />
            <span className="span-50" />
            <span className="span-75" />
            <span className="span-100" />
            <span className="span-75" />
            <span className="span-50" />
            <span className="span-100" />
            <span className="span-50" />
            <span className="span-100" />
          </div>
          <Container className="shape-container d-flex align-items-center py-lg">
            <div className="col px-0">
              <Row className="align-items-center justify-content-center">
                <Col className="text-center" lg="12">
                  <img
                    alt="..."
                    className="img-fluid"
                    src={require("assets/img/brand/logosecure.png")}
                    style={{ width: "200px" }}
                  />
                  <p className="lead text-white">
                    Secure adalah e-Procurement di lingkungan PT Pelindo
                    (Persero) untuk sarana pengadaan barang/jasa, informasi
                    pengadaan antar Unit perusahaan, sesuai dengan Pedoman
                    pengadaan barang/jasa yang berlaku di PT Pelindo (Persero)
                    yang dilakukan secara online/elektronik dengan menggunakan
                    fasilitas aplikasi Secure.
                  </p>
                  <div className="btn-wrapper mt-5">
                    <Button
                      className="btn-white btn-icon mb-3 mb-sm-0"
                      color="default"
                      href=""
                      size="lg"
                    >
                      <span className="btn-inner--icon mr-1">
                        <i className="ni ni-cloud-download-95" />
                      </span>
                      <span className="btn-inner--text">Download Panduan</span>
                    </Button>{" "}
                    <Button
                      className="btn-icon mb-3 mb-sm-0"
                      color="github"
                      href=""
                      size="lg"
                      target="_blank"
                    >
                      <span className="btn-inner--icon mr-1">
                        <i className="fa fa-users" />
                      </span>
                      <span className="btn-inner--text">
                        <span className="text-[#0000] mr-1">
                          Register Vendor
                        </span>
                      </span>
                    </Button>
                  </div>
                  <div className="mt-5"></div>
                </Col>
              </Row>
            </div>
          </Container>
          {/* SVG separator */}
        </section>
        <section
          id="hero"
          className="d-flex flex-column justify-content-end align-items-center"
        >
          <div
            id="heroCarousel"
            data-bs-interval={5000}
            className="carousel carousel-fade"
            data-bs-ride="carousel"
          ></div>
          <svg
            className="hero-waves"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 24 150 28 "
            preserveAspectRatio="none"
          >
            <defs>
              <path
                id="wave-path"
                d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
              ></path>
            </defs>
            <g className="wave1">
              <use
                xlinkHref="#wave-path"
                x={50}
                y={3}
                fill="rgba(255,255,255, .1)"
              ></use>
            </g>
            <g className="wave2">
              <use
                xlinkHref="#wave-path"
                x={50}
                y={0}
                fill="rgba(255,255,255, .2)"
              ></use>
            </g>
            <g className="wave3">
              <use xlinkHref="#wave-path" x={50} y={9} fill="#fff"></use>
            </g>
          </svg>
        </section>
      </div>
      // </>
    );
  }
}

export default Hero;
