<template>
  <div class="login">
      <div class="logo">
          <img src="../assets/logo.jpg" alt="">
      </div>
      <!-- 手机号 -->
     <InputGroup :type="type" placeholder="请输入手机号" v-model="phone" :btnTitle="btnTitle" :disabled="disabled" :error="errors.phone" @btnclick="getVerifycode"></InputGroup>
      <!-- 验证码 -->
      <InputGroup :type="type" placeholder="请输入验证码" v-model="verifycode" :error="errors.code"></InputGroup>
      <!-- 用户服务协议 -->
    <div class="login_des">
      <p>
        新用户登录即自动注册，表示已同意
        <span>《用户服务协议》</span>
      </p>
    </div>
    <!-- 登录按钮 -->
    <div class="login_btn">
      <button :disabled="isClick" @click="handleLogin">登录</button>
    </div>
  </div>
</template>

<script>
import InputGroup from '../components/InputGroup'
export default {
    name:'login',
    data(){
        return{
            type:'number',
            phone:'',
            btnTitle:'获取验证码',
            disabled:false,
            verifycode:'',
            errors:{},
        }
    },
    methods:{
        handleLogin(){
          // 取消所有错误提醒 
          this.errors = {}
          // 验证验证码是否正确
          // this.axios.post("/api/posts/sms_back",{phone:this.phone,code:this.verifycode})
          //     .then(res=>{
          //       // 检验成功 设置登录状态并跳转到 / 
          //       localStorage.setItem('ele_login',true)
          //       this.router.push('/')
          //     })
          //     .catch(error=>{
          //       // 返回错误提醒 
          //       this.errors = {
          //         code:error.response.data.msg
          //       }
          //     })
          console.log("登录");
          localStorage.setItem('ele_login',true)
          this.$router.push('/')
        },
        getVerifycode(){
           if(this.validatePhone()){
            //    手机号码验证通过后，发送网络请求
            // this.axios.post('/api/posts/sms_back',{"验证码平台需要用的参数"})
            //     .then(res=>{
            //       console.log(res)
            //     })
            //     .catch(error=>{
            //       console.log(error)
            //     })
            // 设置 设置 获取验证码倒计时 
            this.validateBtn()
           }
        },
        validateBtn(){
          let time = 60;
          let timer = setInterval(()=>{
            if(time == 0){
              clearInterval(timer);
              this.btnTitle = "获取验证码";
              this.disabled = false;
            }else{
              // 倒计时
              this.btnTitle = time + "秒后重试";
              this.disabled = true;
              time --;
            }
          },1000)
        },
        validatePhone(){
            if(!this.phone){
                this.errors = {
                    phone:'手机号码不能为空'
                }
                return false
            }else if(!/^1[345678]\d{9}$/.test(this.phone)){
                this.errors = {
                    phone:'请输入正确的手机号码'
                }
                return false
            }else{
                this.errors = {}
                return true
            }
        }
    },
    computed:{
      isClick(){
        if(!this.phone || !this.verifycode){
          return true;
        }else{
          return false
        }
      }
    },
    components:{InputGroup},
}
</script>

<style scoped>
.login {
  width: 100%;
  height: 100%;
  padding: 30px;
  box-sizing: border-box;
  background: #fff;
}

.logo {
  text-align: center;
}
.logo img {
  width: 150px;
}
.text_group,
.login_des,
.login_btn {
  margin-top: 20px;
}
.login_des {
  color: #aaa;
  line-height: 22px;
}
.login_des span {
  color: #4d90fe;
}
.login_btn button {
  width: 100%;
  height: 40px;
  background-color: #48ca38;
  border-radius: 4px;
  color: white;
  font-size: 14px;
  border: none;
  outline: none;
}
.login_btn button[disabled] {
  background-color: #8bda81;
}
</style>