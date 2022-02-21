<template>
  <v-app>
    <v-content>
      <router-view v-if="!waiting"></router-view>
    </v-content>
    <VlueConfirm ref="confirm"></VlueConfirm>
    <NotiSnackbar />
  </v-app>
</template>
<style>
* {
  font-family: Ubuntu;
}
hr {
  color: grey;
}
th span {
  font-size: 0.6rem;
}
td {
  font-size: 0.7rem !important;
}
a {
  text-decoration: none;
}
.vlue-tab-span {
  font-size: 0.8rem;
}
.v-input input {
  font-size: 0.8em;
}
.v-text-field label {
  font-size: 0.8em;
}
.top-header {
  font-size: 1.3rem;
  font-family: "Roboto", sans-serif;
  margin-bottom: 15px;
}
.fade-motion {
  animation-name: appearing;
  animation-duration: 1.3s;
}
.vlue-menu-expansion-panel {
  height: 2.6rem !important;
  border-left: 0.2rem solid #0033ff;
}
.bg-vlue-menu-item {
  background-color: #203284 !important;
}
.vlue-menu-button {
  padding-left: 1.5rem !important;
  justify-content: start !important;
  border-left: 0.2rem solid #0033ff;
  height: 2.75rem !important;
}
.vlue-menu-active {
  border-left: 0.2rem solid #4fd9fa;
  background: transparent linear-gradient(180deg, #0029cc 0%, #0033ff 100%) 0%
    0% no-repeat padding-box !important;
}
.vlue-submenu-item {
  font-size: 11px !important;
}
.vlue-submenu-item.active {
  text-decoration: underline;
}
.vlue-submenu-circle {
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background-color: #4fd9fa;
  display: inline-block;
  margin-left: -0.33em;
}
.text-left {
  text-align: left !important;
}
.vlue-page-content {
  background-color: white !important;
}
.vlue-page-content > div {
  height: 500px !important;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  padding: 1em !important;
  outline: none;
  overflow-y: scroll;
}
.vlue-page-content > div::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  background-color: #f5f5f5;
}

.vlue-page-content > div::-webkit-scrollbar {
  width: 4px;
  background-color: #f5f5f5;
  cursor: pointer !important;
}

.vlue-page-content > div::-webkit-scrollbar-thumb {
  border-radius: 10px;
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  background-color: rgb(134, 134, 134);
  cursor: pointer !important;
}
.cursor--pointer {
  cursor: pointer;
}
.font-size-10 {
  font-size: 10px !important;
}
.font-size-12 {
  font-size: 12px !important;
}
.font-size-14 {
  font-size: 14px !important;
}
.font-size-16 {
  font-size: 16px !important;
}
.text-left {
  text-align: left !important;
}
.m-auto {
  margin: auto !important;
}
.w-100 {
  width: 100%;
}
@keyframes appearing {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>
<script>
import Vue from "vue";
import VlueConfirm from "@/components/VlueConfirm";
import NotiSnackbar from "@/components/Snackbar";
export default Vue.extend({
  name: "App",
  components: {
    VlueConfirm,
    NotiSnackbar,
  },
   mounted() {
     this.hola()
  },
  data: () => ({
    waiting: true,
  }),
  methods: {
    async hola(){
		  this.$root.$confirm = this.$refs.confirm.open;
		  this.waiting = false;
	}
  }
});
</script>
