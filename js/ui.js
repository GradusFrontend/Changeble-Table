
export function reloadTable(arr, place) {
    place.innerHTML = ''

    for(let item of arr) {
        let tr = document.createElement('tr')
        let num = document.createElement('td')
        let name = document.createElement('td')
        let age = document.createElement('td')
        let tools = document.createElement('td')
        let edit = document.createElement('button')
        let editImg = document.createElement('img')
        let deleteBtn = document.createElement('button')
        let deleteImg = document.createElement('img')

        place.append(tr)
        tr.append(num, name, age, tools)
        tools.append(edit, deleteBtn)
        edit.append(editImg)
        deleteBtn.append(deleteImg)
        editImg.src = './img/edit_icon.svg'
        editImg.alt = 'edit'
        deleteImg.src = './img/trash-bin.svg'
        deleteImg.alt = 'delete'

        num.innerHTML = arr.indexOf(item) + 1
        name.innerHTML = item.name
        age.innerHTML = item.age
    }
}