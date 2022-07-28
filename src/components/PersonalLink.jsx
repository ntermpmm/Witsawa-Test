import React from "react";

function PersonalLink({ img, title, bgColor }) {
    return (
        <div
            style={{
                backgroundColor: bgColor,
                display: "flex",
                flexDirection: "column",
                fontSize: "14px",
                gap: "16px",
            }}
        >
            <img
                style={{
                    objectFit: "cover",
                    height: "32px",
                    opacity: "70%",
                }}
                src={img}
                alt=""
            />
            {title}
        </div>
    );
}

export default PersonalLink;
