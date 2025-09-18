[![Typing SVG](https://readme-typing-svg.herokuapp.com?font=Fira+Code&size=32&pause=1200&color=F75C7E&width=800&lines=La-Pizza+%7C+O+melhor+e-commerce+de+pizzas;Peça,+Personalize,+Aproveite)](https://git.io/typing-svg)'

<?xml version="1.0" encoding="UTF-8"?>


<!-- rotating group (3D-ish) -->
<g transform="translate(400,225)">
<!-- plate shadow -->
<ellipse cx="0" cy="110" rx="220" ry="34" fill="#000" opacity="0.15"/>


<!-- pizza layers grouped and animated to rotate slightly -->
<g id="pizza" filter="url(#shadow)">
<!-- crust (outer) -->
<g id="crust">
<circle r="180" fill="url(#gBase)" stroke="#d77a3a" stroke-width="8"/>
</g>


<!-- sauce (a bit smaller) -->
<g id="sauce">
<circle r="150" fill="#d63b2b"/>
</g>


<!-- cheese layer with subtle wobble -->
<g id="cheese">
<circle r="140" fill="#FFD97A"/>
</g>


<!-- pepperoni (multiple) -->
<g id="toppings">
<g id="pep" fill="#8B1E21">
<circle cx="-50" cy="-30" r="18"/>
<circle cx="60" cy="-10" r="20"/>
<circle cx="-10" cy="40" r="16"/>
<circle cx="110" cy="50" r="14"/>
<circle cx="-120" cy="10" r="16"/>
</g>
</g>
</g>


<!-- subtle 3D rotation animation using SMIL + transform -->
<animateTransform xlink:href="#pizza" attributeName="transform" attributeType="XML"
type="rotate" from="0 0 0" to="8 0 0" dur="2.6s" repeatCount="indefinite" additive="sum"/>


<!-- floating effect -->
<animateTransform xlink:href="#pizza" attributeName="transform" attributeType="XML"
type="translate" values="0 0; 0 -6; 0 0" dur="3.8s" repeatCount="indefinite" additive="sum"/>


<!-- slight skew to mimic perspective -->
<g transform="skewX(-6)">
<!-- plate -->
<ellipse cx="0" cy="170" rx="210" ry="36" fill="#ffffff" opacity="0.03"/>
</g>
</g>


<!-- caption -->
<text x="50%" y="420" text-anchor="middle" font-family="Inter, Helvetica, Arial" font-size="18" fill="#cbd5e1">La‑Pizza — Peça, personalize e aproveite</text>
</svg>
