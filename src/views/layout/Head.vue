<template>
  <div>
    <el-menu class="navbar" mode="horizontal">
      <div class="hamburger-container">
        <i class="el-icon-menu"></i>
      </div>
      <el-breadcrumb separator="/" class="app-breadcrumb">
        <el-breadcrumb-item class="no-redirect" :to="{ path: '/' }"
          >首页</el-breadcrumb-item
        >
      </el-breadcrumb>
      <el-dropdown class="avatar-container" trigger="click">
        <div class="avatar-wrapper">
          <i class="el-icon-setting"></i>
        </div>
        <el-dropdown-menu class="user-dropdown" slot="dropdown">
          <router-link class="inlineBlock" to="/">
            <el-dropdown-item>首页</el-dropdown-item>
          </router-link>
          <el-dropdown-item divided>
            <span style="display: block">退出</span>
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </el-menu>
  </div>
</template>
<script>
export default {
  name: "Head",
  data() {
    return {};
  },
  props: {
  },
};
</script>
<style lang="scss" scoped>
#app .hideSidebar .main-container {
  margin-left: 36px;
}
.navbar {
  height: 50px;
  line-height: 50px;
  border-radius: 0px !important;
  .hamburger-container {
    float: left;
    padding: 0 10px;
    i {
      font-size: 26px;
      vertical-align: middle;
      cursor: pointer;
    }
  }
  .app-breadcrumb {
    float: left;
    height: 100%;
    margin-left: 10px;
    font-size: 14px;
    line-height: 50px;
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
    right: 35px;
    height: 50px;
    .avatar-wrapper {
      cursor: pointer;
      height: 50px;
      i {
        font-size: 24px;
        vertical-align: middle;
      }
    }
  }
}
</style>