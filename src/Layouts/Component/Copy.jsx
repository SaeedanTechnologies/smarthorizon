import React from 'react'

const Copy = () => {
    const style = {
        color: 'gray',
        fontWeight: 600,
        textAlign: 'center',
        fontFamily: 'Montserrat, sans- serif'
    }
    return (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', paddingBottom: "20px" }}>
            <p style={style}>Copyright © Smart 2024</p>
            {/* <p style={style}>Privacy and Policy</p> */}
        </div>
    )
}

export default Copy