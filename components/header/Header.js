import Image from "next/image";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header id="header" className={styles.header}>
      <Image src="/assets/images/logo.webp" width={80} height={80} alt="" />
    </header>
  );
};
export default Header;
