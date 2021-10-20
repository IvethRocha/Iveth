import React from "react";
import PropTypes from 'prop-types';

const Entrada = ({nombre, pesas, boxeo, baile, price}) => (

<>
<h1>TIPOS DE GIMNASIOS</h1>
<div class="s-mb-2 s-main-center card-teachers">
<article class="card">
<div class="img-container s-ratio-16-9 s-radius-tr s-radius-tl">
<img src="https://i.pinimg.com/originals/c4/77/48/c477480a30cdb5ecf9d5dc21d2ebd9ab.jpg" alt="" />
</div>
<div class="card__data s-border s-radius-br s-radius-bl s-pxy-2">
<h3 class="t5 s-mb-2 s-center">
{nombre}
</h3>
<div class="s-mb-2 s-main-center">
<div class="card__teacher s-cross-center">
<span class="small">{pesas}</span>
</div>
</div>
<div class="s-main-center">
<a class="button--ghost-alert button--tiny" href="www.google.com">{price}</a>
</div>
</div>
</article>

<article class="card">
<div class="img-container s-ratio-16-9 s-radius-tr s-radius-tl">
<img src="data:image/jpeg;base64,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" alt="" />
</div>
<div class="card__data s-border s-radius-br s-radius-bl s-pxy-2">
<h3 class="t5 s-mb-2 s-center">
{nombre}
</h3>
<div class="s-mb-2 s-main-center">
<div class="card__teacher s-cross-center">
<span class="small">{boxeo}</span>
</div>
</div>
<div class="s-main-center">
<a class="button--ghost-alert button--tiny" href="www.google.com">{price}</a>
</div>
</div>
</article>

<article class="card">
<div class="img-container s-ratio-16-9 s-radius-tr s-radius-tl">
<img src="https://www.mushi-emd.com/wp-content/uploads/2019/02/clases-baile-moderno-funky-madrid-retiro.jpg" alt="" />
</div>
<div class="card__data s-border s-radius-br s-radius-bl s-pxy-2">
<h3 class="t5 s-mb-2 s-center">
{nombre}
</h3>
<div class="s-mb-2 s-main-center">
<div class="card__teacher s-cross-center">
<span class="small">{baile}</span>
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

Entrada.propTypes={
title: PropTypes.string,
image: PropTypes.string,
pesas: PropTypes.string,
boxeo: PropTypes.string,
baile: PropTypes.string,
price: PropTypes.string
}
Entrada.defaultProps={
title: "No se encontro titulo",
image: "https://www.windowscentral.com/sites/wpcentral.com/files/styles/large/public/field/image/2021/06/touchkeyboardthemelight003.jpg",
pesas:"GIMNASIO DE PESAS",
boxeo: "GIMNASIO DE BOXEO",
baile: "ACADEMIA DE BAILE",
price:"ENTRAR"
}

export default Entrada;
