import React from 'react'
import clickSVG from './SVG/click.svg'

export const Click = ({ onSetCurrentHover, config, id }) => (
    <div className={'canvas-component clicks'}
        style={config.style}
        onClick={() => console.log({ id })}
        onMouseEnter={() => onSetCurrentHover(true, id)}
    >
        { config.buttons.map(( item, index ) => {
            if(index <= config.limit) {
                return (
                    <a
                        href={item.href}
                        target={'_blank'}
                        key={index}
                        className={'clicks-item'}
                        style={item.style}
                    >
                        {item.text}
                    </a>
                )
            }
        }) }
    </div>
)

export const ClickIcon = () => (
    <div className={'email-component click'}>
         <img src={clickSVG} className={'click-icon'} />
    </div>
)

export default {
    Click,
    ClickIcon
}

