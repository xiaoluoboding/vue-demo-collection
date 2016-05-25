<script>
  export default {
    name: "FileExplorer",
    data: function() {
      return {
        path: '/',
        files: []
      };
    },
    props: {
      username: {
        type: String,
        required: true
      },
      repo: {
        type: String,
        required: true
      }
    },
    computed: {
      fullRepoUrl: function() {
        return this.username + '/' + this.repo;
      },
      sortedFiles: function() {
        return this.files.slice(0).sort(function(a, b) {
          if (a.type !== b.type) {
            if (a.type === 'dir') {
              return -1;
            } else {
              return 1;
            }
          } else {
            if (a.name < b.name) {
              return -1;
            } else {
              return 1;
            }
          }
        });
      }
    },
    methods: {
      getFiles: function() {
        this.$http.get('https://api.github.com/repos/' + this.fullRepoUrl + '/contents' + this.path,
          function(data) {
            this.files = data;
          }
        );
      },
      changePath: function(path) {
        this.path = '/' + path;
        this.getFiles();
      },
      goBack: function() {
        this.path = this.path.split('/').slice(0, -1).join('/');
        if (this.path === '') this.path = '/';
        this.getFiles();
      }
    },
    watch: {
      repo: function(newVal, oldVal) {
        this.path = '/';
        this.getFiles();
      }
    },
    created: function() {
      if (this.username && this.repo) this.getFiles();
    }
  };
</script>
<template>
  <div class="row">
    <div class="col s12">
      <table class="table">
        <caption>{{ path }}</caption>
        <thead>
          <tr>
            <th>Name</th>
            <th class="text-right">
              <button class="btn btn-inverse btn-xs" @click="goBack()" v-if="path !== '/'">返&emsp;回</button>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="file in sortedFiles">
            <td>
              <div class="file" v-if="file.type === 'file'">
                <i class="material-icons">insert_drive_file</i>
                <a href="#"> {{ file.name }}</a>
              </div>
              <div class="directory" v-if="file.type === 'dir'">
                <i class="material-icons">folder</i>
                <a @click="changePath(file.path)"> {{ file.name }}</a>
              </div>
            </td>
            <td class="text-right">
              <a href="{{ file.download_url }}" download v-if="file.type === 'file'">
                <i class="material-icons">file_download</i>
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
