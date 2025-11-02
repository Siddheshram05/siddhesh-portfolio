import { useState, useEffect, useRef } from "react";
import "./index.css";

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

// keep all your other components (Navigation, Hero, About, etc.) below...
// then export the main App

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
      <div className="animated-bg"><div className="bg-gradient"></div></div>
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
