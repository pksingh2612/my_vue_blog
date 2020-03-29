import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);


export default new Vuetify({
    icons: {
        iconfont: 'mdi', // default
        values: {
            key_up: 'mdi-menu-up',
            key_down: 'mdi-menu-down',
            camera:'mdi-camera',
            emoji:'mdi-emoticon-outline',
            dot:'mdi-dots-vertical',
            thumb:'mdi-thumb-up-outline',
            comment:'mdi-comment-outline',
            share:'mdi-share-outline',
        },
      },
    
});
