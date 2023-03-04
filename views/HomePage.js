export default {
  template: `        
    <div class="home-page full">
      <h1>Relax 
        <span>We will take care of your 
        <RouterLink :to="link" class="dynamic">{{wordToShow}}</RouterLink>
        </span>
      </h1>
    </div>             
    `,
  data() {
    return {
      words: ['emails', 'notes', 'books'],
      word: 'emails',
      links: ['/mail', '/note', '/book'],
      link: '/mail',
      counter: 1,
      intervalId: 0,
    }
  },
  created() {
    this.intervalId = setInterval(() => {
      if (this.counter === 3) this.counter = 0
      this.word = this.words[this.counter]
      this.link = this.links[this.counter]
      this.counter++
    }, 3000)
  },
  computed: {
    wordToShow() {
      return this.word
    },
  },
  unmounted() {
    this.intervalId = clearInterval()
  },
}
