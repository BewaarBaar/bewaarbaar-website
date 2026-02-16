import { Link } from 'react-router-dom'
import './NotFound.css'

const NotFound = () => {
  return (
    <section className="not-found">
      <div className="not-found__content">
        <span className="not-found__emoji">📚</span>
        <h1 className="not-found__title">404</h1>
        <h2 className="not-found__subtitle">Pagina niet gevonden</h2>
        <p className="not-found__text">
          Oeps! Deze pagina lijkt niet te bestaan. Misschien is hij verplaatst of heb je een verkeerde link gevolgd.
        </p>
        <Link to="/" className="not-found__btn">Terug naar Home</Link>
      </div>
    </section>
  )
}

export default NotFound
