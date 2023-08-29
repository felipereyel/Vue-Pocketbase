import { createApp } from "vue";

import "./style.css";
import App from "./App.vue";
import { router } from "./router";
import pbw from "./services/pocketbase";

pbw.init();
createApp(App).use(router).mount("#app");
