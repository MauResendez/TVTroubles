import React from 'react'
import ReactPlayer from 'react-player'
import { Row, Col } from 'reactstrap'

function ResponsivePlayer(props) {
    return (
        <Row>
            <Col sm={{ size: 12, offset: 2 }}>
                <ReactPlayer
                    url={props.url}
                    controls={true}
                />
            </Col>
        </Row>

    )
}

export default ResponsivePlayer