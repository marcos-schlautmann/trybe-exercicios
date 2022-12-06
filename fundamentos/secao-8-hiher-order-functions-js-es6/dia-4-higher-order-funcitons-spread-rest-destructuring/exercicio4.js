const people = [
    {
        name: 'Nicole',
        bornIn: 1992,
        nationality: 'Australian',
    },
    {
        name: 'Harry',
        bornIn: 2008,
        nationality: 'Australian',
    },
    {
        name: 'Toby',
        bornIn: 1901,
        nationality: 'Australian',
    },
    {
        name: 'Frida',
        bornIn: 1960,
        nationality: 'Dannish',
    },
    {
        name: 'Fernando',
        bornIn: 2001,
        nationality: 'Brazilian',
    },
    // bornIn: nascido em
];

// escreva filterPeople abaixo

// nascido no século XX é de 1901 até 2000 ||

//  return people.filter((person) => person.bornIn >= 1901 && person.bornIn <= 2000).map((person) => person.name).sort();


const filterPeople = (arr) => {
    return arr.filter(({ bornIn, nationality}) => {
        return nationality === 'Australian' && bornIn > 1900 && bornIn <= 2000;
    });
}

console.log(filterPeople(people));