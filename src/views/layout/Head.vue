<template>
  <div>
    <el-menu class="navbar" mode="horizontal">
      <div class="hamburger-container">
        <svg-icon icon-class="menu-switch" @click.native="toggleSideBar"></svg-icon>
      </div>
      <el-breadcrumb separator="/" class="app-breadcrumb">
        <el-breadcrumb-item v-for="(item,index) in levelList" :key="index" v-if="item.meta.title">
          <span v-if="item.redirect==='noredirect'||index==levelList.length-1" class="no-redirect">{{item.meta.title}}</span>
          <router-link v-else :to="item.redirect||item.path">{{item.meta.title}}</router-link>
        </el-breadcrumb-item>
      </el-breadcrumb>
      <div class="avatar-container">
        <div class="avatar-wrapper">
          <el-tooltip class="item" effect="dark" content="退出登录" placement="left">
            <i class="fa fa-sign-out" @click="logout"></i>
          </el-tooltip>
        </div>
      </div>
    </el-menu>
  </div>
</template>
<script>
import { mapGetters,mapActions } from "vuex";
export default {
  name: "Head",
  data() {
    return {
      flag: false,
      levelList: null,
    };
  },
  created() {
    this.getBreadcrumb();
  },
  watch:{
    '$route': 'getBreadcrumb'
  },
  computed: {
    ...mapGetters(["sidebar"]),
  },
  methods: {
    ...mapActions(["toggleSideBar"]),
    logout(){
      this.$store.dispatch("logout").then(()=>{
        // 重新刷新为了重新实例化vue-router对象 避免bug
        location.reload();
      })
    },
    getBreadcrumb(){
      let matched = this.$route.matched.filter((item)=>{
        return item.name
      })
      const first = matched[0];
      if (first && first.name !== 'home') {
        matched = [{ path: '/home', meta: { title: '首页' }}].concat(matched)
      }
      this.levelList = matched;
    }
  },
};
</script>
<style lang="scss" scoped>
#app .hideSidebar .main-container {
  margin-left: 64px;
}
.navbar {
  height: 56px;
  line-height: 56px;
  border-radius: 0px !important;
  .hamburger-container {
    float: left;
    padding: 0 10px;
    height: 100%;
    .svg-icon {
      font-size: 25px;
      vertical-align: middle;
      cursor: pointer;
    }
  }
  .app-breadcrumb {
    float: left;
    height: 100%;
    margin-left: 10px;
    font-size: 14px;
    line-height: 56px;
  }
  .screenfull {
    position: absolute;
    right: 90px;
    top: 16px;
    color: red;
  }
  .avatar-container {
    display: inline-block;
    position: absolute;
    right: 25px;
    height: 56px;
    .avatar-wrapper {
      cursor: pointer;
      height: 56px;
      i {
        font-size: 24px;
        vertical-align: middle;
      }
    }
  }
}
</style>