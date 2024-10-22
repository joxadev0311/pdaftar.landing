<template>
  <ui-base-container>
    <div class="content">
      <a class="offer" href="#">
        Cheksiz bizneslar uchun tekin
        <svg
          width="24"
          height="25"
          viewBox="0 0 24 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M13 5.38581L20.4142 12.8L13 20.2142L11.5858 18.8L16.5858 13.8H4V11.8H16.5858L11.5858 6.80002L13 5.38581Z"
            fill="#571AC7"
          />
        </svg>
      </a>
      <h1 class="intro-title">
        <span>Biznesdagi</span> qarzlarni biz bilan boshqaring
      </h1>
      <p class="intro-descr">
        Endilikda Sizga ruchka va daftarning mutlaqo keragi yo'q! Qarz
        daftaringizni ham hech qachon yo'qotib qo'ymaysiz!
      </p>
      <div class="get-app">
        <ui-phone-input-mask></ui-phone-input-mask>
        <ui-base-button set-class="down-app"
          >Ilovani yuklab oling</ui-base-button
        >
      </div>
      <div class="customer-satisfaction">
        <ul>
          <li v-for="user in satisfiction" :key="user.id">
            <img
              v-if="user.photo != null"
              :src="user.photo"
              alt="User avatar"
            />
            <span>{{ user.value }}</span>
          </li>
        </ul>
        <div class="satisfaction-text">
          <span>10+</span>
          <p>Mijozlar mamnun</p>
        </div>
      </div>
    </div>
    <div class="hero">
      <img
        src="https://ik.imagekit.io/pdaftar/Pdaftar/Image_hero.png?updatedAt=1723397330977"
        alt="hero img"
      />
    </div>
  </ui-base-container>
</template>

<script>
import PhoneInputMask from "@/components/ui/PhoneInputMask.vue";
import { v4 as uuidv4 } from "uuid";
export default {
  components: { PhoneInputMask },
  data() {
    return {
      uniqueId: uuidv4(),
      satisfiction: [
        {
          id: this.uniqueId,
          photo:
            "https://ik.imagekit.io/pdaftar/Pdaftar/Avatar/Avatar/Avatar.png?updatedAt=1723622174425",
          value: "",
        },
        {
          id: this.uniqueId,
          photo:
            "https://ik.imagekit.io/pdaftar/Pdaftar/Avatar/Avatar/Avatar1.png?updatedAt=1723622174402",
          value: "",
        },
        {
          id: this.uniqueId,
          photo:
            "https://ik.imagekit.io/pdaftar/Pdaftar/Avatar/Avatar/Avatar2.png?updatedAt=1723622174422",
          value: "",
        },
        {
          id: this.uniqueId,
          photo:
            "https://ik.imagekit.io/pdaftar/Pdaftar/Avatar/Avatar/Avatar3.png?updatedAt=1723622174183",
          value: "",
        },
        {
          id: this.uniqueId,
          photo:
            "https://ik.imagekit.io/pdaftar/Pdaftar/Avatar/Avatar/Avatar4.png?updatedAt=1723622174283",
          value: "",
        },
        {
          id: this.uniqueId,
          photo:
            "https://ik.imagekit.io/pdaftar/Pdaftar/Avatar/Avatar/Avatar5.png?updatedAt=1723622174342",
          value: "",
        },
        {
          id: this.uniqueId,
          photo:
            "https://ik.imagekit.io/pdaftar/Pdaftar/Avatar/Avatar/Avatar6.png?updatedAt=1723622174259",
          value: "",
        },
        {
          id: this.uniqueId,
          photo:
            "https://ik.imagekit.io/pdaftar/Pdaftar/Avatar/Avatar/Avatar7.png?updatedAt=1723622174407",
          value: "",
        },
        {
          id: this.uniqueId,
          photo:
            "https://ik.imagekit.io/pdaftar/Pdaftar/Avatar/Avatar/Avatar8.png?updatedAt=1723622174412",
          value: "",
        },
        {
          id: this.uniqueId,
          photo:
            "https://ik.imagekit.io/pdaftar/Pdaftar/Avatar/Avatar/Avatar9.png?updatedAt=1723622174428",
          value: "",
        },
        {
          id: this.uniqueId,
          photo: null,
          value: "5+",
        },
      ],
      isSticky: false,
    };
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      this.isSticky = window.scrollY > 0;
    },
  },
};
</script>

