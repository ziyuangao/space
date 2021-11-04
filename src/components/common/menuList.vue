<template>
  <el-affix :offset="20">
       <el-button type="primary" size="small" :icon="Menu" @click="drawer = true" id="menuBtn"></el-button>
  </el-affix>
  <el-drawer
    v-model="drawer"
    title="菜单"
    :with-header="false"
    direction="ltr"
    size="88"
    :before-close="handleClose"
  >
    <ul id="menuList">
        <li v-for="item in menuArr" :key="item.id" >
            <el-button type="text" v-text="item.name" @click="handleSwitch(item)" :disabled="item.disabled" ></el-button>
        </li>
    </ul>
  </el-drawer>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { Menu } from '@element-plus/icons'
import { useRouter } from 'vue-router'
export default defineComponent({
  setup() {
    const router = useRouter()
    const menuArr = [
        {id:1,name:'首页',path:'/home',disabled:false},
        {id:2,name:'小说',path:'/story',disabled:false}
    ]
    const drawer = ref(false);
    const handleClose = (done) => {
     done()
    }
    const handleSwitch = (item) => {
        drawer.value = false;
        router.push(item.path);
    }
    return {
      drawer,
      Menu,
      menuArr,
      handleClose,
      handleSwitch,
    }
  },
})
</script>

<style scoped>
#menuBtn{
    margin-left: 20px;
}
</style>