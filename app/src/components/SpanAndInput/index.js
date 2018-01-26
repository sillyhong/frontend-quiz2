import React from 'react'
import InputComponent from '../InputComponent'

import './style.css'

class SpanAndInput extends  React.Component {

    render(){
        return(
            <span>
                <span>{this.props.data[1]}</span>
                    <InputComponent
                        data={this.props.data}/>
                <span>{this.props.data[2]}</span>
            </span>

        )
    }

    // focusHandle() {
    //     this.setState({
    //         inputNormal: '',
    //         focused: true
    //     })
    // }
    //
    // blurHandle(e) {
    //     this.setState({
    //         focused: false,
    //         value: e.target.value.trim()
    //     })
    // }
    //
    // getClassName() {
    //     if(this.state.focused === true){
    //         return this.state.inputFoucs
    //     }else if(this.state.value === '' ) {
    //         return this.state.inputBlur
    //     }
    //
    // }
    //
    // changeHandle(e) {
    //     //验证邮箱
    //     const value = e.target.value
    //     console.log(value);
    //     this.checkEmail(value)
    //
    //     if(this.state.isEmailOk){
    //         this.setState({
    //             inputNormal: 'input-foucs'
    //         })
    //     }else{
    //         this.setState({
    //             inputNormal: 'input-blur'
    //         })
    //     }
    // }
    //
    // //验证邮箱
    // checkEmail(value) {
    //     var reg = /^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/
    //     if(reg.test(value)){
    //         this.setState({
    //             isEmailOk:true
    //         })
    //     }else{
    //         this.setState({
    //             isEmailOk: false
    //         })
    //     }
    // }

}

export default SpanAndInput