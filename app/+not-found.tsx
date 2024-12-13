import { StyleSheet, View } from 'react-native';
import { Link, Stack } from 'expo-router';

import AppText from '@/components/AppText/AppText';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
});

export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen options={{ title: 'Oops!' }} />
      <View style={styles.container}>
        <AppText>This screen not exist.</AppText>
        <Link href="/" style={styles.link}>
          <AppText>Go to home screen!</AppText>
        </Link>
      </View>
    </>
  );
}
