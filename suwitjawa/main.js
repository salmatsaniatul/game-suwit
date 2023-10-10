function getpilihanComputer() {
  const comp = Math.random();

  if (comp < 0.34) return 'kertas';
  if (comp >= 0.34 && comp < 0.67) return 'gunting';
  return 'batu';
}
function getHasil(comp, player) {
  if (player == comp) return 'SERI!';
  if (player == 'kertas') return comp == 'gunting' ? 'MENANG!' : 'KALAH!';
  if (player == 'gunting') return comp == 'kertas' ? 'KALAH!' : 'MENANG!';
  if (player == 'batu') return comp == 'gunting' ? 'KALAH!' : 'MENANG!';
}
function putar() {
  const imgComputer = document.querySelector('.img-Computer');
  const gambar = ['kertas', 'batu', 'gunting'];
  let y = 0;
  const waktuMulai = new Date().getTime();
  setInterval(function () {
    if (new Date().getTime() - waktuMulai > 1000) {
      clearInterval;
      return;
    }
    imgComputer.setAttribute('src', 'img/' + gambar[y++] + '.png');
    if (y == gambar.length) y = 0;
  }, 100);
}

const pilih = document.querySelectorAll('li img');
pilih.forEach(function (a) {
  a.addEventListener('click', function () {
    const pilihanComputer = getpilihanComputer();
    const pilihanPlayer = a.className;
    const hasil = getHasil(pilihanComputer, pilihanPlayer);

    putar();

    setTimeout(function () {
      const imgComputer = document.querySelector('.img-Computer');
      imgComputer.setAttribute('src', 'img/' + pilihanComputer + '.png');

      const info = document.querySelector('.info');
      info.innerHTML = hasil;
    }, 1000);
  });
});
