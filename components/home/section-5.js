import React from 'react';
import styles from "../../styles/home/section5.module.scss";
import Image from "next/image";

function Section5(props) {
    return (
        <div className={styles.wr} id="section-5">
             <div className={styles.ourProjects}>Our Projects</div>
            <div className={styles.wrapper}>

                <div className={styles.left}>
                    <Image
                        className={styles.land}
                        alt={"picture"}
                        layout={"fill"}
                        objectFit={"cover"}
                        objectPosition={"center"}
                        src={'/logistics3.jpg'}
                    >
                    </Image>
                    <div className={styles.flex1}>
                        <div className={styles.title1}>
                            We're international exporters
                        </div>
                        <div className={styles.zig}>

                        </div>
                        <div className={styles.text}>
                            Our company always with you
                        </div>
                    </div>
                </div>
                <div className={styles.right}>
                    <div className={styles.right1}>
                        <Image
                            className={styles.land}
                            alt={"picture"}
                            layout={"fill"}
                            objectFit={"cover"}
                            objectPosition={"center"}
                            src={'/logistics1.jpg'}
                        >
                        </Image>
                        <div className={styles.flex2}>
                            <div className={styles.title2}>
                               Shipping by car is also aviable
                            </div>
                            <div className={styles.zig}>

                            </div>
                        </div>
                    </div>
                    <div className={styles.right2}>
                        <Image
                            className={styles.land}
                            alt={"picture"}
                            layout={"fill"}
                            objectFit={"cover"}
                            objectPosition={"center"}
                            src={'/car7.jpg'}
                        >
                        </Image>
                        <div className={styles.flex3}>
                            <div className={styles.title3}>
                                Shipping by Shipping only with us
                            </div>
                            <div className={styles.zig}>
                            </div>
                        </div>
                        <div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Section5;