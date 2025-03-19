import React from "react"
import { Link } from "expo-router"
import { StyleSheet, Text, View } from 'react-native'

export default function IndexPage() {
  return (
    <View style={styles.container}>
      <Link href="/auth" style={styles.link}>Auth Page</Link>
      <Link href="/profile" style={styles.link}>Profile Page</Link>
      <Link href="/explore" style={styles.link}>Explore Page</Link>
      <Link href={{
        pathname: "/properties/[id]",
        params: { id: 1 }
      }}
        style={styles.link}>Properties</Link>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  link: {
    color: 'blue',
    margin: 20,
  }
}) 