const bcrypt = require('bcryptjs');

const salt = bcrypt.genSaltSync(10);

console.log('salt:', salt);

const password = 'monkeyFuzz';

const hash = bcrypt.hashSync(password, salt);

console.log('hash:', hash);

const hashedPassword = '$2a$10$8Wox7skbv54zWGrqUGMYcu.eXaTu2wGUTadMLg9/0VmXaTkEGJvjm';

// const result = bcrypt.compareSync('monkeyFuzz', hashedPassword);

// console.log('result:', result);
