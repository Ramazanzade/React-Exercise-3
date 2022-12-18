import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Foter from './companents/Foter';
import Menu from './companents/Menu';
import Nav from './companents/Nav'

export default function App() {
  return <>
    <Nav></Nav>
    <Menu></Menu>
    <Foter></Foter>
  </>;
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
