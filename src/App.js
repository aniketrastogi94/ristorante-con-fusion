import React from "react";
import "./styles.css";
import Main from './components/mainComponent';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ConfigureStore } from './redux/configure';

const store = ConfigureStore();

class App extends React.Component{
  render(){
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div className='App'>
            <Main/>
          </div>
        </BrowserRouter>
      </Provider>
    )
  }
}
export default App;