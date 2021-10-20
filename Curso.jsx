import React from "react";
import PropTypes from 'prop-types';

//const persona = {"nombre":"NUTRICION "}
//const curso={"nombre":"React desde cero", "price":"1200mxn"}
const Curso = ({nombre, image, price, profesor, clases, mapa, titulo}) => (
<>
<div class="s-mb-2 s-main-center card-teachers">
<article class="card">
<div class="img-container s-ratio-16-9 s-radius-tr s-radius-tl">
<img src="https://www.saludterapia.com/images/saludterapia/glosario/nutricion/nutricion.jpg" alt="" />
</div>
<div class="card__data s-border s-radius-br s-radius-bl s-pxy-2">
<h3 class="t5 s-mb-2 s-center">
{nombre}
</h3>
<div class="s-mb-2 s-main-center">
<div class="card__teacher s-cross-center">
<span class="small">{profesor}</span>
</div>
</div>
<div class="s-main-center">
<a class="button--ghost-alert button--tiny" href="www.google.com">{price}</a>
</div>
</div>
</article>

<article class="card">
<div class="img-container s-ratio-16-9 s-radius-tr s-radius-tl">
<img src="https://i.blogs.es/538b1a/revlon-gimnasio-1/450_1000.jpg" alt="" />
</div>
<div class="card__data s-border s-radius-br s-radius-bl s-pxy-2">
<h3 class="t5 s-mb-2 s-center">
{nombre}
</h3>
<div class="s-mb-2 s-main-center">
<div class="card__teacher s-cross-center">
<span class="small">{titulo}</span>
</div>
</div>
<div class="s-main-center">
<a class="button--ghost-alert button--tiny" href="www.google.com">{price}</a>
</div>
</div>
</article>

<article class="card">
<div class="img-container s-ratio-16-9 s-radius-tr s-radius-tl">
<img src="https://blog.bodysystems.mx/hubfs/Body%20Systems/Blog/Fitness/septiembre%202019/importancia-especializacion-entrenadores-fitness.jpg" alt="" />
</div>
<div class="card__data s-border s-radius-br s-radius-bl s-pxy-2">
<h3 class="t5 s-mb-2 s-center">
{nombre}
</h3>
<div class="s-mb-2 s-main-center">
<div class="card__teacher s-cross-center">
<span class="small">{clases}</span>
</div>
</div>
<div class="s-main-center">
<a class="button--ghost-alert button--tiny" href="www.google.com">{price}</a>
</div>
</div>
</article>

<article class="card-1">
<div class="img-container s-ratio-16-9 s-radius-tr s-radius-tl">
<img src="https://ps.w.org/gmap-embed/assets/icon-256x256.jpg?rev=2521598" alt="" />
</div>
<div class="card__data s-border s-radius-br s-radius-bl s-pxy-2">
<h3 class="t5 s-mb-2 s-center">
{nombre}
</h3>
<div class="s-mb-2 s-main-center">
<div class="card__teacher s-cross-center">
<span class="small">{mapa}</span>
</div>
</div>
<div class="s-main-center">
<a class="button--ghost-alert button--tiny" href="www.google.com">{price}</a>
</div>
</div>
</article>

</div>
</>
)

Curso.propTypes={
title: PropTypes.string,
image: PropTypes.string,
price: PropTypes.string,
profesor: PropTypes.string,
clases: PropTypes.string,
mapa: PropTypes.string,
titulo: PropTypes.string
}
Curso.defaultProps={
title: "No se encontro titulo",
image: "https://www.windowscentral.com/sites/wpcentral.com/files/styles/large/public/field/image/2021/06/touchkeyboardthemelight003.jpg",
price:"ENTRAR",
profesor: "NUTRICIÓN",
clases: "CLASES",
mapa: "ENCUENTRA TU ESPACIO",
titulo:"ENTRETENIMIENTO"
}

export default Curso;
