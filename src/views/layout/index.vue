<template>
  <div class="app-wrapper clearfix">
    <Nav></Nav>
    <div class="main-container">
      <Head></Head>
      <Main></Main>
    </div>
  </div>
</template>
<script>
import Nav from "@/views/layout/Nav";
import Head from "@/views/layout/Head";
import Main from "@/views/layout/Main";
export default {
  name: "Layout",
  data() {
    return {};
  },
  components: {
    Nav,
    Head,
    Main
  },
};
</script>
<style lang="scss" scope>
.app-wrapper {
  position: relative;
  height: 100%;
  width: 100%;
}
.no-redirect{
		.el-breadcrumb__inner{
			color: #97a8be !important;
		}
	}
</style>