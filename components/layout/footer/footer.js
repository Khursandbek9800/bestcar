import styles from "../../../styles/footer/footer.module.scss";
import Facebookteamdefult1 from "../../../public/vectorIcons/facebookteamdefult1";
import Instagramteamdefult1 from "../../../public/vectorIcons/instagramteamdefult1";
import Twittertamdefult1 from "../../../public/vectorIcons/twittertamdefult1";
import Linkdteamdefult1 from "../../../public/vectorIcons/linkdteamdefult1";
import IconYoutube1 from "../../../public/vectorIcons/IconYoutube1";
import {Link} from "react-scroll"


export default function Footer({func1, func2, func3, func4, func5, func6, func7}) {
    const youTube = () => {
        // window.location.href = "https://youtu.be/CRtB7DZJqHk";
        window.open("https://youtu.be/CRtB7DZJqHk");

    }
    const instaGram = () => {
        // window.location.href = "https://youtu.be/CRtB7DZJqHk";
        window.open("https://youtu.be/CRtB7DZJqHk");

    }
    const faceBook = () => {
        // window.location.href = "https://youtu.be/CRtB7DZJqHk";
        window.open("https://youtu.be/CRtB7DZJqHk");

    }
    const twitTer = () => {
        // window.location.href = "https://youtu.be/CRtB7DZJqHk";
        window.open("https://youtu.be/CRtB7DZJqHk");

    }
    const linkedIn = () => {
        // window.location.href = "https://youtu.be/CRtB7DZJqHk";
        window.open("https://youtu.be/CRtB7DZJqHk");

    }
    return (
      <div className={styles.wrapper}>
        <div className={styles.row}>
          <div className={styles.icon}>
            <div className={styles.iconIn} onClick={faceBook}>
                <Facebookteamdefult1 />
            </div>
            <div className={styles.iconIn} onClick={instaGram}>
                <Instagramteamdefult1 />
            </div>
            <div className={styles.iconIn} onClick={twitTer}>
                <Twittertamdefult1/>
            </div>
            <div className={styles.iconIn} onClick={linkedIn}>
                <Linkdteamdefult1/>
            </div>
            <div className={styles.iconIn} onClick={youTube}>
                <IconYoutube1/>
            </div>
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.title}>
            <div className={styles.titles}>Quick Links</div>
          </div>
          <div className={styles.link}>
            <div className={styles.links}>
                <Link activeClass="active"
                      to="section-1"
                      spy={true}
                      smooth={true}
                      offset={-50}
                      duration={500}
                      delay={100}
                      isDynamic={true}
                      ignoreCancelEvents={false}
                >
                Home
                </Link>
            </div>

            <div className={styles.links}>
                <Link activeClass="active"
                      to="section-2"
                      spy={true}
                      smooth={true}
                      offset={-50}
                      duration={500}
                      delay={100}
                      isDynamic={true}
                      ignoreCancelEvents={false}
                >
                    Services
                </Link>
                </div>
              <div className={styles.links}>
                  <Link activeClass="active"
                        to="section-3"
                        spy={true}
                        smooth={true}
                        offset={-50}
                        duration={500}
                        delay={100}
                        isDynamic={true}
                        ignoreCancelEvents={false}
                  >
                      Projects
                  </Link>
              </div>
              <div className={styles.links}>
                  <Link activeClass="active"
                        to="section-4"
                        spy={true}
                        smooth={true}
                        offset={-50}
                        duration={500}
                        delay={100}
                        isDynamic={true}
                        ignoreCancelEvents={false}
                  >
                      Technologies
                  </Link>
              </div>
              <div className={styles.links}>
                  <Link activeClass="active"
                        to="section-5"
                        spy={true}
                        smooth={true}
                        offset={-50}
                        duration={500}
                        delay={100}
                        isDynamic={true}
                        ignoreCancelEvents={false}
                  >
                      Clients
                  </Link>
              </div>
              <div className={styles.links}>
                  <Link activeClass="active"
                        to="section-6"
                        spy={true}
                        smooth={true}
                        offset={-50}
                        duration={500}
                        delay={100}
                        isDynamic={true}
                        ignoreCancelEvents={false}
                  >
                      Team
                  </Link>
              </div>
              <div className={styles.links}>
                  <Link activeClass="active"
                        to="section-7"
                        spy={true}
                        smooth={true}
                        offset={-50}
                        duration={500}
                        delay={100}
                        isDynamic={true}
                        ignoreCancelEvents={false}
                  >
                      Contact
                  </Link>
              </div>
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.title}>
            <div className={styles.titles}>Service</div>
          </div>
          <div className={styles.link}>
            <div className={styles.links}>Web Development</div>
            <div className={styles.links}>App Development</div>
            <div className={styles.links}>Enterprise Software</div>
            <div className={styles.links}>UI/UX design</div>
            <div className={styles.links}>SEO and Marketing</div>
            <div className={styles.links}>IT Consulting</div>
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.title}>
            <div className={styles.titles}>Contact us</div>
          </div>
          <div className={styles.link}>
            <div className={styles.links}>
                <div className={styles.linksIn}>UAE</div>

            </div>
            <div className={styles.links}>

                <div className={styles.linksIn}>+#########</div>
            </div>
            <div className={styles.links}>
                ]
                <div className={styles.linksIn}>####@###.##</div>
            </div>
          </div>
        </div>
      </div>
    );
}
