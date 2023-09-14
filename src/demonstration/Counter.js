import React, { useState, useEffect } from 'react'
import { View, Text, Button, StyleSheet, StatusBar } from 'react-native'

const Counter = () => {
  const [count, setCount] = useState(0)
  const [newCount, setNewCount] = useState(0)

  useEffect(() => {
    console.log(`Count changed: ${count}`)
    return () => {
      console.log('useeffect cleanup')
    }
  }, [count])
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{`count: ${count}`}</Text>
      <Button
        color={'red'}
        title={'Increase the count'}
        onPress={() => setCount(count + 1)}
      />
      <Button
        color={'green'}
        title={'Decrease the count'}
        onPress={() => setCount(count - 1)}
      />
      <Button
        color={'red'}
        title={'Increase the count'}
        onPress={() => setNewCount(count + 1)}
      />
      <Button
        color={'green'}
        title={'Decrease the count'}
        onPress={() => setNewCount(count - 1)}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'orange',
    marginTop: StatusBar.currentHeight || 0
  },
  title: {
    alignSelf: 'center',
    fontSize: 25,
    marginTop: 25
  }
})

export default Counter
