import { createApp } from 'vue';  // Import createApp from Vue 3
import App from './App.vue';  // Import your App.vue
import router from './router';  // Import your router configuration

// Create the app and use the router
const app = createApp(App);

app.use(router);  // Use the router with the app
app.mount('#app');  // Mount the app to the div with id 'app'