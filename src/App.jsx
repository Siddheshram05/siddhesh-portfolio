import { useState, useEffect, useRef } from "react";
import "./index.css";

// Floating Cursor Component
function FloatingCursor() {
  const cursorRef = useRef(null);
  const cursorTextRef = useRef(null);
  const [isHovering, setIsHovering] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [targetPosition, setTargetPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setTargetPosition({ x: e.clientX, y: e.clientY });
    };

    const animateCursor = () => {
      setPosition((prev) => ({
        x: prev.x + (targetPosition.x - prev.x) * 0.15,
        y: prev.y + (targetPosition.y - prev.y) * 0.15,
      }));
    };

    const interval = setInterval(animateCursor, 16);
    window.addEventListener("mousemove", handleMouseMove);

    const interactiveElements = document.querySelectorAll("a, button, .interactive");
    interactiveElements.forEach((el) => {
      el.addEventListener("mouseenter", () => setIsHovering(true));
      el.addEventListener("mouseleave", () => setIsHovering(false));
    });

    return () => {
      clearInterval(interval);
      window.removeEventListener("mousemove", handleMouseMove);
      interactiveElements.forEach((el) => {
        el.removeEventListener("mouseenter", () => setIsHovering(true));
        el.removeEventListener("mouseleave", () => setIsHovering(false));
      });
    };
  }, [targetPosition]);

  return (
    <>
      <div
        ref={cursorRef}
        className="floating-cursor"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: `translate(-50%, -50%) scale(${isHovering ? 1.5 : 1})`,
        }}
      >
        <div ref={cursorTextRef} className="cursor-text">
          <span>AI ✦ ML ✦ DATA ✦ </span>
        </div>
      </div>
      <div
        className="cursor-dot"
        style={{
          left: `${targetPosition.x}px`,
          top: `${targetPosition.y}px`,
        }}
      />
    </>
  );
}

// Navigation Component
function Navigation() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={scrolled ? "scrolled" : ""}>
      <div className="logo interactive">SR</div>
      <div className="nav-links">
        <a href="#about" className="interactive">About</a>
        <a href="#achievements" className="interactive">Work</a>
        <a href="#skills" className="interactive">Skills</a>
        <a href="#projects" className="interactive">Projects</a>
        <a href="#contact" className="interactive">Contact</a>
      </div>
    </nav>
  );
}

// Hero Component
function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-eyebrow">AI/ML Engineer • Data Scientist</div>
        <h1>
          <span className="line">Building intelligent</span>
          <span className="line">systems with</span>
          <span className="line gradient-text">purpose.</span>
        </h1>
        <div className="hero-subtitle">
          Pre-final year at SRM Easwari | Data Science at IIT Madras | Data Analyst at RR Donnelley
        </div>
        <div className="cta-group">
          <a href="#achievements" className="cta-btn cta-primary interactive">
            View My Work
          </a>
          <a href="mailto:siddheshramk@gmail.com" className="cta-btn cta-secondary interactive">
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  );
}

// About Component
function About() {
  return (
    <section id="about">
      <div className="section-header reveal">
        <span className="section-eyebrow">About Me</span>
        <h2 className="section-title">Engineering the future with AI.</h2>
        <p className="section-description">
          Pre-final year Computer Science (AI & ML) student at SRM Easwari Engineering College with 8.21 CGPA.
          Simultaneously pursuing BS in Data Science at IIT Madras (Diploma Level, 7.88 CGPA).
          Currently working as a Data Analyst Intern at RR Donnelley Go Creative.
        </p>
      </div>

      <div className="education-grid">
        <div className="education-card reveal interactive">
          <div className="education-icon">SE</div>
          <h3>SRM Easwari Engineering College</h3>
          <div className="degree">B.E. in Computer Science (AI & ML)</div>
          <div className="gpa">8.21</div>
          <div className="gpa-label">CGPA / 10</div>
        </div>
        <div className="education-card reveal interactive">
          <div className="education-icon">IIT</div>
          <h3>IIT Madras</h3>
          <div className="degree">BS in Data Science & Applications</div>
          <div className="gpa">7.88</div>
          <div className="gpa-label">CGPA / 10</div>
        </div>
      </div>

      <div className="stats-grid">
        <div className="stat-card reveal interactive">
          <div className="stat-number">3rd</div>
          <div className="stat-label">Year Student</div>
        </div>
        <div className="stat-card reveal interactive">
          <div className="stat-number">2+</div>
          <div className="stat-label">Years Coding</div>
        </div>
        <div className="stat-card reveal interactive">
          <div className="stat-number">91%</div>
          <div className="stat-label">HSC Score</div>
        </div>
        <div className="stat-card reveal interactive">
          <div className="stat-number">85%</div>
          <div className="stat-label">SSC Score</div>
        </div>
      </div>
    </section>
  );
}

