import styles from "../../../styles/header/header.module.scss";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faBars} from '@fortawesome/free-solid-svg-icons'
import {Link} from "react-scroll"
import {useState} from "react";


export default function Header({onPress1, bool1}) {
    const stylesMain = {
        display: `${bool1 ? "block" : "none"}`,
        position: "fixed",
        top: "0px",
        height: "100vh",
        width: "100%",
        zIndex: "100",
        background: "rgba(0,0,0,0.5)"
    }
    const [link,setLink] = useState('home')
    return (
        <div>
            <div style={stylesMain} onClick={() => onPress1(!bool1)}/>
            <div className={styles.wr}>
                <div className={styles.tog}>
                    <Link activeClass="active"
                              to="section-1"
                              spy={true}
                              smooth={true}
                              offset={0}
                              duration={500}
                              delay={100}
                              isDynamic={true}

                              ignoreCancelEvents={false}

                        >
                            <div className={styles.brand}> </div>
                        </Link>

                    <div className={styles.bars} onClick={() => onPress1(!bool1)}>
                        <FontAwesomeIcon icon={faBars}/>
                    </div>
                </div>
                <div className={styles.wrapper}>
                    <Link activeClass="active"
                          to="section-1"
                          spy={true}
                          smooth={true}
                          offset={0}
                          duration={500}
                          delay={100}
                          isDynamic={true}

                          ignoreCancelEvents={false}

                    >
                        <div className={styles.brand}> </div>
                    </Link>
                    <div className={styles.links}>
                        <Link activeClass="active"
                              to="section-1"
                              spy={true}
                              smooth={true}
                              className={`${styles.link} ${link === 'home' ? styles.another : ""}`}
                              offset={0}
                              duration={500}
                              delay={100}
                              isDynamic={true}
                              onSetActive={() => setLink('home')}
                              ignoreCancelEvents={false}
                              id="asosiyLink"
                        >
                            Home
                        </Link>
                        <Link activeClass="active"
                              to="section-2"
                              spy={true}
                              smooth={true}
                              className={`${styles.link} ${link === 'services' ? styles.another : ""}`}
                              offset={0}
                              duration={500}
                              delay={100}
                              isDynamic={true}
                              onSetActive={() => setLink('services')}
                              ignoreCancelEvents={false}
                              id="asosiyLink"
                        >
                            Services
                        </Link>
                        <Link activeClass="active"
                              to="section-3"
                              spy={true}
                              smooth={true}
                              className={`${styles.link} ${link === 'projects' ? styles.another : ""}`}
                              offset={0}
                              duration={500}
                              delay={100}
                              isDynamic={true}
                              onSetActive={() => setLink('projects')}
                              ignoreCancelEvents={false}
                              id="asosiyLink"
                        >
                            Blog
                        </Link>
                        <Link activeClass="active"
                              to="section-4"
                              spy={true}
                              smooth={true}
                              className={`${styles.link} ${link === 'technologies' ? styles.another : ""}`}
                              offset={0}
                              duration={500}
                              delay={100}
                              isDynamic={true}
                              onSetActive={() => setLink('technologies')}
                              ignoreCancelEvents={false}
                              id="asosiyLink"
                        >
                            About
                        </Link>
                        <Link activeClass="active"
                              to="section-5"
                              spy={true}
                              smooth={true}
                              className={`${styles.link} ${link === 'client' ? styles.another : ""}`}
                              offset={0}
                              duration={500}
                              delay={100}
                              isDynamic={true}
                              onSetActive={() => setLink('client')}
                              ignoreCancelEvents={false}
                              id="asosiyLink"
                        >
                            Projects
                        </Link>
                        <Link activeClass="active"
                              to="section-6"
                              spy={true}
                              smooth={true}
                              className={`${styles.link} ${link === 'Team' ? styles.another : ""}`}
                              offset={0}
                              duration={500}
                              delay={100}
                              isDynamic={true}
                              onSetActive={() => setLink('Team')}
                              ignoreCancelEvents={false}
                              id="asosiyLink"
                        >
                            Contact
                        </Link>

                    </div>
                </div>
            </div>
        </div>
    );
}
