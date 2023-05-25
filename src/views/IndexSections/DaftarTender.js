import React from "react";
import DataTable, { createTheme } from "react-data-table-component";
import { Container, Row, Col } from "reactstrap";

createTheme(
  "rogleptopku",
  {
    text: {
      primary: "#FFFFFF",
      secondary: "#2aa198",
    },
    background: {
      default: "transparent",
    },
    context: {
      background: "#cb4b16",
      text: "#FFFFFF",
    },
    divider: {
      default: "#8D8888",
    },
    action: {
      button: "rgba(0,0,0,.54)",
      hover: "rgba(0,0,0,.08)",
      disabled: "rgba(0,0,0,.12)",
    },
  },
  "dark"
);

const columns = [
  {
    name: "Tanggal",
    selector: (row) => row.tanggal,
    width: "20%",
  },
  {
    name: "Nama Pengadaan",
    selector: (row) => row.namatender,
    width: "60%",
  },
  {
    name: "Lokasi",
    selector: (row) => row.lokasi,
  },
];

const data = [
  {
    id: 1,
    tanggal: "03 April 2023",
    namatender: "Pengadaan Leptop untuk UI/UX",
    lokasi: "Surabaya",
  },
  {
    id: 2,
    tanggal: "03 April 2023",
    namatender: "Pengadaan PC untuk UI/UX",
    lokasi: "Surabaya Lagi",
  },
  {
    id: 3,
    tanggal: "13 April 2023",
    namatender: "Pengadaan PC untuk UI/UX Beneran",
    lokasi: "Surabaya Lagi",
  },
  {
    id: 4,
    tanggal: "03 April 2023",
    namatender: "Pengadaan Leptop untuk UI/UX",
    lokasi: "Surabaya",
  },
  {
    id: 5,
    tanggal: "03 April 2023",
    namatender: "Pengadaan PC untuk UI/UX",
    lokasi: "Surabaya Lagi",
  },
  {
    id: 6,
    tanggal: "13 April 2023",
    namatender: "Pengadaan PC untuk UI/UX Beneran",
    lokasi: "Surabaya Lagi",
  },
];

class InfoTender extends React.Component {
  render() {
    return (
      <>
        <section className="section section-lg bg-gradient-default">
          <Container className="pt-lg pb-300">
            <Row className="text-center justify-content-center">
              <Col lg="10">
                <h2 className="display-3 text-white">Pengumuman Pengadaan</h2>
                <p className="lead text-white">
                  informasi daftar pengadaan Barang/Jasa yang saat ini sedang
                  diumumkan sehingga Penyedia Barang/Jasa yang berminat dapat
                  mendaftar pada pengadaan tersebut dengan melakukan login
                  terlebih dahulu
                </p>
                <DataTable
                  title="List Tender"
                  columns={columns}
                  data={data}
                  theme="rogleptopku"
                  pagination
                />
              </Col>
            </Row>
            <Row className="row-grid mt-5"></Row>
          </Container>

          {/* SVG separator */}
          <div className="separator separator-bottom separator-skew zindex-100">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon className="fill-white" points="2560 0 2560 100 0 100" />
            </svg>
          </div>
        </section>
      </>
    );
  }
}

export default InfoTender;
