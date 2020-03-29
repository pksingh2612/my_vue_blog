<template>
    <v-card rounded outlined width="550" class="mx-auto mt-10">

        <div>
            <v-list-item>
                <v-list-item-avatar @click="user_profile">
                    <img 
                        :src="post_user_image" 
                        alt="post_creator">
                </v-list-item-avatar>

                <v-list-item-content class="mt-2">
                    <v-list-item-title @click="user_profile" class="subtitle questrial bold">{{post_user_title}}</v-list-item-title>
                    <v-list-item-subtitle @click="when_post_created" class="questrial caption blue--text">{{post_user_subtitle}}</v-list-item-subtitle>
                </v-list-item-content>

                <v-list-item-action>
                    <v-btn 
                        icon
                        @click.stop="dialog = true"
                    >
                    <v-dialog
                        v-model="dialog"
                        max-width="290"
                        >
                        <v-card
                            class="mx-auto"
                            max-width="300"
                            tile
                        >
                            <v-list flat>
                            <v-list-item-group v-model="item" color="primary">
                                <v-list-item
                                v-for="(item, i) in items"
                                :key="i"
                                >
                                <v-list-item-icon>
                                    <v-icon v-text="item.icon"></v-icon>
                                </v-list-item-icon>
                                <v-list-item-content>
                                    <v-list-item-title v-text="item.text"></v-list-item-title>
                                </v-list-item-content>
                                </v-list-item>
                            </v-list-item-group>
                            </v-list>
                        </v-card>
                    </v-dialog>
                    
                        <v-icon>$dot</v-icon>
                    </v-btn>
                </v-list-item-action>
            </v-list-item>
        </div>

        

        <v-container fluid grid-list-md>
                   <Lightbox :post_image="post_image"/> 
        </v-container>

        <v-card-text>
            <div class="questrial body1 mb-4">{{post_msg}}</div>
            
                <v-divider v-if="Likeo"></v-divider> 
                <v-layout class="py-4">
                    <v-layout v-if="Likeo">
                        <v-tooltip top v-if="Like">
                            <template v-slot:activator="{ on }">
                                <v-avatar v-on="on" size="20" class="ml-1">
                                    <v-img
                                        src="../assets/Emojis/thumbs-up-sign_1f44d.png">
                                    </v-img> 
                                </v-avatar>
                            </template>
                            <span>Like</span>
                        </v-tooltip>

                        <v-tooltip top v-if="Love">
                            <template v-slot:activator="{ on }">
                                <v-avatar v-on="on" size="20"  class="ml-1">
                                    <v-img
                                        src="../assets/Emojis/heavy-black-heart_2764.png">
                                    </v-img>
                                </v-avatar>
                            </template>
                            <span>Love</span>
                        </v-tooltip>
                            
                        <v-tooltip top v-if="Haha">
                            <template v-slot:activator="{ on }">
                                <v-avatar v-on="on" size="20"  class="ml-1">
                                    <v-img
                                        src="../assets/Emojis/smiling-face-with-open-mouth-and-smiling-eyes_1f604.png">
                                    </v-img>
                                </v-avatar>        
                            </template>
                            <span>Haha</span>
                        </v-tooltip>

                        <v-tooltip top v-if="Wow">
                            <template v-slot:activator="{ on }">
                                <v-avatar v-on="on" size="20"  class="ml-1">
                                    <v-img
                                        src="../assets/Emojis/face-with-open-mouth_1f62e.png">
                                    </v-img>
                                </v-avatar>        
                            </template>
                            <span>Wow</span>
                        </v-tooltip>

                        <v-tooltip top v-if="Sad">
                            <template v-slot:activator="{ on }">
                                <v-avatar v-on="on" size="20"  class="ml-1">
                                    <v-img
                                        src="../assets/Emojis/disappointed-but-relieved-face_1f625.png">
                                    </v-img>
                                </v-avatar>        
                            </template>
                            <span>Sad</span>
                        </v-tooltip>

                        <v-tooltip top v-if="Angry">
                            <template v-slot:activator="{ on }">
                                <v-avatar v-on="on" size="20"  class="ml-1">
                                    <v-img
                                        src="../assets/Emojis/pouting-face_1f621.png">
                                    </v-img>
                                </v-avatar>        
                            </template>
                            <span>Angry</span>
                        </v-tooltip>
                        <div class="questrial ml-3"> +{{numofLikeo}}</div>
                    </v-layout>
                                   
                    <v-flex class="text-right" v-if="!comment">
                        <v-layout wrap justify-end>

                            <div class="questrial mr-3 ">
                               {{commentitems.length}} comments 
                            </div>
                        </v-layout>
                    </v-flex>

                </v-layout>

                <v-divider></v-divider>

                <v-layout class="py-4">
                                                     
                    <v-row>
                        <v-col>
                            <v-menu 
                                attach 
                                open-on-hover 
                                top 
                                offset-y 
                                min-width="200px"
                                                   
                            >
                                <template v-slot:activator="{ on }">
                                    <div v-on="on" >
                                        <v-btn 
                                         
                                            @dblclick="dclicked"
                                            icon 
                                            text 
                                            class="questrial ml-12 font-weight-bold "
                                            :color="type==='Liked' ? 'primary' : 'grey'"
                                        >
                                            <v-icon>$thumb</v-icon>&nbsp;Like
                                        </v-btn> 
                                    </div>
                                </template>
                                <Emojis @inputData1="Likebtncliked"/>
                            </v-menu>
                        </v-col>
                            
                        <v-col>
                                <v-btn 
                                    @click="Commentbtncliked" 
                                    @dblclick="dcommentedclicked"
                                    icon 
                                    text 
                                    class="questrial ml-10 font-weight-bold"
                                    color="grey"
                                >
                                    <v-icon>
                                        $comment
                                    </v-icon>
                                    &nbsp;Comments
                                </v-btn>
                        </v-col>
                        <v-col>
                                <v-btn 
                                    @click="Sharebtncliked" 
                                    icon 
                                    text 
                                    class="questrial ml-10 font-weight-bold"
                                    color="grey"
                                >
                                    <v-icon>$share</v-icon>&nbsp;Share
                                </v-btn> 
                        </v-col>
                    </v-row>
                        
                </v-layout>

            <v-divider v-if="comment"></v-divider>
            
        </v-card-text>
        
        <Commentedpost 
            :post_user_image="post_user_image"
            :commentitems="commentitems" 
        />
        
        

        <div class="px-4">
            <v-text-field 
                class="questrial" 
                height="45px" 
                background-color="grey lighten-3" 
                append-icon="$emoji" 
                placeholder="Write a comment..." 
                v-model="commentext"
                rounded
                v-if="comment"
                @keyup.enter.native="checkEnter"
            >
            </v-text-field>
        </div>
    </v-card>
