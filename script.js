const triangleBtn = document.getElementById('triangle-btn');
triangleBtn.addEventListener('click',()=>{
    const triangleBaseText = document.getElementById('triangle-base').value;
    const base = parseFloat(triangleBaseText);
    const triangleHeightText = document.getElementById('triangle-height').value;
    const height =parseFloat(triangleHeightText);

    const area = document.getElementById('area');
    const triangleArea = 0.5 * base * height;
    area.innerText =triangleArea;
});


// constant function

function getInputText(inputText){
   const inputField = document.getElementById(inputText);
   const inputFieldValue  = inputField.value;
   const inputFieldNumber = parseFloat(inputFieldValue);
   return inputFieldNumber;

}

function setInnerTextById(elementId, text){
    const element = document.getElementById(elementId);
    element.innerText = text;
}


function rectangle(){
    const width = getInputText('rectangle-width');
    const length = getInputText('rectangle-length');

    const area  = width * length;
    setInnerTextById('rectangle-area',area)
}


function parallelogram(){
    const base = getInputText('parallelogram-base');
    const height = getInputText('parallelogram-height');

    const area  = base * height;
    setInnerTextById('parallelogram-area',area);
}

function rhombusArea(){
    const rhombus1 = getInputText('rhombus-diagonal1');
    const rhombus2 = getInputText('rhombus-diagonal1');

    const area  = 0.5 * rhombus1 * rhombus2;
    setInnerTextById('rhombus-area',area);
}

function pentagonArea(){
    const pentagonPolygon = getInputText('pentagon-polygon');
    const pentagonBase = getInputText('pentagon-base');

    const area  = 0.5 * pentagonPolygon * pentagonBase;
    setInnerTextById('pentagon-area',area);
}

function ellipseArea(){
    const ellipseA = getInputText('ellipse-a');
    const ellipseB = getInputText('ellipse-b'); 

    const area  = 3.1416 * ellipseA * ellipseB;
    setInnerTextById('ellipse-area',area);
}




