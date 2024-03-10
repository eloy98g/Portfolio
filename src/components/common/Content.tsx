import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { LAPTOP } from '../../theme/breakPoints'

const Content = () => {
  return (
    <View>
      <Text></Text>
    </View>
  )
}

export default Content

const styles = StyleSheet.create({
  content:{
    width: "100%",
    maxWidth: LAPTOP,
  }
})
