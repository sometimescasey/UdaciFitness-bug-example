import * as React from 'react';
import Navigator from './navigator/Navigator';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers';
import { purple } from './utils/colors';
import UdaciStatusBar from './components/UdaciStatusBar';
import { setLocalNotification } from './utils/helpers';


export default class App extends React.Component {
  componentDidMount() {
    setLocalNotification();
  }

  render() {
    return (
      
      <Provider store={createStore(reducer)}>
        <UdaciStatusBar 
                backgroundColor={purple} 
                barStyle='light-content'/>
        <Navigator/>
      </Provider>
    );
  }


}