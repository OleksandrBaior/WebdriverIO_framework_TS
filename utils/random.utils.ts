import { faker } from '@faker-js/faker';

export function randomValue(value: 'firstName' | 'middleName' | 'email' | 'phoneNumber' | 'text') {
    switch (value) {
        case 'firstName':
            return faker.person.firstName();
        case 'middleName':
            return faker.person.middleName();
        case 'email':
            return faker.internet.email();
        case 'phoneNumber':
            return faker.string.numeric(7);
        case 'text':
            return faker.lorem.word(5);
    }
}
