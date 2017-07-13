import React, { Component } from 'react';
import $ from './MyJquery.js';
import Jcrop from 'jquery-jcrop';
import 'jquery-jcrop/css/jquery.Jcrop.min.css';
import './jCrop.css';

class JCrop extends Component {

    constructor(props){
        super(props)
        this.state={
            'imageToCrop':props.imageToCrop,
            'updateCropArea':props.updateCropArea,
            'jcrop':null,
            'currentX':0,
            'currentY':0
        }
    }

    
    updateSelectionArea(c) {
        this.setState({currentX:c.x,currentY:c.y})
        this.state.updateCropArea(c.x,c.y,c.w,c.h)
    }

    componentDidMount() {

        const self=this; //Because we need different this objects

        $("#img").Jcrop({
            'allowSelect':false,
            'allowDelete':true,
            'allowDrag':true,
            'allowResize':false,
            'onChange' : this.updateSelectionArea.bind(this)
        },function() {
            self.setState( {jcrop:this} );//We need Jcrop's this
        });

        
    }

    setSelection(event,width,height) {
        this.state.jcrop.animateTo([this.state.currentX,this.state.currentY,width,height]);
    }


    render(){
        return(
            <div>
                <div className="selectorArea">
                    <ul>
                        {/* {Add here your custom selections} */}
                        <li className="selector" onClick={ (event) => this.setSelection(event,800,500) } >16:9 Selector</li>
                        <li className="selector" onClick= { (event) => this.setSelection(event,400,500) } >PostStamp</li>
                    </ul>
                </div>
                <div className="imgArea">
                    <img id="img" src={ this.state.imageToCrop } />
                </div>
            </div>
        )
    }
}

export default JCrop