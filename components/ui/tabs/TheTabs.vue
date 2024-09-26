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
        <img v-if="tab.selected" :src="tab.photo" :alt="tab.name" />
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
            "https://ik.imagekit.io/pdaftar/Pdaftar/icon/debt-section?updatedAt=1723398410141",
          selected: true,
        },
        {
          id: 2,
          name: "Oldi-berdi tarixlari",
          description:
            "Siz pDaftarni ishlatish orqali kimga qachon qancha qarz berganizni hech qachon unitmaysiz.",
          photo:
            "https://images.pexels.com/photos/3680219/pexels-photo-3680219.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",

          selected: false,
        },
        {
          id: 3,
          name: "Offline ham ishlash rejimi",
          description:
            "pDaftar internetsiz joylardayam muommosiz ishlaydi! Qachonki internetga ulanganizda yangi ma'lumotlarni Bazaga yuklab boradi",
          photo:
            "https://ik.imagekit.io/pdaftar/Pdaftar/icon/debt-section?updatedAt=1723398410141",

          selected: false,
        },
        {
          id: 4,
          name: "Qarzdorliklarni esdan chiqishi",
          description:
            "Qarzlarni turli xil daftarlarda qayd qilib borasiz va qachon qaysi daftarga yozganingizni unutib qo’yasiz yoki daftar yo’qolib qolsa muammo bo’lishi aniq. Bunday vaziyatda pdaftar sizga ko’makchi",
          photo:
            "https://ik.imagekit.io/pdaftar/Pdaftar/icon/debt-section?updatedAt=1723398410141",

          selected: false,
        },
        {
          id: 5,
          name: "Sotuvchilarni boshqarish",
          description:
            "Bizning platformamizda bir nechta sotuvchilar orqali o'z savdolaringizni boshqarishingiz mumkin.",
          photo:
            "https://ik.imagekit.io/pdaftar/Pdaftar/icon/debt-section?updatedAt=1723398410141",

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
}
</style>
