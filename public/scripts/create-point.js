// function populateUFs(){
//     const ufselect = document.querySelector("select[name=uf]") 
//      fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados")
//      .then(res => res.json())
//      .then( states => {
 
//          for(const state of states){
//              ufselect.innerHTML += `<option value="${state.id}">${state.nome} `
//          }
//      })
//  }
 
//  populateUFs()
 
//  function getCities(event){
//      const citySelect = document.querySelector("[name=city]") 
//      const stateInput = document.querySelector("[name=state]")
 
//      const ufValue = event.target.value
 
//      const indexOfSlectedState = event.target.selectedIndex
//      stateInput.value = event.target.options[indexOfSlectedState].text
 
     
     
//      const url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${ufValue}/municipios`
 
//      citySelect.innerHTML = "<option value> Selecione a cidade </option>"
//      citySelect.disabled = true

//      fetch(url)
//      .then(res => res.json())
//      .then( cities => {
         
//          for(const city of cities){
//              citySelect.innerHTML += `<option value="${city.nome}">${city.nome} `
//          }
//          citySelect.disabled = false
//      })
     
//  }
 
//  document
//  .querySelector("select[name=uf]")
//  .addEventListener("change", getCities) 
    
// // Itens de coleta
// // Pegar todos os LI's
// // Guardar todos elementos de li em itensToCollect
// const itemsToCollect = document.querySelectorAll(".itens-grid li")

// for (const item of itemsToCollect) {
//     item.addEventListener("click", handSelectedItem)
// }

// let selectedItems = []

// function handSelectedItem(event) {
//     const itemLi = event.target

//     // Adicionar ou remover uma classe com javascript
//     itemLi.classList.toggle("selected")

//     const itemId = itemLi.dataset.id

//     //verificar se existem itens selecionados, se sim
//     // pegar os itens selecionados

//     const alreadySelected = SelectedItem.findIndex( item => {
//             const itemFound = item == itemId // Isso sera true ou false
//             return itemFound
//     })

//     // Se ja estiver selecionado
//     if( alreadySelected >= 0 ) {
//         // tirar da seleção
//         const filteredItems = SelectedItems.filter ( item => {
//            const itemIsDifferent = item != itemId // false
//            return itemIsDifferent
//         })

//         selectedItems = filteredItems
//     } else {
//         // se nao oestiver selecionado
//         // adicionar seleção
//         selectedItem.push(itemId)
//     }

//     collectedItems.value = selectedItems




// }

function populateUFs(){
    const ufselect = document.querySelector("select[name=uf]") 
     fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados")
     .then(res => res.json())
     .then( states => {
 
         for(const state of states){
             ufselect.innerHTML += `<option value="${state.id}">${state.nome} `
         }
     })
 }
 
 populateUFs()
 
 function getCities(event){
     const citySelect = document.querySelector("[name=city]") 
     const stateInput = document.querySelector("[name=state]")
 
     const ufValue = event.target.value
 
     const indexOfSlectedState = event.target.selectedIndex
     stateInput.value = event.target.options[indexOfSlectedState].text
 
     citySelect.innerHTML = "<option value> Selecione a cidade </option>"
     citySelect.disabled = true
     
     const url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${ufValue}/municipios`
 
     fetch(url)
     .then(res => res.json())
     .then( cities => {
         
         for(const city of cities){
             citySelect.innerHTML += `<option value="${city.nome}">${city.nome} `
         }
         citySelect.disabled = false
     })
     
 }
 
 document
 .querySelector("select[name=uf]")
 .addEventListener("change", getCities) 
 
 const itemToCollect = document.querySelectorAll(".items-grid li")
 
 for(const item of itemToCollect){
     item.addEventListener("click", handleSelectedItem)
 }
 
 const collectedItems = document.querySelector("input[name=items]")
 let selectedItems =[]
 
 function handleSelectedItem(){
     const itemLi= event.target
 
     itemLi.classList.toggle("selected")
 
     const ItemId = event.target.dataset.id
 
     const alreadySelected = selectedItems.findIndex( item =>{
         const itemFound = item == ItemId
         return itemFound 
     })
 
     if(alreadySelected>=0){
         const filteredItems = selectedItems.filter(item =>{
             const itemIsDiferent = item != ItemId
             return itemIsDiferent
         })
         selectedItems = filteredItems
     }else{
         selectedItems.push(ItemId)
     }
     collectedItems.value = selectedItems;
         
 }