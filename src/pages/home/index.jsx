import { Component } from "react";

class Home extends Component {
  constructor(props){
     super(props)

     this.title = props.title
  }


  render(){

    const { title } = this.props

    return (
        <div>
            Home Page
            <p>{title}</p>
        </div>
    )
  }
}


export default Home;
