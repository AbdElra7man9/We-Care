const fs = require('fs');

const addGender = (doctor) => {
  const first_name = doctor['name'].split(' ')[0].toLowerCase();
  console.log(first_name);
  const femaleName = [
    'neven',
    'amira',
    'hanaa',
    'radwa',
    'nehal',
    'manar',
    'dina',
    'eman',
    'hadeer',
    'sara',
    'mona',
    'rehab',
    'dalia',
    'noha',
    'sally',
    'omnia',
    'rasha',
    'marwa',
    'suzan',
    'fatima',
    'nour',
    'mariam',
    'yasmin',
    'fatima',
    'sarah',
    'malak',
    'salma',
    'hana',
    'amira',
    'layla',
    'farah',
    'dina',
    'mona',
    'sana',
    'rania',
    'rasha',
    'zeinab',
    'shaimaa',
    'nada',
    'amani',
    'lamis',
    'rana',
    'marwa',
    'dalia',
    'aziza',
    'samira',
    'hadeel',
    'ghada',
    'saida',
    'nagla',
    'sahar',
    'faten',
    'radwa',
    'rehab',
    'lamia',
    'heba',
    'nadia',
    'maha',
    'sohair',
    'nesrine',
    'hagar',
    'eman',
    'shaza',
    'amal',
    'zeina',
    'mona',
    'fadia',
    'nisreen',
    'asmaa',
  ];
  if (femaleName.includes(first_name)) {
    doctor.gender = 'female';
  } else doctor.gender = 'male';
};

const imagesMale = [
  'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
  'https://plus.unsplash.com/premium_photo-1658506671316-0b293df7c72b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZG9jdG9yfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
  'https://images.unsplash.com/photo-1537368910025-700350fe46c7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGRvY3RvcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
  'https://images.unsplash.com/photo-1622253692010-333f2da6031d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGRvY3RvcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
  'https://images.unsplash.com/photo-1550831107-1553da8c8464?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fGRvY3RvcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
  'https://images.unsplash.com/photo-1612531386530-97286d97c2d2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTB8fGRvY3RvcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
  'https://images.unsplash.com/photo-1618498082410-b4aa22193b38?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Njl8fGRvY3RvcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
  'https://images.unsplash.com/photo-1603843722974-3a4031f9f97c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTJ8fGRvY3RvcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
  'https://plus.unsplash.com/premium_photo-1661767273476-1cef336b6285?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTIxfHxkb2N0b3J8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
  'https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTEyfHxkb2N0b3J8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
];
const imagesFemale = [
  'https://images.unsplash.com/photo-1594824476967-48c8b964273f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGRvY3RvcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
  'https://images.unsplash.com/photo-1638202993928-7267aad84c31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGRvY3RvcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
  'https://images.unsplash.com/photo-1551884170-09fb70a3a2ed?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGRvY3RvcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
  'https://images.unsplash.com/photo-1527613426441-4da17471b66d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDF8fGRvY3RvcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
  'https://plus.unsplash.com/premium_photo-1661766743908-ca87957f4bb2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDl8fGRvY3RvcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
  'https://plus.unsplash.com/premium_photo-1661757221486-183030ef8670?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzN8fGRvY3RvcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
  'https://plus.unsplash.com/premium_photo-1661766718556-13c2efac1388?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTd8fGRvY3RvcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
  'https://images.unsplash.com/photo-1592410811000-80b57d6f18ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTU5fHxkb2N0b3J8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
  '',
];
specialists = [
  'Allergist',
  'Andrologist',
  'Anesthesiologist',
  'Audiologist',
  'Cardiologist',
  'Cardiothoracic Surgeon',
  'Dentist',
  'Dermatologist',
  'Endocrinologist',
  'ENT Doctor (Otolaryngologist)',
  'Family Doctor (General Practitioner)',
  'Gastroenterologist',
  'General Surgeon',
  'Gynecologist',
  'Hematologist',
  'Hepatologist',
  'Infertility Specialist',
  'Internist',
  'Laboratory',
  'Nephrologist',
  'Neurologist',
  'Neurosurgeon',
  'Nutritionist',
  'Obesity Surgeon',
  'Oncologist',
  'Ophthalmologist',
  'Orthopedist',
  'Pediatric Surgeon',
  'Pediatrician',
  'Phoniatrician',
  'Physiotherapist',
  'Plastic Surgeon',
  'Psychiatrist',
  'Pulmonologist',
  'Radiologist',
  'Rheumatologist',
  'Urologist',
  'Vascular Surgeon',
];

const filePath = './newFile.json';
let jsonContent = [];
// Read the file
const data = fs.readFileSync(filePath);
jsonContent = JSON.parse(data);
jsonContent.forEach((element) => {
  addGender(element);
  element.email = `${element.username}@gmail.com`;
  element.passwordConfirm = element.password;
  element.specialization = specialists[Math.floor(Math.random() * 30)];
  element.status = 'accepted';
  element.bio = `Dr. ${element.name} is a ${element.specialization} with over ${
    Math.floor(Math.random() * 10) + 5
  } years of experience.`;
  element.profilePicture = element.profilePicture =
    element.gender === 'male'
      ? imagesMale[Math.floor(Math.random() * 7)]
      : imagesFemale[Math.floor(Math.random() * 7)];
  element.confirmed = true;
});
const jsonString = JSON.stringify(jsonContent);
fs.writeFileSync('./doctors.json', jsonString);

console.log('*');
