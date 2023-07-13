import {StyleSheet, View, Image, ImageBackground,Text} from 'react-native';
// import fontManager from '../fontManager';
// import { useFonts } from 'expo-font';
//import bg1 from 'E:\React\Native\Arshin\assets\images\bg1.png';
//import { Asset } from 'expo-asset';

// import {Font} from 'expo';
// import * as Font from 'expo-font'
import { useFonts } from 'expo-font';
import { useEffect, useState } from 'react';

export function LaunchScreen1() {
  const [fontsLoaded] = useFonts({
    // 'Lato-Regular' : [uri="https://drive.google.com/uc?export=view&id=1b9TjqYoYNzUPbI6wrVp2pup-1Px3G2Rr"]
    'Lato-Bold': require('../assets/fonts/Lato-Bold.ttf')
  })
  
  const [appIsReady, setAppIsReady] = useState(false)
  useEffect(()=> {
    async function prepare(){
      try {
        await Font.loadAssetsAsync(Entypo.font)
        await new Promise(resolve => setTimeout (resolve,2000))
      } catch(e){
        console.warn(e)
      } finally {
        setAppIsReady(true)
      }
      }
    }
      )
     
  return (
    <View style={styles.root}>
      <ImageBackground  source={{uri:'https://drive.google.com/uc?export=view&id=1K85DoIu9xpQtLMZhJ8AQpPN7c9-G329T'}} alt='drive image' style={styles.bg} contentFit="cover">
      <Image source={{uri:'https://drive.google.com/uc?export=view&id=1vVtrST3FmJMkEAfQxN2DqLn20fMYdD4u'}}  alt='drive image' style={styles.logoRasaPng11} contentFit="cover"/>
      <Text style={styles.logotext}>
        Rmi
      </Text>
      </ImageBackground>

      
    </View>
    
  );
}

// let [fontsLoaded] = useFonts({
//   'Lato-Regular':[uri="https://drive.google.com/uc?export=view&id=1b9TjqYoYNzUPbI6wrVp2pup-1Px3G2Rr"] ,
//   //'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
// });




const styles = StyleSheet.create({
  root: {
    width: 390,
    height: 844,
    backgroundColor: '#BFD0E0',
    boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25) inset',
  },
  bg: {
    width: 400,
    height: 850,
    flexShrink: 0,
    opacity: 0.5,
  },
  logoRasaPng11: {
    width: 75,
    height: 76,
    flexShrink: 0,
    alignContent: 'center',
    marginTop: 694,
    marginLeft: 158,
    marginRight: 158,
    backgroundBlendMode: 'darken',
  },
  logotext: {
    width: 114,
    height: 18,
    flexDirection: 'column',
    flexShrink: 0,
    textAlign: 'center',
    marginLeft: 140,
    marginTop: 10,
    // fontFamily:source= [uri= 'https://drive.google.com/uc?export=view&id=1b9TjqYoYNzUPbI6wrVp2pup-1Px3G2Rr'],
    fontFamily: 'Lato-Bold',
    color: 'blue',
    fontStyle: 'normal',
  },
});
