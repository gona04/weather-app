import cloudsAndSun from "../assests/clouds-and-sun.png";

const Header = () => {
  return (
    <header className="article-header">
      <img
        src={cloudsAndSun}
        alt="Clouds and Sun Logo"
        height="50"
        width="50"
      />
      <h1>Weather Me</h1>
    </header>
  );
};

export default Header;
