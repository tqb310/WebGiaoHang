const ruleDistance = [
  {
    location: 1,
    latitude: 232,
    longitude: 457,
  }, // An Giang
  {
    location: 2,
    latitude: 356,
    longitude: 461,
  }, // Bà Rịa-Vũng Tàu
  {
    location: 3,
    latitude: 251,
    longitude: 387,
  }, // Bạc Liêu
  {
    location: 4,
    latitude: 266,
    longitude: 1146,
  }, // Bắc Kạn
  {
    location: 5,
    latitude: 307,
    longitude: 1092,
  }, // Bắc Giang
  {
    location: 6,
    latitude: 280,
    longitude: 1060,
  }, // Bắc Ninh
  {
    location: 7,
    latitude: 309,
    longitude: 435,
  }, // Bến Tre
  {
    location: 8,
    latitude: 314,
    longitude: 500,
  }, // Bình Dương
  {
    location: 9,
    latitude: 449,
    longitude: 671,
  }, // Bình Định
  {
    location: 10,
    latitude: 329,
    longitude: 530,
  }, // Bình Phước
  {
    location: 11,
    latitude: 391,
    longitude: 491,
  }, // Bình Thuận
  {
    location: 12,
    latitude: 224,
    longitude: 368,
  }, // Cà Mau
  {
    location: 13,
    latitude: 284,
    longitude: 1173,
  }, // Cao Bằng
  {
    location: 14,
    latitude: 251,
    longitude: 433,
  }, // Cần Thơ (TP)
  {
    location: 15,
    latitude: 395,
    longitude: 785,
  }, // Đà Nẵng (TP)
  {
    location: 16,
    latitude: 410,
    longitude: 591,
  }, // Đắk Lắk
  {
    location: 17,
    latitude: 376,
    longitude: 556,
  }, // Đắk Nông
  {
    location: 18,
    latitude: 127,
    longitude: 1115,
  }, // Điện Biên
  {
    location: 19,
    latitude: 349,
    longitude: 492,
  }, // Đồng Nai
  {
    location: 20,
    latitude: 261,
    longitude: 462,
  }, // Đồng Tháp
  {
    location: 21,
    latitude: 412,
    longitude: 650,
  }, // Gia Lai
  {
    location: 22,
    latitude: 216,
    longitude: 1167,
  }, // Hà Giang
  {
    location: 23,
    latitude: 278,
    longitude: 1045,
  }, // Hà Nam
  {
    location: 24,
    latitude: 262,
    longitude: 1071,
  }, // Hà Nội (TP)
  {
    location: 25,
    latitude: 270,
    longitude: 1071,
  }, // Hà Tây
  {
    location: 26,
    latitude: 260,
    longitude: 914,
  }, // Hà Tĩnh
  {
    location: 27,
    latitude: 299,
    longitude: 1067,
  }, // Hải Dương
  {
    location: 28,
    latitude: 313,
    longitude: 1060,
  }, // Hải Phòng (TP)
  {
    location: 29,
    latitude: 245,
    longitude: 1052,
  }, // Hòa Bình
  {
    location: 30,
    latitude: 317,
    longitude: 472,
  }, // Hồ Chí Minh (TP)
  {
    location: 31,
    latitude: 257,
    longitude: 413,
  }, // Hậu Giang
  {
    location: 32,
    latitude: 284,
    longitude: 1078,
  }, // Hưng Yên
  {
    location: 33,
    latitude: 452,
    longitude: 565,
  }, // Khánh Hòa
  {
    location: 34,
    latitude: 233,
    longitude: 419,
  }, // Kiên Giang
  {
    location: 35,
    latitude: 390,
    longitude: 702,
  }, // Kon Tum
  {
    location: 36,
    latitude: 126,
    longitude: 1148,
  }, // Lai Châu
  {
    location: 37,
    latitude: 174,
    longitude: 1148,
  }, // Lào Cai
  {
    location: 38,
    latitude: 308,
    longitude: 1121,
  }, // Lạng Sơn
  {
    location: 39,
    latitude: 403,
    longitude: 526,
  }, // Lâm Đồng
  {
    location: 40,
    latitude: 293,
    longitude: 469,
  }, // Long An
  {
    location: 41,
    latitude: 291,
    longitude: 1027,
  }, // Nam Định
  {
    location: 42,
    latitude: 222,
    longitude: 970,
  }, // Nghệ An
  {
    location: 43,
    latitude: 272,
    longitude: 1026,
  }, // Ninh Bình
  {
    location: 44,
    latitude: 445,
    longitude: 531,
  }, // Ninh Thuận
  {
    location: 45,
    latitude: 229,
    longitude: 1087,
  }, // Phú Thọ
  {
    location: 46,
    latitude: 455,
    longitude: 615,
  }, // Phú Yên
  {
    location: 47,
    latitude: 300,
    longitude: 863,
  }, // Quảng Bình
  {
    location: 48,
    latitude: 390,
    longitude: 756,
  }, // Quảng Nam
  {
    location: 49,
    latitude: 430,
    longitude: 723,
  }, // Quảng Ngãi
  {
    location: 50,
    latitude: 343,
    longitude: 1082,
  }, // Quảng Ninh
  {
    location: 51,
    latitude: 332,
    longitude: 824,
  }, // Quảng Trị
  {
    location: 52,
    latitude: 278,
    longitude: 400,
  }, // Sóc Trăng
  {
    location: 53,
    latitude: 179,
    longitude: 1084,
  }, // Sơn La
  {
    location: 54,
    latitude: 285,
    longitude: 509,
  }, // Tây Ninh
  {
    location: 55,
    latitude: 300,
    longitude: 1044,
  }, // Thái Bình
  {
    location: 56,
    latitude: 267,
    longitude: 1111,
  }, // Thái Nguyên
  {
    location: 57,
    latitude: 247,
    longitude: 1012,
  }, // Thanh Hóa
  {
    location: 58,
    latitude: 361,
    longitude: 799,
  }, // Thừa Thiên – Huế
  {
    location: 59,
    latitude: 290,
    longitude: 454,
  }, // Tiền Giang
  {
    location: 60,
    latitude: 300,
    longitude: 415,
  }, // Trà Vinh
  {
    location: 61,
    latitude: 236,
    longitude: 1139,
  }, // Tuyên Quang
  {
    location: 62,
    latitude: 279,
    longitude: 432,
  }, // Vĩnh Long
  {
    location: 63,
    latitude: 254,
    longitude: 1091,
  }, // Vĩnh Phúc
  {
    location: 64,
    latitude: 201,
    longitude: 1116,
  }, // Yên Bái
];

