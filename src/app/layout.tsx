"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import {useRouter } from "next/navigation";
import "./globals.css";
import ParticlesBackground from "./component/Particle";
import "font-awesome/css/font-awesome.min.css"; // Import Font Awesome globally
import { FaFacebook, FaTelegram, FaLinkedin, FaGithub, FaDiscord } from "react-icons/fa";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string>("Home");

  const router = useRouter();
  // const pathname = usePathname();

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleMenuClick = (menu: string, url: string) => {
    setActiveMenu(menu);
    setMenuOpen(false);

    if (url === "/") {
      window.location.href = url; // Full page reload when clicking "Home"
    } else if (url.startsWith("#")) {
      scrollToSection(url.substring(1)); // Remove "#" and scroll smoothly
    } else {
      router.push(url); // Navigate to other pages without refresh
    }
  };

  useEffect(() => {
    const sections = [
      { id: "container-home", name: "Home" },
      { id: "container-project", name: "Project" },
      { id: "container-experience", name: "Experience" },
      { id: "contact", name: "Contact" },
    ];

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100; // Adjust offset for better accuracy

      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveMenu(section.name);
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <html lang="en">
      <body>
        <ParticlesBackground />

        <header>
          <div id="menubar">
            <div id="name">
              <Link href="/" onClick={(e) => { e.preventDefault(); handleMenuClick("Home", "/"); }}>
                On <span style={{ color: "yellow" }}>Chhunlin</span>
              </Link>
            </div>
            <div id="hamburger" onClick={toggleMenu}>
              <div></div>
              <div></div>
              <div></div>
            </div>
            <nav id="menus" className={menuOpen ? "mobile" : ""}>
              <Link href="/" onClick={(e) => { e.preventDefault(); handleMenuClick("Home", "/"); }} className={activeMenu === "Home" ? "active" : ""}>
                About
              </Link>

              <Link href="#container-project" onClick={(e) => { e.preventDefault(); handleMenuClick("Project", "#container-project"); }} className={activeMenu === "Project" ? "active" : ""}>
                Project
              </Link>
              <Link href="#container-experience" onClick={(e) => { e.preventDefault(); handleMenuClick("Experience", "#container-experience"); }} className={activeMenu === "Experience" ? "active" : ""}>
                Experience
              </Link>
              <Link href="#contact" onClick={(e) => { e.preventDefault(); handleMenuClick("Contact", "#contact"); }} className={activeMenu === "Contact" ? "active" : ""}>
                Contact
              </Link>
            </nav>
          </div>
        </header>

        <main>{children}</main>
        <footer>
        <div className="px-4 py-6 border-t-2 dark:bg-gray-700 md:flex md:items-center md:justify-between sm:justify-center">
        <p className="text-sm">&copy; 2025 On Chhunlin Portfolio. Start new year, new life.</p>
        <div className="flex mt-4 sm:justify-center md:mt-0 space-x-5 rtl:space-x-reverse">
          <a href="https://www.facebook.com/share/195rut6Pdb" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400">
            <FaFacebook size={24} />
          </a>
          <a href="https://t.me/chhunlinon" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400">
            <FaTelegram size={24} />
          </a>
          <a href="https://www.linkedin.com/in/chhunlin-on-893996341?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BEpuSwY9ZTcyyQpSfccFN7w%3D%3D" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400">
            <FaLinkedin size={24} />
          </a>
          <a href="https://discordapp.com/users/1192629206941708390" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400">
            <FaDiscord size={24} />
          </a>
          <a href="https://github.com/ChhunlinOn" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400">
            <FaGithub size={24} />
          </a>
        </div>
      </div>
    </footer>


      </body>
    </html>
  );
}
