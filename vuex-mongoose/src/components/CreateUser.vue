<script>
	export default {
		name: 'CreateUser',

	  vuex: {
	    getters: {
	      User: ({ global }) => global.User
	    }
	  },

	  methods: {
	    createUser() {
	      const userInfo = {
	        username: 'Hello Kitty',
	        password: '666666'
	      }
	      User.create(userInfo, function (err, result) {
	        if (err) {
	          console.log(err);
	        }
	      })
	    }
	  },

	  ready () {
	    this.createUser()
	  }
	}
</script>
<template>
	
</template>