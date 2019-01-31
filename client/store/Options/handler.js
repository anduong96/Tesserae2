export default class OptionsHandler {
    static handleDragging(oldState, userSelect, isDragging) {
        return {
            ...oldState,
            userSelect,
            isDragging
        }
    }
}
