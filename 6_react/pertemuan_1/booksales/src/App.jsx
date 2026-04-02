import './App.css'

const teamMembers = [
  {
    name: 'Andi Saputra',
    role: 'Founder & CEO',
    image:
      'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=500&q=80',
    bio: 'Penggemar literatur klasik yang bercita-cita membuat buku dapat diakses siapa saja dengan mudah.',
    socials: ['bi-twitter', 'bi-linkedin', 'bi-github']
  },
  {
    name: 'Siti Aisyah',
    role: 'Chief Content Officer',
    image:
      'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=500&q=80',
    bio: 'Menyusun kurasi buku-buku terbaik setiap bulan agar pelanggan selalu mendapatkan bacaan berkualitas.',
    socials: ['bi-instagram', 'bi-linkedin']
  },
  {
    name: 'Budi Santoso',
    role: 'Head of Customer Success',
    image:
      'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=500&q=80',
    bio: 'Memastikan setiap pesanan sampai di tangan pelanggan dengan cepat, aman, dan tanpa kendala.',
    socials: ['bi-facebook', 'bi-twitter']
  },
  {
    name: 'Maya Indah',
    role: 'Marketing Manager',
    image:
      'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=500&q=80',
    bio: 'Kreator di balik berbagai promo menarik dan diskon besar-besaran untuk para pecinta buku.',
    socials: ['bi-instagram', 'bi-tiktok', 'bi-linkedin']
  }
]

function App() {
  return (
    <div className="bg-light min-vh-100">
      <nav className="navbar navbar-expand-lg bg-white border-bottom sticky-top py-3 shadow-sm">
        <div className="container">
          <a className="navbar-brand fw-bold text-primary d-flex align-items-center gap-2" href="#home">
            <i className="bi bi-book-half fs-4"></i>
            RuangBaca
          </a>
          <button
            className="navbar-toggler border-0 shadow-none"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#mainNav"
            aria-controls="mainNav"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="mainNav">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 fw-medium">
              <li className="nav-item">
                <a className="nav-link px-3 active text-primary" href="#home">Beranda</a>
              </li>
              <li className="nav-item">
                <a className="nav-link px-3" href="#team">Tim Kami</a>
              </li>
              <li className="nav-item">
                <a className="nav-link px-3" href="#contact">Kontak</a>
              </li>
            </ul>
            <a href="#katalog" className="btn btn-primary rounded-pill px-4 ms-lg-3 mt-3 mt-lg-0 shadow-sm">
              Mulai Belanja
            </a>
          </div>
        </div>
      </nav>

      <section id="home" className="hero-section py-5 py-lg-6 bg-white overflow-hidden">
        <div className="container">
          <div className="row align-items-center g-4 g-lg-5 pt-4">
            <div className="col-lg-6 position-relative z-1 text-center text-lg-start">
              <div className="badge bg-primary bg-opacity-10 text-primary rounded-pill px-3 py-2 mb-4 fw-semibold text-wrap">
                <i className="bi bi-star-fill text-warning me-2"></i>Toko Buku Online Terlaris di Indonesia
              </div>
              <h1 className="display-4 fw-bold mb-4 text-dark" style={{ lineHeight: '1.2' }}>
                Buka Jendela Dunia, <br /><span className="text-primary">Temukan Ceritamu!</span>
              </h1>
              <p className="lead text-secondary mb-5 pe-lg-4 fs-5">
                RuangBaca menyediakan puluhan ribu judul buku fiksi, non-fiksi, hingga edukasi. Dapatkan diskon terbaik tiap akhir pekan.
              </p>
              <div className="d-flex flex-wrap gap-3 justify-content-center justify-content-lg-start">
                <button type="button" className="btn btn-primary btn-lg rounded-pill px-4 shadow-sm">
                  <i className="bi bi-search me-2"></i>Cari Buku
                </button>
                <button type="button" className="btn btn-outline-secondary btn-lg rounded-pill px-4 bg-white">
                  <i className="bi bi-tags me-2"></i>Promo Hari Ini
                </button>
              </div>
            </div>
            <div className="col-lg-6 position-relative mt-5 mt-lg-0">
              <img
                src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=1200&q=80"
                alt="Orang membaca buku"
                className="img-fluid rounded-4 shadow-lg border border-4 border-white"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="team" className="py-5 bg-light">
        <div className="container py-4">
          <div className="text-center mb-5 mx-auto" style={{ maxWidth: '600px' }}>
            <h6 className="text-primary text-uppercase fw-bold mb-2">Orang-orang Hebat</h6>
            <h2 className="display-6 fw-bold mb-3">Kenali Tim Kami</h2>
            <p className="text-secondary fs-5">
              Berangkat dari kecintaan yang sama terhadap literasi, kami bertekad memajukan budaya membaca Indonesia.
            </p>
          </div>
          <div className="row g-4 justify-content-center">
            {teamMembers.map((member) => (
              <div className="col-md-6 col-lg-3" key={member.name}>
                <div className="card h-100 border-0 shadow-sm text-center rounded-4 overflow-hidden pt-4">
                  <div className="card-body p-4">
                    <img
                      src={member.image}
                      className="rounded-circle object-fit-cover shadow-sm mb-4 border border-3 border-white"
                      alt={member.name}
                      style={{ width: '120px', height: '120px' }}
                    />
                    <h5 className="card-title fw-bold mb-1">{member.name}</h5>
                    <p className="text-primary fw-medium small mb-3">{member.role}</p>
                    <p className="card-text text-secondary opacity-75 small">"{member.bio}"</p>
                  </div>
                  <div className="card-footer bg-white border-0 pb-4 d-flex justify-content-center gap-3">
                    {member.socials.map((social, index) => (
                      <a href="#" key={index} className="text-secondary opacity-50 text-decoration-none">
                        <i className={`bi ${social} fs-5`}></i>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-5 bg-white position-relative">
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

      <footer className="bg-dark text-white py-4 mt-auto">
        <div className="container text-center">
          <p className="mb-0 text-white-50"><small>&copy; 2024 RuangBaca. All rights reserved.</small></p>
        </div>
      </footer>
    </div>
  )
}

export default App

