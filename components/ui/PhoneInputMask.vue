<template>
  <div class="phone-input-mask">
    <div class="phone-input-mask__dropdown">
      <div class="phone-input-mask__dropdown-button" @click="toggleDropdown">
        <span class="phone-input-mask__countery-code">{{
          selectedCountry["countery-code"]
        }}</span>
        <span class="phone-input-mask__icon">
          <svg
            width="20"
            height="21"
            viewBox="0 0 20 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5 8.30005L10 13.3L15 8.30005"
              stroke="#98A2B3"
              stroke-width="1.66667"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </span>
      </div>
      <div v-if="dropdownVisible" class="phone-input-mask__dropdown-content">
        <div
          v-for="country in countries"
          :key="country.code"
          @click="selectCountry(country)"
          class="phone-input-mask__dropdown-item"
        >
          <span class="phone-input-mask__icon">{{ country.flag }}</span>
          {{ country["countery-code"] }}
        </div>
      </div>
    </div>
    <input
      type="text"
      ref="phoneInput"
      v-model="phoneNumber"
      :placeholder="phonePlaceholder"
      class="phone-input-mask__input"
      @input="handleInput"
    />
  </div>
</template>

<script>
import IMask from "imask";

export default {
  data() {
    return {
      dropdownVisible: false,
      phoneNumber: "",
      selectedCountry: {
        code: "+998",
        format: "(00) 000-0000",
        flag: "🇺🇿",
        "countery-code": "UZ",
      },
      countries: [
        {
          code: "+998",
          format: "(00) 000-0000",
          flag: "🇺🇿",
          "countery-code": "UZ",
        },
        {
          code: "+7",
          format: "(000) 000-00-00",
          flag: "🇷🇺",
          "countery-code": "RU",
        },
      ],
      maskInstance: null,
    };
  },
  computed: {
    phonePlaceholder() {
      return this.selectedCountry.code + " " + this.selectedCountry.format;
    },
  },
  mounted() {
    this.applyMask();
  },
  methods: {
    toggleDropdown() {
      this.dropdownVisible = !this.dropdownVisible;
    },
    selectCountry(country) {
      this.selectedCountry = country;
      this.dropdownVisible = false;
      this.phoneNumber = ""; // Telefon raqamini tozalash
      this.applyMask(); // Yangilangan formatni qo'llash
    },
    applyMask() {
      if (this.maskInstance) {
        this.maskInstance.destroy(); // Eski maskani o'chirish
      }
      if (this.$refs.phoneInput) {
        this.maskInstance = IMask(this.$refs.phoneInput, {
          mask: this.selectedCountry.code + " " + this.selectedCountry.format,
          lazy: false,
        });
      }
    },
    handleInput() {
      // Telefon raqamini faqat raqamli qismini olish
      const rawPhoneNumber = this.phoneNumber.replace(/\D/g, "");
      console.log(rawPhoneNumber); // Yalpi telefon raqami
    },
  },
};
</script>

<style scoped>
.phone-input-mask {
  display: flex;
  align-items: center;
  gap: 10px;
  position: relative;
  background: #fff;
  border-radius: 0.625rem;
  border-left: 1px solid #6938ef;
  padding: 0.27rem;
}

.phone-input-mask__dropdown {
  position: relative;
  display: inline-block;
}

.phone-input-mask__dropdown-button {
  font-size: 16px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.25rem;
  padding: 0.625rem 0rem 0.625rem 0.875rem;
}

.phone-input-mask__countery-code {
  color: #344054;
  font-family: "DM Sans";
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5rem;
}

.phone-input-mask__icon {
  display: flex;
  align-items: center;
  justify-content: center;
}

.phone-input-mask__dropdown-content {
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
}

.phone-input-mask__dropdown-item {
  padding: 12px 16px;
  cursor: pointer;
  display: flex;
  align-items: center;
}

.phone-input-mask__dropdown-item:hover {
  background-color: #f1f1f1;
}

.phone-input-mask__input {
  padding: 8px;
  font-size: 16px;
  width: 100%;
  border: 1px solid #ccc;
  overflow: hidden;
  color: #667085;
  text-overflow: ellipsis;
  font-family: "DM Sans";
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5rem;
  border: none;
  display: flex;
  padding: 0.75rem 0.875rem 0.75rem 0.75rem;
  outline: none;
  border-radius: 0.625rem;
  display: flex;
}
</style>
