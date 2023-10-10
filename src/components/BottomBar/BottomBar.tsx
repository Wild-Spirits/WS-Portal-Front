import React from 'react'

const BottomBar = () => {
  return (
    <footer style={{position:"absolute", bottom:"0"}}>
      <a href='/'>
      <span dangerouslySetInnerHTML={{ "__html": "&copy;" }} />
        Wild Spirits
      </a>
    </footer>
 )
}
export default BottomBar