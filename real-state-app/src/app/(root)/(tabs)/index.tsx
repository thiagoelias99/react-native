import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link } from "expo-router"

export default function Index() {
  return (
    <View>
      <Text>Index</Text>
      <Link href="/sign-in">Sign In</Link>
      <Link href="/profile">Profile</Link>
      <Link href="/explore">Explore</Link>
      <Link href={{
        pathname: "/properties/[id]",
        params: { id: 1 }
      }}
      >Properties 1
      </Link>
    </View>
  )
}

const styles = StyleSheet.create({})