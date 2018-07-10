import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux';

import store from './store';
import './styles/app.scss';

import RootContainer from './components/RootContainer';

class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <RootContainer />
            </Provider>
        );
    }
}

var mountNode = document.getElementById("root");
ReactDOM.render(<App />, mountNode);