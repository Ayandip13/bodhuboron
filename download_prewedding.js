const fs = require('fs');
const path = require('path');
const https = require('https');

const urls = [
"https://scontent.fccu31-2.fna.fbcdn.net/v/t51.75761-15/487671748_17900064822153094_4464005332001130080_n.jpg?stp=c240.0.961.961a_dst-jpg_tt6&cstp=mx961x961&ctp=s206x206&_nc_cat=109&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=714c7a&_nc_ohc=dKUZMNIg4aMQ7kNvwEOrUfy&_nc_oc=Adp38hy2kj8Ge20-Eq30l08sO3cDKRqv8M4AJcSaXD2aPuCFNU32K94KgiyRUfaHxv0&_nc_zt=23&_nc_ht=scontent.fccu31-2.fna&_nc_gid=UJrhQM_K8dUeDv4huJ4SNA&_nc_ss=7e2a8&oh=00_AQAxjFShFu1GPmy-MMgMKoXwkET3ZkV5xVAbhQQEmqtPJg&oe=6A604305",
"https://scontent.fccu31-2.fna.fbcdn.net/v/t51.75761-15/473974537_17891515467153094_3359291599702373264_n.webp?stp=c240.0.961.961a_dst-jpg_tt6&cstp=mx961x961&ctp=s206x206&_nc_cat=111&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=714c7a&_nc_ohc=KU0zaaDa_9EQ7kNvwGV5Ytc&_nc_oc=AdrNoADJeHGtsOig6nl0vmuUv2Zrun6YPrg9hOrQG8TsJnT619LTF5s9gKRLnQmNySk&_nc_zt=23&_nc_ht=scontent.fccu31-2.fna&_nc_gid=7IaMkTtpH9_AdRBnI0YfrA&_nc_ss=7e2a8&oh=00_AQBdKwts9Pb03xU89I40l8uvrYdf07XgoTClSgeJs2UdtQ&oe=6A603E0E",
"https://scontent.fccu31-1.fna.fbcdn.net/v/t39.30808-6/476611040_608529202083582_2598717416512446654_n.jpg?stp=c343.0.1363.1363a_dst-jpg_tt6&cstp=mx1363x1363&ctp=s206x206&_nc_cat=103&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=50ad20&_nc_ohc=06GMV2cbXroQ7kNvwEAtiZt&_nc_oc=AdrpmuOyJPQYm4gagueAVaCXQoLnfYKIJtZBzjtTR_3nWTeu--Lbka0MQIwQ4WLXLBM&_nc_zt=23&_nc_ht=scontent.fccu31-1.fna&_nc_gid=e63K92XFga1wYwAkIKGehA&_nc_ss=7e2a8&oh=00_AQBBbjuod81KGWWGilg-9BzWRD6HfVeDvsD8ROQAeksK6g&oe=6A6021C5",
"https://scontent.fccu31-2.fna.fbcdn.net/v/t39.30808-6/476631500_608529035416932_1199599676907400695_n.jpg?stp=c343.0.1363.1363a_dst-jpg_tt6&cstp=mx1363x1363&ctp=s206x206&_nc_cat=103&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=50ad20&_nc_ohc=V6ZbllUVAb0Q7kNvwHSUjiW&_nc_oc=AdpZKMLQKH18FYtgFSjBLAFhaKLgEnBSgD0FBhL6aMuKCnoRNO3sfOX0Mi3XaRtj2J0&_nc_zt=23&_nc_ht=scontent.fccu31-2.fna&_nc_gid=2KQjXdvfz7CxrnjGeXHrAQ&_nc_ss=7e2a8&oh=00_AQD6seawjg07KACmrHIRxjcHy_1oDb__gDAW6L7MRw-OMQ&oe=6A60412E",
"https://scontent.fccu31-2.fna.fbcdn.net/v/t39.30808-6/475836097_602710489332120_1693584958590591061_n.jpg?stp=c161.0.639.639a_cp6_dst-jpg_tt6&cstp=mx639x639&ctp=s206x206&_nc_cat=105&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=50ad20&_nc_ohc=QZ2ajhy4dKkQ7kNvwFISGeh&_nc_oc=AdqEWw0OyTW_vXIW045skBJ2mPe2bmKGHUG1LShiYM10nQflyjF9fFvE6TUcnY_o7Xw&_nc_zt=23&_nc_ht=scontent.fccu31-2.fna&_nc_gid=yGqwtiRpN8a8YPxA1FK3Tw&_nc_ss=7e2a8&oh=00_AQB1bPzjojsnAXa2zOE8CdG0zKbh-4Rbhng2_peHTIxrzA&oe=6A603983",
"https://scontent.fccu31-1.fna.fbcdn.net/v/t39.30808-6/475740691_602194796050356_7643503584155259167_n.jpg?stp=c343.0.1363.1363a_dst-jpg_tt6&cstp=mx1363x1363&ctp=s206x206&_nc_cat=103&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=50ad20&_nc_ohc=JIdgWgmIMS0Q7kNvwGWPXvx&_nc_oc=Adrs5K9kCAWGZPDeJmWMoK6w5Fc2srqQXYJIFP7A29tHAm6rN3fgtp6vhpqf8JLp4js&_nc_zt=23&_nc_ht=scontent.fccu31-1.fna&_nc_gid=Oh4K7Py4y-gC3v-mD4B8SA&_nc_ss=7e2a8&oh=00_AQARBH43B_Ik43mv8clg1vFW6oeIMbR5v72UwkgFK2oJzA&oe=6A60273D"
];

const dir = path.join(__dirname, 'public', 'pre-wedding-portfolio');
if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

Promise.all(urls.map((url, i) => {
  return new Promise((resolve) => {
    https.get(url, (res) => {
      const file = fs.createWriteStream(path.join(dir, 'prewedding-' + (i + 1) + '.jpg'));
      res.pipe(file);
      file.on('finish', () => { file.close(); resolve(); });
    });
  });
})).then(() => console.log('All prewedding done!'));
