import React from 'react'
import imageSVG from './SVG/image.svg'
import textSVG from './SVG/text.svg'

export const ImageTextRightIcon = () => (
    <div className={'email-component image-text-right'}>
         <img src={textSVG} className={'text-icon'} />
         <img src={imageSVG} className={'image-icon'} />
    </div>
)

export const ImageTextRight = ({ onSetCurrentHover, config, id }) => (
    <div
        className={'canvas-component image-text-right'}
        style={config.style}
        onClick={() => console.log({ id })}
        onMouseEnter={() => onSetCurrentHover(true, id)}
    >
        <p style={config.descript.style}>{config.descript.text}</p>
        <img src={config.image.src} style={config.image.style} />
    </div>
)


export default {
    ImageTextRight,
    ImageTextRightIcon
}
