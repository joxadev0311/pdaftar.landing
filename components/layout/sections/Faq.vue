<template>
  <div class="faq">
    <ui-base-container>
      <h2 class="title">Ko'p so'raladigan savollar</h2>
      <h4 class="sub-title">
        <span>Pdaftar</span> haqida savollaringizga javob toping.
      </h4>
      <div class="accordion">
        <div class="accordion-item" v-for="(item, index) in items" :key="index">
          <button
            class="accordion-header"
            @click="toggle(index)"
            :class="{ active: activeIndex === index }"
            :style="item.style"
          >
            <p>{{ item.title }}</p>
            <picture class="d-f aic jcc">
              <svg
                width="24"
                height="27"
                viewBox="0 0 24 27"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                v-if="activeIndex === index"
              >
                <path
                  d="M8 14.6001H16M22 14.6001C22 20.1229 17.5228 24.6001 12 24.6001C6.47715 24.6001 2 20.1229 2 14.6001C2 9.07725 6.47715 4.6001 12 4.6001C17.5228 4.6001 22 9.07725 22 14.6001Z"
                  stroke="#98A2B3"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>

              <svg
                width="24"
                height="27"
                viewBox="0 0 24 27"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                v-else
              >
                <path
                  d="M12 10.6001V18.6001M8 14.6001H16M22 14.6001C22 20.1229 17.5228 24.6001 12 24.6001C6.47715 24.6001 2 20.1229 2 14.6001C2 9.07725 6.47715 4.6001 12 4.6001C17.5228 4.6001 22 9.07725 22 14.6001Z"
                  stroke="#98A2B3"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </picture>
          </button>
          <div
            class="accordion-content"
            ref="content"
            :style="{
              height:
                activeIndex === index ? contentHeights[index] + 'px' : '0',
            }"
          >
            <p>{{ item.content }}</p>
          </div>
        </div>
      </div>
    </ui-base-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: null,
      contentHeights: [], // height array to store scrollHeight for each content
      items: [
        {
          title: "Pdaftar nima?",
          content:
            "Pdaftar - bu sizning biznesingizda qarzdorliklarni boshqarishdagi judayam muhim bo'lgan yordamchingiz hisoblanadi.",
          style: "border-top: none",
        },
        {
          title: "Bu kim uchun?",
          content:
            "Kichik/o'rta biznes egalari yoki umuman qarz bilan savdo qiluvchi tadbirkorlar uchun",
        },
        {
          title: "Pdaftar qanday ishlaydi?",
          content:
            "Pdaftar dan foydalanish uchun sodda ro'yxatdan o'tishni amalga oshirasiz, Do'koningizni(biznes) qo'shasiz va tayyor!",
        },
        {
          title: "Pdaftar xafvsizmi?",
          content:
            "Pdaftar ma'lumotlaringizni ko'z qorachig'idek asraydi! Buning uchun biz ma'lumotlar bazasidan kunlik BACKUP(nusxa) olib boramiz.",
        },
        {
          title: "Bu qancha turadi?",
          content:
            "Dastur imkoniyatlarini foydalanish uchun 2 xil tariff dan foydalanishingiz mumkin. Bepul - yosh biznesmen, Pullik - Tajribali biznesmen. Tariflar",
        },
      ],
    };
  },
  methods: {
    toggle(index) {
      const content = this.$refs.content[index];

      if (this.activeIndex === index) {
        this.activeIndex = null; // Yopish
        content.style.height = 0;
      } else {
        this.activeIndex = index; // Ochish
        this.$nextTick(() => {
          content.style.height = content.scrollHeight + "px"; // Haqiqiy balandlikni qo'llash
        });
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  align-items: center;
  flex-direction: column;
  .title {
    margin-bottom: 20px;
    margin-top: 96px;
  }
  .sub-title {
    color: #475467;
    font-family: "DM Sans";
    font-size: 20px;
    font-weight: 400;
    line-height: 30px;
    span {
      font-weight: 700;
    }
  }
}
.accordion {
  // min-width: 320px;
  max-width: 768px;
  width: 100%;
  .accordion-item {
    margin-bottom: 12px;
  }

  .accordion-header {
    width: 100%;
    display: flex;
    justify-content: space-between;
    cursor: pointer;
    background-color: transparent;
    border: none;
    outline: none;
    padding: 32px 0 8px 0;
    border-top: 1px solid #eaecf0;
    p {
      color: #101828;
      font-family: "DM Sans";
      font-size: 20px;
      font-weight: 700;
      line-height: 30px;
    }
    &.active {
      //   background-color: #0056b3;
    }
  }

  .accordion-content {
    overflow: hidden;
    transition: height 0.3s ease;
    height: 0;
    padding-right: 48px;
    p {
      color: #475467;
      font-family: "DM Sans";
      font-size: 16px;
      font-weight: 400;
      line-height: 24px;
    }
  }
}
</style>
