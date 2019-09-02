<template>
  <el-row class="lay-header" type="flex" justify="space-between">
    <!-- 顶部左侧内容 -->
    <el-col :span="7" class="left">
      <i class="el-icon-s-unfold icon"></i>
      <span>江苏传智播客教育科技股份有限公司</span>
    </el-col>

    <!-- 顶部右侧内容 -->
    <el-col :span="3" class="right">
      <img class="head_img" :src="userInfo.photo ? userInfo.photo : defaultImg" alt />
      <el-dropdown trigger="click">
        <span class="el-dropdown-link">
          {{userInfo.name}}
          <i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>个人信息</el-dropdown-item>
          <el-dropdown-item>git地址</el-dropdown-item>
          <el-dropdown-item>退出</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </el-col>
  </el-row>
</template>

<script>
export default {
  data () {
    return {
      userInfo: {},
      defaultImg: require('../../assets/img/avatar.jpg')// 转成base64字符串
    }
  },
  methods: {
    getUserInfo () {
      let token = window.localStorage.getItem('user-token')// 获取token
      this.$axios({
        url: 'user/profile',
        headers: { 'Authorization': `Bearer ${token}` }
      }).then(result => {
        console.log(result)
        this.userInfo = result.data.data
      }).catch()
    }
  },
  created () {
    this.getUserInfo()
  }
}
</script>

<style lang="less" scoped>
.lay-header {
  padding: 5px 0;
  .left {
    display: flex;
    align-items: center;
    .icon {
      font-size: 18px;
      padding-right: 5px;
    }
  }
  .right {
    display: flex;
    align-items: center;
  }

  .head_img {
    border-radius: 50%;
    margin-right: 4px;
    width: 38px;
  }
}
</style>>
