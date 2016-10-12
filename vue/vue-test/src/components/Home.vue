<template>
  <h2>
    欢迎使用vuejs
  </h2>
  <div>
    <h2 v-if="islogin">当前用户:{{curruser.name}}</h2>
    <button type="button" v-show="!islogin" class="btn btn-primary btn-lg" v-on:click="goToLogin">登录</button>
    <button type="button" class="btn btn-primary btn-lg" v-on:click="goToUsers">人员管理</button>
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
