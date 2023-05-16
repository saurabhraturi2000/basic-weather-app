function get_data() {
  var cityName = document.getElementById("city").value;
  var url =
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    cityName +
    "&appid=2cd52349c5fae83eb99e06ae30b04dcb&units=metric";
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      if (data["cod"] === "404") {
        alert("city not found");
      } else {
        var temp = data["main"]["temp"];
        var icon = data["weather"]["0"]["icon"];
        var icon_url = "https://openweathermap.org/img/wn/" + icon + "@2x.png";
        document.getElementById("result").innerHTML =
          `<img src=` +
          icon_url +
          `>` +
          `<br>` +
          `<h3>Temperature is:` +
          temp +
          `&deg;C</h3>`;
      }
    });
}
