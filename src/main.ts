import { createApp } from "vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faThumbsUp, faThumbsDown } from "@fortawesome/free-solid-svg-icons";
import App from "./App.vue";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue-3/dist/bootstrap-vue-3.css";

import BootstrapVue3 from "bootstrap-vue-3";

library.add(faThumbsUp, faThumbsDown);

const app = createApp(App);

app.use(BootstrapVue3);

app.component("font-awesome-icon", FontAwesomeIcon);
app.mount("#app");
