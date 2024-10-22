<template>
  <ui-base-container>
    <ui-title-badge title="Tariflar"></ui-title-badge>
    <h2 class="title">Eng asosiysi pDaftar qulay narxlarda</h2>
    <div class="pricing-container">
      <div class="pricing-nav">
        <span class="month">Oylik</span>
        <button class="toggle-pricing" @click="toggleDiscount">
          <div :class="['circle', { active: pricingStatus }]"></div>
        </button>
        <span class="year">Yillik (Chegirma 10%)</span>
      </div>
      <div class="pricing-box">
        <div class="pricing-card">
          <div class="card-nav">
            <h4 class="card-title">Bepul</h4>
            <ui-base-badge value="Faol" v-if="freeStatus"></ui-base-badge>
          </div>
          <p class="target-audience">Yosh biznesmenlar uchun</p>
          <ul class="pricing-list">
            <li>
              <h5>Valyuta</h5>
              <span class="currency-value">0 <span>$</span></span>
            </li>
            <li>
              <h5>So'm</h5>
              <span class="currency-value">0 <span>UZS</span></span>
            </li>
          </ul>
          <ui-base-button
            set-class="pricing-button"
            :class="{ active: freeStatus }"
            >{{
              freeStatus ? "Faollashtirilgan" : "Faollashtirish"
            }}</ui-base-button
          >
          <ul class="features-list">
            <li>
              <div class="icon-back">
                <img
                  src="https://ik.imagekit.io/pdaftar/Pdaftar/icon/check.png?updatedAt=1723398469928"
                  alt="Check"
                />
              </div>
              <p>Qulay Interfeys</p>
            </li>
            <li>
              <div class="icon-back">
                <img
                  src="https://ik.imagekit.io/pdaftar/Pdaftar/icon/check.png?updatedAt=1723398469928"
                  alt="Check"
                />
              </div>
              <p>Cheklanmagan bizneslar qo’shish imkoniyati</p>
            </li>
            <li>
              <div class="icon-back">
                <img
                  src="https://ik.imagekit.io/pdaftar/Pdaftar/icon/check.png?updatedAt=1723398469928"
                  alt="Check"
                />
              </div>
              <p>Kontaklarni Mijozga Aylantirish</p>
            </li>
            <li>
              <div class="icon-back">
                <img
                  src="https://ik.imagekit.io/pdaftar/Pdaftar/icon/check.png?updatedAt=1723398469928"
                  alt="Check"
                />
              </div>
              <p>Online ishlash rejimi(tez kunda)</p>
            </li>
            <li class="line-throught">
              <div class="icon-back">
                <img
                  src="https://ik.imagekit.io/pdaftar/Pdaftar/icon/check.png?updatedAt=1723398469928"
                  alt="Check"
                />
              </div>
              <p>20 ta SMS yuborish imkoniyati</p>
            </li>
            <li class="line-throught">
              <div class="icon-back">
                <img
                  src="https://ik.imagekit.io/pdaftar/Pdaftar/icon/check.png?updatedAt=1723398469928"
                  alt="Check"
                />
              </div>
              <p>Sotuvchilar Boshqarish Imkoniyati</p>
            </li>
          </ul>
        </div>
        <div class="pricing-card">
          <div class="card-nav">
            <h4 class="card-title">Premium</h4>
            <ui-base-badge
              value="Faol"
              v-if="premiumStatus"
              :class="{ opacity: premiumStatus }"
            ></ui-base-badge>
          </div>
          <p class="target-audience">Tajribali biznesmenlar uchun</p>
          <div class="pricing-list">
            <li>
              <h5 style="background-color: #effcf2; color: #077f2e">Valyuta</h5>
              <span class="currency-value"
                >{{ computedDiscount.usd }}<span>$</span></span
              >
            </li>
            <li>
              <h5 style="background-color: #fef9ea; color: #b54d09">So'm</h5>
              <span class="currency-value"
                >{{ computedDiscount.uzs }} <span>UZS</span></span
              >
            </li>
          </div>
          <ui-base-button
            set-class="pricing-button"
            :class="{ active: premiumStatus }"
            >{{
              premiumStatus ? "Faollashtirilgan" : "Faollashtirish"
            }}</ui-base-button
          >
          <ul class="features-list">
            <li>
              <div class="icon-back">
                <img
                  src="https://ik.imagekit.io/pdaftar/Pdaftar/icon/check.png?updatedAt=1723398469928"
                  alt="Check"
                />
              </div>
              <p>Qulay Interfeys</p>
            </li>
            <li>
              <div class="icon-back">
                <img
                  src="https://ik.imagekit.io/pdaftar/Pdaftar/icon/check.png?updatedAt=1723398469928"
                  alt="Check"
                />
              </div>
              <p>Cheklanmagan bizneslar qo’shish imkoniyati</p>
            </li>
            <li>
              <div class="icon-back">
                <img
                  src="https://ik.imagekit.io/pdaftar/Pdaftar/icon/check.png?updatedAt=1723398469928"
                  alt="Check"
                />
              </div>
              <p>Kontaklarni Mijozga Aylantirish</p>
            </li>
            <li>
              <div class="icon-back">
                <img
                  src="https://ik.imagekit.io/pdaftar/Pdaftar/icon/check.png?updatedAt=1723398469928"
                  alt="Check"
                />
              </div>
              <p>Online ishlash rejimi(tez kunda)</p>
            </li>
            <li>
              <div class="icon-back">
                <img
                  src="https://ik.imagekit.io/pdaftar/Pdaftar/icon/check.png?updatedAt=1723398469928"
                  alt="Check"
                />
              </div>
              <p>20 ta SMS yuborish imkoniyati</p>
            </li>
            <li>
              <div class="icon-back">
                <img
                  src="https://ik.imagekit.io/pdaftar/Pdaftar/icon/check.png?updatedAt=1723398469928"
                  alt="Check"
                />
              </div>
              <p>Sotuvchilar Boshqarish Imkoniyati</p>
            </li>
          </ul>
        </div>
        <div class="pricing-card korparativ">
          <div class="card-nav">
            <h4 class="card-title">Koporativ</h4>
          </div>
          <p class="target-audience">Professional biznes egalari uchun</p>
          <p>Sizga bundan ham ko’proqlarini taklif qilishimizni istaysizmi?</p>
          <h3>+998 95 221 21 44</h3>
          <ui-base-button
            set-class="pricing-button"
            style="background-color: #182230"
            >Hoziroq bog’lanish</ui-base-button
          >
        </div>
      </div>
    </div>
  </ui-base-container>
