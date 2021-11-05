<script lang="ts">
import { defineComponent } from 'vue'
import { useRouter } from 'vue-router'
import { ElMessage } from 'element-plus'
export default defineComponent({
  setup() {
    const router = useRouter()
    const bookList = [
        {id:1,name:'何立传',path:'/heli',disabled:false},
        {id:2,name:'高远传',path:'/gaoyuan',disabled:true},
        {id:3,name:'待定',path:'/',disabled:true},
    ]
    const handleClick = (item)=>{
        if(item.disabled){
            ElMessage.error('还没开始写')
        }else{
            router.push(item.path)
        }
    }
    return {
      bookList,handleClick
    }
  },
})
</script>

<template>
    <div id="storyWrap">
        <el-carousel :interval="4000" type="card" height="700px">
            <el-carousel-item v-for="item in bookList" :key="item.id">
                <img src="../static/img/bookImg.png" @click="handleClick(item)" >
            </el-carousel-item>
        </el-carousel>
    </div>
</template>

<style scoped>
#storyWrap{
    width: 1200px;
    margin: 100px auto 0;
}
#storyWrap img{
    width: 100%;
    height: 100%;
}
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
  text-align: center;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>
