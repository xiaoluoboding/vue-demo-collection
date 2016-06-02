// Route config
export default function(router) {
  router.map({
    '/': {
      component: require("./components/Index.vue")
    },
    '/signin': {
      component: require("./components/Signin.vue")
    },
    '/signup': {
      component: require("./components/Signup.vue")
    },
    '/evaluate': {
      component: require("./components/Evaluate.vue")
    }
  })
}
