// Route config
export default function(router) {
  router.map({
    '/': {
      component: require("./components/Home.vue")
    },
    '/home': {
      component: require("./components/Home.vue")
    },
    '/user': {
      component: require("./components/User.vue")
    },
    '/provident': {
      component: require("./components/Provident.vue")
    },
    '/insurance': {
      component: require("./components/Insurance.vue")
    }
  })
}
