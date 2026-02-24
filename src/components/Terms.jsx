import './LegalPage.css'

const Terms = () => {
  return (
    <section className="legal">
      <div className="legal__hero">
        <p className="legal__label">JURIDISCH</p>
        <h1 className="legal__heading">Algemene Voorwaarden</h1>
        <p className="legal__updated">Laatst bijgewerkt: januari 2025</p>
      </div>

      <div className="legal__content">
        <div className="legal__section">
          <h2 className="legal__section-title">1. Identiteit van de ondernemer</h2>
          <p className="legal__text">
            Bewaarbaar<br />
            KVK-nummer: 99621053<br />
            E-mail: <a href="mailto:info@bewaarbaar.nl">info@bewaarbaar.nl</a><br />
            Website: bewaarbaar.nl
          </p>
        </div>

        <div className="legal__section">
          <h2 className="legal__section-title">2. Toepasselijkheid</h2>
          <p className="legal__text">
            Deze algemene voorwaarden zijn van toepassing op elk aanbod van Bewaarbaar en op elke overeenkomst
            tussen Bewaarbaar en de klant. Door een bestelling te plaatsen ga je akkoord met deze voorwaarden.
          </p>
        </div>

        <div className="legal__section">
          <h2 className="legal__section-title">3. Aanbod en prijzen</h2>
          <ul className="legal__list">
            <li>Alle prijzen op onze website zijn in euro's en inclusief BTW</li>
            <li>Verzendkosten worden apart vermeld bij het afrekenen</li>
            <li>Wij behouden ons het recht voor om prijzen te wijzigen</li>
            <li>Kennelijke fouten in prijzen binden ons niet</li>
          </ul>
        </div>

        <div className="legal__section">
          <h2 className="legal__section-title">4. Bestelling en overeenkomst</h2>
          <p className="legal__text">
            Een overeenkomst komt tot stand op het moment dat je een bestelling plaatst en een bevestiging
            per e-mail ontvangt. Wij behouden ons het recht voor om bestellingen te weigeren.
          </p>
        </div>

        <div className="legal__section">
          <h2 className="legal__section-title">5. Betaling</h2>
          <p className="legal__text">
            Betaling vindt plaats via de betaalmethoden die beschikbaar zijn in onze webshop (via Shopify).
            De betaling wordt verwerkt op het moment van bestelling.
          </p>
        </div>

        <div className="legal__section">
          <h2 className="legal__section-title">6. Verzending en levering</h2>
          <ul className="legal__list">
            <li>Bestellingen worden binnen 1-2 werkdagen verzonden</li>
            <li>Levertijd binnen Nederland: 1-3 werkdagen</li>
            <li>Levertijd naar België: 2-4 werkdagen</li>
            <li>Verzending binnen Nederland is gratis bij bestellingen boven €30</li>
            <li>Voor bestellingen onder €30 zijn de verzendkosten €4,95</li>
            <li>Verzending naar België kost €6,95</li>
          </ul>
        </div>

        <div className="legal__section">
          <h2 className="legal__section-title">7. Herroepingsrecht</h2>
          <p className="legal__text">
            Je hebt het recht om binnen 14 dagen na ontvangst van je bestelling de overeenkomst zonder
            opgave van reden te ontbinden (herroepingsrecht). Om gebruik te maken van je herroepingsrecht
            kun je contact opnemen via <a href="mailto:info@bewaarbaar.nl">info@bewaarbaar.nl</a>.
          </p>
          <p className="legal__text">Voorwaarden voor retournering:</p>
          <ul className="legal__list">
            <li>Het product moet ongebruikt en in originele verpakking zijn</li>
            <li>Retourkosten zijn voor rekening van de klant</li>
            <li>Terugbetaling vindt plaats binnen 14 dagen na ontvangst van de retour</li>
          </ul>
        </div>

        <div className="legal__section">
          <h2 className="legal__section-title">8. Garantie en klachten</h2>
          <p className="legal__text">
            Onze producten voldoen aan de redelijke verwachtingen die je op basis van de overeenkomst mag
            hebben. Heb je een klacht? Neem contact op via{' '}
            <a href="mailto:info@bewaarbaar.nl">info@bewaarbaar.nl</a>.
            Wij streven ernaar om klachten binnen 14 dagen af te handelen.
          </p>
        </div>

        <div className="legal__section">
          <h2 className="legal__section-title">9. Aansprakelijkheid</h2>
          <p className="legal__text">
            De aansprakelijkheid van Bewaarbaar is beperkt tot het bedrag dat door de klant is betaald voor
            het product. Bewaarbaar is niet aansprakelijk voor indirecte schade, gevolgschade of gederfde winst.
          </p>
        </div>

        <div className="legal__section">
          <h2 className="legal__section-title">10. Intellectueel eigendom</h2>
          <p className="legal__text">
            Alle content op bewaarbaar.nl, waaronder teksten, afbeeldingen, logo's en ontwerpen, is eigendom
            van Bewaarbaar en mag niet zonder schriftelijke toestemming worden gebruikt of gereproduceerd.
          </p>
        </div>

        <div className="legal__section">
          <h2 className="legal__section-title">11. Toepasselijk recht</h2>
          <p className="legal__text">
            Op alle overeenkomsten is Nederlands recht van toepassing. Geschillen worden voorgelegd aan de
            bevoegde rechter in Nederland.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Terms
