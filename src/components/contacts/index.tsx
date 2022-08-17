import { useState } from 'react'
import './style.css'

// interface Props extends React.Component {
//   resolve: 'inIntro' | 'inNavBar'
// }

export default function Contacts({resolve}: any ) {
  const [ e, setE ] = useState(false)

  return (
    <div className={resolve}>
      <a href="https://www.linkedin.com/in/vinicius-dev-junior/" target='blank'>
        <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="linkedin" />
      </a>
      <a href="https://github.com/vinicius-mns" target='blank'>
        <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="github" />
      </a>
      <img 
        src="https://cdn-icons-png.flaticon.com/512/561/561127.png"
        alt="Email"
        onClick={() => setE( true )}
      />
      { e && 
        <div className='email' onMouseLeave={() => setE( false )}>
          <p onClick={() => setE( false )}>X</p>
          <h2>
            vinicius_dev@hotmail.com
          </h2>
        </div>
      }
    </div>
  )
}