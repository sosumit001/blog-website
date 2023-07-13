import { useEffect, useState } from 'react'
import {gql} from 'graphql-request'
import graphcms from '../graphcms'

// graph cms
import '../styles/Blog.css'
import loading_svg from '../assets/loader.svg'

import Blogswitch from './subcomponents/Blogswitch'
import Blogcontent from './subcomponents/Blogcontent'

import arrow_right from '../assets/arrow-right.svg'


const QUERY = gql`{
  projects {
    heading
    description
    links {
      ... on Link {
        name
        to
      }
    }
  }
}`

const Blog = () => {

  const [active,setActive] = useState('button1')
  const [content,setContent] = useState(<Blogcontent heading={"loading..."} description={""} />)
  const [ctrSwitch,setCtrSwitch] = useState(false)

  const [data,setData] = useState(null)

  const handleCtrSwitch = () => {
    if(!ctrSwitch) {
      setCtrSwitch(true)
    } else {
      setCtrSwitch(false)
    }
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await graphcms.request(QUERY)
        setData(res)
        setContent(<Blogcontent links={res.projects[0].links} heading={res.projects[0].heading} description={res.projects[0].description} />)
      } catch (err) {
        console.log(err)
      }
    }
    fetchData()
  },[])


  if(!data) return <div className='blog-loading'>
    <img src={loading_svg} alt="loading..." />
  </div>
    return(<>
    <div  className="blog-container">
      <div 
      onClick={handleCtrSwitch}
      className="blog-control-container blog-control-container-mobile"
      style={!ctrSwitch?{
        left:'-260px'
      }:{
        left:'0px'
      }}
      >

        <Blogswitch setContent = {setContent} active = {active} setActive = {setActive} value = "WebAssembly" content = {<Blogcontent links = {data.projects[0].links} heading={data.projects[0].heading} description= {data.projects[0].description} />} buttonAct = 'button1' />
        <Blogswitch setContent = {setContent} active = {active} setActive = {setActive} value = "HTML Canvas" content = {<Blogcontent links = {data.projects[1].links} heading={data.projects[1].heading} description= {data.projects[1].description} />} buttonAct = 'button2' />
        <Blogswitch setContent = {setContent} active = {active} setActive = {setActive} value = "Data Structures" content = {<Blogcontent links = {data.projects[2].links} heading={data.projects[2].heading} description= {data.projects[2].description} />} buttonAct = 'button3' />
        <Blogswitch setContent = {setContent} active = {active} setActive = {setActive} value = {'Projects'} content = "All Website I Ever Created" buttonAct = 'button4' />

        <div 
        className="blog-controller-btn"
        onClick={handleCtrSwitch}
        style={
          !ctrSwitch?{
            left:'280px'
          }:{
            left: '20px'
          }
        }
        >
          <img src={arrow_right} alt="arrow" />
        </div>        
      </div>
      <div className="blog-content-container">
        
          {
            content
          }
        
      </div>
    </div>
    </>

    )
}

export default Blog