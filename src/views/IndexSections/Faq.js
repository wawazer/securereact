import React from "react";

class FaqSecure extends React.Component {
  render() {
    return (
      <>
        <section id="faq" className="faq">
          <div className="container">
            <div className="section-title" data-aos="zoom-out">
              <h2>F.A.Q</h2>
              <p>Frequently Asked Questions</p>
            </div>
            <ul className="faq-list">
              <li>
                <div
                  data-bs-toggle="collapse"
                  className="collapsed question"
                  href="#faq1"
                >
                  Bagaimana cara melakukan validasi DRP?
                  <i className="bi bi-chevron-down icon-show" />
                  <i className="bi bi-chevron-up icon-close" />
                </div>
                <div id="faq1" className="collapse" data-bs-parent=".faq-list">
                  <p>Secara Offline :</p>
                  <ul>
                    <li>
                      a. Silakan datang ke unit PBJ Pelindo 3 dengan membawa
                      dokumen asli sesuai dengan list dokumen yang ada pada
                      email registrasi.
                    </li>
                    <li>
                      b. Validator PBJ akan melakukan validasi keaslian dokumen
                    </li>
                    <li>
                      c. Apabila validasi berhasil akan terkirim email bahwa
                      perusahaan Anda telah tervalidasi
                    </li>
                    <li>d. Silakan melakukan login pada eproc.pelindo.co.id</li>
                    <li>
                      e. Pertama akan muncul Pakta Integritas, silakan ceklis
                      semua opsi untuk melanjutkan proses.
                    </li>
                  </ul>
                  <p />
                  <p>Secara Online :</p>
                  <ul>
                    <li>
                      a. Silakan kirim soft copy dokumen asli perusahaan ke
                      email unit pengadaan sesuai dengan list dokumen yang ada
                      pada email registrasi.
                    </li>
                    <li>
                      b. PIC kami akan menghubungi anda untuk melakukan validasi
                      secara online baik melalui zoom atau aplikasi lainnya.{" "}
                    </li>
                    <li>
                      c. Apabila validasi berhasil akan terkirim email bahwa
                      perusahaan Anda telah tervalidasi
                    </li>
                    <li>d. Silakan melakukan login pada eproc.pelindo.co.id</li>
                    <li>
                      e. Pertama akan muncul Pakta Integritas, silakan ceklis
                      semua opsi untuk melanjutkan proses.
                    </li>
                  </ul>
                  <p />
                </div>
              </li>
              <li>
                <div
                  data-bs-toggle="collapse"
                  href="#faq2"
                  className="collapsed question"
                >
                  Bagaimana cara mendaftar menjadi Daftar Rekanan Perusahaan
                  Pelindo?
                  <i className="bi bi-chevron-down icon-show" />
                  <i className="bi bi-chevron-up icon-close" />
                </div>
                <div id="faq2" className="collapse" data-bs-parent=".faq-list">
                  <p>
                    Pertama Klik menu Registrasi. Kemudian Klik menu Pendaftaran
                    DRP. Isi Form Registrasi. Apabila registrasi berhasil akan
                    muncul halaman yang menginformasikan nomor registrasi.
                    Selanjutnya Lakukan Validasi Online / Offline dengan
                    menunjukan dokumen asli sesuai dengan daftar dokumen yang
                    ada pada email registrasi.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </section>
      </>
    );
  }
}

export default FaqSecure;
