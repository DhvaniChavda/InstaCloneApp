/**
 * @format
 */

import {AppRegistry, LogBox} from 'react-native';
import App from './src/setup';
import {name as appName} from './app.json';

LogBox.ignoreAllLogs(true);
LogBox.ignoreLogs(['Warning: ...']);
AppRegistry.registerComponent(appName, () => App);
