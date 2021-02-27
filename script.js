document.getElementById("randomsubmit").addEventListener("click", function (event) {
    event.preventDefault();
    const url = "https://www.themealdb.com/api/json/v1/1/random.php";
    fetch(url)
        .then(function (response) {
            return response.json();
        }).then (function (json) {
            console.log(json);
            let results = "";
            results += "<h2>" + json.meals[0].strMeal + "</h2>";
            results += "<img src='" + json.meals[0].strMealThumb + "'/>";
            results += "<p>" + json.meals[0].strInstructions + "</p>";
            results += "<a href='" + json.meals[0].strYoutube + "'>Youtube Instructions</a>";
            document.getElementById("results").innerHTML = results;
            document.getElementById("footer").className = "text-center footer1";
        })
})

document.getElementById("searchsubmit").addEventListener("click", function (event) {
    event.preventDefault();
    const value = document.getElementById("searchinput").value;
    if (value === "")
        return;
    console.log(value);
    const url = "https://www.themealdb.com/api/json/v1/1/search.php?s=" + value;
    fetch(url)
        .then(function (response) {
            return response.json();
        }).then(function (json) {
            console.log(json);
            let results = "";
            if (json.meals.length > 1) {
                results += "<p>";
                for (object in json.meals) {
                    results += json.meals[object].strMeal + ", ";
                }
                results += "</p>"
            }
            else {
                results += "<h2>" + json.meals[0].strMeal + "</h2>";
                results += "<img class='imgs' src='" + json.meals[0].strMealThumb + "'/>";
                results += "<p>" + json.meals[0].strInstructions + "</p>";
                results += "<a class='links' href='" + json.meals[0].strYoutube + "'>Youtube Instructions</a>";
                document.getElementById("footer").className = "text-center footer1";
            }
            document.getElementById("results").innerHTML = results;
            
        })
})

document.getElementById("lettersubmit").addEventListener("click", function (event) {
    event.preventDefault();
    const value = document.getElementById("letterinput").value;
    if (value === "")
        return;
    console.log(value);
    const url = "https://www.themealdb.com/api/json/v1/1/search.php?f=" + value;
    fetch(url)
        .then(function (response) {
            return response.json();
        }).then(function (json) {
            console.log(json);
            let results = "";
            results += "<p>";
            for (object in json.meals) {

                results += json.meals[object].strMeal + ", ";
            }
            results += "</p>"
            document.getElementById("results").innerHTML = results;
            //document.getElementById("footer").className = "text-center footer1";
        })
})
