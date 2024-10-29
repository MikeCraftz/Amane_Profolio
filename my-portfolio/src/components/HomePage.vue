<template>
  <div class="container">
    <div class="section">
      <h1>About Me</h1>
      <p>Welcome to my portfolio. I'm [Your Name], a passionate artist...</p>
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
export default {
  data() {
    return {
      featuredArt: [
        { id: 1, title: 'Art 1', src: 'path_to_art1.jpg' },
        { id: 2, title: 'Art 2', src: 'path_to_art2.jpg' }
      ]
    };
  },
  methods: {
    goToGallery() {
      this.$router.push('/gallery');
    }
  }
};
</script>

<style scoped>
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
</style>