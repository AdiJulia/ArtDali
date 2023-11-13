// import * as React from 'react';
// import {PaintingApp} from './src/screens/index.js';
// export default function App() {
//   return <PaintingApp />;
// }

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Router from './src/navigation/router';
export default function App() {
  return (
    <NavigationContainer>
     <Router/>
    </NavigationContainer>
  );
}