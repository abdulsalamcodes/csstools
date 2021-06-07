import React from 'react'
import { connect } from 'react-redux';
import './Preview.css';

const style = (props) => {
    return {
        color: props.color,
        backgroundColor: `rgba(${props.bg.r}, ${props.bg.g}, ${props.bg.b}, ${props.bg.a})`,
        boxShadow: `${props.optional_prop} ${props.offset_x}px  ${props.offset_y}px ${props.blur_radius}px  ${props.spread_radius}px   rgba(${props.shadow_color.r}, ${props.shadow_color.g}, ${props.shadow_color.b}, ${props.shadow_color.a})`,
    }
}


function Preview(props) {

    return (
        <div className="Preview">
            <div className="Preview_box" style={style(props.styles)}>Preview Box</div>
        </div>
    )
}


const mapStateToProps = (state) => {
    return {
        styles: state.shadow
    }
}


export default connect(mapStateToProps)(Preview)
