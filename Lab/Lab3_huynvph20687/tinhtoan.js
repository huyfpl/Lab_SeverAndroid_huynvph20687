
const so1 = document.getElementById('so1');
const so2 = document.getElementById('so2');
const ketqua = document.getElementById('kq');
const btncong = document.getElementById('cong');
const btntru = document.getElementById('tru');
const btnnhan = document.getElementById('nhan');
const btnchia = document.getElementById('chia');

btncong.addEventListener('click', function() {
  const a = parseFloat(so1.value);
  const b = parseFloat(so2.value);
  const result = cong(a, b);
  ketqua.innerHTML = result;
});

btntru.addEventListener('click', function() {
  const a = parseFloat(so1.value);
  const b = parseFloat(so2.value);
  const result = tru(a, b);
  ketqua.innerHTML = result;
});

btnnhan.addEventListener('click', function() {
  const a = parseFloat(so1.value);
  const b = parseFloat(so2.value);
  const result = nhan(a, b);
  ketqua.innerHTML = result;
});

btnchia.addEventListener('click', function() {
  const a = parseFloat(so1.value);
  const b = parseFloat(so2.value);
  const result = chia(a, b);
  ketqua.innerHTML = result;
});

const cong = (a, b) => {
  return a + b;
}

const tru = (a, b) => {
  return a - b;
}

const nhan = (a, b) => {
  return a * b;
}

const chia = (a, b) => {
  return a / b;
}