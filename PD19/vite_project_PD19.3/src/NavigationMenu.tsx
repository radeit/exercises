import { Link } from 'react-router-dom';

function NavigationMenu() {
    // CSS stilius komponentui
    const navStyle = {
      backgroundColor: '#f0f0f0', // Fono spalva
      padding: '10px 20px', // Pagalvėlės
    };
  
    const ulStyle = {
      listStyleType: 'none', // Panaikiname sąrašo ženklelius
      padding: 0, // Panaikiname pagalvėles
      margin: 0, // Panaikiname tarpus
    };
  
    const liStyle = {
      display: 'inline', // Elementai eilėje
      marginRight: '20px', // Tarpas tarp elementų
    };
  
    const linkStyle = {
      textDecoration: 'none', // Panaikiname pabraukimus
      color: 'black', // Nuorodos spalva
    };
  
    return (
      <nav style={navStyle}>
        <ul style={ulStyle}>
          <li style={liStyle}>
            <Link to="/" style={linkStyle}>Pagrindinis</Link>
          </li>
          <li style={liStyle}>
            <Link to="/about" style={linkStyle}>Apie mus</Link>
          </li>
          <li style={liStyle}>
            <Link to="/contacts" style={linkStyle}>Kontaktai</Link>
          </li>
        </ul>
      </nav>
    );
  }
  
  export default NavigationMenu;
