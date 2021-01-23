import React from 'react';
import ReactDom from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import spinner from './spinner';

class App extends React.Component {



    state = {
        lat: null,
        long: null,
        errorMessage: null,
    };




    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            position => {
                this.setState({
                    lat: position.coords.latitude,
                    long: position.coords.longitude,
                    accuracy: position.coords.accuracy,
                });
            },
            error => {
                this.setState({
                    errorMessage: error.message,
                });
            },
        );
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('componentDidUpdate', prevProps, prevState, snapshot);
    }


    render() {

        
        
        if (this.state.errorMessage && (!this.state.lat || !this.state.long)) {
            return (
                <div className="ui negative message">
                    <i className="close icon" />
                    <div className="header">Error!</div>
                    <p>{this.state.errorMessage}</p>
                </div>
            );
        }
       

        if (!this.state.errorMessage) {
            return (
                <SeasonDisplay lat={this.state.lat} long={this.state.long} />
            );

        }
        return <spinner message='please allow location...'/>;


    }
}

ReactDom.render(
    <App />,
    document.querySelector('#root')
);
// const App = () => {
//     window.navigator.geolocation.getCurrentPosition(
//      (position) => {console.log(position);},
//        (error) => {console.log(error);},
//         );

//     return (
//         <>
//             <h1>adfadf</h1>
//             <br/>
//             <SeasonDisplay/>
//         </>
//     );
// };




