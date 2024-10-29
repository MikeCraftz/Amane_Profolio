<template>
  <div class="container">
    <h1>Gallery</h1>
    <div class="grid">
      <!-- Display gallery art -->
      <div class="tile" v-for="art in galleryArt" :key="art.id" @click="openArt(art)">
        <img :src="art.src" :alt="art.title" />
      </div>
    </div>

    <!-- Overlay for enlarged art -->
    <div v-if="selectedArt" class="overlay" @click="closeArt">
      <div class="overlay-content" @click.stop>
        <img :src="selectedArt.src" :alt="selectedArt.title" />
        <div class="description">{{ selectedArt.description }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      galleryArt: [
        { id: 1, title: 'Art 1', src: 'path_to_art1.jpg', description: 'Description of Art 1' },
        { id: 2, title: 'Art 2', src: 'path_to_art2.jpg', description: 'Description of Art 2' }
      ],
      selectedArt: null
    };
  },
  methods: {
    openArt(art) {
      this.selectedArt = art;
    },
    closeArt() {
      this.selectedArt = null;
    }
  }
};
</script>

<style scoped>
.grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.tile {
  width: 200px;
  margin: 10px;
  cursor: pointer;
}

.tile img {
  width: 100%;
  border-radius: 10px;
  transition: transform 0.2s ease;
}

.tile img:hover {
  transform: scale(1.05);
}

.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  animation: fadeIn 0.3s ease;
}

.overlay-content {
  background: white;
  padding: 20px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  max-width: 80%;
}

.description {
  margin-left: 20px;
  color: #333;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@media (max-width: 600px) {
  .tile {
    width: 150px;
  }

  .overlay-content {
    flex-direction: column;
    text-align: center;
  }

  .description {
    margin: 10px 0 0 0;
  }
}
</style>