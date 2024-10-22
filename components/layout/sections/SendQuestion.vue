<template>
  <div class="send-question">
    <ui-base-container>
      <div class="users-avatar">
        <picture v-for="(user, inx) in users" :key="user.id" class="avatar">
          <img
            :src="user.picture"
            alt="Avatar"
            :width="inx === (inx + 1) / 2 ? '56' : 48"
          />
        </picture>
      </div>
      <div class="nav">
        <h2 class="title">Sizda ham savollaringiz* bormi?</h2>
        <h4 class="sub-title">
          Bizga o’z savollaringizni yuboring. Albatta javob qaytaramiz
        </h4>
      </div>
      <ui-base-button set-class="send-question-button"
        >Savol berish</ui-base-button
      >
    </ui-base-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      users: [
        {
          id: 1,
          picture:
            "https://ik.imagekit.io/pdaftar/Pdaftar/Avatar/Avatar/Avatar9.png?updatedAt=1723622174428",
        },
        {
          id: 2,
          picture:
            "https://ik.imagekit.io/pdaftar/Pdaftar/Avatar/Avatar/Avatar8.png?updatedAt=1723622174412",
        },
        {
          id: 3,
          picture:
            "https://ik.imagekit.io/pdaftar/Pdaftar/Avatar/Avatar/Avatar5.png?updatedAt=1723622174342",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.send-question {
  padding: 64px 0 96px 0;
  text-align: center;
  .container {
    border-radius: 16px;
    background: #f9fafb;
    padding: 32px;
  }
  .title {
    font-size: 20px;
    margin-bottom: 8px;
    line-height: 30px;
  }
  .sub-title {
    color: #475467;
    font-family: "DM Sans";
    font-size: 18px;
    font-weight: 400;
    line-height: 28px;
  }
  .send-question-button {
    border-radius: 8px;
    border: 1px solid #6938ef;
    background: #6938ef;
    box-shadow: 0px 1px 2px 0px rgba(16, 24, 40, 0.05);
    padding: 12px 18px;
    // text
    color: #fff;
    font-family: "DM Sans";
    font-size: 16px;
    font-weight: 700;
    line-height: 24px;
    margin-top: 32px;
  }
}
.users-avatar {
  margin-bottom: 32px;
  .avatar {
    position: relative;
    display: inline-block;
    z-index: 2;
    &:first-child {
      transform: translateX(16px);
      z-index: 1;
    }
    &:last-child {
      transform: translateX(-16px);
      z-index: 1;
    }
  }
}

@media screen and (max-width: 480px) {
  .send-question {
    padding: 4rem 0;
  }
}
</style>
