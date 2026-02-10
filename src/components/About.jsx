import './About.css'
import basisschoolImg from '../assets/Basisschool-Bewaarmap-square.png'
import happykidsImg from '../assets/basisschool-bewaarmap-happykids.jpg'

const About = () => {
  return (
    <section className="about">
      {/* Hero intro */}
      <div className="about__hero">
        <span className="about__deco about__deco--1">&#9827;</span>
        <span className="about__deco about__deco--2">&#9733;</span>
        <p className="about__label">OVER BEWAARBAAR</p>
        <h1 className="about__heading">
          Bij Bewaarbaar geloven we dat sommige momenten te waardevol zijn om te laten verdwijnen.
        </h1>
        <p className="about__intro">
          De basisschooltijd is zo'n periode. Acht jaren vol eerste keren, groei, trots, vriendschappen en herinneringen die je later nóg meer gaat waarderen.
        </p>
        <span className="about__deco about__deco--3">&#10084;</span>
      </div>

      {/* Full-width image */}
      <div className="about__image-full">
        <img src={happykidsImg} alt="Kinderen met hun bewaarmap" />
      </div>

      {/* Story section */}
      <div className="about__story">
        <div className="about__story-text">
          <p className="about__label">ONS VERHAAL</p>
          <h2 className="about__story-heading">
            Het idee voor Bewaarbaar ontstond vanuit een herkenbaar gevoel.
          </h2>
          <p className="about__story-body">
            Schoolfoto's hier, knutsels daar, rapporten ergens opgeborgen… en ondertussen vliegt de tijd voorbij. We wilden één fijne plek creëren waar alles samenkomt. Overzichtelijk, persoonlijk en met aandacht gemaakt.
          </p>
          <p className="about__story-body">
            Zo ontstond <em>De grote basisschool bewaarmap</em>. Een map die meegroeit van groep 1 tot en met groep 8. Met ruimte om te schrijven, te tekenen, te plakken en te bewaren. Geen invulboek dat 'af moet', maar een bewaarmap die je op je eigen tempo vult — samen met je kind.
          </p>
        </div>
        <div className="about__story-image">
          <img src={basisschoolImg} alt="De grote basisschool bewaarmap" />
        </div>
      </div>

      {/* Values section */}
      <div className="about__values">
        <div className="about__values-block">
          <span className="about__deco about__deco--4">&#9825;</span>
          <p className="about__label">ONZE WAARDEN</p>
          <h2 className="about__values-heading">
            Met zorg ontworpen, voor nu en voor later.
          </h2>
          <span className="about__deco about__deco--5">&#10047;</span>
        </div>
        <div className="about__values-content">
          <div className="about__values-card">
            <h3 className="about__values-card-title">Met aandacht gemaakt</h3>
            <p className="about__values-card-text">
              Zachte illustraties, speelse pagina's en veel ruimte voor eigen herinneringen. Zodat het niet alleen leuk is om nu te maken, maar ook bijzonder blijft om later terug te kijken.
            </p>
          </div>
          <div className="about__values-card">
            <h3 className="about__values-card-title">Voor ouders die willen bewaren wat telt</h3>
            <p className="about__values-card-text">
              Bewaarbaar is er voor ouders die willen bewaren wat telt. Voor nu. En voor later.
            </p>
          </div>
        </div>
      </div>

      {/* Founder note */}
      <div className="about__founder">
        <div className="about__founder-text">
          <p className="about__founder-note">
            <em>Een bericht van het Bewaarbaar team:</em>
          </p>
          <p className="about__founder-quote">
            We wilden iets maken dat ouders echt helpt om die bijzondere jaren vast te houden. Niet perfect, niet ingewikkeld — maar met liefde. Elke pagina in de bewaarmap is ontworpen met het idee: wat zou ik later het liefst willen terugzien?
          </p>
        </div>
        <div className="about__founder-image">
          <div className="about__founder-blob">
            &#128150;
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
