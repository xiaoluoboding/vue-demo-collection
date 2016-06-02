// Route config
export default function(router) {
  router.map({
    '/': {
      component: require("./components/Login.vue")
    },
    '/login': {
      component: require("./components/Login.vue")
    },
    '/signup': {
      component: require("./components/Signup.vue")
    },
    '/evaluate': {
      component: require("./components/Evaluate.vue")
    }
  })
}
