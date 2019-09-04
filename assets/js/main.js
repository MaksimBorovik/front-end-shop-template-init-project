let cartCounterLabel = document.querySelector('#cart-counter');
let buttonsContainer = document.querySelector('.content');

let cartCounter = 0;
let cartPrice = 0;


let btnClickHandler = (e) => {
  let target = e.target;

  if (target.classList.contains('item-actions__cart')) {
    cartCounterLabel.innerHTML = ++cartCounter;
    if (cartCounter === 1) cartCounterLabel.style.display = 'block';

    buttonsContainer.removeEventListener('click', btnClickHandler);

    const mockData = target.parentElement.previousElementSibling.innerHTML; // выход в контейнер

    // console.log(mockData.replace('$', '').replace(' <sup>', '.').replace('</sup>', ''));

    target.innerHTML = (() => {
      cartPrice += +mockData.replace(/^\$(\d+)\s\D+(\d+).*$/gu, '$1.$2');
      cartPrice = Math.round(cartPrice * 100) / 100;
      return `ADDED ${cartPrice.toFixed(2)} $`;
    })();
    // cartPrice += +mockData.replace(/^\$(\d+)\s\D+(\d+).*$/gu, '$1.$2');
    // cartPrice = Math.round(cartPrice * 100) / 100;
    // target.innerHTML = `ADDED ${cartPrice.toFixed(2)} $`;
    // console.log(cartPrice.toFixed(2));

    const restoreHTML = target.innerHTML;

    setTimeout(() => {
      target.innerHTML = restoreHTML;
      buttonsContainer.addEventListener('click', btnClickHandler);
    }, 1000);
  }
};

buttonsContainer.addEventListener('click', btnClickHandler);


// let cartCounter = 0;
// let cartPrice = 0;
// let cartCounterLabel = document.querySelector('#cart-counter');
// let buttonsContainer = document.querySelector('.page-content');

// let btnClickHandler = (e) => {
//   let target = e.target;

//   if (target.classList.contains('item-actions__cart')) {

//     cartCounterLabel.innerHTML = `${++cartCounter}`;
//     if (cartCounter === 1) cartCounterLabel.style.display = 'block';

//     let restoreHTML = target.innerHTML;

//     target.innerHTML = (() => {
//       const mockData = target.parentElement.previousElementSibling.innerHTML;

//       cartPrice += Math.round(+mockData.
//         replace(/^\$(\d+)\s\D+(\d+).*$/gu, '$1.$2') * 100) / 100;

//       return `Added ${cartPrice.toFixed(2)} $`;
//     })();

//     buttonsContainer.removeEventListener('click', btnClickHandler);

//     setTimeout((elem, restore) => {
//       elem.innerHTML = restore;
//       buttonsContainer.addEventListener('click', btnClickHandler);
//     }, 2000, target, restoreHTML);
//   }
// };

// buttonsContainer.addEventListener('click', btnClickHandler);
