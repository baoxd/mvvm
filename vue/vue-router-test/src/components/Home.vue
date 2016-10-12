<template>
  <div>
    <h2>
      欢迎使用vuejs
    </h2>
    <div>
      <h2 v-if="islogin">当前用户:{{curruser.name}}</h2>
      <a role="button" v-show="!islogin" class="btn btn-primary btn-lg" href="#/login">登录</a>
      <a role="button" class="btn btn-primary btn-lg" href="#/users">人员管理</a>
    </div>
  </div>
</template>

<script>
  export default {
    props:{
      islogin:{
        type:Boolean,
        default:false
      },
      curruser:{
        type:Object,
        default:{}
      },
      userlist:{}
    },
    data:function(){
      return {
      } ;
    },
    methods:{
      goToLogin:function(){
        // this.$emit('login','2222222222222222') ;
        this.$dispatch('login','111111111111111') ;
      },
      goToUsers:function(){
        this.$dispatch('goToUsers') ;
      }
    }
  }
</script>
