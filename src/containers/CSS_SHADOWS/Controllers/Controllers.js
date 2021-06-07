import React from 'react'
import { connect } from 'react-redux';
import { change_bg, change_blur_radius, change_horizontal, change_optional_prop, change_shadow_color, change_spread_radius, change_vertical } from '../../../store/shadow';
import ColorPicker from './ColorPicker';
import './Controllers.css';


const Controller = ({ value, action, textLabel, name, type, min = "-100" }) => {
    return <div className={`${type && 'd-flex'} controller`} >
        <div className="controller_header">
            <label htmlFor={name}>{textLabel}</label>
            {!type && <input type="number" className="controller_preview" value={value} onChange={action} />}
        </div>

        {type === 'color'
            ? <ColorPicker intiialColor={value} onChangeHandler={action} />
            : <input type="range" className="controller_input" value={value} onChange={action} name={name} min={min} max="100" step="1" />
        }
    </div>

}
function Controllers(props) {
    const handleChange = (e) => {
        console.log('changing', e.target.value)
    }

    return (
        <div className="Controllers">

            <Controller textLabel="Horizontal Offset" name="offset-x" value={props.offset_x} action={(e) => props.onChangeHorizontal(e.target.value)} />
            <Controller textLabel="Vertical Offset" name="offset-y" value={props.offset_y} action={(e) => props.onChangeVertical(e.target.value)} />
            <Controller textLabel="Blur Radius" min="0" name="blur-radius" value={props.blur_radius} action={(e) => props.onChangeBlurRadius(e.target.value)} />
            <Controller textLabel="Spread Radius" name="spread-radius" value={props.spread_radius} action={(e) => props.onChangeSpreadRadius(e.target.value)} />
            <Controller textLabel="Shadow Color" type="color" name="blur-radius" value={props.shadow_color} action={props.onChangeShadowColor} />
            <Controller textLabel="Background Color" type="color" name="bgColor" value={props.bg} action={props.onChangeBg} />
            <div onChange={(e) => props.onChangeOptionalProp(e.target.value)}>
                <h4 className="title">Optional Property</h4>
                <label className="container">
                    <span>Outline</span>
                    <input type="radio" value="" defaultChecked="checked" name="shadow_prop" />
                    <span className="checkmark" />
                </label>
                <label className="container">
                    <span>Inset</span>
                    <input type="radio" value="inset" name="shadow_prop" />
                    <span className="checkmark" />
                </label>
            </div>

        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        offset_x: state.shadow.offset_x,
        offset_y: state.shadow.offset_y,
        blur_radius: state.shadow.blur_radius,
        spread_radius: state.shadow.spread_radius,
        shadow_color: state.shadow.shadow_color,
        bg: state.shadow.bg,
    }

}

const mapDispatchToProps = (dispatch) => {
    return {
        onChangeBg: (color) => dispatch(change_bg(color)),
        onChangeOptionalProp: (value) => dispatch(change_optional_prop(value)),
        onChangeHorizontal: (value) => dispatch(change_horizontal(value)),
        onChangeVertical: (value) => dispatch(change_vertical(value)),
        onChangeBlurRadius: (value) => dispatch(change_blur_radius(value)),
        onChangeSpreadRadius: (value) => dispatch(change_spread_radius(value)),
        onChangeShadowColor: (value) => dispatch(change_shadow_color(value))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Controllers)
