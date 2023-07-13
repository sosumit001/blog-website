
import PropTypes from 'prop-types'

const Blogswitch = (props) => {

    const {active,setContent,setActive,value,content,buttonAct} = props

    // const [blogContent,setContent] = useState(value)
    // const [acitve,setActive] = useState('button4')

    const handleActive = (currentActive,content) => {
        setActive(currentActive)
        setContent(content)
      }
    return (
        <span
        onClick={()=>{handleActive(buttonAct,content)}}
        style = {buttonAct === active?
        { background:'var(--light-orange)',color:'black' }
        :
        { background:'white',color:'black'}
      }
        >
          {value}
        </span>
    )
}

Blogswitch.propTypes = {
    active: PropTypes.string.isRequired,
    setContent: PropTypes.func.isRequired,
    setActive: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired,
    content:PropTypes.elementType.isRequired,
    buttonAct:PropTypes.string.isRequired
  };

export default Blogswitch