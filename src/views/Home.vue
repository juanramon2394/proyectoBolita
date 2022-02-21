<template>
  <div class="main-home">
    <v-navigation-drawer
      permanent
      class="sidebar"
      v-model="drawer"
      :style="{ 'z-index': '2' }"
      ><Sidebar
    /></v-navigation-drawer>
    <div class="home-box">
      <Toolbar />
      <router-view class="home-content fade-motion"></router-view>
    </div>
  </div>
</template>

<style scoped>
.main-home {
  min-height: 100vh;
  background-color: #f0f0f7;
}
.toolbar-box {
  width: 100%;
  padding: 0;
}
.sidebar {
  position: fixed;
  z-index: 1;
  width: 210px !important;
  background: linear-gradient(180deg, #20337d, blue);
}
.home-box {
  margin-left: 210px;
}
.home-content {
  padding: 1.8rem;
}

@media (max-width: 700px) {
  /* .sidebar {
    display: none;
  } */
  .home-box {
    margin-left: 0px;
  }
}
</style>

<script>
// @ is an alias to /src
import Toolbar from "@/components/TheToolbar";
import Sidebar from "@/views/TheSidebar";
// import TiersCrud from "./TiersCrud";

export default {
  name: "Home",
  components: {
    Toolbar,
    Sidebar
  },
  data() {
    return {
      drawer: true
    };
  }
};
</script>
