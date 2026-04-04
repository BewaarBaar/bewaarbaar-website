import basisschoolImg from '../assets/Basisschool-Bewaarmap-square.png'
import kinderdagverblijfImg from '../assets/kinderdagverblijf-Bewaarmap-square.jpg'
import mapVoorkant from '../assets/Bewaarbaar_voorkant_flat.jpg'
import mapAchterkant from '../assets/Bewaarbaar_achterkant_flat.jpg'
import mapIK from '../assets/Bewaarbaar_IK_flat.jpg'
import mapInhoud from '../assets/Bewaarbaar_inhoud_flat.jpg'
import mapKnutsel from '../assets/Bewaarbaar_knutsel_flat.jpg'

const products = [
  {
    slug: 'basisschool-bewaarmap',
    name: 'De Grote Basisschool Bewaarmap',
    subtitle: 'Van groep 1 t/m groep 8',
    price: '\u20AC39,95',
    image: mapVoorkant,
    hoverImage: mapInhoud,
    gallery: [mapVoorkant, mapInhoud, mapKnutsel, mapIK, mapAchterkant],
    galleryLabels: ['Voorkant', 'Inhoud', 'Knutselwerkjes', 'Dit ben ik', 'Achterkant'],
    comingSoon: false,
    shopifyId: '10609642963281',
    description: 'De basisschool duurt maar 8 jaar. Maar de herinneringen zijn voor altijd.',
    longDescription: 'Die eerste tekening in groep 1. Het rapport vol sterren. De schoolfoto waarop ze nog zo klein zijn. Voor je het weet zijn ze voorbij.\n\nDe Grote Basisschool Bewaarmap bewaart alles op \u00e9\u00e9n plek \u2014 met per groep eigen pagina\u2019s, foto-hoesjes en invulvelden voor de mooiste momenten.',
    sections: [
      {
        title: 'Wat zit er in de map?',
        intro: 'Voor elk van de 8 groepen krijgt jouw kind een eigen sectie met:',
        items: [
          'Een invulpagina met vragen over dat schooljaar \u2014 wie is je beste vriendje, wat vind je leuk in de klas, wat wil je later worden',
          'Foto-hoesjes voor de schoolfoto\u2019s per jaar',
          'Ruimte voor tekeningen, knutselwerkjes en rapporten',
          'Speelse illustraties die passen bij de leeftijd',
        ],
      },
      {
        title: 'Materiaal & formaat',
        text: 'De map is gemaakt van stevige materialen, heeft een ringband systeem zodat je makkelijk pagina\u2019s kunt toevoegen, en is A4-formaat zodat al het schoolwerk erin past.\nOntworpen en gedrukt in Nederland. \ud83c\uddf3\ud83c\uddf1',
      },
    ],
    closingText: 'Dit is niet zomaar een map. Dit is de map van de kindertijd van jouw kind.\nOver 20 jaar bladeren jullie er samen doorheen.',
    features: [
      '8 secties \u2014 \u00e9\u00e9n per groep',
      'Invulpagina\u2019s per schooljaar',
      'Foto-hoesjes voor schoolfoto\u2019s',
      'Ruimte voor tekeningen & rapporten',
      'Stevig ringband systeem',
      'A4-formaat',
      'Ontworpen & gedrukt in Nederland \ud83c\uddf3\ud83c\uddf1',
    ],
    shippingLines: [
      '\ud83d\udce6 Verzending \u20AC3,95 \u2014 Gratis vanaf \u20AC50',
      '\ud83d\ude9a Geleverd binnen 2-3 werkdagen',
    ],
    metaTitle: 'Basisschool Bewaarmap \u2014 Alle schoolherinneringen bewaren | Bewaarbaar',
    metaDescription: 'De Grote Basisschool Bewaarmap: bewaar tekeningen, rapporten en foto\'s van groep 1 t/m 8. Speels ontworpen, stevig en gemaakt in Nederland. \u20AC39,95.',
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
    price: '\u20AC39,95',
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
