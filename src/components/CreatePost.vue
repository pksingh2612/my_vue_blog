<template>
    
<v-card :width="card_width" class="mx-auto mt-10">
      
    <v-card-title class="pb-2">
      <h6>Create post</h6>
      </v-card-title>

        <v-divider></v-divider>
        <v-form>
            <v-list-item>
                <v-list-item-avatar>
                    <img :src="user_image" alt="post_creator">
                </v-list-item-avatar>
                <v-list-item-content class="mt-2">
                    <v-text-field
                      class="ml-2 mr-3"
                      type="text"
                      v-model="msg"
                      placeholder="What's on your mind?"
                      >
                    </v-text-field>
                </v-list-item-content>
            </v-list-item>
            <v-layout v-if="flag">
                  <v-list-item>
                      <v-list-item-avatar 
                        v-for="n in imageUrl.length" 
                        :key="n"
                      >
                      <v-img :src="imageUrl[n-1]" alt="uploaded_image" @dblclick="dcommentedclicked(n-1)"></v-img>
                      </v-list-item-avatar>
                      <v-list-item-avatar>
                          <v-btn icon color="drak-orange" @click="onFileSelect">
                            <v-icon>mdi-plus</v-icon>
                          </v-btn>
                      </v-list-item-avatar>
                  </v-list-item>
                </v-layout>
                <v-layout>
                  <v-btn text class="ml-4 questrial font-weight-bold text-none" @click="onFileSelect">Photo</v-btn>
                  <input 
                    multiple
                    :rules="rules"
                    type="file" 
                    style="display: none" 
                    ref="fileInput" 
                    accept="image/*"
                    @change="onFileSelected"
                  >             
                  
                  <!-- <v-btn text class="questrial text-none" @click="onFileSelect">Video</v-btn>
                  <input 
                    :rules="rules"
                    type="file" 
                    style="display: none" 
                    ref="fileInput" 
                    accept="image/*"
                    @change="onFileSelected"
                  > -->
                </v-layout>
                
                <!-- <div v-if=false>   
                <v-divider></v-divider>
                <div>{{rules}}</div>
                </div>   -->
                <!-- <v-btn raised class="ml-4 primary"></v-btn>                         -->
                
                <v-spacer></v-spacer>
                
                <v-row align="center">
                  <v-col class="text-center" cols="12" sm="12"> 
                      <v-divider></v-divider>
                      <br/>
                      <v-btn dark rounded color="info" v-on:click="onPost">Post</v-btn>
                  </v-col>
                </v-row>
            </v-form>

      </v-card>

    
</template>

<script>
export default 
{ 
  name:"CreatePost",
  props:{
    user_image:{
      type:String
    }
  },
  data: () => 
  (
    {
      created_post:false,
      card_width:550,
      msg: '',
      rules: [
        value => !value || value.size < 2000000 || 'Uploaded item size should be less than 2 MB!',
      ],
      imageName:[],
      imageUrl: [],
      imageFile: [],
      flag:false,
    }
  ),
  methods:
  {
    onFileSelect() 
    {
      this.$refs.fileInput.click()
    },
    onFileSelected(event) 
    {
      function read(file,image){
            var fr = new FileReader ()
            fr.readAsDataURL(file)
            fr.onload = function() {
             // console.log(fr.result);
              image.push(fr.result)
              
            };
            
      }
      var files = event.target.files;
      var i;
      for (i=0;i<files.length;++i)
      {
        if (files[i] !== undefined) 
        {
          this.imageName[i]=files[i].name
            if(this.imageName[i].lastIndexOf('.') <= 0) 
            {
              return
            }
            read(files[i],this.imageUrl)
            //this.imageFile=files[i]
          } 
        else 
        {
          this.imageName = []
          this.imageFile = []
          this.imageUrl = []
        }
      }
      this.flag=true;

    },
    onPost: function()
    {
      this.flag=false;
      this.created_post=true
      this.$emit("inputData", this.msg,this.created_post,this.imageUrl);
      this.msg = "";
      this.selectedFile=null;
      this.created_post=false;
    },
    dcommentedclicked(j)
    {
      for( var i = 0; i < this.imageUrl.length; i++)
      { 
        if ( this.imageUrl[i] === this.imageUrl[j]) 
        { 
          this.imageUrl.splice(i, 1);
        }
      }
    },
  }
}
</script>

<style>

</style>