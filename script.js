//1
let array = [3, 5, 7, 8, 9]

function getElems(array) {
    const [elem1, elem2, ...rest] = array;
    const sumOfTwo = elem1 + elem2;
    var multiplication = 1;
    for (let i = 0; i < rest.length; i++) {
        multiplication *= rest[i];
    }
    var arr = [sumOfTwo, multiplication];

    return arr;
}
console.log(getElems(array));

//2
var user = {
    banks: [{
            adress: {
                city: 'Rustavi'
            }
        },
        {
            adress: {
                city: 'Tbilisi'
            }
        },
        {
            adress: {
                city: 'Batumi'
            }
        },
        {
            adress: {
                Kalaki: 'Batumi'
            }
        }
    ],

}

function getCity(user) {

    var city = user.banks[2].adress.city;
    var cityUndefined = user.banks[3].adress.city;

    return [city, cityUndefined];
}

console.log(getCity(user));

//3
var obj1 = {
    banks: [{
            adress: {
                city: 'Rustavi'
            }
        },
        {
            adress: {
                city: 'Tbilisi'
            }
        },
        {
            adress: {
                city: 'Batumi'
            }
        },
        {
            adress: {
                Kalaki: 'Batumi'
            }
        }
    ],

}

function copyOfObject(obj) {

    var {...obj2 } = obj;

    return obj2;
}

console.log(copyOfObject(obj1))