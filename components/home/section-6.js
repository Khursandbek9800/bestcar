import styles from "../../styles/home/section6.module.scss";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";


import {Map} from "react-yandex-maps";
import Ymap from "./map";
import {faLocationArrow} from "@fortawesome/free-solid-svg-icons";
import Location from "../../public/vectorIcons/location";
import EmailIcon from "../../public/vectorIcons/emailIcon";
import PhoneIcon from "../../public/vectorIcons/phoneIcon";
import Facebookteamdefult1 from "../../public/vectorIcons/facebookteamdefult1";
import Instagramteamdefult1 from "../../public/vectorIcons/instagramteamdefult1";
import Twittertamdefult1 from "../../public/vectorIcons/twittertamdefult1";

export default function Section6() {
    const instaGram = () => {
        // window.location.href = "https://youtu.be/CRtB7DZJqHk";
        window.open("https://www.instagram.com/abdu_0303/");

    }
    const faceBook = () => {
        // window.location.href = "https://youtu.be/CRtB7DZJqHk";
        window.open("https://youtu.be/CRtB7DZJqHk");

    }
    const twitTer = () => {
        // window.location.href = "https://youtu.be/CRtB7DZJqHk";
        window.open("https://youtu.be/CRtB7DZJqHk");

    }
    const sendMail = () => {
        window.location.href = "mailto:Intelligence8686@gmail.com?subject=Car exportation";
    }
  return (
    <div className={styles.wrapper} id="section-6">
        <div className={styles.contact}>Our Contacts</div>
        <Ymap/>

            <div className={styles.left}>
                <div className={styles.inner}>
                    <div className={styles.title}>
                        Contact us
                    </div>
                    <div className={styles.htitle}>
                        Headquarters
                    </div>
                    <div className={styles.adress}>
                        <div className={styles.contactIcon}>
                            <Location/>
                        </div>
                        <div className={styles.text}>
                            3088 Elm Dubai Al-Hafij St. City Tower 2. Floor 45th
                        </div>
                    </div>
                    <div className={styles.adress}>
                        <div className={styles.contactIcon}>
                            <EmailIcon/>
                        </div>
                        <div className={styles.text}>

                            <div className={styles.email}
                                 onClick={sendMail}
                            >
                                Intelligence8686@gmail.com
                            </div>
                        </div>
                    </div>
                    <div className={styles.adress}>
                        <div className={styles.contactIcon}>
                            <PhoneIcon/>
                        </div>
                        <div className={styles.text}>
                            <a className={styles.phoneNumber} href="tel:+971559960303">+971 55 996 0303</a>
                        </div>
                    </div>
                    <div className={styles.htitle}>
                        Social networks
                    </div>
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
                    </div>
                </div>


            </div>
            <div className={styles.footer}>
                Copyright &copy; 2021 cardubai. All Rights Reserved.
            </div>
        </div>

  );
}
