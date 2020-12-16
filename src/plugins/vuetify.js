import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import pt from "vuetify/es5/locale/pt";

Vue.use(Vuetify);

export default new Vuetify({
  lang: {
    locales: { pt },
    current: "pt"
  },
  icons: {
    iconfont: "mdi",
    values: {
      map: 'mdi-map-marker',
      clock: 'mdi-clock-time-four-outline',
      calendar: 'mdi-calendar-range',
      arrowLeft: 'mdi-arrow-left',
      arrowRight: 'mdi-chevron-right',
      download: 'mdi-file-download',
      tune: 'mdi-tune',
      cell: 'mdi-cellphone-android',
      power: 'mdi-power',
      swapVertical: 'mdi-swap-vertical',
      arrowLeftTab: 'mdi-chevron-left',
      arrowRightTab: 'mdi-chevron-right',
      arrowDown: 'mdi-chevron-down',
      arrowUp: 'mdi-chevron-up',
      info: "mdi-information-outline",
    },
  }
});

