const phone={name:'iphone',color:'white',price:3000}
// object acces keys
const keys=Object.keys(phone)

// object acces values
const values=Object.values(phone)

// seal acce the the propertis change
Object.seal(phone)

// freeeze acces just a properties not chenged
Object.freeze(phone)
phone.name='symphoney'
phone.ram='2gb'
console.log(phone)