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
                    
                    <v-row align="center">
                      <v-col class="text-center" cols="12" sm="12"> 
                        
                        <v-text-field
                          type="text"
                          placeholder="What's on your mind?"
                          prepend-icon="mdi-account-circle"
                          
                        ></v-text-field>
                        
                        <v-file-input
                        :rules="rules"
                        accept="image/png, image/jpeg, image/bmp"
                        placeholder="Upload Photo/Video"
                        ></v-file-input>
                        
                        <v-spacer></v-spacer>
                        <v-divider></v-divider>
                        <br/>
                        <v-btn small color="info" v-on:click="readRefs">Post</v-btn>
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
          <div class="ml-5">My First express when i become father rrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr</div>
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
  data () {
    return {

    }
  },
  methods:{
    readRefs:function(){
      console.log(this.$refs.input.text);
    }
  }
}
</script>