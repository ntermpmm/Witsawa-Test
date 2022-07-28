import React from "react";
import { Link } from "react-router-dom";
import PersonalInfo from "../components/PersonalInfo";

import profile from "../asset/images/profile.jpg";

import downloadicon from "../asset/images/downloadicon.png";
import social from "../asset/images/social.png";

import flag from "../asset/images/flag.png";
import graduate from "../asset/images/graduate.png";
import schoolBag from "../asset/images/schoolBag.png";
import navi from "../asset/images/navi.png";
import ears from "../asset/images/ears.png";
import pans from "../asset/images/pans.png";

import clock from "../asset/images/clock.png";
import peace from "../asset/images/peace.png";
import settings from "../asset/images/settings.png";
import PersonalLink from "../components/PersonalLink";
import PersonalDescription from "../components/PersonalDescription";

function Test02() {
    const personalInfo = [
        {
            title: "NAME",
            detail: "Thawin Kuwattananon",
        },
        {
            title: "BIRTH DATE",
            detail: "10/01/1995",
        },
        {
            title: "ADDRESS",
            detail: "222 Ngam laksi tungsong BKK Thailand 10210",
        },
        {
            title: "PHONE",
            detail: "+66 95 294 6993",
        },
        {
            title: "EMAIL",
            detail: "thawin.kuwa@gmail.com",
        },
    ];

    const personalLinks = [
        {
            img: flag,
            title: "HOME",
            bgColor: "#54BA9D",
        },
        {
            img: graduate,
            title: "RESUME",
            bgColor: "#4099D9",
        },
        {
            img: schoolBag,
            title: "PORTFOLIO",
            bgColor: "#A45EB6",
        },
        {
            img: navi,
            title: "CONTACTS",
            bgColor: "#EF8535",
        },
        {
            img: ears,
            title: "FEEDBACK",
            bgColor: "#EC5946",
        },
        {
            img: pans,
            title: "BLOG",
            bgColor: "#E1AB3A",
        },
    ];

    const personalDescriptions = [
        {
            img: clock,
            title: "MODERN",
            description:
                "Lorem ipsum dolor sit amet,consectetur adipiscing elit. Maecenas sit amet hendrerit dolor,at lacinia mi.",
        },
        {
            img: peace,
            title: "SIMPLE CV",
            description:
                "Curabitur sit amet laoreet leo. Maecenas eget pulvinar arcu. Quisque fermentum nulla non urna placerat.",
        },
        {
            img: settings,
            title: "RESPONSIVE",
            description:
                "Sed scelerisque elit eget eros consectetur varius. Suspendisse laoreet rhoncus pellentesque.",
        },
    ];

    return (
        <>
            <div style={{ width: "100%", height: "100vh" }}>
                {/* ==========================  section1  ============================ */}
                <div className="section1">
                    <div className="img">
                        <img
                            style={{
                                width: "100%",
                                height: "100%",
                                objectFit: "cover",
                            }}
                            src={profile}
                            alt=""
                        />
                    </div>
                    <div className="headerDescription">
                        <div className="headDescription01">
                            <div
                                style={{
                                    fontSize: "32px",
                                    width: "83%",
                                    height: "100%",
                                    padding: "4%",
                                    display: "flex",
                                    alignItems: "center",
                                }}
                            >
                                SAMUEL ANDERSON
                            </div>
                            <div
                                style={{
                                    width: "18.35%",
                                    height: "100%",
                                    backgroundColor: "#454545",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                }}
                            >
                                <img
                                    style={{
                                        objectFit: "cover",
                                        height: "38px",
                                        opacity: "70%",
                                    }}
                                    src={downloadicon}
                                    alt=""
                                />
                            </div>
                        </div>
                        <div className="headDescription02">
                            <div
                                style={{
                                    fontSize: "20px",
                                    width: "83%",
                                    padding: "4%",
                                    display: "flex",
                                    alignItems: "center",
                                }}
                            >
                                <div
                                    style={{
                                        borderRight: "solid ",
                                        padding: "4px",
                                        paddingRight: "8px",
                                    }}
                                >
                                    THE EXPERIENCED UI/UX DESIGNER
                                </div>
                            </div>
                            <div
                                style={{
                                    width: "18.35%",
                                    height: "100%",
                                    backgroundColor: "#383838",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                }}
                            >
                                <img
                                    style={{
                                        objectFit: "cover",
                                        height: "36px",
                                        opacity: "70%",
                                    }}
                                    src={social}
                                    alt=""
                                />
                            </div>
                        </div>
                        <div
                            className="headDescription03"
                            style={{ display: "flex" }}
                        >
                            {personalLinks.map((el, idx) => {
                                return (
                                    <PersonalLink
                                        key={idx}
                                        img={el.img}
                                        title={el.title}
                                        bgColor={el.bgColor}
                                    />
                                );
                            })}
                        </div>
                    </div>
                </div>
                {/* ==========================  section2  ============================ */}
                <div className="section2">
                    <div className="left">
                        <div
                            style={{
                                padding: "50px",
                                display: "flex",
                                flexDirection: "column",
                                gap: "48px",
                            }}
                        >
                            <div className="title">
                                <div style={{ fontSize: "23px" }}>
                                    GRIDUS RESUME HTML TEMPLATE
                                </div>
                                <div
                                    style={{
                                        fontSize: "13px",
                                        color: "#ED5544",
                                    }}
                                >
                                    PERFECT FOR CV / RESUME OR PORTFOLIO WEBSITE
                                </div>
                            </div>
                            <div style={{ display: "flex", gap: "16px" }}>
                                {personalDescriptions.map((el, idx) => {
                                    return (
                                        <PersonalDescription
                                            key={idx}
                                            img={el.img}
                                            title={el.title}
                                            description={el.description}
                                        />
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                    <div className="right">
                        <div style={{ padding: "4% 12%" }}>
                            <div
                                style={{ fontSize: "23px", fontWeight: "800" }}
                            >
                                PERSONAL INFO
                            </div>
                            <div
                                style={{
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: "24px",
                                }}
                            >
                                <div></div>
                                {personalInfo.map((el, idx) => {
                                    return (
                                        <PersonalInfo
                                            key={idx}
                                            title={el.title}
                                            detail={el.detail}
                                        />
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Link to="/">
                <div
                    id="link"
                    style={{
                        padding: "24px",
                        fontSize: "36px",
                        right: "0",
                        left: "0",
                        position: "absolute",
                        backgroundColor: "#54BA9D",
                        // borderRadius: "16px",
                        // marginTop: "24px",
                        textAlign: "center",
                        color: "#fff",
                    }}
                >
                    {"<< Back to Test01"}
                </div>
            </Link>
        </>
    );
}

export default Test02;
