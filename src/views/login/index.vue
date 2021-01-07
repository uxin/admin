<template>
  <div>
    <el-card class="box-card login-form-layout">
        <el-form :model="loginForm" :rules="loginRules" ref="loginForm">
            <h2 class="login-title color-main">商品后台管理</h2>
            <el-form-item prop="username">
              <el-input placeholder="请输入用户名" type="text" autoComplete="off" v-model="loginForm.username">
                  <i slot="prefix" class="el-input__icon el-icon-user color-main"></i>
              </el-input>
            </el-form-item>
            <el-form-item prop="password">
              <el-input placeholder="请输入密码" :type="pwdType" autoComplete="off" v-model="loginForm.password">
                <i slot="prefix" class="el-input__icon el-icon-lock color-main"></i>
                <i slot="suffix" class="el-icon-view el-input__icon pwd color-main" @click="showPwd"></i>
              </el-input>
            </el-form-item>
            <el-form-item class="btn">
              <el-button type="primary" :autofocus="true" :loading="loading" @click.native.prevent="submitForm">登录</el-button>
            </el-form-item>
        </el-form>
    </el-card>
  </div>
</template>
<script>
import Cookies from 'js-cookie'
export default {
  name: "login",
  data(){
    const validateUsername = (rule, value, callback) => {
      if (value.trim().length <= 3) {
        callback(new Error("请输入正确的用户名"));
      } else {
        callback();
      }
    };
    const validatePass = (rule, value, callback) => {
      if (value.length < 3) {
          callback(new Error('密码不能小于3位'))
        } else {
          callback();
        }
    }
    return {
      pwdType:"password",
      loading:false,
      loginForm:{
        username: '',
        password: '',
      },
      loginRules: {
          username: [{ validator: validateUsername, trigger: 'blur', required:true}],
          password: [{ validator: validatePass, trigger: 'blur', required:true}],
        }
    }
  },
  created() {
    this.loginForm.username = Cookies.get("username");
    this.loginForm.password = Cookies.get("password");
    if(this.loginForm.username === undefined||this.loginForm.username==null||this.loginForm.username===''){
      this.loginForm.username = '';
    }
    if(this.loginForm.password === undefined||this.loginForm.password==null||this.loginForm.password===''){
      this.loginForm.password = '';
    }
  },
  mounted(){

  },
  methods: {
    showPwd() {
      if (this.pwdType === "password") {
        this.pwdType = "text";
      } else {
        this.pwdType = "password";
      }
    },
    submitForm() {
      this.$refs.loginForm.validate((valid) => {
        if (valid) {
          this.loading = true;
          this.$store.dispatch("login",this.loginForm).then((res)=>{
            this.loading = false;
            Cookies.set("username",this.loginForm.username,7);
            Cookies.set("password",this.loginForm.password,7);
            this.$router.push({path: '/'})
          }).catch((res)=>{
            this.loading = false;
          })
        } else {
          console.log('参数验证不合法！');
          return false;
        }
      });
    },
  },
};
</script>
<style lang="scss" scope>
.login-form-layout {
  width: 360px;
  margin: auto;
  border-top: 10px solid #409eff;
  @include center;
  /* position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%); */
}

.login-title {
  text-align: center;
  font-weight: 900;
  font-size: 22px;
  margin-bottom: 20px;
}

.login-center-layout {
  background: #409eff;
  width: auto;
  height: auto;
  max-width: 100%;
  max-height: 100%;
  margin-top: 200px;
}
.btn{
    margin-bottom: 0;
    text-align: center;
    button{
        width:100%;
    }
}
.pwd{
  cursor: pointer;
}
</style>