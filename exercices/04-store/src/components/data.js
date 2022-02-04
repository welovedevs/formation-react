import jsonData from './list/data.json';

export let persons = [...jsonData];

export const addPerson = (newUser) => {
    persons = [...persons, newUser];
};

export const deletePerson = (nameToDelete) => {
    persons = persons.filter(({ name }) => name !== nameToDelete);
};
