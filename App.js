import React, {
  Component
} from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import {
  Calendar,
  CalendarList,
  Agenda,
  LocaleConfig
} from 'react-native-calendars';

LocaleConfig.locales['pt-br'] = {
  monthNames: ['janeiro de', 'fevereiro de', 'março de', 'abril de', 'maio de', 'junho de', 'julho de', 'agosto de', 'setembro de', 'outubro de', 'novembro de', 'dezembro de'],
  monthNamesShort: ['jan', 'fev', 'mar', 'abr', 'mai', 'jun', 'jul', 'ago', 'set', 'out', 'nov', 'dez'],
  dayNames: ['domingo', 'segunda', 'terça', 'quarta', 'quinta', 'sexta', 'sábado'],
  dayNamesShort: ['D', 'S', 'T', 'Q', 'Q', 'S', 'S']
};
LocaleConfig.defaultLocale = 'pt-br';

export default class App extends Component {
  render() {

    let d = new Date()
    let ano = d.getFullYear()
    let mes = (d.getMonth() + 1).toString()
    let mesF = (mes.length == 1) ? '0'+mes : mes
    let dia = d.getDate().toString()
    let diaF = (dia.length == 1) ? '0'+dia : dia

    let currentDay = ano +'-'+ mesF +'-'+ diaF

    return ( 
    <View style={styles.container}>
   
      <CalendarList
      // Callback which gets executed when visible months change in scroll view. Default = undefined
      onVisibleMonthsChange={(months) => {console.log('now these months are visible', months);}}
      // Max amount of months allowed to scroll to the past. Default = 50
      pastScrollRange={50}
      // Max amount of months allowed to scroll to the future. Default = 50
      futureScrollRange={50}
      // Enable or disable scrolling of calendar list
      scrollEnabled={true}
      // Enable or disable vertical scroll indicator. Default = false
      showScrollIndicator={false}
      
      markedDates={{[currentDay]: {selected: true, selectedColor: '#888'}}}
      />  
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 0,
    backgroundColor: '#F5FCFF',
  },

});