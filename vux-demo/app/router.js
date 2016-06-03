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
    '/home': {
      component: require("./components/Home.vue")
    },
    '/user': {
      component: require("./components/User.vue")
    },
    '/improve': {
      component: require("./components/Improve.vue")
    },
    '/evaluate': {
      component: require("./components/Evaluate.vue")
    }
  })
}
