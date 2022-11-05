import {StyleSheet, Text, View} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';

const ChatsRightIcons = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Feather name="camera" size={24} color="royalblue" />
      <Feather name="edit" size={24} color="royalblue" onPress={() => navigation.navigate('Contacts')}/>
    </View>
  );
};

export default ChatsRightIcons;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    width: 100,
  }
});
