<template>
  <div>
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">Homepage</el-breadcrumb-item>
        <el-breadcrumb-item>Signup</el-breadcrumb-item>
      </el-breadcrumb>
          <div class="container">
              <h2>Signup</h2>
              <el-form ref="form" label-width="120px">
                  <el-form-item label="Username">
                    <el-input v-model="username" placeholder="Username"></el-input>
                  </el-form-item>
                  <el-form-item label="Password">
                    <el-input type="password" v-model="password" placeholder="Password"></el-input>
                  </el-form-item>
                  <hr>
                  <el-button round icon="el-icon-circle-plus" type="submit" @click="getsignup" action="/list">Add User</el-button>
                  <el-button round icon="el-icon-back" type="submit" @click="gethome" action="/">Back</el-button>
              </el-form>
          </div>
  </div>   
</template>

<script>
import Axios from "axios";
export default {
    name: "app",
    data() {
      return {
        users: [],
        public_id:"",
        username:"",
        password:"",
        admin:"",
        Token:""        
      };
    },

    methods : {
        getsignup() {
            Axios.post('/user',
            {name:this.username,password:this.password})
            .then((response)=>{
            console.log(response,this.username,this.password)
            this.$router.push('/')
          })
        },
        gethome() {
            this.$router.push('/')
        }
    },
  }
</script>

<style>
h2 {
    margin-bottom: 30px;
    text-align: center;
}
form {
    min-width: 120px;
    text-align: center;
    padding: 10px 20px;
}
</style>
