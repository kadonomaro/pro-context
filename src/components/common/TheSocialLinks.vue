<script>
export default {
  name: "TheSocialLinks",
};
</script>

<template>
  <div class="social-links">
    <ul class="social-links__list">
      <li class="social-links__item">
        <a
          href="https://www.facebook.com/k.tselishcheva"
          class="social-links__link"
          target="_blank"
          rel="noopener noreferrer"
          title="Перейти в Facebook"
        >
          <img
            src="@/assets/icons/icon-facebook.svg"
            alt="Перейти в Facebook"
          />
        </a>
      </li>
      <li class="social-links__item">
        <a
          href=""
          class="social-links__link"
          target="_blank"
          rel="noopener noreferrer"
          title="Перейти в Instagram"
        >
          <img
            src="@/assets/icons/icon-instagram.svg"
            alt="Перейти в Instagram"
          />
        </a>
      </li>
      <li class="social-links__item">
        <a
          href="https://api.whatsapp.com/send?phone=79836084467"
          class="social-links__link"
          target="_blank"
          rel="noopener noreferrer"
          title="Позвонить в WhatsApp"
        >
          <img
            src="@/assets/icons/icon-whatsapp.svg"
            alt="Позвонить в WhatsApp"
          />
        </a>
      </li>
      <li class="social-links__item">
        <a
          href=""
          class="social-links__link"
          target="_blank"
          rel="noopener noreferrer"
          title="Позвонить в Telegram"
        >
          <img
            src="@/assets/icons/icon-telegram.svg"
            alt="Позвонить в Telegram"
          />
        </a>
      </li>
    </ul>
  </div>
</template>

<style lang="scss">
.social-links__list {
  display: flex;
  margin: 0 -4px;
  padding: 0;
  list-style: none;
}

.social-links__item {
  position: relative;
  margin: 0 4px;
  transition: transform 0.2s ease-in;
  &::before {
    content: "";
    z-index: -1;
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 6px;
    background-color: rgba(#000, 0.2);
    border-radius: 50%;
    transform: scale(0);
    transition: transform 0.2s ease-in;
    filter: blur(2px);
  }
  &:hover {
    transform: translateY(-3px);
    &::before {
      transform: scale(1) translateY(3px);
    }
  }
}

.social-links__link {
  display: block;
  width: 25px;
  height: 25px;
}
</style>
