console.log("er")
fetch("https://api.roamhome.in/api/v1/public/misc/home")
    .then((res) => {
        console.log(res, "lets aee what is inside")
        document.getElementsByClassName("h1-text")[0].innerHTML = "Hello Manii"
        document.getElementsByClassName("h1-text")[1].innerHTML = "Hello Rudra"
        document.getElementsByClassName("text-color")[0].innerHTML = "Mera new color"

        res.json()
            .then((body) => { console.log(body, "whart is in body") }
            )
    })

    .catch(
        (err) => { console.log(err, "lets triggeer an err") })