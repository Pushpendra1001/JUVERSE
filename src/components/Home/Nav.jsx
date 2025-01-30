import { useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import gsap from "gsap";
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
      className="fixed left-[50%] top-4 flex w-fit -translate-x-[50%] items-center gap-10 rounded-lg border-[1px] border-neutral-700 bg-neutral-900 p-2 text-sm text-neutral-500 z-50 mb-100"
    >
      <Link to="/">
        <Logo />
      </Link>
      <div className=" flex gap-4">
        {location.pathname === "/" ? (
          <>
            <a href="#home" onClick={(e) => handleSmoothScroll(e, "#home")}>
              <NavLink>Home</NavLink>
            </a>
            <a href="#about" onClick={(e) => handleSmoothScroll(e, "#about")}>
              <NavLink>About</NavLink>
            </a>
            <a href="#team" onClick={(e) => handleSmoothScroll(e, "#team")}>
              <NavLink>Team</NavLink>
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
            <Link to="/#team">
              <NavLink>Team</NavLink>
            </Link>
          </>
        )}
        <Link to="/projects">
          <NavLink>Projects</NavLink>
        </Link>
      </div>
      <JoinButton handleSmoothScroll={handleSmoothScroll} />
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
      <button className="relative flex items-center gap-2 overflow-hidden rounded-lg border-[1px] border-neutral-700 px-4 py-1.5 font-medium text-neutral-300 transition-all duration-300 hover:scale-105 hover:border-neutral-50 hover:text-[#fff]  active:scale-100 ">
        Join Juverse
      </button>
    </a>
  );
};

export default Nav;
