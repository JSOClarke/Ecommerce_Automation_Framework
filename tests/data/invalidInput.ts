export const invalidInput = [
  { firstname: '',
    lastname: 'Smith',
    email: 'test@example.com', 
    phone: '1234567890', 
    expectedError: ['first', 'name', 'blank','size']
},
  { firstname: 'Alice', lastname: '', email: 'test@example.com', phone: '1234567890', expectedError: ['last', 'name', 'blank']},

];
