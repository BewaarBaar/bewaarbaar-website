import './Reviews.css'
import { useScrollReveal } from '../hooks/useScrollReveal'

const testimonials = [
  {
    name: 'Laura',
    role: 'Moeder van twee',
    text: 'Ik mocht de bewaarmap als een van de eersten testen. De kwaliteit voelt echt premium en de illustraties zijn prachtig. Mijn kinderen willen er zelf ook steeds in bladeren!',
    tag: 'Testgebruiker',
  },
  {
    name: 'Daniël',
    role: 'Vader van Sem (groep 3)',
    text: 'Eindelijk een mooie plek voor alle losse tekeningen en rapporten. We hadden alles in een doos, maar dit is zoveel leuker om later samen terug te kijken.',
    tag: 'Testgebruiker',
  },
  {
    name: 'Femke',
    role: 'Juf groep 1/2',
    text: 'Als juf zie ik hoeveel moeite kinderen in hun werkjes stoppen. Fijn dat er nu een product is dat die herinneringen de waarde geeft die ze verdienen.',
    tag: 'Preview ontvangen',
  },
]

const getInitials = (name) => {
  return name.split(' ').map(n => n[0]).join('').slice(0, 2).toUpperCase()
}

const Reviews = () => {
  const sectionRef = useScrollReveal()

  return (
    <section className="reviews" ref={sectionRef}>
      <div className="reviews__header scroll-reveal">
        <span className="reviews__label">Eerste reacties</span>
        <h2 className="reviews__title">Wat testgebruikers zeggen</h2>
        <p className="reviews__subtitle">
          We hebben de bewaarmap laten testen door ouders en leerkrachten. Dit zijn hun eerlijke reacties.
        </p>
      </div>

      <div className="reviews__grid">
        {testimonials.map((testimonial, index) => (
          <div className={`reviews__card scroll-reveal scroll-reveal--delay-${index + 1}`} key={index}>
            <p className="reviews__card-text">"{testimonial.text}"</p>
            <div className="reviews__card-footer">
              <div className="reviews__card-author">
                <span className="reviews__avatar">{getInitials(testimonial.name)}</span>
                <div className="reviews__author-info">
                  <span className="reviews__card-name">{testimonial.name}</span>
                  <span className="reviews__card-role">{testimonial.role}</span>
                </div>
              </div>
              <span className="reviews__tag">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                {testimonial.tag}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Reviews
