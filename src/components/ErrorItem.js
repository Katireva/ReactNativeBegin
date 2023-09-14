import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Feather } from '@expo/vector-icons'

const ErrorItem = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.errorMessage}>Oops, something went wrong</Text>
      <Feather name={'frown'} size={100} color={'white'} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center'
  },
  errorMessage: {
    fontSize: 28,
    color: 'white',
    textAlign: 'center',
    marginBottom: 10
  }
})

export default ErrorItem
