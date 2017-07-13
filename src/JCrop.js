import React, { Component } from 'react';
import $ from 'jquery';
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
        $(this.imageHtmlElement).Jcrop();
    }

    render(){
        return(
            <img rel={ (rel) => {this.setState({imageHtmlElement:rel})} } src={ this.state.imageToCrop } />
        )
    }
}

export default JCrop