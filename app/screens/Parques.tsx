import { collection, onSnapshot } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { FIRESTORE_DB } from '../../FirebaseConfig';
import ParqueCard from '../components/ParqueCard';



const Parques = () => {
   const [parques, setParques] = useState<any[]>([]);
   const [parque, setParque] = useState('');
   useEffect(() => {
       const parquesRef = collection(FIRESTORE_DB, 'parques');
       const subscriber = onSnapshot(parquesRef, {
           next: (snapshot) => {
               const parques: any[] = [];
               snapshot.docs.forEach((doc) => {
               // Añadimos al array un objeto
               // con los campos de Firestore para ese doc
               // ...doc.data() desempaqueta (spread) los campos del 
               // doc (nombre, imagen, etc.) en un objeto.
                       parques.push({
                           ...doc.data()
                       });
               });
               setParques(parques);
               console.log(parques);
           }
       });
       return () => subscriber();
   }, []);
   return (
       <View style={styles.container}>
           {parques.length > 0 && (
               <FlatList
                   data={parques}
                   renderItem={({ item }) => <ParqueCard item={item} />}
                   keyExtractor={(parque) => parque.id}
                   showsVerticalScrollIndicator={true}
                   scrollEnabled={true}
                   bounces={true}
                   contentContainerStyle={styles.listContent}
               />
           )}
       </View>
   );
};


const styles = StyleSheet.create({
   container: {
       flex: 1,
       backgroundColor: '#fff',
   },
   listContent: {
       padding: 10,
   }
});


export default Parques;
