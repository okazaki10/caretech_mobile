import { StyleSheet } from 'react-native';

export const colors = {
  bar: "#4ECB71",
  primary: '#4ECB71',
  white: '#ffffff',
  black: '#000000',
  yellow: '#FDF60A',
  button: "#72A3D4",
  button2: "#44A5FF",
  black: "#363636",
  grey: '#545454',
  lightblue: '#92C5C6',
  blue:'#0099EE',
  judulforum: "#6D8197",
  menubutton: "#92B1CD",
  background: "#E7F5FD",
  red:'#F36868'
};

const style = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    flex: 1,
    padding: 10,
    borderRadius: 5,
    elevation: 3,
    shadowOffset: { width: 1, height: 1 },
    shadowColor: '#333',
    shadowOpacity: 0.3,
    shadowRadius: 2,
  },
  inputtext: {
    backgroundColor: '#fff',
    flex: 1,
    padding: 10,
    borderRadius: 10,
    borderColor: colors.blue,
    fontFamily: "Roboto-Regular",
    borderWidth: 1,
    elevation: 0,
    shadowOffset: { width: 1, height: 1 },
    shadowColor: '#333',
    shadowOpacity: 0.3,
    shadowRadius: 2,

  },
  main: {
    flex: 1,
    backgroundColor: colors.background
  },
  container: {
    flex: 1,
    padding: 22
  },

  robotobold: {
    fontFamily: "Roboto-Bold",
    fontSize: 27,
    color: "black"
  },
  robotomedium: {
    fontFamily: "Roboto-Medium",
    fontSize: 18,
    color: "black"
  },
  robotonormal: {
    fontFamily: "Roboto-Regular",
    fontSize: 21,
    color: "black"
  },
  button: {
    height: 50,
    backgroundColor: "#56E4A0",
    borderRadius: 15,
  },
  buttontext: {
    fontFamily: "Roboto-Bold",
    fontSize: 16,
    color: "white"
  },
  buttoninverse: {
    height: 50,
    backgroundColor: "white",
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#4ECB71"
  },
  buttontextinverse: {
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    color: "#4ECB71"
  },
  content: {
    backgroundColor: 'white',
    padding: 22,
    borderRadius: 15,
    borderColor: 'rgba(0, 0, 0, 0.1)',
    justifyContent: "center",
  },
  line: {
    backgroundColor: colors.blue,
    height: 2,
    marginTop: 5,
  },
  datapasien: {
    fontSize: 14, color: colors.grey, marginTop: 15, flex: 1
  },
  datapasien2: {
    fontSize: 14, color: colors.grey, marginTop: 15, flex: 1
  }
});

export default style;
