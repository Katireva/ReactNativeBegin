import React from 'react'
import { StyleSheet, Text, View, SafeAreaView, StatusBar } from 'react-native'
import { Feather } from '@expo/vector-icons'
import RowText from '../components/RowText'
import { weatherType } from '../utilities/weatherType'

const CurrentWeather = ({ weatherData }) => {
  const {
    wrapper,
    container,
    feels,
    highLow,
    highLowWrapper,
    bodyWrapper,
    description,
    message,
    tempStyles
  } = styles

  const {
    main: { temp, feels_like, temp_max, temp_min },
    weather
  } = weatherData

  const weatherCondition = weather[0]?.main
  return (
    <SafeAreaView
      style={[
        wrapper,
        { backgroundColor: weatherType[weatherCondition]?.backgroundColor }
      ]}
    >
      <View style={container}>
        <Feather
          name={weatherType[weatherCondition]?.icon}
          size={100}
          color="black"
        />
        <Text style={tempStyles}>{`${Math.round(temp)}°`}</Text>
        <Text style={feels}>{`Feels like ${Math.round(feels_like)}°`}</Text>
        <RowText
          messageOne={`High: ${Math.round(temp_max)}° `}
          messageTwo={`Low: ${Math.round(temp_min)}°`}
          containerStyles={highLowWrapper}
          messageOneStyles={highLow}
          messageTwoStyles={highLow}
        />
      </View>
      <RowText
        messageOne={weather[0]?.description}
        messageTwo={weatherType[weatherCondition].message}
        containerStyles={bodyWrapper}
        messageOneStyles={description}
        messageTwoStyles={message}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: 'pink'
  },
  container: {
    marginTop: StatusBar.currentHeight || 0,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  tempStyles: {
    color: 'black',
    fontSize: 48
  },
  feels: {
    fontSize: 30,
    color: 'black'
  },
  highLow: {
    color: 'black',
    fontSize: 20
  },
  highLowWrapper: {
    flexDirection: 'row'
  },
  bodyWrapper: {
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    paddingLeft: 25,
    marginBottom: 40
  },
  description: {
    fontSize: 43
  },
  message: {
    fontSize: 25
  }
})

export default CurrentWeather

// import React from 'react'
// import {
//   SafeAreaView,
//   StyleSheet,
//   View,
//   TextInput,
//   Text,
//   StatusBar,
//   Alert
// } from 'react-native'

// const TextInputExample = () => {
//   const [text, onChangeText] = React.useState('Useless Text')
//   const [number, onChangeNumber] = React.useState('')

//   return (
//     <View style={styles.profile}>
//       <TextInput
//         style={styles.input}
//         onChangeText={onChangeText}
//         value={text}
//       />
//       <TextInput
//         style={styles.input}
//         onChangeText={onChangeNumber}
//         value={number}
//         placeholder="useless placeholder"
//         keyboardType="numeric"
//       />
//     </View>
//   )
// }

// const App = () => {
//   const handleTextPress = () =>
//     Alert.alert('Message', 'Not Happy Monday', [
//       { text: 'Hourrrra', onPress: () => console.log('Congradulations!') },
//       { text: 'Yooohooo' }
//     ])

//   return (
//     <SafeAreaView style={styles.container}>
//       <View style={styles.profile}>
//         <Text style={styles.text} onPress={handleTextPress}>
//           Добридень
//         </Text>
//         <TextInputExample />
//       </View>
//     </SafeAreaView>
//   )
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     marginTop: StatusBar.currentHeight,
//     justifyContent: 'center',
//     alignItems: 'center'
//   },
//   text: {
//     color: 'blue'
//   },
//   input: {
//     height: 40,
//     margin: 12,
//     borderWidth: 1,
//     padding: 10
//   }
// })

// export default App
