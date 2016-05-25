<script>
  import FileExplorer from './FileExplorer.vue'

  export default {
    name: 'Fullreponame',
    data: function() {
      return {
        fullRepoName: '',
        username: '',
        repo: ''
      };
    },
    methods: {
      changeRepo: function() {
        this.username = this.fullRepoName.split('\/').shift();
        this.repo = this.fullRepoName.split('\/').pop();
        console.group("Vue Data");
        console.log("fullRepoName:", this.fullRepoName);
        console.log("username:", this.username);
        console.log("repo:", this.repo);
        console.groupEnd("Vue Data");
      }
    },
    components: {
      FileExplorer
    }
  }
</script>
<template>
  <div id="container" class="container">
    <div class="row">
      <h4>Github文件浏览器</h4>
      <div class="row">
      <form id="changeRepoForm" @submit.prevent="changeRepo()" class="col s12">
        <div class="row">
          <div class="col s6">
            <label for="fullRepoName">Full Repo Name</label>
            <input type="text" placeholder="xiaoluoboding/ghost-theme-kaldorei" id="fullRepoName" v-model="fullRepoName" class="form-control">
          </div>
          <div class="col s6">
            <button type="submit" class="btn btn-primary">获&emsp;取</button>
          </div>
        </div>
      </form>
      <file-explorer :username="username" :repo="repo"></file-explorer>
    </div>
  </div>
</template>
