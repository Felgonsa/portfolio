let email = document.querySelector("#sendEmail")

function show() {

    if (email.classList.contains("d-none")) {

        email.classList.remove("d-none")

        email.classList.add("d-flex")
    }

}

function hide() {

    if (email.classList.contains("d-flex")) {

        email.classList.remove("d-flex")

        email.classList.add("d-none")
    }
}

document.addEventListener("keypress", function (e) {

    if (e.keyCode == 13) {
        let send = document.querySelector("#send")

        send.click()
    }

   
})


