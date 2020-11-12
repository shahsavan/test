import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {Formik} from "formik";

export default class App extends Component<any, any> {
    constructor(props: any) {
        super(props);
        this.login = this.login.bind(this);
    }

    login(): void {
    }

    render() {
        return (
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <p>
                    Edit <code>src/App.tsx</code> and save to reload.
                </p>
                <Formik initialValues={{name: 'guest'}} onSubmit={(values, actions) => {
                    this.login();
                }}>
                    {props => (
                        <input type="text" value={props.values.name}/>
                    )
                    }
                </Formik>
                <p>
                    Edit <code>src/App.tsx</code> and save to reload.
                </p>
                <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
                    Learn React
                </a>
            </header>
            /*,
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo"/>
            <p>
              Edit <code>src/App.tsx</code> and save to reload.
            </p>
            <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
            >
              Learn React
            </a>
          </header>
        </div>*/
        );
    }
}