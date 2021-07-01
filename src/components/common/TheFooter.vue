<script>
import TheSocialLinks from "@/components/common/TheSocialLinks";
export default {
  name: "TheFooter",
  components: { TheSocialLinks },
  computed: {
    getYear() {
      return new Date().getFullYear();
    },
  },
};
</script>

<template>
  <footer class="footer">
    <div class="footer__inner">
      <div class="footer__social">
        <the-social-links></the-social-links>
      </div>
      <nav class="footer__nav">
        <router-link :to="{ name: 'Home' }">Главная</router-link>
        <router-link :to="{ name: 'Articles' }">Все статьи</router-link>
        <router-link :to="{ name: 'Authors' }">Авторы</router-link>
      </nav>
      <div class="footer__copy">
        <span>&copy; {{ getYear }}</span>
        <div class="footer__develop">
          <div>Airsoftware</div>
          <img src="@/assets/images/airsoftware.png" alt="Airsoftware" />
        </div>
      </div>
    </div>
  </footer>
</template>

<style lang="scss">
.footer {
  margin-top: auto;
  padding-top: 20px;
}

.footer__inner {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #2c3e50;
}

.footer__social {
  margin-bottom: 10px;
}

.footer__nav {
  display: flex;
  margin: 0 -6px 10px;
  a {
    margin: 0 6px;
    color: #fff;
    font-size: 14px;
    text-decoration: none;
  }
}

.footer__copy {
  display: flex;
  align-items: center;
  color: #fff;
  span {
    margin-right: 20px;
  }
}

.footer__develop {
  display: flex;
  align-items: center;
  font-size: 14px;
  img {
    width: 30px;
  }
}
</style>
