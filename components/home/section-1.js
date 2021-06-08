import React from 'react';
import styles from "../../styles/home/section1.module.scss";
import {Link} from "react-scroll";

function Section1(props) {
    return (
        <div className={styles.wrapper} id="section-1">
            <div className={styles.overlay}>
                <div className={styles.container}>
                    <div className={styles.content}>
                        <div className={styles.title}>
                           One Of The Leading Car Exporters In Dubai
                        </div>
                        <div className={styles.text}>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam culpa eum exercitationem facere facilis incidunt libero
                        </div>
                        <div className={styles.btn}>
                            <Link activeClass="active"
                                  to="section-6"
                                  spy={true}
                                  smooth={true}
                                  offset={0}
                                  duration={1000}
                                  delay={100}
                                  isDynamic={true}
                                  ignoreCancelEvents={false}
                                  id="contactpage"
                            >
                                Contact Us
                            </Link>

                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Section1;