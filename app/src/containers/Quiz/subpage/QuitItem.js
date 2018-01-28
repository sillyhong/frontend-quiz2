import React from 'react'
import SpanAndInput from '../../../components/SpanAndInput'
import InputComponent from '../../../components/InputComponent'
import SelectComponent from '../../../components/SelectComponent'


import './style.css'
class QuitItem extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            isSelect: true,
            salary: '',
            addClass: ''
        }
    }
    render(){
        const data= this.props.data
        return (
            <div className='input-container' onClick={this.delegateClickHandle.bind(this)}>
                {/*每一行前三个标签都是span input span，可抽离成一个组件*/}
                <SpanAndInput data={data}  ></SpanAndInput>
                {
                    data[0] === 0
                    //第一行和第二行最后一个标签都是input,第三行最后一个标签是span
                    ? <InputComponent data={this.props.data}></InputComponent>
                        :data[0] === 1
                        ?
                            <div  className='select-relative'>
                                <InputComponent salary={this.state.salary || ''} isSelect={this.state.isSelect} data={this.props.data}  showSelectHandle={this.showSelectHandle.bind(this)}></InputComponent>
                                <SelectComponent addClass={this.state.addClass} isSelect={this.state.isSelect} clickHandle={this.clickSelectHandle.bind(this)}/>
                            </div>
                        :''
                }
            </div>
        )
    }



    //显示选择列表
    showSelectHandle() {
        console.log('显示');
        this.setState({
            isSelect: false,
            addClass: 'select-add'
        })
    }
    //点击选择
    clickSelectHandle(value) {
        console.log('选择')
        this.setState({
            salary: value,
            isSelect: true,
            addClass: '',
        })
    }

    delegateClickHandle() {
        console.log('委托')
        this.setState({
            isSelect: true,
            addClass:''
        })
    }
}


export default QuitItem
