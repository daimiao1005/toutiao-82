<template>
  <div class="main">
    <el-card class="login-card">
      <div class="logo">
        <img src="../../assets/img/logo_index.png" alt="黑马头条" />
      </div>
      <!-- 表单组件el-form表单容器 -->
      <el-form style="margin-top:30px">
        <!-- 表单项  -->
        <el-form-item>
          <!-- 放置组件内容 -->
          <el-input placeholder="请输入手机号码"></el-input>
        </el-form-item>

        <el-form-item>
          <el-input style="width:240px;" placeholder="请输入验证码"></el-input>
          <el-button style="float:right">发送验证码</el-button>
        </el-form-item>

        <el-form-item style="margin-top:-20px">
          <el-checkbox>我已阅读并同意用户协议和隐私条款</el-checkbox>
        </el-form-item>

        <el-form-item style="margin-top:-20px">
          <el-button style="width:100%" type="primary">登录</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
export default {}
</script>

<style lang='less' scoped>
.main {
  background-image: url("../../assets/img/login_bg.jpg");
  // width: 100%;
  height: 100vh;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  .login-card {
    width: 400px;
    height: 300px;
    .logo {
      text-align: center;
      img {
        height: 45px;
      }
    }
  }
}
</style>
