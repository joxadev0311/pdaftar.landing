<template>
  <ui-base-container>
    <h4 class="sub-title">Qanday ishlaydi?</h4>
    <h2 class="title">Ilovadan foydalanish uchun</h2>
    <div class="content">
      <div class="content-card">
        <img
          src="https://ik.imagekit.io/pdaftar/Pdaftar/icon/download%20app.png?updatedAt=1723397417709"
          alt="download img"
        />
        <h4 class="card-title">Ilovani yuklang</h4>
        <p class="card-descr">
          Ilovamiz iOS va Android tizimlari uchun Appstore va Playmarketda
          mavjud
        </p>
      </div>
      <img
        src="https://ik.imagekit.io/pdaftar/Pdaftar/icon/Arrow%201.png?updatedAt=1723397865153"
        alt="arrow"
      />
      <div class="content-card">
        <img
          src="https://ik.imagekit.io/pdaftar/Pdaftar/icon/registrate.png?updatedAt=1723397621832"
          alt="registration"
        />
        <h4 class="card-title">Ro’yxatdan o’ting</h4>
        <p class="card-descr">
          Bu sizga Pdaftar ilovamizni imkoniyalaridan foydalanish imkoniyatini
          beradi
        </p>
      </div>
      <img
        src="https://ik.imagekit.io/pdaftar/Pdaftar/icon/Arrow%201.png?updatedAt=1723397865153"
        alt="arrow"
      />

      <div class="content-card">
        <img
          src="https://ik.imagekit.io/pdaftar/Pdaftar/icon/Calculate.png?updatedAt=1723397671368"
          alt=""
        />
        <h4 class="card-title">Joyida hisob-kitob</h4>
        <p class="card-descr">
          Siz kunlik oldi-berdi jarayonlarini onlayn yozib borasiz va bu juda
          xavfsiz va samarali
        </p>
      </div>
      <img
        src="https://ik.imagekit.io/pdaftar/Pdaftar/icon/Arrow%201.png?updatedAt=1723397865153"
        alt="arrow"
      />

      <div class="content-card">
        <img
          src="https://ik.imagekit.io/pdaftar/Pdaftar/icon/monitoring.png?updatedAt=1723397703032"
          alt="monitoring"
        />
        <h4 class="card-title">Qarzlar monitoringi</h4>
        <p class="card-descr">
          Siz istalgan vaqtda siz kimga va kimdan qancha qarz borligini bilib
          turasiz
        </p>
      </div>
    </div>
  </ui-base-container>
</template>

<style scoped>
.container {
  padding: 6rem 0;
}

.content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  margin-top: 2.06rem;
}

.sub-title {
  display: inline-block;
  border-radius: 2.25rem;
  background: #ebe9fe;
  padding: 0.625rem 2rem;
  margin-bottom: 1rem;
  /* text */
  color: #7f56d9;
  font-size: 0.9375rem;
  font-weight: 500;
}

.title {
  color: #000;
  font-size: 3rem;
  font-weight: 700;
  line-height: 5rem;
}

.content-card {
  border-radius: 0.5rem;
  border: 1px solid #eaecf0;
  background: #fff;
  max-width: 17.5rem;
  min-height: 17.1875rem;
  padding: 1.2rem;
  transition: all 0.2s ease;
}
.content-card:hover {
  box-shadow: 0px 20px 60px 0px rgba(60, 32, 137, 0.12);
}

.content-card:hover .card-descr {
  color: #101828;
}

.content-card img {
  margin-bottom: 1.38rem;
}

.card-title {
  color: #000;
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 1.38rem;
}

.card-descr {
  color: #667085;
  font-size: 0.9375rem;
  font-weight: 400;
  line-height: 1.5rem;
}

@media screen and (max-width: 1400px) {
  .content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    gap: 1rem;
  }
  .content img[alt="arrow"] {
    display: none;
  }

  .content-card {
    max-width: unset;
  }
}

@media screen and (max-width: 768px) {
  .title {
    font-size: 2.5rem;
  }
}

@media screen and (max-width: 640px) {
  .content {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr;
    gap: 1rem;
  }
}

@media screen and (max-width: 560px) {
  .title {
    line-height: 3rem;
  }
}

@media screen and (max-width: 480px) {
  .title {
    font-size: 2rem;
    line-height: 2.5rem;
  }
}
</style>
