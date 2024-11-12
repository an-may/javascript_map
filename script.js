// JavaScript
//console.log('Hello world!');

const map = L.map('map').setView([33.58992858990681, 130.4207864085959], 5);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

//L.marker([33.5661797785901, 130.21755225056316]).addTo(map).bindPopup('長浜ラーメン 力 潤店 ').openPopup();
//L.marker([34.95155967006114, 135.77172517767355]).addTo(map).bindPopup('藤森神社<br><img src="images/img01.png" alt="img">').openPopup();
//L.marker([35.63127703758854, 139.88292314417808]).addTo(map).bindPopup('東京ディズニーリゾート ').openPopup();


//アイコン
//const whiteIcon = L.icon({
   // iconUrl: 'images/ico.png',
   // shadowUrl: 'images/ico_shadow.png',
  
  //iconSize:     [40, 40], // size of the icon
  //shadowSize:   [40, 40], // size of the shadow
  //iconAnchor:   [20, 40], // point of the icon which will correspond to marker's location
  //shadowAnchor: [20, 40],  // the same for the shadow
  //popupAnchor:  [0, -42] // point from which the popup should open relative to the iconAnchor
  //});

  //複数アイコンをまとめて定義
const circleIcon = L.Icon.extend({
    options: {
      shadowUrl: 'images/ico_shadow.png',
      iconSize: [40, 40],
      shadowSize: [40, 40],
      iconAnchor: [20, 40],
      shadowAnchor: [20, 40],
      popupAnchor: [0, -42]
    }
  });
  
  const whiteIcon = new circleIcon({ iconUrl: 'images/ico.png' }),
    pinkIcon = new circleIcon({ iconUrl: 'images/ico_pink.png' });
    yellowIcon = new circleIcon({ iconUrl: 'images/ico_yellow.png' });

    
  L.marker([35.63127703758854, 139.88292314417808], { icon: pinkIcon }).addTo(map).bindPopup('東京ディズニーリゾート').openPopup();
  L.marker([33.5661797785901, 130.21755225056316], { icon: yellowIcon }).addTo(map).bindPopup('長浜ラーメン 力 潤店').openPopup();
  L.marker([34.95155967006114, 135.77172517767355], { icon: whiteIcon }).addTo(map).bindPopup('藤森神社').openPopup();

  const circle = L.circle([33.58992858990681, 130.4207864085959], {
    color: '#a9c463', //円の輪郭線の色
    fillColor: '#e6edc1', //円の塗りつぶしの色
    fillOpacity: 0.8, //塗りつぶしの不透明度
    radius: 1000 //半径、メートルで指定
  }).addTo(map);

  circle.bindPopup("博多駅周辺<br>(半径1km)");

  // クリック位置の緯度経度表示
const popup = L.popup();

function onMapClick(e) {
  popup
    .setLatLng(e.latlng)
    .setContent("ここは" + e.latlng.toString() + "です")
    .openOn(map);
}

map.on('click', onMapClick);