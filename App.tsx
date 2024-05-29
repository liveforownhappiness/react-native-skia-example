/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useCallback, useState} from 'react';

import {Matrix} from './src/Matrix/Matrix';
import {Text, TouchableOpacity, View} from 'react-native';
import {Hue} from './src/Hue/Hue';
import {Wallpaper} from './src/WallPaper/WallPaper';
import {Aurora} from './src/Aurora/Aurora';

type ScreenType = 'matrix' | 'hue' | 'wallpaper' | 'aurora';

function App(): React.JSX.Element {
  const [screen, setScreen] = useState<ScreenType>('matrix');

  const returnScreen = useCallback(() => {
    if (screen === 'matrix') {
      return <Matrix />;
    }
    if (screen === 'hue') {
      return <Hue />;
    }
    if (screen === 'wallpaper') {
      return <Wallpaper />;
    }
    if (screen === 'aurora') {
      return <Aurora />;
    }
    return <Matrix />;
  }, [screen]);

  return (
    <View style={{flex: 1}}>
      {returnScreen()}
      <View style={{width: '100%', height: 40, flexDirection: 'row'}}>
        <TouchableOpacity
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onPress={() => setScreen('matrix')}>
          <Text>MATRIX</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}
          onPress={() => setScreen('hue')}>
          <Text>HUE</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}
          onPress={() => setScreen('wallpaper')}>
          <Text>WALLPAPER</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}
          onPress={() => setScreen('aurora')}>
          <Text>AURORA</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default App;
