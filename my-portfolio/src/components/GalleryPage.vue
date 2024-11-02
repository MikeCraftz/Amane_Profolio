<template>
  <div class="container">
    <h1>Gallery</h1>
    <div class="grid">
      <div class="tile" v-for="art in galleryArt" :key="art.id" @click="openArt(art)">
        <img :src="art.src" :alt="art.title" />
      </div>
    </div>

    <div v-if="selectedArt" class="overlay" @click="closeArt">
      <div class="overlay-content">
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
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
}

.overlay-content {
  background: white;
  padding: 20px;
  border-radius: 10px;
  display: flex;
  align-items: center;
}

.description {
  margin-left: 20px;
}
</style>