import { Stack } from 'expo-router';


export default function RootLayout() {
   return (
       <Stack>
           <Stack.Screen
               name="index"
               options={{ title: 'Parques Naturales', headerShown: false }}
           />
       </Stack>
   );
}
