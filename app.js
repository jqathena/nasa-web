let key = "joUuFVDy8N2Z4Vax4hHhVaku8JtmVNFE7ParsjcN";

function loadImage(date = new Date()) {
  let currentDate = `${date.getFullYear()}-${
    date.getMonth() + 1
  }-${date.getDate()}`;
  var apiUrl = `https://api.nasa.gov/planetary/apod?api_key=${key}&concept_tags=True&date=${currentDate}&thumbs=True`;
  fetch(apiUrl)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      // Work with JSON data here
      console.log(data);
      if (data.code != undefined) {
        document.getElementById("title").innerHTML =
          "Sorry, something went wrong!";
        document.getElementById("date-text").innerHTML = data.msg;
        document.getElementById("image").src = "";
        document.getElementById("caption").innerHTML = "";
        document.getElementById("explanation").innerHTML = "";
      } else {
        document.getElementById("title").innerHTML = data.title;
        document.getElementById("date-text").innerHTML = date.toDateString();
        document.getElementById("image").src = data.url;
        document.getElementById(
          "caption"
        ).innerHTML = `Copyright: ${data.copyright}`;
        document.getElementById("explanation").innerHTML = data.explanation;
      }
    })
    .catch((err) => {});
}

loadImage();

function submit() {
  date = document.getElementById("date");
  loadImage(new Date(date.value));
  console.log(date.value);
  date.value = "";
}
