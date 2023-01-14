import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,TouchableHighlight } from 'react-native';

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const StackDemo = createNativeStackNavigator();
 
 // Bước 4: Định nghĩa component các màn hình ------------------------------------------------
const TrangChu = ( {navigation} ) => {
 

  return (
    <View style={{ backgroundColor: "yellow" }}>
      <Text style={{ fontSize: 30 }}>Đây là màn  </Text>
 
 
      <TouchableHighlight  activeOpacity={0.6}  underlayColor="pink"
        onPress={() => { navigation.navigate('About', {hoTen:'Nguyen ABC'}) }}>
        <Text> Sang màn hình Giới thiệu</Text>
      </TouchableHighlight>
 
    </View>
  );
}
 
const GioiThieu = ( {navigation,route} ) => {
  //const navigation = useNavigation();
 
  return (
    <View style={{ backgroundColor: "cyan" }}>
      <Text style={{ fontSize: 30 }}>Màn hình giới thiệu  {"\n"}
        Họ tên: {route.params.hoTen} {"\n"}
        Sản phẩm: {route.params.tensp} === {route.params.gia}
       </Text>
 
      <Text onPress={() => { navigation.navigate('Home') }}>Về trang chủ</Text>
 
    </View>
  );
}
// hết bước 4 ------------------------------------------------

export default function App() {
  
return (
      // Bước 3: Định nghĩa Navigation
    //Tình huống 1: App chính chỉ có Nav
      <NavigationContainer>
          <StackDemo.Navigator  initialRouteName='Home'>
            <StackDemo.Screen name='Home' component={TrangChu} options={ {title:'Trang chủ'}} />
            <StackDemo.Screen name='About' component={GioiThieu}
             options={ {title:'Giới thiệu'}}
            initialParams={ {tensp:'Tivi',gia:30000}}
            />
		{/* viết tiếp các màn hình khác vào đây */}
          </StackDemo.Navigator>
      </NavigationContainer>
 
  )

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
