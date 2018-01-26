import React from 'react'

import '../style.css'
class SelectItem extends React.Component {
    render(){
        return (
            <li className='select-item'  onClick={this.clickHandle.bind(this)}>{this.props.data}</li>
        )
    }

    clickHandle(e) {
        e.stopPropagation();
        e.nativeEvent.stopImmediatePropagation();
        const data =this.props.data
        this.props.clickSelectHandle(data)
    }
}


export default SelectItem
