const employeesInfos = (fullName) => {
    const emailGenerator =  fullName.toLowerCase().replace(' ', '_');
    return {fullName, email: `${emailGenerator}@trybe.com`}
};

const newEmployees = (employeesInfos) => {
    const employees = {
        id1: employeesInfos('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
        id2: employeesInfos('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
        id3: employeesInfos('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
    }

    return employees;
};

console.log(newEmployees());