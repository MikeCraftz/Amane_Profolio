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
      <template #title>Michael Chow (@AmanetateC)</template>
        <template #content>
        <p class="m-0">
            Automation Engineer / Pixel Artist / Indie Game Dev
        </p>
        <p class="m-0">
          Hello, I am a full time automation engineer, pixel artist and indie game dev based in Japan!
        </p>
      </template>
    </Card>

    <p></p>

    <Card class="title-card" :class="cardThemeToggle">
      <template #title>Social Media</template>
        <template #content>
          <Button as="a" label="Ko-fi" href="https://vuejs.org/" target="_blank" iconPos="left" rel="noopener">
            <template #icon>
              <img src="@/assets/icon.png" alt="Logo" style="width: 24px; margin-right: 0.5rem;" />
            </template>
          </Button>
            <li class="p-list-item"> Ko-fi</li>
            <li class="p-list-item"> Twitter/X</li>
            <li class="p-list-item"> Instagram</li>
            <li class="p-list-item"> Pixiv</li>
            <li class="p-list-item"> Itch.io</li>
      </template>
    </Card>

    <div class="section">
      <h2>Indie Game Project</h2>
      <p>Recesses</p>
      <p>Let's feed Yanami!</p>
    </div>
    <a href='https://ko-fi.com/O5O612VEJU' target='_blank'><img height='36' style='border:0px;height:36px;' src='https://storage.ko-fi.com/cdn/kofi6.png?v=6' border='0' alt='Buy Me a Coffee at ko-fi.com' /></a>
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
        { id: 1, title: 'Art 1', src: 'path_to_art1.jpg' },
        { id: 2, title: 'Art 2', src: 'path_to_art2.jpg' }
      ]
    };
  },
  computed: {
    cardThemeToggle() {
      return this.$root.theme === 'dark-mode' ? 'dark-card' : 'light-card';
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
/* TODO: Update card dark/light mode colour */
.light-card {
  background-color: #ffffff;
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
</style>