// Achievements Component
function Achievements() {
  return (
    <section id="achievements">
      <div className="section-header reveal">
        <span className="section-eyebrow">Recognition</span>
        <h2 className="section-title">Impact through innovation.</h2>
      </div>
      <div className="achievements-grid">
        <div className="achievement-card reveal interactive">
          <div className="achievement-icon">NV</div>
          <h3>NVIDIA cuOpt Bug Discovery</h3>
          <p>
            Discovered and reported a critical validation bug in NVIDIA's cuOpt Cloud API causing GPU crashes
            during multi-vehicle optimization with CUDA illegal memory access. Officially acknowledged as Bug ID 5525189.
          </p>
          <a
            href="https://www.linkedin.com/pulse/reported-validation-bug-nvidia-cuopt-cloud-api-solver-siddhesh-ram-e7ykc"
            target="_blank"
            rel="noopener noreferrer"
            className="achievement-link interactive"
          >
            Read Full Article →
          </a>
        </div>
        <div className="achievement-card reveal interactive">
          <div className="achievement-icon">RR</div>
          <h3>Data Analyst at RR Donnelley</h3>
          <p>
            Working as a Data Analyst Intern since June 2025, performing data cleaning, preprocessing, and
            visualization to derive actionable insights. Building automated dashboards and reports for strategic
            decision-making.
          </p>
        </div>
        <div className="achievement-card reveal interactive">
          <div className="achievement-icon">MH</div>
          <h3>Joint Marketing Head - CSE</h3>
          <p>
            Leading marketing initiatives for the CSE (AI & ML) Department at Easwari Engineering College
            (April 2024 - April 2025). Coordinating departmental events and strategizing outreach efforts.
          </p>
        </div>
        <div className="achievement-card reveal interactive">
          <div className="achievement-icon">DS</div>
          <h3>IIT Madras Data Science Program</h3>
          <p>
            Pursuing BS in Data Science and Applications from IIT Madras with focus on machine learning, data
            visualization, and statistical analysis. Currently at Diploma level with 7.88 CGPA.
          </p>
          <a
            href="https://ds.study.iitm.ac.in/student/23F3000704"
            target="_blank"
            rel="noopener noreferrer"
            className="achievement-link interactive"
          >
            View Profile →
          </a>
        </div>
      </div>
    </section>
  );
}

