import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import gsap from "gsap";
import { Menu, X } from "lucide-react"; // Import icons for menu toggle
import impicLogo from "../../images/logo.png";

export const Nav = () => {
  return (
    <section className="navbar bg-neutral-950 font1">
      <SimpleFloatingNav />
    </section>
  );
};

const SimpleFloatingNav = () => {
  const location = useLocation();
  const navRef = useRef(null);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    gsap.fromTo(
      navRef.current,
      { y: -50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power3.out" }
    );
  }, []);

  const handleSmoothScroll = (e, targetId) => {
    e.preventDefault();
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 50, // Adjust offset for navbar height
        behavior: "smooth",
      });
    }
  };

  return (
    <nav
      ref={navRef}
      className="fixed left-[50%] top-4 flex w-fit -translate-x-[50%] items-center gap-8 rounded-lg border-[1px] border-neutral-700 bg-neutral-900 p-2 text-sm text-neutral-500 z-50 sm:flex-row"
    >
      {/* Logo & Branding - Always Visible */}
      <div className="flex items-center gap-0">
        <Link to="/">
          <Logo />
        </Link>
        <h1 className="font-black text-white text-lg ">Juverse</h1>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden sm:flex gap-4">
        {location.pathname === "/" ? (
          <>
            <a href="#home" onClick={(e) => handleSmoothScroll(e, "#home")}>
              <NavLink>Home</NavLink>
            </a>
            <a href="#about" onClick={(e) => handleSmoothScroll(e, "#about")}>
              <NavLink>About</NavLink>
            </a>
   
          </>
        ) : (
          <>
            <Link to="/#home">
              <NavLink>Home</NavLink>
            </Link>
            <Link to="/#about">
              <NavLink>About</NavLink>
            </Link>
  
          </>
        )}
        <Link to="/team">
          <NavLink>Team</NavLink>
        </Link>
        <Link to="/projects">
          <NavLink>Projects</NavLink>
        </Link>
        <Link to="/detailevent">
          <NavLink>Events</NavLink>
        </Link>
      </div>

      {/* Desktop Join Button */}
      <div className="hidden sm:block">
        <JoinButton handleSmoothScroll={handleSmoothScroll} />
      </div>

      {/* Mobile Menu Button */}
      <button
        className="sm:hidden flex items-center justify-center p-2 rounded-lg border border-neutral-700"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Navigation Menu */}
      {menuOpen && (
        <MobileNav handleSmoothScroll={handleSmoothScroll} setMenuOpen={setMenuOpen} />
      )}
    </nav>
  );
};

const Logo = () => {
  return <img src={impicLogo} alt="impic-logo" width="34" height="auto" />;
};

const NavLink = ({ children }) => {
  return <span className="text-neutral-50">{children}</span>;
};

const JoinButton = ({ handleSmoothScroll }) => {
  return (
    <a href="#join" onClick={(e) => handleSmoothScroll(e, "#join")}>
      <button className="relative flex items-center gap-2 overflow-hidden rounded-lg border-[1px] border-neutral-700 px-4 py-1.5 font-medium text-neutral-300 transition-all duration-300 hover:scale-105 hover:border-neutral-50 hover:text-[#fff] active:scale-100">
        Join Juverse
      </button>
    </a>
  );
};

// Mobile Nav Component
const MobileNav = ({ handleSmoothScroll, setMenuOpen }) => {
  return (
    <div className="absolute top-16 left-0 w-full bg-neutral-900 border-t border-neutral-700 p-4 flex flex-col gap-4 sm:hidden">
      <a href="#home" onClick={(e) => handleSmoothScroll(e, "#home")}>
        <NavLink>Home</NavLink>
      </a>
      <a href="#about" onClick={(e) => handleSmoothScroll(e, "#about")}>
        <NavLink>About</NavLink>
      </a>
      <a href="#team" onClick={(e) => handleSmoothScroll(e, "#team")}>
        <NavLink>Team</NavLink>
      </a>
      <Link to="/projects">
        <NavLink>Projects</NavLink>
      </Link>
      <Link to="/detailevent">
        <NavLink>Events</NavLink>
      </Link>

      {/* Join Button for Mobile */}
      <div className="mt-4">
        <JoinButton handleSmoothScroll={handleSmoothScroll} />
      </div>
    </div>
  );
};

export default Nav;
