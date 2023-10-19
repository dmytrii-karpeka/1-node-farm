const fs = require('fs');
const superagent = require('superagent');

const readFilePromise = (file) => {
  return new Promise((resolve, reject) => {
    fs.readFile(file, (err, data) => {
      if (err) reject('I could not find that file 😭');
      resolve(data);
    });
  });
};

const writeFilePromise = (file, data) => {
  return new Promise((resolve, reject) => {
    fs.writeFile(file, data, (err) => {
      if (err) reject('I could not write file 🙅‍♀️');
      resolve('Success!');
    });
  });
};

const getDogPicture = async () => {
  try {
    const data = await readFilePromise(`${__dirname}/dog.txt`);
    console.log(`Breed: ${data}`);

    const resPromise1 = superagent.get(
      `https://dog.ceo/api/breed/${data}/images/random`
    );
    const resPromise2 = superagent.get(
      `https://dog.ceo/api/breed/${data}/images/random`
    );
    const resPromise3 = superagent.get(
      `https://dog.ceo/api/breed/${data}/images/random`
    );

    const all = await Promise.all([resPromise1, resPromise2, resPromise3]);
    const imgs = all.map((e) => e.body.message);
    
    await writeFilePromise('dog-img.txt', imgs.join('\n'));
    console.log('Random dogs is saved to file!');
  } catch (err) {
    console.log(err);
  }
  return '2: READY!';
};

(async () => {
  try {
    console.log('1: Will get dog pictures');
    console.log(await getDogPicture());
    console.log('3: Done getting dog pictures');
  } catch (err) {
    console.log('ERRORR' + err);
  }
})();

// console.log('1: Will get dog pictures');
// getDogPicture()
//   .then((pr) => {
//     console.log(pr);
//     console.log('3: Done getting dog pictures');
//   })
//   .catch((err) => {
//     console.log('ERRORR' + err);
//   });

// readFilePromise(`${__dirname}/dog.txt`)
//   .then((data) => {
//     console.log(`Breed: ${data}`);

//     return superagent.get(`https://dog.ceo/api/breed/${data}/images/random`);
//   })
//   .then(res => {
//     console.log(res.body.message);

//     return writeFilePromise('dog-img.txt', res.body.message);

//     // fs.writeFile('dog-img.txt', res.body.message, (err) => {
//     //   console.log('Random dog is saved to file!');
//     // });
//   })
//   .catch((err) => {
//     return console.log(err);
//   });
