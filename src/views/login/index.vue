<template>
  <div class="main">
    <el-card class="login-card">
      <div class="logo">
        <img src="../../assets/img/logo_index.png" alt="黑马头条" />
      </div>
      <!-- 表单组件el-form表单容器 -->
      <!-- 数据校验需要给el-form一个model属性 是数据对象 -->
      <el-form :model="loginForm" :rules="loginRules" style="margin-top:30px">
        <!-- 表单项  -->
        <el-form-item prop="mobile">
          <!-- 放置组件内容 -->
          <el-input v-model="loginForm.mobile" placeholder="请输入手机号码"></el-input>
        </el-form-item>

        <el-form-item prop="code">
          <el-input v-model="loginForm.code" style="width:240px;" placeholder="请输入验证码"></el-input>
          <el-button style="float:right">发送验证码</el-button>
        </el-form-item>

        <el-form-item prop="check" style="margin-top:-15px">
          <el-checkbox v-model="loginForm.check">我已阅读并同意用户协议和隐私条款</el-checkbox>
        </el-form-item>

        <el-form-item style="margin-top:-6px">
          <el-button v-on:click="login" style="width:100%" type="primary">登录</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
export default {
  data () {
    let validator = function (rule, value, callBack) {
      if (value) {
        callBack()
      } else {
        callBack(new Error('必须勾选霸王条款'))
      }
    }
    return {
      loginForm: {
        mobile: '',
        code: '',
        check: false
      },
      //   定义规则给el-form
      loginRules: {
        mobile: [
          {
            required: true,
            message: '手机号不能为空'
          },
          {
            pattern: /^1[3456789]\d{9}$/,
            message: '手机号格式错误'
          }
        ],
        code: [
          {
            required: true,
            message: '验证码不能为空'
          },
          {
            pattern: /^\d{6}$/,
            message: '验证码长度必须为6个数字'
          }
        ],
        check: [
          {
            validator
          }
        ]
      }
    }
  },
  methods: {
    login: function () {}
  }
}
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
    height: 330px;
    .logo {
      text-align: center;
      img {
        height: 45px;
      }
    }
  }
}
</style>
