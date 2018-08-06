<template>
  <div>
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/' }">Homepage</el-breadcrumb-item>
      <el-breadcrumb-item>List</el-breadcrumb-item>
    </el-breadcrumb>
    <hr>
    <el-button round icon="el-icon-circle-close" @click="logout()" type="button" size="small">Logout</el-button>    
    <hr>
        <el-table
        width="100%"
        border="solid"
            :data="users">
            <el-table-column
                prop="public_id"
                label="Id"
                width="150">
            </el-table-column>
            <el-table-column
                v-model="user"
                label="Admin"
                width="150">
            </el-table-column>
            <el-table-column
                prop="name"
                label="Name"
                width="150">
            </el-table-column>
            <el-table-column
                prop="password"
                label="Password"
                width="150">
            </el-table-column>
            <el-table-column
                label="Operations"
                width="150">
              <template slot-scope="props">
                  <el-button icon="el-icon-edit" @click="editdata(props.row.public_id)" type="text" size="small">Edit</el-button>
                  <el-button icon="el-icon-delete" @click="deletedata(props.row.public_id)" type="text" size="small">Delete</el-button>
              </template>
            </el-table-column>
        </el-table>
  </div>
</template>


<script>
import Axios from "axios";
export default {
  name: 'app',
  data () {
      return{
        users: []
          }
  },

  created(){
      this.fetchdata();
  },

  methods: {
      logout() {
             this.$router.push({ path: '/' });
       },
      fetchdata(){
        Axios({
          method: "GET",
          url: `http://192.168.1.6:5000/user`,
          users: {
            name: this.users.name,
            password: this.users.password,
            admin: this.users.admin
          },
        }).then(
            response => {
            this.users = response.data.users
            console.log(this.users)
            }
        );
      },
      editdata(index) {
        console.log(index)
          Axios.put('/user/' + index)
              .then((response)=>{
              console.log(response,this.public_id)
              this.fetchdata()
       })        
      },
      deletedata(index) {
        console.log(index)
          Axios.delete('/user/' + index)
              .then((response)=>{
              console.log(response,this.public_id)
            this.fetchdata()
       })        
      }
  }
};
</script>
