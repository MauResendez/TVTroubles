import React from 'react'
import ReactPlayer from 'react-player'

const ResponsivePlayer = () => {
    return (
        <div className = "player-wrapper">
            <ReactPlayer
                className = "react-player"
                url = "https://www.youtube.com/watch?v=hgXozesA204"
                width = "20%"
                height = "50%"
                controls = {true}
            />/
        </div>
    ) 
}

export default ResponsivePlayer