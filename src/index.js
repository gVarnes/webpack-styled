import './index.scss';

async function chesk() {
  await fetch('https://google.com');
}

chesk().then(() => {
  console.log(success);
}).catch(() => {
  console.log('error')
})
