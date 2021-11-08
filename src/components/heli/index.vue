<template>
    <div id="heli">
        <el-backtop :bottom="100"></el-backtop>
        <div class="storyWrap">
            <div class="left">
                <router-view />
                <div class="opeartionBtn" @click="openStatus=!openStatus" >
                    <svg v-show="!openStatus" style="margin-top:170px"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" data-v-394d1fd8=""><path fill="currentColor" d="M685.248 104.704a64 64 0 0 1 0 90.496L368.448 512l316.8 316.8a64 64 0 0 1-90.496 90.496L232.704 557.248a64 64 0 0 1 0-90.496l362.048-362.048a64 64 0 0 1 90.496 0z"></path></svg>
                    <svg v-show="openStatus" style="margin-top:170px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" data-v-394d1fd8=""><path fill="currentColor" d="M338.752 104.704a64 64 0 0 0 0 90.496l316.8 316.8-316.8 316.8a64 64 0 0 0 90.496 90.496l362.048-362.048a64 64 0 0 0 0-90.496L429.248 104.704a64 64 0 0 0-90.496 0z"></path></svg>
                </div>
            </div>
            <div :class="openStatus?'right':'close right'">
                <!-- 右侧目录 固定在右上角 -->
                <el-carousel height="360px" :autoplay="false" :interval="0" indicator-position="none" :arrow="tabNumber>1?'always':'never'">
                    <!-- 每页最多35个 第一页1-35  第二页36-70 -->
                    <el-carousel-item v-for="(item,index) in tabNumber" :key="index">
                        <div class="btnBox">
                            <div class="pageItems" v-for="itemc in item*35" :key="itemc" v-show="(item-1)*35 < itemc && itemc <= item*35 && itemc <= total"  @click="handleClick(itemc)" >{{itemc}}</div>
                        </div>
                    </el-carousel-item>
                </el-carousel>
            </div>
        </div>
    </div>
</template>


<script lang="ts">
import {ref} from "vue";
import { useRouter } from 'vue-router'
export default {
    setup() {
        // 总数
        const total = ref(4);
        // 页码
        const tabNumber = Math.ceil(total.value/35);
        const router = useRouter()
        const handleClick = (item)=>{
            router.push('/heliPage?page='+item)
        }
        const openStatus = ref(true)
        return {total,tabNumber,handleClick,openStatus}
    },
    mounted(){
        // 默认展示第一页
        setTimeout(() => {
            this.$router.push('/heliPage?page=1')
        }, 500);
    }
}
</script>

<style scoped>
#heli{
    width: 100%;
    overflow: hidden;
}
.storyWrap{
    width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    border-radius: 12px;
    overflow: hidden;
}
.left{
    position: relative;
    flex: 1;
    height: 2400px;
    background-color: #faeed7;
    padding: 20px;
    box-sizing: border-box;
}
.right{
    animation: open .3s 1;
    width: 300px;
    height: 410px;
    background-color: #7BB9F9;
    box-sizing: border-box;
    padding: 20px;
    border-radius: 0 12px 12px 0;
}
.opeartionBtn{
    position: absolute;
    top: 0;
    right: 0;
    width: 20px;
    height: 100%;
    background-color: #faeed7;
    
}
.close{
    width: 0;
    padding: 0;
    animation:close .3s 1;
}
.btnBox{
    display: flex;
    justify-content: start;
    align-items: center;
    flex-flow: wrap row;
}
.pageItems{
    width: 41px;
    height: 41px;
    line-height: 41px;
    text-align: center;
    border-radius: 8px;
    background-color: #fff;
    color: #000;
    margin: 5px;
    box-sizing: border-box;
    cursor: pointer;
}
.pageItems:hover{
    color: #fff;
    background-color: #409EFF;
}
@keyframes close { from { width: 300px; } to { width: 0; }}
@keyframes open { from { width: 0; } to { width: 300px; }}
</style>