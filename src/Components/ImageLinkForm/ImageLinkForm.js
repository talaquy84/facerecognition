import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm = ({ onInputChange, onPictureSubmit }) => {
    return (
        <div className='f3'>
           <p>
               {'The AI robot will detect faces in the picture. Try it!!'}
           </p>
           <div className='center'>
                <div className='center form pa4 br3 shadow-5'>
                    <input 
                        className='f4 pa2 w-70 center' type='text' 
                        onChange={onInputChange} />
                    <button 
                        className='w-30 grow f4 link ph3 pv2 dib white bg-light-purple' 
                        onClick={onPictureSubmit}
                    >Detect</button>
               </div>
           </div>
        </div>
    )
}

export default ImageLinkForm;    