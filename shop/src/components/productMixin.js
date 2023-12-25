export default {
  data() {
    return {
      products: [],
      cart: []
    }
  },
  mounted() {
    this.fetchProduct()
  },
  methods: {
    async fetchProduct() {
      try {
        const responseCurrency = await this.$axios.get('https://www.cbr-xml-daily.ru/daily_json.js')
        this.usd = responseCurrency.data.Valute.USD.Value
        const response = await this.$axios.get('https://fakestoreapi.com/products')
        this.products = response.data
        console.log(this.usd)
        console.log(this.products)
      } catch (error) {}
    },
    addToCart(product) {
      if (!this.isInCart(product)) {
        this.cart.push(product)
      } else {
        const index = this.cart.findIndex((item) => item.id === product.id)
        if (index !== -1) {
          this.cart.splice(index, 1)
        }
      }
      console.log(this.cart)
    },
    isInCart(product) {
      return this.cart.some(function (item) {
        return item.id === product.id
      })
    }
  }
}
