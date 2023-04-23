import { useEffect, useState } from 'react';

function Chat() {
    useEffect(() => {
        (function (d, m) {
            var kommunicateSettings = { "appId": "3cd532d421e4a1f78bb7a14cebf9436ce", "popupWidget": true, "automaticChatOpenOnNavigation": true };
            var s = document.createElement("script"); s.type = "text/javascript"; s.async = true;
            s.src = "https://widget.kommunicate.io/v2/kommunicate.app";
            var h = document.getElementsByTagName("head")[0]; h.appendChild(s);
            window.kommunicate = m; m._globals = kommunicateSettings;
        })(document, window.kommunicate || {});
    }, [])
    return (
        <></>
    );
}

export default Chat;
