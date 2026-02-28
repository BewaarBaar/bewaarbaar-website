import basisschoolImg from '../assets/Basisschool-Bewaarmap-square.png'
import kinderdagverblijfImg from '../assets/kinderdagverblijf-Bewaarmap-square.jpg'
import mapVoorkant from '../assets/Map_voorkant.png'
import mapAchterkant from '../assets/Map_achterkant.png'
import mapBinnenkant from '../assets/Map_binnenkant.png'
import mapZijkant from '../assets/Map_zijkant.png'
import mapBinnenkantSfeer from '../assets/map_binnenkant_sfeer.png'

const products = [
  {
    slug: 'basisschool-bewaarmap',
    name: 'De Grote Basisschool Bewaarmap',
    subtitle: 'Van groep 1 t/m groep 8',
    price: '\u20AC39,99',
    image: basisschoolImg,
    hoverImage: mapBinnenkantSfeer,
    gallery: [mapVoorkant, mapAchterkant, mapBinnenkant, mapZijkant],
    galleryLabels: ['Voorkant', 'Achterkant', 'Binnenkant', 'Zijkant'],
    comingSoon: false,
    shopifyId: '10609642963281',
    description: 'Bewaar alle schoolherinneringen op \u00e9\u00e9n plek: tekeningen, rapporten, foto\'s en meer. Van groep 1 tot en met groep 8.',
    longDescription: 'De Grote Basisschool Bewaarmap is speciaal ontworpen om alle schoolherinneringen van je kind te bewaren. Van het eerste knutselwerkje in groep 1 tot het afscheid in groep 8 \u2014 alles krijgt een plek. Met tabbladen per groep, ruimte voor foto\'s, tekeningen, rapporten en persoonlijke herinneringen.',
    features: [
      'Groep 1 t/m 8 \u2014 8 jaar in \u00e9\u00e9n map',
      'Ruimte voor tekeningen, foto\'s & rapporten',
      'Speelse illustraties per groep',
      'Stevig ringband systeem',
      'A4-formaat \u2014 past al het schoolwerk',
      'Ontworpen & gedrukt in Nederland',
    ],
    metaTitle: 'Basisschool Bewaarmap \u2014 Alle schoolherinneringen bewaren | Bewaarbaar',
    metaDescription: 'De Grote Basisschool Bewaarmap: bewaar tekeningen, rapporten en foto\'s van groep 1 t/m 8. Speels ontworpen, stevig en gemaakt in Nederland. \u20AC39,99.',
  },
  {
    slug: 'kinderdagverblijf-bewaarmap',
    name: 'Kinderdagverblijf Bewaarmap',
    subtitle: 'Alle knutsels op \u00e9\u00e9n plek',
    price: '\u20AC34,99',
    image: kinderdagverblijfImg,
    hoverImage: null,
    gallery: null,
    galleryLabels: null,
    comingSoon: true,
    shopifyId: null,
    description: 'Bewaar alle knutselwerkjes en herinneringen van het kinderdagverblijf op \u00e9\u00e9n plek.',
    longDescription: 'De Kinderdagverblijf Bewaarmap is er binnenkort! Speciaal ontworpen voor de allerkleinsten. Bewaar knutselwerkjes, foto\'s en herinneringen van de cr\u00e8che en het kinderdagverblijf.',
    features: [
      'Speciaal voor 0-4 jaar',
      'Ruimte voor knutsels en foto\'s',
      'Speelse baby-illustraties',
      'Stevig en duurzaam materiaal',
    ],
    metaTitle: 'Kinderdagverblijf Bewaarmap \u2014 Binnenkort beschikbaar | Bewaarbaar',
    metaDescription: 'De Kinderdagverblijf Bewaarmap: bewaar alle knutselwerkjes en herinneringen van de cr\u00e8che. Binnenkort beschikbaar bij Bewaarbaar.',
  },
  {
    slug: 'middelbare-school-bewaarmap',
    name: 'Middelbare School Bewaarmap',
    subtitle: 'Van brugklas tot diploma',
    price: '\u20AC39,99',
    image: null,
    hoverImage: null,
    gallery: null,
    galleryLabels: null,
    comingSoon: true,
    shopifyId: null,
    description: 'Bewaar alle herinneringen van de middelbare school, van brugklas tot diploma.',
    longDescription: 'De Middelbare School Bewaarmap is er binnenkort! Van de eerste dag in de brugklas tot het eindexamen \u2014 bewaar alle bijzondere momenten van de middelbare schooltijd.',
    features: [
      'Van brugklas tot diploma',
      'Ruimte voor foto\'s en herinneringen',
      'Geschikt voor alle schoolniveaus',
    ],
    metaTitle: 'Middelbare School Bewaarmap \u2014 Binnenkort beschikbaar | Bewaarbaar',
    metaDescription: 'De Middelbare School Bewaarmap: bewaar herinneringen van brugklas tot diploma. Binnenkort beschikbaar bij Bewaarbaar.',
  },
  {
    slug: 'baby-bewaarmap',
    name: 'Baby Bewaarmap',
    subtitle: 'Het eerste levensjaar',
    price: '\u20AC34,99',
    image: null,
    hoverImage: null,
    gallery: null,
    galleryLabels: null,
    comingSoon: true,
    shopifyId: null,
    description: 'Bewaar alle bijzondere momenten van het eerste levensjaar van je baby.',
    longDescription: 'De Baby Bewaarmap is er binnenkort! Het eerste levensjaar zit vol met bijzondere momenten. Van het eerste lachje tot de eerste stapjes \u2014 bewaar ze allemaal.',
    features: [
      'Het eerste levensjaar vastgelegd',
      'Ruimte voor mijlpalen en foto\'s',
      'Zachte, speelse illustraties',
    ],
    metaTitle: 'Baby Bewaarmap \u2014 Binnenkort beschikbaar | Bewaarbaar',
    metaDescription: 'De Baby Bewaarmap: bewaar alle bijzondere momenten van het eerste levensjaar. Binnenkort beschikbaar bij Bewaarbaar.',
  },
]

export default products
export function getProductBySlug(slug) {
  return products.find(p => p.slug === slug)
}
