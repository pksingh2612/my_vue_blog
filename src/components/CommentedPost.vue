<template>
    <div>
    <v-layout v-for="n in commentitems.length" :key="n">
            <v-list-item style="align-items:normal" >
                <v-list-item-avatar>
                    <img :src="post_user_image" alt="John">
                </v-list-item-avatar>
                
                <v-list-item-content >
                    <div class="questrial font-weight-bold" style="font-size: 14px">Daniel Frazier</div>
                    <v-list-item-subtitle 
                        class="questrial body1 grey--text text--darken-1 my-2">
                        {{commentitems[n-1]}}
                    </v-list-item-subtitle>
                        
                    <v-layout>
                        <v-flex xs10>
                            <v-layout row >
                                <div class="questrial caption indigo--text font-weight-bold ml-4 mr-3">Like</div>
                                <div class="questrial caption indigo--text font-weight-bold mr-3">Reply</div>
                                <div class="questrial grey--text caption font-weight-bold mr-3">5mins</div>
                            </v-layout> 
                        </v-flex>
                    </v-layout>
                </v-list-item-content>
            </v-list-item>
        </v-layout>
    </div>
</template>

<script>
export default {
    name:"CommentedPost",
    props:{
        commentitems:{
            type:Array,
            required:true
        },
        post_user_image:{
            type:String,
            required:true
        }
       
    },
    data:()=>({
    }),
    mounted(){
     
    }
    
    
}
</script>