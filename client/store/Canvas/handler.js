import { generateID, deepCopy } from '../utils'

export default class CanvasHandler {
    static onSetCanvas = (oldState, canvas) => {
        return {
            ...oldState,
            canvas
        }
    }

    static onChangeStyle = (oldState, canvasStyle) => {
        return {
            ...oldState,
            canvasStyle
        }
    }

    static onAdd = (oldState, dropItem) => {
        const { removedIndex, addedIndex, payload } = dropItem
        const canvas = oldState.canvas ? deepCopy(oldState.canvas) : []
        let itemToAdd = payload

        if (removedIndex !== null) {
            itemToAdd = canvas.splice(removedIndex, 1)[0]
        }

        if (addedIndex !== null) {
            canvas.splice(addedIndex, 0, itemToAdd)
        }

        //generating new ID for easy handling
        canvas.map((item) => {
            item.id = generateID()
            return item
        })

        localStorage.setItem('tesseraeCanvas', JSON.stringify(canvas))

        return {
            ...oldState,
            canvas
        }
    }

    static onRemove = (oldState, id) => {
        const canvas = deepCopy(oldState.canvas).filter((item) => item.id != id)

        saveToStorage(canvas)

        return {
            ...oldState,
            canvas
        }
    }

    static onClone = (oldState, id) => {
        const canvas = deepCopy(oldState.canvas)
        const index = canvas.findIndex((item) => item.id === id)
        const itemToAdd = deepCopy(canvas[index])

        canvas.splice(index + 1, 0, itemToAdd)
        canvas.map((item) => {
            item.id = generateID()
        })

        saveToStorage(canvas)

        return {
            ...oldState,
            canvas
        }
    }

    static onChangeComponentConfig = (oldState, id, proposedConfig) => {
        const canvas = deepCopy(oldState.canvas)
        const target = canvas.filter((item) => item.id === id)[0]

        Object.keys(proposedConfig).forEach((key) => {
            target.config[key] = proposedConfig[key]
        })

        saveToStorage(canvas)

        return {
            ...oldState,
            canvas
        }
    }

    static onFocus = (oldState, id, isFocus) => {
        return {
            ...oldState,
            isHoveringOver: isFocus ? id : null
        }
    }
}

const saveToStorage = (target) => localStorage.setItem('tesseraeCanvas', JSON.stringify(target))
