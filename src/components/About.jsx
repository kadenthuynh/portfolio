export default function About() {
  return (
    <section id="about">
      <div className="container">
        <p className="sec-label">About</p>
        <div className="about-grid">
          <div className="about-text">
            <p>
              I'm a Political Science and Philosophy student at UC Santa Barbara with a 3.87 GPA, focused on political theory, governance, and the intersection of law and ethics. My academic path reflects a deliberate interest in how institutions shape societies — and how individuals can shape institutions.
            </p>
            <p>
              Outside the classroom, I've led youth organizations, competed in parliamentary debate across California, and co-founded a cross-border fundraiser for Colombian youth programs. I'm trilingual in English, Spanish, and Vietnamese — a reflection of the cultural spaces I've moved through growing up in San Diego.
            </p>
            <p>
              I also build things. The projects on this site come from genuine curiosity: I wanted tools that didn't exist, so I built them. That instinct — to move from problem to solution — is what connects my academic work, my leadership, and my side projects.
            </p>
          </div>
          <div className="about-stats">
            <div className="stat-item">
              <div className="stat-value">3.87</div>
              <div className="stat-label">GPA at UCSB</div>
            </div>
            <div className="stat-item">
              <div className="stat-value">3</div>
              <div className="stat-label">Languages spoken</div>
            </div>
            <div className="stat-item">
              <div className="stat-value">3</div>
              <div className="stat-label">Countries studied abroad</div>
            </div>
            <div className="stat-item">
              <div className="stat-value">5+</div>
              <div className="stat-label">Years in leadership roles</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
