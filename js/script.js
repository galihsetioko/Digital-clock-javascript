// const nama = 'Galih Setioko';
// const timFavorit = 'Persib Bandung';

// // Membuat tagged template
// function display(strings , ...arg) {
//     let isi = '';
//     strings.forEach((str , i) => {
//         isi += `${strings[i]}${arg[i] || ''}`
//     })
//     return isi;
// }
// value = display `Halo nama saya ${nama} dan tim Favorit saya adalah ${timFavorit}`;
// console.log(value)

// inputNama = prompt("Masukkan nama anda : ");

// function cetakNama(string , ...args) {
//     return string.reduce((str, value, i) => {
//         return `${str}${value} <i>&nbsp;${args[i] || ''}&nbsp;</i> `
//     },'')
// }

// output =cetakNama `Halo ${inputNama} selamat datang di komputer ini , semoga ${inputNama} bisa betah disini`;
// document.body.innerHTML = output;

jam = document.querySelector('.clock ul li:first-child');
menit = document.querySelector('.clock ul li:last-child')

setInterval( () => {
    waktu = new Date
    jam.innerHTML = (waktu.getHours.length != 1) ? waktu.getHours():`${'0'+waktu.getHours()}`
    menit.innerHTML = waktu.getMinutes()
},1000)