<template>
   <div class="text_group">
       <!-- 组件容器 -->
       <!-- 输入框 -->
       <div class="input_group" :class="{'is-invalid': error}">
           <!-- 手机号 -->
           <input :type="type" :placeholder="placeholder" :value="value" @input="$emit('input',$event.target.value)">
           <!-- 获取验证码按钮 -->
           <button v-if="btnTitle" :disabled="disabled" @click="$emit('btnclick')">{{btnTitle}}</button>
       </div>
        <!-- 错误提醒 -->
       <div class="invalid-feedback" v-if="error">{{error}}</div>
   </div>
</template>

<script>
export default {
    name:'inputgroup',
    props:{
       placeholder:String,
       type:String,
       btnTitle:String,
       error:String,
       disabled:Boolean,
       value:String
    }
}
</script>

<style scoped>
.input_group {
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.input_group input {
  height: 100%;
  width: 60%;
  outline: none;
  border: none;
}
.input_group button {
  border: none;
  outline: none;
  background: #fff;
}
.input_group button[disabled] {
  color: #aaa;
}
.is-invalid {
  border: 1px solid red;
}
.invalid-feedback {
  color: red;
  padding-top: 5px;
}
</style>