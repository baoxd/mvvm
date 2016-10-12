<template>
    <div>
        <h2>在线人员列表</h2>
        <userlist :userlist.sync="userlist" v-ref:userlist></userlist>
        <button class="btn btn-default " type="button" v-on:click="back">返回</button>
    </div>
</template>

<script>
import Userlist from './Userlist.vue' 

export default {
   props: {
      islogin:{
        type:Boolean,
        default:false
      },
      curruser:null,
      userlist:{
        type:Array,
        default:[]
      }
   },
    methods:{
      back:function(){
        window.history.go(-1)
      }
    },
    events:{
      deleteUser:function(id){
        // var userList = this.$refs.userlist.userlist;
        var userList = this.userlist ;
        var curruser = this.curruser ;
        if(!userList || !userList.length){
          return 
        }
        console.info(this.curruser)
        for(var i = 0 ; i < userList.length ; i++){
          var u = userList[i]
          if(u.id == id){
            userList.splice(i,1)
            break
          }
        }
        if(curruser && curruser.id == id){
          this.curruser = null 
          this.islogin = false 
        }
        // this.$dispatch('refreshUser',userId)
      }
    },
    components:{
      Userlist
    }
  }
</script>


<style>
html {
  height: 100%;
}

body {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}
</style>
