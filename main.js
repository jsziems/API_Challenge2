// ToDo:  
//    Should the display function be after getAndDisplayImage?  Should it be a 'const'?'
//    Remove console.log

const baseUrl = "https://api.nasa.gov/planetary/apod?api_key=";
const apiKey = "U5YCwar82d9GKNPxCGPTYasZE30KkEyD2glgTP35"

const wrapper = document.getElementById("results")
let url


const display = (imageUrl, imageExplanation, imageTitle, imageDate, imageCopyright) => {
    let imageDivElement
    let titleElement
    let dateElement
    let divElement
    let imgElement
    let explanationElement

    console.log("in display")
    console.log(imageUrl)
    console.log(imageExplanation)
    console.log(imageTitle)
    console.log(imageDate)

    console.log(wrapper.firstChild)
    wrapper.removeChild(wrapper.firstChild);

    imageDivElement = document.createElement("div")
    titleElement = document.createElement("h4")
    dateElement = document.createElement("h4")
    divElement = document.createElement("div")
    imgElement = document.createElement("img")
    explanationElement = document.createElement("p")

    imageDivElement.className = "image-div"
    titleElement.className = "img-title"
    dateElement.className = "img-date"
    divElement.className = "img-and-expl"
    imgElement.className = "nasa-img"
    explanationElement.className = "explanation"

    titleElement.innerText = imageTitle
    dateElement.innerText = imageDate
    if (imageCopyright != null){
        explanationElement.innerHTML = `${imageExplanation} <br> <br>Copyright -- ${imageCopyright}`
    } else {
        explanationElement.innerHTML = imageExplanation
    }
    imgElement.src = imageUrl


    imageDivElement.appendChild(titleElement)
    imageDivElement.appendChild(dateElement)
    divElement.appendChild(imgElement)
    divElement.appendChild(explanationElement)
    imageDivElement.appendChild(divElement)
    wrapper.appendChild(imageDivElement)

    /*
    document.getElementById('img-title').innerText = imageTitle
    document.getElementById('img-date').innerText = imageDate

    let image = document.getElementById('image');
    image.src = imageUrl;

    document.getElementById('explanation').innerHTML = imageExplanation;
    */
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
                display(json.url, json.explanation, json.title, json.date, json.copyright)
            } else {
                alert("Photograph not available for that date.  Please try again.")
            }
        })
    // .catch(() => { console.error("something went wrong") })

}
