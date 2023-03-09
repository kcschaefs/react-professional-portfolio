import NavigationBar from "./Nav";
import '../assets/css/Header.css';

function Header(props) {
  return (
    <div>
      <NavigationBar page={props.page} />
    </div>
  );
}

export default Header;