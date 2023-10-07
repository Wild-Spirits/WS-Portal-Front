import React from 'react'
import logo from './logo.jpg'

const BottomBar = () => {
  return (
    <footer style={{position:"absolute", bottom:"0"}}>
      <a href='/'>
        <img src={logo} alt='logoWS' style={{width:"2.6rem"}} />
      </a>
    </footer>
 )
}
export default BottomBar