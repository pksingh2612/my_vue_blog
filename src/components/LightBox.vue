<template>
    <div>
        <v-layout wrap v-if="numofimage1">
                <v-flex xs12>
                    <v-card flat tile>
                        <v-img
                        :src="post_image[0]"
                        :lazy-src="post_image[0]"
                        aspect-ratio="2"
                        class="grey lighten-2"
                        gradient="to top right, rgba(0,0,0,.2), rgba(0,0,0,.2)"
                        @click.prevent="show"
                        >
                        <template v-slot:placeholder>
                            <v-layout
                            fill-height
                            align-center
                            justify-center
                            ma-0
                            >
                            <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                            </v-layout>
                        </template>
                        </v-img>
                
                        
                    </v-card>
                </v-flex>
            </v-layout>

            <v-layout wrap v-if="numofimage2">
            <v-flex v-for="n in post_image.length" :key="n" xs6>
                <v-card  flat tile>
                        <v-img
                            :src="post_image[n-1]"
                            :lazy-src="post_image[n-1]"
                            aspect-ratio="1"
                            class="grey lighten-2"
                            @click.prevent="show"
                        >    
                        
                            <template v-slot:placeholder>
                                <v-layout
                                    fill-height
                                        align-center
                                        justify-center
                                        ma-0
                                >
                                    <v-progress-circular 
                                        indeterminate 
                                        color="grey lighten-5"
                                    ></v-progress-circular>
                                </v-layout>
                            </template>
                        </v-img>
                        <!-- <Lightbox :thumbnail="post_image[n-1]" :post_image="post_image"/> -->
                </v-card>
            </v-flex>
            </v-layout>

            <v-layout row wrap v-if="numofimage">
                <v-flex xs12>
                    <v-card flat tile>
                        <v-img
                        :src="post_image[0]"
                        :lazy-src="post_image[0]"
                        aspect-ratio="2"
                        class="grey lighten-2"
                        gradient="to top right, rgba(0,0,0,.2), rgba(0,0,0,.2)"
                        @click.prevent="show"
                        >
            
                        <template v-slot:placeholder>
                            <v-layout
                            fill-height
                            align-center
                            justify-center
                            ma-0
                            >
                            <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                            </v-layout>
                        </template>
                        </v-img>
                    </v-card>
                </v-flex>
                <v-flex v-for="n in post_image.length-1" :key="n" xs6>
                <v-card  flat tile>
                        <v-img
                            :src="post_image[n]"
                            :lazy-src="post_image[n]"
                            aspect-ratio="1"
                            class="grey lighten-2"
                            @click.prevent="show"
                        >    
                         
                            <template v-slot:placeholder>
                                <v-layout
                                    fill-height
                                        align-center
                                        justify-center
                                        ma-0
                                >
                                    <v-progress-circular 
                                        indeterminate 
                                        color="grey lighten-5"
                                    ></v-progress-circular>
                                </v-layout>
                            </template>
                        </v-img>
                </v-card>
                </v-flex>
            </v-layout>

            <v-layout row wrap v-if="numofimage3">
                <v-flex xs6>
                    <v-card color="purple" dark>
                    <v-img
                        :src="post_image[0]"
                        :lazy-src="post_image[0]"
                        aspect-ratio="1"
                        class="grey lighten-2"
                        @click.prevent="show"
                        >
                        <template v-slot:placeholder>
                            <v-layout
                            fill-height
                            align-center
                            justify-center
                            ma-0
                            >
                            <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                            </v-layout>
                        </template>
                        </v-img>
                    </v-card>
                </v-flex>
                <v-flex d-flex xs6>
                    <v-layout row wrap>
                    <v-flex v-for="n in 4" :key="n" xs6>
                        <v-card color="indigo" dark>
                            <v-img
                                :src="post_image[n]"
                                :lazy-src="post_image[n]"
                                aspect-ratio="1"
                                class="grey lighten-2"
                                @click.prevent="show"
                                >
                                <template v-slot:placeholder>
                                    <v-layout
                                    fill-height
                                    align-center
                                    justify-center
                                    ma-0
                                    >
                                    <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                                    </v-layout>
                                </template>
                                </v-img>
                        </v-card>
                    </v-flex>
                    </v-layout>
                </v-flex>
            </v-layout>    


        <v-dialog 
            v-model="visible" 
            max-width="100%"
        >
            <div 
                class="lightbox fixed pin z-50 flex justify-center items-center" 
                v-if="visible" 
                @click="hide"
            >
                <div class="fixed text-end mr-4 mt-8">
                <v-btn icon @click.stop="hide" color="deep-orange">
                    <v-icon>mdi-close-circle-outline</v-icon>
                </v-btn>
                </div>
                
                <v-layout>
                    <v-row>
                        <v-col align-self="center">
                            <div class="cursor-pointer self-center px-8 text-left"
                                @click.stop="prev"
                                :class="{'invisible': ! hasPrev()}"
                            >
                                <svg class=" pointer-events-none" fill="#fff" height="48" viewBox="0 0 24 24" width="48" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z"/>
                                    <path d="M0-.5h24v24H0z" fill="none"/>
                                </svg>
                            </div>
                        </v-col>
                        <v-col>
                            <div class="lightbox-image text-center" @click.stop="">
                                <img :src="post_image[index]">
                            </div>
                        </v-col>  
                        <v-col align-self="center">
                            <div class="cursor-pointer self-center text-right px-8"
                                @click.stop="next"
                                :class="{'invisible': ! hasNext()}">
                                <svg class=" pointer-events-none" fill="#fff" height="48" viewBox="0 0 24 24" width="48" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"/>
                                    <path d="M0-.25h24v24H0z" fill="none"/>
                                </svg>
                            </div>
                        </v-col>
                    </v-row>
                </v-layout>
            </div>
        </v-dialog>
    </div>
