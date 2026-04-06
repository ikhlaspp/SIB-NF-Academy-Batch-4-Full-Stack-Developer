import { useState } from 'react';
import initialBooks from '../Utils/books';

export default function Book() {
  const [books, setBooks] = useState(initialBooks);

  const handleAddBook = () => {
    const newBook = {
      id: books.length + 1,
      title: `Buku Baru ${books.length + 1}`,
      author: "Penulis Anonim",
      year: new Date().getFullYear(),
      description: "Deskripsi singkat mengenai buku ini yang ditambahkan secara dinamis.",
      image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&w=800&q=80"
    };
    setBooks([...books, newBook]);
  };

  return (
    <div className="container py-5">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2>Daftar Buku</h2>
        <button className="btn btn-primary" onClick={handleAddBook}>
          <i className="bi bi-plus-lg me-2"></i>Tambah Data
        </button>
      </div>
      <div className="row g-4">
        {books.map((book) => (
          <div key={book.id} className="col-12 col-md-6 col-lg-4">
            <div className="card h-100 shadow-sm border-0">
              <img src={book.image} className="card-img-top" alt={book.title} style={{ height: '200px', objectFit: 'cover' }} />
              <div className="card-body">
                <h5 className="card-title fw-bold">{book.title}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{book.author} - {book.year}</h6>
                <p className="card-text text-secondary mt-3">{book.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
