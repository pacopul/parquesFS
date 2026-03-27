import { StyleSheet } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import Parques from './screens/Parques';


export default function Index() {
 return (
   <SafeAreaProvider>
     <SafeAreaView style={styles.safeArea}>
       <Parques />
     </SafeAreaView>
   </SafeAreaProvider>
 );
}
const styles = StyleSheet.create({
 safeArea: {
   flex: 1,
 },
});


