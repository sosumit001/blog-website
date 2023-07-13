import profile_image from './assets/profile_image.png'

import './App.css'

function App() {


  return (
   
    <div  className="app-container">
      <div className="image-container">
        <img src={profile_image} alt="" />
        <span>Hi, This is Sumit So</span>
      </div>
      <div className="about-container">
        <p>about me</p>
        <div>
        Web developer passionate about creating websites. Enthusiastic about <span>ReactJS, GraphQL, MongoDB, WebAssembly, and Rust.</span> Love sharing discoveries and new ways of doing things. Letss build something amazing together!
        </div>
      </div>
    </div>

  )
}

export default App
