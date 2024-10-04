<template>
  <div class="testimonial">
    <ui-base-container>
      <ui-title-badge title="Fikrlar"></ui-title-badge>
      <h2 class="title">
        Mijozlarimizning Biz haqimizdagi fikriga e'tibor bering
      </h2>
      <div class="testimonial-slider">
        <Swiper
          :modules="[SwiperAutoplay, SwiperEffectCreative, SwiperPagination]"
          :slides-per-view="1"
          :loop="true"
          :effect="'creative'"
          :autoplay="{
            delay: 3000,
            disableOnInteraction: true,
          }"
          :creative-effect="{
            prev: {
              shadow: false,
              translate: ['-100%', 0, -1],
            },
            next: {
              translate: ['100%', 0, 0],
            },
          }"
          :pagination="{ clickable: true }"
        >
          <SwiperSlide v-for="slide in slideData" :key="slide.id">
            <strong class="user-thought">{{ slide.thought }}</strong>
            <div class="user-data">
              <picture class="user-avatar">
                <img
                  :src="slide.userAvatar"
                  alt="Avatar"
                  width="56"
                  height="56"
                />
              </picture>
              <h1 class="user-name">{{ slide.userName }}</h1>
              <p class="user-job">{{ slide.userJob }}</p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </ui-base-container>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      slideData: [
        {
          id: new Date(),
          thought:
            "“I've been using FinanceFast for a few months now and it's completely transformed the way I send money to my family abroad. The platform is so easy to use and transfers are always fast and secure.”",
          userAvatar: "https://randomuser.me/api/portraits/women/1.jpg", // Ishlaydigan avatar rasmi
          userName: "Farida",
          userJob: "Finance Manager",
        },
        {
          id: new Date(),
          thought:
            "“FinanceFast has made my financial transactions much easier and more reliable. I love how quickly the transfers are completed, and I feel confident that my money is safe.”",
          userAvatar: "https://randomuser.me/api/portraits/men/2.jpg", // Ishlaydigan avatar rasmi
          userName: "John",
          userJob: "Software Engineer",
        },
        {
          id: new Date(),
          thought:
            "“As a business owner, using FinanceFast has saved me time and hassle. The interface is user-friendly, and I can manage my transactions efficiently from anywhere.”",
          userAvatar: "https://randomuser.me/api/portraits/men/3.jpg", // Ishlaydigan avatar rasmi
          userName: "Ahmed",
          userJob: "Business Owner",
        },
        {
          id: new Date(),
          thought:
            "“I use FinanceFast to send money home every month, and I couldn't be happier. The speed, security, and ease of use are unmatched.”",
          userAvatar: "https://randomuser.me/api/portraits/women/4.jpg", // Ishlaydigan avatar rasmi
          userName: "Sarah",
          userJob: "Teacher",
        },
      ],
    };
  },
};
</script>

<style lang="scss">
.testimonial {
  padding: 96px 0;
  .container {
    padding: 64px;
    border-radius: 16px;
    background: #f9fafb;
    text-align: center;
    .title {
      margin-top: 12px;
    }
    .swiper {
      width: 100%;
      height: 300px;
      .swiper-pagination-bullet {
        width: 32px;
        height: 10px;
        border-radius: 55px;
        background-color: #6938ef;
      }
    }
    .user-thought {
      color: #101828;
      text-align: center;
      font-family: "DM Sans";
      font-size: 16px;
      font-weight: 500;
      line-height: 24px;
      display: inline-block;
      margin: 32px 0;
    }
    .user-avatar {
      border-radius: 50%;
      margin-bottom: 16px;
      width: 56px;
      height: 56px;
      display: inline-block;
      img {
        border-radius: 50%;
        border: 0.75px solid rgba(0, 0, 0, 0.08);
      }
    }
    .user-name {
      color: #101828;
      font-family: "DM Sans";
      font-size: 16px;
      font-weight: 700;
      line-height: 24px;
    }
    .user-job {
      color: #475467;
      font-family: "DM Sans";
      font-size: 14px;
      font-weight: 400;
      line-height: 20px;
    }
  }
}
@media screen and (max-width: 768px) {
  .testimonial {
    .container {
      .swiper {
        height: 350px;
      }
    }
  }
}
@media screen and (max-width: 480px) {
  .testimonial {
    padding: 64px 0;
    .container {
      padding: 24px 8px;
      .swiper {
        height: 400px;
      }
    }
  }
}
</style>
