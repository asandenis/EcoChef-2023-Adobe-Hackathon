import './navbar.css';

const Navbar = () => {
    const navbarStyle = {
      backgroundColor: '#825B86',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '10px',
    };
   
    const logoStyle = {
      maxWidth: '100px', 
      backgroundColor: '#825B86',
    };
  
    const linkStyle = {
      textDecoration: 'none',
      color: '#825B86',
      margin: '0 10px',
      fontSize: '24px',
      padding: '16px',
      backgroundColor: '#D9BDC5',
      borderRadius: '30px',
      fontWeight: 'bold',
    };

    const responsiveLinkStyle = {
        textDecoration: 'none',
        color: '#D9BDC5',
        fontSize: '16px',
        marginBottom: '10px',
      };
  
    return (
      <div style={navbarStyle}>
        <a style={logoStyle} href="/">
        <img src="/images/ecochef_logo.png" alt="Logo" style={logoStyle} />
        </a>

        <div style={{backgroundColor:  '#825B86'}}>
          <a href="/Rewards" style={linkStyle}>Rewards</a>
          <a href="/Recipes" style={linkStyle}>Recipes</a>
          <a href="/Map" style={linkStyle}>Map</a>
          <a href="/Login" style={linkStyle}>Login</a>
        </div>
      </div>
    );
  };
  

export default Navbar;