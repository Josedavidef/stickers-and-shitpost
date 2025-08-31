const imgjp = document.getElementById('josepene');
const hoverjp = 'Elements/josepenehv.jpg';
const originaljp = 'Elements/Josepene.jpg';

imgjp.addEventListener('mouseover', function() {
    imgjp.src = hoverjp;
});

imgjp.addEventListener('mouseout', function() {
    imgjp.src = originaljp;
})

const imgto = document.getElementById('tomas');
const hoverto = 'Elements/tomashover.jpg';
const originalto = 'Elements/Tomas.jpg';

imgto.addEventListener('mouseover', function() {
    imgto.src = hoverto;
});

imgto.addEventListener('mouseout', function() {
    imgto.src = originalto;
});

const imgal = document.getElementById('Alesito');
const hoveral = 'Elements/alesito2.jpg';
const originalal = 'Elements/alesito.jpg';

imgal.addEventListener('mouseover', function() {
    imgal.src = hoveral;
});

imgal.addEventListener('mouseout', function() {
    imgal.src = originalal;
});

const imgkm = document.getElementById('komutan');
const hoverkm = 'Elements/komutan2.jpg';
const originalkm = 'Elements/Komupene.jpg';

imgkm.addEventListener('mouseover', function() {
    imgkm.src = hoverkm;
});

imgkm.addEventListener('mouseout', function() {
    imgkm.src = originalkm;
});

const imgas = document.getElementById('asdupingas');
const hoveras = 'Elements/asduelhv.jpg';
const originalas = 'Elements/Skibidiasduel.jpg';

imgas.addEventListener('mouseover', function() {
    imgas.src = hoveras;
});

imgas.addEventListener('mouseout', function() {
    imgas.src = originalas;
});

const imgkam = document.getElementById('kuam');
const hoverkam = 'Elements/kuamhv.jpg';
const originalkam = 'Elements/Kuam.jpg';

imgkam.addEventListener('mouseover', function() {
    imgkam.src = hoverkam;
});

imgkam.addEventListener('mouseout', function() {
    imgkam.src = originalkam;
});

const imgjuana = document.getElementById('juanacubana');
const hoverjuana = 'Elements/juana.jpg';
const originaljuana = 'Elements/juanad.jpg';

imgjuana.addEventListener('mouseover', function() {
    imgjuana.src = hoverjuana;
});

imgjuana.addEventListener('mouseout', function() {
    imgjuana.src = originaljuana;
});

const imgakm = document.getElementById('akumarica');
const hoverakm = 'Elements/Akumaricahover.jpg';
const originalakm = 'Elements/Akumarica.jpg';

imgakm.addEventListener('mouseover', function() {
    imgakm.src = hoverakm;
});

const imgsy = document.getElementById('sheyy');
const hoversy = 'Elements/sheily.jpg';
const originalsy = 'Elements/sheilyd.jpg';

imgsy.addEventListener('mouseover', function() {
    imgsy.src = hoversy;
});

imgsy.addEventListener('mouseout', function() {
    imgsy.src = originalsy;
});

imgakm.addEventListener('mouseout', function() {
    imgakm.src = originalakm;
});

const imgtmr = document.getElementById('tamare');
const hovertmr = 'Elements/tamare.jpg';
const originaltmr = 'Elements/tamared.jpg';

imgtmr.addEventListener('mouseover', function() {
    imgtmr.src = hovertmr;
});

imgtmr.addEventListener('mouseout', function() {
    imgtmr.src = originaltmr;
});

document.querySelectorAll(".card img").forEach(img => {
  img.addEventListener("click", () => {
    const link = img.getAttribute("data-link");
    if (link) {
      window.open(link, "_blank");
    }
  });
});