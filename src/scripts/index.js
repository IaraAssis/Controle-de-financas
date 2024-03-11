
import { insertedValues } from "./valuesData.js";
import { handleDeleteValue } from "./modal.js";

const sumValues = document.querySelector('.value__sum');
const notValue = document.querySelector('.notValue')
const summaryAll = document.querySelector('.summary__all');
const summaryInput = document.querySelector('.summary__input');
const summaryExit = document.querySelector('.summary__exit');


export const functionSumValues = (array) => {
    console.log(array)
    const total = array.reduce((accumulator, currentValue) => accumulator + currentValue.value, 0);
    sumValues.innerText = total > 0 ? `R$ ${total.toFixed(2)}` : '00,00';
    
    if (total <= 0) {
        notValue.style.display = 'flex';
    } else {
        notValue.style.display = 'none';
    }

};

export const createObjectList = (array) => {
    const valueList = document.querySelector('.value__list');

    valueList.innerHTML = '';

    array.forEach((item) => {

        const listItem = document.createElement('div');
        const valueInput = document.createElement('span');
        const button = document.createElement('button');
        const imgDump = document.createElement('img');

        listItem.classList.add('value__item');
        imgDump.classList.add('delete__value')

        imgDump.dataset.userId = item.id

        valueInput.innerText = `R$ ${item.value.toFixed(2)}`;
        button.innerText = item.categoryID === 0 ? 'Entrada' : 'Saída';
        imgDump.src = './src/assets/trash.png';
        imgDump.alt = 'Lixo';

        listItem.appendChild(valueInput);
        listItem.appendChild(button);
        listItem.appendChild(imgDump);
        valueList.appendChild(listItem);
        
        imgDump.addEventListener('click', (event) => {
            event.preventDefault()
            const userId = Number(event.target.dataset.userId)
            
            handleDeleteValue(userId, insertedValues)
            
            
            
        })
        
    });
    functionSumValues(insertedValues)
};


createObjectList(insertedValues);

const filterValues = (categoryId) => {
    const filteredValues = categoryId === 'all' ? insertedValues : insertedValues
    .filter((item) => item.categoryID === categoryId);
    
    createObjectList(filteredValues);

    functionSumValues(filteredValues);
};


summaryAll.addEventListener('click', () => {
    filterValues('all');
    
});

summaryInput.addEventListener('click', () => {
    filterValues(0);
    
    
    
});

summaryExit.addEventListener('click', () => {
    filterValues(1);
    
});


