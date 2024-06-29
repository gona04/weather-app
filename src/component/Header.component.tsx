import cloudsAndSun from "../assests/clouds-and-sun.png";

const Header = () => {
  return (
    <header className="article-header" aria-label="Main header" tabIndex={1}>
      <img
        src={cloudsAndSun}
        tabIndex={2}
        alt="Clouds and Sun Logo"
        height="50"
        width="50"
      />
      <h1 aria-label="Application name weather app" tabIndex={3}>
        Weather App
      </h1>
    </header>
  );
};

export default Header;
