import styles from "./BottomBar.module.css";
import { Home, Search, Settings } from "@mui/icons-material";
const BottomBar = () => {
  return (
    <div className={styles.bottombar}>
      <ul>
        <li onClick={() => console.log("test")}>
          <Home />
        </li>
        <li onClick={() => console.log("search")}>
          <Search />
        </li>
        <li onClick={() => console.log("setting")}>
          <Settings />
        </li>
      </ul>
    </div>
  );
};
export default BottomBar;
