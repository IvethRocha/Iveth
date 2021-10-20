import React from "react";

const Banner = () => (

    <div className="main-banner img-container" id="main-banner">
        <div className="ed-grid lg-grid-6">
            <div className="lg-cols-4 lg-x-2">

                <img class="imagen-1" src="https://i.pinimg.com/236x/01/c5/8b/01c58bc85e1615b53d1b065bfba280cf.jpg" alt="" />
                <div className="main-banner__data s-center">
                     <nav id="menu">
                         <h1>GYM GLOFOX</h1>
                    <ul class="ed-menu l-horizontal button-bar">
                        <li><a href="#">NOSOTROS</a></li>
                        <li><a href="#">TIPOS DE GIMNASIOS</a></li>
                        <li><a href="#">BLOG</a></li>
                        <li><a href="#">TU ESPACIO</a></li>
                    </ul>
                    </nav>
                </div>
            </div>
        </div>
    </div>
)
export default Banner;
