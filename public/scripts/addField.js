document.querySelector("#add-time")
.addEventListener("click", cloneField)

function cloneField() {
    const inputTo = document.querySelectorAll('.time-to')
    const inputFrom = document.querySelectorAll('.time-from')
   
    if (inputFrom[inputFrom.length-1].value !== "" && inputTo[inputTo.length-1].value !== "") {
        const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true)
    
        const fields = newFieldContainer.querySelectorAll('input')

        fields.forEach(function (field) {
            field.value = ""
            document.querySelector('#schedule-items').appendChild(newFieldContainer)
        })
    }
}