<template>
  <div class="container">
    <Card class="title-card" :class="cardThemeToggle">
      <template #title>
        <h2>Welcome, weary traveler! </h2>
        <p class="m-0">
            Take a seat and enjoy my collections of pixel art.
        </p>
      </template>
    </Card>

    <p></p>

    <Card class="title-card" :class="cardThemeToggle">
      <template #title>
        <h3 style="text-decoration: underline;">Michael Chow (@AmanetateC)</h3>
      </template>
        <template #content>
        <p class="m-0">
            Automation Engineer / Pixel Artist / Indie Game Dev
        </p>
        <p class="m-0">
          Hello, I am a full time automation engineer, pixel artist and indie game dev based in Japan!
        </p>
        <p class="m-0">
          Support my work on Kofi:
        </p>
        <a href='https://ko-fi.com/O5O612VEJU' target='_blank'><img height='36' style='border:0px;height:36px;' src='https://storage.ko-fi.com/cdn/kofi6.png?v=6' border='0' alt='Buy Me a Coffee at ko-fi.com' /></a>
      </template>
    </Card>

    <p></p>

    <Card class="title-card" :class="cardThemeToggle">
      <template #title>
        <h3 style="text-decoration: underline;">Social Media</h3>
      </template>
        <template #content>
          <ul class="custom-lists">
            <li>
              <Button as="a" label="Ko-fi: @amanettc" href="https://ko-fi.com/amanettc" target="_blank" iconPos="left" rel="noopener">
                <template #icon>
                  <img src="@/assets/icon/ko-fi.png" alt="Logo" style="width: 24px; margin-right: 0.5rem;" />
                </template>
              </Button>
            </li>
            <li>
              <Button as="a" label="Twitter/X: @amanetate10945 " href="https://x.com/amanetate10945" target="_blank" iconPos="left" rel="noopener">
                <template #icon>
                  <img src="@/assets/icon/twitter.png" alt="Logo" style="width: 24px; margin-right: 0.5rem;" />
                  <img src="@/assets/icon/x.png" alt="Logo" style="width: 24px; margin-right: 0.5rem;" />
                </template>
              </Button>
            </li>
            <li>
              <Button as="a" label="Instagram: amanetatec" href="https://www.instagram.com/amanetatec/" target="_blank" iconPos="left" rel="noopener">
                <template #icon>
                  <img src="@/assets/icon/instagram.png" alt="Logo" style="width: 24px; margin-right: 0.5rem;" />
                </template>
              </Button>
            </li>
            <li>
              <Button as="a" label="GitHub: MikeCraftz" href="https://github.com/MikeCraftz" target="_blank" iconPos="left" rel="noopener">
                <template #icon>
                  <img src="@/assets/icon/github.png" alt="Logo" style="width: 24px; margin-right: 0.5rem;" />
                </template>
              </Button>
            </li>
          </ul>
      </template>
    </Card>

    <div class="section">
      <h2>Indie Game Project</h2>
      <h3>Recesses</h3>
      <p>An entry to the HK Game Jam Club Round 2</p>
      <iframe
      frameborder="0"
      :src="`https://itch.io/embed/3045034?bg_color=${iframeBackgroundColor}&border_color=${iframeBorderColor}&fg_color=${iframeTextColor}`"
      width="552"
      height="167"
      >
      <a href="https://amanechow.itch.io/recesses-hk-gamjam">Recesses by AmaneChow, Pippin, Archiba+</a>
      </iframe>
      <h3>Let's feed Yanami!</h3>
      <p>An small fan game to the novel/anime Too Many Losing Heroin!, Let's feed the sea otter lol.</p>
      <iframe
      frameborder="0"
      :src="`https://itch.io/embed/2983124?bg_color=${iframeBackgroundColor}&border_color=${iframeBorderColor}&fg_color=${iframeTextColor}`"
      width="552"
      height="167"
      >
      <a href="https://amanechow.itch.io/recesses-hk-gamjam">Recesses by AmaneChow, Pippin, Archiba+</a>
      </iframe>
    </div>
    <div class="section">
      <h2>Featured Art</h2>
      <div class="tiles-grid">
        <div class="tile" v-for="art in featuredArt" :key="art.id">
          <img :src="art.src" :alt="art.title" @click="goToGallery" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Card from 'primevue/card';
import Button from 'primevue/button';
export default {
  data() {
    return {
      featuredArt: [
        { id: 1, title: 'Occult Warfare', src: require('@/assets/artwork/occult.png') },
        { id: 2, title: 'Occult Warfare', src: require('@/assets/artwork/occult.png') }
      ]
    };
  },
  computed: {
    cardThemeToggle() {
      return this.$root.theme === 'dark-mode' ? 'dark-card' : 'light-card';
    },
    iframeBackgroundColor() {
      return this.$root.theme === 'dark-mode' ? '333333' : 'e4a672';
    },
    iframeBorderColor() {
      return this.$root.theme === 'dark-mode' ? '363636' : 'b86f50';
    },
    iframeTextColor() {
      return this.$root.theme === 'dark-mode' ? 'eeeeee' : '222222';
    }
  },
  components: {
    Card,
    Button,
  },
  methods: {
    goToGallery() {
      this.$router.push('/gallery');
    },

    verifyInstallation() {
      alert('PrimeVue is installed!');
    }
  }
};
</script>

<style scoped>

.light-card {
  background-color: #e2c492;
  color: #000000;
}

.dark-card {
  background-color: #333333;
  color: #ffffff;
}

.title-card {
  padding: 20px 20px;
  border-radius: 10px;
  margin-left: 20px;
  margin-right: 20px;
}

.tiles-grid {
  display: flex;
  justify-content: space-around;
}

.tile {
  width: 200px;
  cursor: pointer;
}

.tile img {
  width: 100%;
  border-radius: 10px;
}

.icon {
    display: inline-block;
    width: 24px;
    height: 24px;
    background-size: contain;
    background-repeat: no-repeat;
}

.custom-lists {
  list-style-type: none;
  padding: 0;
}

.custom-lists li {
  margin-bottom: 1rem;
}
</style>