<style scoped>
.container {
  position: absolute;
  z-index: 1;
  width: 100%;
  min-height: 54rem;
  height: auto;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.content {
  display: flex;
  align-items: start;
  flex-direction: column;
  height: 100%;
  padding-top: 6.93rem;
}

.hero img {
  transform: translateY(36px);
}

.offer {
  border-radius: 3.8125rem;
  background: #e5ebff;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  padding: 1rem 1.5rem;
  color: #7f56d9;
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.875rem;
  column-gap: 46px;
  margin-bottom: 2.5rem;
}

.intro-title {
  font-size: 4.5rem;
  font-style: normal;
  font-weight: 700;
  line-height: 5rem;
  letter-spacing: -0.09rem;
  margin-bottom: 2.5rem;
}
.intro-title span {
  background: linear-gradient(92deg, #6938ef -3.09%, #208963 52.07%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-right: 5rem;
}

.intro-descr {
  color: #475467;
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.875rem;
  margin-bottom: 3rem;
}

.get-app {
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 1rem;
}
.down-app {
  border-radius: 0.625rem;
  background: #6938ef !important;
  padding: 1rem 2rem;
  color: #fff;
  font-family: "DM Sans";
  font-size: 0.9375rem;
  font-weight: 500;
  line-height: 1.5rem;
}

.customer-satisfaction {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 3.41rem;
}
.customer-satisfaction ul {
  display: flex;
  align-items: center;
  justify-content: start;
  padding: 0;
  margin-right: 1rem;
}
.customer-satisfaction ul li:not(:first-child) {
  margin-left: -1rem;
}
.customer-satisfaction ul li:last-child {
  border-radius: 50%;
  background: #eff4fc;
  width: 2.5rem;
  height: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem 0;
  border: 0.75px solid rgba(0, 0, 0, 0.08);
  position: relative;
  z-index: 2;
  /* text */
  color: var(--colors-text-text-tertiary-600, #475467);
  text-align: center;
  font-family: "Inter", sans-serif;
  font-size: 1rem;
  font-style: normal;
  font-weight: 600;
  line-height: 1.5rem; /* 150% */
}
.customer-satisfaction li:last-child::before {
  content: "";
  position: absolute;
  width: calc(2.5rem + 0.125rem);
  height: calc(2.5rem + 0.125rem);
  background: #fff;
  border-radius: 50%;
  z-index: -1; /* Pastki qatlamga o'tish */
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.satisfaction-text span {
  color: #101828;
  font-size: 1.5rem;
  font-weight: 700;
}
.satisfaction-text {
  color: #475467;
  font-size: 1.125rem;
  font-weight: 400;
}

/* media query */
@media screen and (max-width: 1270px) {
  .container {
    height: auto;
  }
  .hero img {
    width: 524px;
    height: 696px;
  }
  .offer {
    padding: 0.8rem 1.1rem;
    font-size: 1rem;
  }
  .intro-title {
    font-size: 4rem;
  }
}

@media screen and (max-width: 1200px) {
  .container {
    align-items: start;
  }

  .hero {
    display: none;
  }
  .offer {
    padding: 0.6rem 0.9rem;
    font-size: 0.9375rem;
  }

  .intro-title {
    font-size: 3.5rem;
    max-width: 37rem;
  }

  .intro-title span {
    margin-right: 0;
  }
}

@media screen and (max-width: 610px) {
  .get-app {
    flex-direction: column;
    row-gap: 1rem;
    width: 100%;
  }
  .get-app .phone-input-mask {
    width: 100%;
  }
  .get-app .down-app {
    width: 100%;
  }
}

@media screen and (max-width: 530px) {
  .customer-satisfaction {
    margin-top: 2rem;
  }
}

@media screen and (max-width: 480px) {
  .customer-satisfaction {
    flex-direction: column;
    align-items: start;
  }

  .offer {
    padding: 0.6rem 0.9rem;
    font-size: 0.8rem;
  }

  .offer svg {
    width: 1.2rem;
    height: 1.2rem;
  }

  .intro-title {
    font-size: 3rem;
    line-height: 3.4rem;
  }

  .content {
    padding-top: 3rem;
  }
}

@media screen and (max-width: 380px) {
  .intro-title {
    font-size: 2.5rem;
    line-height: 3rem;
  }
  .customer-satisfaction li img {
    width: 40px;
    height: 40px;
  }
}
</style>
