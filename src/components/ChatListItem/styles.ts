import { StyleSheet } from 'react-native'


const styles = StyleSheet.create({
  profilePhoto: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 10
  },
  container: {
    flexDirection: 'row',
    marginHorizontal: 10,
    marginVertical: 5,
    height: 70,
    borderBottomWidth: 1,
    borderBottomColor: 'lightgray'
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5

  },
  title: {
    fontWeight: '700',
    flex: 1,
  },
  time: {
    color: 'gray'
  },
  message: {
    color: 'gray'
  }
});

export default styles;
