import React from 'react'

const Picture = (props) => (
  <div className={`image-${props.id}`}>
    <a href={props.source} style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flex: '1'
    }}>
      <img
        alt="reddit/r/wallpapers"
        src={props.thumbnail}
        style={{
          width: '100%'
        }}
      />
    </a>
  </div>
)

export default Picture