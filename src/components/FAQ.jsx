import './FAQ.css'
import { useState } from 'react'

const faqs = [
  {
    category: 'Over de bewaarmap',
    questions: [
      {
        q: 'Wat zit er precies in de bewaarmap?',
        a: 'De Grote Basisschool Bewaarmap bevat tabbladen voor elk schooljaar (groep 1 t/m 8), met ruimte voor schoolfoto\'s, tekeningen, rapporten, knutselwerkjes en persoonlijke herinneringen. Elke sectie heeft speelse illustraties en schrijfruimte.'
      },
      {
        q: 'Welk formaat heeft de bewaarmap?',
        a: 'De bewaarmap is A4-formaat en werkt met een 4-rings mechanisme. Zo past al het schoolwerk er makkelijk in en kun je ook losse plastic hoesjes toevoegen.'
      },
      {
        q: 'Is de bewaarmap een invulboek?',
        a: 'Nee, het is geen invulboek dat "af moet". Het is een bewaarmap die je op je eigen tempo vult — samen met je kind. Je bepaalt zelf wat je bewaart en hoeveel je schrijft.'
      },
      {
        q: 'Voor welke leeftijd is de bewaarmap geschikt?',
        a: 'De Basisschool Bewaarmap is ontworpen voor de hele basisschoolperiode: van groep 1 tot en met groep 8. Je kunt starten wanneer je wilt, ook als je kind al in een hogere groep zit.'
      },
    ]
  },
  {
    category: 'Bestellen & verzending',
    questions: [
      {
        q: 'Hoe lang duurt de verzending?',
        a: 'Bestellingen worden binnen 1-2 werkdagen verzonden. De levertijd is daarna 1-3 werkdagen binnen Nederland. Verzending naar België duurt 2-4 werkdagen.'
      },
      {
        q: 'Wat zijn de verzendkosten?',
        a: 'Verzending binnen Nederland is gratis bij bestellingen boven de €30. Voor bestellingen onder de €30 betaal je €4,95 verzendkosten. Verzending naar België kost €6,95.'
      },
      {
        q: 'Kan ik mijn bestelling retourneren?',
        a: 'Ja, je hebt 14 dagen bedenktijd. Als de bewaarmap ongebruikt en in originele verpakking is, kun je deze retourneren. Neem contact met ons op via het contactformulier.'
      },
    ]
  },
  {
    category: 'Cadeau geven',
    questions: [
      {
        q: 'Is de bewaarmap een goed cadeau?',
        a: 'Absoluut! De bewaarmap is een van de meest gewaardeerde cadeaus voor ouders. Perfect als kraamcadeau, verjaardagscadeau of bij de start van de basisschool. Veel ouders zeggen dat het het mooiste cadeau is dat ze ooit hebben gekregen.'
      },
{
        q: 'Komen er nog meer bewaarmappen?',
        a: 'Ja! We werken aan een Kinderdagverblijf Bewaarmap, een Middelbare School Bewaarmap en een Baby Bewaarmap. Meld je aan voor de nieuwsbrief om als eerste op de hoogte te zijn.'
      },
    ]
  }
]

const FAQItem = ({ question, answer }) => {
  const [open, setOpen] = useState(false)

  return (
    <div className={`faq__item ${open ? 'faq__item--open' : ''}`} onClick={() => setOpen(!open)}>
      <div className="faq__question">
        <h3>{question}</h3>
        <span className="faq__icon">{open ? '−' : '+'}</span>
      </div>
      {open && (
        <div className="faq__answer">
          <p>{answer}</p>
        </div>
      )}
    </div>
  )
}

const FAQ = () => {
  return (
    <section className="faq">
      <div className="faq__hero">
        <p className="faq__label">VEELGESTELDE VRAGEN</p>
        <h1 className="faq__heading">Hoe kunnen we je helpen?</h1>
        <p className="faq__intro">
          Vind snel het antwoord op je vraag. Staat je vraag er niet bij? Neem dan gerust contact met ons op.
        </p>
      </div>

      <div className="faq__content">
        {faqs.map((section, i) => (
          <div className="faq__section" key={i}>
            <h2 className="faq__section-title">{section.category}</h2>
            <div className="faq__list">
              {section.questions.map((item, j) => (
                <FAQItem key={j} question={item.q} answer={item.a} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default FAQ
