"use client";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import './globals.css'
import { faPhone, faEnvelope, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faTelegram, faDiscord } from "@fortawesome/free-brands-svg-icons";

export default function Home() {

  const cards = [
    { id: 1, image: "./picture.png", title: "James Wilson", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris." },
    { id: 2, image: "./picture.png", title: "Sarah Johnson", description: "Graphic Designer" },
    { id: 3, image: "./picture.png", title: "Michael Brown", description: "Project Manager" },
    { id: 4, image: "./picture.png", title: "Emily Davis", description: "Marketing Specialist" },
    { id: 5, image: "./picture.png", title: "Christopher Garcia", description: "Data Scientist" },
    { id: 6, image: "./profilecopy.jpg", title: "Richard Wilson", description: "Product Designer" },
  ];

  const [expandedDescription, setExpandedDescription] = useState<number | null>(null); // Track which item's description is expanded

  const handleReadMoreToggle = (id: number) => {
    if (expandedDescription === id) {
      setExpandedDescription(null); // Collapse description
    } else {
      setExpandedDescription(id); // Expand description
    }
  };
  return (
    <div id="text">
    <div id="container-home" className="block">
      <div id="Profile">
        <img src="./profilecopy.jpg" alt="" />
      </div>
      <div id="intro">
        <h1>Hi! I'm <span className="text-ani" style={{ color: "yellow" }}>Chhunlin</span></h1>
        <p>I'm a Full Stack Dev</p>
        <div className="button">
          <button>My CV</button>
          <button onClick={() => window.scrollTo({ top: document.getElementById('container-project')?.offsetTop || 0, behavior: 'smooth' })}>
  Projects
</button>

        </div>
      </div>
    </div>


    <div id="container-project" className="swiper">
  <div className="slider-wrapper">
    <Swiper
      modules={[Navigation, Pagination]}
      spaceBetween={30}
      loop={true}
      grabCursor={true}
      pagination={{
        clickable: true,
        dynamicBullets: true,
        renderBullet: (index, className) =>
          `<span class='${className}' style='background-color: white;'></span>`,
      }}
      navigation={{ nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" }}
      breakpoints={{
        0: { slidesPerView: 1 },
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
      }}
      className="card-list swiper-wrapper"
    >
      {cards.map((card) => (
        <SwiperSlide key={card.id} className="card-item swiper-slide">
        <img src={card.image} alt={card.title} className="user-image" />
        <h2 className="user-name text-xl font-bold">{card.title}</h2>
        <p className={`user-description ${expandedDescription === card.id ? "expanded" : ""}`}>
          {expandedDescription === card.id
            ? card.description
            : `${card.description.substring(0, 100)}...`}
        </p>
        <button 
          className="readmore-button text-blue-500 mt-2"
          onClick={() => handleReadMoreToggle(card.id)}
        >
          {expandedDescription === card.id ? "Read Less" : "Read More"}
        </button>
      </SwiperSlide>
         
      ))}
    </Swiper>
    <div className="swiper-pagination"></div>
    <div className="swiper-slide-button swiper-button-prev"></div>
    <div className="swiper-slide-button swiper-button-next"></div>
  </div>
</div>



<div id="container-experience" className="experience-container">
  <h1 className="skill-heading">Skill Experience</h1>
  
  <div className="skills-items">
    <div className="skill-item blue-box-shadow">
      <img src="./Notion-Logo.png" alt="JavaScript" className="skill-image" />
    </div>
    <div className="skill-item red-box-shadow">
      <img src="./postman-icon.png" alt="CSS" className="skill-image" />
    </div>
    <div className="skill-item blue-box-shadow">
      <img src="./MySQL-Logo.wine.png" alt="Python" className="skill-image" />
    </div>
    <div className="skill-item red-box-shadow">
      <img src="./pgadmin-4-logo.png" alt="JavaScript" className="skill-image" />
    </div>
    <div className="skill-item blue-box-shadow">
      <img src="./React.webp" alt="CSS" className="skill-image" />
    </div>
    <div className="skill-item  red-box-shadow bg-white">
      <img src="./nextjs-icon-1024x1024-5et230l7.png" alt="Python" className="skill-image" />
    </div>

    <div className="skill-item blue-box-shadow">
      <img src="./d8d635fbfcd76e2314ebb60e437d4839.png" alt="JavaScript" className="skill-image" />
    </div>
    <div className="skill-item red-box-shadow">
      <img src="./HTML5_Badge_512.png" alt="CSS" className="skill-image" />
    </div>
    <div className="skill-item  blue-box-shadow">
      <img src="./javascript-logo-javascript-icon-transparent-free-png.webp" alt="Python" className="skill-image" />
    </div>
    <div className="skill-item red-box-shadow">
      <img src="./GitHub-Logo.svg" alt="JavaScript" className="skill-image bg-white" />
    </div>
    <div className="skill-item  blue-box-shadow">
      <img src="./Tailwind_CSS_Logo.svg.png" alt="CSS" className="skill-image" />
    </div>
    <div className="skill-item red-box-shadow">
      <img src="./pngwing.com.png" alt="Python" className="skill-image" />
    </div>
    
    {/* Add more skill items as needed */}
  </div>
</div>

{/* <div id="contact"> */}
  <div id="contact" className="container">
    <div className="form-container">
      <div className="left-container">
        <div className="left-inner-container">
          <h2>Let's Chat</h2>
          <p>Whether you have a question, want to start a project, or simply want to connect.</p>
          <br />
          <p>Feel free to send me a message in the contact form</p>
        </div>
      </div>
      <div className="right-container">
        <div className="right-inner-container">
          <form action="#">
            <h2 className="sm-view font-bold">Contact</h2>
            <input type="text" placeholder="Name *" required />
            <input type="email" placeholder="Email *" required />
            <input type="text" placeholder="Company" />
            <input type="tel" placeholder="Phone" />
            <textarea rows="4" placeholder="Message"></textarea>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  </div>
{/* </div> */}


    </div>
  );
}
