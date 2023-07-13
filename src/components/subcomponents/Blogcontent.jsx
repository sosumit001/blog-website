import PropTypes from 'prop-types';
import '../../styles/Blogcontent.css';
import { Link } from 'react-router-dom';

const Blogcontent = ({ links, heading, description }) => {

  return (
    <div className='blog-project-template'>
      <h3>{heading}</h3>
      <p>{description}</p>
      <h2>Links</h2>
      <ul className="blog-project-links">
        {links.map((item, index) => (
          <li key={index}>
            <Link to={item.to}>{item.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

Blogcontent.propTypes = {
  heading: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  links: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      to: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Blogcontent;
