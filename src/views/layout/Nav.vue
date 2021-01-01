<template>
  <div class="sidebar-container">
    <!-- <el-radio-group v-model="isCollapse" style="margin-bottom: 20px">
      <el-radio-button :label="false">展开</el-radio-button>
      <el-radio-button :label="true">收起</el-radio-button>
    </el-radio-group> -->
    <el-menu
      class="el-menu-vertical-demo"
      :collapse="isCollapse"
      background-color="#304156"
      text-color="#bfcbd9"
      active-text-color="#409EFF"
    >
      <router-link to="/">
        <el-menu-item index="1" class="el-submenu">
          <i class="el-icon-house"></i>
          <span slot="title">首页</span>
        </el-menu-item>
      </router-link>
      <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-s-goods"></i>
          <span slot="title">商品</span>
        </template>
        <template>
          <el-menu-item index="1-1">
            <i class="el-icon-s-goods"></i>
            <span>商品列表</span>
          </el-menu-item>
          <el-menu-item index="1-2">
            <i class="el-icon-s-goods"></i>
            <span>添加商品</span>
          </el-menu-item>
        </template>
      </el-submenu>
      <el-submenu index="3">
        <template slot="title">
          <i class="el-icon-s-order"></i>
          <span slot="title">订单</span>
        </template>
        <template>
          <el-menu-item index="1-1">
            <i class="el-icon-s-order"></i>
            <span>订单列表</span>
          </el-menu-item>
          <el-menu-item index="1-2">
            <i class="el-icon-s-order"></i>
            <span>订单设置</span>
          </el-menu-item>
        </template>
      </el-submenu>
      <el-submenu index="4">
        <template slot="title">
          <i class="el-icon-collection"></i>
          <span slot="title">营销</span>
        </template>
        <template>
          <el-menu-item index="1-1">
            <i class="el-icon-collection"></i>
            <span>秒杀活动列表</span>
          </el-menu-item>
          <el-menu-item index="1-2">
            <i class="el-icon-collection"></i>
            <span>优惠券列表</span>
          </el-menu-item>
        </template>
      </el-submenu>
      <el-submenu index="5">
        <template slot="title">
          <i class="el-icon-s-custom"></i>
          <span slot="title">权限</span>
        </template>
        <template>
          <el-menu-item index="1-1">
            <i class="el-icon-s-custom"></i>
            <span>用户列表</span>
          </el-menu-item>
          <el-menu-item index="1-2">
            <i class="el-icon-s-custom"></i>
            <span>角色列表</span>
          </el-menu-item>
        </template>
      </el-submenu>
    </el-menu>
  </div>
</template>
<script>
export default {
  name: "Nav",
  methods: {
  },
  computed:{
      isCollapse(){
          return !false;
      }
  }
};
</script>
<style lang="scss" scope>
#app .sidebar-container {
  -webkit-transition: width 0.28s;
  transition: width 0.28s;
  width: 64px !important;
  height: 100%;
  position: fixed;
  font-size: 0px;
  top: 0;
  bottom: 0;
  left: 0;
  z-index: 1001;
  overflow: hidden;
  background-color: #304156;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
.el-menu {
  border-right: 0;
}
.el-submenu [class^="el-icon-"] {
  color: #bfcbd9;
  font-size: 20px;
}
.el-submenu {
  .el-menu--inline {
    .el-menu-item {
      background-color: #1f2d3d !important;
    }
  }
}
</style>