<template>
  <div class="tabs">
    <div class="tab-item">
      <the-tab
        v-for="tab in tabs"
        :key="tab.id"
        :id="tab.id"
        :name="tab.name"
        :selected="tab.selected"
        :description="tab.description"
        @toggle-tab="toggleSelected"
      ></the-tab>
    </div>
    <div class="tab-content">
      <div class="photo" v-for="tab in tabs" :key="tab.name">
        <img
          v-if="tab.selected"
          :src="tab.photo"
          :alt="tab.name"
          width="515 2451"
          height="682 3285"
        />
      </div>
    </div>
  </div>
</template>

<script>
import TheTab from "./TheTab.vue";

export default {
  components: {
    TheTab,
  },
  data() {
    return {
      tabs: [
        {
          id: 1,
          name: "Umumiy balansni ko'rish",
          description:
            "Sizda do'kon(lar)ingizdagi qarzdorlik balanslarini 1 necha clicklarda ko'ra olasiz.",
          photo:
            "https://ik.imagekit.io/pdaftar/Pdaftar/compressed/Umumiy%20balans.webp?updatedAt=1727540988651",
          selected: true,
        },
        {
          id: 2,
          name: "Oldi-berdi tarixlari",
          description:
            "Siz pDaftarni ishlatish orqali kimga qachon qancha qarz berganizni hech qachon unitmaysiz.",
          photo:
            "https://ik.imagekit.io/pdaftar/Pdaftar/compressed/Oldi-berdi%20tarixlari.webp?updatedAt=1727540989008",

          selected: false,
        },
        {
          id: 3,
          name: "Offline ham ishlash rejimi",
          description:
            "pDaftar internetsiz joylardayam muommosiz ishlaydi! Qachonki internetga ulanganizda yangi ma'lumotlarni Bazaga yuklab boradi",
          photo:
            "https://ik.imagekit.io/pdaftar/Pdaftar/compressed/Offline%20ishlash%20rejimi.webp?updatedAt=1727540988997",

          selected: false,
        },
        {
          id: 4,
          name: "Qarzdorliklarni esdan chiqishi",
          description:
            "Qarzlarni turli xil daftarlarda qayd qilib borasiz va qachon qaysi daftarga yozganingizni unutib qo’yasiz yoki daftar yo’qolib qolsa muammo bo’lishi aniq. Bunday vaziyatda pdaftar sizga ko’makchi",
          photo:
            "https://ik.imagekit.io/pdaftar/Pdaftar/compressed/Qarzdorliklarning%20esdan%20chiqishi.webp?updatedAt=1727540989103",

          selected: false,
        },
        {
          id: 5,
          name: "Sotuvchilarni boshqarish",
          description:
            "Bizning platformamizda bir nechta sotuvchilar orqali o'z savdolaringizni boshqarishingiz mumkin.",
          photo:
            "https://ik.imagekit.io/pdaftar/Pdaftar/compressed/Sotuvchilarni%20boshqarish.webp?updatedAt=1727540988711",

          selected: false,
        },
      ],
    };
  },
  methods: {
    toggleSelected(tabId) {
      this.tabs.forEach((tab) => {
        if (tab.id === tabId) {
          tab.selected = true;
        } else {
          tab.selected = false;
        }
      });
    },
  },
};
</script>

<style scoped>
.tabs {
  display: flex;
  align-items: start;
  justify-content: space-between;
  padding-top: 5rem;
  gap: 2rem;
  width: 100%;
}

@media screen and (max-width: 1024px) {
  .tabs {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .tab-item {
    display: flex;
    gap: 12px;
    flex-wrap: wrap;
    justify-content: center;
    flex-grow: 1;
    max-height: 184px;
    overflow: auto;
  }
}
/* 768 */
@media screen and (max-width: 768px) {
  .tab-item {
    gap: 8px;
  }
  .tab-item {
    max-height: 148px;
  }
  .photo img {
    width: 100%;
    height: auto;
  }
}
</style>
