import React from 'react'

import './style.css'

class　InputComponent extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            focused: false,
            inputFoucs: 'input-focus',
            inputBlur:  'input-blur',
            inputNormal: 'input-normal',
            value:'',
            isEmailOk: {}
        }
    }

    render(){
        return(
            <span>
            {
                this.props.data[0] === 0
                //普通的输入框
                ?<input className={ this.state.inputNormal || this.getClassName()} onBlur={this.blurHandle.bind(this)} onFocus={this.focusHandle.bind(this)} type="text"/>
                    :this.props.data[0] === 1
                        ?//有弹出效果的输入框
                        (
                            this.props.isSelect ?
                            <input value={this.props.salary} className={this.state.inputNormal || this.getClassName() } onClick={this.clickHandle.bind(this)} onBlur={this.blurHandle.bind(this)} onFocus={this.focusHandle.bind(this)} type="text" readOnly/>
                            :<input className={this.state.inputNormal || this.getClassName() }  onBlur={this.blurHandle.bind(this)} onFocus={this.focusHandle.bind(this)} type="text"/>
                        )
                        ://需要验证邮箱的输入框
                            <input className={ this.state.inputNormal || this.getClassName()} onChange={this.changeHandle.bind(this)} onBlur={this.blurHandle.bind(this)} onFocus={this.focusHandle.bind(this)} type="text"/>

            }
            </span>
        )
    }

    focusHandle() {
        this.setState({
            inputNormal: '',
            focused: true
        })
    }

    blurHandle(e) {
        this.setState({
            focused: false,
            value: e.target.value.trim()
        })
    }

    getClassName() {
        if(this.state.focused === true){
            return this.state.inputFoucs
        }else if(this.state.value === '' ) {
            return this.state.inputBlur
        }

    }
    clickHandle(e) {
        e.stopPropagation();
        e.nativeEvent.stopImmediatePropagation();
        this.props.showSelectHandle()
    }

    changeHandle(e) {
        //验证邮箱
        const value = e.target.value
        console.log(value);
        this.checkEmail(value)

        if(this.state.isEmailOk){
            this.setState({
                inputNormal: 'input-foucs'
            })
        }else{
            this.setState({
                inputNormal: 'input-blur'
            })
        }
    }

    //验证邮箱
    checkEmail(value) {
        var reg = /^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/
        if(reg.test(value)){
            this.setState({
                isEmailOk:true
            })
        }else{
            this.setState({
                isEmailOk: false
            })
        }
    }

}

export default InputComponent