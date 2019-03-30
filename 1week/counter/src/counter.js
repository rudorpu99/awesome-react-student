import React, {Component} from 'react';

class Counter extends Component{
   render(){
       return (
           <div>
               <p>{this.props.text}</p>
               <p>값 : {this.props.num}</p>
               <button onClick={this.props.add}>+</button>
               <button onClick={this.props.sub}>-</button>
               <button onClick={this.props.reset}>reset</button>
           </div>
       );
   }
}

export default Counter;
