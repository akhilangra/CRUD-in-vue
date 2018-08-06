  <template>
    <div id="app">
      <div class="container" id="class">
        <h2>Login - List </h2>
        <hr>
        <el-form ref="form" label-width="100px">
            <el-form-item label="Username">
              <el-input v-model="username" placeholder="Username"></el-input>
            </el-form-item>
            <el-form-item label="Password">
              <el-input type="password" v-model="password" placeholder="Password"></el-input>
            </el-form-item>
            <hr>
            <el-button round icon="el-icon-edit-outline" type="submit" @click="getlogin" action="/list">Log In</el-button>
            <el-button round icon="el-icon-circle-plus-outline" type="submit" @click="signup" action="/signup">Signup</el-button>
            <el-popover
                placement="top"
                width="500"
                v-model="visible2">
                <p><b>Edit fields :</b></p>
                    <div style="text-align: right; margin: 0">
                        <el-input v-model="username" placeholder="Username"></el-input>
                        <hr>
                        <el-input type="password" v-model="password" placeholder="Password"></el-input>
                        <hr>
                        <el-button type="primary" size="mini" @click="visible2 = false">confirm</el-button>
                        <el-button size="mini" @click="visible2 = false">cancel</el-button>
                    </div>
                <el-button round icon="el-icon-info" slot="reference">Delete</el-button>
            </el-popover> 
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
        Token:"",
        visible2: false,     
      };
    },
    methods: {
        getlogin() {
          var context = this;
          
         console.log(context)
           Axios.post('/login',
           {username:context.username,password:context.password})
       .then((response)=>{
         console.log(response,context.username,context.password)
         this.$router.push('/list')
       })
       .catch((error)=>{
           console.log(error);
       })
      },
      signup() {
        this.$router.push('/signup')
        
        },
    }
            
  }
  </script>