import React, { Component } from 'react';
import $ from './MyJquery.js';
import Jcrop from 'jcrop';


class JCrop extends Component {

    constructor(props){
        super(props)
        this.state={
            'imageToCrop':props.imageToCrop,
            'imageHtmlElement':null
        }
    }

    comonentWillMount() {
        $.Jcrop("#img");
    }

    render(){
        return(
            <img id="img" rel={ (rel) => {this.setState({imageHtmlElement:rel})} } src={ this.state.imageToCrop } />
        )
    }
}

export default JCrop