// Task 1
// 1.
// let a = ['A','B','C','D']
// Covert to E F G H
let a = ['A','B','C','D']
let task1 = "the array is: " + a + "<br>"
document.getElementById('array').innerHTML = task1
a[0]='E', a[1]='F', a[2]='G', a[3]='H'
let task2 = "the array is: " + a + "<br>"
document.getElementById('array1').innerHTML = task2

// Task 2
// 2. 
// let b = ['A','B','B','D'];
// Filter Same Index
let b = ['A','B','B','D'];
let task3 = "the array is: " + b + "<br>"
document.getElementById('array2').innerHTML = task3
let sort=b.splice(1,2)
let task4 = "the array is: " + b + "<br>"
document.getElementById('array3').innerHTML = task4
let task5 = "the sorted array is: " + sort + "<br>"
document.getElementById('array4').innerHTML = task5
// Task 3
// let c = ['A','B','C','D'];
// Console C 1 Value Find Method
let c = ['A','B','C','D'];
let task6 = "the array is: " + c + "<br>"
document.getElementById('array5').innerHTML = task6
let value = c.find(function(e){
    return e == 'C'
})
let task7 = "the value is: " + value + "<br>"
document.getElementById('array6').innerHTML = task7
// Task 4
//let d = ['A','B,','C','D']
//Find Index[] of C
let d = ['A','B','C','D'];
let task8 = "the array is: " + d + "<br>"
document.getElementById('array7').innerHTML = task8
let index = d.findIndex(function(e){
    return e == 'C'
})
let task9 = "the index is: " + index + "<br>"
document.getElementById('array8').innerHTML = task9

// Task 5
// let e = ['A','B','C','D', 'B']
//Find Same Element or Value using every()
let e = ['A','B','C','D', 'B'];
let task10 = "the array is: " + e + "<br>"
document.getElementById('array9').innerHTML = task10
let same = e.every(function(el){
    return el == 'B'
})
let task11 = "the value is: " + same + "<br>"
document.getElementById('array10').innerHTML = task11
// 6.
//let g  - ['A','B','C','D','E','A']
//Find atleast one ELement using some()
let g = ['A','B','C','D','E','A'];
let task12 = "the array is: " + g + "<br>"
document.getElementById('array11').innerHTML = task12
let atleast = g.some(function(el){
    return el == 'A'
})
let task13 = "the value is: " + atleast + "<br>"
document.getElementById('array12').innerHTML = task13