const inputCPF = document.getElementById("cpf")

inputCPF.addEventListener('focus', function(e) {
    inputCPF.value = "___.___.___-__"
    setTimeout(function() {
        inputCPF.setSelectionRange(0, 0)
    }, 1)
})

// inputCPF.addEventListener("blur", function() {
//     this.value = ""
// })

inputCPF.addEventListener("keydown", function(e) {
    e.preventDefault()
    if("0123456789".indexOf(e.key) !== -1
        && this.value.indexOf("_") !== -1) {
            this.value = this.value.replace(/_/, e.key)
            const nextIndex = this.value.indexOf("_")
            this.setSelectionRange(nextIndex, nextIndex)
    } else if (e.key === "Backspace") {
        this.value = this.value.replace(/(\d$)|(\d(?=\D+$))/, "_")
        const nextIndex = this.value.indexOf("_")
        this.setSelectionRange(nextIndex, nextIndex)
    }
})