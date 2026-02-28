import './FAQ.css'
import { useState, useEffect, useRef, useCallback } from 'react'
import { Link } from 'react-router-dom'

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
        a: 'Nee, het is geen invulboek dat "af moet". Het is een bewaarmap die je op je eigen tempo vult \u2014 samen met je kind. Je bepaalt zelf wat je bewaart en hoeveel je schrijft.'
      },
      {
        q: 'Voor welke leeftijd is de bewaarmap geschikt?',
        a: 'De Basisschool Bewaarmap is ontworpen voor de hele basisschoolperiode: van groep 1 tot en met groep 8. Je kunt starten wanneer je wilt, ook als je kind al in een hogere groep zit.'
      },
      {
        q: 'Kan ik extra hoesjes of pagina\u2019s toevoegen?',
        a: 'Ja! Dankzij het 4-rings mechanisme kun je eenvoudig extra plastic hoesjes of insteekhoezen toevoegen. Zo heb je altijd genoeg ruimte voor al het schoolwerk.'
      },
      {
        q: 'Hoe groot is de bewaarmap precies?',
        a: 'De bewaarmap is 32 x 27 cm (iets groter dan A4) en heeft een rug van circa 5 cm. Dik genoeg voor 8 jaar aan herinneringen, maar past prima in een boekenkast.'
      },
    ]
  },
  {
    category: 'Bestellen & verzending',
    questions: [
      {
        q: 'Hoe lang duurt de verzending?',
        a: 'Bestellingen worden binnen 1-2 werkdagen verzonden. De levertijd is daarna 1-3 werkdagen binnen Nederland. Verzending naar Belgi\u00eb duurt 2-4 werkdagen.'
      },
      {
        q: 'Wat zijn de verzendkosten?',
        a: 'Verzending binnen Nederland is gratis bij bestellingen boven de \u20AC30. Voor bestellingen onder de \u20AC30 betaal je \u20AC4,95 verzendkosten. Verzending naar Belgi\u00eb kost \u20AC6,95.'
      },
      {
        q: 'Kan ik mijn bestelling retourneren?',
        a: 'Ja, je hebt 14 dagen bedenktijd. Als de bewaarmap ongebruikt en in originele verpakking is, kun je deze retourneren. Neem contact met ons op via het contactformulier.'
      },
      {
        q: 'Welke betaalmethoden worden geaccepteerd?',
        a: 'Je kunt betalen met iDEAL, Visa, Mastercard, Bancontact en Apple Pay. Alle betalingen verlopen veilig via onze betaalprovider.'
      },
      {
        q: 'Kan ik de bewaarmap ook naar Belgi\u00eb laten verzenden?',
        a: 'Ja! We verzenden naar zowel Nederland als Belgi\u00eb. De verzendkosten naar Belgi\u00eb bedragen \u20AC6,95 en de levertijd is 2-4 werkdagen.'
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
        q: 'Kan ik de bewaarmap als cadeau laten inpakken?',
        a: 'Op dit moment bieden we nog geen cadeauverpakking aan, maar de bewaarmap wordt geleverd in een mooie verpakking die je direct cadeau kunt geven.'
      },
      {
        q: 'Komen er nog meer bewaarmappen?',
        a: 'Ja! We werken aan een Kinderdagverblijf Bewaarmap, een Middelbare School Bewaarmap en een Baby Bewaarmap. Meld je aan voor de nieuwsbrief om als eerste op de hoogte te zijn.'
      },
    ]
  }
]

const FAQItem = ({ question, answer, id }) => {
  const [open, setOpen] = useState(false)
  const contentRef = useRef(null)
  const [height, setHeight] = useState(0)

  const toggle = useCallback(() => {
    setOpen(prev => !prev)
  }, [])

  useEffect(() => {
    if (contentRef.current) {
      setHeight(open ? contentRef.current.scrollHeight : 0)
    }
  }, [open])

  const handleKeyDown = useCallback((e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      toggle()
    }
  }, [toggle])

  return (
    <div className={`faq__item ${open ? 'faq__item--open' : ''}`}>
      <div
        className="faq__question"
        onClick={toggle}
        onKeyDown={handleKeyDown}
        role="button"
        tabIndex={0}
        aria-expanded={open}
        aria-controls={`faq-answer-${id}`}
        id={`faq-question-${id}`}
      >
        <h3>{question}</h3>
        <span className="faq__icon" aria-hidden="true">
          <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="12" y1="5" x2="12" y2="19" className={`faq__icon-v ${open ? 'faq__icon-v--open' : ''}`} />
            <line x1="5" y1="12" x2="19" y2="12" />
          </svg>
        </span>
      </div>
      <div
        className="faq__answer"
        id={`faq-answer-${id}`}
        role="region"
        aria-labelledby={`faq-question-${id}`}
        style={{ height: `${height}px` }}
      >
        <div ref={contentRef} className="faq__answer-inner">
          <p>{answer}</p>
        </div>
      </div>
    </div>
  )
}

const FAQ = () => {
  useEffect(() => {
    document.title = 'Veelgestelde Vragen \u2014 Bewaarbaar'
    const metaDesc = document.querySelector('meta[name="description"]')
    if (metaDesc) metaDesc.setAttribute('content', 'Antwoorden op veelgestelde vragen over de Bewaarbaar bewaarmappen. Alles over formaat, verzending, retourneren en meer.')
    return () => {
      document.title = 'Bewaarbaar \u2014 Bewaarmappen voor de mooiste herinneringen'
      const metaDesc = document.querySelector('meta[name="description"]')
      if (metaDesc) metaDesc.setAttribute('content', 'Bewaar de mooiste schoolherinneringen van je kind in een prachtige bewaarmap. Van groep 1 tot groep 8. Bestel nu bij Bewaarbaar.')
    }
  }, [])

  // Build all Q&A pairs for JSON-LD
  const allQuestions = faqs.flatMap(section => section.questions)

  return (
    <section className="faq">
      <div className="faq__hero">
        <p className="faq__label">VEELGESTELDE VRAGEN</p>
        <h1 className="faq__heading">Hoe kunnen we je helpen?</h1>
        <p className="faq__intro">
          Vind snel het antwoord op je vraag. Staat je vraag er niet bij?{' '}
          <Link to="/contact" className="faq__intro-link">Neem dan gerust contact met ons op.</Link>
        </p>
      </div>

      <div className="faq__content">
        {faqs.map((section, i) => (
          <div className="faq__section" key={i}>
            <h2 className="faq__section-title">{section.category}</h2>
            <div className="faq__list" role="list">
              {section.questions.map((item, j) => (
                <FAQItem
                  key={`${i}-${j}`}
                  question={item.q}
                  answer={item.a}
                  id={`${i}-${j}`}
                />
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Contact CTA */}
      <div className="faq__cta">
        <h2 className="faq__cta-heading">Vraag niet gevonden?</h2>
        <p className="faq__cta-text">
          We helpen je graag persoonlijk. Stuur ons een berichtje en we reageren binnen 24 uur.
        </p>
        <Link to="/contact" className="faq__cta-btn">
          Neem contact op
          <span className="faq__cta-arrow">\u2192</span>
        </Link>
      </div>

      {/* FAQ Schema JSON-LD for Google rich results */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: allQuestions.map(item => ({
              '@type': 'Question',
              name: item.q,
              acceptedAnswer: {
                '@type': 'Answer',
                text: item.a,
              },
            })),
          }),
        }}
      />
    </section>
  )
}

export default FAQ
