import cloudsAndSun from "../assests/clouds-and-sun.png";
const Header = () => {
  return (
    <header className="article-header">
      <img src={cloudsAndSun} alt="logo" height="50rem" width="50rem" />
      <h1> Weather Me </h1>
    </header>
  );
};

export default Header;
