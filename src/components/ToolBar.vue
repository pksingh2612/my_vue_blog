<template>
    
      <v-app-bar app color="primary" dark>
        
        <v-toolbar-title>
          <span class="title ml-3 mr-5">Len<span class="font-weight-light">Skills</span></span>
        </v-toolbar-title>
        
        <v-spacer></v-spacer>

        <v-toolbar-items>
          <v-avatar class="mt-3" :size="user_image_size">
            <img :src="user_image" alt="avatar">
          </v-avatar>
        </v-toolbar-items>
      </v-app-bar>
    
</template>

<script>
export default 
{
  name:"ToolBar",
  props:{
    user_image:{
      type:String
    }
  },
  data: () => ({
    user_image_size:40
  }), 
}
</script>

<style>
</style>