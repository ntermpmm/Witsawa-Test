import React from "react";

function PersonalDescription({ img, title, description }) {
    return (
        <div className="description">
            <img
                style={{
                    objectFit: "cover",
                    height: "32px",
                }}
                src={img}
                alt=""
            />
            <div className="description2">
                <div className="descriptionTitle">{title}</div>
                <div>{description}</div>
            </div>
        </div>
    );
}

export default PersonalDescription;
