// new Set() - accepts iterable objects

const products = [
  {
    title: 'high-back bench',
    company: 'ikea',
  },
  {
    title: 'albany table',
    company: 'marcos',
  },
  {
    title: 'accent chair',
    company: 'caressa',
  },
  {
    title: 'wooden table',
    company: 'ikea',
  },
];

// const companies = products.map((item) => {
//   return item.company;
// });

// console.log(companies);

// const uniqueCompanies = new Set(companies);
// console.log(uniqueCompanies);

// const finalCompanies = [...uniqueCompanies];
// console.log(finalCompanies);

const result = [...new Set(products.map((item) => item.company))];
console.log(result);
