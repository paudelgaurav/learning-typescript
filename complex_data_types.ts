enum Role { ADMIN = 'Admin', EMPLOYEE = 'Employee' }

const person: {
    name: string;
    age: number;
    hobbies: [string, string];
    role: Role
} = {
    name: 'Ram',
    age: 25,
    hobbies: ['coding', 'sports'],
    role: Role.ADMIN
};

console.log(person.role);