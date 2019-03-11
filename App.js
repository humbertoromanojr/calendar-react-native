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
  monthNames: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julio', 'Agosto', 'Setembro', 'Otubro', 'Novembro', 'Dezembro'],
  monthNamesShort: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
  dayNames: ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'],
  dayNamesShort: ['D', 'S', 'T', 'Q', 'Q', 'S', 'S']
};
LocaleConfig.defaultLocale = 'pt-br';

export default class App extends Component {

  

  render() {

    const currentDate = Date()
    return currentDate

    return ( 
    <View style={styles.container}>
      <CalendarList
      // Minimum date that can be selected, dates before minDate will be grayed out. Default = undefined
      minDate = {'2012-05-10'}
      // Maximum date that can be selected, dates after maxDate will be grayed out. Default = undefined
      maxDate = {'2012-05-30'}
      // Handler which gets executed on day press. Default = undefined
      onDayPress = {(day) => {console.log('selected day', day)}}
      // Handler which gets executed on day long press. Default = undefined
      onDayLongPress = { (day) => { console.log('selected day', day) }
      }
      // Month format in calendar title. Formatting values: http://arshaw.com/xdate/#Formatting
      monthFormat = {'MMM yyyy'}
      // Handler which gets executed when visible month changes in calendar. Default = undefined
      onMonthChange = {(month) => {console.log('month changed', month)} }
      // Hide month navigation arrows. Default = false
      // Do not show days of other months in month page. Default = false
      hideExtraDays = {true}
      // If hideArrows=false and hideExtraDays=false do not switch month when tapping on greyed out
      // day from another month that is visible in calendar page. Default = false
      disableMonthChange = {true}
      // If firstDay=1 week starts from Monday. Note that dayNames and dayNamesShort should still start from Sunday.
      firstDay = {1}
      // Hide day names. Default = false
      hideDayNames = {false}
      // Handler which gets executed when press arrow icon left. It receive a callback can go back month
      onPressArrowLeft = {substractMonth => substractMonth()}
      // Handler which gets executed when press arrow icon left. It receive a callback can go next month
      onPressArrowRight = { addMonth => addMonth() }

      markedDates={{ '2019-03-11': {selected: true, marked: false, selectedColor: '#ddd'}, }}

      // Specify style for calendar container element. Default = {}
      style = {
        {
          borderWidth: 0,
          borderColor: '#333',
          height: 300,
        }
      }
      // Specify theme properties to override specific styles for calendar parts. Default = {}
      theme = {
        {
          backgroundColor: '#ffffff',
          calendarBackground: '#ffffff',
          textSectionTitleColor: '#666666',
          selectedDayBackgroundColor: '#666666',
          selectedDayTextColor: '#666666',
          todayTextColor: '#666666',
          dayTextColor: '#666666',
          textDisabledColor: '#666666',
          dotColor: '#666666',
          selectedDotColor: '#ffffff',
          arrowColor: '#333333',
          monthTextColor: '#222222',
          textDayFontFamily: 'future',
          textMonthFontFamily: 'future',
          textDayHeaderFontFamily: 'future',
          textMonthFontWeight: 'bold',
          textDayFontSize: 15,
          textMonthFontSize: 16,
          textDayHeaderFontSize: 16,
        }
      }
      />  
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#F5FCFF',
  },

});