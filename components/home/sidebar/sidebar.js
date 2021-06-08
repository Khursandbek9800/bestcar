import styles from "../../../styles/sidebar/sidebar.module.scss";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {
    faDesktop,
    faHome, faObjectGroup,
    faPeopleCarry, faPhone,
    faProjectDiagram,
    faServer,
    faTachometerAlt
} from "@fortawesome/free-solid-svg-icons";
import {useState} from "react";
import {Link} from "react-scroll";

function Sidebar({bool1,onPress1}) {
    const style1 = {
        left:`${bool1 ? "0px": "-100%"}`,
        transition: '1s',

    }
    const Func1 = () => onPress1(!bool1)

    const Func2 = () => {
        onPress1(!bool1)
    }
    const Func3 = () => {
        onPress1(!bool1)
    }
    const Func4 = () => {
        onPress1(!bool1)
    }
    const Func5 = () => {
        onPress1(!bool1)
    }
    const Func6 = () => {
        onPress1(!bool1)
    }
    const Func7 = () => {
        onPress1(!bool1)
    }
    const [link,setLink] = useState('home')


    return (
        <div className={styles.container} style={style1}>
            <div className={styles.left} style={style1}> <div className={styles.links}>
                <div className={styles.link}>
                    <FontAwesomeIcon icon={faHome}/>
                    <Link activeClass="active" onClick={() => Func1()}
                          to="section-1"
                          spy={true}
                          smooth={true}
                          className={`${styles.inner} ${link === 'home' ? styles.another : ""}`}
                          offset={0}
                          duration={500}
                          delay={100}
                          isDynamic={true}
                          onSetActive={() => setLink('home')}
                          ignoreCancelEvents={false}
                    >
                        Home
                    </Link>

                </div>
                <div className={styles.link} >
                    <FontAwesomeIcon icon={faServer}/>
                    <Link activeClass="active"
                          onClick={() => Func2()}
                          to="section-2"
                          spy={true}
                          smooth={true}
                          className={`${styles.inner} ${link === 'services' ? styles.another : ""}`}
                          offset={0}
                          duration={500}
                          delay={100}
                          isDynamic={true}
                          onSetActive={() => setLink('services')}
                          ignoreCancelEvents={false}
                    >
                        Services
                    </Link>
                </div>
                <div className={styles.link} >
                    <FontAwesomeIcon icon={faProjectDiagram} />
                    <Link activeClass="active"
                          onClick={() => Func3()}
                          to="section-3"
                          spy={true}
                          smooth={true}
                          className={`${styles.inner} ${link === 'projects' ? styles.another : ""}`}
                          offset={0}
                          duration={500}
                          delay={100}
                          isDynamic={true}
                          onSetActive={() => setLink('projects')}
                          ignoreCancelEvents={false}
                    >
                        Blog
                    </Link>
                </div>
                <div className={styles.link} >
                    <FontAwesomeIcon icon={faDesktop}/>
                    <Link activeClass="active"
                          to="section-4"
                          onClick={() => Func4()}
                          spy={true}
                          smooth={true}
                          className={`${styles.inner} ${link === 'technologies' ? styles.another : ""}`}
                          offset={0}
                          duration={500}
                          delay={100}
                          isDynamic={true}
                          onSetActive={() => setLink('technologies')}
                          ignoreCancelEvents={false}
                    >
                        About
                    </Link>

                </div>
                <div className={styles.link} >
                    <FontAwesomeIcon icon={faPeopleCarry}/>
                    <Link activeClass="active"
                          onClick={() => Func5()}
                          to="section-5"
                          spy={true}
                          smooth={true}
                          className={`${styles.inner} ${link === 'clients' ? styles.another : ""}`}
                          offset={0}
                          duration={500}
                          delay={100}
                          isDynamic={true}
                          onSetActive={() => setLink('clients')}
                          ignoreCancelEvents={false}
                    >
                       Projects
                    </Link>

                </div>
                <div className={styles.link} >
                    <FontAwesomeIcon icon={faObjectGroup}/>
                    <Link activeClass="active"
                          onClick={() => Func6()}
                          to="section-6"
                          spy={true}
                          smooth={true}
                          className={`${styles.inner} ${link === 'team' ? styles.another : ""}`}
                          offset={0}
                          duration={500}
                          delay={100}
                          isDynamic={true}
                          onSetActive={() => setLink('team')}
                          ignoreCancelEvents={false}
                    >
                        Contact
                    </Link>
                </div>

            </div>
            </div>
            {/*<div className={styles.right} style={style1}></div>*/}

        </div>
    );
}

export default Sidebar;