define({ "api": [
  {
    "type": "POST",
    "url": "/api/barber/",
    "title": "Create Barber",
    "name": "createBarber",
    "group": "Barber",
    "version": "0.0.0",
    "filename": "src/controllers/barber.controller.ts",
    "groupTitle": "Barber",
    "sampleRequest": [
      {
        "url": "https://barbago.herokuapp.com/api/barber/"
      }
    ]
  },
  {
    "type": "DELETE",
    "url": "/api/barber/:id",
    "title": "Delete Barber",
    "name": "deleteBarber",
    "group": "Barber",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Barber ID</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/controllers/barber.controller.ts",
    "groupTitle": "Barber",
    "sampleRequest": [
      {
        "url": "https://barbago.herokuapp.com/api/barber/:id"
      }
    ]
  },
  {
    "type": "GET",
    "url": "/api/barber/",
    "title": "Get All Barbers",
    "name": "getAllBarbers",
    "group": "Barber",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "limit",
            "description": "<p>Optional number of results per page</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "page",
            "description": "<p>Optional page number of results</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/controllers/barber.controller.ts",
    "groupTitle": "Barber",
    "sampleRequest": [
      {
        "url": "https://barbago.herokuapp.com/api/barber/"
      }
    ]
  },
  {
    "type": "GET",
    "url": "/api/barber/:id",
    "title": "Get Barber",
    "name": "getBarber",
    "group": "Barber",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Barber ID</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/controllers/barber.controller.ts",
    "groupTitle": "Barber",
    "sampleRequest": [
      {
        "url": "https://barbago.herokuapp.com/api/barber/:id"
      }
    ]
  },
  {
    "type": "GET",
    "url": "/api/barber/search",
    "title": "Search Barbers",
    "name": "searchBarbers",
    "group": "Barber",
    "version": "0.0.0",
    "filename": "src/controllers/barber.controller.ts",
    "groupTitle": "Barber",
    "sampleRequest": [
      {
        "url": "https://barbago.herokuapp.com/api/barber/search"
      }
    ]
  },
  {
    "type": "PUT",
    "url": "/api/barber/:id",
    "title": "Update Barber",
    "name": "updateBarber",
    "group": "Barber",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Barber ID</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/controllers/barber.controller.ts",
    "groupTitle": "Barber",
    "sampleRequest": [
      {
        "url": "https://barbago.herokuapp.com/api/barber/:id"
      }
    ]
  }
] });
