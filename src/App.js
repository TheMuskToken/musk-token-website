import logo from './images/logo.svg';
import styles from './App.module.scss';
import hcbgImage from './images/bg.png'
import { FaExternalLinkSquareAlt, FaTwitter } from 'react-icons/fa'

function App() {
  return (
    <div
        class="bg_image"
        style={{
          backgroundImage: 'url('+hcbgImage+')',
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          width: "100%",
          height: "950px"
        }}>
        <div className={styles.contentContainer}>
          <div className={styles.title}>
            <img
                src={logo}
                height="50"
                width="100%"
                className="d-inline-block align-top"
                alt="logo"
                />
          </div>
          <div className={styles.tag}>Inspired from the Ultimate Living Legend</div>
          <a className={styles.twitterContainer}>
            <FaTwitter />
            <a href="https://twitter.com/themusktoken" target="_blank">@TheMuskToken</a>
          </a>
          <div className={styles.text}>Community driven MEME + NFT + DeFi Ecosystem</div>
          <a href="https://info.uniswap.org/token/0x32ba720a38dcd3a9d4c04aa398f4d7e65a7547f5" target="_blank" className={styles.uniswapLink}>View Pair on Uniswap</a>
          <div className={styles.footerEmail}>muskmemetoken@gmail.com</div>
        </div>
    </div>
  );
}

export default App;
