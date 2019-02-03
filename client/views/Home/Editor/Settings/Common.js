import React from 'react'
import {
    BackgroundSettings,
    SizeSettings,
    PaddingSettings,
    FontSettings
} from './Common'

export const CommonSettings = ({
    id,
    config,
    onConfigChange,
    yesBackground,
    yesSize,
    yesPadding,
    yesFont
}) => {
    const propsSettings = {
        style: config.style,
        onStyleChange: (style) => onConfigChange(id, { style })
    }

    return (
        <div className={'common-settings'}>
            { yesBackground && <BackgroundSettings {...propsSettings}/> }
            { yesSize &&  <SizeSettings {...propsSettings} /> }
            { yesPadding && <PaddingSettings {...propsSettings} />}
            { yesFont && <FontSettings {...propsSettings} /> }
        </div>
    )
}
