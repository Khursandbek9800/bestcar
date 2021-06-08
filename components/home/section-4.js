import React from 'react';
import styles from '../../styles/home/section4.module.scss'
import Car from "../../public/vectorIcons/car";
import Bmw from "../../public/vectorIcons/bmw";
import {Link} from "react-scroll";
function Section4(props) {
    return (
        <div className={styles.wrapper} id='section-4'>
          <div className={styles.container}>
            <div className={styles.header}>
                <div className={styles.hTitle}>Control Your Car-Buying Experience</div>
                <div className={styles.hText}>At CarDubai, you're in charge of the process from start to finish. Here is how.</div>
            </div>
              <div className={styles.content}>
                  <div className={styles.left}>
                    <Car/>
                  </div>
                  <div className={styles.right}>
                      <div className={styles.title}>
                          Build Your Deal With Confidence
                      </div>
                      <div className={styles.text}>
                          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad alias animi corporis eaque eius esse expedita facilis fugit id, iusto labore odit perferendis, quam soluta ut veniam!
                      </div>
                      <div className={styles.lists}>
                          <div className={styles.list}>
                              <div className={styles.icon}> <Bmw/></div>
                              <div className={styles.lTitle}>BMW <span>(12)</span></div>
                          </div>
                          <div className={styles.list}>
                              <div className={styles.icon}> <Bmw/></div>
                              <div className={styles.lTitle}>BMW <span>(12)</span></div>
                          </div>
                          <div className={styles.list}>
                              <div className={styles.icon}> <Bmw/></div>
                              <div className={styles.lTitle}>BMW <span>(12)</span></div>
                          </div>
                      </div>
                      <div className={styles.lists}>
                          <div className={styles.list}>
                              <div className={styles.icon}> <Bmw/></div>
                              <div className={styles.lTitle}>BMW <span>(12)</span></div>
                          </div>
                          <div className={styles.list}>
                              <div className={styles.icon}> <Bmw/></div>
                              <div className={styles.lTitle}>BMW <span>(12)</span></div>
                          </div>
                          <div className={styles.list}>
                              <div className={styles.icon}> <Bmw/></div>
                              <div className={styles.lTitle}>BMW <span>(12)</span></div>
                          </div>
                      </div>

                      <div className={styles.btn}>
                          <Link activeClass="active"
                                to="section-6"
                                spy={true}
                                smooth={true}
                                offset={0}
                                duration={600}
                                delay={100}
                                isDynamic={true}
                                ignoreCancelEvents={false}
                                id="contactpage"
                          >
                              Contact With Us
                          </Link>
                      </div>
                  </div>
              </div>
          </div>
        </div>
    );
}

export default Section4;