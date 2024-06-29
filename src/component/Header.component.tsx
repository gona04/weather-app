import cloudsAndSun from "../assests/clouds-and-sun.png";

const Header = () => {
  return (
    <header className="article-header" aria-label="Main header">
      <img
        src={cloudsAndSun}
        alt="Clouds and Sun Logo"
        height="50"
        width="50"
      />
      <h1 aria-label="Application name weather app">Weather App</h1>
    </header>
  );
};

export default Header;
