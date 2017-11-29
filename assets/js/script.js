axios.get(`https://swapi.co/api/films/7/`)
  .then(response => {
      characters = response.data.characters
      randomChar = characters[Math.floor(Math.random() * characters.length)]
  })
  .then(data => {
    const vm = new Vue({
    el: '#theForceChar',
    data: {
      results: '',
      randomChar: randomChar,
      images: [
        { attr: 'https://swapi.co/api/people/1/',
          image: '../assets/images/swchar/manss.png'
        },
        { attr: 'https://swapi.co/api/people/3/',
          image: '../assets/images/swchar/R2-D2.png'
        },
        { attr: 'https://swapi.co/api/people/5/',
          image: '../assets/images/swchar/Leia-Organa.png'
        },
        { attr: 'https://swapi.co/api/people/13/',
          image: '../assets/images/swchar/manss.png'
        },
        { attr: 'https://swapi.co/api/people/14/',
          image: '../assets/images/swchar/manss.png'
        },
        { attr: 'https://swapi.co/api/people/27/',
          image: '../assets/images/swchar/manss.png'
        },
        { attr: 'https://swapi.co/api/people/84/',
          image: '../assets/images/swchar/manss.png'
        },
        { attr: 'https://swapi.co/api/people/85/',
          image: '../assets/images/swchar/manss.png'
        },
        { attr: 'https://swapi.co/api/people/86/',
          image: '../assets/images/swchar/manss.png'
        },
        { attr: 'https://swapi.co/api/people/87/',
          image: '../assets/images/swchar/manss.png'
        },
        { attr: 'https://swapi.co/api/people/88/',
          image: '../assets/images/swchar/owen_lars.png'
        }
      ]
    },
    created: function () {
      this.loadQuote();
    },
    methods: {
      loadQuote: function () {
        this.results = 'Loading...';
        var sw = this;
        axios.get(`${randomChar}`)
        .then(response => {
          sw.results = response.data
          console.log(sw.results)
        })
        .catch(error => {
          this.results = 'An error occurred,' + error
        })
      }
    },
    })
  });
