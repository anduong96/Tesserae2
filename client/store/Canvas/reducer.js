import ACTIONS from './types';
import CanvasHandler from './handler'

const initialState = {
    canvas: undefined,
    canvasStyle: {
        backgroundColor: 'rgb(224, 224, 224)'
    },
    isDesktopView: true,
    isHoveringOver: null
};

const CanvasReducer = (state = initialState, action) => {
    switch (action.type) {
        case ACTIONS.SET_CANVAS:
            return CanvasHandler.onSetCanvas(oldState, action.canvas)

        case ACTIONS.CHANGE_CANVAS_STYLE:
            return CanvasHandler.onChangeStyle(oldState, action.style)

        case ACTIONS.ADD_TO_CANVAS:
            return CanvasHandler.onAdd(state, state.canvas, action.dropItem)

        case ACTIONS.REMOVE_FROM_CANVAS:
            return CanvasHandler.onRemove(state, state.canvas, action.componentID)

        case ACTIONS.CLONE_FROM_CANVAS:
            return CanvasHandler.onClone(state, action.componentID)

        case ACTIONS.CHANGE_COMPONENT_CONFIG:
            return CanvasHandler.onChangeComponentConfig(state, action.componentID, action.proposedConfig)

        case ACTIONS.FOCUS_ON_CANVAS_COMPONENT:
            return CanvasHandler.onFocus(state, action.componentID, action.isFocus)

        default:
            return state;
    }
};

export default CanvasReducer;
