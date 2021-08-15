import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Emojis } from './app/components';

export default function App() {
  const [isLike, setLike] = React.useState(true);

  return (
    <View style={styles.container}>
      <View style={styles.placeholderContainer}>
        <View style={styles.profileContainer}>
          <View style={styles.profileAvatar}></View>
          <View style={styles.profileDetails}>
            <View style={styles.profileName}></View>
            <View style={styles.postTime}></View>
          </View>
        </View>
        <View style={styles.postImage} ></View>
        {isLike ? <Emojis /> : null}
        <View style={styles.actionContainer}>
          <TouchableOpacity style={styles.primaryButton} onPress={() => setLike(!isLike)}>
            <Text style={styles.primaryButtonText}>Like</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.primaryButton}>
            <Text style={styles.primaryButtonText}>Comment</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.primaryButton}>
            <Text style={styles.primaryButtonText}>Share</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F0F2F5',
    padding: 20
  },
  placeholderContainer: {
    width: '100%',
    backgroundColor: '#FFFFFF',
    borderColor: 'rgba(0, 0, 0, 0.15)',
    borderWidth: 1,
    borderRadius: 4,
    alignItems: 'flex-start',
    padding: 10
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  profileAvatar: {
    width: 42,
    height: 42,
    backgroundColor: '#f0f2f5',
    borderRadius: 21,
  },
  profileDetails: {
    marginHorizontal: 5,
  },
  profileName: {
    width: 120,
    height: 10,
    backgroundColor: '#f0f2f5',
    borderRadius: 5,
    marginBottom: 4
  },
  postTime: {
    width: 42,
    height: 10,
    backgroundColor: '#f0f2f5',
    borderRadius: 5,
  },
  postImage: {
    width: '100%',
    height: 200,
    backgroundColor: '#f0f2f5',
    resizeMode: 'cover',
    borderRadius: 5,
    marginVertical: 10
  },
  actionContainer: {
    width: '100%',
    position: 'relative',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderTopColor: '#ced0d4',
    borderTopWidth: 0.5,
    paddingVertical: 10
  },
  primaryButton: {
    paddingVertical: 5,
    paddingHorizontal: 25,
    borderRadius: 4,
    backgroundColor: '#f0f2f5'
  },
  primaryButtonText: {
    color: '#65676b',
  }
});
