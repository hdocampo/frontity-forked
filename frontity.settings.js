const settings = {
  "name": "fisioespalda",
  "state": {
    "frontity": {
      "url": "https://fisioespalda.neoimage.net",
      "title": "Fisioespalda",
      "description": "Nos encanta cuidarte"
    }
  },
  "packages": [
    {
      "name": "@frontity/mars-theme",
      "state": {
        "theme": {
          "menu": [
            [
              "Home",
              "/"
            ],
            [
              "Sobre Nosotros",
              "/sobre-nosotros/"
            ],
            [
              "Contacto",
              "/contacto/"
            ]
          ],
          "featured": {
            "showOnList": false,
            "showOnPost": false
          }
        }
      }
    },
    {
      "name": "@frontity/wp-source",
      "state": {
        "source": {
          "api": "https://www.fisioespalda.com.uy/wp-json"
        }
      }
    },
    "@frontity/tiny-router",
    "@frontity/html2react"
  ]
};

export default settings;
