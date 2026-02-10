import './NewArrivals.css'
import ShopifyBuyButton from './ShopifyBuyButton'
import basisschoolImg from '../assets/Basisschool-Bewaarmap-square.png'
import kinderdagverblijfImg from '../assets/kinderdagverblijf-Bewaarmap-square.jpg'

const products = [
  {
    name: 'Basisschool Bewaarmap',
    description: 'Organiseer alle schoolherinneringen op een plek met deze praktische bewaarma...',
    price: '\u20ac39.99',
    image: basisschoolImg,
    badge: null,
    comingSoon: false,
  },
  {
    name: 'Kinderdagverblijf Bewaarmap',
    description: 'Binnenkort verkrijgbaar! Bewaar alle mooie knutselwerkjes en herinneringen van het...',
    price: '\u20ac0.00',
    image: kinderdagverblijfImg,
    comingSoon: true,
  },
  {
    name: 'Middelbare School Bewaarmap',
    description: 'Binnenkort verkrijgbaar! De perfecte plek om diploma\'s, rapporten en bijzondere...',
    price: '\u20ac0.00',
    image: null,
    comingSoon: true,
  },
  {
    name: 'Baby Bewaarmap',
    description: 'Binnenkort verkrijgbaar! Leg alle bijzondere momenten van het eerste levensjaar vast in...',
    price: '\u20ac0.00',
    image: null,
    comingSoon: true,
  },
]

const NewArrivals = () => {
  return (
    <section className="new-arrivals">
      <div className="new-arrivals__header">
        <h2 className="new-arrivals__section-title">Onze Bewaarmappen</h2>
        <p className="new-arrivals__section-desc">
          Ontdek onze collectie speciaal ontworpen bewaarmappen voor de mooiste herinneringen.
        </p>
      </div>

      <div className="new-arrivals__products">
        {products.map((product, index) => (
          <a href="#" className="new-arrivals__product" key={index}>
            <div className="new-arrivals__product-image-wrap">
              {product.comingSoon && (
                <span className="new-arrivals__badge new-arrivals__badge--coming">Coming Soon</span>
              )}
              {product.image ? (
                <img src={product.image} alt={product.name} className="new-arrivals__product-img" />
              ) : (
                <div className="new-arrivals__product-placeholder" style={{
                  background: product.comingSoon ? 'var(--color-teal-light)' : '#eee'
                }}>
                  <span className="new-arrivals__product-placeholder-emoji">📚</span>
                </div>
              )}
            </div>
            <h3 className={`new-arrivals__product-name ${product.comingSoon ? 'new-arrivals__product-name--teal' : ''}`}>
              {product.name}{product.comingSoon ? ' - Coming Soon' : ''}
            </h3>
            <p className="new-arrivals__product-desc">{product.description}</p>
            <div className="new-arrivals__product-footer">
              <p className="new-arrivals__product-price">{product.price}</p>
              {!product.comingSoon ? (
                <ShopifyBuyButton productId="10609642963281" />
              ) : (
                <button className="new-arrivals__add-btn" disabled>
                  Binnenkort
                </button>
              )}
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}

export default NewArrivals
