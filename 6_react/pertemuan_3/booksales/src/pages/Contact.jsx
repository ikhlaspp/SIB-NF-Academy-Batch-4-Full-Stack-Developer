export default function Contact() {
  return (
    <section id="contact" className="py-5 bg-white position-relative flex-grow-1">
      <div className="container py-4">
        <div className="row g-5">
          <div className="col-lg-5 pe-lg-5">
            <h6 className="text-primary text-uppercase fw-bold mb-2">Bantuan & Dukungan</h6>
            <h2 className="display-6 fw-bold mb-4">Butuh Bantuan?</h2>
            <p className="text-secondary mb-5 fs-5">
              Punya pertanyaan soal stok buku incaranmu? Hubungi kami langsung.
            </p>
            <div className="d-flex flex-column gap-4">
              <div className="d-flex align-items-center gap-4 p-3 rounded-3 bg-light border border-light">
                <div className="bg-primary bg-opacity-10 text-primary p-3 rounded-circle">
                  <i className="bi bi-geo-alt-fill fs-4"></i>
                </div>
                <div>
                  <h5 className="fw-bold mb-1">Kantor Pusat</h5>
                  <p className="text-secondary mb-0">Jl. Jenderal Sudirman No. 12<br />Jakarta Selatan, 12190</p>
                </div>
              </div>
              <div className="d-flex align-items-center gap-4 p-3 rounded-3 bg-light border border-light">
                <div className="bg-success bg-opacity-10 text-success p-3 rounded-circle">
                  <i className="bi bi-whatsapp fs-4"></i>
                </div>
                <div>
                  <h5 className="fw-bold mb-1">WhatsApp</h5>
                  <p className="text-secondary mb-0">+62 811-2233-4455</p>
                </div>
              </div>
              <div className="d-flex align-items-center gap-4 p-3 rounded-3 bg-light border border-light">
                <div className="bg-info bg-opacity-10 text-info p-3 rounded-circle">
                  <i className="bi bi-envelope-at-fill fs-4"></i>
                </div>
                <div>
                  <h5 className="fw-bold mb-1">Email Resmi</h5>
                  <p className="text-secondary mb-0">halo@ruangbaca.id</p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-7">
            <div className="card border-0 shadow-lg rounded-4">
              <div className="card-header bg-primary text-white p-4 text-center border-0">
                <h3 className="fw-bold mb-1 mt-2">Kirim Pesan</h3>
                <p className="mb-2 opacity-75">Tim kami akan membalas via Email</p>
              </div>
              <div className="card-body p-4 p-lg-5">
                <form>
                  <div className="row g-4">
                    <div className="col-md-6"><div className="form-floating">
                      <input type="text" className="form-control" id="name" placeholder="Nama" />
                      <label htmlFor="name">Nama Lengkap</label></div>
                    </div>
                    <div className="col-md-6"><div className="form-floating">
                      <input type="email" className="form-control" id="email" placeholder="Email" />
                      <label htmlFor="email">Alamat Email</label></div>
                    </div>
                    <div className="col-12"><div className="form-floating">
                      <select className="form-select" id="topic" defaultValue="1">
                        <option value="1">Pertanyaan Umum</option>
                        <option value="2">Masalah Pesanan</option>
                        <option value="3">Kerja Sama</option>
                      </select>
                      <label htmlFor="topic">Topik</label></div>
                    </div>
                    <div className="col-12"><div className="form-floating">
                      <textarea className="form-control" id="message" placeholder="Pesan" style={{ height: '120px' }}></textarea>
                      <label htmlFor="message">Tulis pesan Anda...</label></div>
                    </div>
                    <div className="col-12 mt-4 text-end">
                      <button type="button" className="btn btn-primary btn-lg rounded-pill px-5 fw-bold shadow-sm">
                        <i className="bi bi-send-fill me-2"></i>Kirim Pesan
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
