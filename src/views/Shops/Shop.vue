<template>
  <div class="shop">
      <nav class="header-"></nav>
  </div>
</template>

<script>
export default {
    name:'shop',
    data(){
        return{
            shopInfo:null
        }
    },
    created(){
        this.getData()
    },
    methods:{
        getData(){
            this.$axios("/api/profile/batch_shop")
                .then(res=>{
                    // console.log(res.data);
                    this.shopInfo = res.data
                })
        }
    }
}
</script>

<style>

</style>