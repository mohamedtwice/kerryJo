// import "./src/assets/style-rtl.css"
// import "./src/assets/js/mobilenav"
import "./src/assets/print.css"
import "./src/assets/style-theme.css"
import "./src/assets/twentytwenty.css"
import "./src/assets/twentytwenty-min.css"
import "./src/assets/slider-2.css"
import "./src/assets/bootstrap.4.1.1.min.css"
import "./src/assets/style-analogue.css"
import "./src/assets/style.css"
import "./src/assets/coblocks.css"
// import "./src/assets/insight.css"

const addScript = url => {
    const script = document.createElement("script");
    script.src = url;
    script.async = true;
    document.body.appendChild(script)
};

export const onClientEntry = () => {
    window.onload = () => {
        addScript("https://promise.blackstarmg.com/wp-includes/js/hoverintent-js.min.js?ver=2.2.1");
        addScript("https://promise.blackstarmg.com/wp-content/themes/twentytwenty/assets/js/index.js?ver=1.3")

        // let el = document.querySelector('.sub-menu-toggle');
        // let dd = document.querySelector('.sub-menu');
        //
        // el.classList.remove('active');
        // dd.classList.remove('active');
    }
};