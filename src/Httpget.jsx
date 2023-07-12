import React from "react";
import axios from 'axios'

class Httpget extends React.Component{
    state ={
        smsList: []
    }
    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/comments').then((result) => {
            let smsList = result.data
            console.log('smsList', smsList)
            this.setState({smsList})
        })
    }
    render(){
        return(
            <>
            {/* <div className="smslist-1"> */}
                
                {
                    
                    this.state.smsList.map(sms =>
                        <div className="smslist" key={sms.id}>
                            <div className="name1">name: {sms.name}</div>
                        <div className="email">email: {sms.email}</div>
                        <div className="body">body: {sms.body}</div>
                        <hr/>  </div>)

                }
           {/* </div> */}
            </>
        )
    }
}

export default Httpget















































