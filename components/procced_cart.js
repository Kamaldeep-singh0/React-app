import React from "react";

class NextCart extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            count:0,
        }
    }
     componentDidMount(){
        this.interval = setInterval(() => {
            console.log("hi there");
        },1000);
     }
    
    // componentDidUpdate(){
    //     console.log("update");
    // }

    componentWillUnmount(){
        clearInterval(this.interval);
    }

    render(){
         const {count} = this.state;
        return(
            <div>
                <h2>Here are your Procced ITEMs : {this.props.items}</h2>
                <h3>
                    your items willl be delivered on time 
                </h3>
                <h4>Have a patience ! Dont call support</h4>
                <button onClick={()=>{
                    this.setState({count:count+1,});
                }}>Counter + 1</button>
                <h3>Count : {count}</h3>
               
            </div>
             
        );
    }
}

export default NextCart;