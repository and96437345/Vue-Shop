<script>
  // Import Swiper Vue.js components
  import { Swiper, SwiperSlide } from 'swiper/vue';

  // Import Swiper styles
  import 'swiper/css';

  import 'swiper/css/navigation';

  // import './style.css';

  // import required modules
  import { Navigation } from 'swiper/modules';

  export default {
    components: {
      Swiper,
      SwiperSlide,
    },
    setup() {
      return {
        modules: [Navigation],
      };
    },
  };
</script>

<template>
  <swiper :navigation="true" :modules="modules" class="mySwiper">
    <swiper-slide>
      <div class="hero">
          <div class="hero__row">
            <div class="hero__desc">
              <div class="hero__desc-title">Stan Smith<span class="black-font">, Forever!</span></div>
              <button class="hero__desc-button btn">Купить</button>
              <div class="hero__desc-logo">
                <img src="../assets/hero-logo.svg" alt="">
              </div>
            </div>
            <div class="hero__image">
              <img src="../assets/hero.png" alt="">
            </div>
          </div>
        </div>
    </swiper-slide>
    <swiper-slide>
      <div class="hero">
          <div class="hero__row">
            <div class="hero__desc">
              <div class="hero__desc-title">Stan Smith<span class="black-font">, Forever!</span></div>
              <button class="hero__desc-button btn">Купить</button>
              <div class="hero__desc-logo">
                <img src="../assets/hero-logo.svg" alt="">
              </div>
            </div>
            <div class="hero__image">
              <img src="../assets/hero.png" alt="">
            </div>
          </div>
        </div>
    </swiper-slide>
    <swiper-slide>
      <div class="hero">
          <div class="hero__row">
            <div class="hero__desc">
              <div class="hero__desc-title">Stan Smith<span class="black-font">, Forever!</span></div>
              <button class="hero__desc-button btn">Купить</button>
              <div class="hero__desc-logo">
                <img src="../assets/hero-logo.svg" alt="">
              </div>
            </div>
            <div class="hero__image">
              <img src="../assets/hero.png" alt="">
            </div>
          </div>
        </div>
    </swiper-slide>
  </swiper>
</template>

<style>
.hero {
  padding: 45px 0 39px;
}
.hero__row {
  position: relative;
  display: flex;
  justify-content: space-between;
  height: 300px;
  border-radius: 20px;
  background: #F4EFE9;
}
.hero__image {
  border-radius: 0px 20px 20px 0px;
  height: 100%;
}
.hero__desc {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 88px;
  width: 100%;
}
.hero__desc-logo {
  position: absolute;
  top: 16px;
  left: 20px;
}
.hero__desc-title {
  max-width: 245px;
  padding-left: 30px;
  box-sizing: border-box;
  color: #8BB43C;
  font-family: Inter;
  font-size: 38px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-bottom: 18px;
}
.black-font {
  color: #000;
}
.hero__desc-button {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 178px;
  height: 48px;
  border-radius: 110px;
  border: none;
  background: #A5D364;
  color: #FFF;
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-transform: uppercase;
  cursor: pointer;
}

.swiper {
  width: 100%;
  height: 100%;
}
.swiper-button-prev {
  left: 2px;
}

.swiper-button-next {
  right: 2px;
}
.swiper-button-next::after {
  font-size: 12px !important;
}
.swiper-button-prev::after {
  font-size: 12px !important;
}
.swiper-button-prev,
.swiper-button-next {
  background-color: #fff;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  color: #c8c8c8;
  box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.04); 
}
.swiper-button-prev:hover,
.swiper-button-next:hover {
  color: blue;
}
.swiper-button-disabled {
  display: none;
}
</style>
