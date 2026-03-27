// Iconos FontAwesome del propio expo. No hace falta instalar
import { FontAwesome } from '@expo/vector-icons';
import { deleteDoc, doc, updateDoc } from 'firebase/firestore';
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View, useWindowDimensions } from 'react-native';
import RenderHTML from 'react-native-render-html';
import { FIRESTORE_DB } from '../../FirebaseConfig';
import { Parque } from '../types';


// Definimos el tipo Props para el componente que recibe el Parque
type Props = {
   item: Parque;
};


// Recibe un props con item dentro.
// Podriamos poner any en vez de Props para evitar definir el tipo
// pero es mejor definirlo para autocompletado y evitar errores.


const ParqueCard = ({ item }: Props) => {
   const { width } = useWindowDimensions();
   const ref = doc(FIRESTORE_DB, `parques/${item.id}`);
   // con la referencia al documento podemos actualizarlo o borrarlo
   const darLike = async () => {
       updateDoc(ref, { likes: Number(item.likes)+1 });
   };
   const deleteParque = async () => {
       deleteDoc(ref);
   };
   return (
       <View style={styles.card}>
           <Image source={{ uri: item.imagen }} style={styles.imagen} />
           <View style={styles.cardContent}>
               <View style={styles.row}>
                   <Text style={styles.nombre}>{item.nombre}</Text>
                   <TouchableOpacity style={styles.likesContainer} onPress={darLike}>
                       <FontAwesome name="thumbs-up" size={20} color="#f44336" />
                       <Text style={styles.likes}>{item.likes}</Text>
                   </TouchableOpacity>
               </View>
               <Image source={{ uri: "http://www.ies-azarquiel.es/paco/apiparques/img/banderas/c" + item.comunidad + ".gif" }} style={styles.comunidad} />
               <RenderHTML
                   contentWidth={width}
                   source={{ html: item.descripcion }}
                   baseStyle={styles.descripcion}
               />
           </View>
       </View>
   );
};


export default ParqueCard;


const styles = StyleSheet.create({
   card: {
       flexDirection: 'column',
       backgroundColor: '#fff',
       padding: 15,
       marginBottom: 10,
       elevation: 4, // Android shadow
       shadowColor: '#000', // iOS shadow
       shadowOffset: { width: 0, height: 0 },
       shadowOpacity: 0.2,
       shadowRadius: 8, // blur
       borderRadius: 30,
   },
   imagen: {
       width: '100%',
       height: 300,
       resizeMode: 'cover',
       borderRadius: 10,
       marginBottom: 15,
   },
   cardContent: {
       flex: 1,
       flexDirection: 'column',
   },
   row: {
       flexDirection: 'row',
       justifyContent: 'space-between',
       alignItems: 'center',
       marginBottom: 4,
   },
   likesContainer: {
       flexDirection: 'row',
       alignItems: 'center',
       columnGap: 6,
   },
   nombre: {
       fontSize: 18,
       fontWeight: '600',
       color: '#222',
   },
   likes: {
       fontSize: 20,
       color: '#f44336',
       fontWeight: 'bold',
   },
   descripcion: {
       fontSize: 16,
       color: '#555',
   },
   comunidad: {
       width: 100,
       height: 60,
       resizeMode: 'cover',
       marginTop: 15,
   },
});
