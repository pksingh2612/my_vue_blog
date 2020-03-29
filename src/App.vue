<template>
    <v-app>
      <Toolbar 
        :user_image="user_Image"
      />
      <v-content>
        <Createpost 
          :user_image="user_Image" 
          @inputData="saveCreatePost"
        />
        <Showpost
          :post_user_image="post_User_Image"
          :post_user_title="post_User_Title" 
          :post_user_subtitle="post_User_Subtitle" 
          :post_image="post_Image" 
          :post_msg="post_Msg" 
          v-if="created_Post" 
        />
        
      </v-content>
      <br/>
      
      <Footer/>
    </v-app>
</template>


<script>
import Toolbar from './components/ToolBar'
import Footer from './components/Footer'
import Createpost from './components/CreatePost'
import Showpost from './components/ShowPost'


export default {
  name: 'App',
  components: {
    Toolbar,
    Createpost,
    Footer,
    Showpost,
   

  },
  data: () => ({
      user_Image:"",
      selected_file:null,
      created_Post:false,
      post_User_Image:"",
      post_User_Title:"",
      post_User_Subtitle:"",
      post_Image:[],
      post_Msg:"",
      
  }),
  mounted()
  {
    let path="2.jpg"
    this.user_Image=require("./assets/avatars/"+path)
 
  },
  methods:{
    saveCreatePost(var1,var2,var3) {
      localStorage.created_Post=var2;
      localStorage.post_User_Image=require('./assets/avatars/2.jpg');
      localStorage.post_User_Title='Pk Singh';
      localStorage.post_User_Subtitle="pksingh15007@gmail.com";
      //console.log(var3)
      //localStorage.post_Image=var3;
      
      localStorage.post_Msg= var1;
      
      //console.log(localStorage.post_Image)
      
      this.created_Post=localStorage.created_Post;
      this.post_User_Image =localStorage.post_User_Image;
      this.post_User_Title= localStorage.post_User_Title;
      this.post_User_Subtitle=localStorage.post_User_Subtitle;
      //this.post_Image=localStorage.post_Image;
      this.post_Image=[].concat(var3)  
      this.post_Msg= localStorage.post_Msg;
      
    },
    letShowPost(){
      
    }
    
  }
}
</script>