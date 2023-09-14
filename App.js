import React, { useState, useEffect } from 'react'
import { ActivityIndicator, View, StyleSheet, StatusBar } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import Tabs from './src/components/Tabs'
import { useGetWeather } from './src/hooks/useGetWeather'
import CurrentWeather from './src/screens/CurrentWeather'
import ErrorItem from './src/components/ErrorItem'

const App = () => {
  const [loading, error, weather] = useGetWeather()

  if (weather && weather.list && !loading) {
    return (
      <NavigationContainer>
        <Tabs weather={weather} />
      </NavigationContainer>
    )
  }

  return (
    <View style={styles.container}>
      {error ? (
        <ErrorItem />
      ) : (
        <ActivityIndicator size="large" color={'blue'} />
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: StatusBar.currentHeight || 0,
    justifyContent: 'center',
    flex: 1
  }
})
export default App
