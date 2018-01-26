import React from 'react'

import Quiz from './Quiz'

class App extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            hasSend: false
        }
    }
    render(){
        return (
            <div>
                {
                    this.state.hasSend
                    ?<div>已发送</div>
                    :<Quiz></Quiz>
                }
            </div>
        )
    }

}


export default App
