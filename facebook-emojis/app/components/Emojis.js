import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import ICONS from '../constants/icons';

const Emojis = () => {
  // 0 = nothing, 1 = like, 2 = love, 3 = haha, 4 = wow, 5 = sad, 6 = angry
  const [currentIconFocus, setCurrentIconFocus] = React.useState(0);

  return (
    <View style={styles.groupContainer} >
      {/* Like button */}
      <View
        style={styles.iconContainer}
        onTouchStart={() => setCurrentIconFocus(1)}
        onTouchEnd={() => setCurrentIconFocus(0)}
      >
        <Image
          source={ICONS.Like}
          style={[styles.icon, {
            transform: [
              { scale: currentIconFocus === 1 ? 1.5 : 1 }
            ]
          }]}
        />
      </View>

      {/* Love button */}
      <View
        style={styles.iconContainer}
        style={styles.iconContainer}
        onTouchStart={() => setCurrentIconFocus(2)}
        onTouchEnd={() => setCurrentIconFocus(0)}
      >
        <Image
          source={ICONS.Love}
          style={[styles.icon, {
            transform: [
              { scale: currentIconFocus === 2 ? 1.5 : 1 }
            ]
          }]}
        />
      </View>

      {/* Haha button */}
      <View
        style={styles.iconContainer}
        onTouchStart={() => setCurrentIconFocus(3)}
        onTouchEnd={() => setCurrentIconFocus(0)}
      >
        <Image
          source={ICONS.Haha}
          style={[styles.icon, {
            transform: [
              { scale: currentIconFocus === 3 ? 1.5 : 1 }
            ]
          }]}
        />
      </View>

      {/* Wow button */}
      <View
        style={styles.iconContainer}
        onTouchStart={() => setCurrentIconFocus(4)}
        onTouchEnd={() => setCurrentIconFocus(0)}
      >
        <Image
          source={ICONS.Wow}
          style={[styles.icon, {
            transform: [
              { scale: currentIconFocus === 4 ? 1.5 : 1 }
            ]
          }]}
        />
      </View>

      {/* Sad button */}
      <View
        style={styles.iconContainer}
        onTouchStart={() => setCurrentIconFocus(5)}
        onTouchEnd={() => setCurrentIconFocus(0)}
      >
        <Image
          source={ICONS.Sad}
          style={[styles.icon, {
            transform: [
              { scale: currentIconFocus === 5 ? 1.5 : 1 }
            ]
          }]}
        />
      </View>

      {/* Angry button */}
      <View
        style={styles.iconContainer}
        onTouchStart={() => setCurrentIconFocus(6)}
        onTouchEnd={() => setCurrentIconFocus(0)}
      >
        <Image
          source={ICONS.Angery}
          style={[styles.icon, {
            transform: [
              { scale: currentIconFocus === 6 ? 1.5 : 1 }
            ]
          }]}
        />
      </View>
    </View>
  )
};

const styles = StyleSheet.create({
  groupContainer: {
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    borderColor: 'rgba(0, 0, 0, 0.15)',
    borderWidth: 1,
    borderRadius: 40,
    paddingHorizontal: 6,
    paddingVertical: 2,
    zIndex: 10
  },
  iconContainer: {
    alignItems: 'center',
    margin: 5
  },
  icon: {
    width: 32,
    height: 32
  },
  text: {
    fontSize: 12,
    color: '#808080'
  }
});

export default Emojis;