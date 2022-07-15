<template>
  <div id="app">
    <a @click="gotoPath('/')">goto index</a><br>
    <a @click="gotoPath('/project1')">goto p1</a> <br>
    <a @click="gotoPath('/project2')">goto p2</a><br>
    <a @click="gotoPath('/project3')">goto p3</a><br>
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <router-view />

    <div id="container"></div>
  </div>
</template>

<script>
import { registerMicroApps, start } from 'qiankun';

export default {
  mounted() {
    registerMicroApps([
      {
        name: 'project1',
        entry: 'http://localhost:3000/subApp/project1',
        // entry: '/subApp/project1/',
        container: '#container',
        activeRule: '/project1',
      },
      {
        name: 'project2',
        entry: 'http://localhost:4000/subApp/project2',
        // entry: '/subApp/project2/',
        container: '#container',
        activeRule: '/project2',
      },
      {
        name: 'project3',
        entry: 'http://localhost:5000/subApp/project2',
        // entry: 'http://localhost:4000/project2',
        // entry: '/subApp/project3/',
        container: '#container',
        activeRule: '/project3',
      },
    ]);

    start({
      sandbox: { strictStyleIsolation: true },
    });
  },
  methods: {
    gotoPath(path) {
      this.$router.push(path);
    },
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
