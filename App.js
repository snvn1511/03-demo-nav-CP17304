
import { StatusBar } from 'expo-status-bar';
import { StyleSheet,ScrollView, Button, Text, View, TouchableHighlight } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

let duLieu = [
  { name: 'dien thoai', price: 30 },
  { name: 'tivi', price: 30 },
  { name: 'maytinh', price: 30 },
  { name: 'dien thoai', price: 30 },
  { name: 'tivi', price: 30 },
  { name: 'maytinh', price: 30 },
  { name: 'dien thoai', price: 30 },
  { name: 'tivi', price: 30 },
  { name: 'maytinh', price: 30 },
  { name: 'dien thoai', price: 30 },
  { name: 'tivi', price: 30 },
  { name: 'maytinh', price: 30 },
  { name: 'dien thoai', price: 30 },
  { name: 'tivi', price: 30 },
  { name: 'maytinh', price: 30 }

]


const ItemDulieu = (props) => {
  console.log(props);
  return (
    <View style={styles.item}>
      <Text>Name: {props.name} -- price: {props.price}</Text>
    </View>
  );
}



export default function App() {

  return (
    <View style={styles.container}>

      <View style={{ margin: 20 }} />

      <ScrollView style={{ height: '100%', width:'100%', backgroundColor: "yellow" }}>
        {
          duLieu.map((item, index, arr) => {
            // console.log(item);
            return <ItemDulieu key={index} name={item.name} price={item.price} />
          })
        }
      </ScrollView>


    </View>
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  item:{
    padding:10,
    backgroundColor:'cyan',
    marginVertical:10
  }
});
