import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from "expo-router/build/hooks"

export default function Properties() {
  const { id } = useLocalSearchParams<{ id: string }>()

  return (
    <View>
      <Text>Propriedades {id}</Text>
    </View>
  )
}

const styles = StyleSheet.create({})