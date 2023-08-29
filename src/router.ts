import { createRouter, createWebHistory } from "vue-router";

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      name: "home",
      path: "/",
      component: () => import("./views/Home/Page.vue"),
      meta: {
        title: "Home",
      }
    },
    {
      name: "about",
      path: "/about",
      component: () => import("./views/About.vue"),
      meta: {
        title: "About",
      }
    },
    {
      name: "noteEditor",
      path: "/notes/:id",
      component: () => import("./views/NoteEditor/Page.vue"),
      meta: {
        title: "Note Editor",
      }
    },
  ],
});

export const setTitle = (title?: string) => {
  let docTitle = `${router.currentRoute.value.meta.title} | VuePocketbase`;
  if (title) docTitle = `${title} | ${docTitle}`;
  window.document.title = docTitle;
}