// Skills Component
function Skills() {
  const skillsData = [
    {
      category: "Programming Languages",
      items: [
        { name: "Python", level: "Advanced", percentage: 90 },
        { name: "Java", level: "Intermediate", percentage: 75 },
      ],
    },
    {
      category: "AI/ML Frameworks",
      items: [
        { name: "Autogen, Langchain, LangGraph", level: "Advanced", percentage: 85 },
        { name: "Hugging Face", level: "Advanced", percentage: 80 },
      ],
    },
    {
      category: "Cloud & Infrastructure",
      items: [
        { name: "Google Cloud Vertex AI", level: "Intermediate", percentage: 75 },
        { name: "AWS Bedrock, AWS Workplace", level: "Intermediate", percentage: 70 },
        { name: "NVIDIA NIM", level: "Advanced", percentage: 85 },
      ],
    },
    {
      category: "Development Tools",
      items: [
        { name: "Git, Docker, VS Code", level: "Advanced", percentage: 85 },
        { name: "Django, Flask, FastAPI", level: "Intermediate", percentage: 75 },
      ],
    },
  ];

  return (
    <section id="skills">
      <div className="section-header reveal">
        <span className="section-eyebrow">Expertise</span>
        <h2 className="section-title">Technical proficiency.</h2>
      </div>
      <div className="skills-grid">
        {skillsData.map((category, idx) => (
          <div key={idx} className="skill-category reveal">
            <h3>{category.category}</h3>
            {category.items.map((skill, sidx) => (
              <div key={sidx} className="skill-item">
                <div className="skill-header">
                  <span className="skill-name">{skill.name}</span>
                  <span className="skill-level">{skill.level}</span>
                </div>
                <div className="skill-bar">
                  <div className="skill-bar-fill" style={{ width: `${skill.percentage}%` }} />
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}

// Projects Component
function Projects() {
  return (
    <section id="projects">
      <div className="section-header reveal">
        <span className="section-eyebrow">Portfolio</span>
        <h2 className="section-title">Featured projects.</h2>
      </div>

      <div className="projects-container">
        <div className="project-card reveal interactive">
          <div className="project-content">
            <div className="project-visual">🚑</div>
            <div className="project-info">
              <h3>Smart Traffic Management System</h3>
              <p>
                Built a priority-based traffic control framework to detect ambulances, optimize green signal timing,
                and trigger real-time alerts using computer vision modules. Developed between January - April 2024.
              </p>
              <div className="project-tags">
                <span className="tag interactive">Computer Vision</span>
                <span className="tag interactive">Python</span>
                <span className="tag interactive">Real-time Processing</span>
                <span className="tag interactive">Traffic Optimization</span>
              </div>
            </div>
          </div>
        </div>

        <div className="project-card reveal interactive">
          <div className="project-content">
            <div className="project-info">
              <h3>Polynomial Graph Plotting Tool</h3>
              <p>
                Created a Python visualization tool inspired by Desmos to plot and compare multiple polynomial
                equations interactively. Built using NumPy and Matplotlib for mathematical computations and
                interactive visualizations.
              </p>
              <div className="project-tags">
                <span className="tag interactive">Python</span>
                <span className="tag interactive">NumPy</span>
                <span className="tag interactive">Matplotlib</span>
                <span className="tag interactive">Data Visualization</span>
                <span className="tag interactive">Interactive Tools</span>
              </div>
            </div>
            <div className="project-visual">📊</div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Contact Component
function Contact() {
  return (
    <section id="contact">
      <div className="section-header reveal">
        <span className="section-eyebrow">Get In Touch</span>
        <h2 className="section-title">Let's connect.</h2>
        <p className="section-description">
          Always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
        </p>
      </div>
      <div className="contact-grid">
        <a href="mailto:siddheshramk@gmail.com" className="contact-card reveal interactive">
          <div className="contact-icon">✉️</div>
          <div className="contact-label">Email</div>
        </a>
        <a
          href="https://www.linkedin.com/in/siddhesh-ram-krishnachandran-90ab2831a"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-card reveal interactive"
        >
          <div className="contact-icon">💼</div>
          <div className="contact-label">LinkedIn</div>
        </a>
        <a
          href="https://github.com/Siddheshram05"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-card reveal interactive"
        >
          <div className="contact-icon">💻</div>
          <div className="contact-label">GitHub</div>
        </a>
        <a
          href="https://leetcode.com/u/Siddheshram05/"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-card reveal interactive"
        >
          <div className="contact-icon">🔢</div>
          <div className="contact-label">LeetCode</div>
        </a>
      </div>
    </section>
  );
}

// Footer Component
function Footer() {
  return (
    <footer>
      <p>&copy; 2025 Siddhesh Ram Krishnachandran. All rights reserved.</p>
    </footer>
  );
}

// Main App Component
export default function App() {
  useEffect(() => {
    const reveals = document.querySelectorAll(".reveal");
    const revealOnScroll = () => {
      reveals.forEach((el) => {
        const top = el.getBoundingClientRect().top;
        const height = window.innerHeight;
        if (top < height - 100) el.classList.add("active");
      });
    };
    window.addEventListener("scroll", revealOnScroll);
    revealOnScroll();
    return () => window.removeEventListener("scroll", revealOnScroll);
  }, []);

  return (
    <div className="app">
      <FloatingCursor />
      <div className="animated-bg">
        <div className="bg-gradient"></div>
      </div>
      <div className="noise"></div>
      <Navigation />
      <Hero />
      <About />
      <Achievements />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}
