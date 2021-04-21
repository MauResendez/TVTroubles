import React from 'react'
import ReactPlayer from 'react-player'
import { Row, Col } from 'reactstrap'

function ResponsivePlayer() {
    return (
        <Row>
            <Col sm={{ size: 12, offset: 2 }}>
                <ReactPlayer
                    url="https://www.youtube.com/watch?v=rJZ0eqyZEHg&ab_channel=TheHill"
                    controls={true}
                />
</Col>
</Row>

    )
}

export default ResponsivePlayer