
let value = 0;
function next()
{
    ++value;
    let continer = document.getElementById("continer");
    if(value > 3)
    {
        value = 0;
    }
    continer.style.marginLeft = `${-200*value}px`
}