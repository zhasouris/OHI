import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
    theme : {
        dark : true,
        themes : {
            dark : {
                primary: '#009CDE',
                secondary: '#425563',
                accent: '#FF4081',
                error: '#AD000C',
                info: '#009CDE',
                success: '#68a200',
                warning: '#bf4e00',
                red: '#4A130C',
                pink: '#DB3EB1',
                blue: '#009CDE',
                darkblue: '#000080',
                green: '#84BD00',
                grey: '#425563',
            },
        }
    }
});

