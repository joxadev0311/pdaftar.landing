<template>
  <div class="app-down">
    <ui-base-container>
      <div class="app-down-hero">
        <picture>
          <img
            src="https://ik.imagekit.io/pdaftar/Pdaftar/appdown.png?updatedAt=1727495197721"
            alt="App down hero"
          />
        </picture>
      </div>
      <div class="app-down-content">
        <ui-title-badge title="Qurilma onlayn do’konlarda"></ui-title-badge>
        <h2 class="title">
          pDaftar ilovasini Playmarket va AppStore orqali yuklab oling
        </h2>
        <h4 class="sub-title">
          Sizda do'kon(lar)ingizdagi qarzdorlik balanslarini bir necha
          clicklarda ko'ra olasiz.
        </h4>
        <div class="app-download">
          <ul>
            <li>
              <a href="https://apps.apple.com/vg/app/pdaftar/id6511237681">
                <picture>
                  <img
                    src="https://ik.imagekit.io/pdaftar/Pdaftar/Mobile%20app%20store%20badge.svg?updatedAt=1727495196798"
                    alt="App store"
                  />
                </picture>
              </a>
            </li>
            <li>
              <a
                href="https://play.google.com/store/apps/details?id=uz.app.pdaftaruz&pcampaignid=web_share"
              >
                <picture>
                  <img
                    src="https://ik.imagekit.io/pdaftar/Pdaftar/Mobile%20play%20store%20badge.svg?updatedAt=1727495196940"
                    alt="Play store"
                  />
                </picture>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </ui-base-container>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 32px;
  padding: 96px 0;
  .title {
    margin: 24px 0;
  }
  .app-download {
    margin-top: 46px;
    ul {
      display: flex;
      align-items: center;
      gap: 12px;
    }
  }
}
@media screen and (max-width: 1024px) {
  .container {
    flex-direction: column;
  }
}
@media screen and (max-width: 768px) {
  .app-down-hero {
    img {
      width: 100%;
    }
  }
}
@media screen and (max-width: 480px) {
  .container {
    padding: 4rem 0;
  }
}
@media screen and (max-width: 320px) {
  .app-download {
    ul {
      flex-direction: column;
      justify-content: start;
      align-items: start !important;
    }
  }
}
</style>
