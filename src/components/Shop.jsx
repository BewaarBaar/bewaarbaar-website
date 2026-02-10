import './Shop.css'
import { useScrollReveal } from '../hooks/useScrollReveal'
import ShopifyBuyButton from './ShopifyBuyButton'
import basisschoolImg from '../assets/Basisschool-Bewaarmap-square.png'
import kinderdagverblijfImg from '../assets/kinderdagverblijf-Bewaarmap-square.jpg'
import happykidsImg from '../assets/basisschool-bewaarmap-happykids.jpg'

const products = [
  {
    name: 'De Grote Basisschool Bewaarmap',
    subtitle: 'Van groep 1 t/m groep 8',
    price: '€39,99',
    image: basisschoolImg,
    comingSoon: false,
    shopifyId: '10609642963281',
  },
  {
    name: 'Kinderdagverblijf Bewaarmap',
    subtitle: 'Alle knutsels op één plek',
    price: '€34,99',
    image: kinderdagverblijfImg,
    comingSoon: true,
    shopifyId: null,
  },
  {
    name: 'Middelbare School Bewaarmap',
    subtitle: 'Van brugklas tot diploma',
    price: '€39,99',
    image: null,
    comingSoon: true,
    shopifyId: null,
  },
  {
    name: 'Baby Bewaarmap',
    subtitle: 'Het eerste levensjaar',
    price: '€34,99',
    image: null,
    comingSoon: true,
    shopifyId: null,
  },
]

const Shop = () => {
  const sectionRef = useScrollReveal()

  return (
    <section className="shop" ref={sectionRef}>
      {/* Hero banner */}
      <div className="shop__hero scroll-reveal">
        <div className="shop__hero-text">
          <span className="shop__hero-deco shop__hero-deco--1">&#10084;</span>
          <h1 className="shop__hero-title">Onze Bewaarmappen</h1>
          <p className="shop__hero-subtitle">
            Ontdek onze collectie speciaal ontworpen bewaarmappen voor de mooiste herinneringen!
          </p>
          <span className="shop__hero-deco shop__hero-deco--2">&#10039;</span>
        </div>
        <div className="shop__hero-image">
          <img src={happykidsImg} alt="Kinderen met bewaarmap" />
          <div className="shop__hero-shape"></div>
        </div>
      </div>

      {/* Filter bar */}
      <div className="shop__filter">
        <div className="shop__filter-left">
          <span className="shop__filter-count">{products.length} producten</span>
        </div>
        <div className="shop__filter-right">
          <span className="shop__filter-sort">Sorteren: Uitgelicht</span>
        </div>
      </div>

      {/* Product grid */}
      <div className="shop__grid">
        {products.map((product, index) => (
          <div className={`shop__product scroll-reveal scroll-reveal--delay-${index + 1}`} key={index}>
            <div className="shop__product-image-wrap">
              {product.comingSoon && (
                <span className="shop__product-badge">Komt binnenkort</span>
              )}
              {product.image ? (
                <img src={product.image} alt={product.name} className="shop__product-image" />
              ) : (
                <div className="shop__product-placeholder">
                  <span className="shop__product-placeholder-emoji">📚</span>
                </div>
              )}
            </div>
            <div className="shop__product-info">
              <h3 className="shop__product-name">{product.name}</h3>
              <p className="shop__product-subtitle">{product.subtitle}</p>
              <p className="shop__product-price">
                {product.comingSoon ? '' : product.price}
              </p>
              {!product.comingSoon && product.shopifyId && (
                <ShopifyBuyButton productId={product.shopifyId} />
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Shop
