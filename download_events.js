const fs = require('fs');
const path = require('path');
const https = require('https');

const urls = [
"https://scontent.fccu31-1.fna.fbcdn.net/v/t39.30808-6/473573776_588239430779226_5071782964001834946_n.jpg?stp=c0.150.780.780a_dst-jpg_tt6&cstp=mx780x780&ctp=s206x206&_nc_cat=111&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=50ad20&_nc_ohc=o89ioimLTvwQ7kNvwEPY_oE&_nc_oc=AdpblKhg3pRwgHnYmK3KPXzWeFvN4_JP82I2T8GUgJ3eeY4mw-awIM4GbqEsG9G9VK8&_nc_zt=23&_nc_ht=scontent.fccu31-1.fna&_nc_gid=o9bYGbLQb4plTrWe5HrOuQ&_nc_ss=7e2a8&oh=00_AQCrkKsNgSqXInTFF8hAI-URqTFegRZ-VINYWQpH15Gz6w&oe=6A602BC6",
"https://scontent.fccu31-1.fna.fbcdn.net/v/t39.30808-6/475947135_602194782717024_7208243035709651275_n.jpg?stp=c161.0.639.639a_dst-jpg_tt6&cstp=mx639x639&ctp=s206x206&_nc_cat=110&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=50ad20&_nc_ohc=dFqLEXrZ7qsQ7kNvwHw-JlO&_nc_oc=Adoy4BwHPYRW15monMwS6cB6ldPWsO4wCU5pkRR2Ljft_XPmxgbros0Auh81R1EyTfk&_nc_zt=23&_nc_ht=scontent.fccu31-1.fna&_nc_gid=Oh4K7Py4y-gC3v-mD4B8SA&_nc_ss=7e2a8&oh=00_AQD2CU3_-WBch5go5xfrVOi-Xjmc2q79tsc0vX7DVF07Dw&oe=6A6046E2",
"https://scontent.fccu3-1.fna.fbcdn.net/v/t39.30808-6/475561569_602215672714935_6986385703414382799_n.jpg?stp=c0.106.639.639a_dst-jpg_tt6&cstp=mx639x639&ctp=s206x206&_nc_cat=103&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=50ad20&_nc_ohc=fioFI9iCD1IQ7kNvwGILA4E&_nc_oc=AdqOPttKXxqIU7Kzy4WSxvh8Yjq52wSnCuX4nyLoEN2DeYhZxI4ZBM7ySwTjuewH1UA&_nc_zt=23&_nc_ht=scontent.fccu3-1.fna&_nc_gid=AhHVSKAfzyfIxM_caLdX-Q&_nc_ss=7e2a8&oh=00_AQAzs4pwq46HXVz6l1fs5bXw53OdLAWo12XQN0WVc2R3ZA&oe=6A6046BC",
"https://scontent.fccu31-1.fna.fbcdn.net/v/t39.30808-6/476832838_609585351977967_829685141301721650_n.jpg?stp=c341.0.1367.1367a_dst-jpg_tt6&cstp=mx1367x1367&ctp=s206x206&_nc_cat=111&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=50ad20&_nc_ohc=muf7mammefoQ7kNvwH08Ij0&_nc_oc=AdodIgbgBTjwivZCg-AEGB7Fs1Hg3y4V7JPTJS4hwT3xr3CMWBYrN2CxPnUsmRg-6X8&_nc_zt=23&_nc_ht=scontent.fccu31-1.fna&_nc_gid=yYzNpGUt13VeNYJT0vkAfQ&_nc_ss=7e2a8&oh=00_AQDJM7v7z0s4fuJ6jQIi9OE7phrM4UqjljKF6M1oKSf44w&oe=6A604577",
"https://scontent.fccu31-1.fna.fbcdn.net/v/t51.75761-15/490642358_17902708944153094_2532382942569772583_n.jpg?stp=c240.0.960.960a_dst-jpg_tt6&cstp=mx960x960&ctp=s206x206&_nc_cat=110&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=714c7a&_nc_ohc=pF3Fpf5Xfd4Q7kNvwHwkW8S&_nc_oc=AdowqlPexJYuXAQk-DJ_R9tP5cfsHKd1RDM6Ym9zwa7Nq0POwNkSgb5N9JxtI3wxwCI&_nc_zt=23&_nc_ht=scontent.fccu31-1.fna&_nc_gid=hCUKX5UNQ2-UKqnut0ZYIQ&_nc_ss=7e2a8&oh=00_AQAArw3Lc_CRAGJ6kysxacL45DVqw9ONFzCgzcuTZkN-2g&oe=6A6036F2",
"https://scontent.fccu31-2.fna.fbcdn.net/v/t51.75761-15/474110320_17891515410153094_7881532948692470553_n.webp?stp=c240.0.961.961a_dst-jpg_tt6&cstp=mx961x961&ctp=s206x206&_nc_cat=106&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=714c7a&_nc_ohc=yG7PdT-dvuEQ7kNvwEu_jUj&_nc_oc=Adoud1b8zfRaNrUGxILs4Vn4Y1TD5tmk09tOib4dFIWwRmkPGnzMj5oL9rkW72TTnNQ&_nc_zt=23&_nc_ht=scontent.fccu31-2.fna&_nc_gid=QcKUGGc9snR5s7Y0Wc5p5w&_nc_ss=7e2a8&oh=00_AQBp5ICIcMTPZJQNyv51dC3bKARXdI0ql4_026yJFKezNg&oe=6A602A64",
"https://scontent.fccu3-1.fna.fbcdn.net/v/t39.30808-6/477784797_609038308699338_967468341341837002_n.jpg?stp=c0.226.1363.1363a_dst-jpg_tt6&cstp=mx1363x1363&ctp=s206x206&_nc_cat=108&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=714c7a&_nc_ohc=OE4zdbvayg0Q7kNvwFvCzWq&_nc_oc=AdojfUV6RAYp-aQJwj8dtTsK0BUoFP-LSA7rKtKw0y0JnrMqZLlSTFlpboeKs7y2Oz8&_nc_zt=23&_nc_ht=scontent.fccu3-1.fna&_nc_gid=LWbpTc9D-2rmDJPI1Wl9kQ&_nc_ss=7e2a8&oh=00_AQCD1vkdBhiHVfwO7fpJKZA0a9aE_mcgVfEIx9UO2BAi7w&oe=6A601A0E"
];

const dir = path.join(__dirname, 'public', 'event-portfolio');
if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

Promise.all(urls.map((url, i) => {
  return new Promise((resolve) => {
    https.get(url, (res) => {
      const file = fs.createWriteStream(path.join(dir, 'event-' + (i + 1) + '.jpg'));
      res.pipe(file);
      file.on('finish', () => { file.close(); resolve(); });
    });
  });
})).then(() => console.log('All events done!'));
