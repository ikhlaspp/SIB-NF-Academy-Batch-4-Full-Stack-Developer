import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  const activeStyle = {
    fontWeight: "bold",
    color: "#0d6efd",
    borderBottom: "2px solid #0d6efd"
  };

  const navLinkStyle = ({ isActive }) => (isActive ? activeStyle : undefined);

  return (
    <nav className="navbar navbar-expand-lg bg-white border-bottom sticky-top py-3 shadow-sm">
      <div className="container">
        <Link className="navbar-brand fw-bold text-primary d-flex align-items-center gap-2" to="/">
          <i className="bi bi-book-half fs-4"></i>
          RuangBaca
        </Link>
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
              <NavLink className="nav-link px-3" style={navLinkStyle} to="/" end>
                Beranda
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link px-3" style={navLinkStyle} to="/books">
                Buku
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link px-3" style={navLinkStyle} to="/team">
                Tim Kami
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link px-3" style={navLinkStyle} to="/contact">
                Kontak
              </NavLink>
            </li>
          </ul>
          <Link to="/" className="btn btn-primary rounded-pill px-4 ms-lg-3 mt-3 mt-lg-0 shadow-sm">
            Mulai Belanja
          </Link>
        </div>
      </div>
    </nav>
  );
}
