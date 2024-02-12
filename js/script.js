
import { reloadTable } from "./ui.js"

let peoples = []

const tbody = document.querySelector('tbody')
const form = document.forms.tableForm
const inps = document.querySelectorAll('input')

form.onsubmit = (e) => {
    e.preventDefault()
    let errors = 0
    inps.forEach(inp => {
        if (inp.value === '') ++errors
    })

    if(errors === 0) submit()
}

function submit() {
    let value = {}
    new FormData(form).forEach((val, key) => {
        value[key] = val
    })
    value.age = new Date().getFullYear() - +value.age

    peoples.push(value)

    reloadTable(peoples, tbody)
}

