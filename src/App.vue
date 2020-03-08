<template>
  <div id="app">
    <v-app>
      <!-- Header section start -->
      <v-app-bar app color="primary" dark>
        
        <v-toolbar-title>
          <span class="title ml-3 mr-5">Len<span class="font-weight-light">Skills</span></span>
        </v-toolbar-title>
        
        <!-- <v-spacer></v-spacer>
        <v-btn text rounded>Home</v-btn>
        <v-btn text rounded>Login</v-btn> -->

      </v-app-bar>
      <!-- Header section stop -->

      <!-- Content section start -->
      <v-content>
        <!-- Create Post section start -->
        <v-card width="600" class="mx-auto mt-10">
      
            <v-card-title class="pb-2">
            <!-- <img src="https://picsum.photos/510/300?random" width="35" height="35"> -->
            <h6>Create post</h6>
            </v-card-title>

            <v-divider></v-divider>
            <v-form>
                    <v-text-field
                          class="ml-2 mr-3"
                          type="text"
                          v-model="msg"
                          placeholder="What's on your mind?"
                          prepend-icon="mdi-account-circle"
                          
                        ></v-text-field>
                        
                        <v-btn raised class="ml-4 primary" @click="onFileSelect">Photo/Video</v-btn>                        
                        <input 
                          :rules="rules"
                          type="file" 
                          style="display: none" 
                          ref="fileInput" 
                          accept="image/*"
                          @change="onFileSelected"
                        >
                        <v-spacer></v-spacer>
                    <v-row align="center">
                      <v-col class="text-center" cols="12" sm="12"> 
                        
                        
                        <v-divider></v-divider>
                        <br/>
                        <v-btn small color="info" v-on:click="onPost">Post</v-btn>
                      </v-col>
                    </v-row>
            </v-form>

        </v-card>
        <!-- Create Post section stop -->

        <!-- Show Post section start -->
        <v-card width="600" class="mx-auto mt-10">
          <v-card-title class="pb-2">
            <img src="https://picsum.photos/510/300?random" width="35" height="35">
            <h6 class="ml-2"> Karan Yadav</h6>
            </v-card-title>
          <div class="ml-5">{{msg}}</div>
          <v-img src="https://picsum.photos/510/300?random" aspect-ratio="2"></v-img>
        </v-card>
        <!-- Show Post section stop -->

      </v-content>
      <!-- Content section stop -->

      <br/>

      <!-- Footer section start-->
      <v-footer color="primary lighten-1" padless>
        <v-layout justify-center wrap>
          <v-flex primary lighten-2 py-4 text-center white--text xs12>
            Copyright@{{ new Date().getFullYear() }} — <strong>LenSkills.com</strong>
          </v-flex>
        </v-layout>
      </v-footer>
      <!-- Footer section stop-->

    </v-app>
  </div>
</template>


<script>
export default {
  name: 'App',
  data: () => ({
      msg: '',
      image:'',
      rules: [
        value => !value || value.size < 2000000 || 'Uploaded item size should be less than 2 MB!',
      ],
    }),
  mounted() {
    if (localStorage.msg) {
      this.msg = localStorage.msg;
    }
  },
  methods:{
    onFileSelect() {
      this.$refs.fileInput.click()

    },
    onFileSelected(event) {
      const files =event.target.files
      let filename=files[0].name
      if(filename.lastIndexOf('.')<=0){
        return alert('Please add a valid file!')
      }
      console.log(files,filename);
      const fileReader = new FileReader()
      fileReader.readAsDataURL(files[0])
      this.image=files[0]
      console.log(this.image);
    },
    onPost: function(){
      console.log(this.msg);
      localStorage.msg = this.msg;
    },
    
  }
}
</script>