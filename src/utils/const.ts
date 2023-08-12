import {
  Cities,
  Extras,
  HotelReservation,
  HotelReservationWithoutId,
  Payment,
  State,
  Suite,
} from '../types/model'

export const SUITES: Suite[] = ['Junior', 'Deluxe', 'Executive', 'Terrace', 'Residential']

export const PAYMENT: Payment[] = ['Credit Card', 'PayPal', 'Cash', 'Bitcoin']

export const EXTRAS: Extras[] = [
  'ExtraBreakfast',
  'ExtraTV',
  'ExtraWiFi',
  'ExtraParking',
  'ExtraBalcony',
]
export const STATES: State[] = [
  'Alberta',
  'BritishColumbia',
  'Manitoba',
  'NewBrunswick',
  'NewfoundlandandLabrador',
  'NorthwestTerritories',
  'NovaScotia',
  'Nunavut',
  'Ontario',
  'PrinceEdwardIsland',
  'Quebec',
  'Saskatchewan',
  'Yukon',
]

export const CITIES: Cities = {
  Alberta: [
    'Banff',
    'Brooks',
    'Calgary',
    'Edmonton',
    'Fort McMurray',
    'Grande Prairie',
    'Jasper',
    'Lake Louise',
    'Lethbridge',
    'Medicine Hat',
    'Red Deer',
    'Saint Albert',
  ],
  BritishColumbia: [
    'Barkerville',
    'Burnaby',
    'Campbell River',
    'Chilliwack',
    'Courtenay',
    'Cranbrook',
    'Dawson Creek',
    'Delta',
    'Esquimalt',
    'Fort Saint James',
    'Fort Saint John',
    'Hope',
    'Kamloops',
    'Kelowna',
    'Kimberley',
    'Kitimat',
    'Langley',
    'Nanaimo',
    'Nelson',
    'New Westminster',
    'North Vancouver',
    'Oak Bay',
    'Penticton',
    'Powell River',
    'Prince George',
    'Prince Rupert',
    'Quesnel',
    'Revelstoke',
    'Rossland',
    'Trail',
    'Vancouver',
    'Vernon',
    'Victoria',
    'West Vancouver',
    'White Rock',
  ],
  Manitoba: [
    'Brandon',
    'Churchill',
    'Dauphin',
    'Flin Flon',
    'Kildonan',
    'Saint Boniface',
    'Swan River',
    'Thompson',
    'Winnipeg',
    'York Factory',
  ],
  NewBrunswick: [
    'Bathurst',
    'Caraquet',
    'Dalhousie',
    'Fredericton',
    'Miramichi',
    'Moncton',
    'Saint John',
  ],
  NewfoundlandandLabrador: [
    'Argentia',
    'Bonavista',
    'Channel-Port aux Basques',
    'Corner Brook',
    'Ferryland',
    'Gander',
    'Grand Falls–Windsor',
    'Happy Valley–Goose Bay',
    'Harbour Grace',
    'Labrador City',
    'Placentia',
    'Saint Anthony',
    'St. John’s',
    'Wabana',
  ],
  NorthwestTerritories: ['Fort Smith', 'Hay River', 'Inuvik', 'Tuktoyaktuk', 'Yellowknife'],
  NovaScotia: [
    'Baddeck',
    'Digby',
    'Glace Bay',
    'Halifax',
    'Liverpool',
    'Louisbourg',
    'Lunenburg',
    'Pictou',
    'Port Hawkesbury',
    'Springhill',
    'Sydney',
    'Yarmouth',
  ],
  Nunavut: ['Iqaluit'],
  Ontario: [
    'Bancroft',
    'Barrie',
    'Belleville',
    'Brampton',
    'Brantford',
    'Brockville',
    'Burlington',
    'Cambridge',
    'Chatham',
    'Chatham-Kent',
    'Cornwall',
    'Elliot Lake',
    'Etobicoke',
    'Fort Erie',
    'Fort Frances',
    'Gananoque',
    'Guelph',
    'Hamilton',
    'Iroquois Falls',
    'Kapuskasing',
    'Kawartha Lakes',
    'Kenora',
    'Kingston',
    'Kirkland Lake',
    'Kitchener',
    'Laurentian Hills',
    'London',
    'Midland',
    'Mississauga',
    'Moose Factory',
    'Moosonee',
    'Niagara Falls',
    'Niagara-on-the-Lake',
    'North Bay',
    'North York',
    'Oakville',
    'Orillia',
    'Oshawa',
    'Ottawa',
    'Parry Sound',
    'Perth',
    'Peterborough',
    'Picton',
    'Port Colborne',
    'Saint Catharines',
    'Saint Thomas',
    'Sarnia-Clearwater',
    'Sault Sainte Marie',
    'Scarborough',
    'Simcoe',
    'Stratford',
    'Sudbury',
    'Temiskaming Shores',
    'Thorold',
    'Thunder Bay',
    'Timmins',
    'Toronto',
    'Trenton',
    'Waterloo',
    'Welland',
    'West Nipissing',
    'Windsor',
    'Woodstock',
    'York',
  ],
  PrinceEdwardIsland: ['Borden', 'Cavendish', 'Charlottetown', 'Souris', 'Summerside'],
  Quebec: [
    'Asbestos',
    'Baie-Comeau',
    'Beloeil',
    'Cap-de-la-Madeleine',
    'Chambly',
    'Charlesbourg',
    'Châteauguay',
    'Chibougamau',
    'Côte-Saint-Luc',
    'Dorval',
    'Gaspé',
    'Gatineau',
    'Granby',
    'Havre-Saint-Pierre',
    'Hull',
    'Jonquière',
    'Kuujjuaq',
    'La Salle',
    'La Tuque',
    'Lachine',
    'Laval',
    'Lévis',
    'Longueuil',
    'Magog',
    'Matane',
    'Montreal',
    'Montréal-Nord',
    'Percé',
    'Port-Cartier',
    'Quebec',
    'Rimouski',
    'Rouyn-Noranda',
    'Saguenay',
    'Saint-Eustache',
    'Saint-Hubert',
    'Sainte-Anne-de-Beaupré',
    'Sainte-Foy',
    'Sainte-Thérèse',
    'Sept-Îles',
    'Sherbrooke',
    'Sorel-Tracy',
    'Trois-Rivières',
    'Val-d’Or',
    'Waskaganish',
  ],
  Saskatchewan: [
    'Batoche',
    'Cumberland House',
    'Estevan',
    'Flin Flon',
    'Moose Jaw',
    'Prince Albert',
    'Regina',
    'Saskatoon',
    'Uranium City',
  ],
  Yukon: ['Dawson', 'Watson Lake', 'Whitehorse'],
}

export const DEFAULT_VALUES: HotelReservationWithoutId = {
  stay: {
    arrivalDate: String(new Date()),
    departureDate: String(new Date().getDate() + 1),
  },
  room: {
    roomSize: undefined,
    roomQuantity: 1,
  },
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  address: {
    addressStreet: {
      streetName: '',
      streetNumber: '',
    },
    addressLocation: {
      zipCode: '',
      state: 'Ontario',
      city: 'Toronto',
    },
  },
  extras: [],
  payment: undefined,
  note: '',
  tags: [],
  reminder: false,
  newsletter: false,
  confirm: true,
}
