img = ""
function setup()
{
    canvas = createCanvas(800 , 500)
    canvas.center()
    objectDetector = ml5.objectDetector("cocossd" , modelLoaded)
    document.getElementById("status").innerHTML = "detecting objects ...."
}
resultsArray = []
function draw()
{
    image(img , 0 , 0 , 800 , 500)
    if (status != "") {
        for (let i = 0; i < resultsArray.length; i++) {
            document.getElementById("status").innerHTML = "Object Detected"
            fill("purple")
            textSize(25)
            con = floor(resultsArray[i].confidence * 100)
            text(resultsArray[i].label + con + "%" , resultsArray[i].x , resultsArray[i].y)
            noFill()
            stroke("purple")
            rect(resultsArray[i].x , resultsArray[i].y , resultsArray[i].width , resultsArray[i].height)
        }
    }
}
function preload()
{
    img = loadImage("idk.jpg")
}
function modelLoaded()
{
    console.log("this should be working and not creating virus")
    status = true
    objectDetector.detect(canvas , gotResults)
}
status = ""
function gotResults(error , results)
{
    if (error) {
        console.log(error , "i guess its not working :(")
    }
    console.log(results , "if you see this it worked i guess :)")
    resultsArray = results
}