</template>

<script>
export default {
    name:"LightBox",
    props: {
        post_image: {
            type: Array,
            // required: true,
            // default: () => [],
        },
    },
    data() {
        return {
            visible: false,
            numofimage:false,
            numofimage1:false,
            numofimage2:false,
            numofimage3:false,
            index: 0,
        };
    },
    methods: {
        show() {
            this.visible = true;
        },
        hide() {
            this.visible = false;
            this.index = 0;
        },
        hasNext() {
            return this.index + 1 < this.post_image.length;
        },
        hasPrev() {
            return this.index - 1 >= 0;
        },
        prev() {
            if (this.hasPrev()) {
                this.index -= 1;
            }
        },
        next() {
            if (this.hasNext()) {
                this.index += 1;
            }
        },
        onKeydown(e) {
            if (this.visible) {
                switch (e.key) {
                    case 'ArrowRight':
                        this.next();
                        break;
                    case 'ArrowLeft':
                        this.prev();
                        break;
                    case 'ArrowDown':
                    case 'ArrowUp':
                    case ' ':
                        e.preventDefault();
                        break;
                    case 'Escape':
                        this.hide();
                        break;
                }
            }
        },
    },
    mounted() {
        window.addEventListener('keydown', this.onKeydown)

        if (this.post_image.length==1){
        this.numofimage=false
        this.numofimage1=true
        this.numofimage2=false
        this.numofimage3=false
        }
        else if(this.post_image.length==2)
        {
        this.numofimage=false
        this.numofimage1=false
        this.numofimage2=true
        this.numofimage3=false
        }
        else if(this.post_image.length==3)
        {
        this.numofimage=true
        this.numofimage1=false
        this.numofimage2=false
        this.numofimage3=false
        }
        else if(this.post_image.length==4)
        {
        this.numofimage=false
        this.numofimage1=false
        this.numofimage2=true
        this.numofimage3=false
        }
        else
        {
        this.numofimage1=false
        this.numofimage2=false
        this.numofimage3=true
        }
    },
    destroyed() {
        window.removeEventListener('keydown', this.onKeydown)
    },
};
</script>

<style>
.lightbox {
    background: rgba(0, 0, 0, 0.8);
}
.lightbox-image img {
    width: auto;
    height: auto;
    max-width: 100%;
    max-height: calc(100vh - 90px);
}
</style>