import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

export const Welcome = (props) => {
    return <h1>Hello, {props.name} </h1>
}

ReactDOM.render(
    <Welcome name ="session 2" />,
    document.getElementById('app')
);


ReactDOM.render(<p>i want break</p>,document.getElementById('app'))