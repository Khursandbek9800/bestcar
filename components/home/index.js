import Section1 from "./section-1";
import Section2 from "./section-2";
import Section3 from "./section-3";
import Section4 from "./section-4";
import Section6 from "./section-6";
import Header from "../layout/header/header";
import {useEffect, useRef, useState} from "react";
import styles from "../../styles/Home.module.css"

import window from "global/window";
import Sidebar from "./sidebar/sidebar";
import CarTopview from "../../public/vectorIcons/carTopview";
import Section5 from "./section-5";


export default function Home() {

    const linkToTop = useRef(null);

    const [bool, setBool] = useState(false);

    function getPageYOffSet() {
        if (window !== undefined) {
            return window.pageYOffset;
        } else {
            return 0;
        }
    }

    const [offTop, setOffTop] = useState(getPageYOffSet());

    useEffect(() => {
        if (window !== undefined) {
            window.addEventListener("scroll", handleScroll);
        }
        return () => {
            if (window !== undefined) {
                window.removeEventListener("scroll", handleScroll);
            }
        };
    }, []);

    function handleScroll() {
        setOffTop(getPageYOffSet);
    }
    const onScrollToTop = () =>{
        linkToTop.current.scrollIntoView({
            behavior: "smooth",
        });
    }
    return (
        <div>
            <Sidebar bool1={bool}
                     onPress1 = {setBool}
            />
            <a href="top" ref={linkToTop}/>
            <Header
                    onPress1 = {setBool}
                    bool1={bool}
            />
            <Section1/>
            <Section2/>
            <Section3/>
            <Section4/>
            <Section5/>
            <Section6/>
            <div onClick={onScrollToTop}
                 className={styles.scroll}
                 style={{
                     display: `${offTop > 400 ? "flex" : "none"}`
                 }}
            >
              <CarTopview/>
            </div>
        </div>
    );
}
