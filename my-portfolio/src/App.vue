<template>
  <div class="menu-container">
    <ul class="menu-bar">
      <li class="logo-container">
        <img src="@/assets/icon.png" alt="Logo" style="width: 24px; margin-right: 0.5rem;" />
        <p>AmaneC</p>
      </li>
      <li>
        <Button @click="goToHome" class="menu-button">
          Home
        </Button>
      </li>
      <li>
        <Button @click="goToGallery" class="menu-button">
          Art Dump
        </Button>
      </li>
      <li>
        <Button @click="toggleTheme" class="menu-button">
          <template #icon>
            <img src="@/assets/icon.png" alt="Logo" style="width: 24px; margin-right: 0.5rem;" />
          </template>
        </Button>
      </li>
    </ul>
  </div>
  <div class="app-container">
    <div>
      <p></p>
    </div>
    <router-view />
  </div>
</template>

<script>
import Button from 'primevue/button';
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
          label: 'Art Dump',
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
  },
  mounted() {
    document.body.className = this.theme;
  },
  methods: {
    goToHome() {
    this.$router.push('/');
    },
    goToGallery() {
    this.$router.push('/gallery');
    },
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
  margin-top: 100px;
}

.content {
  max-width: 600px;
  width: 100%;
}

.light-menu {
  background-color: #e2c492;
  color: #000;
}

.dark-menu {
  background-color: #333333;
  color: #fff;
}

.menu-container {
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  margin: 20px auto;
  position: fixed;
  max-width: 1200px;
  padding: 0 20px;
  backdrop-filter: blur(5px);
}

.menu-bar {
  list-style-type: none;
  padding: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.menu-bar li {
  margin-right: 10px;
}

.menu-button {
  background-color: transparent;
  border: none;
  color: inherit;
  cursor: pointer;
  border-radius: 5px;
}

.logo-container {
  display: flex;
  align-items: center;
}

.menu-button:hover {
  text-decoration: underline;
}
</style>