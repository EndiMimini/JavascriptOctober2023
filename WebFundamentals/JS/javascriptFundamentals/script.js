var age;
var male = true;
var female = false;
var name = 'Endi';
                    // 0       1           2             3         4        5             6
var daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

var person = {
    'name': 'Endi',
    'lastName': 'Mimini',
    'age': 24,
    'email': 'endimimini@betaplan.al',
    'languages': [
        'English', // 0 
        {'Native': ['Something', 'Albania'],'Non-native': 'Englisht'}, //1
        'Italian' // 2
    ]
}

// daysOfWeek[1]= 'TUE'
// console.log(daysOfWeek)

// console.log(person.email)
// console.log(person.languages[1]['Native'][1])

var age = 18

// if (age < 21){
//     console.log('You cant drive! At least legally!')
// }
// if (age <18){
//     console.log('You still cant drive!')
// }
// else{
//     console.log('Weekend is around the corner!')
// }



// for(var i = 0;i < 10; i++){
//     console.log(i)
// }

function sayMyName(name){
    console.log(name)   
}

function sum(a,b){
    return a+b
}

console.log(sum(7,9))

console.log(sum(12,8))

console.log(sum(12322,83223))