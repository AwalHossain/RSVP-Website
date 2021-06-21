const form = document.querySelector('form');
const mainDiv = document.querySelector('.main');
const input = form.querySelector('input')
const ul = document.getElementById('invitedList')
const div = document.createElement('div');
const label = document.createElement('label');
label.textContent = "Remove the unchecked Item";


const filterCheckBox = document.createElement('input');
filterCheckBox.type = 'checkbox';

div.append(label);
div.append(filterCheckBox);
mainDiv.insertBefore(div, ul);






filterCheckBox.addEventListener('change', (e) =>{
    const isChecked = e.target.checked;
    const lis = ul.children;
    
    if(isChecked){
        for(let i = 0; i<lis.length; i++){

            let lib = lis[i];
            
            if(lib.className == 'responded'){
                lib.style.display = '';

            }
            else{
                lib.style.display = 'none';
            }
        
        }

    }else{
        for(let i = 0; i<lis.length; i++){

            let lib = lis[i];
        lib.style.display = '';
    }
    }
})

function creatLi(){
    const li = document.createElement('li');
const span = document.createElement('span');
li.append(span)
span.textContent =input.value;
const label = document.createElement('label');
label.textContent = "Confirmed";
const creatInput = document.createElement('input');
creatInput.type = 'checkbox';
const remove = document.createElement('button');
remove.textContent = 'remove';
const edit = document.createElement('button');
edit.textContent = 'edit';


label.append(creatInput);
li.append(label);
li.append(remove);
li.append(edit);

return li

}


form.addEventListener('submit', (e) =>{
    e.preventDefault();
if(input.value !== ''){
    const te = creatLi();
    ul.append(te);
}

input.value = '';


});

ul.addEventListener('change', (e) =>{


   const checkBox = e.target;
   const checked = checkBox.checked;

   const list=checkBox.parentNode.parentNode;
   
   if(checked){
       list.className = 'responded';
       
    //    list.style.border="2px solid rgba(205, 88, 88, 0.993)";
   }
   else{
       list.className = '';
   }
  
});

ul.addEventListener('click', (e)=>{
    if(e.target.tagName === 'BUTTON'){

 const nameAction = {
  remove: ()=>{
    ul.removeChild(li)
  }   ,

    edit: ()=>{
        const span = li.firstElementChild;
        const input =document.createElement('input');
       input.value = span.textContent;
        input.type= 'text';
        li.insertBefore(input, span);
        li.removeChild(span);
       button.textContent = 'save';
    },
    save: ()=>{
        const input = li.firstElementChild;
        const span =document.createElement('span');
        span.textContent= input.value;
        li.insertBefore(span, input);
        li.removeChild(input);
        button.textContent = 'edit';
    }
 }

      const button = e.target;
      const li = button.parentNode;
      const ul = li.parentNode;
    
      if (button.textContent=== 'remove'){
    nameAction.remove()
      }
      else if(button.textContent === 'edit'){
nameAction.edit();
      }

     else if(button.textContent === 'save'){
       nameAction.save();
     }

    }

})


const search= document.querySelector('#search-input');
const searchButton = document.querySelector('#submit');
const lm = ul.children;
const spanText = lm.firstElementChild; 

console.log(spanText);
function searchFunction(serachInput, names){
names.className='';


for(let i = 0; i<names.length; i++){

    if(serachInput.value.length !== 0 && names[i].textContent.toLowerCase().includes(serachInput.value.toLowerCase())){
        names[i].className = 'match';
        console.log(names[i]);

    }
}

}



searchButton.addEventListener('click', (e)=>{

    searchFunction(search, lm);
})

search.addEventListener('keyup', () =>{
    searchFunction(search, lm);
})
