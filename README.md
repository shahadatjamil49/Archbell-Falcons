[index.html.html](https://github.com/user-attachments/files/23889389/index.html.html)
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>ARCHBELL FALCONS - Gaming Club</title>
  <link rel="stylesheet" href="style.css">
  <link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@500;700&family=Poppins:wght@400;600&display=swap" rel="stylesheet">
</head>
<body>
  <header>
    <div class="logo">
      <img src="falcon_photo.jpg" alt="Falcon Logo">
      <h1>ARCHBELL FALCONS</h1>
    </div>
    <nav>
      <ul>
        <li><a href="#home" class="active">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#players">Players</a></li>
        <li><a href="#stats">Statistics</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  </header>

  <section id="home" class="hero">
    <div class="hero-content">
      <h2>Unleash The Falcon Within</h2>
      <p>Join the elite mobile eFootball warriors of ARCHBELL FALCONS — where victory takes flight.</p>
      <a href="#about" class="btn">Explore More</a>
    </div>
  </section>

  <section id="about" class="about">
    <h2>About Our Club</h2>
    <p>
      ARCHBELL FALCONS is a premier eFootball mobile gaming club built on teamwork, strategy, and the thrill of victory.  
      We train hard, play smart, and fly high to dominate tournaments across the globe.
    </p>
  </section>

  <section id="players" class="players">
    <h2>Meet Our Players</h2>
    <div class="player-grid">
      <div class="player-card">
        <img src="https://i.ibb.co/YtQSKdr/player1.jpg" alt="Player 1">
        <h3>ShadowStrike</h3>
        <p>Captain | Midfielder</p>
      </div>
      <div class="player-card">
        <img src="https://i.ibb.co/fksChgd/player2.jpg" alt="Player 2">
        <h3>BlazeStorm</h3>
        <p>Forward | Top Scorer</p>
      </div>
      <div class="player-card">
        <img src="https://i.ibb.co/THgLZP2/player3.jpg" alt="Player 3">
        <h3>IronClaw</h3>
        <p>Defender | Tactical Genius</p>
      </div>
    </div>
  </section>

  <section id="stats" class="stats">
    <h2>Club Statistics</h2>
    <div class="stat-box">
      <div class="stat"><h3>Matches Played</h3><p>120</p></div>
      <div class="stat"><h3>Wins</h3><p>92</p></div>
      <div class="stat"><h3>Draws</h3><p>18</p></div>
      <div class="stat"><h3>Losses</h3><p>10</p></div>
    </div>
  </section>

  <section id="contact" class="contact">
    <h2>Join The Falcons</h2>
    <p>Want to be part of the team? Reach out and join our next season.</p>
    <a href="mailto:archbellfalcons@gmail.com" class="btn">Contact Us</a>
  </section>

  <footer>
    <p>© 2025 ARCHBELL FALCONS | Designed with ❤️ by Team Falcons</p>
  </footer>
</body>
</html>

[style.css](https://github.com/user-attachments/files/23889390/style.css)
/* General Reset */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background-color: #0a0a0a;
  color: #fff;
  font-family: 'Poppins', sans-serif;
  scroll-behavior: smooth;
}

/* Header */
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 50px;
  background: linear-gradient(90deg, #000, #550000);
  box-shadow: 0 0 20px rgba(255, 0, 0, 0.3);
  position: sticky;
  top: 0;
  z-index: 100;
}

.logo {
  display: flex;
  align-items: center;
}

.logo img {
  width: 60px;
  margin-right: 15px;
}

.logo h1 {
  font-family: 'Orbitron', sans-serif;
  color: #ff0000;
  font-size: 1.8rem;
  text-shadow: 0 0 10px #ff0000;
}

nav ul {
  list-style: none;
  display: flex;
}

nav ul li {
  margin: 0 15px;
}

nav ul li a {
  color: #fff;
  text-decoration: none;
  font-weight: 600;
  transition: 0.3s;
}

nav ul li a:hover,
nav ul li a.active {
  color: #ff0000;
  text-shadow: 0 0 10px #ff0000;
}

/* Hero Section */
.hero {
  background: url('eagle\ logo.webp') center/cover no-repeat;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  position: relative;
}

.hero::after {
  content: "";
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.7);
}

.hero-content {
  position: relative;
  z-index: 2;
  max-width: 700px;
}

.hero-content h2 {
  font-family: 'Orbitron', sans-serif;
  font-size: 3rem;
  color: #ff0000;
  text-shadow: 0 0 20px #ff0000;
  animation: glow 2s infinite alternate;
}

@keyframes glow {
  from { text-shadow: 0 0 10px #ff0000; }
  to { text-shadow: 0 0 30px #ff4444; }
}

.hero-content p {
  margin: 20px 0;
  font-size: 1.2rem;
  color: #ccc;
}

.btn {
  display: inline-block;
  background: #ff0000;
  color: #fff;
  padding: 12px 25px;
  border-radius: 25px;
  text-decoration: none;
  font-weight: 600;
  transition: 0.3s;
}

.btn:hover {
  background: #fff;
  color: #ff0000;
  box-shadow: 0 0 15px #ff0000;
}

/* About Section */
.about {
  padding: 80px 50px;
  text-align: center;
}

.about h2 {
  color: #ff0000;
  font-size: 2.2rem;
  margin-bottom: 20px;
}

.about p {
  color: #ddd;
  max-width: 800px;
  margin: 0 auto;
  line-height: 1.8;
}

/* Players Section */
.players {
  background: #111;
  padding: 80px 50px;
  text-align: center;
}

.players h2 {
  color: #ff0000;
  font-size: 2.2rem;
  margin-bottom: 40px;
}

.player-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 30px;
  justify-items: center;
}

.player-card {
  background: #1a1a1a;
  border-radius: 15px;
  padding: 20px;
  transition: 0.4s;
  box-shadow: 0 0 10px rgba(255, 0, 0, 0.3);
}

.player-card:hover {
  transform: scale(1.05);
  box-shadow: 0 0 25px rgba(255, 0, 0, 0.6);
}

.player-card img {
  width: 100%;
  border-radius: 10px;
  margin-bottom: 15px;
}

.player-card h3 {
  color: #fff;
  margin-bottom: 5px;
}

.player-card p {
  color: #aaa;
  font-size: 0.9rem;
}

/* Statistics Section */
.stats {
  padding: 80px 50px;
  text-align: center;
  background: linear-gradient(90deg, #1a0000, #300000);
}

.stats h2 {
  color: #ff0000;
  font-size: 2.2rem;
  margin-bottom: 40px;
}

.stat-box {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 40px;
}

.stat {
  background: #111;
  padding: 30px;
  border-radius: 15px;
  box-shadow: 0 0 15px rgba(255, 0, 0, 0.3);
  width: 200px;
  transition: 0.3s;
}

.stat:hover {
  transform: translateY(-10px);
  box-shadow: 0 0 25px rgba(255, 0, 0, 0.6);
}

.stat h3 {
  color: #fff;
  margin-bottom: 10px;
}

.stat p {
  font-size: 1.8rem;
  color: #ff0000;
  font-weight: bold;
}

/* Contact Section */
.contact {
  padding: 80px 50px;
  text-align: center;
  background: #0f0f0f;
}

.contact h2 {
  color: #ff0000;
  margin-bottom: 20px;
}

.contact p {
  color: #ccc;
  margin-bottom: 30px;
}

/* Footer */
footer {
  background: #000;
  text-align: center;
  padding: 20px;
  color: #555;
  font-size: 0.9rem;
}

Archbell.app.py
