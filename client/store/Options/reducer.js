import OptionsHandler from './handler'
import ACTIONS from './types'

const initialState = {
    userSelect: null,
    isDragging: false
}

const OptionsReducer = (state = initialState, action) => {

    switch (action.type) {
        case ACTIONS.OPTION_DRAG_START:
            return OptionsHandler.handleDragging(state, actions.select, true)

        case ACTIONS.OPTION_DRAG_END:
            return OptionsHandler.handleDragging(state, null, false)

        default:
            return state
    }
}

export default OptionsReducer
