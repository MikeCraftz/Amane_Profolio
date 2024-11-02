<template>
  <Menubar :model="items" :class="menuBarThemeToggle" class="menu-bar">
      <template #start>
        <img src="@/assets/icon.png" alt="Logo" style="width: 24px; margin-right: 0.5rem;" />
        <h3 style="margin-right: 1rem;">AmaneC</h3>
      </template>
      <template #end>
        <Button label="Toggle light/dark mode" @click="toggleTheme" />
      </template>
  </Menubar>
  <div class="app-container">
    <div>
      <p></p>
    </div>
    <router-view />
  </div>
</template>

<script>
import Button from 'primevue/button';
import Menubar from 'primevue/menubar';
export default {
  data() {
    return {
       theme: localStorage.getItem('theme') || 'light-mode',
      items: [
        {
          label: 'Home',
          command: () => {
            this.$router.push('/');
          }
        },
        {
          label: 'Gallery',
          command: () => {
            this.$router.push('/gallery');
          }
        }
      ]
    };
  },
  computed: {
    menuBarThemeToggle() {
      return this.$root.theme === 'dark-mode' ? 'dark-menu' : 'light-menu';
    }
  },
  components: {
    Button,
    Menubar,
  },
  mounted() {
    document.body.className = this.theme;
  },
  methods: {
    toggleTheme() {
      this.theme = this.theme === 'light-mode' ? 'dark-mode' : 'light-mode';
      document.body.className = this.theme;
      localStorage.setItem('theme', this.theme);
    }
  }
};
</script>

<style scoped>
.app-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 20px;
}

.content {
  max-width: 600px;
  width: 100%;
}

.menu-bar {
  padding: 20px;
  border-radius: 10px;
}

.menubar-item {
  margin-right: 20px;
  padding: 10px 15px;
}

/* TODO: Update card dark/light mode colour */
.light-menu {
  background-color: #f0f0f0;
  color: #000;
}

.dark-menu {
  background-color: #444;
  color: #fff;
}
</style>