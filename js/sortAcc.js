// paspaudus ant mygtuko ASC keicias i DESC ir atvirksciai
const btnEl = document.getElementById('sort-btn');
const orderEl = btnEl.firstElementChild;
// console.log('orderEl ===', orderEl);

btnEl.addEventListener('click', (event) => {
  // event.target.firstElementChild.textContent = 'DESC';
  // jei dabartine reiksme yra DESC tai pakeisti i ASC, kitu atveju DESC
  orderEl.textContent = 'DESC';
});

// kai paspaudiam ant Question 1 parodom po juo esanti elementa,
// dar karta paspaudus paslepiam (classList.toggle())

// 3. padarom kad paspaudus nat bet kurio Question el butu parodomas po juo esantis el

// 4. padarom kad kai paspaudziam ant elemento, jei yra atsidares kazkuris kitas, tai uzdarom atsidariusius ir paliekam atidaryta tik ta kuri paspaudem.

// 5. padaryti kad graziai issplestu is susitrauktu textas. paspaudimo metu.

// vienas accordionas
const titleElArr = document.querySelectorAll('.acc__title');
console.log('titleElArr ===', titleElArr);
for (let i = 0; i < titleElArr.length; i++) {
  const element = titleElArr[i];
  element.addEventListener('click', toggleText);
}
// titleElArr.addEventListener('click', toggleText);

function toggleText(event) {
  // elementas ant kurio paspaudem
  const el = event.target;
  // priekyje esanciam el toglinti klase show
  hideAllAccTexts();
  // el.nextElementSibling.classList.add('show');
  console.log(el.nextElementSibling.scrollHeight);
  el.nextElementSibling.style.height = el.nextElementSibling.scrollHeight + 'px';
}
const accTextElArr = document.querySelectorAll('.acc__text');
// console.log('accTextElArr ===', accTextElArr);
function hideAllAccTexts() {
  for (let i = 0; i < accTextElArr.length; i++) {
    const element = accTextElArr[i];
    // element.classList.remove('show');
    element.style.height = 0;
  }
}
console.dir(accTextElArr[1]);
