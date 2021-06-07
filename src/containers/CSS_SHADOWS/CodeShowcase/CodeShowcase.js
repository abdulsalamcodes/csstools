import React, { useState, useEffect, useRef } from 'react'
import { connect } from 'react-redux';
import './CodeShowcase.css';

function CodeShowcase(props) {
    const [copySuccess, setCopySuccess] = useState('Copy to Clipboard');
    const textAreaRef = useRef(null);

    function copyToClipboard(e) {
        textAreaRef.current.select();
        document.execCommand('copy');
        // This is just personal preference.
        // I prefer to not show the whole text area selected.
        e.target.focus();
        setCopySuccess('Copied!');
    };

    useEffect(() => {
       setCopySuccess('Copy to Clipboard')   
    }, [props.styles])

    let code = `box-shadow: ${props.styles.optional_prop} ${props.styles.offset_x}px  ${props.styles.offset_y}px ${props.styles.blur_radius}px  ${props.styles.spread_radius}px   rgba(${props.styles.shadow_color.r}, ${props.styles.shadow_color.g}, ${props.styles.shadow_color.b}, ${props.styles.shadow_color.a}) 
background-color: rgba(${props.styles.bg.r}, ${props.styles.bg.g}, ${props.styles.bg.b}, ${props.styles.bg.a})`

    return (

        <div className="CodeShowcase">

            {document.queryCommandSupported('copy') &&
                <button onClick={copyToClipboard} className="Copy_Btn">{copySuccess}</button>
            }
            <textarea className="CodeShowcase_area" readOnly spellCheck={false} ref={textAreaRef} cols="100" rows="2"  value={code} />
        </div>
    )
}



const mapStateToProps = (state) => {
    return {
        styles: state.shadow
    }
}


export default connect(mapStateToProps)(CodeShowcase)
