import { useState, useEffect } from "react";
import "./index.css";

// Navigation Component
function Navigation() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={scrolled ? "scrolled" : ""}>
      <div className="logo">Siddhesh Ram</div>
      <div className="nav-links">
        <a href="#about">About</a>
        <a href="#work">Work</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  );
}

// Hero Component
function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <p className="hero-label">AI/ML Engineer & Data Analyst</p>
        <h1>
          Building intelligent
          <br />
          systems with
          <br />
          <span className="emphasis">purpose.</span>
        </h1>
        <p className="hero-description">
          Parallel multi-disciplinary student pursuing CSE (AI & ML) at SRM Easwari 
          and Data Science at IIT Madras, while working as Data Analyst Intern at RR Donnelley.
        </p>
        <div className="cta-group">
          <a href="#work" className="cta-primary">View Work</a>
          <a href="mailto:siddheshramk@gmail.com" className="cta-secondary">Get In Touch</a>
        </div>
      </div>
    </section>
  );
}

// About Component
function About() {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="about-grid">
          <div className="about-content">
            <span className="section-label">About Me</span>
            <h2 className="section-title">Operating at the intersection of data, ML, and real impact.</h2>
          </div>
          <div className="about-text">
            <p>
              I'm a parallel multi-disciplinary student with a bias for building—pursuing CSE (Artificial Intelligence 
              and Machine Learning) at SRM Easwari and the IIT Madras BS in Data Science & Applications (Diploma level) 
              while working as a Data Analyst Intern at RR Donnelley. This concurrent track keeps me hands-on with real 
              data, real stakeholders, and real impact.
            </p>
            <p>
              I operate at the intersection of data engineering, analytics, and applied ML: cleaning and modeling data 
              with SQL/Python, building KPI dashboards in Power BI/Tableau, and operationalizing models across cloud 
              and on-prem stacks using pandas, NumPy, scikit-learn, XGBoost, spaCy, and TensorFlow/PyTorch.
            </p>
            <p>
              My focus is on reliability—validated pipelines, clear metric definitions, and reproducible results. 
              I'm driven by measurable outcomes: reducing turnaround time, lowering defect rates, improving SLA adherence, 
              and translating messy data into decision-ready insights.
            </p>
          </div>
        </div>

        <div className="education-cards">
          <div className="edu-card">
            <h3>SRM Easwari Engineering College</h3>
            <p className="edu-degree">B.E. Computer Science (AI & ML)</p>
            <p className="edu-gpa">CGPA: 8.21 / 10</p>
          </div>
          <div className="edu-card">
            <h3>IIT Madras</h3>
            <p className="edu-degree">BS Data Science & Applications</p>
            <p className="edu-gpa">CGPA: 7.88 / 10</p>
          </div>
        </div>
      </div>
    </section>
  );
}

// Work/Achievements Component
function Work() {
  const achievements = [
    {
      title: "NVIDIA cuOpt Bug Discovery",
      description: "Discovered and reported a critical validation bug in NVIDIA's cuOpt Cloud API causing GPU crashes. Officially acknowledged as Bug ID 5525189.",
      link: "https://www.linkedin.com/pulse/reported-validation-bug-nvidia-cuopt-cloud-api-solver-siddhesh-ram-e7ykc",
      year: "2025"
    },
    {
      title: "Data Analyst at RR Donnelley",
      description: "Performing data cleaning, preprocessing, and visualization. Building automated dashboards and reports for strategic decision-making.",
      year: "2025"
    },
    {
      title: "Joint Marketing Head - CSE (AI & ML)",
      description: "Leading marketing initiatives for the department at Easwari Engineering College. Coordinating events and strategizing outreach efforts.",
      year: "2024-2025"
    },
    {
      title: "IIT Madras Data Science Program",
      description: "Pursuing BS in Data Science with focus on machine learning, data visualization, and statistical analysis. Currently at Diploma level.",
      link: "https://ds.study.iitm.ac.in/student/23F3000704",
      year: "2023-Present"
    }
  ];

  return (
    <section id="work" className="work-section">
      <div className="container">
        <span className="section-label">Experience & Recognition</span>
        <h2 className="section-title">Selected Work</h2>
        
        <div className="work-list">
          {achievements.map((item, idx) => (
            <div key={idx} className="work-item">
              <div className="work-year">{item.year}</div>
              <div className="work-content">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                {item.link && (
                  <a href={item.link} target="_blank" rel="noopener noreferrer" className="work-link">
                    View Details →
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Projects Component
function Projects() {
  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <span className="section-label">Portfolio</span>
        <h2 className="section-title">Featured Projects</h2>

        <div className="projects-grid">
          <div className="project-card">
            <div className="project-number">01</div>
            <h3>Smart Traffic Management System</h3>
            <p>
              Priority-based traffic control framework to detect ambulances, optimize signal timing, 
              and trigger real-time alerts using computer vision.
            </p>
            <div className="project-tech">
              <span>Computer Vision</span>
              <span>Python</span>
              <span>Real-time Processing</span>
            </div>
          </div>

          <div className="project-card">
            <div className="project-number">02</div>
            <h3>Polynomial Graph Plotting Tool</h3>
            <p>
              Python visualization tool inspired by Desmos to plot and compare multiple polynomial 
              equations interactively using NumPy and Matplotlib.
            </p>
            <div className="project-tech">
              <span>Python</span>
              <span>NumPy</span>
              <span>Matplotlib</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Skills Component
function Skills() {
  return (
    <section className="skills-section">
      <div className="container">
        <div className="skills-grid">
          <div className="skill-col">
            <h3>Technical Stack</h3>
            <ul>
              <li>Python, SQL</li>
              <li>pandas, NumPy, scikit-learn</li>
              <li>XGBoost, spaCy, TensorFlow, PyTorch</li>
              <li>Power BI, Tableau</li>
              <li>Git, Docker, AWS, GCP</li>
            </ul>
          </div>
          <div className="skill-col">
            <h3>Focus Areas</h3>
            <ul>
              <li>Data Engineering & Analytics</li>
              <li>Applied Machine Learning</li>
              <li>KPI Dashboards & Metrics</li>
              <li>MLOps & Production Systems</li>
              <li>Validated Pipelines</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

// Contact Component
function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <div className="contact-content">
          <h2>Got an idea?</h2>
          <p className="contact-tagline">Think it. Build it. Ship it.</p>
          
          <div className="contact-links">
            <a href="mailto:siddheshramk@gmail.com" className="contact-btn">
              Email Me
            </a>
          </div>

          <div className="social-links">
            <a href="https://www.linkedin.com/in/siddhesh-ram-krishnachandran-90ab2831a" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
            <a href="https://github.com/Siddheshram05" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
            <a href="https://leetcode.com/u/Siddheshram05/" target="_blank" rel="noopener noreferrer">
              LeetCode
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

// Footer Component
function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-content">
          <p>© 2025 Siddhesh Ram Krishnachandran</p>
          <p>Open to data analyst and ML engineering roles, internships, and high-ownership projects.</p>
        </div>
      </div>
    </footer>
  );
}

// Main App Component
export default function App() {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="app">
      <Navigation />
      <Hero />
      <About />
      <Work />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}
