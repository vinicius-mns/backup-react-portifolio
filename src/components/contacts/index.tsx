import './style.css'

// interface Props extends React.Component {
//   resolve: 'inIntro' | 'inNavBar'
// }

export default function Contacts({resolve}: any ) {
  return (
    <div className={`contacts ${resolve}`}>
      <a href="https://www.linkedin.com/in/vinicius-dev-junior/" target='blank'>
        <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="linkedin" />
      </a>
      <a href="https://github.com/vinicius-mns" target='blank'>
        <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="github" />
      </a>
    </div>
  )
}