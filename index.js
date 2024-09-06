const inputSection = document.querySelector('#inputSection');
const inputMoney = document.querySelector('#inputMoney');
const select = document.querySelector('#select');
const option = select.querySelectorAll('option');
const current = document.querySelector('#current');
const blance = document.querySelector('#blance');
const mainText = document.querySelector('#mainText');
const withdraw = document.querySelector('#withdraw');
const history = document.querySelector('#historyClear');


const getButton = inputSection.querySelectorAll('button');
let sum = 0;

for(let b = 0; b < getButton.length; b++){
  getButton[b].addEventListener('click', (ss) => {

    console.log(ss.target.innerHTML);
    sum++;

    for (let i = 0; i < option.length; i++) {
      if (inputMoney.value && select) {
        if (inputMoney.value >= 20 && option[i].selected === true) {
          if (current.innerHTML === '') {
            current.innerHTML = option[i].innerHTML;
          } else if (current.innerHTML !== option[i].innerHTML) {
            alert('please withdraw all money than you change currency');
          }
          if (blance.innerHTML === '') {
            if(ss.target.innerHTML === 'ADD'){
              blance.innerHTML = inputMoney.value;
            }
          } else if (
            blance.innerHTML !== '' &&
            current.innerHTML === option[i].innerHTML
          ) {
            if(ss.target.innerHTML === 'ADD'){
              blance.innerHTML =
                parseInt(inputMoney.value) + parseInt(blance.innerHTML);
            }else if(ss.target.innerHTML === 'withdraw'){
              if (parseInt(inputMoney.value) > parseInt(blance.innerHTML)) {
                alert('infulance blance');
              } else if (parseInt(inputMoney.value) < parseInt(blance.innerHTML)) {
                blance.innerHTML =
                  parseInt(blance.innerHTML) - parseInt(inputMoney.value);
              }else if( inputMoney.value === blance.innerHTML){
                location.reload()
              }
            }
          }
        }
      }
    }

    if (inputMoney.value < 20) {
      let div = document.createElement('div');
      div.className = 'despatchMain error';
      

      let button = document.createElement('button');
      button.className = 'despatch ';
      
      div.appendChild(button);

      let p = document.createElement('p');
      p.innerHTML = 'please input minimum 100 money add';
      div.appendChild(p);
      inputSection.appendChild(div);
    }

    const despatchMain = inputSection.querySelectorAll('.despatchMain');
    const despatch = inputSection.querySelectorAll('.despatch');

    setTimeout(() => {
      if (inputMoney.value < 20) {
        for (let i = 0; i < despatch.length; i++) {
          despatch[i].addEventListener('click', () => {
            despatchMain[i].style.display = 'none';
          });
          let get = new Event('click');
          despatch[i].dispatchEvent(get);
        }
      }
    },1000);

    // Add money Transition

    const transition = document.querySelector('#transition');
    const transitionMenu = document.querySelector('#transitionMenu');

    //   const singleLetter = transitionMenu.querySelectorAll('#singleLetter');

    if (parseInt(inputMoney.value) + parseInt(blance.innerHTML)) {
      let clonemore = transitionMenu.cloneNode('true');
      clonemore.className = 'modify' + ' ' + 'olta' + sum;
      transition.appendChild(clonemore);
    }


    const get = transition.querySelector('.olta' + sum);
    const get2 = get.querySelector('#blance2');
    const get3 = get.querySelector("#deposit")
    const get4 = get.querySelector('.listBlance');

    const modify = transition.querySelectorAll('.modify');
    for (let m = 0; m < modify.length; m++) {
      let single = modify[m].querySelector('#singleLetter');
      // let deposit = modify[m].querySelector('#deposit');
      let dateMore = modify[m].querySelector('#date');
      // let listBlance = modify[m].querySelector('.listBlance');
      let currency = modify[m].querySelector('#currency');

      let date = new Date();
      let getDate = date.getMonth();
      let getDay = date.getDay();
      single.innerHTML = current.innerHTML;
      single.style.fontSize = '15px';

      if (ss.type === 'click' ) {
        if ((ss.target.innerHTML === 'ADD')) {
          get3.innerHTML = 'deposit';
         get3.style.color = '#A65BF7';
          get4.style.color = '#6ED9F9';
          get4.style.fontWeight = 'bold';
        } else if (ss.target.innerHTML === 'withdraw') {
          get3.innerHTML = 'withdraw';
          get3.style.color = '#09CE68';
            get4.style.color = 'red';
            get4.style.fontWeight = 'bold';
        }
        
        dateMore.innerHTML =
          getDay + '/' + getDate + ' ' + 'April' + ' ' + '2024';
        // listBlance.style.color = '#6ED9F9';
        // listBlance.style.fontWeight = 'bold';
        currency.innerHTML = current.innerHTML;

        if (inputMoney.value !== '' && ss.target.innerHTML === 'ADD') {
          
          get2.innerHTML = inputMoney.value;
        }else if(inputMoney.value !== '' && ss.target.innerHTML === 'withdraw'){
          get2.innerHTML = '-' + inputMoney.value;
        }
      }
    }

    inputMoney.value = '';


  });

  history.addEventListener("click" , (h) => {
    const clear = transition.querySelectorAll('.modify');

    h.preventDefault();

   for(let d = 0 ; d < clear.length; d++ ){
    clear[d].remove();
   }
  })
}






    // withdraw.addEventListener('click', (w) => {
    
    //   if(w.type ==='click'){
    //     let num = parseInt(inputMoney.value);
    //     blance.innerHTML = parseInt(blance.innerHTML) - num;
    //   }
    // });