<template>
  <div class="sidebar-container">
    <el-menu
      class="el-menu-vertical-demo"
      :collapse="sidebar.opened"
      background-color="#304156"
      text-color="#bfcbd9"
      active-text-color="#409EFF"
    >
      <router-link to="/">
        <el-menu-item index="0" class="el-submenu">
          <i class="el-icon-house"></i>
          <span slot="title">首页</span>
        </el-menu-item>
      </router-link>
      <el-submenu
        v-for="(item, index) in routes"
        :key="index"
        :index="index + '1'"
      >
        <template slot="title">
          <i :class="item.icon"></i>
          <span slot="title">{{ item.name }}</span>
        </template>
        <template>
          <router-link
            v-for="(children, childrenIndex) in item.children"
            :to="children.path"
            :key="childrenIndex"
          >
            <el-menu-item :index="index + '1' + '-' + childrenIndex">
              <i :class="children.icon"></i>
              <span>{{ children.name }}</span>
            </el-menu-item>
          </router-link>
        </template>
      </el-submenu>
    </el-menu>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  name: "Nav",
  data() {
    return {
      routes: [
        {
          path: "/sp",
          name: "商品",
          icon: "el-icon-s-goods",
          children: [
            {
              path: "/sp/list",
              name: "商品列表",
              icon: "el-icon-s-goods",
            },
            {
              path: "/sp/add",
              name: "添加商品",
              icon: "el-icon-s-goods",
            },
          ],
        },
        {
          path: "/dd",
          name: "订单",
          icon: "el-icon-s-order",
          children: [
            {
              path: "/dd/list",
              name: "订单列表",
              icon: "el-icon-s-order",
            },
            {
              path: "/dd/set",
              name: "订单设置",
              icon: "el-icon-s-order",
            },
          ],
        },
      ],
    };
  },
  /* mounted() {
    this.pageInit();
  },
  methods:{
    pageInit(){
      this._getInfo((res)=>{
        console.log(res)
      })
    },
    _getInfo(callback){
        this.$api.getInfo().then((res)=>{
        callback(res.data.menus);
      })
    }
  }, */
  computed: {
    ...mapGetters(["sidebar"]),
  },
}
</script>
<style lang="scss" scope>
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