// colors
let themecolors = [

[13, 5, 242], // blue
[255, 255, 255], // white
[242, 102, 128], // coral
[240, 102, 242], // pink
[4, 217, 139], // green
[242, 226, 5], // lemon yellow

/*
[248, 240, 227],
[193, 44, 28],
[8, 59, 97],
[238, 159, 8],*/
];

let objectTitles = [
	"{ }",
	"𝐱",
	"An empty block of sticky notes",
	"Hello I'm Tin",
	"Source",
	"A compass that doesn't work sometimes",
	"fish bones",
	"Film",
	"A pair of glasses",
	"Sneakers",
	"Color blobs",
	"Leaf",
	"Brain",
	"An arm",
	"The Ocean",
	"A charger",
	"An Ear",
	"Vietnam flag",
	"Alarm clock",
	"Dice",
	"A pair of eyes",
	"Beating heart",
	"umbrella",
];

let haveicons = [
	"An empty block of sticky notes",
	"A compass that doesn't work sometimes",
	"fish bones",
	"Film",
	"A pair of glasses",
	"Sneakers",
	"Color blobs",
	"Leaf",
	"Brain",
	"The Ocean",
	"A charger",
	"An Ear",
	"Vietnam flag",
	"Alarm clock",
	"Dice",
	"A pair of eyes",
	"Beating heart",
	"umbrella",
];

let shapes = ["spiked", "circle"];

let floatiesCnt = 23;
let floaties = [];

let canvasWidth = 564;
let canvasHeight = 747;
let sizeunit = 50;
let canvasZoom = 0.75;
canvasHeight = canvasHeight * canvasZoom;
canvasWidth = canvasWidth * canvasZoom;
sizeunit = sizeunit * canvasZoom;

let gridColCnt = 17;
let gridRowCnt = 22;
let gridCellWidth = canvasWidth / gridColCnt;
let gridCellHeight = canvasHeight / gridRowCnt;

let borderColorIndex = 1;

let objectsTouched = false;

let myFont;

let mystar;