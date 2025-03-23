import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import axios from "axios";

axios.defaults.baseURL = "http://localhost:8080"; // 백엔드 주소
axios.defaults.headers.common["Content-Type"] = "application/json";

createApp(App).use(router).mount("#app");
