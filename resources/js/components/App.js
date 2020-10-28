import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class App extends Component {
    render () {
        return (
            <div className="container">
                <h3 className="text-center">Main page!</h3>
            </div>
        );
    }
}

export default Component;

if (document.getElementById('root')) {
    ReactDOM.render(<App />, document.getElementById('root'));
}
