import React from 'react'
import SelectItem from './subpage/SelectItem'


import './style.css'
class SelectComponent extends React.Component {
    render(){
        const salary = ['Under $10,000', '$10,000 - $25,000', '$25,000 - $50,000', '$50,000 - $75,000', 'Above $75,000']
        return (
            <div className={'select-container ' + this.props.addClass}>

                {
                    this.props.isSelect
                    ?''
                    :
                        salary.map( (item, index) => {
                            return <SelectItem key={index} data={item} clickSelectHandle={this.clickSelectHandle.bind(this)} />
                        })

                }
            </div>
        )
    }

    clickSelectHandle(value) {
        this.props.clickHandle(value)
    }
}


export default SelectComponent
