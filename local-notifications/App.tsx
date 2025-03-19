import { StatusBar } from 'expo-status-bar'
import { Button, StyleSheet, Text, View } from 'react-native'

import * as Notifications from 'expo-notifications'
import { useEffect } from "react"


Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: true,
  }),
})

export default function App() {

  // Function to immediately send a notification
  function sendNotification() {
    Notifications.scheduleNotificationAsync({
      identifier: 'immediate-notification',
      content: {
        title: 'You have a new notification!',
        body: 'Here is the notification body',
        data: { url: "my custom url" }
      },
      trigger: null,
    })
  }

  // Function to schedule a notification in 30 seconds
  // Bug when using expo go, but works fine on a build app
  // function scheduleNotification() {
  //   Notifications.scheduleNotificationAsync({
  //     identifier: "90secs-notification",
  //     content: {
  //       title: "Schedule notification",
  //       body: 'This notification was scheduled 30 seconds ago',
  //     },
  //     trigger: {
  //       type: Notifications.SchedulableTriggerInputTypes.TIME_INTERVAL,
  //       seconds: 30,
  //       repeats: false
  //     },
  //   })
  // }
  function scheduleNotification15() {
    const trigger = new Date(Date.now() + 15000)

    Notifications.scheduleNotificationAsync({
      identifier: "30secs-notification",
      content: {
        title: "Schedule notification",
        body: 'This notification was scheduled 30 seconds ago',
      },
      trigger
    })
  }

  function scheduleNotificationCalendar() {
    const trigger = new Date(Date.now() + 10000)

    Notifications.scheduleNotificationAsync({
      identifier: "calendar-notification",
      content: {
        title: "Schedule notification",
        body: 'This notification was scheduled by timestamp',
      },
      trigger
    })
  }

  async function getAllScheduledNotifications() {
    const notifications = await Notifications.getAllScheduledNotificationsAsync()
    console.log(notifications)
  }

  function cancelAllNotifications() {
    Notifications.cancelAllScheduledNotificationsAsync()
  }

  useEffect(() => {
    console.log('Notification Handler')
    const subscription = Notifications.addNotificationResponseReceivedListener(response => {
      console.log(response)
      const url = response.notification.request.content.data?.url
      console.log(url)
      // Linking.openURL(url);
    })
    return () => subscription.remove()
  }, [])


  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
      <Button title="Send notification" onPress={sendNotification} />
      <Button title="Schedule notification 15s" onPress={scheduleNotification15} />
      <Button title="Schedule notification calendar" onPress={scheduleNotificationCalendar} />

      <Button title="Cancel all notifications" onPress={cancelAllNotifications} />
      <Button title="Get all scheduled notifications" onPress={getAllScheduledNotifications} />
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
})
