<template>
      <div class="container">
          <!--  父子组件的通信方式1: 子组件绑定事件，父组件添加方法
              执行流程: 子组件触发绑定的事件，this.$emit('login','msg') ，
              父组件添加的方法自动执行
          <component :is="currentView" v-on:login="login"></component>
          -->
          <!-- 父子组件通信方式2: 父组件通过events属性绑定事件，子组件触发点击事件，
            在处理函数内触发父组件绑定的事件 this.$dispatch('login','msg')   
          <component :is="currentView" :islogin.sync="islogin" :curruser.sync="curruser" :userlist.sync="userlist"></component>
          -->
          <router-view
            :islogin.sync="islogin"
            :curruser.sync="curruser" 
            :userlist.sync="userlist"
            keep-alive
            transition
            transition-mode="out-in"
            >
          </router-view>
      </div>
</template>

<script>


  export default {
    data: function() {
      return {
        currentView: 'home',
        islogin:false,
        curruser:null,
        userlist: null
      }
    },
    ready: function(){
        var ret = [] 
        for(var i = 0 ; i < 9 ; i++){
            var u = {
              id:(i+1),
              name:'name'+(i+1),
              age:(20+i),
              tel:'1375237475'+i
            } 
            ret.push(u)
        }
        this.userlist = ret;
    },
    events: {
      login: function() {
        // route('login',this) ;
      },
      goToUsers:function(){
        // route('users',this)
      },
      refreshUser:function(userId){
        console.log(userId)
        var userList = this.userlist
        if(!userList || !userList.length){
          return 
        }
        for(var i = 0 ; i < userList.length ; i++){
          var u = userList[i]
          if(u.id == userId){
            this.userlist.$remove(u)
            break
          }
        }
      }
    }
  }

  // function route(path,app){
  //   if(!path){
  //     return ;
  //   }
  //    var state = {
  //     action:path
  //   } ;
  //   window.history.pushState(state,path,'#!/'+path) ;
  // }

</script>