</template>

<script>
export default {
  data() {
    return {
      premiumStatus: false,
      freeStatus: true,
      premiumPrice: 2,
      pricingStatus: false,
      originalPrice: 0,
      uzsPrice: 0,
      discountValue: 10 / 100,
    };
  },
  methods: {
    sendCurrentPrice() {
      const apiKey = "e24eb8c0e5038f16929dcd1e";
      const url = `https://v6.exchangerate-api.com/v6/${apiKey}/latest/USD`;
      fetch(url)
        .then((response) => {
          if (!response.ok) {
            throw new Error("Serverda xatolik:" + response.status);
          }
          const data = response.json();

          return data;
        })
        .then((data) => {
          console.log(data.conversion_rates.UZS);
          this.uzsPrice = this.premiumPrice * data.conversion_rates.UZS;
          this.uzsPrice = Math.round(this.uzsPrice);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    toggleDiscount() {
      this.pricingStatus = !this.pricingStatus;
    },
  },
  computed: {
    computedDiscount() {
      if (this.pricingStatus) {
        return {
          uzs:
            Math.round(this.uzsPrice - this.uzsPrice * this.discountValue) * 10,
          usd:
            (this.premiumPrice - this.premiumPrice * this.discountValue) * 10,
        };
      } else {
        return { uzs: this.uzsPrice, usd: this.premiumPrice };
      }
    },
  },
  created() {
    this.sendCurrentPrice();
  },
};
</script>

<style scoped>
.container {
  text-align: center;
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

.pricing-box {
  display: flex;
  align-items: start;
  justify-content: space-between;
  gap: 2rem;
  padding-top: 2.06rem;
  flex-wrap: wrap;
}

.pricing-nav {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
}

.toggle-pricing {
  border-radius: 62.4375rem;
  border: 1px solid #f2f4f7;
  background: #fff;
  width: 3.5rem;
  padding: 0.25rem;
  cursor: pointer;
  outline: none;
}

.toggle-pricing .circle {
  width: 1.5rem;
  height: 1.5rem;
  background: #6938ef;
  border-radius: 50%;
  filter: drop-shadow(0px 1px 2px rgba(13, 16, 23, 0.04))
    drop-shadow(0px 1px 3px rgba(13, 16, 23, 0.12));
}

.toggle-pricing .circle.active {
  transform: translateX(1.4rem);
}

.pricing-card {
  border-radius: 0.625rem;
  border: 1px solid #6938ef;
  background: #fff;
  display: flex;
  min-width: 380px;
  padding: 1.25rem;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.25rem;
  flex: 1 0 0;
  width: 100%;
}
.pricing-card.korparativ {
  text-align: start;
}
.card-title {
  color: #000;
  font-family: "Gilroy";
  font-size: 1.5rem;
  font-weight: 700;
}

.pricing-card .status.active {
  color: #6938ef;
  /* Text sm/Medium */
  font-family: "Inter";
  font-size: 0.875rem;
  font-weight: 500;
  line-height: 1.25rem;
  border-radius: 624.9375rem;
  border: 1.5px solid #6938ef;
  padding: 0.38rem 0.62rem;
}

.card-nav {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.pricing-list {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  padding: 0;
  width: 100%;
}

.pricing-list li h5 {
  border-radius: 32px;
  background: var(--System-colors-Gray-100, #f1f2f4);
  padding: 10px;
  width: 170px;
  color: var(--System-colors-Gray-500, #636c79);
  leading-trim: both;
  text-edge: cap;
  font-family: "Gilroy";
  font-size: 14px;
  font-weight: 500;
  line-height: normal;
  margin-bottom: 8px;
}

.currency-value {
  color: #000;
  text-align: center;
  font-family: "Gilroy";
  font-size: 24px;
  font-weight: 700;
}
.currency-value span {
  color: #636c79;
  font-family: "Gilroy";
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
}

.pricing-button {
  border-radius: 10px;
  background: #6938ef;
  width: 100%;
  padding: 16px 32px;
  color: var(--Colors-Text-text-white, #fff);
  text-align: center;
  font-family: "DM Sans";
  font-size: 15px;
  font-weight: 500;
  line-height: 24px; /* 160% */
}

.pricing-button.active {
  background-color: #f1f2f4;
  color: #99a0a8;
  cursor: not-allowed;
}

.features-list li {
  display: flex;
  align-items: center;
  justify-self: start;
  gap: 7px;
}

.features-list li:not(:last-child) {
  margin-bottom: 20px;
}

.features-list li img {
  position: relative;
}

.features-list li .icon-back {
  width: 22px;
  height: 22px;
  border-radius: 44px;
  background: #f4f3ff;
}

.line-throught {
  text-decoration: line-through;
}

.opacity {
  opacity: 0;
  visibility: hidden;
}
/* 680 */
@media screen and (max-width: 680px) {
  .pricing-card {
    min-width: unset;
  }
}

/* 480 */
@media screen and (max-width: 480px) {
  .pricing-nav {
    margin-top: 12px;
  }
  .pricing-list {
    flex-direction: column;
  }
  .features-list li p {
    text-align: start;
  }
}
</style>
