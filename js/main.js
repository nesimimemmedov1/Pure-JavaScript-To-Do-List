document.getElementById("send").addEventListener("click", function () {
    if (todoText.value == "") {
        todoText.style.boxShadow = "rgb(255, 0, 0) 0px 0px 6px 0px inset"
    } else {
        let text = document.getElementById("todoText").value
        // let underlist = document.createElement("ul")
        let list = document.createElement("li")
        let txt = document.createTextNode(text);
        let removeImg = document.createElement("img")
        let successImg = document.createElement("img")
        let nComp = document.getElementById("notCompleted")
        let comp = document.getElementById("Completed")
        successImg.setAttribute("src", "img/chckIcon.png")
        successImg.setAttribute("class", "chckIcon")
        removeImg.setAttribute("src", "img/rmvIcon.png")
        removeImg.setAttribute("class", "rmvImg")
        list.setAttribute("id", "todoContent")
        list.setAttribute("class", "ContentStyle")
        list.setAttribute("value", text)
        document.body.appendChild(list);
        document.body.appendChild(removeImg);
        document.body.appendChild(successImg)
        list.appendChild(txt)
        nComp.appendChild(list)
        list.appendChild(removeImg)
        list.appendChild(successImg)
        // document.body.appendChild(underlist) ;
        todoText.value = ""
        todoText.style.boxShadow = "none"

        removeImg.addEventListener("click", function () {
            list.remove();
        })



        successImg.addEventListener("click", function () {
            comp.appendChild(list)
            removeImg.setAttribute("src", "img/whitermvIcon.png")
            successImg.remove()
            list.classList.add("styletodo")
        })
    }
})

