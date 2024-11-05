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

    <div v-if="selectedArt" class="overlay" @click="handleOverlayClick">
      <div class="overlay-content" :class="descriptionThemeToggle">
        <img :src="selectedArt.src" :alt="selectedArt.title" />
        <div class="description">{{ selectedArt.description }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import Card from 'primevue/card';
export default {
  data() {
    return {
      galleryArt: [
        { id: 1, title: 'Occult Warfare', src: require('@/assets/artwork/occult.png'), description: 'Occult Warfare' },
        { id: 2, title: 'Occult Warfare', src: require('@/assets/artwork/occult.png'), description: 'Occult Warfare' }
      ],
      selectedArt: null
    };
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
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.overlay-content {
  padding: 20px;
  border-radius: 10px;
  display: flex;
  align-items: center;
}

.description {
  margin-left: 20px;
}
</style>