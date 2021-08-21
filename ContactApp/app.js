const fs = require('fs');

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// membuat folder data jika belum ada
const dirPath = './data';
if(!fs.existsSync(dirPath)) {
  fs.mkdirSync(dirPath);
}

// membuat file contacts.json jika belum ada
const dataPath = './data/contacts.json';
if(!fs.existsSync(dataPath)) {
  fs.writeFileSync(dataPath, '[]', 'utf-8');
}

const aQuestion1 = () => {
  return new Promise((resolve, reject) => {
    rl.question('Masukkan nama anda : ', (nama) => {
      resolve(nama);
    })
  })
}

const aQuestion2 = () => {
  return new Promise((resolve, reject) => {
    rl.question('Masukkan no telpon anda : ', (noTelp) => {
      resolve(noTelp);
    })
  })
}

const main = async () => {
  const nama = await aQuestion1();
  const noTelp = await aQuestion2();

  const contact = { nama, noTelp };
    
  const file = fs.readFileSync('data/contacts.json', 'utf-8');
  
  const contacts = JSON.parse(file);

  contacts.push(contact);

  fs.writeFileSync('data/contacts.json', JSON.stringify(contacts));

  console.log("Terima kasih sudah memasukkan data");
  rl.close();
}

main();