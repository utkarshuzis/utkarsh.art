<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Creative Media Hub</title>
    <link rel="stylesheet" href="style.css">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
</head>
<body>
    <header>
        <h1 id="title">Creative Media Hub</h1>
    </header>
    <section id="about">
        <h2>About Us</h2>
        <p>We are a team of passionate creators dedicated to delivering visually stunning media solutions.</p>
        <img src="1.png" alt="About Us Image" class="fade-in">
    </section>
    <section id="services">
        <h2>Our Services</h2>
        <div class="service slide-in">
            <img src="2.png" alt="Brand Identity">
            <p>Brand Identity</p>
        </div>
        <div class="service slide-in">
            <img src="3.png" alt="Graphic Design">
            <p>Graphic Design</p>
        </div>
        <div class="service slide-in">
            <img src="4.png" alt="Web Development">
            <p>Web Development</p>
        </div>
        <div class="service slide-in">
            <img src="5.png" alt="Marketing Strategies">
            <p>Marketing Strategies</p>
        </div>
    </section>
    <section id="contact">
        <h2>Contact Us</h2>
        <p>Email: contact@creativemediahub.com</p>
        <p>Phone: +123 456 7890</p>
        <img src="6.png" alt="Contact Section Image" class="fade-in">
    </section>
    <footer>
        <p>&copy; 2025 Creative Media Hub</p>
    </footer>
    <script src="scripts.js"></script>
    <script>
        gsap.from("#title", {opacity: 0, y: -50, duration: 1});
        gsap.from(".fade-in", {opacity: 0, duration: 1, stagger: 0.3});
        gsap.from(".slide-in", {x: -100, opacity: 0, duration: 1, stagger: 0.3});
    </script>
</body>
</html>
