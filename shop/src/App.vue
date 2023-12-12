<script>

</script>


<template>
  <header class="header">
    <div class="container">
      <div class="header-row row">

        <div class="header-logo row">
          <div class="header-logo__image">
            <img src="./assets/logo.png" alt="">
          </div>
          <div class="header-logo__desc">
            <div class="header-logo__title">REACT SNEAKERS</div>
            <div class="header-logo__subtitle">Магазин лучших кроссовок</div>
          </div> 
        </div>

        <ul class="header-menu row">
          <li class="header-menu__item row">
            <div class="header-menu__icon">
              <svg class="header-icon">
                <use href="./assets/sprite.svg#icon-card"></use>
              </svg>
            </div>
            <div class="header-menu__desc">1205 руб.</div>
          </li>
          <li class="header-menu__item row">
            <div class="header-menu__icon">
              <svg class="header-icon">
                <use href="./assets/sprite.svg#icon-fav"></use>
              </svg>
            </div>
            <div class="header-menu__desc">Закладки</div>
          </li>
          <li class="header-menu__item row">
            <div class="header-menu__icon">
              <svg class="header-icon">
                <use href="./assets/sprite.svg#icon-lk"></use>
              </svg>
            </div>
            <div class="header-menu__desc">Профиль</div>
          </li>
        </ul>
      </div>
      
    </div>
  </header>
</template>


<style>
  .container {
    width: 1080px;
  }
  .row {
    display: flex;
  }
  .header-row {
    border: 1px solid;
  }
  .header-menu {
    margin: 0;
    padding: 0;
    list-style: none;
  }
</style>