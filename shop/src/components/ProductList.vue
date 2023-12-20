<script>
import CatalogItem from './Catalog-item.vue'

export default {
  data() {
    return {
      products: []
    }
  },
  mounted() {
    this.fetchProduct()
  },
  methods: {
    async fetchProduct() {
      try {
        const response = await this.$axios.get('https://fakestoreapi.com/products')
        this.products = response.data
        console.log(this.products)
      } catch (error) {}
    }
  },
  components: {
    CatalogItem
  }
}
</script>

<template>
  <div class="catalog">
    <div class="catalog__header">
      <div class="catalog__name">Все кроссовки</div>
      <div class="catalog__find">
        <button class="catalog__find-btn">
          <svg class="find__icon">
            <use href="../assets/sprite.svg#icon-find"></use>
          </svg>
        </button>
        <input type="text" class="catalog__find-input" placeholder="Поиск..." />
      </div>
    </div>
    <div class="catalog__card-row">
      <div v-for="product in products" :key="product" class="catalog__items">
        <CatalogItem :title="product.title" />
      </div>
    </div>
  </div>
</template>

<style>
.catalog__header {
  display: flex;
  justify-content: space-between;
}
.catalog__name {
  color: #000;
  font-family: Inter;
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}
.catalog__find {
  width: 250px;
  height: 45px;
  padding: 0 0 0 18px;
  box-sizing: border-box;
  color: #f3f3f3;
  border-radius: 10px;
  border: 1px solid #f3f3f3;
  display: flex;
}
.catalog__find-btn {
  display: flex;
  align-items: center;
  background-color: #fff;
  border: none;
  cursor: pointer;
}
.find__icon {
  width: 18px;
  height: 18px;
  margin-right: 14px;
  fill: #e4e4e4;
  stroke: #e4e4e4;
}
.catalog__find-input {
  border: none;
}
.catalog__find-input:focus {
  outline: 0;
  outline-offset: 0;
}
.catalog__find-input::placeholder {
  color: #c4c4c4;
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}

.catalog__card-row {
  flex-wrap: wrap;
  display: flex;
  margin: 0 -20px;
}
.catalogItem {
  width: 25%;
}
</style>
