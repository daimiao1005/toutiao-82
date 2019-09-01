<template>
  <!-- 外层组件 -->
  <el-container>
    <!-- 左侧 -->
    <el-aside>
      <layout-aside></layout-aside>
    </el-aside>
    <lay-header></lay-header>
    <el-container>
      <!-- 右侧头部 -->
      <el-header>头部</el-header>
      <!-- 右侧主体 -->
      <el-main>主体</el-main>
    </el-container>
  </el-container>
</template>

<script>
import layoutAside from '../../components/home/layout-aside'
import layHeader from '../../components/home/lay-header'
export default {
  components: {
    'layout-aside': layoutAside,
    'lay-header': layHeader
  }
}
</script>

<style>
</style>
