var heightMain =  prompt("введіть висоту main:");
var widthMain =  prompt("введіть ширину main:");
var heightHeader =  prompt("введіть висоту header:");
var widthHeader =  prompt("введіть ширину header:");
var heightFooter =  prompt("введіть висоту footer:");
var widthFooter =  prompt("введіть ширину footer:");
document.write(`<header style="height: ${heightHeader}px;width:${widthHeader}px;">Header</header>`);
document.write("<main style='height:" + heightMain + "px; width:" + widthMain + "px;'><aside>Aside</aside><section>Aection</section></main>");
document.write(`<footer style="height: ${heightFooter}px;width: ${widthFooter}px;">Footer</footer>`);