</template>

<script>
import Emojis from '../components/EmoJis'
import Lightbox from '../components/LightBox'
//import Threedots  from '../components/ThreeDots'
import Commentedpost from '../components/CommentedPost'
export default {
    name:"ShowPost",
    props: {
        post_user_image:{
            type:String,
        },
        post_msg: {
        type: String
        },
        post_user_title:{
            type:String,
        },
        post_user_subtitle:{
            type:String,
        },
        post_image:{
            type:Array,
        }
    },
    components: {
        Emojis,
        Lightbox,
        Commentedpost,
       // Threedots,
    },
    data: () => ({
     commentext:"",
     type:"",
     comment:false,
     dialog: false,
     item: 1,
     items: [
        { text: 'Real-Time', icon: 'mdi-clock' },
        { text: 'Audience', icon: 'mdi-account' },
        { text: 'Conversions', icon: 'mdi-flag' },
      ],
      Likeo:false,
      Like:false,
      Love:false,
      Haha:false,
      Wow:false,
      Sad:false,
      Angry:false,
      numofLikeo:0,
      commentitems:[]
    }),
   
    methods:{
        checkEnter(){
            this.comment=false;
            this.commentitems.push(this.commentext)
            this.commentext=""
        },
        user_profile(){
            alert("User_Profile");
        },
        when_post_created(){
           alert("the whole post");
        },
        // onVerticalbtnclick(){
        //   this.dialog=true;
        // },
        // Likebtncliked(var1){
        //     this.type="Liked";
        //     // this.Likeo=true,
        //     //         this.Like=true,
        //     //         this.Love=false,
        //     //         this.Haha=false,
        //     //         this.Wow=false,
        //     //         this.Sad=false,
        //     //         this.Angry=false
        // },
        Likebtncliked(var1){
             if (this.post_user_image==localStorage.post_User_Image)
            {
               this.numofLikeo=1
            }
                
                if (var1=="Like")
                {
                    this.Likeo=true,
                    this.Like=true,
                    this.Love=false,
                    this.Haha=false,
                    this.Wow=false,
                    this.Sad=false,
                    this.Angry=false
                    this.type="Liked";
                    
                }
                else if (var1=="Love")
                {
                    this.Likeo=true,
                    this.Like=false,
                    this.Love=true,
                    this.Haha=false,
                    this.Wow=false,
                    this.Sad=false,
                    this.Angry=false
                    this.type="Liked";
                  
                }
                else if (var1=="Love")
                {
                    this.Likeo=true,
                    this.Like=false,
                    this.Love=true,
                    this.Haha=false,
                    this.Wow=false,
                    this.Sad=false,
                    this.Angry=false
                    this.type="Liked";
                }
                else if (var1=="Haha")
                {
                    this.Likeo=true,
                    this.Like=false,
                    this.Love=false,
                    this.Haha=true,
                    this.Wow=false,
                    this.Sad=false,
                    this.Angry=false 
                    this.type="Liked"; 
                }
                else if (var1=="Wow")
                {
                    this.Likeo=true,
                    this.Like=false,
                    this.Love=false,
                    this.Haha=false,
                    this.Wow=true,
                    this.Sad=false,
                    this.Angry=false
                    this.type="Liked";
                }
                else if (var1=="Sad")
                {
                    this.Likeo=true,
                    this.Like=false,
                    this.Love=false,
                    this.Haha=false,
                    this.Wow=false,
                    this.Sad=true,
                    this.Angry=false
                    this.type="Liked";
                }
                else if (var1=="Angry")
                {
                    this.Likeo=true,
                    this.Like=false,
                    this.Love=false,
                    this.Haha=false,
                    this.Wow=false,
                    this.Sad=false,
                    this.Angry=true
                    this.type="Liked";
                }
                else
                {
                    this.Likeo=false,
                    this.Like=false,
                    this.Love=false,
                    this.Haha=false,
                    this.Wow=false,
                    this.Sad=false,
                    this.Angry=false
                }
            },
        dclicked(){
        this.type=""
        this.Likeo=false,
        this.Like=false,
        this.Love=false,
        this.Haha=false,
        this.Wow=false,
        this.Sad=false,
        this.Angry=false
        },
        Commentbtncliked(){
        this.comment=true;
        },
        dcommentedclicked(){
            this.comment=false;
        },
        Sharebtncliked(){
    
        },
    },
  

}
</script>

<style>

</style>

