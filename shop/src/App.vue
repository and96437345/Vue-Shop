<script setup>
//import Card from './components/Card.vue'
</script>

<template>
  <div class="wrapper">
    <header class="header">
      <div class="container">
        <div class="header__row">
          <div class="header__logo logo">
            <div class="logo__image">
              <img src="./assets/logo.svg" alt="" />
            </div>
            <div class="logo__right">
              <div class="logo__name">REACT SNEAKERS</div>
              <div class="logo__desc">Магазин лучших кроссовок</div>
            </div>
          </div>
          <div class="header__menu menu">
            <nav class="menu__nav">
              <ul class="menu__list">
                <li class="menu__item">
                  <a href="" class="menu__link">
                    <svg class="menu__icon menu__icon--cart">
                      <use href="./assets/sprite.svg#icon-cart"></use>
                    </svg>
                    1205 руб.
                  </a>
                </li>
                <li class="menu__item">
                  <a href="" class="menu__link">
                    <svg class="menu__icon"><use href="./assets/sprite.svg#icon-fav"></use></svg>
                    Закладки
                  </a>
                </li>
                <li class="menu__item">
                  <a href="" class="menu__link">
                    <svg class="menu__icon"><use href="./assets/sprite.svg#icon-lk"></use></svg>
                    Профиль
                  </a>
                </li>
              </ul>
            </nav>
            <div class="element"></div>
          </div>
        </div>
      </div>
    </header>

    <main class="main">
      <div class="container">
        <div class="hero">
          <div class="hero__row">
            <div class="hero__desc">
              <div class="hero__desc-title">Stan Smith<span class="black-font">, Forever!</span></div>
              <button class="hero__desc-button btn">Купить</button>
              <div class="hero__desc-logo">
                <img src="./assets/hero-logo.svg" alt="">
              </div>
            </div>
            <div class="hero__image">
              <img src="./assets/hero.png" alt="">
            </div>
          </div>
        </div>
                
      </div>
    </main>

  </div>
</template>

<style>
body {
  background: #e7f6ff;
  padding-top: 85px;
}
.wrapper {
  max-width: 1080px;
  margin: 0 auto;
  border-radius: 20px;
  background: #fff;
  box-shadow: 0px 10px 20px 0px rgba(0, 0, 0, 0.04);
  min-height: 90vh;
}
.container {
  max-width: 960px;
  margin: 0 auto;
  width: 96%;
}

.header {
  padding: 44px 0;
  border-bottom: 1px solid #eaeaea;
}
.header__row {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.logo {
  display: flex;
  align-items: center;
}
.logo__image {
  flex-shrink: 0;
  margin-right: 16px;
}
.logo__name {
  color: #000;
  font-family: Inter;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-transform: uppercase;
}
.logo__desc {
  color: #9d9d9d;
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}
.menu__list {
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  list-style: none;
}
.menu__icon {
  height: 18px;
  width: 18px;
  margin-right: 8px;
}
.menu__icon:not(.menu__icon--cart) {
  fill: #9b9b9b;
}
.menu__icon--cart {
  stroke: #9b9b9b;
}
.menu__link {
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #5C5C5C;
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
}
.menu {
  width: 35%;
}

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
}

</style>