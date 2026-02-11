import { useState } from 'react'
import './Contact.css'
import { useScrollReveal } from '../hooks/useScrollReveal'

const Contact = () => {
  const sectionRef = useScrollReveal()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [status, setStatus] = useState(null) // 'sending', 'success', 'error'

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')

    try {
      const res = await fetch('https://formspree.io/f/mnjbjgrp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      })

      if (res.ok) {
        setStatus('success')
        setFormData({ name: '', email: '', subject: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <section className="contact" ref={sectionRef}>
      <div className="contact__hero scroll-reveal">
        <p className="contact__label">CONTACT</p>
        <h1 className="contact__heading">Neem contact met ons op</h1>
        <p className="contact__intro">
          Heb je een vraag, opmerking of wil je iets anders weten? Vul het formulier in en we reageren zo snel mogelijk.
        </p>
      </div>

      <div className="contact__content">
        <div className="contact__info scroll-reveal scroll-reveal--left">
          <div className="contact__info-card">
            <div className="contact__info-icon">&#9993;</div>
            <h3>E-mail</h3>
            <p>info@bewaarbaar.nl</p>
          </div>
          <div className="contact__info-card">
            <div className="contact__info-icon">&#128337;</div>
            <h3>Reactietijd</h3>
            <p>Binnen 24 uur op werkdagen</p>
          </div>
          <div className="contact__info-card">
            <div className="contact__info-icon">&#128230;</div>
            <h3>Retouradres</h3>
            <p>Neem eerst contact op via het formulier voor retourinstructies</p>
          </div>
        </div>

        <form className="contact__form scroll-reveal scroll-reveal--right" onSubmit={handleSubmit}>
          <div className="contact__form-row">
            <div className="contact__form-group">
              <label htmlFor="name">Naam</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Je volledige naam"
                required
              />
            </div>
            <div className="contact__form-group">
              <label htmlFor="email">E-mailadres</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="je@email.nl"
                required
              />
            </div>
          </div>

          <div className="contact__form-group">
            <label htmlFor="subject">Onderwerp</label>
            <select
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
            >
              <option value="">Kies een onderwerp</option>
              <option value="Vraag over bestelling">Vraag over mijn bestelling</option>
              <option value="Vraag over de bewaarmap">Vraag over de bewaarmap</option>
              <option value="Retour of ruil">Retour of ruil</option>
              <option value="Samenwerking">Samenwerking</option>
              <option value="Anders">Anders</option>
            </select>
          </div>

          <div className="contact__form-group">
            <label htmlFor="message">Bericht</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Waar kunnen we je mee helpen?"
              rows="6"
              required
            />
          </div>

          <button
            type="submit"
            className="contact__submit"
            disabled={status === 'sending'}
          >
            {status === 'sending' ? 'Verzenden...' : 'Verstuur bericht'}
          </button>

          {status === 'success' && (
            <div className="contact__status contact__status--success">
              Bedankt voor je bericht! We nemen zo snel mogelijk contact met je op.
            </div>
          )}
          {status === 'error' && (
            <div className="contact__status contact__status--error">
              Er ging iets mis. Probeer het opnieuw of mail ons direct op info@bewaarbaar.nl.
            </div>
          )}
        </form>
      </div>
    </section>
  )
}

export default Contact
