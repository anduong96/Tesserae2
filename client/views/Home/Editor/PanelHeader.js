
import React from 'react'
import { toTitle } from '../../../utilities/common'

export const PanelHeader = ({ title, index }) => (
    <div className={'editor-header'} >
        {`Component ${index}: ${toTitle(title)}`}
    </div>
)
