"use client";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import './globals.css'
import { url } from "inspector";
// import { faPhone, faEnvelope, faLocationDot } from "@fortawesome/free-solid-svg-icons";
// import { faTelegram, faDiscord } from "@fortawesome/free-brands-svg-icons";

export default function Home() {

  const cards = [
    { id: 1, image: "./ksh.jpg", title: "KSH System", description: "KSH is an NGO that support disability people and non profit. I have build a system for them to track student activity ervery day, store information of disability and store report data every day.", url:"https://digital.ksh.thewmad.info" },
    { id: 2, image: "./Survey.png", title: "Survey Form", description: "Survey Form is a website to suvey the new student to know their commitment that want to study in WMAD(Web & Mobile App Development).", url: "https://chhunlinon.github.io/survey-form/" },
    { id: 3, image: "./AI.png", title: "AI-Roadmap", description: "AI-Roadmap is a website where users will allow to input their learning goals, and it will generate a roadmap with detailed milestones." },
    { id: 4, image: "./mart-management.png", title: "Mart Management", description: "Develop the back-end of a Mart Management System to handle purchases, sales, inventory, stock alerts, expiration notifications, customer loyalty points, and user role management." },
    { id: 5, image: "./payment.png", title: "Payment Process", description: "The objective of this project is to design and implement an efficient online payment system for an e-commerce company. This system will streamline the payment process, ensuring faster transactions and enhanced security." },
    { id: 6, image: "./telegram.webp", title: "Telegram Bot", description: "This project focuses on developing a Telegram bot to streamline membership registration for The Hulk Gym's upcoming grand opening. The bot will allow potential members to easily check prices, view promotions, and access a free 7-day trial coupon." },
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
        {card.url && <a href={card.url} className="text-blue-500 underline">Demo</a>}
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
          <form action="https://api.web3forms.com/submit" method="POST">
            <h2 className="sm-view font-bold">Contact</h2>
            <input type="hidden" name="access_key" value="d799818d-8e90-4971-aef7-207d9a5e8379"></input>
            <input name="name" type="text" placeholder="Name *" required />
            <input name="email" type="email" placeholder="Email *" required />
            <textarea name="message" rows="7" placeholder="Message"></textarea>
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
