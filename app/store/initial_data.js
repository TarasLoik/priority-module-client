// clients
let demo_clients = [
  {
    'name': "שחר חיים",
    'number': 1130,
    'fields': ['שחר חיים 1', 'שחר חיים 2', 'שחר חיים 3'],
    'discount': 5,
    'region': 'מחוז המרכז',
    'city': 'גבעת חיים',
    'contacts': {
      'phone': '+972-1800-000-654',
      'fax': '+972-1800-000-654'
    },
    'orders' : [
      {
        'date': '01/01/2016',
        'field': 'שחר חיים 1',
        'product': 'UREA(NPK:46-0-0)',
        'discount': 0,
        'price': 1000
      },
      {
        'date': '01/02/2016',
        'field': 'שחר חיים 1',
        'product': 'UREA(NPK:46-0-0)',
        'discount': 5,
        'price': 950
      },
      {
        'date': '01/03/2016',
        'field': 'שחר חיים 1',
        'product': 'UREA(NPK:46-0-0)',
        'discount': 10,
        'price': 900
      },
      {
        'date': '01/04/2016',
        'field': 'שחר חיים 1',
        'product': 'UREA(NPK:46-0-0)',
        'discount': 20,
        'price': 800
      },

    ]

  },
  {
    'name': "שחר אורן",
    'number': 1150,
    'fields': ['שחר אורן 1', 'שחר אורן 2', 'שחר אורן 3'],
    'discount': 3,
    'region': 'מחוז המרכז',
    'city': 'גבעת חיים',
    'contacts': {
      'phone': '+972-1800-000-456',
      'fax': '+972-1800-000-456'
    },
    'orders' : [
      {
        'date': '01/01/2016',
        'field': 'שחר אורן 1',
        'product': 'UREA(NPK:46-0-0)',
        'discount': 0,
        'price': 1000
      },
      {
        'date': '01/02/2016',
        'field': 'שחר אורן 1',
        'product': 'UREA(NPK:46-0-0)',
        'discount': 5,
        'price': 950
      },
      {
        'date': '01/03/2016',
        'field': 'שחר אורן 1',
        'product': 'UREA(NPK:46-0-0)',
        'discount': 10,
        'price': 900
      },
      {
        'date': '01/04/2016',
        'field': 'שחר אורן 1',
        'product': 'UREA(NPK:46-0-0)',
        'discount': 20,
        'price': 800
      },

    ]
  },
  {
    'name': "שחר דורון",
    'number': 1139,
    'fields': ['שחר דורון 1', 'שחר דורון 2', 'שחר דורון 3'],
    'discount': 7,
    'region': 'מחוז המרכז',
    'city': 'גבעת חיים',
    'contacts': {
      'phone': '+972-1800-332-000',
      'fax': '+972-1800-332-000'
    },
    'orders' : [
      {
        'date': '01/01/2016',
        'field': 'שחר דורון 1',
        'product': 'UREA(NPK:46-0-0)',
        'discount': 0,
        'price': 1000
      },
      {
        'date': '01/02/2016',
        'field': 'שחר דורון 1',
        'product': 'UREA(NPK:46-0-0)',
        'discount': 5,
        'price': 950
      },
      {
        'date': '01/03/2016',
        'field': 'שחר דורון 1',
        'product': 'UREA(NPK:46-0-0)',
        'discount': 10,
        'price': 900
      },
      {
        'date': '01/04/2016',
        'field': 'שחר דורון 1',
        'product': 'UREA(NPK:46-0-0)',
        'discount': 20,
        'price': 800
      },

    ]
  },
  {
    'name': "שחר חיים",
    'number': 1130,
    'fields': ['שחר חיים 1', 'שחר חיים 2', 'שחר חיים 3'],
    'discount': 5,
    'region': 'מחוז המרכז',
    'city': 'גבעת חיים',
    'contacts': {
      'phone': '+972-1800-000-654',
      'fax': '+972-1800-000-654'
    }

  },
  {
    'name': "שחר אורן",
    'number': 1150,
    'fields': ['שחר אורן 1', 'שחר אורן 2', 'שחר אורן 3'],
    'discount': 3,
    'region': 'מחוז המרכז',
    'city': 'גבעת חיים',
    'contacts': {
      'phone': '+972-1800-000-456',
      'fax': '+972-1800-000-456'
    }
  },
  {
    'name': "שחר דורון",
    'number': 1139,
    'fields': ['שחר דורון 1', 'שחר דורון 2', 'שחר דורון 3'],
    'discount': 7,
    'region': 'מחוז המרכז',
    'city': 'גבעת חיים',
    'contacts': {
      'phone': '+972-1800-332-000',
      'fax': '+972-1800-332-000'
    }
  },
  {
    'name': "שחר חיים",
    'number': 1130,
    'fields': ['שחר חיים 1', 'שחר חיים 2', 'שחר חיים 3'],
    'discount': 5,
    'region': 'מחוז המרכז',
    'city': 'גבעת חיים',
    'contacts': {
      'phone': '+972-1800-000-654',
      'fax': '+972-1800-000-654'
    }

  },
  {
    'name': "שחר אורן",
    'number': 1150,
    'fields': ['שחר אורן 1', 'שחר אורן 2', 'שחר אורן 3'],
    'discount': 3,
    'region': 'מחוז המרכז',
    'city': 'גבעת חיים',
    'contacts': {
      'phone': '+972-1800-000-456',
      'fax': '+972-1800-000-456'
    }
  },
  {
    'name': "שחר דורון",
    'number': 1139,
    'fields': ['שחר דורון 1', 'שחר דורון 2', 'שחר דורון 3'],
    'discount': 7,
    'region': 'מחוז המרכז',
    'city': 'גבעת חיים',
    'contacts': {
      'phone': '+972-1800-332-000',
      'fax': '+972-1800-332-000'
    }
  },

];

//products
let products = [
  'UREA(NPK:46-0-0)',
  'POTASSIUM NITRATE(NPK:13-0-46)',
  'SOLIMIX(NPK:15-0-15)',
  'SOLIMIX:(NPK:19-19-19)',
  'UREA(NPK:46-0-0)',
  'POTASSIUM NITRATE(NPK:13-0-46)',
  'SOLIMIX(NPK:15-0-15)',
  'SOLIMIX:(NPK:19-19-19)',
  'UREA(NPK:46-0-0)',
  'POTASSIUM NITRATE(NPK:13-0-46)',
  'SOLIMIX(NPK:15-0-15)',
  'SOLIMIX:(NPK:19-19-19)',
  'UREA(NPK:46-0-0)',
  'POTASSIUM NITRATE(NPK:13-0-46)',
  'SOLIMIX(NPK:15-0-15)',
  'SOLIMIX:(NPK:19-19-19)',
  'UREA(NPK:46-0-0)',
  'POTASSIUM NITRATE(NPK:13-0-46)',
  'SOLIMIX(NPK:15-0-15)',
  'SOLIMIX:(NPK:19-19-19)',
  'UREA(NPK:46-0-0)',
  'POTASSIUM NITRATE(NPK:13-0-46)',
  'SOLIMIX(NPK:15-0-15)',
  'SOLIMIX:(NPK:19-19-19)',
  'UREA(NPK:46-0-0)',
  'POTASSIUM NITRATE(NPK:13-0-46)',
  'SOLIMIX(NPK:15-0-15)',
  'SOLIMIX:(NPK:19-19-19)',
];


export default { demo_clients, products };