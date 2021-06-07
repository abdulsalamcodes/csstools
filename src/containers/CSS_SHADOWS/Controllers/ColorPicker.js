import React, {useState} from 'react'
import reactCSS from 'reactcss'
import { SketchPicker } from 'react-color'

const initialState = {
    displayColorPicker: false,
    color: {
        r: '241',
        g: '112',
        b: '19',
        a: '1',
    },
};


const SketchExample = ({intiialColor, onChangeHandler}) => {
    const [state, setState] = useState(initialState)

    const handleClick = () => {
        setState({ ...state, displayColorPicker: !state.displayColorPicker })
    };

    const handleClose = () => {
        setState({ ...state, displayColorPicker: false })
    };

    const handleChange = (color) => {
        onChangeHandler(color.rgb)
        console.log(color.rgb)
    };
    const styles = reactCSS({
        'default': {
            color: {
                width: '36px',
                height: '14px',
                borderRadius: '2px',
                background: `rgba(${intiialColor.r}, ${intiialColor.g}, ${intiialColor.b}, ${intiialColor.a})`,
            },
            swatch: {
                padding: '5px',
                background: '#fff',
                borderRadius: '1px',
                boxShadow: '0 0 0 1px rgba(0,0,0,.1)',
                display: 'inline-block',
                cursor: 'pointer',
            },
            popover: {
                position: 'absolute',
                right: '100px',
                // bottom: '-10px',
                zIndex: '2',
            },
            cover: {
                position: 'fixed',
                top: '0px',
                right: '0px',
                bottom: '0px',
                left: '0px',
            },
        },
    });


    return (
        <div>
            <div style={styles.swatch} onClick={handleClick}>
                <div style={styles.color} />
            </div>

            { state.displayColorPicker ? <div style={styles.popover}>
                <div style={styles.cover} onClick={handleClose} />
                <SketchPicker color={intiialColor} onChange={handleChange} />
            </div> : null}

        </div>
    )

}

export default SketchExample