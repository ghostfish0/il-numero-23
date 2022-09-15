let floatiesCnt = 23;
let floaties = [];

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
    push();
    blendMode(BLEND);
    background(color(
            themecolors[1][0],
            themecolors[1][1],
            themecolors[1][2],
            0.5
    ));
    gridBackground();
    pop();

    drawFloaties();
}

function gridBackground() {
    strokeWeight(0.5);
    stroke(themecolors[1]);
    for(let i = 1; i < gridColCnt; i++) {
        line(i * gridCellWidth, 0, i * gridCellWidth, height);
    }
    for(let i = 1; i < gridRowCnt; i++) {
        line(0, i * gridCellHeight, width, i * gridCellHeight);
    }
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