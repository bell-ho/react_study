import logo from './logo.svg';
import './App.css';
import Counter from "./Counter";
import Info from "./Info";
import {useReducer, useState} from "react";
import Average from "./Average";
import SassComponent from "./SassComponent"

function reducer(state, action) {

    const keys = Object.keys(state);
    keys.forEach((key) => {
        if (key !== action.name) state[key] = false;
    })

    return {
        ...state, [action.name]: state[action.name] !== true
    };
}

function App() {

    const [state, dispatch] = useReducer(reducer, {
        info: false,
        counter: false,
        average: false,
        sasscomponent: false,

    })

    let {info, counter, average, sasscomponent} = state;

    const onClick = (e) => {
        dispatch(e.target);
    }

    return (
        <div>
            <div>
                <button name="info" onClick={onClick}>Info</button>
                <button name="counter" onClick={onClick}>Counter</button>
                <button name="average" onClick={onClick}>Average</button>
                <button name="sasscomponent" onClick={onClick}>SassComponent</button>
                <hr/>
                {info && <Info/>}
                {counter && <Counter/>}
                {average && <Average/>}
                {sasscomponent && <SassComponent/>}
            </div>
        </div>
    );
}

export default App;
