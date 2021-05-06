define({ "api": [
  {
    "type": "post",
    "url": "/api/barber/create",
    "title": "create barber",
    "name": "createBarber",
    "group": "Barber",
    "version": "0.0.0",
    "filename": "routes/barber.route.js",
    "groupTitle": "Barber"
  },
  {
    "type": "DELETE",
    "url": "/api/barber/:id",
    "title": "delete one barber",
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
    "filename": "routes/barber.route.js",
    "groupTitle": "Barber"
  },
  {
    "type": "get",
    "url": "/api/barber/",
    "title": "get all barbers",
    "name": "getAllBarbers",
    "group": "Barber",
    "version": "0.0.0",
    "filename": "routes/barber.route.js",
    "groupTitle": "Barber"
  },
  {
    "type": "get",
    "url": "/api/barber/:id",
    "title": "get one barber",
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
    "filename": "routes/barber.route.js",
    "groupTitle": "Barber"
  },
  {
    "type": "GET",
    "url": "/api/barber/search",
    "title": "search for barbers",
    "name": "searchBarbers",
    "group": "Barber",
    "version": "0.0.0",
    "filename": "routes/barber.route.js",
    "groupTitle": "Barber"
  },
  {
    "type": "PUT",
    "url": "/api/barber/:id",
    "title": "update one barber",
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
    "filename": "routes/barber.route.js",
    "groupTitle": "Barber"
  }
] });
