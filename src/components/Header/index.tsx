import logo from '../../assets/imgs/logo.svg'
import styles from './styles.module.css';

export function Header() {
  return (
    <div className={styles.containerHeader}>
      <img src={logo} alt="logo" />
    </div>
  );
}