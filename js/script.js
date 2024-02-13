
import { reloadTable } from "./ui.js"
import { id } from "./ui.js"

let peoples = []

const tbody = document.querySelector('tbody')
const form = document.forms.tableForm
const inps = form.querySelectorAll('input')
const modalForm = document.forms.modalForm
const modal = document.querySelector('dialog')

let errors = 0
form.onsubmit = (e) => {
    e.preventDefault()
    inps.forEach(inp => {
        if (inp.value === '') ++errors
    })

    if(errors === 0) submit()
}

function submit() {
    let value = {
        id: Math.random()
    }
    new FormData(form).forEach((val, key) => {
        value[key] = val
    })
    value.age = new Date().getFullYear() - +value.age

    if(value.age < new Date().getFullYear() - 90) return
    if(!isNaN(value.name)) return

    peoples.push(value)
    
    reloadTable(peoples, tbody)
}

modalForm.onsubmit = (e) => {
    e.preventDefault()
    // let value = {}
    // new FormData(modalForm).forEach((val, key) => {
    //     val[key] = val
    // })
    let name = new FormData(modalForm).get('name')
    let age = new FormData(modalForm).get('age')
  
    let finded = peoples.find(el => el.id === id)
    finded.name = name
    finded.age = new Date().getFullYear() - age
    
    reloadTable(peoples, tbody)
    modal.close()
}