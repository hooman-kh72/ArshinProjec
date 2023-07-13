import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import * as Font from 'expo-font';

export default class fontManager extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        fontsLoaded: false
    }
  }

  componentDidMount() {
    this.loadAssetsAsync()
  }

//   loadAssetsAsync = async () => {
//     await Font.loadAsync({
//         'Lato-Regular': require('../Arshin/assets/fonts/Lato-Regular.ttf'),
    
//     })
//     this.setState({ fontLoaded: true })
//   }

  async componentDidMount() {
    await Font.loadAsync({
      'Lato-Regular': require('../Arshin/assets/fonts/Lato-Regular.ttf')
    })
    this.setState({ fontLoaded: true });
    this.defaultFonts();
  }

// async componentDidMount(){
//     Font.loadAsync({
//         'Lato-Regular': require('../Arshin/assets/fonts/Lato-Regular.ttf')
//       })
//         .then(() => {
//            this.setState({ fontLoaded: true });
//            this.defaultFonts();
//         });

// }
//   async loadFonts() {
//     await Font.loadAsync({
//       'Lato-Regular': require('../Arshin/assets/fonts/Lato-Regular.ttf'),
//     });
//     this.setState({ fontsLoaded: true });
//   }


}