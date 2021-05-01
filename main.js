
// ToDo: 
//     Use createElement for the title-thru-expl.  See drawing.
//     Background image/color?
//     Font
//     No image alert
//     Add copyright
//     Get rid of image square

const baseUrl = "https://api.nasa.gov/planetary/apod?api_key=";
const apiKey = "U5YCwar82d9GKNPxCGPTYasZE30KkEyD2glgTP35"
//const apiKey = "DEMO_KEY"
let url

// ToDo:  Should the display function be after getAndDisplayImage?  Should it be a 'const'?
const display = (imageUrl, imageExplanation, imageTitle, imageDate) => {
    console.log("in display")
    console.log(imageUrl)
    console.log(imageExplanation)
    console.log(imageTitle)
    console.log(imageDate)

    document.getElementById('img-title').innerText = imageTitle
    document.getElementById('img-date').innerText = imageDate

    let image = document.getElementById('image');
    image.src = imageUrl;

    document.getElementById('explanation').innerHTML = imageExplanation;
}

function getAndDisplayImage() {
    console.log("in getAndDisplayImage")
    let userDate = document.getElementById("user-date").value;

    url = `${baseUrl}${apiKey}&date=${userDate}`
    console.log(url)
    fetch(url)
        .then(res => res.json())
        .then(json => {
            console.log(json)
            let photoDate = json.date
            console.log(photoDate)
            console.log(json.explanation)
            console.log(json.title)
            console.log(json.resource)
            console.log(json.copyright)
            console.log(json.url)
            if (json.media_type == "image") {
                display(json.url, json.explanation, json.title, json.date 
                    )
            } else {
                // ToDo: Clear previous image?
                alert("Photograph not available for that date.  Please try again.")
            }
        })
    // .catch(() => { console.error("something went wrong") })

}
