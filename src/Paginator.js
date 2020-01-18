import React from 'react'


import {
    BrowserRouter as Router,
    Link
} from "react-router-dom";

class Paginator extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <React.Fragment>
                <h1>{this.props.current}</h1>
                {this.props.isAbleToNext &&
                    <Link to={this.props.path + (this.props.current+1)}>Next</Link>
                }
                {this.props.isAbleToPrevious &&
                    <Link to={this.props.path + (this.props.current-1)}>Previous</Link>
                }
                
                
            </React.Fragment>
        )
    }
}

export default Paginator;