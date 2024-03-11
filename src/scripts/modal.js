// /* Desenvolva sua lógica aqui */
import { insertedValues } from './valuesData.js'
import { functionSumValues, createObjectList } from './index.js'


export const renderModal = (array) => {

    const insertValueButton = document.querySelector('.insertValue');
    let priceItem = document.querySelector('.input__value')
    const modalClose = document.querySelector('.modal__controller')
    let selectedRadio = document.getElementsByName('select')
    let verify = '';
    
        insertValueButton.addEventListener('click', (event) => {
            event.preventDefault()
    
    
            selectedRadio.forEach((select) => {
                if (select.checked) {
                    verify = select.value
                }
            })
    
            const newItem = {
                id: array.length + 1,
                value: Number(priceItem.value),
                categoryID: Number(verify)

            };
            priceItem.value = ''
    
    
            insertedValues.push(newItem);
            functionSumValues(insertedValues)
            createObjectList(insertedValues)

            modalClose.close()
        });
    

};
renderModal(insertedValues)

export const handleDeleteValue = (id, insertedValues) => {

    insertedValues.forEach((element, index) => {
        
        if (element.id === id) {
            insertedValues.splice(index, 1)
        }
    })

    createObjectList(insertedValues);

}


export const openModal = () => {

    const modalController = document.querySelector('.modal__controller');
    const button = document.querySelector('.header__button');

    button.addEventListener('click', () => {
        modalController.showModal()

        closeModal()
    })

}

export const closeModal = () => {
    const modalController = document.querySelector('.modal__controller');
    const closeButton = document.querySelector('.modal__close');
    const cancelValue = document.querySelector('.cancel__buton');

    closeButton.addEventListener('click', (event) => {
        event.preventDefault()
        modalController.close()

    })

    cancelValue.addEventListener('click', (event) =>{
        event.preventDefault()
        modalController.close()
    } )
}
openModal()















