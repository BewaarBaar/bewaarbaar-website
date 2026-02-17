import './Reviews.css'
import { useScrollReveal } from '../hooks/useScrollReveal'

const reviews = [
  {
    name: 'Lisa de Vries',
    rating: 5,
    text: 'Wat een prachtig product! Mijn dochter is nu in groep 4 en we vullen de map samen in. Het is echt een fijn ritueel geworden aan het eind van elk schooljaar.',
    date: 'November 2024',
  },
  {
    name: 'Mark Jansen',
    rating: 5,
    text: 'Als vader van twee kinderen is dit het beste cadeau dat ik ooit heb gegeven. De kwaliteit is top en er is ruimte voor alles: foto\'s, tekeningen, rapporten. Aanrader!',
    date: 'Oktober 2024',
  },
  {
    name: 'Sophie Bakker',
    rating: 5,
    text: 'Ik had overal losse tekeningen en knutselwerkjes liggen. Nu heeft alles een mooie plek. De illustraties in de map zijn zo lief, echt met aandacht gemaakt.',
    date: 'September 2024',
  },
  {
    name: 'Ingrid Mulder',
    rating: 4,
    text: 'Gekocht als kraamcadeau voor mijn zus. Ze was er zo blij mee! Het is iets wat je echt jaren gebruikt en wat alleen maar waardevoller wordt.',
    date: 'Augustus 2024',
  },
  {
    name: 'Thomas van Dijk',
    rating: 5,
    text: 'Onze zoon gaat volgend jaar naar de middelbare school. We hebben net samen de map doorgebladerd en wat hebben we gelachen. Zo fijn dat we dit hebben!',
    date: 'December 2024',
  },
  {
    name: 'Emma Visser',
    rating: 5,
    text: 'Eindelijk een bewaarmap die er ook nog eens mooi uitziet! Staat prachtig in de boekenkast en de kinderen vinden het leuk om erin te bladeren.',
    date: 'November 2024',
  },
]

const getInitials = (name) => {
  return name.split(' ').map(n => n[0]).join('').slice(0, 2).toUpperCase()
}

const Stars = ({ count }) => (
  <div className="reviews__stars">
    {Array.from({ length: 5 }, (_, i) => (
      <span key={i} className={i < count ? 'reviews__star--filled' : 'reviews__star--empty'}>
        ★
      </span>
    ))}
  </div>
)

const Reviews = () => {
  const sectionRef = useScrollReveal()

  return (
    <section className="reviews" ref={sectionRef}>
      <div className="reviews__header scroll-reveal">
        <h2 className="reviews__title">Wat ouders zeggen</h2>
        <p className="reviews__subtitle">
          Meer dan 500 tevreden ouders gingen je voor
        </p>
        <div className="reviews__avg">
          <Stars count={5} />
          <span className="reviews__avg-text">4.9 uit 5 sterren</span>
        </div>
      </div>

      <div className="reviews__grid">
        {reviews.map((review, index) => (
          <div className={`reviews__card scroll-reveal scroll-reveal--delay-${index + 1}`} key={index}>
            <Stars count={review.rating} />
            <p className="reviews__card-text">"{review.text}"</p>
            <div className="reviews__card-footer">
              <div className="reviews__card-author">
                <span className="reviews__avatar">{getInitials(review.name)}</span>
                <div className="reviews__author-info">
                  <span className="reviews__card-name">{review.name}</span>
                  <span className="reviews__verified">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="var(--color-teal)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                    Geverifieerd
                  </span>
                </div>
              </div>
              <span className="reviews__card-date">{review.date}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Reviews
