const vm = new Vue({
  el: '#characters',
  data: {
    results: ''
  },
  created: function () {
    this.loadQuote();
  },
  methods: {
    loadQuote: function () {
      this.results = 'Loading...';
      axios.get("https://swapi.co/api/people/")
      .then(response => {
        this.results = response.data.results
      })
      .catch(error => {
        this.results = 'An error occurred,' + error
      })
    }
  }
});
