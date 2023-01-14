import { renderSearchFormBlock } from './search-form.js'
import { renderSearchStubBlock } from './search-results.js'
import { renderUserBlock } from './user.js'
import { renderToast } from './lib.js'

class User {
  name: string;
  avatar: string;
  favoriteItemsAmount: number;

  constructor(name: string, avatar: string, favoriteItemsAmount:number) {
    this.name = name;
    this.avatar = avatar;
    this.favoriteItemsAmount = favoriteItemsAmount;
  }
}
const user = new User('Wade Warren','/img/avatar.png', 0 )
//--------------
function twoDigits(num) {
  return ('0' + num).slice(-2);
}
function getLastDayOfMonth(year, month) {
  let date = new Date(year, month, 0);
  return date.getDate();
}

const currentDate = new Date();
const year = currentDate.getFullYear();
const month = currentDate.getMonth() + 1;
const day = currentDate.getDate();

const arrivalDate = `${year}-${twoDigits(month)}-${twoDigits(day+1)}`
const departureDate =`${year}-${twoDigits(month)}-${twoDigits(day+3)}`
const maxDateChoose = `${year}-${twoDigits(month+1)}-${twoDigits(getLastDayOfMonth(year, month+1))}`

console.log(arrivalDate, departureDate, maxDateChoose);


//-------------------
window.addEventListener('DOMContentLoaded', () => {
  renderUserBlock(user.name, user.avatar, user.favoriteItemsAmount )
  renderSearchFormBlock(arrivalDate, departureDate, maxDateChoose)
  renderSearchStubBlock()
  renderToast(
      {text: 'Это пример уведомления. Используйте его при необходимости', type: 'success'},
      {name: 'Понял', handler: () => {console.log('Уведомление закрыто')}}
  )
})
