// Route config
export default function(router) {
  router.map({
    '/': {
      component: require("./components/Index.vue")
    },
    '/index': {
      component: require("./components/Index.vue")
    }
  })
}
