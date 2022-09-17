function preload() {
    myFont = loadFont('assets/HelveticaComp.ttf')

    mystar = loadImage('assets/icons/star.png');
}

function setup() {
    // canvas create
    let canvas = createCanvas(canvasWidth, canvasHeight);
    rectMode(CENTER);
    blendMode(BLEND);
    textAlign(CENTER, CENTER);
    textWrap(WORD);
    // colorMode(HSB);

    addFloaties();
}


function draw() {
    gridBackground();
    drawBorder();
    drawFloaties();

}

function switchBorderColor() {
    borderColorIndex++;
    if (borderColorIndex == 1)
        borderColorIndex++;
    if (borderColorIndex == themecolors.length)
        borderColorIndex = 0;

}

function drawBorder() {
    push();
    noStroke();
/*    if (frameCount % 25 == 0)
        switchBorderColor();
*/    fill(themecolors[borderColorIndex]);

    rectMode(CORNER);
    rect(0, 0, gridCellWidth, height);
    rect(width - gridCellWidth + 1, 0, gridCellWidth, height);
    rect(0, 0, width, gridCellHeight - 1);
    rect(0, height - gridCellHeight, width, gridCellHeight);

    pop();
}
function gridBackground() {
    push();
    strokeWeight(0.5);
    stroke(themecolors[1]);
    for(let i = 1; i < gridColCnt; i++) {
        line(i * gridCellWidth, 0, i * gridCellWidth, height);
    }
    for(let i = 1; i < gridRowCnt; i++) {
        line(0, i * gridCellHeight, width, i * gridCellHeight);
    }
    pop();
}

function addFloaties() {
    for(let i = 0; i < floatiesCnt; i++)
        floaties.push(new Floatie(i));
    floaties.sort((a, b) => {
        return a.r < b.r;
    });
}

function drawFloaties() {
    for(let i = 0; i < floaties.length; i++) {
      floaties[i].edges();
      floaties[i].move();
      floaties[i].show();
    }
}