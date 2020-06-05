// variables for PX and REM
var originalValue = document.querySelector("#rootValue");
var px = document.querySelector("#px");
var rem = document.querySelector("#rem");
var pxValue;
var remValue;


if (
    originalValue.addEventListener("click", function(){
        reset();
    })
);
else if (
    // if px clicked reset px and rem values
    px.addEventListener("click", function(){
        reset();
    })
); 
else if (
    // if rem clicked reset px and rem values
    rem.addEventListener("click", function(){
        reset();
    })
)


reset();
pxConvert();
remConvert();

// convert px to rem
function pxConvert()
{
    px.addEventListener("input", function(){
        remValue = px.value / rootValue.value;
        
        rem.value = remValue;
    })
}

// convert rem to px
function remConvert()
{
    rem.addEventListener("input", function(){
        pxValue = rem.value * rootValue.value;
        px.value = pxValue;
    })
}

// reset px and rem values
function reset(){
    px.value = "";
    rem.value = "";
}


