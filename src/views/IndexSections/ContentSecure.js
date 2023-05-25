import React from "react";

// reactstrap components
import { Button, Container, Row, Col, Badge } from "reactstrap";

class BasicElements extends React.Component {
  render() {
    return (
      <>
        <section className="section section-lg">
          <Container>
            <Row className="row-grid align-items-center">
              <Col className="order-md-2" md="6">
                <img
                  alt="..."
                  className="img-fluid floating"
                  src={require("assets/img/theme/masHelmyVasa.png")}
                />
              </Col>
              <Col className="order-md-1" md="6">
                <div className="pr-md-5">
                  <h3>Pengantar</h3>
                  <p>
                    Secure adalah gerbang untuk masuk ke aplikasi e-Procurement
                    dan di dalamnya terdapat informasi mengenai pengadaan
                    barang/jasa, pengumuman pengadaan, hasil pengadaan dan
                    Daftar Penyedia Terseleksi (DPT), media komunikasi antar
                    Pengguna aplikasi serta dapat dipakai sebagai sarana untuk
                    menampung berbagai macam promosi bagi semua Pengguna Secure.
                  </p>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </>
    );
  }
}

export default BasicElements;
