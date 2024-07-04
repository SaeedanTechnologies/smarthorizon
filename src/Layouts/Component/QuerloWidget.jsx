// src/Component/QuerloWidget.js
import React, { useEffect } from 'react';

const QuerloWidget = () => {
    useEffect(() => {
        // Ensure the Querlo script is loaded
        const script = document.createElement('script');
        script.src = "https://static.querlo.com/js/embeds/dist/app.js";
        script.async = true;
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return (
        <div
            id="querloEmbd"
            className="querlo"
            data-id="smart"
            data-querlo-w=""
            data-querlo-h=""
            data-pos-x="right"
            data-pos-y="bottom"
            data-template="esd"
            data-main-color="rgb(242,246,249)"
            data-speaker-img="https://static.querlo.com/image_uploads/popupAvatar/251197_6613d46b18424_jpg_big.jpg"
            data-speaker-name="Veronica"
            data-intro-txt="Let's talk"
            data-delay=""
        ></div>
    );
};

export default QuerloWidget;
