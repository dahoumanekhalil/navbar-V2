let searchBox = document.querySelector('.rightNavbar');
let searchIcon = document.querySelector('.rightNavbar i');
let inputSearch = document.querySelector(' .rightNavbar div');
let input = document.querySelector('.inputBox input');

searchIcon.addEventListener('click', () => {
    searchBox.classList.toggle('active')
})

document.querySelector('.inputBox > i').onclick = () => {
    document.querySelector('.inputBox input').value = '';
}

// input.addEventListener('focus', () => {
//     if(input.value != '') {
//         document.querySelector('.inputBox > i').style.display = 'flex'
//     } else {
//         document.querySelector('.inputBox > i').style.display = 'none'
//     }
// })

// input.onfocus = () => {
//     if(input.value != '') {
//         document.querySelector('.inputBox > i').style.display = 'flex'
//     } else {
//         document.querySelector('.inputBox > i').style.display = 'none'
//     }
// }













// searchBox.addEventListener('click', (ele) => {
//     if(ele.target == searchIcon) {
//         searchBox.style.width = searchBox.style.width == '280px' ? '40px': '280px';
//         if(inputSearch.style.display == 'flex') {
//             inputSearch.style.display = 'none'
//         } else {
//             inputSearch.style.display = 'flex'
//         }
//     }
// })



