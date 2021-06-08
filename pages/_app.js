import '../styles/globals.css'
import '../styles/general.scss'
// import '../styles/home/drag.module.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, {useState, useEffect} from 'react';
import {css} from "@emotion/core";
import Head from "next/head";
import {useMediaQuery} from 'react-responsive';
import {RingLoader} from "react-spinners";




function MyApp({Component, pageProps}) {
    const [bool, setBool] = useState("1200")
    const query1 = useMediaQuery({query: '(max-width: 990px)'});
    const query2 = useMediaQuery({query: '(max-width: 600px)'});
    useEffect(() => {
        if (query1){
            setBool("990")
        }
        if (query2){
            setBool("600")
        }
    })
    const style = {
        size: bool === "600" ? 50 : bool === "990" ? 100 : 150
    }
    const override = css`
  display: block;
  margin: 300px auto;
  border-color: red;
  }
`;
    const [spinner, setSpinner] = useState(true);

    useEffect(() => {
        setTimeout(() => setSpinner(false), 3000)
    }, []);

    return (

        spinner ? <div className="center">
                <RingLoader color={"#E8ECE4"} loading={true} css={override} size={style.size}/></div> :
            <>
                <Head>
                    <link
                        rel="stylesheet"
                        href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css"
                        integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l"
                        crossOrigin="anonymous"
                    />

                    <link rel="stylesheet"
                          href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
                          integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
                          crossOrigin="anonymous"></link>
                    <link
                        rel="stylesheet"
                        href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"
                        crossOrigin="anonymous"
                    />
                    <title>cardubai.com</title>
                    <link rel="shortcut icon" href="/car2.jpg" />
                </Head>
                <Component {...pageProps}/>
            </>
    )
}

export default MyApp
