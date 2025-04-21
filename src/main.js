import { createApp } from "vue";
import App from "./App.vue";
import { ripple } from "vue3-ripple";

const app = createApp(App);
app.directive("ripple", ripple);
app.mount("#app");