const priceForWeight = (weight) => {
  if (0 < parseInt(weight) && parseInt(weight) <= 200) return 1;
  if (200 < parseInt(weight) && parseInt(weight) <= 500) return 1.2;
  if (500 < parseInt(weight) && parseInt(weight) <= 1000) return 1.5;
  if (1000 < parseInt(weight) && parseInt(weight) <= 5000) return 2.2 ;
  if (5000 < parseInt(weight) && parseInt(weight) <= 30000) return 3.5
    
  if (30000 < parseInt(weight)) return 15;
};

// const priceForDistance = (distance) => {
//   if (0 < distance && distance <= 15) return 0;
//   if (15 < distance && distance <= 165) return 30000;
//   if (165 < distance && distance <= 1000) return (distance / 10) * 1000;
//   if (distance > 1000) return 120000;
// };

// const priceForType = (type) => {
//   if (type === 1) return 1.67;
//   else return 1;
// };
// p = x3
const distance = (x, y, p) => {
  let distance = Math.sqrt(
    (x[0] - y[0]) * (x[0] - y[0]) + (x[1] - y[1]) * (x[1] - y[1])
  );
  return distance * p;
};

const price = (distance, weight) => {
  return (
    (priceForWeight(weight) * distance) + 5000
    
  ).toFixed(2);
};

export const define = (locationX, locationY, weight) => {
  let arr = [...ruleDistance],
    x = [],
    y = [];
  arr.forEach((item) => {
    if (item.location.toString() === locationX) {
      x.push(item.latitude, item.longitude);
    }
    if (item.location.toString() === locationY) {
      y.push(item.latitude, item.longitude);
    }
  });
  return price(distance(x, y, 60), weight);  
};
