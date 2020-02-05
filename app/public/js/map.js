`use strict`;

let map;
const markers = [];

const field = document.getElementById('map');
function initMap() {
  map = new google.maps.Map(field, {
    center: { lat: 49.9951691, lng: 36.2299928 },
    zoom: 12,
  });
  google.maps.event.addDomListener(window, 'resize', function() {
    let center = map.getCenter();
    google.maps.event.trigger(map, 'resize');
    map.setCenter(center);
  });

  let locations = [
    /*---------- Шевченковский ----------*/
    {
      title: 'Юры Зойфера ул.',
      location: { lat: 50.0066359, lng: 36.2221574 },
    },
    {
      title: 'Литературная ул.',
      location: { lat: 50.0096824, lng: 36.2300558 },
    },
    { title: 'Буковая ул.', location: { lat: 50.042541, lng: 36.1835332 } },
    {
      title: 'Юрия Шевелева ул.',
      location: { lat: 50.0155507, lng: 36.2325941 },
    },
    {
      title: 'Академика Погорелова ул.',
      location: { lat: 50.0414283, lng: 36.1951365 },
    },
    {
      title: 'Вячеслава Чорновола ул.',
      location: { lat: 50.0221705, lng: 36.2070905 },
    },
    { title: 'Проспект Науки', location: { lat: 50.0074114, lng: 36.2264921 } },
    {
      title: 'Шатиловская ул.',
      location: { lat: 50.0143694, lng: 36.2312568 },
    },
    { title: 'Береговая ул.', location: { lat: 50.034756, lng: 36.1978141 } },
    {
      title: 'Клочковский спуск',
      location: { lat: 50.0026674, lng: 36.2187772 },
    },
    {
      title: 'Кузнецкий пер. (как его часть)',
      location: { lat: 50.0308142, lng: 36.1981718 },
    },
    {
      title: 'Дорошенковская ул. (как его часть)',
      location: { lat: 50.0269746, lng: 36.1934851 },
    },
    {
      title: 'Проспект Независимости',
      location: { lat: 50.0043218, lng: 36.2224993 },
    },
    {
      title: 'Сергиевская пл.',
      location: { lat: 49.9893865, lng: 36.2259701 },
    },
    {
      title: 'Семена Кузнеца ул.',
      location: { lat: 50.0211415, lng: 36.2028023 },
    },
    {
      title: 'Семена Кузнеца пер.',
      location: { lat: 50.0212933, lng: 36.2011106 },
    },
    {
      title: 'Людмилы Гурченко пер.',
      location: { lat: 49.9966517, lng: 36.2271445 },
    },
    { title: 'Соборный пер.', location: { lat: 49.9901351, lng: 36.2287639 } },
    /*---------- Киевский ----------*/
    {
      title: 'Дизайнерский пер.',
      location: { lat: 50.0119408, lng: 36.2471975 },
    },
    { title: 'Алчевских ул.', location: { lat: 50.0066976, lng: 36.2427401 } },
    {
      title: 'Пантелеймоновская ул.',
      location: { lat: 50.0016792, lng: 36.2776562 },
    },
    {
      title: 'Партизанский пер.',
      location: { lat: 50.0147783, lng: 36.3179253 },
    },
    {
      title: 'Валентиновская ул.',
      location: { lat: 50.0129074, lng: 36.3401057 },
    },
    { title: 'Девичья ул.', location: { lat: 49.9937908, lng: 36.2382446 } },
    { title: 'Ивченко пер.', location: { lat: 50.04167, lng: 36.2872387 } },
    { title: 'Свободы ул.', location: { lat: 50.0044943, lng: 36.2332365 } },
    { title: 'Чуйковская ул.', location: { lat: 50.021893, lng: 36.259736 } },
    { title: 'Сильский в-д', location: { lat: 50.0545704, lng: 36.297845 } },
    { title: 'Затышный в-д', location: { lat: 49.9595687, lng: 36.2655052 } },
    {
      title: 'Леся Сердюка ул.',
      location: { lat: 50.0417088, lng: 36.3479701 },
    },
    {
      title: 'Никоновский пр-д',
      location: { lat: 49.9932677, lng: 36.2862258 },
    },
    { title: 'Марьевская ул.', location: { lat: 49.993778, lng: 36.2828532 } },
    { title: 'Манизера ул.', location: { lat: 49.9990246, lng: 36.2418519 } },
    { title: 'Искусств ул.', location: { lat: 49.9996772, lng: 36.2435204 } },
    {
      title: 'Каплуновский пер.',
      location: { lat: 49.9992829, lng: 36.2439287 },
    },
    {
      title: 'Толкачевский в-д',
      location: { lat: 50.0155458, lng: 36.2623798 },
    },
    {
      title: 'Ново-Толкачевский пер.',
      location: { lat: 50.0163167, lng: 36.2619673 },
    },
    {
      title: 'Юрия Кондратюка пер.',
      location: { lat: 50.0414735, lng: 36.2898653 },
    },
    {
      title: 'Ново-Веринская ул.',
      location: { lat: 49.996199, lng: 36.2704772 },
    },
    {
      title: 'Сичовых Стрильцив ул.',
      location: { lat: 50.0517499, lng: 36.345531 },
    },
    {
      title: 'Мищенковская ул.',
      location: { lat: 50.0285175, lng: 36.1672707 },
    },
    { title: 'Каринской ул.', location: { lat: 50.0007204, lng: 36.2906342 } },
    {
      title: 'Куликовская ул.',
      location: { lat: 49.9938283, lng: 36.2406871 },
    },
    {
      title: 'Гранивский пр-д',
      location: { lat: 50.0138084, lng: 36.2905125 },
    },
    {
      title: 'Гидропарковая ул.',
      location: { lat: 50.0134748, lng: 36.2909601 },
    },
    {
      title: 'Академика Волкова ул.',
      location: { lat: 50.0877904, lng: 36.2539363 },
    },
    {
      title: 'Максимилиановская ул.',
      location: { lat: 50.0019523, lng: 36.2458076 },
    },
    { title: 'Стельмаха пер.', location: { lat: 50.0100234, lng: 36.25957 } },
    {
      title: 'Генерала Удовиченка ул.',
      location: { lat: 50.0481585, lng: 36.3382236 },
    },
    {
      title: 'Ярослава Мудрого ул.',
      location: { lat: 50.0058073, lng: 36.2403135 },
    },
    {
      title: 'Старая Озерянка ул.',
      location: { lat: 49.9985131, lng: 36.3508211 },
    },
    {
      title: 'Ивана Багмута ул.',
      location: { lat: 50.0309957, lng: 36.3358205 },
    },
    { title: 'Старый Куток ул.', location: { lat: 50.04141, lng: 36.3207668 } },
    { title: 'Тюринский сп.', location: { lat: 49.9907674, lng: 36.2683762 } },
    {
      title: 'Прохладный пер.',
      location: { lat: 50.0461425, lng: 36.3216136 },
    },
    {
      title: 'Карякинская ул.',
      location: { lat: 50.0117488, lng: 36.2804541 },
    },
    {
      title: 'Георгиевская пл.',
      location: { lat: 49.9716999, lng: 36.241703 },
    },
    {
      title: 'Георгиевский 1-й пер.',
      location: { lat: 49.972296, lng: 36.2405447 },
    },
    {
      title: 'Георгиевский 2-й пер.',
      location: { lat: 49.9722098, lng: 36.2410715 },
    },
    {
      title: 'Жен Мироносиц ул.',
      location: { lat: 49.9989983, lng: 36.2353365 },
    },
    {
      title: 'Ивана Пиддубного ул.',
      location: { lat: 50.055241, lng: 36.295695 },
    },
    {
      title: 'Александра Бабкина пер.',
      location: { lat: 50.0540707, lng: 36.294816 },
    },
    { title: 'Раевской ул.', location: { lat: 50.0024984, lng: 36.2934058 } },
    {
      title: 'Академика Волкова ул. (как ее часть)',
      location: { lat: 50.0877904, lng: 36.2539363 },
    },
    {
      title: 'Мыколы Манойла ул.',
      location: { lat: 50.0033546, lng: 36.289643 },
    },
    { title: 'Багалея ул.', location: { lat: 50.0008092, lng: 36.2449185 } }, //нет такой, добамить в каталог
    { title: 'Кирпичева ул.', location: { lat: 49.9982978, lng: 36.245583 } },
    { title: 'Шацкий в-д', location: { lat: 50.0016457, lng: 36.2848565 } },
    { title: 'Шацкий ул.', location: { lat: 49.9999609, lng: 36.2848729 } },
    { title: 'Садовая ул.', location: { lat: 49.9952212, lng: 36.2368443 } },
    {
      title: 'Юрия Кнорозова ул.',
      location: { lat: 50.0436463, lng: 36.325955 },
    },
    { title: 'Тюринская ул.', location: { lat: 49.9950161, lng: 36.2826464 } },
    /*---------- Новобаварский ----------*/
    { title: 'Пестрикова ул.', location: { lat: 49.9804479, lng: 36.1998213 } },
    {
      title: 'Михаила Петренко ул.',
      location: { lat: 49.9686101, lng: 36.1864613 },
    },
    { title: 'Ранковый пер.', location: { lat: 49.9610562, lng: 36.1366849 } },
    {
      title: 'Мало-Черновский пер.',
      location: { lat: 49.979891, lng: 36.1965109 },
    },
    { title: 'Черновский пер.', location: { lat: 49.9794334, lng: 36.195692 } },
    {
      title: 'Семинарская ул.',
      location: { lat: 49.9747442, lng: 36.1978698 },
    },
    { title: 'Осенний пер.', location: { lat: 49.9408184, lng: 36.1600468 } },
    {
      title: 'Ново-Баварский просп.',
      location: { lat: 49.9500627, lng: 36.1537143 },
    },
    {
      title: 'Константина Калинина пер.',
      location: { lat: 49.9562048, lng: 36.1430803 },
    },
    {
      title: 'Константина Калинина ул.',
      location: { lat: 49.9557744, lng: 36.1480127 },
    },
    {
      title: 'Петра Болбочана ул.',
      location: { lat: 49.9872446, lng: 36.1857134 },
    },
    { title: 'Фермерская ул.', location: { lat: 49.9758432, lng: 36.1781059 } },
    {
      title: 'Григоровское шоссе',
      location: { lat: 49.9748076, lng: 36.1739171 },
    },
    {
      title: 'Евгена Решетникова ул.',
      location: { lat: 49.9388932, lng: 36.1599558 },
    },
    {
      title: 'Карташевская ул.',
      location: { lat: 49.9792026, lng: 36.2175679 },
    },
    {
      title: 'Карташевский пер.',
      location: { lat: 49.9789615, lng: 36.2159224 },
    },
    { title: 'Конторская ул.', location: { lat: 49.9814909, lng: 36.2110822 } },
    {
      title: 'Корабельная ул.',
      location: { lat: 49.9778961, lng: 36.1757354 },
    },
    {
      title: 'Новохатская ул.',
      location: { lat: 49.9777433, lng: 36.1932045 },
    },
    {
      title: 'Николая Бажана ул.',
      location: { lat: 49.9654128, lng: 36.2098586 },
    },
    {
      title: 'Володымыра Ридченка в-д',
      location: { lat: 49.9650153, lng: 36.1845973 },
    },
    {
      title: 'Мыколы Алексина пер.',
      location: { lat: 49.9656379, lng: 36.1847139 },
    },
    { title: 'Врубеля ул.', location: { lat: 49.9428402, lng: 36.1552745 } },
    {
      title: 'Юрия Паращука ул.',
      location: { lat: 49.977009, lng: 36.1840214 },
    },
    { title: 'Дудинской ул.', location: { lat: 49.9757436, lng: 36.1815468 } },
    {
      title: 'Москалевская ул.',
      location: { lat: 49.9679063, lng: 36.2192183 },
    },
    {
      title: 'Яснополянская ул.',
      location: { lat: 49.9439737, lng: 36.1527665 },
    },
    {
      title: 'Гольдберговская ул.',
      location: { lat: 49.9750422, lng: 36.2342572 },
    },
    {
      title: 'Коксовый пер. (как его часть)',
      location: { lat: 49.9319407, lng: 36.1870256 },
    },
    { title: 'Клеверный пер.', location: { lat: 49.9489205, lng: 36.3451318 } },
    {
      title: 'Карачевское шоссе (как его часть)',
      location: { lat: 49.9358647, lng: 36.1959803 },
    },
    { title: 'Ячменный пер.', location: { lat: 49.9296391, lng: 36.1858457 } },
    {
      title: 'Господарская ул.',
      location: { lat: 49.9740707, lng: 36.1773037 },
    },
    {
      title: 'Любови Малой просп.',
      location: { lat: 49.9661063, lng: 36.1802031 },
    },
    {
      title: 'Екатерининская ул.',
      location: { lat: 49.9804767, lng: 36.2193672 },
    },
    { title: 'Раднянская ул.', location: { lat: 49.9666523, lng: 36.1853544 } },
    { title: 'Раднянский в-д', location: { lat: 49.9667295, lng: 36.1848148 } },
    { title: 'Юдина ул.', location: { lat: 49.9655263, lng: 36.1910267 } },
    { title: 'Рубановский пер.', location: { lat: 49.9859438, lng: 36.20673 } },
    {
      title: 'Сымыренкив пер.',
      location: { lat: 49.9628793, lng: 36.2226697 },
    },
    {
      title: 'Станционная ул. (как ее часть)',
      location: { lat: 49.9564675, lng: 36.1619263 },
    },
    {
      title: 'Причепиловский пер.',
      location: { lat: 49.9336813, lng: 36.1406424 },
    },
    { title: 'Баркалова ул.', location: { lat: 49.9598337, lng: 36.166152 } },
    {
      title: 'Грушевского ул.',
      location: { lat: 49.9690106, lng: 36.1756139 },
    },
    {
      title: 'Мороховецкий наб.',
      location: { lat: 49.9800667, lng: 36.2123942 },
    },
    {
      title: 'Ивана Кобзы ул.',
      location: { lat: 49.9654717, lng: 36.1924429 },
    },
    {
      title: 'Марка Бернеса ул.',
      location: { lat: 49.9743278, lng: 36.2012259 },
    },
    {
      title: 'Рождественская ул.',
      location: { lat: 49.9909124, lng: 36.2206502 },
    },
    /*---------- Московский ----------*/
    { title: 'Варненская ул.', location: { lat: 49.988707, lng: 36.3031878 } },
    { title: 'Михайлика ул.', location: { lat: 49.9914011, lng: 36.2982311 } },
    {
      title: 'Евгеньевская ул.',
      location: { lat: 49.9750196, lng: 36.3067602 },
    },
    {
      title: 'Леонида Быкова пер.',
      location: { lat: 49.9856244, lng: 36.30399 },
    },
    {
      title: 'Леонида Быкова ул.',
      location: { lat: 49.9878184, lng: 36.3065254 },
    },
    {
      title: 'Корсиковский пр-д',
      location: { lat: 49.9807936, lng: 36.2916329 },
    },
    { title: 'Марьевский в-д', location: { lat: 49.9906088, lng: 36.2832695 } },
    {
      title: 'Сабуровская наб.',
      location: { lat: 49.9845994, lng: 36.2797053 },
    },
    {
      title: 'Самсоновская ул.',
      location: { lat: 49.9534838, lng: 36.1237023 },
    },
    { title: 'Рыжовский пер.', location: { lat: 49.9924592, lng: 36.2515931 } },
    { title: 'Рыжовская ул.', location: { lat: 49.9919919, lng: 36.2540307 } },
    {
      title: 'Каунасский пер.',
      location: { lat: 49.9905769, lng: 36.3177572 },
    },
    { title: 'Каунасская ул.', location: { lat: 49.9882745, lng: 36.3160398 } },
    {
      title: 'Василия Стуса ул.',
      location: { lat: 50.004784, lng: 36.3280379 },
    },
    {
      title: 'Старо-Искринский пер.',
      location: { lat: 49.9973804, lng: 36.2583309 },
    },
    {
      title: 'Святодуховская ул.',
      location: { lat: 49.9904786, lng: 36.2635581 },
    },
    {
      title: 'Юбилейный просп.',
      location: { lat: 49.9969173, lng: 36.3332586 },
    },
    {
      title: 'Льва Ландау просп.',
      location: { lat: 49.9596353, lng: 36.3019207 },
    },
    {
      title: 'Сабуровский пер.',
      location: { lat: 49.9865127, lng: 36.2811505 },
    },
    {
      title: 'Сабуровская ул.',
      location: { lat: 49.9854409, lng: 36.2801687 },
    },
    {
      title: 'Артема Веделя ул.',
      location: { lat: 49.9895079, lng: 36.321029 },
    },
    {
      title: 'Ивана Зарудного в-д',
      location: { lat: 50.0033946, lng: 36.311356 },
    },
    {
      title: 'Ивана Зарудного пер.',
      location: { lat: 49.999697, lng: 36.3146503 },
    },
    {
      title: 'Ивана Зарудного ул.',
      location: { lat: 50.0004433, lng: 36.3149596 },
    },
    {
      title: 'Владислава Зубенка ул.',
      location: { lat: 50.0037374, lng: 36.3451274 },
    },
    {
      title: 'Юрия Лавриненка ул.',
      location: { lat: 49.9968294, lng: 36.2702305 },
    },
    { title: 'Бучмы ул.', location: { lat: 50.0275609, lng: 36.3578446 } },
    {
      title: 'Оксамытовый пер.',
      location: { lat: 50.0102158, lng: 36.3201302 },
    },
    {
      title: 'Руслана Плоходька ул.',
      location: { lat: 49.9924876, lng: 36.347951 },
    },
    /*---------- Холодногорский ----------*/
    { title: 'Дринова ул.', location: { lat: 50.0011731, lng: 36.2020419 } },
    { title: 'Левченко ул.', location: { lat: 49.989332, lng: 36.1925235 } },
    {
      title: 'Бориса Шрамко ул.',
      location: { lat: 50.0046357, lng: 36.1957209 },
    },
    {
      title: 'Дмитрия Вишневецкого ул.',
      location: { lat: 49.9969722, lng: 36.1683021 },
    },
    {
      title: 'Дмитрия Вишневецкого пер.',
      location: { lat: 50.0001626, lng: 36.1727742 },
    },
    {
      title: 'Дмитрия Вишневецкого пр-д',
      location: { lat: 50.0006345, lng: 36.1774759 },
    },
    { title: 'Беркоса ул.', location: { lat: 50.0247735, lng: 36.1768664 } },
    {
      title: 'Таганская ул. (как ее часть)',
      location: { lat: 49.9991119, lng: 36.1647665 },
    },
    {
      title: 'Холодногорская ул.',
      location: { lat: 49.9937253, lng: 36.168631 },
    },
    {
      title: 'Благовещенская ул.',
      location: { lat: 49.9890113, lng: 36.2128999 },
    },
    {
      title: 'Житомирская ул.',
      location: { lat: 50.0367475, lng: 36.1644858 },
    },
    { title: 'Сливовый пер.', location: { lat: 50.0107654, lng: 36.1693019 } },
    {
      title: 'Большая Панасовская ул.',
      location: { lat: 50.0162518, lng: 36.1925724 },
    },
    {
      title: 'Евгена Котляра ул.',
      location: { lat: 49.9921422, lng: 36.204885 },
    },
    {
      title: 'Гулака-Артемовского ул.',
      location: { lat: 50.0091455, lng: 36.1766268 },
    },
    {
      title: 'Петра Тронько ул.',
      location: { lat: 50.0012851, lng: 36.1707631 },
    },
    {
      title: 'Андреевская ул.',
      location: { lat: 49.9999029, lng: 36.1945232 },
    },
    {
      title: 'Куриловская ул.',
      location: { lat: 50.0034384, lng: 36.1879428 },
    },
    {
      title: 'Куриловский в-д',
      location: { lat: 49.9999031, lng: 36.1932472 },
    },
    {
      title: 'Панасовский пр-д',
      location: { lat: 49.9999438, lng: 36.2062349 },
    },
    { title: 'Озерянский пер.', location: { lat: 49.9944651, lng: 36.193067 } },
    { title: 'Озерянская ул.', location: { lat: 49.9918819, lng: 36.1918199 } },
    {
      title: 'Лаврентьевский пер.',
      location: { lat: 49.9893527, lng: 36.189676 },
    },
    {
      title: 'Копыловский пер.',
      location: { lat: 50.0061153, lng: 36.2021186 },
    },
    {
      title: 'Копыловская ул.',
      location: { lat: 50.0003233, lng: 36.2058413 },
    },
    {
      title: 'Пушкаревский пер.',
      location: { lat: 49.9942215, lng: 36.1745764 },
    },
    {
      title: 'Сериковский пр-д',
      location: { lat: 49.9927742, lng: 36.1559987 },
    },
    { title: 'Териховская ул.', location: { lat: 49.9909854, lng: 36.186179 } },
    { title: 'Соколовская ул.', location: { lat: 50.0328945, lng: 36.164002 } },
    {
      title: 'Волонтерская ул.',
      location: { lat: 49.9878721, lng: 36.1821203 },
    },
    {
      title: 'Мыколы Топчия в-д',
      location: { lat: 49.9898881, lng: 36.2272345 },
    },
    {
      title: 'Володымыра Усенка пер.',
      location: { lat: 49.9855154, lng: 36.1840514 },
    },
    { title: 'Шаровский пер.', location: { lat: 49.9808032, lng: 36.1548088 } },
    {
      title: 'Игоря Муратова ул.',
      location: { lat: 49.9859878, lng: 36.1427386 },
    },
    {
      title: 'Игоря Муратова 1-й пер.',
      location: { lat: 49.9827008, lng: 36.1474519 },
    },
    {
      title: 'Игоря Муратова 2-й пер.',
      location: { lat: 49.981838, lng: 36.1472772 },
    },
    { title: 'Грушевая ул.', location: { lat: 50.0097845, lng: 36.1797153 } },
    {
      title: 'Мыронивская ул.',
      location: { lat: 50.0113226, lng: 36.1756815 },
    },
    /*---------- Немышлянский ----------*/
    {
      title: 'Александра Натиева пер.',
      location: { lat: 49.9438018, lng: 36.3434386 },
    },
    {
      title: 'Павла Скоропадского ул.',
      location: { lat: 49.9425838, lng: 36.341953 },
    },
    { title: 'Шалимова ул.', location: { lat: 49.9733424, lng: 36.3180206 } },
    {
      title: 'Капустянский пер.',
      location: { lat: 49.9804079, lng: 36.3113001 },
    },
    {
      title: 'Чунихинская ул.',
      location: { lat: 49.9395761, lng: 36.3447055 },
    },
    {
      title: 'Оскольская ул. (как ее часть)',
      location: { lat: 49.9616646, lng: 36.3907632 },
    },
    { title: 'Мотронинская ул.', location: { lat: 49.986899, lng: 36.298533 } },
    {
      title: 'Мотронинский пер.',
      location: { lat: 49.9784789, lng: 36.3341249 },
    },
    {
      title: 'Республиканская ул.',
      location: { lat: 49.9730974, lng: 36.3197627 },
    },
    { title: 'Амосова ул.', location: { lat: 49.983934, lng: 36.3513941 } },
    {
      title: 'Александровский просп.',
      location: { lat: 49.9463327, lng: 36.3562987 },
    },
    {
      title: 'Петра Григоренка просп.',
      location: { lat: 49.9552771, lng: 36.3138136 },
    },
    {
      title: 'Василия Мельникова ул.',
      location: { lat: 49.9642567, lng: 36.3228386 },
    },
    {
      title: 'Академика Подгорного пер.',
      location: { lat: 49.9496719, lng: 36.3515146 },
    },
    {
      title: 'Академика Подгорного ул.',
      location: { lat: 49.9474675, lng: 36.3502264 },
    },
    {
      title: 'Дмитрия Миллера ул.',
      location: { lat: 49.9696541, lng: 36.3201729 },
    },
    { title: 'Приречная ул.', location: { lat: 49.9750532, lng: 36.3366651 } },
    {
      title: 'Ивана Богряного ул.',
      location: { lat: 49.9736579, lng: 36.3091501 },
    },
    {
      title: 'Драгоманова ул.',
      location: { lat: 49.9868796, lng: 36.3638017 },
    },
    {
      title: 'Плодородный 1-й пер. (как его часть)',
      location: { lat: 49.9748808, lng: 36.3557516 },
    },
    {
      title: 'Ванды Биневской пер.',
      location: { lat: 49.9713378, lng: 36.3504203 },
    }, //нет такой, добамить в каталог
    {
      title: 'Ново-Садовая ул.',
      location: { lat: 49.9494958, lng: 36.3345479 },
    },
    {
      title: 'Кавалерийская ул.',
      location: { lat: 49.9444274, lng: 36.3467655 },
    },
    /*---------- Основянский ----------*/
    {
      title: 'Осиповского ул.',
      location: { lat: 49.9066048, lng: 36.2238743 },
    },
    {
      title: 'Старшинский в-д',
      location: { lat: 49.9114755, lng: 36.2139356 },
    },
    { title: 'Сичовый пер.', location: { lat: 49.9012073, lng: 36.2178429 } },
    {
      title: 'Гетьманская ул.',
      location: { lat: 49.9056073, lng: 36.2172176 },
    },
    { title: 'Кинный пер.', location: { lat: 49.9891612, lng: 36.2584141 } },
    {
      title: 'Захысныкив Украины пл.',
      location: { lat: 49.9871054, lng: 36.260034 },
    },
    {
      title: 'Подольский пер.',
      location: { lat: 49.9858807, lng: 36.2337468 },
    },
    {
      title: 'Мыколы Михновского ул.',
      location: { lat: 49.9824394, lng: 36.2490647 },
    },
    { title: 'Троицкий пер.', location: { lat: 49.9863685, lng: 36.2303196 } },
    {
      title: 'Большая Жихорская ул.',
      location: { lat: 49.9212443, lng: 36.2264543 },
    },
    { title: 'Жихорский пр-д', location: { lat: 49.9197877, lng: 36.2234467 } },
    {
      title: 'Михаила Зеленина ул.',
      location: { lat: 49.9191852, lng: 36.2096484 },
    },
    { title: 'Эрлиха ул.', location: { lat: 49.9190839, lng: 36.2153237 } },
    {
      title: 'Владимира Сосюры пер.',
      location: { lat: 49.9240594, lng: 36.2289159 },
    },
    {
      title: 'Владимира Сосюры ул.',
      location: { lat: 49.9245422, lng: 36.2299046 },
    },
    { title: 'Молочная ул.', location: { lat: 49.9815481, lng: 36.2523429 } },
    { title: 'Редина ул.', location: { lat: 49.9564736, lng: 36.2470025 } },
    { title: 'Маковый пер.', location: { lat: 49.9164696, lng: 36.2223056 } },
    { title: 'Аверина пер.', location: { lat: 49.9179008, lng: 36.220311 } },
    { title: 'Аверина ул.', location: { lat: 49.9155609, lng: 36.2120054 } },
    { title: 'Казацкая ул.', location: { lat: 49.9686039, lng: 36.2255201 } },
    {
      title: 'Верещаковский пр-д',
      location: { lat: 49.9611824, lng: 36.2461322 },
    },
    { title: 'Пильчикова ул.', location: { lat: 49.940049, lng: 36.25503 } },
    {
      title: 'Гимназийская наб.',
      location: { lat: 49.9837723, lng: 36.2362066 },
    },
    {
      title: 'Достоевского пр-д',
      location: { lat: 49.9420636, lng: 36.243074 },
    },
    { title: 'Лазаревича ул.', location: { lat: 49.9096816, lng: 36.2181784 } },
    {
      title: 'Национальной Гвардии пл.',
      location: { lat: 49.9856752, lng: 36.2093385 },
    },
    {
      title: 'Мерефянское шоссе (как его часть)',
      location: { lat: 49.9134652, lng: 36.2450444 },
    },
    { title: 'Гурзуфская ул.', location: { lat: 49.9341451, lng: 36.2448895 } },
    { title: 'Кутаисская ул.', location: { lat: 49.9159605, lng: 36.2288106 } },
    {
      title: 'Кутаисский 1-й в-д',
      location: { lat: 49.9133009, lng: 36.21731 },
    },
    {
      title: 'Кутаисский 2-й в-д',
      location: { lat: 49.9219061, lng: 36.2403878 },
    },
    { title: 'Колейный пер.', location: { lat: 49.9526752, lng: 36.2400751 } },
    {
      title: 'Тернопольский в-д',
      location: { lat: 49.9092191, lng: 36.2200179 },
    },
    {
      title: 'Михаила Зеленина в-д',
      location: { lat: 49.9191852, lng: 36.2096484 },
    },
    {
      title: 'Татьяны Устиновой пер.',
      location: { lat: 49.9166822, lng: 36.2421023 },
    },
    {
      title: 'Евгения Плужника в-д',
      location: { lat: 49.9213366, lng: 36.2367175 },
    },
    {
      title: 'Евгения Плужника пер.',
      location: { lat: 49.9214702, lng: 36.2374838 },
    },
    {
      title: 'Евгения Плужника ул.',
      location: { lat: 49.9198851, lng: 36.237254 },
    },
    {
      title: 'Героев Небесной Сотни пл.',
      location: { lat: 49.9869763, lng: 36.243132 },
    },
    { title: 'Семко ул.', location: { lat: 49.9267595, lng: 36.2383348 } },
    {
      title: 'Срезневского в-д',
      location: { lat: 49.9172073, lng: 36.2311847 },
    },
    {
      title: 'Срезневского ул.',
      location: { lat: 49.9172347, lng: 36.2323633 },
    },
    { title: 'Гончарный пер.', location: { lat: 49.9061589, lng: 36.2183318 } },
    {
      title: 'Воскресенский пер.',
      location: { lat: 49.9792451, lng: 36.2235826 },
    },
    {
      title: 'Воскресенская ул.',
      location: { lat: 49.9814845, lng: 36.2277193 },
    },
    {
      title: 'Лаврентьева пер.',
      location: { lat: 50.0070158, lng: 36.2694099 },
    },
    { title: 'Камышовая ул.', location: { lat: 49.9084436, lng: 36.24244 } },
    { title: 'Лебяжий в-д', location: { lat: 49.90281, lng: 36.2145193 } },
    {
      title: 'Разъездной пер.',
      location: { lat: 49.9711484, lng: 36.2454193 },
    },
    /*---------- Слободской ----------*/
    { title: 'Мухачева ул.', location: { lat: 49.9629385, lng: 36.2855092 } },
    {
      title: 'Мефодиевская ул.',
      location: { lat: 49.9777801, lng: 36.2806804 },
    },
    { title: 'Кедровый пр-д', location: { lat: 49.9468716, lng: 36.2936791 } },
    { title: 'Гордона ул.', location: { lat: 49.9618839, lng: 36.28853 } },
    {
      title: 'Балашовский пр-д',
      location: { lat: 49.9732039, lng: 36.2752291 },
    },
    { title: 'Жасминовый б-р', location: { lat: 49.9492807, lng: 36.3190244 } },
    {
      title: 'Аскольдовский в-д (как его часть)',
      location: { lat: 49.9511461, lng: 36.2753011 },
    },
    /*---------- Индустриальный ----------*/
    { title: 'Библика ул.', location: { lat: 49.9464251, lng: 36.3739079 } },
    {
      title: 'Крушельницкого ул.',
      location: { lat: 49.9304022, lng: 36.3717365 },
    },
    {
      title: 'Крушельницкого пер.',
      location: { lat: 49.9301533, lng: 36.3724254 },
    },
    {
      title: 'Архитектора Алешина просп.',
      location: { lat: 49.9452873, lng: 36.3694958 },
    },
    {
      title: 'Северина Потоцкого пер.',
      location: { lat: 49.9470262, lng: 36.3604893 },
    },
    {
      title: 'Северина Потоцкого ул.',
      location: { lat: 49.946141, lng: 36.3617308 },
    },
    { title: 'Косарева ул.', location: { lat: 49.9433105, lng: 36.3718121 } },
    {
      title: 'Генерала Момота ул.',
      location: { lat: 49.9443741, lng: 36.3644845 },
    },
    { title: 'Душкина ул.', location: { lat: 49.9397193, lng: 36.3643925 } },
    {
      title: 'Индустриальный в-д',
      location: { lat: 49.9316538, lng: 36.3694331 },
    },
    {
      title: 'Индустриальный просп.',
      location: { lat: 49.9384173, lng: 36.3744578 },
    },
    {
      title: 'Михаила Водяного ул.',
      location: { lat: 49.9356652, lng: 36.3692662 },
    },
  ];

  const largeInfowindow = new google.maps.InfoWindow();

  // The following group uses the location array to create an array of markers on initialize.
  for (let i = 0; i < locations.length; i++) {
    // Get the position from the location array.
    const position = locations[i].location;
    const title = locations[i].title;
    // Create a marker per location, and put into markers array.
    const marker = new google.maps.Marker({
      position: position,
      title: title,
      animation: google.maps.Animation.DROP,
      id: i,
    });
    // Push the marker to our array of markers.
    markers.push(marker);
    // Create an onclick event to open an infowindow at each marker.
    marker.addListener('click', function() {
      populateInfoWindow(this, largeInfowindow);
    });
  }

  document
    .getElementById('markers__show')
    .addEventListener('click', showListings);
  document
    .getElementById('markers__hide')
    .addEventListener('click', hideListings);
}

// This function populates the infowindow when the marker is clicked. We'll only allow
// one infowindow which will open at the marker that is clicked, and populate based
// on that markers position.
function populateInfoWindow(marker, infowindow) {
  // Check to make sure the infowindow is not already opened on this marker.
  if (infowindow.marker != marker) {
    infowindow.marker = marker;
    infowindow.setContent('<div>' + marker.title + '</div>');
    infowindow.open(map, marker);
    // Make sure the marker property is cleared if the infowindow is closed.
    infowindow.addListener('closeclick', function() {
      infowindow.marker = null;
    });
  }
}

function showListings() {
  const bounds = new google.maps.LatLngBounds();

  for (let i = 0; i < markers.length; i++) {
    markers[i].setMap(map);
    bounds.extend(markers[i].position);
  }
  map.fitBounds(bounds);
}

function hideListings() {
  for (let i = 0; i < markers.length; i++) {
    markers[i].setMap(null);
  }
}
