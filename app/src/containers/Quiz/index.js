import React from 'react'

import QuizHeader from '../../components/QuizHeader'
import QuizItem from './subpage/QuitItem'
import QuizSend from './subpage/QuizSend'

class Quiz extends React.Component {

    render(){
        const data = [[0, "Hi,I'm", "from"], [1, "I would like help with", "My budget is"], [2, "and you can reach me at", "I'm looking forward to hearing from you"]]

        return (
           <div className='Quiz-container'>
               <QuizHeader/>
               {
                   data.map((item, index) => {

                       return <QuizItem key={index} data={item} isSelect={this.props.isSelect}/>
                   })
               }
               <QuizSend/>
           </div>
        )
    }

}


export default Quiz
