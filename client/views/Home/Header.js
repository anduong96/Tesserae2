import React, { Component } from 'react'
import { connect } from 'react-redux'
import axios from 'axios'
import { Button } from 'antd'
import { parseCanvasIntoMJML } from './EmailComponents/mjmlHelper'
import { makeMJML } from '../../engine/mjml'
import { downloadFile } from '../../utilities/common'

class Header extends Component {

    parseToMJML = () => makeMJML({
        canvas: { ...this.props.canvasContainer.canvasStyle },
        contents: parseCanvasIntoMJML(this.props.canvasContainer.canvas)
    })

    downloadContent = () => {
        // axios.post(
        //     'https://api.mjml.io/v1/render',
        //     JSON.stringify({ mjml: JSON.stringify(this.parseToMJML()) }),
        //     { auth: { username: '*ENCRYPTED_ID*', password: '*ENCRYPTED_PASSWORD*' }}
        // ).then((res) => {
        //     if(res.data) {
        //         this.setState({ ...res.data }, () => downloadFile('tesserae.html', res.data.html, 'html'))
        //     }
        // })
    }

    render = () => {
        const { siteTitle, canvasContainer } = this.props

        return (
            <div className={'nav-container row'}>
                <div className={'logo col-sm-12 col-md-2'}>{siteTitle}</div>
                <Button.Group className={'col-sm-12 col-md-5'}>
                    <Button onClick={() => console.log(canvasContainer.canvas)} >Test</Button>
                    <Button onClick={() => console.log(JSON.stringify({ mjml: JSON.stringify(this.parseToMJML()) }))} >Test API</Button>
                    <Button onClick={() => console.log(JSON.stringify(this.parseToMJML()))} >Test Engine</Button>
                </Button.Group>
                <div className={'nav-button-group col-sm-12 col-md-5'}>
                    <Button icon={'download'} onClick={this.downloadContent} shape={'circle'}></Button>
                    <Button icon={'upload'} onClick={() => alert('TODO')} shape={'circle'}></Button>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    canvasContainer: state.canvasContainer
})

export default connect(
    mapStateToProps,
    null
)(Header)
