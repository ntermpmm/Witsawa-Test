import React from "react";

function PersonalInfo({ title, detail }) {
    return (
        <div
            style={{
                display: "grid",
                gridTemplateColumns: "0.5fr 1fr",
                alignItems: "baseline",
            }}
        >
            <div style={{ fontWeight: 800, fontSize: "12px" }}>{title}:</div>
            <div
                style={{
                    fontWeight: 500,
                    fontSize: "12px",
                    lineHeight: "20px",
                }}
            >
                {detail}
            </div>
        </div>
    );
}

export default PersonalInfo;
