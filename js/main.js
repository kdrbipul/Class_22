function makeGreen(){
    document.body.style.backgroundColor = 'green';
}

const yellowBtn = document.getElementById('make-yellow');
// console.log(yellowBtn);
yellowBtn.onclick = makeYellow;
function makeYellow(){
    document.body.style.backgroundColor = 'yellow';
}

// const goldenBtn = document.querySelector('#make-golden');
// console.log(goldenBtn);
// goldenBtn.onclick = function(){
//     document.body.style.backgroundColor = "gold";
// }

// goldenBtn.addEventListener('click',()=>{
//     document.body.style.backgroundColor = 'pink';
// })

document.querySelector('#make-golden').addEventListener('click',()=>{
    document.body.style.backgroundColor ="pink";
})
