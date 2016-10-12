<template>
	<table class="table">
      <tr>
        <td>编号</td>
        <td>姓名</td>
        <td>电话</td>
        <td>年龄</td>
        <td>操作</td>
      </tr>
      <tr v-for="user in userlist" track-by="id">
        <td>{{ user.id }}</td>
            <td>{{ user.name }}</td>
            <td>{{ user.tel }}</td>
            <td>{{ user.age }}</td>
            <td><button type="button" class="btn btn-danger" v-on:click="deleteUser" userid="{{ user.id }}">删除</button></td>
      </tr>
    </table>
</template>

<script>
export default {
  props: {
  	'userlist':{
  		type:Array,
  		default:[]
  	}
  },
  methods:{
  	deleteUser:function(event){
  		var target = event.target ;
  		var id = target.getAttribute('userid') 
  		if(!id) return ;
  		// var userList = this.userlist ;
  		// if(!userList || !userList.length){
  		//   return 
  		// }
  		// for(var i = 0 ; i < userList.length ; i++){
  		//   var u = userList[i]
  		//   if(u.id == id){
  		//     userList.splice(i,1)
  		//     break
  		//   }
  		// }
  		this.$dispatch('deleteUser',id)
  	}
  }
}
</script>


