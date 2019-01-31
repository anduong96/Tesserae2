import React from 'react'
import HoverMenu from '../HoverMenu'
import { Title, TitleIcon } from './Title'
import { Text, TextIcon } from './Text'
import { Divider, DividerIcon } from './Divider'
import { Image, ImageIcon } from './Image'
import { ImageTextLeft, ImageTextLeftIcon } from './ImageTextLeft'
import { ImageTextRight, ImageTextRightIcon } from './ImageTextRight'
import { DoubleImageText, DoubleImageTextIcon } from './DoubleImageText'
import { TripleImageText, TripleImageTextIcon } from './TripleImageText'
import { Location, LocationIcon } from './Location'
import { Click, ClickIcon } from './Click'
import { Blank, BlankIcon } from './Blank'


const CanvasComponentShort = (configs) => (
    <div className="draggable-item" >
        {configs.id === configs.currentHover && <HoverMenu {...configs}/>}
        {{
            text: <Text {...configs} />,
            blank: <Blank {...configs}/>,
            title: <Title {...configs} />,
            image: <Image {...configs} />,
            button: <Click {...configs} />,
            divider: <Divider {...configs}/>,
            location: <Location {...configs} />,
            imageTextLeft: <ImageTextLeft {...configs} />,
            imageTextRight: <ImageTextRight {...configs} />,
            doubleImageText: <DoubleImageText {...configs} />,
            tripleImageText: <TripleImageText {...configs} />,
        }[configs.name]}
    </div>
)

export const CanvasComponents = ({
    configurations,
    onFocus,
    index,
    currentHover,
    onSetCurrentHover,
    onClone,
    onRemove }) => (

    <CanvasComponentShort
        {...configurations}
        index={index}
        onFocus={onFocus}
        onClone={onClone}
        onRemove={onRemove}
        currentHover={currentHover}
        onSetCurrentHover={onSetCurrentHover}
    />
)

export const OptionComponents = ({ name, userSelect}) => (
    <div className={`icon-container${(name === userSelect) ? ' is-being-drag': ''}`}>
        {{
            text: <TextIcon />,
            title: <TitleIcon />,
            image: <ImageIcon />,
            blank: <BlankIcon />,
            button: <ClickIcon />,
            divider: <DividerIcon />,
            location: <LocationIcon />,
            imageTextLeft: <ImageTextLeftIcon />,
            imageTextRight: <ImageTextRightIcon />,
            doubleImageText: <DoubleImageTextIcon />,
            tripleImageText: <TripleImageTextIcon />,
        }[name]}
    </div>
)


export default { CanvasComponents, OptionComponents }

