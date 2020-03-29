<template>
    <v-card>
        <v-list-item dense width="100%">
            
            <v-tooltip top>
                <template v-slot:activator="{ on }">
                        <v-btn v-on="on" icon color="deep-orange" @click="Liked('Like')">
                            <v-avatar size="20">
                            <v-img
                                src="../assets/Emojis/thumbs-up-sign_1f44d.png">
                            </v-img>
                        </v-avatar>
                        </v-btn>      
                </template>
                <span>Like</span>
            </v-tooltip>

            <v-tooltip top>
                <template v-slot:activator="{ on }">
                        <v-btn v-on="on" icon color="deep-orange" @click="Liked('Love')">
                            <v-avatar size="20">
                            <v-img
                                src="../assets/Emojis/heavy-black-heart_2764.png">
                            </v-img>
                        </v-avatar>
                        </v-btn> 
                </template>
                <span>Love</span>
            </v-tooltip>
            
            <v-tooltip top>
                <template v-slot:activator="{ on }">
                    <v-btn v-on="on" icon color="deep-orange" @click="Liked('Haha')">
                        <v-avatar size="20">
                            <v-img
                    src="../assets/Emojis/smiling-face-with-open-mouth-and-smiling-eyes_1f604.png">
                            </v-img>
                        </v-avatar>
                    </v-btn>
                                    
                </template>
                <span>Haha</span>
            </v-tooltip>
            
            <v-tooltip top>
                <template v-slot:activator="{ on }">
                    <v-btn v-on="on" icon color="deep-orange" @click="Liked('Wow')">
                        <v-avatar size="20">
                            <v-img
                                src="../assets/Emojis/face-with-open-mouth_1f62e.png">
                            </v-img>
                        </v-avatar>
                    </v-btn>
                                    
                </template>
                <span>Wow</span>
            </v-tooltip>
            
            <v-tooltip top>
                <template v-slot:activator="{ on }">
                    <v-btn v-on="on" icon color="deep-orange" @click="Liked('Sad')">
                        <v-avatar size="20">
                            <v-img
                                src="../assets/Emojis/disappointed-but-relieved-face_1f625.png">
                            </v-img>
                        </v-avatar>
                    </v-btn>
                                    
                </template>
                <span>Sad</span>
            </v-tooltip>

            <v-tooltip top>
                <template v-slot:activator="{ on }">
                    <v-btn v-on="on" icon color="deep-orange" @click="Liked('Angry')">
                        <v-avatar size="20">
                            <v-img
                                src="../assets/Emojis/pouting-face_1f621.png">
                            </v-img>
                        </v-avatar>
                    </v-btn>         
                </template>
                <span>Angry</span>
            </v-tooltip>


        </v-list-item>
    </v-card>
</template>

<script>
export default {
    name:"EmoJis",
    methods:
    {

        Liked(var1)
        {

            this.$emit("inputData1",var1);
        }
    }
}
</script>

<style>
</style>