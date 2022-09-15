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
	"Half-finished canvas",
	"Source",
	"A compass that doesn't work sometimes",
	"fish bones",
	"Ruler",
	"A pair of glasses",
	"Sneakers",
	"Watercolor ",
	"Leaf",
	"Brain",
	"One strong arm",
	"The Ocean",
	"A charger",
	"Headphones",
	"Vietnam flag",
	"Alarm clock",
	"Dice",
	"A pair of eyes",
	"Beating heart",
	"A cup of Boba",
]

let shapes = ["spiked", "circle"]

let canvasWidth = 564;
let canvasHeight = 747;
let canvasZoom = 0.8;
canvasHeight = canvasHeight * canvasZoom;
canvasWidth = canvasWidth * canvasZoom;

let canvasMargin = 50;

let sizeunit = 50;

let gridColCnt = 17;
let gridRowCnt = 22;
let gridCellWidth = canvasWidth / gridColCnt;
let gridCellHeight = canvasHeight / gridRowCnt;