const fs = require('fs');
const path = require('path');
const https = require('https');

const urls = [
  "https://scontent.fccu31-1.fna.fbcdn.net/v/t39.30808-6/470227605_569771175959385_95741943134029823_n.jpg?stp=c216.0.562.562a_dst-jpg_tt6&cstp=mx562x562&ctp=s206x206&_nc_cat=108&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=50c75d&_nc_ohc=FkqqxzuIXO8Q7kNvwHHS0jz&_nc_oc=AdoFGFTfTSn5CFDrHswCqisqaMJzLnFqv1lrwetb5mAkoTJeETP_YKt1KNDem1oogvs&_nc_zt=23&_nc_ht=scontent.fccu31-1.fna&_nc_gid=rKDI8zUgUWidCuv9jxN8Qw&_nc_ss=7e2a8&oh=00_AQD7a0zmNvscuH5VzRWR_cr4TCKaEdY_p3-gFtcJggZKfA&oe=6A603263",
  "https://scontent.fccu3-1.fna.fbcdn.net/v/t39.30808-6/484021946_635416849394817_5206318806175629989_n.jpg?stp=c0.225.1367.1367a_dst-jpg_tt6&cstp=mx1367x1367&ctp=s206x206&_nc_cat=109&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=50ad20&_nc_ohc=IPpP1Z3rQqgQ7kNvwGPH9F-&_nc_oc=Ado8sMqgknljjC_01-1YGEOjB79QWA_7QHik7bSQ1aEaDRyJkuLdXu44sP1Q2rzj0xc&_nc_zt=23&_nc_ht=scontent.fccu3-1.fna&_nc_gid=7IaMkTtpH9_AdRBnI0YfrA&_nc_ss=7e2a8&oh=00_AQBHH_ATjpqwYhKzH8ANOdgtTSZ7OLP65Zp1oq8qs8fpww&oe=6A602859",
  "https://scontent.fccu3-1.fna.fbcdn.net/v/t39.30808-6/483063530_635044332765402_3997921611521181602_n.jpg?stp=c546.0.956.956a_dst-jpg_tt6&cstp=mx956x956&ctp=s206x206&_nc_cat=109&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=50ad20&_nc_ohc=YOxMYGtU7cwQ7kNvwHMhvlk&_nc_oc=AdoZG1RYqaIR8odNZ6u7UhAgUweCN60dZ7VbjktfjjZl9BPpjzWotXbI0wRoNSp_N0U&_nc_zt=23&_nc_ht=scontent.fccu3-1.fna&_nc_gid=YKNJyZbz8wwQg-n4rsHrUA&_nc_ss=7e2a8&oh=00_AQA9LwikGA_AtqERMZd6Y649lQHHRhO6ANzTS4ib1JYTpg&oe=6A60348D",
  "https://scontent.fccu31-1.fna.fbcdn.net/v/t39.30808-6/484457385_635416682728167_7157378398666736900_n.jpg?stp=c341.0.1367.1367a_dst-jpg_tt6&cstp=mx1367x1367&ctp=s206x206&_nc_cat=102&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=50ad20&_nc_ohc=kiezvsdDPXwQ7kNvwEwi-m0&_nc_oc=AdrcAlP0AEZ3aI2jXcTfHLusJxLIBgKwbqBt2dAu94dfpKenhDfcBQrgAt_yVdKtyB4&_nc_zt=23&_nc_ht=scontent.fccu31-1.fna&_nc_gid=2jnw5gsIXh4X7bvpihaWUg&_nc_ss=7e2a8&oh=00_AQCQV9t6YI76olDWnCbNw6nOb8tDwLajZKG8g75p2Y_nqg&oe=6A60267D",
  "https://scontent.fccu31-2.fna.fbcdn.net/v/t39.30808-6/484489029_635416696061499_8968564938596108317_n.jpg?stp=c342.0.1365.1365a_dst-jpg_tt6&cstp=mx1365x1365&ctp=s206x206&_nc_cat=103&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=50ad20&_nc_ohc=vV1Ajuob3DkQ7kNvwGnds3a&_nc_oc=AdoalLCxP3AIsXDHu9zAG_l-LxvUwkDQYtnQY4m74vjnjxvEdZoWNqLDxEHlFrWDAH4&_nc_zt=23&_nc_ht=scontent.fccu31-2.fna&_nc_gid=2jnw5gsIXh4X7bvpihaWUg&_nc_ss=7e2a8&oh=00_AQBWc-x2ljIMnLHYuk1NuCqnxS2RfYiRez7eM-Pf3HGcjg&oe=6A602F7F",
  "https://scontent.fccu31-1.fna.fbcdn.net/v/t39.30808-6/479185168_609585341977968_6008123111739100662_n.jpg?stp=c341.0.1367.1367a_dst-jpg_tt6&cstp=mx1367x1367&ctp=s206x206&_nc_cat=106&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=50ad20&_nc_ohc=OM97K7BJwR4Q7kNvwGl48S8&_nc_oc=AdoFrcp0UIEFadsA1h8Ir8iFdWYjg1raS-u4PBtPnJ9kVg_dQ5U8ecsrf6sQ_ajpamk&_nc_zt=23&_nc_ht=scontent.fccu31-1.fna&_nc_gid=lR76m7Hk5902T89G0U9OXg&_nc_ss=7e2a8&oh=00_AQCS4RdNwJs5YPTV1xJZk3TKMsscLLof1gOsbJv3_ypGSw&oe=6A604413",
  "https://scontent.fccu3-1.fna.fbcdn.net/v/t39.30808-6/475832213_602972065972629_2912301182930819429_n.jpg?stp=c0.105.641.641a_cp6_dst-jpg_tt6&cstp=mx641x641&ctp=s206x206&_nc_cat=106&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=714c7a&_nc_ohc=TXNTtWrVIxsQ7kNvwHHJxD5&_nc_oc=Ado91FNOQ52rTxqy4Cdn3DsE4msTXeJ73pK14ZDKEx39I-zT0ODX1Xg87Y9JBi1eSYs&_nc_zt=23&_nc_ht=scontent.fccu3-1.fna&_nc_gid=B8k8XKJsQ8BevpAeuD2QyQ&_nc_ss=7e2a8&oh=00_AQCcnC7JG7hDfHmsaLDdgF4i7fvZkoflR9knM6SduIKRNw&oe=6A602F6A",
  "https://scontent.fccu3-1.fna.fbcdn.net/v/t39.30808-6/469990892_564046623198507_6126849209761845625_n.jpg?stp=c341.0.1366.1366a_dst-jpg_tt6&cstp=mx1366x1366&ctp=s206x206&_nc_cat=109&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=50ad20&_nc_ohc=8yVz3DUCd4MQ7kNvwEGHAxK&_nc_oc=Adot7AqkKk3Ys4CfePrM-s169cXL3erPAhFiByIV1mYvJOCQRf8U_qTF6RGi3LxGGGg&_nc_zt=23&_nc_ht=scontent.fccu3-1.fna&_nc_gid=hG1c8yN1jteMjYncbtWczA&_nc_ss=7e2a8&oh=00_AQAZWiEE_iOrQJbgFSnhl6EQWF6F1SLjPNCkO4sZ1fB0JQ&oe=6A602FE4"
];

const dir = path.join(__dirname, 'public', 'wedding-portfolio');
if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

Promise.all(urls.map((url, i) => {
  return new Promise((resolve) => {
    https.get(url, (res) => {
      const file = fs.createWriteStream(path.join(dir, 'sample-' + (i + 1) + '.jpg'));
      res.pipe(file);
      file.on('finish', () => { file.close(); resolve(); });
    });
  });
})).then(() => console.log('All done!'));
