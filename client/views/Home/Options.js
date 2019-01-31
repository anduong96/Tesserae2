import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Container, Draggable } from 'react-smooth-dnd'
import { OptionComponents } from './EmailComponents'
import { optionDragStart, optionDragEnd } from '../../store/Options/actions';

export class Options extends Component {
    onDragStart = ({ payload }) => this.props.optionDragStart(payload.name || null)

    onDragEnd = () => this.props.optionDragEnd()

    render() {
        const { emailComponents, userSelect } = this.props

        return (
            <div className={'options-wrapper'} >
                <Container
                    behaviour="copy"
                    shouldAcceptDrop={() => false}
                    getChildPayload={index => emailComponents[index]}
                    onDragStart={this.onDragStart}
                    onDragEnd={this.onDragEnd}
                    className={'options-container'}
                >
                    {emailComponents.map((configurations, index) => (
                        <Draggable key={index}>
                            <div className="draggable-item">
                                <OptionComponents userSelect={userSelect} {...configurations} />
                            </div>
                        </Draggable>
                    ))}
                </Container>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    emailComponents: state.Imutables.builder.components,
    userSelect: state.Options.userSelect
})

const mapDispatchToProps = (dispatch) => ({
    ...bindActionCreators({
        optionDragStart,
        optionDragEnd
    }, dispatch),
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Options)
