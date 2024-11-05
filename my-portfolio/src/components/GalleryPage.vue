<template>
  <div class="container">
    <h1>Art Dump</h1>
    <Card class="title-card" :class="cardThemeToggle">
      <template #title>
        <p class="m-0">
            This is collections of all my pixel art. You can click them to see more about them.
        </p>
        <p class="m-0">
            All high definition version of my work are avalible for download on my Ko-fi page. Feel free to use them for non-commercial use.
        </p>
      </template>
    </Card>

    <div class="grid">
      <div class="tile" v-for="art in galleryArt" :key="art.id" @click="openArt(art)">
        <img :src="art.src" :alt="art.title" />
      </div>
    </div>

    <div v-if="selectedArt" class="overlay" @click="closeArt">

    <Card class="overlay-content" :class="cardThemeToggle" @click.stop>
    <template #header>
      <img :src="selectedArt.src" />
    </template>
    <template #content>
        <p class="description">
          {{ selectedArt.description }}
        </p>
    </template>
    </Card>

    </div>
  </div>
</template>

<script>
import Card from 'primevue/card';
import galleryData from '@/assets/artwork_list.json';

export default {
  data() {
    return {
      galleryArt: [],
      selectedArt: null
    };
  },
  mounted() {
    this.galleryArt = galleryData.map(art => ({
      ...art,
      src: require(`@/assets/artwork/${art.src.split('/').pop()}`)
    }));
  },
  components: {
    Card,
  },
  computed: {
    cardThemeToggle() {
      return this.$root.theme === 'dark-mode' ? 'dark-card' : 'light-card';
    },

    descriptionThemeToggle() {
      return this.$root.theme === 'dark-mode' ? 'dark-description' : 'light-description';
    }
  },
  methods: {
    openArt(art) {
      this.selectedArt = art;
    },
    closeArt() {
      this.selectedArt = null;
    },
    handleOverlayClick(event) {
      if (event.target.classList.contains('overlay')) {
        this.closeArt();
    }
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

.light-description {
  background-color: #f7e6b0;
  color: #333333;
}

.dark-description {
  background-color: #444444;
  color: #ffffff;
}

.title-card {
  padding: 20px 20px;
  border-radius: 10px;
  margin-left: 20px;
  margin-right: 20px;
}

.grid {
  display: flex;
  flex-wrap: wrap;
}

.tile {
  width: 200px;
  margin: 10px;
  cursor: pointer;
}

.tile img {
  width: 100%;
  border-radius: 10px;
}

.overlay {
  position: fixed;
  z-index: 1001;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.7);
  padding: 20px;
}

.overlay-content {
  max-width: 90%;
  max-height: 90%;
  padding: 10px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
}

.overlay-content img {
  max-width: 100%;
  height: auto;
}

.description {
  margin-top: 10px;
  text-align: center;
  max-height: 150px;
  overflow-y: auto;
  padding: 10px;
  box-sizing: border-box;
  width: 100%;
}
</style>