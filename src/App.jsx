import React, { useState, useRef, useEffect } from "react";
import Typist from "react-typist";
import "./index.css";
import banner from "/banner.png"; // Banner
import { FaGithub, FaTwitter, FaInstagram, FaLinkedin, FaYoutube, FaMedium, FaTwitch, FaDiscord, FaCoffee, FaPaypal } from "react-icons/fa";

const Terminal = () => {
  const [history, setHistory] = useState([
    `Welcome to Suryesh's Terminal! Type 'help' for a list of commands.`,
  ]);
  const [input, setInput] = useState("");
  const terminalRef = useRef(null);
  const inputRef = useRef(null);

  const commands = {
    help: [
      "Available commands:",
      "- About : Know about me",
      "- Skill : See my skills",
      "- Project : View my projects",
      "- Social : My social media links",
      "- Channel : Check My YouTube channel or Twitch Tv for live session",
      "- Bugbounty : Platforms where I hunt bugs",
      "- Contact : Get in touch",
      "- Donate : Donate amount as you wish",
      "- Clear : Clear the terminal"
    ],
    about: [
      <div className="about">
      <p>👨‍💻 Security Researcher | Penetration Tester</p>
      <p>🔍 Exploring the depths of web security, vulnerability testing, and automation.</p>
      <p>🛠️ Skilled in creating tools for Automation Testing.</p>
      <p>📜 Crafting custom scripts to find sensitive information, perform directory brute-forcing, and Google Dorking.</p>
      <p>🎥 Sharing knowledge and practical demonstrations on my YouTube channel (focused on security research).</p>
      </div>
    ],
    skill: [
      <div className="skil">
      <p>👉 Languages: Solidity, React, JavaScript, Bash Script, PHP, HTML, CSS.</p>
      <p>👉 Tools: Burp Suite, Nmap, Wireshark, Linux, Metasploit, etc.</p>
      </div>
    ],
    project: [
      "🔥 Our Projects",
      <div className="project">
        <ol>
          <li><a href="https://github.com/Suryesh/OTX_AlienVault_URL" target='_blank'>Url Extraction (scraper) from Alien vault</a></li>
          <li><a href="https://github.com/Suryesh/Subenum" target='_blank'>Subdomain Enumeration</a></li>
          <li><a href="https://github.com/Suryesh/web_archive" target='_blank'>WaybackUrls Collector - Private (Very soon I'll Public It.)</a></li>
          <li><a href="https://github.com/Suryesh/Project" target='_blank'>Women Safety Device using IoT Device - College Final year Major Project</a></li>
        </ol>

      </div>
    ],
    social: [
      "🌐 Follow me on:",
      <div className="social-links">
        <div className="handles">
          <FaTwitter />
          <a href='https://x.com/Suryesh_92' target='_blank'>Twitter</a>
        </div>
        <div className="handles">
          <FaLinkedin />
          <a href='https://www.linkedin.com/in/dhananjay-kumar-suryesh-535995220' target='_blank'>LinkedIn</a>
        </div>
        <div className="handles">
          <FaInstagram />
          <a href='https://instagram.com/suryesh_92' target='_blank'>Instagram</a>
        </div>
        <div className="handles">
          <FaGithub />
          <a href='https://github.com/Suryesh' target='_blank'>GitHub</a>
        </div>
        <div className="handles">
          <FaDiscord />
          <a href='https://discord.gg/U9u4djHu' target='_blank'>Discord</a>
        </div>
        <div className="handles">
          <FaTwitch />
          <a href='https://www.twitch.tv/suryesh_92' target='_blank'>Twitch TV</a>
        </div>
        <div className="handles">
          <FaMedium />
          <a href='https://medium.com/@suryesh92' target='_blank'>Read my articles on Medium</a>
        </div>
        <div className="handles">
          <FaDiscord />
          <a href='https://discord.gg/Y467qAFM4X' target='_blank'>Join our Community Discord</a>
        </div>
      </div>
    ],
    channel: [
      "🚀🔴 Subscribe Our channel For live Session on Youtube and Twitch Tv:",
      <div className="live-session">
        <div className="platform">
          <FaYoutube />
          <a href='https://www.youtube.com/@suryesh_92' target='_blank'>Check out my YouTube channel</a>
        </div>
        <div className="platform">
          <FaTwitch />
          <a href='https://www.twitch.tv/suryesh_92' target='_blank'>Check out my Twitch Tv</a>
        </div>
      </div>
    ],
    donate: [
      "🚀💰 If you learned something from me then donate on By me Coffee, Paypal",
      <div className="donate">
        <div className="coffee">
          <FaCoffee />
          <a href='https://buymeacoffee.com/suryesh_92' target='_blank'>Donate Via Buy me Coffee</a>
        </div>
        <div className="paypal">
          <FaPaypal />
          <a href='https://www.paypal.com/paypalme/Suryesh92' target='_blank'>Donate Via Paypal</a>
        </div>
      </div>
    ],

    bugbounty: [
      <div className="bugbounty-platform">
      <p>🚀🔥 I hunt bugs on platforms like HackerOne, Standoff365, Intigriti, Yeswehack.</p>
      </div>
    ],
    contact: [
      <div className="contact">
      <p>🚀📧 You can contact me for project testing at: cyber.anonymous9031@gmail.com </p>
      </div>
    ],
    clear: [],
  };

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      let normalizedInput = input.toLowerCase();
      let output = commands[normalizedInput] || [
        `Command not found: ${input}. Type 'help' for a list of commands.`,
      ];

      if (normalizedInput === "clear") {
        setHistory([]);
      } else {
        setHistory((prevHistory) => [
          ...prevHistory,
          `$ ${input}`,
          ...output,
        ]);
      }

      setInput("");
    }
  };

  return (
    <div
      style={{
        position: "relative",
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
      }}
      onClick={() => inputRef.current && inputRef.current.focus()}
    >
      <video
        autoPlay
        loop
        muted
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: "-1",
        }}
      >
        <source src="/background.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.8)",
          color: "green",
          fontFamily: "monospace",
          padding: "20px",
          height: "100vh",
          overflowY: "auto",
        }}
      >

        <img
          src={banner} 
          alt="Terminal Banner"
          style={{ width: "100%", maxWidth: "800px", marginBottom: "20px" }}
        />
        {history.map((line, index) => (
          <p key={index}>{line}</p>
        ))}
        <p style={{ fontSize: "1.2rem" }}>
          hacker@Suryesh: $ 
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            style={{ background: "transparent", color: "green", border: "none", outline: "none", fontSize: "1.2rem", fontFamily: "monospace", width: "50%" }} />
        </p>
      </div>
    </div>
  );
};

export default Terminal;