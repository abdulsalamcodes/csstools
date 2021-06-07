// Action Types
export const CHANGE_BG = 'CHANGE_BG';
export const CHANGE_HORIZONTAL = 'CHANGE_HORIZONTAL';
export const CHANGE_VERTICAL = 'CHANGE_VERTICAL';
export const CHANGE_BLUR_RADIUS = 'CHANGE_BLUR_RADIUS';
export const CHANGE_SPREAD_RADIUS = 'CHANGE_SPREAD_RADIUS';
export const CHANGE_SHADOW_COLOR = 'CHANGE_SHADOW_COLOR';
export const CHANGE_OPTIONAL_PROP = 'CHANGE_OPTIONAL_PROP';

// Action Creators
export const change_bg = (value) => {
    return {
        type: CHANGE_BG,
        value: value
    }
}

export const change_optional_prop = (value) => {
    return {
        type: CHANGE_OPTIONAL_PROP,
        value: value
    }
}
export const change_horizontal = (value) => {
    return {
        type: CHANGE_HORIZONTAL,
        value: value
    }
}
export const change_vertical = (value) => {
    return {
        type: CHANGE_VERTICAL,
        value: value
    }
}
export const change_blur_radius = (value) => {
    return {
        type: CHANGE_BLUR_RADIUS,
        value: value
    }
}
export const change_spread_radius = (value) => {
    return {
        type: CHANGE_SPREAD_RADIUS,
        value: value
    }
}
export const change_shadow_color = (value) => {
    return {
        type: CHANGE_SHADOW_COLOR,
        value: value
    }
}

const intialState = {
    bg: {
        r: '241',
        g: '112',
        b: '19',
        a: '1',
    },
    offset_y: 2,
    optional_prop: "",
    offset_x: 2,
    blur_radius: 15,
    spread_radius: 15,
    shadow_color:  {
        r: '241',
        g: '112',
        b: '19',
        a: '0.1',
    },
}

// Reduce
function shadow_reducer(state = intialState, action) {
    switch (action.type) {

        case CHANGE_OPTIONAL_PROP:
            return { ...state ,  optional_prop: action.value}

        case CHANGE_BG:
            console.log(state, action)
            return { ...state ,  bg: action.value}

        case CHANGE_HORIZONTAL:
            return { ...state ,  offset_x: action.value}
        case CHANGE_VERTICAL:
            return { ...state ,  offset_y: action.value}

        case CHANGE_BLUR_RADIUS:
            return { ...state ,  blur_radius: action.value}

        case CHANGE_SPREAD_RADIUS:
            return { ...state ,  spread_radius: action.value}

        case CHANGE_SHADOW_COLOR:
            return { ...state ,  shadow_color: action.value}

        default:
            return state

    }
}

export default shadow_reducer
