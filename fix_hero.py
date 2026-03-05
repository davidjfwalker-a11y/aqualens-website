with open('src/app/page.tsx', 'r') as f:
    content = f.read()

prefix = """\"use client\";

import React, { useState, useEffect, useRef } from \"react\";

const AquaLensLogo = ({ size }: { size: number }) => (
  <svg
    width={size}
    height={size}
    viewBox=\"0 0 24 24\"
    fill=\"none\"
    xmlns=\"http://www.w3.org/2000/svg\"
  >
    <path
      d=\"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z\"
      fill=\"currentColor\"
    />
    <circle cx=\"12\" cy=\"12\" r=\"3\" fill=\"currentColor\" />
  </svg>
);

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener(\"scroll\", handleScroll);
    return () => window.removeEventListener(\"scroll\", handleScroll);
  }, []);

  const onMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    if (scrollRef.current) {
      scrollRef.current.classList.add('dragging');
      setStartX(e.pageX - scrollRef.current.offsetLeft);
      setScrollLeft(scrollRef.current.scrollLeft);
    }
  };

  const onMouseLeave = () => {
    setIsDragging(false);
    if (scrollRef.current) scrollRef.current.classList.remove('dragging');
  };

  const onMouseUp = () => {
    setIsDragging(false);
    if (scrollRef.current) scrollRef.current.classList.remove('dragging');
  };

  const onMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  const onTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    if (scrollRef.current) {
      scrollRef.current.classList.add('dragging');
      setStartX(e.touches[0].pageX - scrollRef.current.offsetLeft);
      setScrollLeft(scrollRef.current.scrollLeft);
    }
  };

  const onTouchEnd = () => {
    setIsDragging(false);
    if (scrollRef.current) scrollRef.current.classList.remove('dragging');
  };

  const onTouchMove = (e: React.TouchEvent) => {
    if (!isDragging || !scrollRef.current) return;
    const x = e.touches[0].pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <>
"""

hero_section = """
      {/* ========== HERO ========== */}
      <section className=\"hero\">
        <div className=\"container hero-inner\">
          <div className=\"hero-content\">
            <span className=\"hero-badge animate-in\">
              <i className=\"fa-solid fa-flask-vial\"></i> Now in Private Beta
            </span>
            <h1 className=\"animate-in animate-delay-1\">
              Take the guesswork out of{' '}
              <span className=\"text-gradient\">aquariums</span>
            </h1>
            <p className=\"hero-subtitle animate-in animate-delay-2\">
              The first AI-powered aquatic intelligence platform that combines
              visual species identification, health diagnostics, and a smart
              journal — the true brain of your system.
            </p>
          </div>
          <div className=\"hero-visual animate-in animate-delay-3\">
            <div className=\"tablet-mockup phone-float\">
              <img src=\"/screenshots/real/home.png\" alt=\"AquaLens Home Screen\" />
            </div>
          </div>
        </div>
      </section>
"""

new_content = prefix + hero_section + content

with open('src/app/page.tsx', 'w') as f:
    f.write(new_content)

print("Fixed heroic section!")
