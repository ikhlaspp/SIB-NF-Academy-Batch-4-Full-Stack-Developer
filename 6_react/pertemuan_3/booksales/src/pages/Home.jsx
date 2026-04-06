import { Link } from 'react-router-dom';
import books from '../Utils/books';

export default function Home() {
  return (
    <>
      <section id="home" className="hero-section py-5 py-lg-6 bg-white overflow-hidden flex-grow-1">
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
                <Link to="/books" className="btn btn-primary btn-lg rounded-pill px-4 shadow-sm">
                  <i className="bi bi-search me-2"></i>Semua Buku
                </Link>
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

      <section className="py-5 bg-light">
        <div className="container">
          <h2 className="text-center fw-bold mb-5">Rekomendasi Buku</h2>
          <div className="row g-4">
            {books.slice(0, 3).map((book) => (
              <div key={book.id} className="col-12 col-md-6 col-lg-4">
                <div className="card h-100 shadow-sm border-0">
                  <img src={book.image} className="card-img-top" alt={book.title} style={{ height: '200px', objectFit: 'cover' }} />
                  <div className="card-body">
                    <h5 className="card-title fw-bold">{book.title}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">{book.author}</h6>
                    <p className="card-text text-secondary mt-3 text-truncate">{book.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-5">
            <Link to="/books" className="btn btn-outline-primary mt-3 px-4 py-2">Lihat Selengkapnya</Link>
          </div>
        </div>
      </section>
    </>
  );
}
