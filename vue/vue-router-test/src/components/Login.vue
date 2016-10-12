<template>
	<form action="#" class="form-signin">
		<h2 class="form-signin-heading">请登录</h2>
		<input type="text"  class="form-control" placeholder="编号" v-model="id">
		<input type="text"  class="form-control" placeholder="姓名" required autofocus v-model="name">
		<input type="text"  class="form-control" placeholder="电话" v-model="tel">
		<input type="text"  class="form-control" placeholder="年龄" v-model="age">
		<div class="checkbox">
			<label><input type="checkbox" value="remember-me">记住密码</label>
		</div>
		<button class="btn btn-primary btn-lg btn-block" type="button" v-on:click="login">登录</button>
		<button class="btn btn-default  btn-lg btn-block" type="button" v-on:click="back">返回</button>
	</form>
</template>

<script>
	export default {
		props:{
			islogin:{
				type:Boolean,
				default:false
			},
			userlist:{
				type:Array,
				default:[]
			},
			curruser:null
		},
		data () {
			return {
				id:'',
				name:'',
				tel:'137523747**',
				age:'2*'
			} 
		},
		methods:{
			login (){
				var self = this 
				var u = {
					id:self.id,
					name:self.name,
					tel:self.tel,
					age:self.age
				} ;
				self.userlist.push(u) 
				self.islogin = true 
				self.curruser = u ;
				window.history.go(-1) 
			},
			back (){
				window.history.go(-1) 
			}
		}
	}
</script>