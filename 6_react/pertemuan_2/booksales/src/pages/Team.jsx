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
];

export default function Team() {
  return (
    <section id="team" className="py-5 bg-light flex-grow-1">
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
  );
}
