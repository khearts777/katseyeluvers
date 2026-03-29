<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>KATSEYE Fan Page ✨</title>
  <style>
    * { box-sizing: border-box; }
    body {
      margin: 0;
      font-family: 'Arial', sans-serif;
      background: linear-gradient(135deg, #ff9a9e 0%, #fecfef 50%, #f9f1ff 100%);
      color: #3a1a3a;
    }
    header {
      text-align: center;
      padding: 100px 20px 60px;
      background: rgba(255,255,255,0.15);
      backdrop-filter: blur(20px);
    }
    h1 {
      font-size: clamp(3rem, 8vw, 5.5rem);
      margin: 0;
      background: linear-gradient(45deg, #ff6b9d, #c44569, #ff9a9e);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      animation: glow 2s ease-in-out infinite alternate;
    }
    @keyframes glow { from { text-shadow: 0 0 20px #ff6b9d; } to { text-shadow: 0 0 35px #c44569; } }
    .emoji { font-size: 2.5rem; margin: 20px 0; animation: bounce 2s infinite; }
    @keyframes bounce { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-15px); } }
    section { max-width: 1200px; margin: 50px auto; padding: 0 20px; scroll-margin-top: 100px; }
    .card {
      background: rgba(255,255,255,0.95);
      border-radius: 25px;
      padding: 35px;
      margin-bottom: 30px;
      box-shadow: 0 20px 50px rgba(0,0,0,0.12);
      transition: all 0.4s;
    }
    .card:hover { transform: translateY(-10px); box-shadow: 0 25px 60px rgba(0,0,0,0.15); }
    .members-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 30px;
    }
    .member {
      text-align: center;
      padding: 25px;
      border-radius: 20px;
      background: linear-gradient(135deg, #fff8fb, #ffeef8);
      border: 3px solid rgba(255,107,157,0.4);
      transition: all 0.4s;
    }
    .member:hover { transform: scale(1.03); border-color: #ff6b9d; }
    .member img {
      width: 140px;
      height: 140px;
      border-radius: 50%;
      object-fit: cover;
      margin-bottom: 15px;
      border: 4px solid #ffecf5;
      box-shadow: 0 8px 25px rgba(255,107,157,0.3);
    }
    .member h3 { color: #c44569; margin: 12px 0 8px; font-size: 1.5rem; }
    .songs-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
      gap: 20px;
    }
    .song {
      background: linear-gradient(135deg, #ffecf5, #fff0f8);
      padding: 20px;
      border-radius: 18px;
      border-left: 5px solid #ff6b9d;
      transition: all 0.3s;
    }
    .song:hover { transform: translateX(8px); }
    .song a { color: #c44569; text-decoration: none; font-weight: bold; }
    .song a:hover { color: #ff6b9d; }
    nav {
      text-align: center;
      padding: 25px;
      background: rgba(255,255,255,0.25);
      position: sticky;
      top: 0;
      z-index: 100;
    }
    nav a {
      margin: 0 12px;
      padding: 12px 22px;
      background: rgba(255,107,157,0.3);
      color: #3a1a3a;
      text-decoration: none;
      border-radius: 25px;
      font-weight: bold;
      transition: all 0.3s;
    }
    nav a:hover { background: #ff6b9d; color: white; }
    footer { text-align: center; padding: 40px; color: #8b5f83; background: rgba(255,255,255,0.3); }
  </style>
</head>
<body>
  <header>
    <h1>KATSEYE</h1>
    <div class="emoji">✨ 🐱 💖 🎤 🌟</div>
    <p style="font-size: 1.3rem; max-width: 800px; margin: 25px auto; color: #6b3a6b;">
      Global girl group | Grammy 2026 | HYBE x Geffen | OT6 Forever! [web:70][web:72]
    </p>
  </header>

  <nav>
    <a href="#members">Members</a>
    <a href="#songs">Songs</a>
    <a href="#about">About</a>
  </nav>

  <section id="members">
    <h2 style="text-align: center; color: #c44569; font-size: 2.8rem; margin-bottom: 40px;">The 6 Queens</h2>
    <div class="members-grid">
      <div class="member">
        <img src="https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=300&h=300&fit=crop&crop=face" alt="Sophia" loading="lazy">
        <h3>Sophia Laforteza</h3>
        <p><strong>Leader</strong> | Main Vocal<br>Philippines | 2002 | Purple ⚓<br>@sophia.katseye [web:110]</p>
      </div>
      <div class="member">
        <img src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop&crop=face" alt="Manon" loading="lazy">
        <h3>Manon Bannerman</h3>
        <p><strong>Center</strong> | Visual<br>Switzerland | 2002 | Pastel Yellow 👑<br>@manonkatseye [web:111]</p>
      </div>
      <div class="member">
        <img src="https://images.unsplash.com/photo-1435683443108-3c5b0e9d3e92?w=300&h=300&fit=crop&crop=face" alt="Daniela" loading="lazy">
        <h3>Daniela Avanzini</h3>
        <p><strong>Main Dancer</strong><br>USA | Sky Blue 🛡️<br>@daniela.katseye [web:112]</p>
      </div>
      <div class="member">
        <img src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop&crop=face" alt="Lara" loading="lazy">
        <h3>Lara Raj</h3>
        <p><strong>Main Vocal</strong><br>USA | 2005 | Sage Green 🗝️<br>@lararajj [web:119]</p>
      </div>
      <div class="
