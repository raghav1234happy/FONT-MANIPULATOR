function  preload() {
	
}

function setup() {
	canvas=createCanvas(550,500);
	canvas.position(560,170);

	video=createCapture(550,600);
	video.size(550,170);

	poseNet=ml5.poseNet(video,modelLoaded);
	poseNet.on('pose',gotPoses)
}

function draw() {
	background('#FAC800');
}

function modelLoaded() {
	console.log("Model is loaded");
}