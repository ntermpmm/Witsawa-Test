import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Test01() {
    const countries_EU = [
        "Albania",
        "Andorra",
        "Armenia",
        "Austria",
        "Azerbaijan",
        "Belarus",
        "Belgium",
        "Bosnia and Herzegovina",
        "Bulgaria",
        "Croatia",
        "Cyprus",
        "Czech Republic",
        "Denmark",
        "Estonia",
        "Finland",
        "France",
        "Georgia",
        "Germany",
        "Greece",
        "Hungary",
        "Iceland",
        "Ireland",
        "Italy",
        "Kosovo",
        "Latvia",
        "Liechtenstein",
        "Lithuania",
        "Luxembourg",
        "Macedonia",
        "Malta",
        "Moldova",
        "Monaco",
        "Montenegro",
        "The Netherlands",
        "Norway",
        "Poland",
        "Portugal",
        "Romania",
        "Russia",
        "San Marino",
        "Serbia",
        "Slovakia",
        "Slovenia",
        "Spain",
        "Sweden",
        "Switzerland",
        "Turkey",
        "Ukraine",
        "UK",
        "Vatican City",
    ];

    const [data, setData] = useState([]);
    // const [countries, setCountries] = useState([]);
    useEffect(() => {
        const api = async () => {
            try {
                const res = await axios.get(
                    "https://gist.githubusercontent.com/ak1103dev/2c6c1be69300fa0717c62b9557e40e75/raw/0dc78ed8783f4c54345ee3eeac410d26805d2dbc/data.txt"
                );
                const resString = res.data.slice(2, res.data.length - 2);
                const resObject = JSON.parse(resString);
                setData(resObject.Makes);
            } catch (err) {
                console.log(err);
            }
        };
        api();
    }, []);

    const uniqueCountries = [];
    const countriesBrands = []; //section 2 which brands
    const countBrands = []; //section 1
    const eu_Brands = []; //section 4

    //section 2
    for (let key of data) {
        if (!uniqueCountries.includes(key.make_country)) {
            uniqueCountries.push(key.make_country);
            const brand = {};
            brand[key.make_country] = [key.make_display];
            countriesBrands.push(brand);
        } else {
            const idx = uniqueCountries.indexOf(key.make_country);
            countriesBrands[idx][key.make_country].push(key.make_display);
        }
    }
    //section 3
    const idx_USA = uniqueCountries.indexOf("USA");
    const brands_USA = countriesBrands[idx_USA] || "USA loading";

    //section 1
    for (let key of countriesBrands) {
        const brand = {};
        brand[Object.keys(key)[0]] = Object.values(key)[0].length;
        countBrands.push(brand);
    }

    //section 4
    countriesBrands.map((el) => {
        if (countries_EU.includes(Object.keys(el)[0])) {
            eu_Brands.push(Object.values(el)[0]);
        }
    });
    const eu_AllBrands = eu_Brands.flat();

    return (
        <>
            <div
                style={{
                    fontSize: "48px",
                    textAlign: "center",
                    backgroundColor: "#4099D9",
                    padding: "24px",
                    color: "white",
                }}
            >
                Test01
            </div>

            <div className="Section1">
                <h2>Section 1: แต่ละประเทศมีผลิตรถกี่ยี่ห้อ</h2>
                {countBrands.map((el, idx) => {
                    return (
                        <div key={idx}>
                            {Object.keys(el)[0]}: {Object.values(el)[0]} ยี่ห้อ
                        </div>
                    );
                })}
            </div>
            <br />
            <hr />
            <br />
            <div className="Section2">
                <h2>Section 2: แต่ละประเทศมีรถยี่ห้ออะไรบ้าง</h2>
                {countriesBrands.map((el, idx) => {
                    return (
                        <div key={idx}>
                            <div>
                                <h4>{Object.keys(el)[0]}: </h4>
                                {Object.values(el)[0].map((e, idx) => {
                                    return (
                                        <span key={idx}>
                                            {idx ? "," : ""} {e}
                                        </span>
                                    );
                                })}
                            </div>
                            <br />
                        </div>
                    );
                })}
            </div>
            <hr />
            <br />
            <div className="Section3">
                <h2>Section 3: USA ผลิตรถกี่ยี่ห้อ ยี่ห้ออะไรบ้าง</h2>
                <div>
                    USA ผลิตรถทั้งหมด :{" "}
                    {brands_USA?.USA?.length || "USA loading"}
                </div>

                <br />
                <div>
                    มียี่ห้อ :
                    {brands_USA?.USA?.map((el, idx) => {
                        return (
                            <span key={idx}>
                                {idx ? "," : ""} {el}
                            </span>
                        );
                    })}
                </div>
            </div>
            <br />
            <hr />
            <br />
            <div className="Section4">
                <h2>Section 4: รถยุโรปมีกี่ยี่ห้อ มียี่ห้ออะไรบ้าง</h2>
                <div>USA ผลิตรถทั้งหมด : {eu_AllBrands.length}</div>
                <br />
                <div>
                    มียี่ห้อ :
                    {eu_AllBrands.map((el, idx) => {
                        return (
                            <span key={idx}>
                                {idx ? "," : ""} {el}
                            </span>
                        );
                    })}
                </div>
            </div>
            <br />
            <hr />
            <br />
            <Link to="/02">
                <div
                    id="link"
                    style={{
                        padding: "24px",
                        fontSize: "36px",
                        right: "0",
                        left: "0",
                        position: "absolute",
                        backgroundColor: "#54BA9D",
                        textAlign: "center",
                        color: "#fff",
                    }}
                >
                    {"GO to Test02 >>"}
                </div>
            </Link>
        </>
    );
}

export default Test01;
