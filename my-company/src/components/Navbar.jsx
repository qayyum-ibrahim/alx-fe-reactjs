import { Link } from 'react-router-dom';

function Navbar() {
  const navStyle = {
    display: 'flex',
    gap: '15px',
    padding: '10px 20px',
    backgroundColor: '#222',
    color: 'white',
  };

  const linkStyle = {
    color: 'white',
    textDecoration: 'none',
  };

  return (
    <nav style={navStyle}>
      <Link style={linkStyle} to="/">Home</Link>
      <Link style={linkStyle} to="/about">About</Link>
      <Link style={linkStyle} to="/services">Services</Link>
      <Link style={linkStyle} to="/contact">Contact</Link>
    </nav>
  );
}

export default Navbar;
