import './LegalPage.css'

const PrivacyPolicy = () => {
  return (
    <section className="legal">
      <div className="legal__hero">
        <p className="legal__label">JURIDISCH</p>
        <h1 className="legal__heading">Privacybeleid</h1>
        <p className="legal__updated">Laatst bijgewerkt: januari 2025</p>
      </div>

      <div className="legal__content">
        <div className="legal__section">
          <h2 className="legal__section-title">1. Wie zijn wij?</h2>
          <p className="legal__text">
            Bewaarbaar is een Nederlands bedrijf geregistreerd bij de Kamer van Koophandel onder nummer 99621053.
            Wij verkopen bewaarmappen voor schoolherinneringen via onze webshop bewaarbaar.nl.
          </p>
          <p className="legal__text">
            Voor vragen over privacy kun je contact opnemen via{' '}
            <a href="mailto:info@bewaarbaar.nl">info@bewaarbaar.nl</a>.
          </p>
        </div>

        <div className="legal__section">
          <h2 className="legal__section-title">2. Welke gegevens verzamelen wij?</h2>
          <p className="legal__text">Wij verzamelen de volgende persoonsgegevens:</p>
          <ul className="legal__list">
            <li>Naam en e-mailadres (bij bestellingen en contactformulier)</li>
            <li>Afleveradres en factuuradres (bij bestellingen)</li>
            <li>Betaalgegevens (verwerkt door Shopify, niet door ons opgeslagen)</li>
            <li>E-mailadres (bij nieuwsbriefaanmelding)</li>
            <li>IP-adres en browsergegevens (via cookies, zie sectie 5)</li>
          </ul>
        </div>

        <div className="legal__section">
          <h2 className="legal__section-title">3. Waarvoor gebruiken wij je gegevens?</h2>
          <ul className="legal__list">
            <li>Het verwerken en verzenden van je bestelling</li>
            <li>Het beantwoorden van je vragen via het contactformulier</li>
            <li>Het versturen van de nieuwsbrief (alleen met jouw toestemming)</li>
            <li>Het verbeteren van onze website en diensten</li>
            <li>Het voldoen aan wettelijke verplichtingen</li>
          </ul>
        </div>

        <div className="legal__section">
          <h2 className="legal__section-title">4. Met wie delen wij je gegevens?</h2>
          <p className="legal__text">
            Wij delen je gegevens alleen met partijen die nodig zijn voor onze dienstverlening:
          </p>
          <ul className="legal__list">
            <li>Shopify (webshopplatform en betalingsverwerking)</li>
            <li>PostNL / DHL (pakketbezorging)</li>
            <li>Formspree (contactformulier verwerking)</li>
            <li>Google Analytics (websitestatistieken, geanonimiseerd)</li>
          </ul>
          <p className="legal__text">
            Wij verkopen je gegevens nooit aan derden.
          </p>
        </div>

        <div className="legal__section">
          <h2 className="legal__section-title">5. Cookies</h2>
          <p className="legal__text">
            Onze website gebruikt cookies voor het functioneren van de webshop en het analyseren van websitegebruik.
            Bij je eerste bezoek vragen wij toestemming voor niet-essentiële cookies.
          </p>
          <ul className="legal__list">
            <li><strong>Noodzakelijke cookies:</strong> voor het functioneren van de webshop en winkelwagen</li>
            <li><strong>Analytische cookies:</strong> Google Analytics, geanonimiseerd (alleen met toestemming)</li>
          </ul>
          <p className="legal__text">
            Je kunt cookies altijd uitschakelen via je browserinstellingen.
          </p>
        </div>

        <div className="legal__section">
          <h2 className="legal__section-title">6. Je rechten</h2>
          <p className="legal__text">
            Op grond van de AVG (Algemene Verordening Gegevensbescherming) heb je de volgende rechten:
          </p>
          <ul className="legal__list">
            <li>Recht op inzage in je persoonsgegevens</li>
            <li>Recht op correctie of verwijdering van je gegevens</li>
            <li>Recht op beperking van verwerking</li>
            <li>Recht op dataportabiliteit</li>
            <li>Recht om toestemming in te trekken</li>
            <li>Recht om een klacht in te dienen bij de Autoriteit Persoonsgegevens</li>
          </ul>
          <p className="legal__text">
            Neem contact op via{' '}
            <a href="mailto:info@bewaarbaar.nl">info@bewaarbaar.nl</a> om je rechten uit te oefenen.
          </p>
        </div>

        <div className="legal__section">
          <h2 className="legal__section-title">7. Beveiliging</h2>
          <p className="legal__text">
            Wij nemen passende technische en organisatorische maatregelen om je persoonsgegevens te beschermen tegen
            verlies, misbruik en ongeautoriseerde toegang. Onze website maakt gebruik van SSL-encryptie.
          </p>
        </div>

        <div className="legal__section">
          <h2 className="legal__section-title">8. Bewaartermijn</h2>
          <p className="legal__text">
            Wij bewaren je gegevens niet langer dan noodzakelijk. Bestelgegevens bewaren wij 7 jaar voor de
            belastingdienst. Nieuwsbrief-aanmeldingen bewaren wij tot je je uitschrijft.
          </p>
        </div>

        <div className="legal__section">
          <h2 className="legal__section-title">9. Wijzigingen</h2>
          <p className="legal__text">
            Wij kunnen dit privacybeleid aanpassen. De meest recente versie is altijd beschikbaar op deze pagina.
            Bij belangrijke wijzigingen informeren wij je via e-mail of onze website.
          </p>
        </div>
      </div>
    </section>
  )
}

export default PrivacyPolicy
