<template>
  <div class="city">
      <div class="search_wrap">
          <div class="search">
              <i class="fa fa-search"></i>
                <input type="text" placeholder="请输入城市名" v-model="city_val">
          </div>
          <button @click="$router.go(-1)">取消</button>
      </div>
      <div style="height:100%">
          <div class="location">
            <location :address="city"></location>
          </div>
          <div class="alphabet" style="height:800px">
            <alphabet :cityInfo="cityInfo" :keys="keys" ref="allcity"></alphabet>
          </div>
      </div>
  </div>
</template>

<script>
import Location from '../components/Location'
import Alphabet from '../components/Alphabet'
export default {
    name:'city',
    components:{
        Location,
        Alphabet,
    },
    data(){
        return{
            city_val:'',
            cityInfo:null,
            keys:[]
        }
    },
    computed:{
        city(){
            return this.$store.getters.location.addressComponent.city || this.$store.getters.location.addressComponent.province
        },
    },
    created(){
        this.getCityInfo()
    },
    methods:{
        getCityInfo(){
            this.$axios("/api/posts/cities")
                .then(res =>{
                    // console.log(res.data)
                    this.cityInfo = res.data;
                    console.log(this.cityInfo);
                    // 得到 字母序号
                    this.keys = Object.keys(res.data)
                    // 删除 序号 hotcities
                    this.keys.pop()
                    // 排序
                    this.keys.sort()
                    // console.log(this.keys);
                    // 调用组件 alphabet内better-scroll
                    this.$nextTick(()=>{
                      this.$refs.allcity.initScroll()
                      console.log("滚")
                    })

                })
                .catch(error=>{
                    console.log(error);
                })
        }
    }

}
</script>

<style scoped>
.city {
  width: 100%;
  height: 100%;
  overflow: auto;
  box-sizing: border-box;
  padding-top: 45px;
}
.search_wrap {
  position: fixed;
  top: 0;
  height: 45px;
  width: 100%;
  background: #fff;
  box-sizing: border-box;
  padding: 3px 16px;
  display: flex;
  justify-content: space-between;
}
.search {
  background-color: #eee;
  border-radius: 10px;
  line-height: 40px;
  width: 85%;
  box-sizing: border-box;
  padding: 0 16px;
}
.search input {
  background: #eee;
  outline: none;
  border: none;
  margin-left: 5px;
}
.search_wrap button {
  outline: none;
  color: #009eef;
}

.location {
  background: #fff;
  padding: 8px 16px;
  height: 65px;
  box-sizing: border-box;
}

.search_list {
  background: #fff;
  padding: 5px 16px;
}
.search_list li {
  padding: 10px;
  border-bottom: 1px solid #eee;
}
</style>