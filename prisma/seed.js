const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const fs = require('fs');
const bcrypt = require('bcrypt');



const json_posts = [
  {
    username: "nadia_younus",
    priceStartFrom: 60,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/192437271/original/3fb8af5466dc09f13e2afaccf22c6708f0a8976e.jpg",
    designTypeId: 1,
    designStyleId: 1
  },
  {
    username: "mariya_logo99",
    priceStartFrom: 15,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/292635463/original/e6d48abe79bee1a9cdc2c71e83c88513440fc393.jpg",
    designTypeId: 1,
    designStyleId: 1
  },
  {
    username: "mountdesign",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/109611151/original/42d4814c676b9f4320152d541bb6c8be7cd83d39.jpg",
    designTypeId: 1,
    designStyleId: 1
  },
  {
    username: "ahmed_gfx786",
    priceStartFrom: 5,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/132488260/original/955d6d66789bd57075f25da7de2b3a4233b2e26a.jpg",
    designTypeId: 1,
    designStyleId: 1
  },
  {
    username: "websutra",
    priceStartFrom: 400,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/122531603/original/eccdc57ef960b6cc51853d37a1ff9034af618deb.jpg",
    designTypeId: 1,
    designStyleId: 1
  },
  {
    username: "kiara43",
    priceStartFrom: 5,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/191938134/original/e3663e702416ecc37762670e28541d9f9010ef2f.jpg",
    designTypeId: 1,
    designStyleId: 1
  },
  {
    username: "crawford96",
    priceStartFrom: 25,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/252190289/original/39c3fb8f7ffc672137dda958551a68ee43b36636.jpg",
    designTypeId: 1,
    designStyleId: 1
  },
  {
    username: "morningdesigns",
    priceStartFrom: 20,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/201404443/original/1ee458d8c8eb46b803215afd40e36e052caac646.jpg",
    designTypeId: 1,
    designStyleId: 1
  },
  {
    username: "ninjadesigners",
    priceStartFrom: 125,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/82346046/original/0ff2f3c391712543510006e490f96cc488ab3526.jpg",
    designTypeId: 1,
    designStyleId: 1
  },
  {
    username: "shiv_graphix",
    priceStartFrom: 25,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/68748376/original/7d9d3d6e4efd2e35bc8e8b3cc2dcf2fde1e27271.jpg",
    designTypeId: 1,
    designStyleId: 1
  },
  {
    username: "mewindson",
    priceStartFrom: 45,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/192945874/original/45074ea0dfcd30781722c0cc82cdd54355d2102d.jpg",
    designTypeId: 1,
    designStyleId: 1
  },
  {
    username: "mrtranscendence",
    priceStartFrom: 25,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/110928855/original/c3fc46f6ac4d0287a2511cf5b06144aaa499326d.jpg",
    designTypeId: 1,
    designStyleId: 1
  },
  {
    username: "merryalexa",
    priceStartFrom: 20,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/300427605/original/c1fbf39713e96c5eef4fd63b53652fbfccfca0ab.png",
    designTypeId: 1,
    designStyleId: 1
  },
  {
    username: "camilozuluagaf",
    priceStartFrom: 85,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/69345221/original/849da8ca5c0f44ed9418d1512ea8c1de385f9184.jpg",
    designTypeId: 1,
    designStyleId: 1
  },
  {
    username: "supergf_x",
    priceStartFrom: 50,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/179527558/original/a4a1076ede0b96d8e56ebee8f2667637284935d8.jpg",
    designTypeId: 1,
    designStyleId: 1
  },
  {
    username: "weperfectionist",
    priceStartFrom: 25,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/23197467/original/d4f9121d0d962301e3ef52c1a5217bf003889e2a.jpg",
    designTypeId: 1,
    designStyleId: 1
  },
  {
    username: "softriver",
    priceStartFrom: 130,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/152144644/original/b3d1df422b12277a3f26d57f263f91b53c044f30.jpg",
    designTypeId: 1,
    designStyleId: 1
  },
  {
    username: "ameliadesigns43",
    priceStartFrom: 20,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/285419378/original/a03afba408f5a0abc5473dcdc1c72f1a0b83d6b9.jpg",
    designTypeId: 1,
    designStyleId: 1
  },
  {
    username: "shailene_george",
    priceStartFrom: 40,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/142024147/original/27b1fb04de81d0ba018311fd4adc95d36f2fb6ce.jpg",
    designTypeId: 1,
    designStyleId: 1
  },
  {
    username: "markterry15",
    priceStartFrom: 25,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/215100800/original/5fd553fd6fc3516fb438fdbfd7f4c022fae4e258.jpg",
    designTypeId: 1,
    designStyleId: 1
  },
  {
    username: "finder3nasu",
    priceStartFrom: 20,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/144181078/original/650df8470dc24f152502963672f5d740bf5fb930.jpg",
    designTypeId: 1,
    designStyleId: 1
  },
  {
    username: "caterina82",
    priceStartFrom: 40,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/140581220/original/5c9826a5c2c15bb6a30ffce7d1660ada5efbc23f.jpg",
    designTypeId: 1,
    designStyleId: 1
  },
  {
    username: "mrtranscendence",
    priceStartFrom: 15,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/65161479/original/37a41624938a244b1b8087e29bbaa0c71cde2f65.jpg",
    designTypeId: 1,
    designStyleId: 1
  },
  {
    username: "valeriiaty",
    priceStartFrom: 50,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/288950630/original/923220b5a5dc5f5a1af2c2e7ab491fba9af2bc38.jpg",
    designTypeId: 1,
    designStyleId: 1
  },
  {
    username: "iovitalucian",
    priceStartFrom: 45,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/52294014/original/671edb0cef44b97602ea29faa509cfa4fe18a3c5.jpg",
    designTypeId: 1,
    designStyleId: 1
  },
  {
    username: "vanillattack",
    priceStartFrom: 25,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/276867625/original/62855580cf8556a9f66e161afbc3bb9492bdb824.jpg",
    designTypeId: 1,
    designStyleId: 1
  },
  {
    username: "design_desk",
    priceStartFrom: 20,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/3171448/original/6758c91c574a18649d90241594cd950c89c91b36.png",
    designTypeId: 1,
    designStyleId: 1
  },
  {
    username: "weperfectionist",
    priceStartFrom: 15,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/97244336/original/0cff0c2e3fe1ecec298716c1c5e6ca507805eba0.jpg",
    designTypeId: 1,
    designStyleId: 1
  },
  {
    username: "listypop",
    priceStartFrom: 25,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/127707871/original/58036eaa037a90f7230bfc551916036a455c3e4b.jpg",
    designTypeId: 1,
    designStyleId: 1
  },
  {
    username: "sync_hamza",
    priceStartFrom: 5,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/152066972/original/6010898c38ea161b3817c53c687f96a91af0e50a.png",
    designTypeId: 1,
    designStyleId: 1
  },
  {
    username: "designs_storm",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/143974554/original/7212acc02b40a55be3d78b94b064ea893399fa87.jpg",
    designTypeId: 1,
    designStyleId: 1
  },
  {
    username: "pixinndesignz",
    priceStartFrom: 20,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/104643258/original/7f0896c08074fed12e9905279f41309503cf74f4.jpg",
    designTypeId: 1,
    designStyleId: 1
  },
  {
    username: "marioland",
    priceStartFrom: 70,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/1552664/original/2745cc4192febf6d86470696701c95382159945e.jpg",
    designTypeId: 1,
    designStyleId: 1
  },
  {
    username: "aleem_studio",
    priceStartFrom: 20,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/106890925/original/42ef14fad455d0a8d8a6dfa1a273754649ccca04.jpg",
    designTypeId: 1,
    designStyleId: 1
  },
  {
    username: "ingeniousarts",
    priceStartFrom: 30,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/137846948/original/dfcb86f1ea3b696bd3594afa8f64eeb2b65b6de3.jpg",
    designTypeId: 1,
    designStyleId: 1
  },
  {
    username: "graphixygen",
    priceStartFrom: 30,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/154184609/original/51d50b5af09a79fbc309048d4506ea6f701a30d5.jpg",
    designTypeId: 1,
    designStyleId: 1
  },
  {
    username: "majidmozafari",
    priceStartFrom: 20,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/175163410/original/93c325dc47500a50fe12b261d9d1253cc7c16774.png",
    designTypeId: 1,
    designStyleId: 1
  },
  {
    username: "romisriyoool",
    priceStartFrom: 25,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/127942188/original/14b2092c5fa6b50f36a0c97615b7b29779b23a5b.jpg",
    designTypeId: 1,
    designStyleId: 1
  },
  {
    username: "johnny_bhai",
    priceStartFrom: 25,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/257137257/original/afd9dc82ac5c64a34b849a8705ddc107825f4dc3.jpg",
    designTypeId: 1,
    designStyleId: 1
  },
  {
    username: "delengo",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/207545344/original/7b59d85b0e99f0430f9a5a08db231a3dea960323.jpg",
    designTypeId: 1,
    designStyleId: 1
  },
  {
    username: "mr_vogt",
    priceStartFrom: 40,
    imageUrl: "https://fiverr-res.cloudinary.com/video/upload/so_64.032969,t_gig_cards_web/w1pjkpr0sf53imktrrvr.png",
    designTypeId: 1,
    designStyleId: 1
  },
  {
    username: "ericdesigner1",
    priceStartFrom: 5,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/271410688/original/e66aef0ffa7ce9c13a38536786945314c211f812.jpg",
    designTypeId: 1,
    designStyleId: 1
  },
  {
    username: "fetannus",
    priceStartFrom: 30,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/161949721/original/bd57853b4bc0e5b4752bae63942642b3acbeff7b.jpg",
    designTypeId: 1,
    designStyleId: 1
  },
  {
    username: "logodreams",
    priceStartFrom: 45,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/6226325/original/8e1d90b2a86fa99800c047b11e048c40b93629ca.jpg",
    designTypeId: 1,
    designStyleId: 1
  },
  {
    username: "zera93",
    priceStartFrom: 35,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/2235503/original/5f73a312695668c039acfd7d9f8dd5f1d96c0931.jpg",
    designTypeId: 1,
    designStyleId: 1
  },
  {
    username: "thedesignaffair",
    priceStartFrom: 25,
    imageUrl: "https://fiverr-res.cloudinary.com/video/upload/so_0.692822,t_gig_cards_web/acqh2sxrod8hhty9o54i.png",
    designTypeId: 1,
    designStyleId: 1
  },
  {
    username: "misty_mole",
    priceStartFrom: 25,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/259891490/original/ab4a06f811c52be2fe518cb0d64eac57961585f3.jpeg",
    designTypeId: 1,
    designStyleId: 1
  },
  {
    username: "zunairaah",
    priceStartFrom: 70,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/122501197/original/3acf4aeee6f62ace404d17a217a0ddf12c6b350e.jpg",
    designTypeId: 1,
    designStyleId: 1
  },
  {
    username: "mariakhan811",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/260267723/original/7195b1c2a3fd15f101ce085cd301b098483db912.jpg",
    designTypeId: 1,
    designStyleId: 1
  },
  {
    username: "valeriiaty",
    priceStartFrom: 50,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/162059693/original/e5002568c45809d8586d525c25ddc7cf69a53cc1.png",
    designTypeId: 1,
    designStyleId: 1
  },
  {
    username: "skydesigner",
    priceStartFrom: 80,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/3307391/original/61fde5d1ed34f93dc30ac8327f40dcb9ac7218bf.png",
    designTypeId: 1,
    designStyleId: 1
  },
  {
    username: "b_logomaker",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/163754892/original/9fdc89de7b574bfcd213695eab1a76769a5deef7.jpg",
    designTypeId: 1,
    designStyleId: 1
  },
  {
    username: "logoflow",
    priceStartFrom: 15,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/22527722/original/d9de303ea2f07efe1e75e1a67f657e33e6aa9b4f.jpg",
    designTypeId: 1,
    designStyleId: 1
  },
  {
    username: "aviafriat",
    priceStartFrom: 60,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/76029786/original/c6d294ece5150a0b4fe08357dc007457829bd2a8.jpg",
    designTypeId: 1,
    designStyleId: 1
  },
  {
    username: "zeeshanzahirali",
    priceStartFrom: 30,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/160680564/original/c1922678fcf31038f9f9e4cfd6dd6067061af57d.png",
    designTypeId: 1,
    designStyleId: 1
  },
  {
    username: "shezy_design",
    priceStartFrom: 5,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/141849813/original/d19a6338a5d88a8ecc16eef74128bde47d1a5d99.png",
    designTypeId: 1,
    designStyleId: 1
  },
  {
    username: "xer0_xdesign",
    priceStartFrom: 20,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/7176527/original/a5456b4e290fc1e44ad6f956aaa5f0d02b902f7b.png",
    designTypeId: 1,
    designStyleId: 1
  },
  {
    username: "arundaskm",
    priceStartFrom: 80,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/1360189/original/cb4b5dd861907fe92720b1009eadd53e8dcc864b.jpg",
    designTypeId: 1,
    designStyleId: 1
  },
  {
    username: "teamofcreatives",
    priceStartFrom: 5,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/238487680/original/b7d4172d5dd96d6b40bed3ba438319b399000117.png",
    designTypeId: 1,
    designStyleId: 1
  },
  {
    username: "jeyarts",
    priceStartFrom: 40,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/100849695/original/861139cd50b2e53d18e301ae12619c2d397ee171.jpg",
    designTypeId: 1,
    designStyleId: 1
  },
  {
    username: "xco_studio",
    priceStartFrom: 30,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/133101570/original/587fa2a196b40020707d9c42b38482acb34a9f08.jpg",
    designTypeId: 1,
    designStyleId: 1
  },
  {
    username: "illustriouss",
    priceStartFrom: 15,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/110847760/original/00bbe27e2dc6b3b34bd1a6c02b9b5867e1aff783.jpg",
    designTypeId: 1,
    designStyleId: 1
  },
  {
    username: "malikahmed99",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/video/upload/so_30.80919,t_gig_cards_web/iqqqy3k0bn83ghwzc47w.png",
    designTypeId: 1,
    designStyleId: 1
  },
  {
    username: "shapebuilders",
    priceStartFrom: 30,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/206887297/original/05d9716da4bd4e9fb1daa0c64c4352c0e8422ee2.jpg",
    designTypeId: 1,
    designStyleId: 1
  },
  {
    username: "delightlogoz",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/239053563/original/43320dd0b0c4e0146041d0dbaa51ab1602d6cd87.jpg",
    designTypeId: 1,
    designStyleId: 1
  },
  {
    username: "roxsybeuw",
    priceStartFrom: 20,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/301838416/original/d6cf14c5e0fb71f11b73e86f9717c8c5c2b0780c.png",
    designTypeId: 1,
    designStyleId: 1
  },
  {
    username: "hirparabhavin",
    priceStartFrom: 40,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/181018412/original/9df3ba5e11d69cc6e14d7a61e9e7ba50c05cb4f1.jpg",
    designTypeId: 1,
    designStyleId: 1
  },
  {
    username: "poppy_lights",
    priceStartFrom: 40,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/143534112/original/56fad00e965dc36a842bb7e73eb0f1c085ee79b2.png",
    designTypeId: 1,
    designStyleId: 1
  },
  {
    username: "explorance",
    priceStartFrom: 25,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/194009784/original/5d2ce9be504e32084e203aaf20151469c65107b3.jpg",
    designTypeId: 1,
    designStyleId: 1
  },
  {
    username: "kawsarhossan",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/137432496/original/4441be1a7b0f653e836174934d2d15ccdd194d1e.jpg",
    designTypeId: 1,
    designStyleId: 1
  },
  {
    username: "hello_friday",
    priceStartFrom: 45,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/96968616/original/a627955bbf0657bfd8fb57e734396d54bd48f786.jpg",
    designTypeId: 1,
    designStyleId: 1
  },
  {
    username: "talentino12",
    priceStartFrom: 40,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/120741108/original/99d9b422c907873158a3a1b88bd40f1aa3f791ed.jpg",
    designTypeId: 1,
    designStyleId: 1
  },
  {
    username: "faizankhanani",
    priceStartFrom: 5,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/238180463/original/17b2060579adf9abaee5a91bc91ab4dea8eb94b8.png",
    designTypeId: 1,
    designStyleId: 1
  },
  {
    username: "mm_hassan",
    priceStartFrom: 20,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/240161600/original/3420d134e48a95c626815837a051de5e42c258fe.jpg",
    designTypeId: 1,
    designStyleId: 1
  },
  {
    username: "texas_studios",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/243650148/original/411a70951521cd3266761691d2e87b899cc38732.jpg",
    designTypeId: 1,
    designStyleId: 1
  },
  {
    username: "hasyodesign",
    priceStartFrom: 15,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/98273966/original/3fdc00a5b42536a2740ec6048acf22da871702b4.jpg",
    designTypeId: 1,
    designStyleId: 1
  },
  {
    username: "mrh_apon",
    priceStartFrom: 35,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/187708935/original/3a1bb0d901fdb1f680b9e12824618af46f73f6f5.jpg",
    designTypeId: 1,
    designStyleId: 1
  },
  {
    username: "delengo",
    priceStartFrom: 5,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/192870904/original/6e0e0600e3c024f9e7acdc96f72ab9958fad5c6d.jpg",
    designTypeId: 1,
    designStyleId: 1
  },
  {
    username: "zonestudio1",
    priceStartFrom: 95,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/67151721/original/b50ccf31d5f8d266fd9cfbb32dc956022ed31d05.jpg",
    designTypeId: 1,
    designStyleId: 1
  },
  {
    username: "logosdreams",
    priceStartFrom: 5,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/295989895/original/5e65fc772ebf67a41645671173230c364d148383.jpg",
    designTypeId: 1,
    designStyleId: 1
  },
  {
    username: "junaid710",
    priceStartFrom: 30,
    imageUrl: "https://fiverr-res.cloudinary.com/video/upload/so_0.208177,t_gig_cards_web/b578w6s9b5lflwvrwxyw.png",
    designTypeId: 1,
    designStyleId: 1
  },
  {
    username: "cantikdesign",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/109849977/original/05531240bbef5e1186fed4a4c384a8d8d323fd55.png",
    designTypeId: 1,
    designStyleId: 1
  },
  {
    username: "alex_logos",
    priceStartFrom: 45,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/7531102/original/8b388213b19838d98656c78dfe00dcadacfd2faf.jpg",
    designTypeId: 1,
    designStyleId: 1
  },
  {
    username: "hellogfx7",
    priceStartFrom: 30,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/285510584/original/13e93f10ac50ab88e21b964b27f303fdeb07537a.jpg",
    designTypeId: 1,
    designStyleId: 1
  },
  {
    username: "infinitygraphcs",
    priceStartFrom: 15,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/271130288/original/cd072cf5121dee97bbc34192a9875e8e71a7c56b.png",
    designTypeId: 1,
    designStyleId: 1
  },
  {
    username: "arona1",
    priceStartFrom: 5,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/165658104/original/c9e55962f3f9227189ccd767ee2543d82eb223f4.jpg",
    designTypeId: 1,
    designStyleId: 1
  },
  {
    username: "skydesigner",
    priceStartFrom: 80,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/2625783/original/d53742ba84a54e2b76928ff82c56403d4dbee6a8.png",
    designTypeId: 1,
    designStyleId: 1
  },
  {
    username: "stdesigns",
    priceStartFrom: 20,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/3588657/original/cef81f56c875139ab93b882ac8b4521874f7ecb8.jpg",
    designTypeId: 1,
    designStyleId: 1
  },
  {
    username: "hasnyousaf",
    priceStartFrom: 20,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/245263252/original/732ad8785bff55a7125e9cb8bb9e2cdfc76cc243.jpg",
    designTypeId: 1,
    designStyleId: 1
  },
  {
    username: "malish_logo",
    priceStartFrom: 20,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/308755105/original/9f45568f02b23e47d9fa04c57a58f58ee44ebfd5.png",
    designTypeId: 1,
    designStyleId: 1
  },
  {
    username: "alinabogner24",
    priceStartFrom: 80,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/158366619/original/c6fc0cd87720f198a640a3fb3826100565bc9c5e.jpg",
    designTypeId: 1,
    designStyleId: 1
  },
  {
    username: "gpsfirestudio",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/video/upload/so_26.659547,t_gig_cards_web/ilyeiy7razyj28scyutt.png",
    designTypeId: 1,
    designStyleId: 1
  },
  {
    username: "sevenarc",
    priceStartFrom: 35,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/111477752/original/64f8bb00f2ca44d083703060d5f0428f385d11c0.jpg",
    designTypeId: 1,
    designStyleId: 1
  },
  {
    username: "anu_designs4u",
    priceStartFrom: 30,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/99918195/original/b81501568a5d0fa7c518ed925959336edbbf0a27.jpg",
    designTypeId: 1,
    designStyleId: 1
  },
  {
    username: "srdjanstojicic",
    priceStartFrom: 155,
    imageUrl: "https://fiverr-res.cloudinary.com/video/upload/so_3.89833342699979,t_gig_cards_web/uwaerjac5hxstyvswtkx.png",
    designTypeId: 1,
    designStyleId: 1
  },
  {
    username: "rroxx",
    priceStartFrom: 15,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/104314581/original/baeec70c46e0e4becac96fdce6b4fbae8dd75637.png",
    designTypeId: 1,
    designStyleId: 1
  },
  {
    username: "tony_dezign",
    priceStartFrom: 25,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/133738449/original/76ccc9b8b4c012aa95fc8e556a716aeebbd36787.jpg",
    designTypeId: 1,
    designStyleId: 1
  },
  {
    username: "ratrihalder",
    priceStartFrom: 30,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/183909967/original/bc37b4f6f79beff743ab29992b33c03397964055.jpg",
    designTypeId: 1,
    designStyleId: 1
  },
  {
    username: "logo_angel_",
    priceStartFrom: 15,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/228999163/original/d5eeecf6bf0e70f76911467638bfedf1fb645df7.jpg",
    designTypeId: 1,
    designStyleId: 1
  },
  {
    username: "danielaotero",
    priceStartFrom: 100,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/95160836/original/c76e3bafcd31d8e9af171307c93ff18a36685208.png",
    designTypeId: 1,
    designStyleId: 1
  },
  {
    username: "marrygigvilla",
    priceStartFrom: 30,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/191970217/original/fda0154957854258d524a9d67c7a3fd950eac25d.jpg",
    designTypeId: 1,
    designStyleId: 1
  },
  {
    username: "actualreviewnet",
    priceStartFrom: 95,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/3137724/original/3a3bbdc5fc838e0ed4488a7bd532469324d0b374.jpg",
    designTypeId: 1,
    designStyleId: 1
  },
  {
    username: "khokonhassan",
    priceStartFrom: 30,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/257010762/original/dab4499327d0b844c29abd7500d8887fe85fcebe.jpg",
    designTypeId: 1,
    designStyleId: 1
  },
  {
    username: "aiadesign",
    priceStartFrom: 25,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/195225408/original/75cdd654d1519945b41ddef59d0ec66a07c9cd42.png",
    designTypeId: 1,
    designStyleId: 1
  },
  {
    username: "happy_art54",
    priceStartFrom: 35,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/290788570/original/77b7e1a35afa46912e468220e0e971723ccda04c.jpg",
    designTypeId: 1,
    designStyleId: 1
  },
  {
    username: "katieekat",
    priceStartFrom: 25,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/98328997/original/5d85a61c136986f414c3ee2fc299b1df076db592.jpg",
    designTypeId: 1,
    designStyleId: 1
  },
  {
    username: "tailor_brands",
    priceStartFrom: 85,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/130727333/original/dffe982dd3bc89d0082cbe0092232df42e1c68ed.jpg",
    designTypeId: 1,
    designStyleId: 1
  },
  {
    username: "designtown",
    priceStartFrom: 25,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/174636995/original/214717948343b828c027b5093bb039dc15caf80f.jpg",
    designTypeId: 1,
    designStyleId: 1
  },
  {
    username: "plantantion",
    priceStartFrom: 45,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/178827148/original/cda2ecbe0d6697f1dadb5e47d63d3f50a6b75f89.jpg",
    designTypeId: 1,
    designStyleId: 1
  },
  {
    username: "logo_masters786",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/266681539/original/8e781c700dfc74c7f966449e4b2a1624d268f83a.jpg",
    designTypeId: 1,
    designStyleId: 1
  },
  {
    username: "harshas",
    priceStartFrom: 25,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/127237705/original/ad7371c23fe4cf332978b2b0da515f665571bac8.jpg",
    designTypeId: 1,
    designStyleId: 1
  },
  {
    username: "adripoggetti",
    priceStartFrom: 45,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/122812339/original/ed0c4a9b832358381a659d585755203d41f3fef1.png",
    designTypeId: 1,
    designStyleId: 1
  },
  {
    username: "ranisuchi",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/210400805/original/793886ad531f270912b4d7ca10574c90b5385fc8.jpg",
    designTypeId: 1,
    designStyleId: 1
  },
  {
    username: "germancreative",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/268428480/original/0f26fb56428a75bd9a12ce208318193c47cb9411.jpg",
    designTypeId: 1,
    designStyleId: 1
  },
  {
    username: "misty_2",
    priceStartFrom: 20,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/170411386/original/0b8e82dc89ba2095933f2866359008ff41024f38.jpg",
    designTypeId: 1,
    designStyleId: 1
  },
  {
    username: "gogelle",
    priceStartFrom: 100,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/142625166/original/a5989430807e74d0cad6fb6abafc7e464ad3f9d9.jpg",
    designTypeId: 1,
    designStyleId: 1
  },
  {
    username: "greentask",
    priceStartFrom: 50,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/296486482/original/5b5f25d101b3711fce57ceece3403301a93ec81d.jpg",
    designTypeId: 1,
    designStyleId: 1
  },
  {
    username: "designsbysaba",
    priceStartFrom: 150,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/113014756/original/e68a2d60f822a6af22c78af5167425f176c19311.jpg",
    designTypeId: 1,
    designStyleId: 1
  },
  {
    username: "divastudio1",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/233109357/original/2fdbdd7f2af2e9888301593ecf6a56163fbb9806.png",
    designTypeId: 1,
    designStyleId: 1
  },
  {
    username: "mjcagency",
    priceStartFrom: 275,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/169537356/original/f9f558feb877ef4b46e5d675ee114df1cce4ad83.png",
    designTypeId: 1,
    designStyleId: 1
  },
  {
    username: "abrahamdave",
    priceStartFrom: 45,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/106426890/original/2994ac0d7d581f1e31fc213f8fd616de293c41e3.jpg",
    designTypeId: 1,
    designStyleId: 1
  },
  {
    username: "luisahanna",
    priceStartFrom: 5,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/309778055/original/a1755d343c77cc080200add26d8f70d6451e06f0.jpg",
    designTypeId: 1,
    designStyleId: 1
  },
  {
    username: "logo_kings",
    priceStartFrom: 5,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/43380544/original/2ee94deeb1c6c263abfa743aa643f18dad9cf909.jpg",
    designTypeId: 1,
    designStyleId: 1
  },
  {
    username: "polar_creative",
    priceStartFrom: 25,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/245065745/original/df67c95e38677de920635bbc37127406e9d504c6.png",
    designTypeId: 1,
    designStyleId: 1
  },
  {
    username: "qullart",
    priceStartFrom: 5,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/246002735/original/2d305a9419dc952143899d36f2ceb543bd234bb4.jpg",
    designTypeId: 1,
    designStyleId: 1
  },
  {
    username: "sumairaladhaa",
    priceStartFrom: 20,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/192513621/original/8587063a73b8125d85ab5f73a7bd8f7dc90cb143.jpg",
    designTypeId: 1,
    designStyleId: 1
  },
  {
    username: "heimat_berlin",
    priceStartFrom: 50,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/298610802/original/01cd963c958adec525edd90340ca46af64916433.png",
    designTypeId: 1,
    designStyleId: 1
  },
  {
    username: "rfj_graphics",
    priceStartFrom: 50,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/93035656/original/7928639afd3bc7d1de5cfecf5fd21f809cc65de5.jpg",
    designTypeId: 1,
    designStyleId: 1
  },
  {
    username: "logo_factory10",
    priceStartFrom: 20,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/142221195/original/f654b68f3ceac0a5173ecc023b2e5c46cb85ddd2.jpg",
    designTypeId: 1,
    designStyleId: 1
  },
  {
    username: "bithi_akther",
    priceStartFrom: 30,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/243287710/original/0e4b1d7162e6c5bac5f6415ad387340e9935f09a.jpg",
    designTypeId: 1,
    designStyleId: 1
  },
  {
    username: "selflovepn",
    priceStartFrom: 35,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/297979285/original/cf79b03077107830e4f06c667a547136cadb5440.png",
    designTypeId: 1,
    designStyleId: 1
  },
  {
    username: "imtalha",
    priceStartFrom: 5,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/102798279/original/d7f6877a75db2be2bbddadf6f363073538e26764.jpg",
    designTypeId: 1,
    designStyleId: 1
  },
  {
    username: "maya610",
    priceStartFrom: 50,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/285873541/original/f9ea6e9cd77fa651055efe61b7df9fc16938fcf0.jpg",
    designTypeId: 1,
    designStyleId: 1
  },
  {
    username: "atxstudio",
    priceStartFrom: 30,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/209455371/original/05239206169a127572f7fe4879563310bca02298.png",
    designTypeId: 1,
    designStyleId: 1
  },
  {
    username: "reksaaji_",
    priceStartFrom: 15,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/210756291/original/c13bcce36b8c31421b583380010a7ab503e8e63b.png",
    designTypeId: 1,
    designStyleId: 1
  },
  {
    username: "ravindu_ps",
    priceStartFrom: 65,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/150656842/original/817b234f5212aa57473b0186cc2e2144b6effc8c.jpg",
    designTypeId: 1,
    designStyleId: 1
  },
  {
    username: "art_treasure01",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/167782713/original/c816b9a4df6d76cf7a8b6d00f52c3b27740e058d.jpg",
    designTypeId: 1,
    designStyleId: 1
  },
  {
    username: "jackiebalboa1",
    priceStartFrom: 25,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/143801307/original/182ae507354f6fe0fa021e403461e9b6e40f3a03.jpg",
    designTypeId: 1,
    designStyleId: 1
  },
  {
    username: "monarchgfx",
    priceStartFrom: 5,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/267914586/original/fa0fb61d4885ea004142f3575b2b0e42e0585245.jpg",
    designTypeId: 1,
    designStyleId: 1
  },
  {
    username: "graphic_zone786",
    priceStartFrom: 30,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/291673211/original/6ab460a1623b38dfcddb16367cd81f73e61d4def.jpg",
    designTypeId: 1,
    designStyleId: 1
  },
  {
    username: "thebluestudio01",
    priceStartFrom: 80,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/205648914/original/f5492e678b56aefef5e42f9bc0442c185b5fb8c6.jpg",
    designTypeId: 1,
    designStyleId: 1
  },
  {
    username: "xco_studio",
    priceStartFrom: 30,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/133111624/original/ededf99c93ce39ad2b2a68ffacd920a74a1e616e.jpg",
    designTypeId: 1,
    designStyleId: 1
  },
  {
    username: "purplehate",
    priceStartFrom: 40,
    imageUrl: "https://fiverr-res.cloudinary.com/video/upload/so_1.936254,t_gig_cards_web/uq9bkr9kyzzjkntsebjb.png",
    designTypeId: 1,
    designStyleId: 2
  },
  {
    username: "lonely_life",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/44847554/original/44675156da08a74cea3e9423e6d9256855db0b0a.jpg",
    designTypeId: 1,
    designStyleId: 2
  },
  {
    username: "lanlanceart",
    priceStartFrom: 15,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/289425037/original/a60dbecfe51fb5dc9836328b535f636f90ec3875.png",
    designTypeId: 1,
    designStyleId: 2
  },
  {
    username: "ki_creation",
    priceStartFrom: 15,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/204080163/original/ace89ae741d770ec1b9611384f11f5f5645d1973.jpg",
    designTypeId: 1,
    designStyleId: 2
  },
  {
    username: "floroliva",
    priceStartFrom: 750,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/172520609/original/af41871228f938bd149a5fa4aa5636f255dc8d56.jpg",
    designTypeId: 1,
    designStyleId: 2
  },
  {
    username: "vanartcreator",
    priceStartFrom: 15,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/173425637/original/6cf77af6e056483e04b0028d6eb3cf509765dfaa.jpg",
    designTypeId: 1,
    designStyleId: 2
  },
  {
    username: "esther_design",
    priceStartFrom: 40,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/78926176/original/521e38fbe947c8e9f52351766ed67d2dfe393af7.jpg",
    designTypeId: 1,
    designStyleId: 2
  },
  {
    username: "wigi_wigel",
    priceStartFrom: 35,
    imageUrl: "https://fiverr-res.cloudinary.com/video/upload/so_1.064966,t_gig_cards_web/q6vbk0vxootdedb7cjnz.png",
    designTypeId: 1,
    designStyleId: 2
  },
  {
    username: "graffic_factory",
    priceStartFrom: 25,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/274213201/original/2ccf1612a76a7694aca59b3f23973fac888b274c.jpg",
    designTypeId: 1,
    designStyleId: 2
  },
  {
    username: "stevanzivkovic",
    priceStartFrom: 20,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/58118114/original/d87df566c6853448d8d22988b8268173ab4f6f9a.jpg",
    designTypeId: 1,
    designStyleId: 2
  },
  {
    username: "listypop",
    priceStartFrom: 25,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/141284800/original/0bb6db8c7ed2bafd59247497d3c379cd54164cc4.jpg",
    designTypeId: 1,
    designStyleId: 2
  },
  {
    username: "bilquis_arif",
    priceStartFrom: 20,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/135939661/original/038f8a1830286f9e5b7e946052bc3d2286487a20.jpg",
    designTypeId: 1,
    designStyleId: 2
  },
  {
    username: "bilalhaider23",
    priceStartFrom: 50,
    imageUrl: "https://fiverr-res.cloudinary.com/video/upload/so_29.558588,t_gig_cards_web/ylcwz3h67n8fetelqjkb.png",
    designTypeId: 1,
    designStyleId: 2
  },
  {
    username: "logo_maxy",
    priceStartFrom: 25,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/113095174/original/8c20b1c843517bf3630b9b880ffd80e2f5b12a21.jpg",
    designTypeId: 1,
    designStyleId: 2
  },
  {
    username: "tomtypography",
    priceStartFrom: 45,
    imageUrl: "https://fiverr-res.cloudinary.com/video/upload/so_45.901993,t_gig_cards_web/dpexmofqpe3g9p6lfosc.png",
    designTypeId: 1,
    designStyleId: 2
  },
  {
    username: "rigerspopa",
    priceStartFrom: 85,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/4635026/original/60f66e81cdb879812bb739bc78c7dc2e522448fd.jpg",
    designTypeId: 1,
    designStyleId: 2
  },
  {
    username: "abrahamdave",
    priceStartFrom: 45,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/123747612/original/f903230f3164cdd5c2341a6bd1f8d67a8293bbaf.jpg",
    designTypeId: 1,
    designStyleId: 2
  },
  {
    username: "rafikaleng",
    priceStartFrom: 60,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/132373728/original/c896b1682c3c72ed313f599b34ced2b6cc21bce7.jpg",
    designTypeId: 1,
    designStyleId: 2
  },
  {
    username: "l0g0king",
    priceStartFrom: 25,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/4237716/original/cad9ecfc0502056c6a4f434fcfc0e7e662012f2c.png",
    designTypeId: 1,
    designStyleId: 2
  },
  {
    username: "abdulsalam972",
    priceStartFrom: 75,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/245866312/original/14c7f411ab4958c13cccf3f46e6b3be04797ce59.jpg",
    designTypeId: 1,
    designStyleId: 2
  },
  {
    username: "sumbal_khan",
    priceStartFrom: 30,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/151230521/original/1eadaee0a6f4a563550e0107d55f134631cfd2cc.jpg",
    designTypeId: 1,
    designStyleId: 2
  },
  {
    username: "andreasdamas",
    priceStartFrom: 40,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/167005683/original/2ec85a1b84f6f63a64b56ff2e20b16942e90e494.jpg",
    designTypeId: 1,
    designStyleId: 2
  },
  {
    username: "milanga",
    priceStartFrom: 85,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/115001524/original/6bcd7bc9befc6314dfc8086a495b0b5f647ddd47.jpg",
    designTypeId: 1,
    designStyleId: 2
  },
  {
    username: "dynamostudioo",
    priceStartFrom: 65,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/229238020/original/96fce9db1876da79533e15d60dcfa5de8216d18b.jpg",
    designTypeId: 1,
    designStyleId: 2
  },
  {
    username: "ridho_saras",
    priceStartFrom: 90,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/109183988/original/fc7b4ab25c266b24df2950cff43caba172a191f6.png",
    designTypeId: 1,
    designStyleId: 2
  },
  {
    username: "olvtreedesign",
    priceStartFrom: 230,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/240346124/original/13cd2681ac80822d5d7ac5721f44c5fdea607783.png",
    designTypeId: 1,
    designStyleId: 2
  },
  {
    username: "vector_factory",
    priceStartFrom: 40,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/119171108/original/ff7e1597026dfe48a2e0def53b52a93ee355fff2.png",
    designTypeId: 1,
    designStyleId: 2
  },
  {
    username: "adu_design",
    priceStartFrom: 30,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/273233462/original/77075f4149000ba5c1a68162a9f5b0024008ecc1.jpg",
    designTypeId: 1,
    designStyleId: 2
  },
  {
    username: "tegarbrian",
    priceStartFrom: 30,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/244121728/original/d50cbd525d7a7d703f08905e04636d9a653f27a0.jpg",
    designTypeId: 1,
    designStyleId: 2
  },
  {
    username: "cheftychefty",
    priceStartFrom: 150,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/118127829/original/78fe34ecddb886dd10b291634bbf2e03d55ba64e.png",
    designTypeId: 1,
    designStyleId: 2
  },
  {
    username: "valeriiaty",
    priceStartFrom: 50,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/229132321/original/089320cf24257e2dd0dae8e7cd701b54d15907cf.jpg",
    designTypeId: 1,
    designStyleId: 2
  },
  {
    username: "fahms_works",
    priceStartFrom: 30,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/199302307/original/1acc75eac6da324f1ee64955b6565f1d787f1add.png",
    designTypeId: 1,
    designStyleId: 2
  },
  {
    username: "lamberti",
    priceStartFrom: 80,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/6738810/original/ca98e378d48999fea2127b60603215f46f39b8d0.jpg",
    designTypeId: 1,
    designStyleId: 2
  },
  {
    username: "delivian",
    priceStartFrom: 20,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/159904829/original/6a1a677f7a98a4a7d07aabb0581dcec7fbc2b6cf.jpg",
    designTypeId: 1,
    designStyleId: 2
  },
  {
    username: "nimra_aziz_",
    priceStartFrom: 130,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/225787620/original/faff7b6aadf6b46e2c0e3c5541ee0225070e27dd.jpg",
    designTypeId: 1,
    designStyleId: 2
  },
  {
    username: "sk_virtuoso",
    priceStartFrom: 25,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/18516429/original/5b4d72fd18f2210dceae7b44f3ae497d96443866.jpg",
    designTypeId: 1,
    designStyleId: 2
  },
  {
    username: "sevenheavens_",
    priceStartFrom: 50,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/284809189/original/a5f01720a6f8af3edfadd2c6066702254555c4f8.jpg",
    designTypeId: 1,
    designStyleId: 2
  },
  {
    username: "elmantastic",
    priceStartFrom: 75,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/120220957/original/a963fa82d7a7831afe54e54cbd461a24138c6509.png",
    designTypeId: 1,
    designStyleId: 2
  },
  {
    username: "leoash522",
    priceStartFrom: 25,
    imageUrl: "https://fiverr-res.cloudinary.com/video/upload/t_gig_cards_web/lnqjuzbjml7ngybuv8gj.png",
    designTypeId: 1,
    designStyleId: 2
  },
  {
    username: "danyprasetyo",
    priceStartFrom: 95,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/120823550/original/5ef8fd55d72dd85c89701788bee21aa9daafc0c4.jpg",
    designTypeId: 1,
    designStyleId: 2
  },
  {
    username: "logo_adi",
    priceStartFrom: 20,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/199004786/original/cbc798729ad8125c806b00e29e45c211dc8b29eb.png",
    designTypeId: 1,
    designStyleId: 2
  },
  {
    username: "febiansaputra",
    priceStartFrom: 70,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/202997430/original/bce365bec7d8f809b7e7e232ebff67a76a154868.jpg",
    designTypeId: 1,
    designStyleId: 2
  },
  {
    username: "shankaradesign",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/258023251/original/c7930d01673a955f6d62046bf7308bc07da9cdfb.jpg",
    designTypeId: 1,
    designStyleId: 2
  },
  {
    username: "mikucchi",
    priceStartFrom: 20,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/285555961/original/572a465781a5e91174f0ba7da0de9c6f070ca94d.jpg",
    designTypeId: 1,
    designStyleId: 2
  },
  {
    username: "epi_creative",
    priceStartFrom: 20,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/160766366/original/23c427f54205e7403b0730433eb3b8017477f1d3.jpg",
    designTypeId: 1,
    designStyleId: 2
  },
  {
    username: "dunjabosanac",
    priceStartFrom: 20,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/106643998/original/31b34b5050ccd15260d8af26e381e7ff677454be.jpg",
    designTypeId: 1,
    designStyleId: 2
  },
  {
    username: "ana_vallejo",
    priceStartFrom: 30,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/57048939/original/ff61207107c110130bd036a946bb5960d5ba0fe4.jpg",
    designTypeId: 1,
    designStyleId: 2
  },
  {
    username: "wahab_dhedhi",
    priceStartFrom: 40,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/116162938/original/7fa349aa4ac66cea6f074df2bbb798d95038ba9a.jpg",
    designTypeId: 1,
    designStyleId: 2
  },
  {
    username: "stevanzivkovic",
    priceStartFrom: 20,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/258522111/original/5acef969efa12cf5b84e26ceee354598005ebf56.jpg",
    designTypeId: 1,
    designStyleId: 2
  },
  {
    username: "anelijas",
    priceStartFrom: 100,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/140320531/original/32627d20142b185d719d5abb61b9386887d6bf4b.jpg",
    designTypeId: 1,
    designStyleId: 2
  },
  {
    username: "rizkiivan",
    priceStartFrom: 15,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/107992015/original/b9517d0a5369337db2777e71b981f1e05658cd77.png",
    designTypeId: 1,
    designStyleId: 2
  },
  {
    username: "dh_studio",
    priceStartFrom: 30,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/228248008/original/222a35d00c9f36423ed941f9187f66600aba1353.jpg",
    designTypeId: 1,
    designStyleId: 2
  },
  {
    username: "bisma_ahmad",
    priceStartFrom: 45,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/132925814/original/ce8270d324be6ce4e95dad5e535572786a2318e0.jpg",
    designTypeId: 1,
    designStyleId: 2
  },
  {
    username: "logo_rhm98",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/204459569/original/bc87228081c2f53b361a1e1b0b064d5d04466070.jpg",
    designTypeId: 1,
    designStyleId: 2
  },
  {
    username: "creativitylove",
    priceStartFrom: 40,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/147360513/original/d95d52d78222189241ce04300eb2d790eec3b097.jpg",
    designTypeId: 1,
    designStyleId: 2
  },
  {
    username: "satrioalfandi",
    priceStartFrom: 40,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/132369213/original/4183ea18c110a77491943d79e2e01649104a0836.jpg",
    designTypeId: 1,
    designStyleId: 2
  },
  {
    username: "earish_design",
    priceStartFrom: 5,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/252971434/original/03d2acc99b84965c224421ea0fc821c3a274d6aa.jpg",
    designTypeId: 1,
    designStyleId: 2
  },
  {
    username: "rizkiivan",
    priceStartFrom: 25,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/209766120/original/28d2061a209bd3a5cdfbd38ba8106dfbc227d2f4.jpg",
    designTypeId: 1,
    designStyleId: 2
  },
  {
    username: "logoflow",
    priceStartFrom: 25,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/140888773/original/63c218cc11721a651c72c08c3c8ea5611c3cd771.jpg",
    designTypeId: 1,
    designStyleId: 2
  },
  {
    username: "anggorotony",
    priceStartFrom: 15,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/122225978/original/16a7f9603fc5462949e3e99ad2c0ccb3fd7a8a9a.png",
    designTypeId: 1,
    designStyleId: 2
  },
  {
    username: "lissamii",
    priceStartFrom: 45,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/197982714/original/7ef6ab387a3082c051439c42d2af8a7bb8339eae.png",
    designTypeId: 1,
    designStyleId: 2
  },
  {
    username: "adikrib_8",
    priceStartFrom: 25,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/171375196/original/4e718dc9a66381c7375c17145911f64bd28d0726.jpg",
    designTypeId: 1,
    designStyleId: 2
  },
  {
    username: "meherun_nesa",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/147071984/original/84168a775d696f647cfb648e4d727c1dc1b21d21.jpg",
    designTypeId: 1,
    designStyleId: 2
  },
  {
    username: "wantaraputra",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/238550457/original/7275693b43f14f5be3eaec669a28ad5b4f71750b.jpg",
    designTypeId: 1,
    designStyleId: 2
  },
  {
    username: "kurtmaz",
    priceStartFrom: 95,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/238199154/original/5018fb3bf9181ba756e7b27360b9bf31fa01adea.jpg",
    designTypeId: 1,
    designStyleId: 2
  },
  {
    username: "mscarlettdesign",
    priceStartFrom: 450,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/167393491/original/e2dabfb72e4f5fe2daeaa5eb3c90cf12119f39b9.jpg",
    designTypeId: 1,
    designStyleId: 2
  },
  {
    username: "glorias_studio",
    priceStartFrom: 40,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/294833026/original/843f19e39f4c81a401185f444001178e46d420c4.jpg",
    designTypeId: 1,
    designStyleId: 2
  },
  {
    username: "holo_dreamz",
    priceStartFrom: 30,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/221613145/original/9055097f6710648523c37194fb7503c773208b62.jpg",
    designTypeId: 1,
    designStyleId: 2
  },
  {
    username: "logoartisttt",
    priceStartFrom: 20,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/281227067/original/072f1c01fd562d42c023fb9511cf2db98dc97508.jpg",
    designTypeId: 1,
    designStyleId: 2
  },
  {
    username: "smile_skunks",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/175371035/original/6efd91fa91bc92ff3637d9342e6d862a3df7c1a3.png",
    designTypeId: 1,
    designStyleId: 2
  },
  {
    username: "blackupheaval",
    priceStartFrom: 15,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/198781437/original/eb05427d736c879ea51bfe90ab5b376dd686553f.jpg",
    designTypeId: 1,
    designStyleId: 2
  },
  {
    username: "lineandcircle",
    priceStartFrom: 45,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/33397750/original/1bbf676c93aba379a0630fcf0a8fbdbc4cc363ea.png",
    designTypeId: 1,
    designStyleId: 2
  },
  {
    username: "dunjabosanac",
    priceStartFrom: 20,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/99442536/original/dcc6ee7b9ea7c8ed032c4142dfd68adaf6a510a1.jpg",
    designTypeId: 1,
    designStyleId: 2
  },
  {
    username: "iamfrk7",
    priceStartFrom: 20,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/19803067/original/25098aa6a557346ca69792e0d8cbba39be187e09.jpg",
    designTypeId: 1,
    designStyleId: 2
  },
  {
    username: "experts_team0",
    priceStartFrom: 20,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/257815714/original/6e792bef519576491e12e4e59dde4561be9fb7c4.jpg",
    designTypeId: 1,
    designStyleId: 2
  },
  {
    username: "tahasohail491",
    priceStartFrom: 20,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/210187786/original/b92395d26a825479daeb0004dd743748c533f290.jpg",
    designTypeId: 1,
    designStyleId: 2
  },
  {
    username: "aboubakryamoul",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/223114943/original/cc3fe0f831d0a4a272b0a4bee43a994031a405c3.png",
    designTypeId: 1,
    designStyleId: 2
  },
  {
    username: "saadbin08",
    priceStartFrom: 55,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/216910127/original/063154a31b3552e678495e000c667fa8bb9f1d5d.jpg",
    designTypeId: 1,
    designStyleId: 2
  },
  {
    username: "basarts",
    priceStartFrom: 50,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/107170024/original/508eb1648110d1623d05452b91f34b39e6a943e2.jpg",
    designTypeId: 1,
    designStyleId: 2
  },
  {
    username: "doominking",
    priceStartFrom: 5,
    imageUrl: "https://fiverr-res.cloudinary.com/video/upload/t_gig_cards_web/qof8hpgks4xxkjoecock.png",
    designTypeId: 1,
    designStyleId: 2
  },
  {
    username: "logoversum",
    priceStartFrom: 65,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/131179040/original/e1ff118fea3c9a99e26f0d82059cb072ed186f9a.jpg",
    designTypeId: 1,
    designStyleId: 2
  },
  {
    username: "vectordesigns",
    priceStartFrom: 20,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/465055/original/7dbc9c4bd5186cfb386c415b35a248fc0f583508.jpg",
    designTypeId: 1,
    designStyleId: 2
  },
  {
    username: "tomandro",
    priceStartFrom: 40,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/252068933/original/ca855946f6312cbb709ab6468ea9567d46046b69.jpg",
    designTypeId: 1,
    designStyleId: 2
  },
  {
    username: "emonstudio101",
    priceStartFrom: 20,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/273868801/original/83f1c34409e32c0626d621d53c1fe673a68bde7f.jpg",
    designTypeId: 1,
    designStyleId: 2
  },
  {
    username: "krisnantokrisna",
    priceStartFrom: 30,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/122193504/original/ea827ecc30f76fc6ff3d7ab7c562a3b8aa66fff0.png",
    designTypeId: 1,
    designStyleId: 2
  },
  {
    username: "tubaasnari",
    priceStartFrom: 5,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/278211937/original/0db218975c01bc375b6f3030ceb095105c5f97c1.png",
    designTypeId: 1,
    designStyleId: 2
  },
  {
    username: "soufianali",
    priceStartFrom: 5,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/298351190/original/3a3655a288cf02c03b8d42c8a5aee0f75d8156ab.png",
    designTypeId: 1,
    designStyleId: 2
  },
  {
    username: "aiman_designn",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/255948435/original/325af33f9459f20374adaa1c3a2dfdcca4054e1e.jpg",
    designTypeId: 1,
    designStyleId: 2
  },
  {
    username: "achernushkin",
    priceStartFrom: 40,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/248582383/original/a6cf6d959790eaf100859a3db037e91a6300e76e.jpg",
    designTypeId: 1,
    designStyleId: 2
  },
  {
    username: "iqrajaved06",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/258312463/original/a66880f4b3b9ffa987b9b515a8904acb44c51327.jpg",
    designTypeId: 1,
    designStyleId: 2
  },
  {
    username: "logo_designers5",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/231889417/original/70d9f6e0328b51097f10e8e6fa5b9734aac87700.jpg",
    designTypeId: 1,
    designStyleId: 2
  },
  {
    username: "metamorphist666",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/213166053/original/417dc45749abc27ae0a8db7e679d846391b34c13.png",
    designTypeId: 1,
    designStyleId: 2
  },
  {
    username: "monosdesign",
    priceStartFrom: 20,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/108519643/original/1b8f282dea13d565a95484d9cf3283698d8fe174.jpg",
    designTypeId: 1,
    designStyleId: 2
  },
  {
    username: "akh000111",
    priceStartFrom: 15,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/100633290/original/d2e5623413c4650fd54972f6accc5ed33c5d8144.jpg",
    designTypeId: 1,
    designStyleId: 2
  },
  {
    username: "syahbanaadam",
    priceStartFrom: 5,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/224676791/original/4056ca93851e84ed157b57bd19606d57c937061e.jpg",
    designTypeId: 1,
    designStyleId: 2
  },
  {
    username: "slimcrazy",
    priceStartFrom: 20,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/218227285/original/0f26bfabd753ddb74fd90788a727714c2970a4f5.jpg",
    designTypeId: 1,
    designStyleId: 2
  },
  {
    username: "veedii_designer",
    priceStartFrom: 5,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/248203189/original/c14c1f3d58e008d4cff8ffc59ba120cb23a814e9.jpg",
    designTypeId: 1,
    designStyleId: 2
  },
  {
    username: "designofix",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/170827038/original/750af21ad1105af317b148a7e2f20b1a5cc21cb2.jpg",
    designTypeId: 1,
    designStyleId: 2
  },
  {
    username: "japanart83",
    priceStartFrom: 5,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/196180524/original/0bb07fa794c07b4290b030c2593767dd1c805076.jpg",
    designTypeId: 1,
    designStyleId: 2
  },
  {
    username: "haroonkhaan",
    priceStartFrom: 20,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/111711876/original/b9dc5f5f371a82a5b2a823c9c8c2de16da742238.jpg",
    designTypeId: 1,
    designStyleId: 2
  },
  {
    username: "maseiqbal",
    priceStartFrom: 35,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/141847435/original/bde0bba7a04a2001479cf8e072b4bbc1b7e1153c.jpg",
    designTypeId: 1,
    designStyleId: 2
  },
  {
    username: "sevenheavens_",
    priceStartFrom: 50,
    imageUrl: "https://fiverr-res.cloudinary.com/video/upload/so_0.26129,t_gig_cards_web/hhivurmix1hkoljwa3nq.png",
    designTypeId: 1,
    designStyleId: 2
  },
  {
    username: "yadisab",
    priceStartFrom: 75,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/140782398/original/7f1eea45bd0f8711c74215705894ee8e97f52801.jpg",
    designTypeId: 1,
    designStyleId: 2
  },
  {
    username: "artsabd",
    priceStartFrom: 35,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/275758285/original/3d449ffbb611fe870a0fa9757b63dcb3d69ad9ea.png",
    designTypeId: 1,
    designStyleId: 2
  },
  {
    username: "saybrand",
    priceStartFrom: 50,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/129376482/original/8f58c5807b2297b38fdad94adf8596a5b4586959.jpg",
    designTypeId: 1,
    designStyleId: 2
  },
  {
    username: "raw_logos01",
    priceStartFrom: 15,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/209200705/original/1fb8fa5a504e1e9872fd17322779adef3b066e3e.jpg",
    designTypeId: 1,
    designStyleId: 2
  },
  {
    username: "avebriant",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/125973144/original/87cfffd15227382d2ccb572bf49b29f790a44949.jpg",
    designTypeId: 1,
    designStyleId: 2
  },
  {
    username: "juugend",
    priceStartFrom: 45,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/158334701/original/1f543ca4d5cf4474120b09e4c0e78104a6fcc467.png",
    designTypeId: 1,
    designStyleId: 2
  },
  {
    username: "danishehsan824",
    priceStartFrom: 15,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/101492850/original/31ba82e33da7bf1ab3f4112a086bb778a563e856.jpg",
    designTypeId: 1,
    designStyleId: 2
  },
  {
    username: "top_designer12",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/167365525/original/2f3b4dcf97091a37f83170eeef63ce0efc7bdc17.jpg",
    designTypeId: 1,
    designStyleId: 2
  },
  {
    username: "nomer61",
    priceStartFrom: 5,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/254711419/original/9d55104f8ac0ebceeae3ce603a375b88882fb3cb.jpg",
    designTypeId: 1,
    designStyleId: 2
  },
  {
    username: "hungrytukik",
    priceStartFrom: 5,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/160404728/original/bb11532f84e7fedb6e4896ea038796a8e88dc9f9.jpeg",
    designTypeId: 1,
    designStyleId: 2
  },
  {
    username: "lowobiru",
    priceStartFrom: 120,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/112247681/original/d22db2994dd520ee5c911da3d5f619861949b99f.jpg",
    designTypeId: 1,
    designStyleId: 2
  },
  {
    username: "angiemil",
    priceStartFrom: 50,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/250130393/original/41ad67c5db953d2b6e7c3a4d8167b913a0af92ee.png",
    designTypeId: 1,
    designStyleId: 2
  },
  {
    username: "shehreyar_ali",
    priceStartFrom: 20,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/295370502/original/8f4d29c3c703f67bd7cc4f697b6c39aaa5d96bfb.jpg",
    designTypeId: 1,
    designStyleId: 2
  },
  {
    username: "rabii_design",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/251065153/original/6e7b6fa9aeff0a2688aa0762224ddc305d9f945c.jpg",
    designTypeId: 1,
    designStyleId: 2
  },
  {
    username: "yasir_raja",
    priceStartFrom: 20,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/113705060/original/6990a957b28ddb15e7fded0193eb0990b29e087f.jpg",
    designTypeId: 1,
    designStyleId: 2
  },
  {
    username: "dibujantis",
    priceStartFrom: 100,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/39650155/original/fc1e711ae02495f78a7ba00444a0d9bdc290eb44.png",
    designTypeId: 1,
    designStyleId: 2
  },
  {
    username: "nidagraphics3",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/255444994/original/2b77f62c5913ad885105665234b989a6c13b66ce.jpg",
    designTypeId: 1,
    designStyleId: 2
  },
  {
    username: "ayyarametallogo",
    priceStartFrom: 25,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/140776286/original/5ea02a9b4016acea3b7cff899103e8825c46b965.jpg",
    designTypeId: 1,
    designStyleId: 2
  },
  {
    username: "artsygraphy",
    priceStartFrom: 45,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/169116590/original/b6c606d211348366d3f49a8d2ec6c4a422775e5e.png",
    designTypeId: 1,
    designStyleId: 2
  },
  {
    username: "holo_dreamz",
    priceStartFrom: 35,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/230279835/original/911c4b2b8411dd6ad3153f345c0695cd318ae5db.png",
    designTypeId: 1,
    designStyleId: 2
  },
  {
    username: "nidagraphics3",
    priceStartFrom: 5,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/255715265/original/50caca26fb55b8966d92e8432365786d8649e823.jpg",
    designTypeId: 1,
    designStyleId: 2
  },
  {
    username: "marii_creation",
    priceStartFrom: 25,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/243488210/original/fd973ee8176ef509b2c0c23805f67a31af4d3c44.jpeg",
    designTypeId: 1,
    designStyleId: 2
  },
  {
    username: "blackupheaval",
    priceStartFrom: 15,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs2/187881293/original/415657ecfc66766b3ace2b1074e26d4ab409b79e.jpg",
    designTypeId: 1,
    designStyleId: 2
  },
  {
    username: "nidagraphics3",
    priceStartFrom: 5,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/255242664/original/d994a72ad3085f8079d03040706a30a6bb542039.jpg",
    designTypeId: 1,
    designStyleId: 2
  },
  {
    username: "sasniandika",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/133919740/original/a22754dcd61cc0814d349ea5afe6cb5ae2f0fb89.jpeg",
    designTypeId: 1,
    designStyleId: 2
  },
  {
    username: "ifanfarid",
    priceStartFrom: 15,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/199904362/original/663962173f7d141e6b51ac1a10c872cac6e8bffb.jpeg",
    designTypeId: 1,
    designStyleId: 2
  },
  {
    username: "jitendayama",
    priceStartFrom: 20,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/286842763/original/0562c4fe65fdc402838dfaab62f3a69013c5d43c.jpg",
    designTypeId: 1,
    designStyleId: 2
  },
  {
    username: "logodeck",
    priceStartFrom: 35,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/207755743/original/2ac2f1ee885f0b75ae32e29aa211396f4d0bf3bb.jpg",
    designTypeId: 1,
    designStyleId: 2
  },
  {
    username: "aqsalogoz",
    priceStartFrom: 45,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/131861342/original/9b9f4fcaf02e4014f0b4f42fe83ab7f931de3de4.png",
    designTypeId: 1,
    designStyleId: 2
  },
  {
    username: "achernushkin",
    priceStartFrom: 50,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/296406930/original/c4c97d9968ccb259aba5d0d579f74674ac12bcf8.jpg",
    designTypeId: 1,
    designStyleId: 2
  },
  {
    username: "aesthetics32",
    priceStartFrom: 25,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/226443823/original/b22db3f387ba10caaf0c0e33b35ef39d0d058b83.jpg",
    designTypeId: 1,
    designStyleId: 2
  },
  {
    username: "doodlinwithalex",
    priceStartFrom: 35,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/176141618/original/3c5ec697603b907eae2a4e2d3292bca9cd3caf47.png",
    designTypeId: 1,
    designStyleId: 2
  },
  {
    username: "neon_cacti",
    priceStartFrom: 5,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/119632694/original/e116c2d983515ba86d31e2647bb4136175267387.png",
    designTypeId: 1,
    designStyleId: 2
  },
  {
    username: "roseidink",
    priceStartFrom: 15,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/250796911/original/05bf55f5f03e3dda080937ade7473523d9e72c70.png",
    designTypeId: 1,
    designStyleId: 2
  },
  {
    username: "sutrisnayana",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/252613187/original/bce13a5b4f69eaa78c9b5cccd72ca816b6acc14c.jpg",
    designTypeId: 1,
    designStyleId: 2
  },
  {
    username: "shatteredsicks",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/282828641/original/8375b61ebe325a83dd79f4f246f42560244e426a.jpg",
    designTypeId: 1,
    designStyleId: 2
  },
  {
    username: "born_somthing",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/179666787/original/7de7c310bbf0519ba1ab2698a339986d1e52257d.jpg",
    designTypeId: 1,
    designStyleId: 2
  },
  {
    username: "xgarmothx",
    priceStartFrom: 30,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/168148316/original/1695504076483bde8d91ab25cc900e42428529a9.png",
    designTypeId: 1,
    designStyleId: 2
  },
  {
    username: "supercalifra923",
    priceStartFrom: 15,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/172319004/original/ebe75f33f76ceeadd717d8ffeae5d694c469f83f.png",
    designTypeId: 1,
    designStyleId: 2
  },
  {
    username: "wendzip",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/220084888/original/4e969235aecf61e105618aae2d78f9f8e174e505.png",
    designTypeId: 1,
    designStyleId: 2
  },
  {
    username: "saimfaras235",
    priceStartFrom: 25,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/176961216/original/507a54283c4fae7fd07055f9dfac863440bbb6c8.jpg",
    designTypeId: 1,
    designStyleId: 2
  },
  {
    username: "drinidesign",
    priceStartFrom: 95,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/13540674/original/e10c02294830f938a79de28292e2397261a21a6c.png",
    designTypeId: 1,
    designStyleId: 3
  },
  {
    username: "superdaystudio",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/122972526/original/4b955044dbc822c24d42ff59f43aa837ccd81589.jpg",
    designTypeId: 1,
    designStyleId: 3
  },
  {
    username: "manifestolab",
    priceStartFrom: 15,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/274633777/original/cb1efdbc68aa2b034f2f0b80ca9eabcf160b1470.jpg",
    designTypeId: 1,
    designStyleId: 3
  },
  {
    username: "brucedesign1989",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/9377852/original/7fa1ab489ad31ef89c2f5c7eea6870cadd4fe27d.jpg",
    designTypeId: 1,
    designStyleId: 3
  },
  {
    username: "idrees_desg",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/video/upload/t_gig_cards_web/rvifkydfr91e1qg9tm1v.png",
    designTypeId: 1,
    designStyleId: 3
  },
  {
    username: "candrabintoro2",
    priceStartFrom: 35,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/131276004/original/fcb39adfeb49b0709a53b884c63bb47a62da25e2.jpg",
    designTypeId: 1,
    designStyleId: 3
  },
  {
    username: "crea8ive_studi0",
    priceStartFrom: 25,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/186698008/original/b44b40824d774507bd4c36266bb4fefec5bce7f2.jpg",
    designTypeId: 1,
    designStyleId: 3
  },
  {
    username: "bilaldesigner",
    priceStartFrom: 20,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/8020116/original/6ecd0c33db92111176205c6e877487710a84dc01.jpg",
    designTypeId: 1,
    designStyleId: 3
  },
  {
    username: "g_designer1",
    priceStartFrom: 35,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/25860987/original/8d36713278f323de3b6dfc14a9bf691fd30bef2c.jpg",
    designTypeId: 1,
    designStyleId: 3
  },
  {
    username: "logomore",
    priceStartFrom: 25,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/122708969/original/aef11d2b4cd6c05610d8e017d475ab391ed646aa.jpg",
    designTypeId: 1,
    designStyleId: 3
  },
  {
    username: "sevenheavens_",
    priceStartFrom: 55,
    imageUrl: "https://fiverr-res.cloudinary.com/video/upload/so_0.0,t_gig_cards_web/aqzk0roggqifv1yoeov3.png",
    designTypeId: 1,
    designStyleId: 3
  },
  {
    username: "borydesign",
    priceStartFrom: 45,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/2687733/original/c5d51f42c35abd4a3e0c9e510f43aacb11d4fad2.jpg",
    designTypeId: 1,
    designStyleId: 3
  },
  {
    username: "vixuaholic",
    priceStartFrom: 20,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/120929547/original/13e59f61d543635d6329ee2c170169b60e822dd5.jpg",
    designTypeId: 1,
    designStyleId: 3
  },
  {
    username: "vintage_valley",
    priceStartFrom: 35,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/108838626/original/d76e134fb6e77936fc556f760ba13f5ecc22e834.png",
    designTypeId: 1,
    designStyleId: 3
  },
  {
    username: "pintalsari",
    priceStartFrom: 55,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/150300740/original/8058ef07064635e9be7e7477417ffcbc76633587.jpg",
    designTypeId: 1,
    designStyleId: 3
  },
  {
    username: "lumihano",
    priceStartFrom: 45,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/224906883/original/05d22bf1e4b3c8fad9eaf19f2f695daefaebf13c.jpg",
    designTypeId: 1,
    designStyleId: 3
  },
  {
    username: "tayyabadesigns4",
    priceStartFrom: 20,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/185465856/original/f13dd65d34ab02c3d7b4b5c121788911d7e2eea8.jpg",
    designTypeId: 1,
    designStyleId: 3
  },
  {
    username: "smork",
    priceStartFrom: 100,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/3366496/original/719d78b3389446227d819fe93a716b123c10f826.jpg",
    designTypeId: 1,
    designStyleId: 3
  },
  {
    username: "mayeda_studio",
    priceStartFrom: 50,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/207860380/original/90dc83f69ab5eafc54877bcfd631c658b66de1bb.jpg",
    designTypeId: 1,
    designStyleId: 3
  },
  {
    username: "adi_graphics196",
    priceStartFrom: 30,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/169432955/original/f5b7ac84d261db0b2fca0aa3489c70412af8e7b0.jpg",
    designTypeId: 1,
    designStyleId: 3
  },
  {
    username: "harry44taylor",
    priceStartFrom: 140,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/157885103/original/eb7f7c752f7f4d7f49e69f014b36c3a084be6513.jpg",
    designTypeId: 1,
    designStyleId: 3
  },
  {
    username: "mrtranscendence",
    priceStartFrom: 45,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/263135400/original/51182cd8ebb4a27478542d8b7f701994e2413444.jpg",
    designTypeId: 1,
    designStyleId: 3
  },
  {
    username: "design_desk",
    priceStartFrom: 20,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/3520825/original/04c360bc92c5f2f2f8b1a11ec3ed405a03b3d998.jpg",
    designTypeId: 1,
    designStyleId: 3
  },
  {
    username: "sony_gfx",
    priceStartFrom: 50,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/217657064/original/f77bf1569763d8b6edc0d91050e3b9a22d32828d.jpg",
    designTypeId: 1,
    designStyleId: 3
  },
  {
    username: "andhynugrh",
    priceStartFrom: 45,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/276423223/original/8bff61d9b4cbfd20e451d30fce540b3829041bee.jpg",
    designTypeId: 1,
    designStyleId: 3
  },
  {
    username: "tungraphic",
    priceStartFrom: 50,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/268046868/original/8efcf54d52e2f930eec1b07a768b3b387bd56952.jpg",
    designTypeId: 1,
    designStyleId: 3
  },
  {
    username: "arianit_komneni",
    priceStartFrom: 50,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/13686069/original/d006dda8c9389ac0f0a4b32b6602344a46cb007c.jpg",
    designTypeId: 1,
    designStyleId: 3
  },
  {
    username: "mikey_de",
    priceStartFrom: 5,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/237474743/original/c156f9792e41ad0df6cb3f2dd2aff18cd34c5391.jpg",
    designTypeId: 1,
    designStyleId: 3
  },
  {
    username: "masudparvez554",
    priceStartFrom: 35,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/106187992/original/12afe768e2ba9af5f211d0358dff19f6e419d38d.jpg",
    designTypeId: 1,
    designStyleId: 3
  },
  {
    username: "nick_std",
    priceStartFrom: 60,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/139836100/original/ee35718464ce9ae0be7fc102c2f6a520787c970c.jpg",
    designTypeId: 1,
    designStyleId: 3
  },
  {
    username: "wigi_wigel",
    priceStartFrom: 20,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/186165185/original/8fb9fdaca07d4cdc2e437fc08f30f9131d87d53c.jpg",
    designTypeId: 1,
    designStyleId: 3
  },
  {
    username: "artdictive",
    priceStartFrom: 30,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/133177651/original/991bcf10f76a5a139745302972162e8deb8ea000.jpg",
    designTypeId: 1,
    designStyleId: 3
  },
  {
    username: "epicdesigns07",
    priceStartFrom: 20,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/191557036/original/7d4113e0996ab169a07e73b41b32db83b46d2b1f.png",
    designTypeId: 1,
    designStyleId: 3
  },
  {
    username: "franzduro",
    priceStartFrom: 40,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/129973102/original/b150e6a575a43ebaff12c2bebf62dcde06ff5bec.jpg",
    designTypeId: 1,
    designStyleId: 3
  },
  {
    username: "s4rt4_",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/200812602/original/d68095dfa50848e6d6fec68966b5df6cab150176.jpg",
    designTypeId: 1,
    designStyleId: 3
  },
  {
    username: "bilaldesigner",
    priceStartFrom: 20,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/53967449/original/8eb393a22e24e3a6d4ac5566c6b53bda77bb0404.jpg",
    designTypeId: 1,
    designStyleId: 3
  },
  {
    username: "razaphics",
    priceStartFrom: 15,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/219554078/original/eb36119556bda58bdf948a8590187e7581ae9696.jpg",
    designTypeId: 1,
    designStyleId: 3
  },
  {
    username: "dreamzdesignerz",
    priceStartFrom: 45,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/170571102/original/230259fa9daf955e501e2b65a47772bb4b58f548.jpg",
    designTypeId: 1,
    designStyleId: 3
  },
  {
    username: "tomandro",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/102165833/original/f370adb9845975756e7f7051501090ca215b7d79.jpg",
    designTypeId: 1,
    designStyleId: 3
  },
  {
    username: "raihansuman209",
    priceStartFrom: 45,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/88309536/original/3e663d66ce5f031095cec3084024a97206ac3daf.jpg",
    designTypeId: 1,
    designStyleId: 3
  },
  {
    username: "franzduro",
    priceStartFrom: 40,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/130017091/original/5ad45b113327f7833b2458ee958ae7c1e7aa68f0.jpg",
    designTypeId: 1,
    designStyleId: 3
  },
  {
    username: "crazy_design4",
    priceStartFrom: 35,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/144936229/original/3dec1a372ff06382a10cbd0b621db0b3e0b955be.jpg",
    designTypeId: 1,
    designStyleId: 3
  },
  {
    username: "vintagewizard",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/199482112/original/b07b5a816c4da8f353da3eef158304d594f12319.jpg",
    designTypeId: 1,
    designStyleId: 3
  },
  {
    username: "dezkon",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/127311624/original/fd5f5017f8718fb26906bfb941d2b60c89a8e14b.jpg",
    designTypeId: 1,
    designStyleId: 3
  },
  {
    username: "multishop283",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/202466784/original/9fa1033e7669876bca3196bb3be4d5f84b305f00.jpg",
    designTypeId: 1,
    designStyleId: 3
  },
  {
    username: "sandrorkjunior",
    priceStartFrom: 20,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/149552451/original/9e733aac1e7b24c395b039b2338d14bdcea4c4a2.jpg",
    designTypeId: 1,
    designStyleId: 3
  },
  {
    username: "sandrorkjunior",
    priceStartFrom: 20,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/149552451/original/9e733aac1e7b24c395b039b2338d14bdcea4c4a2.jpg",
    designTypeId: 1,
    designStyleId: 3
  },
  {
    username: "endmor",
    priceStartFrom: 25,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/290191354/original/32042a2e1e591ab2de7f1c2a1ee1995837621e96.jpg",
    designTypeId: 1,
    designStyleId: 3
  },
  {
    username: "rituakther252",
    priceStartFrom: 15,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/258644929/original/8ddf2d2c5fb9fd3d3f25f5e31bb1f6d95019b091.jpg",
    designTypeId: 1,
    designStyleId: 3
  },
  {
    username: "emmastnlydesign",
    priceStartFrom: 95,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/217760759/original/fb1adb94ffffefd4fd1e87327ef96e0f81cafb5f.png",
    designTypeId: 1,
    designStyleId: 3
  },
  {
    username: "vintagedesign90",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/36290700/original/65326c146c3bfb9029587a08ccde2de6e948cdff.jpg",
    designTypeId: 1,
    designStyleId: 3
  },
  {
    username: "dezkon",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/167130390/original/49573ba843d8c04004e19e9782a31f6aec2d1f6d.jpg",
    designTypeId: 1,
    designStyleId: 3
  },
  {
    username: "rolanputut",
    priceStartFrom: 100,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/216659344/original/88736f98d4ea3a2483e16711af18437fc5f3ae43.jpg",
    designTypeId: 1,
    designStyleId: 3
  },
  {
    username: "marssounds",
    priceStartFrom: 25,
    imageUrl: "https://fiverr-res.cloudinary.com/video/upload/so_0.419069,t_gig_cards_web/pyyphzzev4rcco7ambtc.png",
    designTypeId: 1,
    designStyleId: 3
  },
  {
    username: "gx_arts",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/190311796/original/d94a69d7fd7dcacfd3a0a95a5bd3e7b677360d14.jpg",
    designTypeId: 1,
    designStyleId: 3
  },
  {
    username: "desiger786",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/44261469/original/c4bcb817cd31a6db8af959e0369f04a875896b2a.jpg",
    designTypeId: 1,
    designStyleId: 3
  },
  {
    username: "samumair",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/103370125/original/15fac5d733206c07ab8a8daea80f081b51030917.jpg",
    designTypeId: 1,
    designStyleId: 3
  },
  {
    username: "roksanabegum",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/186552286/original/28674dc6ea278c1458961fdf8ead5318114945bd.jpg",
    designTypeId: 1,
    designStyleId: 3
  },
  {
    username: "maespro",
    priceStartFrom: 35,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/239453284/original/66998a37d5aaa94a84cbc2d882bcab156aad3ac3.jpg",
    designTypeId: 1,
    designStyleId: 3
  },
  {
    username: "saida69_design",
    priceStartFrom: 20,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/201219349/original/a1c3e91691e92843b5d8818426a371618d846f1e.jpg",
    designTypeId: 1,
    designStyleId: 3
  },
  {
    username: "rigerspopa",
    priceStartFrom: 85,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/3801994/original/e8c8fd7fe13dfc679ac06ff4c8c069bb2d4b6652.jpg",
    designTypeId: 1,
    designStyleId: 3
  },
  {
    username: "agimdesign",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/191568725/original/a3170da6712e9bede5d4c93761cd5d296a411606.jpg",
    designTypeId: 1,
    designStyleId: 3
  },
  {
    username: "graphixeye",
    priceStartFrom: 5,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/85814856/original/38b97d6b4f6c4e9d660bdb0d66451dc80d9782ef.jpg",
    designTypeId: 1,
    designStyleId: 3
  },
  {
    username: "multishop283",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/201672132/original/6fe42c7a11fcc1ea753dc7000703676d45cfdd57.jpg",
    designTypeId: 1,
    designStyleId: 3
  },
  {
    username: "saleemnoor25",
    priceStartFrom: 5,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/95110506/original/a19d829c235658462d5660d80e27c718b16a8f88.jpg",
    designTypeId: 1,
    designStyleId: 3
  },
  {
    username: "d4gstudio",
    priceStartFrom: 20,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/156382847/original/75b9ae70712e5f2d43173b433e3128b4e4431617.jpg",
    designTypeId: 1,
    designStyleId: 3
  },
  {
    username: "shoaib_arts",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/169131695/original/a87771d54b7135e55d4e1cd3b9dc03dc674c7801.jpg",
    designTypeId: 1,
    designStyleId: 3
  },
  {
    username: "belen_serrano",
    priceStartFrom: 50,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/205007926/original/b57807dc9ae2db522a8970aafcce87930c38eff0.jpg",
    designTypeId: 1,
    designStyleId: 3
  },
  {
    username: "narindrarb",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/video/upload/so_27.125707,t_gig_cards_web/ese9p3lciyknly8lq7aq.png",
    designTypeId: 1,
    designStyleId: 3
  },
  {
    username: "rajamubeenzafar",
    priceStartFrom: 25,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/203580910/original/a1389816a4ad487be094af8d96eb79541605e0ef.jpg",
    designTypeId: 1,
    designStyleId: 3
  },
  {
    username: "psyponti0007",
    priceStartFrom: 20,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/138348285/original/5cff5a041cfccfef166a271d05edacc021382319.jpg",
    designTypeId: 1,
    designStyleId: 3
  },
  {
    username: "awaisgraphics1",
    priceStartFrom: 5,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/87526966/original/70c712db7401162827d4d7bd50945c3994469361.jpg",
    designTypeId: 1,
    designStyleId: 3
  },
  {
    username: "cc_design",
    priceStartFrom: 15,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/118569795/original/67fa390018d62991fd4e2e51652fb9d3f66b3585.jpg",
    designTypeId: 1,
    designStyleId: 3
  },
  {
    username: "yogirmwn",
    priceStartFrom: 60,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/159966968/original/8c51634d30cfcfc28d7dab88f33efc4c3ff6152d.jpg",
    designTypeId: 1,
    designStyleId: 3
  },
  {
    username: "uuniqe_designer",
    priceStartFrom: 15,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/263765851/original/e97770d24dda79aa4766b6294052e9cb3bceabbd.jpg",
    designTypeId: 1,
    designStyleId: 3
  },
  {
    username: "jahanzaibnasir",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/99882653/original/9c2fd9e84e61bfa603f7f85cc932055d0255b66a.jpg",
    designTypeId: 1,
    designStyleId: 3
  },
  {
    username: "aesnman",
    priceStartFrom: 15,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/252566972/original/894dce7f52f7a801f48c8fcfab062c889cb20ee5.jpg",
    designTypeId: 1,
    designStyleId: 3
  },
  {
    username: "niloyb2b",
    priceStartFrom: 15,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/256458801/original/f9b65f4665bda41b5383afc201e4e65357e4fa26.jpg",
    designTypeId: 1,
    designStyleId: 3
  },
  {
    username: "designersanjoy",
    priceStartFrom: 15,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/276078276/original/07dc50ef036e8c63d5df5c1325e06a1b4e322edf.jpg",
    designTypeId: 1,
    designStyleId: 3
  },
  {
    username: "john848",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/61457659/original/d72cb1a0f0798dfa556541fef88bf2ad6ee41edb.jpg",
    designTypeId: 1,
    designStyleId: 3
  },
  {
    username: "kiranashrafgfx",
    priceStartFrom: 15,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/152513945/original/694faa20a5130f5081e8fac81c2f82e3472755ca.jpg",
    designTypeId: 1,
    designStyleId: 3
  },
  {
    username: "sifatali537",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/199390548/original/9098582f941c956f049ab4517e177c8bb8fba230.jpg",
    designTypeId: 1,
    designStyleId: 3
  },
  {
    username: "mursalin78",
    priceStartFrom: 30,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/115826584/original/9c766a1c4e0fd29459a672c82ad1e85f575c16f8.jpg",
    designTypeId: 1,
    designStyleId: 3
  },
  {
    username: "rashed150",
    priceStartFrom: 20,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/109861028/original/661aa03f7a739639e6b62feef430da4c6e5b203b.jpg",
    designTypeId: 1,
    designStyleId: 3
  },
  {
    username: "staynormal",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/281286408/original/4571cb56d1eb788b34efffa80962b9c3360e0c71.jpg",
    designTypeId: 1,
    designStyleId: 3
  },
  {
    username: "danielsadana",
    priceStartFrom: 15,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/243944651/original/b0e8892c083390c76965f8e730c4f05dbdd3def3.jpg",
    designTypeId: 1,
    designStyleId: 3
  },
  {
    username: "mariam_designs",
    priceStartFrom: 15,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/171301637/original/3053ea10e20d1e5bda5891741287ee3a5fb1b7d1.jpg",
    designTypeId: 1,
    designStyleId: 3
  },
  {
    username: "midulgihad",
    priceStartFrom: 15,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/179090595/original/5db350282ebfc24f761384ab5b1a1963e1d03bdb.jpg",
    designTypeId: 1,
    designStyleId: 3
  },
  {
    username: "nadia_azhar",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/292188122/original/18ee3c1f14a72adc623285dfc69e5472bd4b7fb4.jpg",
    designTypeId: 1,
    designStyleId: 3
  },
  {
    username: "graveyardshiftx",
    priceStartFrom: 60,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/110667402/original/e318094be0ad6a6dc038e7bb9274c9df7a151eb5.jpg",
    designTypeId: 1,
    designStyleId: 3
  },
  {
    username: "nomee_graphics",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/205119684/original/fcb0a40cc9bdfb00ec147d263eb5801bddfa222a.jpg",
    designTypeId: 1,
    designStyleId: 3
  },
  {
    username: "bizness_logos",
    priceStartFrom: 5,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/165660542/original/6da477f40b6fa1e056dbcebd6b7987bf95993f9d.png",
    designTypeId: 1,
    designStyleId: 3
  },
  {
    username: "happygraph",
    priceStartFrom: 125,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/24989987/original/9a2852955a574b5e2a3aa1ab8b4b830cdba9a058.png",
    designTypeId: 1,
    designStyleId: 3
  },
  {
    username: "franzduro",
    priceStartFrom: 40,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/140035200/original/3206bb3c132aaba45097b52af7a6bc2d53729326.jpg",
    designTypeId: 1,
    designStyleId: 3
  },
  {
    username: "blos_graffiti",
    priceStartFrom: 20,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/178326223/original/b859b48766f89029af2ce4d925842dcf6c226dfb.jpg",
    designTypeId: 1,
    designStyleId: 3
  },
  {
    username: "feargodstudio",
    priceStartFrom: 70,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/166039992/original/538a887e42f57aee65db97b95e6a86810deaa8b3.jpg",
    designTypeId: 1,
    designStyleId: 3
  },
  {
    username: "vintage_valley",
    priceStartFrom: 55,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/184111833/original/62c87e4e8e971ef3cb35f90b949086100cf04ca0.jpg",
    designTypeId: 1,
    designStyleId: 3
  },
  {
    username: "farazch69",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/156436861/original/6e15040cd40ebed08625b0105beedd2a9d3d4937.jpg",
    designTypeId: 1,
    designStyleId: 3
  },
  {
    username: "gfx_world8",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/300431368/original/4498663cf4fad477ec9f0570c16869d447bc9edf.jpg",
    designTypeId: 1,
    designStyleId: 3
  },
  {
    username: "mamun629",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/234670412/original/d79ac78299e681f07b944854bdf91ecb63a2324e.jpg",
    designTypeId: 1,
    designStyleId: 3
  },
  {
    username: "rasiorise",
    priceStartFrom: 75,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/129287172/original/ea39143f90268f98304095f8cb30adb8bccdd79a.jpg",
    designTypeId: 1,
    designStyleId: 3
  },
  {
    username: "logo_splash",
    priceStartFrom: 25,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/223222349/original/bf39ccf44b7d7e203678af8b5541aba0ebc6eb94.jpg",
    designTypeId: 1,
    designStyleId: 3
  },
  {
    username: "wendzip",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/147701300/original/c4dcafcc54aeea04ddbe7e2c326711c96c762c1d.png",
    designTypeId: 1,
    designStyleId: 3
  },
  {
    username: "eartdesign",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/140106163/original/9d950f11ff8475b6a5aa6d8eb63c0b0b64affe82.jpg",
    designTypeId: 1,
    designStyleId: 3
  },
  {
    username: "monosdesign",
    priceStartFrom: 25,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/102800630/original/6ba8fbd296a95b23cbab27d8fe82177b82e92a6e.jpg",
    designTypeId: 1,
    designStyleId: 3
  },
  {
    username: "ushadesign",
    priceStartFrom: 20,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/124150252/original/02e62b81105160c3ae97a4df77b22a5d0f21efd8.jpg",
    designTypeId: 1,
    designStyleId: 3
  },
  {
    username: "branddesigner15",
    priceStartFrom: 30,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/180288130/original/e9e4e642582626a12c94123d64825cdd8c706b55.jpg",
    designTypeId: 1,
    designStyleId: 3
  },
  {
    username: "mamun629",
    priceStartFrom: 20,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/259351829/original/1265beaa093af3469b30ac28f20b4d383b83eb47.jpg",
    designTypeId: 1,
    designStyleId: 3
  },
  {
    username: "raiyan567",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/198110175/original/47020c166c4750206bd0cd3804074159a6ea7dfa.jpg",
    designTypeId: 1,
    designStyleId: 3
  },
  {
    username: "lauraameyer",
    priceStartFrom: 55,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/271182672/original/5892761184b21b9948e9340db075f37d07ae56d4.jpg",
    designTypeId: 1,
    designStyleId: 3
  },
  {
    username: "vect_studio",
    priceStartFrom: 60,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/197226720/original/d5892a1d5a9e162e2da5c83a5c731efa82854d57.jpg",
    designTypeId: 1,
    designStyleId: 3
  },
  {
    username: "rhsouravx",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/184212309/original/e36a642eae6cd539830719aafc862b2ed0cb18e5.jpg",
    designTypeId: 1,
    designStyleId: 3
  },
  {
    username: "we_solvers",
    priceStartFrom: 20,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/266774731/original/d8da6eaf0038f3fdb6ea5f010bef2fd570ce2b20.jpg",
    designTypeId: 1,
    designStyleId: 3
  },
  {
    username: "mamun629",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/198911676/original/836e066563fd31c80e60fc7bed8601f9ad04705b.jpg",
    designTypeId: 1,
    designStyleId: 3
  },
  {
    username: "buuhoo_artist",
    priceStartFrom: 15,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/143475228/original/9b8a68339f9b0c48d5077c5ee12eaaa65c206b2d.jpg",
    designTypeId: 1,
    designStyleId: 3
  },
  {
    username: "logoflow",
    priceStartFrom: 25,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/101866003/original/b5df273ae15844b9785aea4c543d6361a0396d8e.jpg",
    designTypeId: 1,
    designStyleId: 3
  },
  {
    username: "franzduro",
    priceStartFrom: 40,
    imageUrl: "https://fiverr-res.cloudinary.com/video/upload/so_13.117731,t_gig_cards_web/rjd2vdemc4ogcempcyqs.png",
    designTypeId: 1,
    designStyleId: 3
  },
  {
    username: "unrealbird",
    priceStartFrom: 20,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/148887904/original/a9b8229fad9a0524f96fdd790e2853db4799883a.jpg",
    designTypeId: 1,
    designStyleId: 3
  },
  {
    username: "karmasanchita",
    priceStartFrom: 30,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/123465037/original/a00234a3ad3cec6f5334a10fea9cf36bdaa85c3b.jpg",
    designTypeId: 1,
    designStyleId: 3
  },
  {
    username: "gdesign_point",
    priceStartFrom: 5,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/207658176/original/dd14b6e7eda983dea4ff8ae57157a5a545d6eb43.jpg",
    designTypeId: 1,
    designStyleId: 3
  },
  {
    username: "ponypunx",
    priceStartFrom: 35,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/176540318/original/19b5c705aea0e70aff399bd7fe015cd2c19a1e3b.png",
    designTypeId: 1,
    designStyleId: 3
  },
  {
    username: "andinovadhitya",
    priceStartFrom: 15,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/194687502/original/87f9c1c3602b0f97c50afbb50cf5fb8f0bf67dd6.jpg",
    designTypeId: 1,
    designStyleId: 3
  },
  {
    username: "mariam_designs",
    priceStartFrom: 15,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/197749899/original/667ffef5ef76f4c6929edb33f636f2fa15397719.jpg",
    designTypeId: 1,
    designStyleId: 3
  },
  {
    username: "kgm1988",
    priceStartFrom: 20,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs2/194223858/original/6b2df664d67270caebd3f5bd5791c1677540fa75.jpg",
    designTypeId: 1,
    designStyleId: 3
  },
  {
    username: "saraahh14",
    priceStartFrom: 30,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/152818784/original/90dd4891a1d726f96be2fd57016f00d4c67a3aca.jpg",
    designTypeId: 1,
    designStyleId: 3
  },
  {
    username: "salarzai44",
    priceStartFrom: 15,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/225052374/original/371cd31a55055cd801585017f72641dc6131d5e9.jpg",
    designTypeId: 1,
    designStyleId: 3
  },
  {
    username: "johnelements",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/124515431/original/b477ec2ce6c59f36ec9f7a536caaae1b5f2413eb.jpg",
    designTypeId: 1,
    designStyleId: 3
  },
  {
    username: "neccholis",
    priceStartFrom: 25,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/167359735/original/cae36642d53c17f927c1298a60d8ac755c89e366.jpg",
    designTypeId: 1,
    designStyleId: 3
  },
  {
    username: "shaf_gfx",
    priceStartFrom: 20,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/102059513/original/4566f4353e6f3784f74e36635960d7fbcb992c8d.jpg",
    designTypeId: 1,
    designStyleId: 3
  },
  {
    username: "hifriday",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/224004362/original/a510af58534205ccb5174e20e1f41d39f91dbdbd.jpg",
    designTypeId: 1,
    designStyleId: 3
  },
  {
    username: "salarzai44",
    priceStartFrom: 15,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/227617440/original/e25e0aae20bfabe008c2cb39654a426b10177547.jpg",
    designTypeId: 1,
    designStyleId: 3
  },
  {
    username: "iqrajaved06",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/191047565/original/387d7df0820c538f75755ed294f9067c9fe3b09d.jpg",
    designTypeId: 1,
    designStyleId: 3
  },
  {
    username: "lux_design",
    priceStartFrom: 120,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/111173923/original/6713d2a3707a94c3234c422c80a31ecbda93325a.jpg",
    designTypeId: 1,
    designStyleId: 3
  },
  {
    username: "logomoko",
    priceStartFrom: 30,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/2805703/original/ab5d8fed36caa339a897cc107dd294531ef811c4.png",
    designTypeId: 1,
    designStyleId: 3
  },
  {
    username: "omorfarukcd",
    priceStartFrom: 15,
    imageUrl: "https://fiverr-res.cloudinary.com/video/upload/so_11.314912,t_gig_cards_web/yolartwezznb5swkwiwh.png",
    designTypeId: 1,
    designStyleId: 3
  },
  {
    username: "gilangfram4",
    priceStartFrom: 15,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/298085512/original/4aaa22583985b279a140032e204a1b802eb81d5d.png",
    designTypeId: 1,
    designStyleId: 3
  },
  {
    username: "bak_brandexpert",
    priceStartFrom: 15,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/285254109/original/10f7c2ea8c303615281cab29b72902c03772c578.jpg",
    designTypeId: 1,
    designStyleId: 3
  },
  {
    username: "stars_branding",
    priceStartFrom: 15,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/189442175/original/760cd3fc0fa5a071fc90f003e3ef5cce603418db.jpg",
    designTypeId: 1,
    designStyleId: 3
  },
  {
    username: "rabbi_studio",
    priceStartFrom: 30,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/204192170/original/e5a5d7f3d855b3f9fa47692e0c83d899b84f7027.jpg",
    designTypeId: 1,
    designStyleId: 3
  },
  {
    username: "kgm1988",
    priceStartFrom: 20,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/249824119/original/79f3b61154160ad0131df7f4c9a427de0bbb3431.jpg",
    designTypeId: 1,
    designStyleId: 3
  },
  {
    username: "azbaaftab",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/270413283/original/e2c035011323cac9c08a8aad04b7f79757395b94.jpg",
    designTypeId: 1,
    designStyleId: 3
  },
  {
    username: "prachiroybest",
    priceStartFrom: 30,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/98379278/original/bb6c9442816232f4839bfa3e0976cab6b2a1e878.jpg",
    designTypeId: 1,
    designStyleId: 4
  },
  {
    username: "logoforte",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/250794468/original/9ee737b304214c5ded8af6ee217ec678c777aaf9.jpg",
    designTypeId: 1,
    designStyleId: 4
  },
  {
    username: "zebragraphix92",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/290424913/original/b1adb8b1132a8991f97a5a2dad2c234ed5365aed.jpg",
    designTypeId: 1,
    designStyleId: 4
  },
  {
    username: "sirjeel_zahid",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/299769328/original/ba96d2ee1011f0474b0d2eaf10316b6e2692825d.jpg",
    designTypeId: 1,
    designStyleId: 4
  },
  {
    username: "saadoalex",
    priceStartFrom: 15,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/229542592/original/2dff9837c4a3daf4983db72803da9abb44c95780.jpg",
    designTypeId: 1,
    designStyleId: 4
  },
  {
    username: "kingdesigner3",
    priceStartFrom: 20,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/125595779/original/6c5bcaa59692ab691312b869a92a0aa3e5faab0b.jpg",
    designTypeId: 1,
    designStyleId: 4
  },
  {
    username: "artmaniaex",
    priceStartFrom: 20,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/252220056/original/1cce0c7adba7e36498448bd1b51417437717cfff.jpg",
    designTypeId: 1,
    designStyleId: 4
  },
  {
    username: "cosmicbeauty2",
    priceStartFrom: 25,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/164584703/original/6eb83c1d3f31b6e3a99910ed1a18306acab7d2db.jpg",
    designTypeId: 1,
    designStyleId: 4
  },
  {
    username: "bellpeppr",
    priceStartFrom: 25,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/252322613/original/d2a30f73b23e582e4f29ab8212bd48b02c7c71d9.jpg",
    designTypeId: 1,
    designStyleId: 4
  },
  {
    username: "kairachel451",
    priceStartFrom: 25,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/156202007/original/6986058e637c412b45483f0f5f51f2b57e2de93c.jpg",
    designTypeId: 1,
    designStyleId: 4
  },
  {
    username: "design_civil",
    priceStartFrom: 15,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/303878159/original/bd022441f67bcdb5790dfe57a90a6c9439c30f67.jpg",
    designTypeId: 1,
    designStyleId: 4
  },
  {
    username: "graphics_spot93",
    priceStartFrom: 15,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/155763814/original/c1e54a34852fb308b79de37a4f8dea9eabeb1a00.jpg",
    designTypeId: 1,
    designStyleId: 4
  },
  {
    username: "ahsan_memon8",
    priceStartFrom: 15,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/279550462/original/df4e4d8aebc44eaae23991a0a2f1c6affcdbc1a1.jpg",
    designTypeId: 1,
    designStyleId: 4
  },
  {
    username: "prince_logo",
    priceStartFrom: 20,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/299640363/original/3bd997ec51c6df403a58f22af0ee2d53568a0a06.jpg",
    designTypeId: 1,
    designStyleId: 4
  },
  {
    username: "hana_designer",
    priceStartFrom: 25,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/37569390/original/ba7e2ca545f75e87202b0e6cfbe990b9f55f0a44.jpg",
    designTypeId: 1,
    designStyleId: 4
  },
  {
    username: "dawoodnazir02",
    priceStartFrom: 20,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/307198773/original/5a47e3dfd7b2808ba5e8209df1922937f680f906.jpg",
    designTypeId: 1,
    designStyleId: 4
  },
  {
    username: "frankietheboss",
    priceStartFrom: 25,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/172611883/original/ba426ac5bf27e15e18e938e3ef629fcadf2821cf.jpg",
    designTypeId: 1,
    designStyleId: 4
  },
  {
    username: "markauther",
    priceStartFrom: 30,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/120299066/original/85bd2bc2d42aaae030d4918923ea55b25beb385b.jpg",
    designTypeId: 1,
    designStyleId: 4
  },
  {
    username: "sophiekarbjins",
    priceStartFrom: 25,
    imageUrl: "https://fiverr-res.cloudinary.com/video/upload/so_56.086445,t_gig_cards_web/szkvr6xyonlzcwcdzyc4.png",
    designTypeId: 1,
    designStyleId: 4
  },
  {
    username: "listypop",
    priceStartFrom: 25,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/145577603/original/70d9eb7bac39f2076b5fd54d29a37ed4fb93a3ef.jpg",
    designTypeId: 1,
    designStyleId: 4
  },
  {
    username: "minimal_logo864",
    priceStartFrom: 20,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/259825178/original/577798dd10eb0df924add0c37a3ae1dddcf8339b.jpg",
    designTypeId: 1,
    designStyleId: 4
  },
  {
    username: "goodlancer",
    priceStartFrom: 15,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/257479294/original/0f304e2d24fed424d152d74d45ff87448fe0c638.jpg",
    designTypeId: 1,
    designStyleId: 4
  },
  {
    username: "designzone247",
    priceStartFrom: 30,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/180155700/original/84773977356934b5cd0b7b86a03511246a1320a5.jpg",
    designTypeId: 1,
    designStyleId: 4
  },
  {
    username: "cheema_designss",
    priceStartFrom: 5,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/227729806/original/c5fa7b89ea91e6b521244a1e56ed21eb7ed5a692.jpg",
    designTypeId: 1,
    designStyleId: 4
  },
  {
    username: "nazimistic",
    priceStartFrom: 35,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/139714492/original/26b0232c1666efb38959c1453d990dade64d0d4c.jpg",
    designTypeId: 1,
    designStyleId: 4
  },
  {
    username: "aquilakhter",
    priceStartFrom: 5,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/55781644/original/f6e7894f1d8212038f4a686d8deaf98a3796f3fc.jpg",
    designTypeId: 1,
    designStyleId: 4
  },
  {
    username: "zeeshanpardesi",
    priceStartFrom: 50,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/111765793/original/dc96be0b4ddf921a8a464f1457594ca45ad1f1a8.jpg",
    designTypeId: 1,
    designStyleId: 4
  },
  {
    username: "logodesign250",
    priceStartFrom: 20,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/257872991/original/a0d5a09d12e0ddfc81edf4132fe71dbabcf196e9.jpg",
    designTypeId: 1,
    designStyleId: 4
  },
  {
    username: "logo_logics",
    priceStartFrom: 30,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/146897042/original/6232379ad1f4e38d095a17a42c27a410fde6baa7.jpg",
    designTypeId: 1,
    designStyleId: 4
  },
  {
    username: "perri_edward",
    priceStartFrom: 25,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/33302210/original/35bd3cdfe13a89050147a08723b14f6b03ec2e92.jpg",
    designTypeId: 1,
    designStyleId: 4
  },
  {
    username: "logobasher",
    priceStartFrom: 15,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/274896128/original/ac214d23dfc553b58da05a583b0644ea1a8f0d35.jpg",
    designTypeId: 1,
    designStyleId: 4
  },
  {
    username: "zaara_studio",
    priceStartFrom: 20,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/287891670/original/9988bf1b8895997221274a06a0779487e820b361.jpg",
    designTypeId: 1,
    designStyleId: 4
  },
  {
    username: "khaledmig",
    priceStartFrom: 20,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/52789284/original/81f070958852b3d4e4bbd4431e6127cd2d382506.jpg",
    designTypeId: 1,
    designStyleId: 4
  },
  {
    username: "ijaz_saab",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/284385485/original/7e32b240601080b50c8a2eb5354f4c072057d826.jpg",
    designTypeId: 1,
    designStyleId: 4
  },
  {
    username: "bright_graphix",
    priceStartFrom: 15,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/281990324/original/a1c4de877ba480b9919b2d452c6562079083282f.jpg",
    designTypeId: 1,
    designStyleId: 4
  },
  {
    username: "softdesignsz",
    priceStartFrom: 5,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/297331209/original/845a8762a068bff4c3560e321794cc243bf80d56.jpg",
    designTypeId: 1,
    designStyleId: 4
  },
  {
    username: "charlesstudio1",
    priceStartFrom: 50,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/260386982/original/5d906fd87eb16be79510c4dd2f40bdce2a68d5ed.jpg",
    designTypeId: 1,
    designStyleId: 4
  },
  {
    username: "rehman_sheikhu",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/172856020/original/0b24fe470268872103746afc7e691c645b9def3f.png",
    designTypeId: 1,
    designStyleId: 4
  },
  {
    username: "zsdezigns",
    priceStartFrom: 50,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/138957316/original/0d2900fe03ca23086c15b27c946780f933325a0f.jpg",
    designTypeId: 1,
    designStyleId: 4
  },
  {
    username: "flinders221",
    priceStartFrom: 20,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/304494873/original/f09ccd9c7fa20e5affc8f9cbb3ed9758d36b2677.jpg",
    designTypeId: 1,
    designStyleId: 4
  },
  {
    username: "mirha_designz",
    priceStartFrom: 25,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/309382209/original/d44461f1047fe17dc6dc1e84c17fe9f6b17132ef.jpg",
    designTypeId: 1,
    designStyleId: 4
  },
  {
    username: "ashley2244",
    priceStartFrom: 20,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/276706588/original/f5577b182d19eb9c02802abbef7798cddcbfc7d2.jpg",
    designTypeId: 1,
    designStyleId: 4
  },
  {
    username: "hafiz09987",
    priceStartFrom: 20,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/132838299/original/8ab59610cd188949e3f1bc5240693716b8ee2b50.png",
    designTypeId: 1,
    designStyleId: 4
  },
  {
    username: "sobyaiqbal",
    priceStartFrom: 20,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/147938075/original/8da3c6427686cb57f5a4dbb8c41f78c1a44d8443.png",
    designTypeId: 1,
    designStyleId: 4
  },
  {
    username: "mohsinbhatti2",
    priceStartFrom: 25,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/272367597/original/ed9e461fb2c87e9e1aec95991d67fa723d76d74a.jpg",
    designTypeId: 1,
    designStyleId: 4
  },
  {
    username: "logoking2018",
    priceStartFrom: 20,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/280150981/original/91adc0609818db37ef68e6d78b0d1ff90d256a71.jpg",
    designTypeId: 1,
    designStyleId: 4
  },
  {
    username: "tiptox",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/219004820/original/f12e50f918a142c422af37c26e7afa82cd47ca9d.jpg",
    designTypeId: 1,
    designStyleId: 4
  },
  {
    username: "kreative_logo1",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/245231687/original/1681fc67722b5f2562c143377b8de68ab900c582.jpg",
    designTypeId: 1,
    designStyleId: 4
  },
  {
    username: "brandingspell",
    priceStartFrom: 15,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/201830196/original/4a94763a1c3845c8525a154fcb506e4c591cc39c.jpg",
    designTypeId: 1,
    designStyleId: 4
  },
  {
    username: "alluredesigns9",
    priceStartFrom: 15,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/285653914/original/7bb99d5dd707eabdf3769a0833be42594a6810c6.jpg",
    designTypeId: 1,
    designStyleId: 4
  },
  {
    username: "romisriyoool",
    priceStartFrom: 25,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/154274953/original/ffe7a419052cc967f0c792911e5257f0bb345f6b.jpg",
    designTypeId: 1,
    designStyleId: 4
  },
  {
    username: "ryan_studi0",
    priceStartFrom: 50,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/265081033/original/cdad088a500adc8e1dbaeb3a6be5b585bb2544cd.jpg",
    designTypeId: 1,
    designStyleId: 4
  },
  {
    username: "usmanparvez",
    priceStartFrom: 15,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/128969691/original/ee87aaa4a208b555aaa0b9bf19d1a8f929bdda54.jpg",
    designTypeId: 1,
    designStyleId: 4
  },
  {
    username: "sophie_devine",
    priceStartFrom: 15,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/32627205/original/cc279be2ed5efd8ddb3c0f585d2db85d1d6c0648.jpg",
    designTypeId: 1,
    designStyleId: 4
  },
  {
    username: "eva_stacy",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/223809945/original/7eb989b576fbcfdab0d6252bfb00a176e5377c84.jpg",
    designTypeId: 1,
    designStyleId: 4
  },
  {
    username: "tayyabharoon936",
    priceStartFrom: 15,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/15781989/original/45a8f5c85a1727ff603938e23e08808fd60ab56a.jpg",
    designTypeId: 1,
    designStyleId: 4
  },
  {
    username: "dens_saputra",
    priceStartFrom: 25,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/102598532/original/b5e17b22608c27dd4f1c67a8d229e8f8f595209a.jpg",
    designTypeId: 1,
    designStyleId: 4
  },
  {
    username: "logo_artist_az",
    priceStartFrom: 25,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/240156343/original/1b8c66488d9cad28858303d9bc7dbfcc4a91b2dc.jpg",
    designTypeId: 1,
    designStyleId: 4
  },
  {
    username: "malikbilaldhaku",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/122152663/original/ad7dd516e8677e671c142d2d5fe8847b929479a9.jpg",
    designTypeId: 1,
    designStyleId: 4
  },
  {
    username: "teamgraphics932",
    priceStartFrom: 20,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/196041604/original/3921b8ab7b9b6cf8a3062585bb3f639829e43bdd.jpeg",
    designTypeId: 1,
    designStyleId: 4
  },
  {
    username: "dream_art_work",
    priceStartFrom: 30,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/139691333/original/e1c40b971aaeb971cb83178c9c0729699302edae.jpg",
    designTypeId: 1,
    designStyleId: 4
  },
  {
    username: "raheelk01",
    priceStartFrom: 15,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/144047823/original/6b73266b2c2fc457950245f55e20b5431e7cbcd9.jpeg",
    designTypeId: 1,
    designStyleId: 4
  },
  {
    username: "abrarjehan",
    priceStartFrom: 100,
    imageUrl: "https://fiverr-res.cloudinary.com/video/upload/so_1.7014,t_gig_cards_web/zrgjw0hgneyi4ynk0ksf.png",
    designTypeId: 1,
    designStyleId: 4
  },
  {
    username: "logobyminsa",
    priceStartFrom: 50,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/291066090/original/7cf95c79fd6e36f266f524aa915af70476b05a6e.jpeg",
    designTypeId: 1,
    designStyleId: 4
  },
  {
    username: "uzair_here_",
    priceStartFrom: 20,
    imageUrl: "https://fiverr-res.cloudinary.com/video/upload/so_10.3161333,t_gig_cards_web/ui271yuacgsd8tdsyqrn.png",
    designTypeId: 1,
    designStyleId: 4
  },
  {
    username: "anum_noor9",
    priceStartFrom: 20,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/290187452/original/3fa5d5e76607d6a987035f24b0c5cb643541fb54.jpg",
    designTypeId: 1,
    designStyleId: 4
  },
  {
    username: "shemulehsan",
    priceStartFrom: 50,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/70032816/original/8f9b49f6b79b4d7b33ea07c709bbded8ff03246d.png",
    designTypeId: 1,
    designStyleId: 4
  },
  {
    username: "adishen13",
    priceStartFrom: 20,
    imageUrl: "https://fiverr-res.cloudinary.com/video/upload/t_gig_cards_web/lmyyvgzgptdg7ns2xbuf.png",
    designTypeId: 1,
    designStyleId: 4
  },
  {
    username: "missgraphic01",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/219364238/original/7b791cdabe5d117dd733dc45680c20f5707f629c.jpg",
    designTypeId: 1,
    designStyleId: 4
  },
  {
    username: "amazartist",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/126982195/original/0ebf03ca90e5fb07b952b1a1b0a8a9cbf169f759.jpg",
    designTypeId: 1,
    designStyleId: 4
  },
  {
    username: "aychuck",
    priceStartFrom: 35,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/142582236/original/13f3bfa1c660e67b1d9d4da265eaf69e42b84a73.jpg",
    designTypeId: 1,
    designStyleId: 4
  },
  {
    username: "riajul_islam69",
    priceStartFrom: 5,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/249970198/original/7774f19d8c675e02de931cd6ade593a350548e1e.jpg",
    designTypeId: 1,
    designStyleId: 4
  },
  {
    username: "log0designer090",
    priceStartFrom: 5,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/269192384/original/00cb0c8008f0615d5fb10ea54830763d5299bfea.jpg",
    designTypeId: 1,
    designStyleId: 4
  },
  {
    username: "kassou_design",
    priceStartFrom: 290,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/130484025/original/be5a8a2a51f7134bc02f73965d1184583630d72a.jpg",
    designTypeId: 1,
    designStyleId: 4
  },
  {
    username: "priya90",
    priceStartFrom: 15,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/145361305/original/2653508336c05aadbba3010bdaa7c7f2171356aa.jpg",
    designTypeId: 1,
    designStyleId: 4
  },
  {
    username: "zia_designs90",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/135532001/original/5f1d77a3ec2101fc02ccc7f52e6da532c5c3184e.jpg",
    designTypeId: 1,
    designStyleId: 4
  },
  {
    username: "maxx_graphic",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/292251856/original/efad051d4c5de14d930cc533f73f5e2515fb582d.jpg",
    designTypeId: 1,
    designStyleId: 4
  },
  {
    username: "ashi_designers",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/274842671/original/0ce1a68aeb61cff2696fdc701ab867243006c9e9.jpg",
    designTypeId: 1,
    designStyleId: 4
  },
  {
    username: "leo_design95",
    priceStartFrom: 25,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/117485832/original/f4ff0c54146433ceb88620de0cf4b87d491c36dd.jpg",
    designTypeId: 1,
    designStyleId: 4
  },
  {
    username: "devinstanford11",
    priceStartFrom: 15,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/283332371/original/8b7838e5170741dc2f7f6a9d45d87a747907a34f.png",
    designTypeId: 1,
    designStyleId: 4
  },
  {
    username: "razi111",
    priceStartFrom: 5,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/165807139/original/53d6dc3faa649bf79f6d9233527c82cf637814be.jpg",
    designTypeId: 1,
    designStyleId: 4
  },
  {
    username: "refly8",
    priceStartFrom: 15,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/134943554/original/5590502b63a756b94ef0d00d23a8138220d66b75.png",
    designTypeId: 1,
    designStyleId: 4
  },
  {
    username: "eliycia",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/228602505/original/002c86c371923ea5094e1042f3b88e025201c933.jpg",
    designTypeId: 1,
    designStyleId: 4
  },
  {
    username: "designsterx",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/226183785/original/9497f8ab3225c701671aa14267994888c8f1bbd7.jpg",
    designTypeId: 1,
    designStyleId: 4
  },
  {
    username: "aiman_designn",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/272875562/original/30f11d2ee3d7375d98958822ebec4dd1460b06c8.jpg",
    designTypeId: 1,
    designStyleId: 4
  },
  {
    username: "shahbaz2006",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/230870424/original/b4fcf180bb489920ab0cd40ef87c97c8dc0affd2.jpg",
    designTypeId: 1,
    designStyleId: 4
  },
  {
    username: "devinstanford11",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/278562141/original/fe2d86fafe73254e6d83f2f4363c6ee5d8612b7e.png",
    designTypeId: 1,
    designStyleId: 4
  },
  {
    username: "kdesigns786",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/174692578/original/4bee3cf064c2c683e0e1e9cbaae9789d92dc6055.jpg",
    designTypeId: 1,
    designStyleId: 4
  },
  {
    username: "marriumadnan",
    priceStartFrom: 15,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/297619753/original/27809f70dd9b3f8002a0498a75f440528658d703.jpg",
    designTypeId: 1,
    designStyleId: 4
  },
  {
    username: "designbrandx",
    priceStartFrom: 25,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/303979647/original/c50221780d7f204a74141fc39fa2a48cc5dfcb8e.jpg",
    designTypeId: 1,
    designStyleId: 4
  },
  {
    username: "thedezignstarz",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/274916590/original/ce235a717175e42fd79a314900a7400d5d8cef76.jpg",
    designTypeId: 1,
    designStyleId: 4
  },
  {
    username: "leo_brand1",
    priceStartFrom: 5,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/223716822/original/efc979132634c898e67f6bdf9c0a750bd37369e6.jpg",
    designTypeId: 1,
    designStyleId: 4
  },
  {
    username: "phoenix_logos1",
    priceStartFrom: 50,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/220972562/original/01726682aade766581fe8421866980ce9543dcfa.jpg",
    designTypeId: 1,
    designStyleId: 4
  },
  {
    username: "logofication",
    priceStartFrom: 15,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/273585487/original/b15d25fae5d6b468f4b796696692985afe6e67a7.jpg",
    designTypeId: 1,
    designStyleId: 4
  },
  {
    username: "rydia_lm",
    priceStartFrom: 30,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/243249128/original/3564bc33c5222eee12be6a3b212a7a12d7cff725.jpg",
    designTypeId: 1,
    designStyleId: 4
  },
  {
    username: "uniquestudio1",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/199604033/original/f9d63a75f8217eb160ef3db0abc348e5a3118295.jpg",
    designTypeId: 1,
    designStyleId: 4
  },
  {
    username: "sarah_logo1",
    priceStartFrom: 15,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/269274144/original/16e3d4c3fc1fceaae0cb89c67fe5761d2ac453cd.jpg",
    designTypeId: 1,
    designStyleId: 4
  },
  {
    username: "alexmorenoac",
    priceStartFrom: 20,
    imageUrl: "https://fiverr-res.cloudinary.com/video/upload/so_7.443613,t_gig_cards_web/fvlmzehw2wxa2wjveqel.png",
    designTypeId: 1,
    designStyleId: 4
  },
  {
    username: "subhanwains",
    priceStartFrom: 20,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/114990902/original/ce76ca6dccb386f707ea3bc8ab61264a224252bf.jpg",
    designTypeId: 1,
    designStyleId: 4
  },
  {
    username: "pisces_designs",
    priceStartFrom: 5,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/198685907/original/d0d073c34e82f66197ab5161c6e6e80180cf8a95.jpg",
    designTypeId: 1,
    designStyleId: 4
  },
  {
    username: "sarmadsiddiqui9",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/48178669/original/b4a0beaaed36c014e994f622b3c7fc34efd57d28.jpg",
    designTypeId: 1,
    designStyleId: 4
  },
  {
    username: "graphicpronitay",
    priceStartFrom: 5,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/263918829/original/58e82e406b27592a39f99fd24888362538f66270.jpg",
    designTypeId: 1,
    designStyleId: 4
  },
  {
    username: "maria_studio35",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/299567459/original/a5a813da252c1866a7a1809a676e8b86e697a8bb.jpg",
    designTypeId: 1,
    designStyleId: 4
  },
  {
    username: "eric_glenn",
    priceStartFrom: 5,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/174799454/original/33629c1a41ac74a14921d2dfccc7157942db0958.jpg",
    designTypeId: 1,
    designStyleId: 4
  },
  {
    username: "meerub_designs",
    priceStartFrom: 15,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/305691099/original/80cfe65f143d377a9cc44e2e5b72e86f85cdd43e.jpg",
    designTypeId: 1,
    designStyleId: 4
  },
  {
    username: "yasirubasnayake",
    priceStartFrom: 5,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/204639533/original/da45f8fd3ea0bd56fb14a025cc404e56197c3eb7.jpg",
    designTypeId: 1,
    designStyleId: 4
  },
  {
    username: "mariaxcreations",
    priceStartFrom: 15,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/191297541/original/7832b2c23ac603e1a4c538d60e1e0c6338a73ff6.png",
    designTypeId: 1,
    designStyleId: 4
  },
  {
    username: "cheema_designss",
    priceStartFrom: 5,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/256119020/original/dac9905367dc0363cb725307cf7b3c96f9e736f0.jpg",
    designTypeId: 1,
    designStyleId: 4
  },
  {
    username: "creativezone2",
    priceStartFrom: 50,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/121170297/original/2d6d889017332322b0410161b4e0acf9b1a4c512.jpg",
    designTypeId: 1,
    designStyleId: 4
  },
  {
    username: "bhavans",
    priceStartFrom: 15,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/160823141/original/6dd26ae1debf245987d5b423bbed94aa659a4c73.png",
    designTypeId: 1,
    designStyleId: 4
  },
  {
    username: "mujju26",
    priceStartFrom: 30,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/233861930/original/f65db5319e5ae6e5fc3e68a5b2fefde78f37c086.jpg",
    designTypeId: 1,
    designStyleId: 4
  },
  {
    username: "janifer_gfx7",
    priceStartFrom: 20,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/269849151/original/cdb15aa9805b11dc5699609166ff9c813a1af4ae.jpg",
    designTypeId: 1,
    designStyleId: 4
  },
  {
    username: "blackholeworld",
    priceStartFrom: 20,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/181302602/original/0392e3cf57cb5e811ebfc7fabefe580f56571eb1.jpg",
    designTypeId: 1,
    designStyleId: 4
  },
  {
    username: "afroja_nipa",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/189578293/original/8b6e9b75d9568e93e34bd8048fa7198f1058e4c5.jpg",
    designTypeId: 1,
    designStyleId: 4
  },
  {
    username: "realisticlogo",
    priceStartFrom: 5,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/2839166/original/logo.jpg",
    designTypeId: 1,
    designStyleId: 4
  },
  {
    username: "hamza_sial",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/124302817/original/460251b7649f68c66cad49782c9fb4cf70418183.jpg",
    designTypeId: 1,
    designStyleId: 4
  },
  {
    username: "aychuck",
    priceStartFrom: 35,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/134000096/original/8289235b77014f47b7d4391d57bc23dea4b813d4.jpg",
    designTypeId: 1,
    designStyleId: 4
  },
  {
    username: "zdaplay",
    priceStartFrom: 5,
    imageUrl: "https://fiverr-res.cloudinary.com/video/upload/t_gig_cards_web/te2nt6fshzbvcuacdr6i.png",
    designTypeId: 1,
    designStyleId: 4
  },
  {
    username: "enylee",
    priceStartFrom: 25,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/277466436/original/fc6904c86de51b8e1f9010150ee5db8f8da71376.jpg",
    designTypeId: 1,
    designStyleId: 4
  },
  {
    username: "goodhandstudio",
    priceStartFrom: 15,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/258622734/original/37584dfb6cde263ccdbfb3e244381dbe4d7e8a05.jpg",
    designTypeId: 1,
    designStyleId: 4
  },
  {
    username: "logo_expert_it",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/video/upload/so_1.433375,t_gig_cards_web/a2u5wkdr1xdegrdeqarc.png",
    designTypeId: 1,
    designStyleId: 4
  },
  {
    username: "graphix_switch",
    priceStartFrom: 5,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/278629835/original/1d62a72fb14166e7c888cf6015210b2ede1d0ba7.jpg",
    designTypeId: 1,
    designStyleId: 4
  },
  {
    username: "molesa",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/277758038/original/6901b37d199bb809082718b2c83e569574616b72.jpg",
    designTypeId: 1,
    designStyleId: 4
  },
  {
    username: "ilogosmith",
    priceStartFrom: 50,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/141092159/original/a41167eee2928822a2e7ca068b26844a4a45832f.jpg",
    designTypeId: 1,
    designStyleId: 4
  },
  {
    username: "logo_master1014",
    priceStartFrom: 20,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/286278200/original/06684c7fa5ba4c03e463671f3ec7b1fbd80e3a73.jpg",
    designTypeId: 1,
    designStyleId: 4
  },
  {
    username: "honeyqureshi",
    priceStartFrom: 50,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/55296829/original/a2df98e738e8d48b3be14f33a1d9f31c0fd4a374.jpg",
    designTypeId: 1,
    designStyleId: 4
  },
  {
    username: "leo_dj",
    priceStartFrom: 5,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/221303128/original/446c0c754a206e8a3cea29d3d44fedec894f598a.jpg",
    designTypeId: 1,
    designStyleId: 4
  },
  {
    username: "pel_studio",
    priceStartFrom: 50,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/276286514/original/b0ad35a2e1213b4f6f79b0be00b5109722b98ac1.jpg",
    designTypeId: 1,
    designStyleId: 4
  },
  {
    username: "fatoniyahya",
    priceStartFrom: 15,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/271097302/original/a5a74454a83792c212e3305c293ac58e5527d9c6.png",
    designTypeId: 1,
    designStyleId: 4
  },
  {
    username: "zmeree31",
    priceStartFrom: 20,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/306291929/original/7d1e64ffe636c0f6f19b1d83648221cbf333d740.jpg",
    designTypeId: 1,
    designStyleId: 4
  },
  {
    username: "gdrldesign",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/250509167/original/2e99f31c05daa2f7cbac3c616492966c4e339c5c.jpg",
    designTypeId: 1,
    designStyleId: 4
  },
  {
    username: "mobigraphics1",
    priceStartFrom: 35,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/197416180/original/52ffc30274dcb9d6df8cc715579a05822251fcc8.jpg",
    designTypeId: 1,
    designStyleId: 4
  },
  {
    username: "widya_gfx",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/129007825/original/df39d5a3266c1aaf4a5b8a1b28d0f6a37c9994b1.jpg",
    designTypeId: 1,
    designStyleId: 4
  },
  {
    username: "sahoodmughal",
    priceStartFrom: 20,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/283061052/original/840e6ab6363f73fe44436fa94c6b3e827ffb35ad.jpg",
    designTypeId: 1,
    designStyleId: 4
  },
  {
    username: "designologoio",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/295268259/original/4ea094aa6ed3d7d4c43ee2ad88b3dd02ba56785c.jpg",
    designTypeId: 1,
    designStyleId: 4
  },
  {
    username: "kreative_krew01",
    priceStartFrom: 20,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/295119054/original/da9b447deaac70a1f14a620041e65b0db7237fe3.jpg",
    designTypeId: 1,
    designStyleId: 4
  },
  {
    username: "calsolaroart",
    priceStartFrom: 40,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/16970969/original/c4493f3bf4457b5c82b4479589adba77ef6f4708.jpg",
    designTypeId: 1,
    designStyleId: 4
  },
  {
    username: "diplomadon",
    priceStartFrom: 35,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/4027226/original/4b3b7eb2b423ce9d7b395e5a2e5a9980b5df12f3.jpg",
    designTypeId: 1,
    designStyleId: 5
  },
  {
    username: "waqaryounis11",
    priceStartFrom: 15,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/174062543/original/9cba6ec20d3b045598de6e74d2166d4d427d9dc0.jpg",
    designTypeId: 1,
    designStyleId: 5
  },
  {
    username: "bilal_designeer",
    priceStartFrom: 15,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/282037055/original/2f1c62dc149ea000cd69a1163a911695710ba96a.jpg",
    designTypeId: 1,
    designStyleId: 5
  },
  {
    username: "tiagonarciso",
    priceStartFrom: 285,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/301789407/original/aafa6bcf4a6e6e92f133563b1a7f5e7d43697ad2.png",
    designTypeId: 1,
    designStyleId: 5
  },
  {
    username: "intime_designer",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/87159026/original/3205eb9293ecef81a5418b323537f1a23d0a1b9c.jpg",
    designTypeId: 1,
    designStyleId: 5
  },
  {
    username: "sarahzohairdes",
    priceStartFrom: 25,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/270429993/original/a19e42d891c68e1868358dd3b4479d4b0eb46ecc.jpg",
    designTypeId: 1,
    designStyleId: 5
  },
  {
    username: "mariaxcreations",
    priceStartFrom: 15,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/137259476/original/c3ad7a1997ab0506db759d47d0ebd94fd91d28c4.jpg",
    designTypeId: 1,
    designStyleId: 5
  },
  {
    username: "kevinraymund",
    priceStartFrom: 5,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/2052004/original/4f5d7c0def51c13f18aebef46417246e891131b3.png",
    designTypeId: 1,
    designStyleId: 5
  },
  {
    username: "shanzay_graphic",
    priceStartFrom: 15,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/13040919/original/c2af29c571d849a70fc598d5011917df3f6d9bd5.jpg",
    designTypeId: 1,
    designStyleId: 5
  },
  {
    username: "rishad_art",
    priceStartFrom: 25,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/300495761/original/cf57a4f0856a2d9694d69faba13651987525dc50.jpg",
    designTypeId: 1,
    designStyleId: 5
  },
  {
    username: "minhaz_48",
    priceStartFrom: 50,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/296392614/original/c4ecb7a300b7611042474c52bc84e3c4068714e2.jpg",
    designTypeId: 1,
    designStyleId: 5
  },
  {
    username: "kathreenrose",
    priceStartFrom: 25,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/229020114/original/e9d6bca4248af0e976ed0ec1068114090ac8e393.jpg",
    designTypeId: 1,
    designStyleId: 5
  },
  {
    username: "remonisco",
    priceStartFrom: 25,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/215370092/original/cced90f8890c48a099d1a8e35260699fc3872a29.jpg",
    designTypeId: 1,
    designStyleId: 5
  },
  {
    username: "lordoflogos",
    priceStartFrom: 50,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/127443088/original/c18baf3ba718a1e45914e7608f7d2d0a86ef387e.png",
    designTypeId: 1,
    designStyleId: 5
  },
  {
    username: "ezzabell5758",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/101135183/original/ec29fe5b84e71af455e9acb3e4c1886e52be46d9.jpg",
    designTypeId: 1,
    designStyleId: 5
  },
  {
    username: "logo_master56",
    priceStartFrom: 20,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/293057336/original/d96d06bd305296aca8ac30f4bdc2d4184b065508.jpg",
    designTypeId: 1,
    designStyleId: 5
  },
  {
    username: "actualreviewnet",
    priceStartFrom: 45,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/644945/original/2112cc3f61f4533b2c330e6423dc571ae8c9c990.jpg",
    designTypeId: 1,
    designStyleId: 5
  },
  {
    username: "ingeniousarts",
    priceStartFrom: 15,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/196874739/original/9269aac8b3c90a6ec698da93f075a81904f2bec7.jpg",
    designTypeId: 1,
    designStyleId: 5
  },
  {
    username: "carminesannino",
    priceStartFrom: 25,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/84805201/original/cb97fc20b3a3c2ec5ea27ece5c7c17d6ba8de59a.png",
    designTypeId: 1,
    designStyleId: 5
  },
  {
    username: "mk_sanwal",
    priceStartFrom: 50,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/136809111/original/37e74b4e1e3fa0d5e4983661df28898d94ee3f6d.jpg",
    designTypeId: 1,
    designStyleId: 5
  },
  {
    username: "tom_creates",
    priceStartFrom: 20,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/278106553/original/9a343c16ea8c38943b6c68061e1a0183a72f7bfa.png",
    designTypeId: 1,
    designStyleId: 5
  },
  {
    username: "designzone247",
    priceStartFrom: 25,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/171220099/original/9eccd520904cfad2d28b79665f01485a746b4133.jpg",
    designTypeId: 1,
    designStyleId: 5
  },
  {
    username: "zeeshanzahirali",
    priceStartFrom: 30,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/144452185/original/e25bfd29174b18c0f2ff682dc926ce4233b06ea7.png",
    designTypeId: 1,
    designStyleId: 5
  },
  {
    username: "lordoflogo",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/87274541/original/adc5914930265371d516e05e052a5956da925096.png",
    designTypeId: 1,
    designStyleId: 5
  },
  {
    username: "magickgraphics",
    priceStartFrom: 40,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/212139360/original/4af7c57ca3c9a400bc633a8fc4ac45958f72ea8f.png",
    designTypeId: 1,
    designStyleId: 5
  },
  {
    username: "alphastudio_as",
    priceStartFrom: 25,
    imageUrl: "https://fiverr-res.cloudinary.com/video/upload/so_0.0,t_gig_cards_web/oeqosj1k6aaarcj3ush5.png",
    designTypeId: 1,
    designStyleId: 5
  },
  {
    username: "shadab_graphics",
    priceStartFrom: 30,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/104121096/original/ea91031f64d53835851b5ed2022b06d4f2086422.jpg",
    designTypeId: 1,
    designStyleId: 5
  },
  {
    username: "bryanshepard",
    priceStartFrom: 25,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/141143938/original/65c42153ebc1e45186c3e0e56a8525b59ab8065e.jpg",
    designTypeId: 1,
    designStyleId: 5
  },
  {
    username: "abdullahshek518",
    priceStartFrom: 50,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/250054419/original/16f49466952adec037c1cbdeaed4f4ab5f7963cf.jpg",
    designTypeId: 1,
    designStyleId: 5
  },
  {
    username: "poppy_lights",
    priceStartFrom: 40,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/134462218/original/cdc55edeb787180663ee39ccacb317abd1848a3d.png",
    designTypeId: 1,
    designStyleId: 5
  },
  {
    username: "natasha_designz",
    priceStartFrom: 80,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/23785672/original/9b640be3a42b4bd0aae20d4fc41df641f6427b49.jpg",
    designTypeId: 1,
    designStyleId: 5
  },
  {
    username: "identitycreat0r",
    priceStartFrom: 50,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/256769628/original/2fd831383a47796c7fcecbafc6e810eafd1d0aef.jpg",
    designTypeId: 1,
    designStyleId: 5
  },
  {
    username: "prachiroybest",
    priceStartFrom: 30,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/128624410/original/fdc6ec2a7454ddc59488446df132d4d586c2976e.jpg",
    designTypeId: 1,
    designStyleId: 5
  },
  {
    username: "sirrexs",
    priceStartFrom: 15,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/122156999/original/73392a1b37878b688c8c39477d82b310ac7932aa.jpg",
    designTypeId: 1,
    designStyleId: 5
  },
  {
    username: "mertfidan454",
    priceStartFrom: 80,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/129234431/original/139bad999f8535389a30688f01cdb0c51436d9d5.jpg",
    designTypeId: 1,
    designStyleId: 5
  },
  {
    username: "addahub",
    priceStartFrom: 20,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/292332178/original/18841f3470f65b26636437baa1fd560438fb1a51.jpeg",
    designTypeId: 1,
    designStyleId: 5
  },
  {
    username: "cre8iveartwork",
    priceStartFrom: 125,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/1516019/original/3c60745d2feb4232aed2f9c9ff384d6986b14de4.jpg",
    designTypeId: 1,
    designStyleId: 5
  },
  {
    username: "mateodcarmona",
    priceStartFrom: 35,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/98180854/original/6cfe9749ce92f7f781e5383af6332bdf17295674.jpg",
    designTypeId: 1,
    designStyleId: 5
  },
  {
    username: "thegraficohub",
    priceStartFrom: 25,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/302860132/original/ec1fef7072b040f124a0f4b7aab2374d0521bc8a.jpeg",
    designTypeId: 1,
    designStyleId: 5
  },
  {
    username: "amirkhan1996",
    priceStartFrom: 30,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/272113270/original/0efe14118da8e2e1040eaab405cd107e42521e94.png",
    designTypeId: 1,
    designStyleId: 5
  },
  {
    username: "riki_std",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/280409726/original/30153bff868d0f8c0422c06c7a864072fb807974.jpg",
    designTypeId: 1,
    designStyleId: 5
  },
  {
    username: "vicki_hari",
    priceStartFrom: 5,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/125490899/original/18d4fbadffb878b02784c66a25e08293532d52e4.jpg",
    designTypeId: 1,
    designStyleId: 5
  },
  {
    username: "braidedlady",
    priceStartFrom: 70,
    imageUrl: "https://fiverr-res.cloudinary.com/video/upload/t_gig_cards_web/vh4ust2a2femmronjkha.png",
    designTypeId: 1,
    designStyleId: 5
  },
  {
    username: "deleyo",
    priceStartFrom: 15,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/12492064/original/41d5d78a6a10a9db745b9acfaca159ae745fbf55.jpg",
    designTypeId: 1,
    designStyleId: 5
  },
  {
    username: "asahab",
    priceStartFrom: 25,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/122321359/original/7e007db97505c77fb1b22a3679972fe15961f561.jpg",
    designTypeId: 1,
    designStyleId: 5
  },
  {
    username: "sumbal_logos",
    priceStartFrom: 20,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/285764986/original/9cc6d631029d9aa4421ab3f77782df5a51d82dd9.jpg",
    designTypeId: 1,
    designStyleId: 5
  },
  {
    username: "ngengames",
    priceStartFrom: 45,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/116464724/original/b4dd00138298e656c9ae46877be01c2387129ca2.jpg",
    designTypeId: 1,
    designStyleId: 5
  },
  {
    username: "mola_jutt01",
    priceStartFrom: 15,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/295752150/original/b1d92c01664bfd95cc84083d50aedaf69b158f0b.jpg",
    designTypeId: 1,
    designStyleId: 5
  },
  {
    username: "crafting_galaxy",
    priceStartFrom: 20,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/219392912/original/dad446ad7ae03e4a320498b914ff6b3c0efa8c74.jpg",
    designTypeId: 1,
    designStyleId: 5
  },
  {
    username: "w7experts",
    priceStartFrom: 25,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/277439958/original/06792594aefdcfc8295d41a112cac39b319cfba3.jpg",
    designTypeId: 1,
    designStyleId: 5
  },
  {
    username: "jahidhassan496",
    priceStartFrom: 15,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/131084992/original/143057bcb1c96737185173bbc589c9708c445756.jpg",
    designTypeId: 1,
    designStyleId: 5
  },
  {
    username: "mscottdesign",
    priceStartFrom: 15,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/276471367/original/8a34da257e2f5e08455d9d71e3f265fe2db0dd78.jpg",
    designTypeId: 1,
    designStyleId: 5
  },
  {
    username: "alif365",
    priceStartFrom: 20,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/295427668/original/b02377ed35b1c9551545219d38c78eaffc7121eb.jpg",
    designTypeId: 1,
    designStyleId: 5
  },
  {
    username: "komail98",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/148967059/original/283b4171c9925c757110f04cceba40bcb51d579c.jpg",
    designTypeId: 1,
    designStyleId: 5
  },
  {
    username: "kamrulhasan70",
    priceStartFrom: 20,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/212110414/original/993319fa50b89e30a6303f6468286cf0b70c0f40.jpg",
    designTypeId: 1,
    designStyleId: 5
  },
  {
    username: "zohad_hossain",
    priceStartFrom: 15,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/270635619/original/32cc38318a979a8a1fca94ee91f69df8d504aacd.jpg",
    designTypeId: 1,
    designStyleId: 5
  },
  {
    username: "hmd_graphic",
    priceStartFrom: 25,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/108809195/original/c601732076716fc7a332c76fbb9d5b6a83879ca9.jpg",
    designTypeId: 1,
    designStyleId: 5
  },
  {
    username: "graphicsisland1",
    priceStartFrom: 15,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/154336025/original/f99d5a767b5b85606e6815571bf32d741483cfbf.jpg",
    designTypeId: 1,
    designStyleId: 5
  },
  {
    username: "valo_design",
    priceStartFrom: 25,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/294509499/original/ed10b80338d54a4c4bffb8adc95242a5f3989172.jpg",
    designTypeId: 1,
    designStyleId: 5
  },
  {
    username: "anna_taylor",
    priceStartFrom: 25,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/50434519/original/1af0df9c1557b64315028d82a1958c115ece03de.jpg",
    designTypeId: 1,
    designStyleId: 5
  },
  {
    username: "creative_manial",
    priceStartFrom: 20,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/279567645/original/c6e76595189782f5e3dfc33295785bd89d6f1b90.jpg",
    designTypeId: 1,
    designStyleId: 5
  },
  {
    username: "fabien_bglt",
    priceStartFrom: 25,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/243584956/original/28c59f11a27bc94ebc1d226d0bee917130381106.jpg",
    designTypeId: 1,
    designStyleId: 5
  },
  {
    username: "artshipa",
    priceStartFrom: 5,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/275349935/original/2d7a86f2042b064e0df6789125b358c624d70c1f.jpg",
    designTypeId: 1,
    designStyleId: 5
  },
  {
    username: "tonigdesign",
    priceStartFrom: 195,
    imageUrl: "https://fiverr-res.cloudinary.com/video/upload/t_gig_cards_web/mbnhgbdjlzi63l2ghdw6.png",
    designTypeId: 1,
    designStyleId: 5
  },
  {
    username: "azgraphics_01",
    priceStartFrom: 30,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/174447022/original/361d892a377cc18fe845dcb40d21e25bcaf327a6.jpg",
    designTypeId: 1,
    designStyleId: 5
  },
  {
    username: "mscottdesign",
    priceStartFrom: 15,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/276919055/original/7a6a924ad77cb4911834650bb70f9c815a90493e.jpg",
    designTypeId: 1,
    designStyleId: 5
  },
  {
    username: "devinstanford11",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/272072824/original/770785cc3802f9ae33dd8419614946d1d3f8cf49.png",
    designTypeId: 1,
    designStyleId: 5
  },
  {
    username: "chadkills",
    priceStartFrom: 80,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/203506187/original/76527b86f04ca5e06d0a1f4374ee9cdff90bb85a.png",
    designTypeId: 1,
    designStyleId: 5
  },
  {
    username: "bcendet",
    priceStartFrom: 15,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/49752149/original/b8616cb2a92e69c5363667494b93fb37cba45d08.jpg",
    designTypeId: 1,
    designStyleId: 5
  },
  {
    username: "venkateshvinod",
    priceStartFrom: 20,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/101019442/original/e532854981e67059236c848215363fc0d5d175f3.jpg",
    designTypeId: 1,
    designStyleId: 5
  },
  {
    username: "gina_28",
    priceStartFrom: 20,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/301122817/original/a8bd2eb7a76a586facfb4f08fbffb94aa5a2b5fc.jpg",
    designTypeId: 1,
    designStyleId: 5
  },
  {
    username: "ait_taoufiq",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/277107233/original/dcf20d1d4f435179ffc16ed824c6ed0c0cc6c00c.jpg",
    designTypeId: 1,
    designStyleId: 5
  },
  {
    username: "gfxdesigns506",
    priceStartFrom: 15,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/277689754/original/ce6ffbf2c6a260289bb6435c2e012ba63af915d2.png",
    designTypeId: 1,
    designStyleId: 5
  },
  {
    username: "kmlogos",
    priceStartFrom: 5,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/277270984/original/a0a89c7e4510f547b80a9227e6097f2fe655727c.jpg",
    designTypeId: 1,
    designStyleId: 5
  },
  {
    username: "mila_akter",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/147285312/original/35aed6db2a9086b8d976fd5839d30e4ceba25c50.jpg",
    designTypeId: 1,
    designStyleId: 5
  },
  {
    username: "merry_designer4",
    priceStartFrom: 5,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/265543294/original/21fc581df091d9f1dba649c361e2cd4b5579c7f0.jpg",
    designTypeId: 1,
    designStyleId: 5
  },
  {
    username: "raminder",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/3372145/original/TYPOTOOL2.jpg",
    designTypeId: 1,
    designStyleId: 5
  },
  {
    username: "mahnoorfaseh",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/266738896/original/7cfd98c6ea1c92e7a14d7265431bb068630fdf2a.jpg",
    designTypeId: 1,
    designStyleId: 5
  },
  {
    username: "creativespiritb",
    priceStartFrom: 35,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/130679584/original/6205d81285aeda1eb78d831de74eb25018624821.jpg",
    designTypeId: 1,
    designStyleId: 5
  },
  {
    username: "imranpiash",
    priceStartFrom: 30,
    imageUrl: "https://fiverr-res.cloudinary.com/video/upload/so_1.891583,t_gig_cards_web/gemubixiplmk33u2qya0.png",
    designTypeId: 1,
    designStyleId: 5
  },
  {
    username: "vince_hua",
    priceStartFrom: 5,
    imageUrl: "https://fiverr-res.cloudinary.com/video/upload/t_gig_cards_web/ec1vcax25crgcn7sc2of.png",
    designTypeId: 1,
    designStyleId: 5
  },
  {
    username: "mayaagustina_",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/278949490/original/c53933432375a8272351fcce6d8af650fe379951.jpg",
    designTypeId: 1,
    designStyleId: 5
  },
  {
    username: "musabkhurshid",
    priceStartFrom: 25,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/5013041/original/8e771b1c3932591b7f60325b23d39ce5b5dd8995.jpg",
    designTypeId: 1,
    designStyleId: 5
  },
  {
    username: "jubin241",
    priceStartFrom: 20,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/1556190/original/c0c4bcf78abf4e28f865a013a4b64288935091ef.jpg",
    designTypeId: 1,
    designStyleId: 5
  },
  {
    username: "alejandrahurtad",
    priceStartFrom: 85,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/117182782/original/0bce8c5d1fc78dd61ca0af2ff01fa38746fb78d2.png",
    designTypeId: 1,
    designStyleId: 5
  },
  {
    username: "logohype",
    priceStartFrom: 70,
    imageUrl: "https://fiverr-res.cloudinary.com/video/upload/so_1.614045,t_gig_cards_web/nlfh1ezwfqloerrzd2hm.png",
    designTypeId: 1,
    designStyleId: 5
  },
  {
    username: "daimonddesign",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/video/upload/t_gig_cards_web/sfy2cdtvfovdpuquklnt.png",
    designTypeId: 1,
    designStyleId: 5
  },
  {
    username: "diga_atelier",
    priceStartFrom: 50,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/272625003/original/a9514a0777ec7a9fbbfa3650766257786d01d898.jpg",
    designTypeId: 1,
    designStyleId: 5
  },
  {
    username: "sevenheavens_",
    priceStartFrom: 35,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/291332785/original/72cca9c7dc58999d4c59509f8460ffa0dfc91eb3.jpg",
    designTypeId: 1,
    designStyleId: 5
  },
  {
    username: "ustaad_ultra",
    priceStartFrom: 50,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/266260614/original/cc2524bfa322fd994432efe2f1db6a62258133bc.jpg",
    designTypeId: 1,
    designStyleId: 5
  },
  {
    username: "magickgraphics",
    priceStartFrom: 45,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/125309859/original/89c36a4941eb1608e14b6363f2469c90c2449b02.jpg",
    designTypeId: 1,
    designStyleId: 5
  },
  {
    username: "aestheticx",
    priceStartFrom: 300,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/3872355/original/ad692b86b660675ffc71862d8fb0b05706b4484d.jpg",
    designTypeId: 1,
    designStyleId: 5
  },
  {
    username: "andrisaan",
    priceStartFrom: 15,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/201597278/original/6c74c71127598a1b899b2b9139653a0e69179656.jpg",
    designTypeId: 1,
    designStyleId: 5
  },
  {
    username: "alphastudio7",
    priceStartFrom: 25,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/276837765/original/ea01ddf978355c7860e588c3897709d1a8e95ddb.jpg",
    designTypeId: 1,
    designStyleId: 5
  },
  {
    username: "kelly112",
    priceStartFrom: 5,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/31133295/original/c3866ef2cad8265941ab408e9d349eacb60a6999.png",
    designTypeId: 1,
    designStyleId: 5
  },
  {
    username: "alexa_stonefish",
    priceStartFrom: 115,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/106917628/original/1a96b43776afbb6d9a2504a5dff17ce3b2d3d553.jpg",
    designTypeId: 1,
    designStyleId: 5
  },
  {
    username: "tarunwalia826",
    priceStartFrom: 150,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/232462452/original/5dd8f1cf103daad20df66d7edd6919077fd9152b.jpg",
    designTypeId: 1,
    designStyleId: 5
  },
  {
    username: "dansanugrah",
    priceStartFrom: 20,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs2/210509445/original/d7966a3a7c15c0084b33af3f0f1818847e7ba9ce.jpg",
    designTypeId: 1,
    designStyleId: 5
  },
  {
    username: "gregyed",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/270521361/original/25b8b6b69c1ccd6b4980515ed969e57daa089611.png",
    designTypeId: 1,
    designStyleId: 5
  },
  {
    username: "abdulali5",
    priceStartFrom: 50,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/169827486/original/5377cfe629ab5179b78eb359b53faec6824cf1a3.jpg",
    designTypeId: 1,
    designStyleId: 5
  },
  {
    username: "hafifslv",
    priceStartFrom: 55,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/36595225/original/1c87f31d9c63575e0f8b546ec01bca75b60591b2.png",
    designTypeId: 1,
    designStyleId: 5
  },
  {
    username: "faiq_logos",
    priceStartFrom: 25,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/252255418/original/c2398ed70cb0f17e0998b570c253f2bcb67d35de.jpg",
    designTypeId: 1,
    designStyleId: 5
  },
  {
    username: "service_logoz",
    priceStartFrom: 5,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/252251199/original/1779caaaf12e06edd33914982eb8ad82fa882005.jpg",
    designTypeId: 1,
    designStyleId: 5
  },
  {
    username: "designmelt",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/301384470/original/73cad1c84cde64062cae24dd3a2209c5f2a3fe0f.jpg",
    designTypeId: 1,
    designStyleId: 5
  },
  {
    username: "cat__designer",
    priceStartFrom: 20,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/35469235/original/29353c14153aa81a3d1c67a8f19eb5f2a405bcdd.jpg",
    designTypeId: 1,
    designStyleId: 5
  },
  {
    username: "thedesigners007",
    priceStartFrom: 5,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/307291596/original/b90084ad52dc9d25bf5b60a19f9e3460936c44c7.jpg",
    designTypeId: 1,
    designStyleId: 5
  },
  {
    username: "logovibing",
    priceStartFrom: 25,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/290647999/original/9335d652f3e604a8c25a24ca9b6157816cd23e54.jpg",
    designTypeId: 1,
    designStyleId: 5
  },
  {
    username: "shaharia_s",
    priceStartFrom: 40,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/211131949/original/276723b83d80f2122ed5e6eb32f92b108b78c850.jpg",
    designTypeId: 1,
    designStyleId: 5
  },
  {
    username: "kindness_ideas",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/269226041/original/2ef577eb4e5575906b1aa0d114625e2e06e3de26.jpg",
    designTypeId: 1,
    designStyleId: 5
  },
  {
    username: "logoferr",
    priceStartFrom: 15,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/125385399/original/e4fcee2a88e864824e7d347e9c4b46edb942da2e.jpg",
    designTypeId: 1,
    designStyleId: 5
  },
  {
    username: "artareq36",
    priceStartFrom: 55,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/292026826/original/ff6fd6f45e1a6b6a24e348386ea8c67a7f3bf7e5.jpg",
    designTypeId: 1,
    designStyleId: 5
  },
  {
    username: "abbatete634",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/120252058/original/b0739e29837931065406120c788a1fed075ceb04.png",
    designTypeId: 1,
    designStyleId: 5
  },
  {
    username: "carlosderkaiser",
    priceStartFrom: 30,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/225169622/original/17a10ee03b345da693919ef89b2927b0677d27fd.jpg",
    designTypeId: 1,
    designStyleId: 5
  },
  {
    username: "designsforrest",
    priceStartFrom: 25,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/35328340/original/ede293ffa5447ca8c220622f294bd3ed9b3ed5dc.png",
    designTypeId: 1,
    designStyleId: 5
  },
  {
    username: "teamxlogos",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/182730978/original/8b21613a9a64c6262535c130cdf80f686ad71ca1.jpg",
    designTypeId: 1,
    designStyleId: 5
  },
  {
    username: "mariaxcreations",
    priceStartFrom: 15,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/136326889/original/7b6b0fd18e3df7496de889e477e7d92f36993307.png",
    designTypeId: 1,
    designStyleId: 5
  },
  {
    username: "hachlouthaskour",
    priceStartFrom: 30,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs2/293603501/original/34ee0cb9d7a9238f0e1bd4a97ef11c8c1281ae29.png",
    designTypeId: 1,
    designStyleId: 5
  },
  {
    username: "faiq_logos",
    priceStartFrom: 25,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/229380252/original/8b52b418e2c56da4fa55390a3de452cc5db4d002.jpg",
    designTypeId: 1,
    designStyleId: 5
  },
  {
    username: "gobindasarka521",
    priceStartFrom: 30,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/280766449/original/c67fedb0b181813e7fe8e2754dbceb7e198e540f.jpg",
    designTypeId: 1,
    designStyleId: 5
  },
  {
    username: "cbhitech",
    priceStartFrom: 25,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/146416855/original/27f8a6f5e6459471e00e80906d7b821aee6757b5.jpg",
    designTypeId: 1,
    designStyleId: 5
  },
  {
    username: "toseefnaser",
    priceStartFrom: 25,
    imageUrl: "https://fiverr-res.cloudinary.com/video/upload/so_27.301938,t_gig_cards_web/c1b8gtqtax94nvz1t23l.png",
    designTypeId: 1,
    designStyleId: 5
  },
  {
    username: "abdullahriaz001",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/208039216/original/9048710f0212918ca4522e8f2cabded64a583f1e.jpg",
    designTypeId: 1,
    designStyleId: 5
  },
  {
    username: "rayaanpromo",
    priceStartFrom: 20,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/302818497/original/8d76779339c1b8008f5a00b168bc625aade7597c.jpg",
    designTypeId: 1,
    designStyleId: 5
  },
  {
    username: "gabrielaashly",
    priceStartFrom: 5,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/309781221/original/d15c60751e9a7e2c90aa0fbec7f5103520e0e81a.jpg",
    designTypeId: 1,
    designStyleId: 5
  },
  {
    username: "zarawalker",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/1907618/original/00e1d25442e66e98e5f2b999f258b422985acaa6.jpg",
    designTypeId: 1,
    designStyleId: 5
  },
  {
    username: "shanmark002",
    priceStartFrom: 20,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/104915596/original/bc9844e8a88fa292259c876662d5652ce05f5f2d.jpg",
    designTypeId: 1,
    designStyleId: 5
  },
  {
    username: "teamxlogos",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/172690800/original/bb02d88f8d9b7a592e35e5171d18d5f1b0578ea5.jpg",
    designTypeId: 1,
    designStyleId: 5
  },
  {
    username: "um3rmumtaz",
    priceStartFrom: 25,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/245102894/original/a17c8591e9744f7b631c83a76e13182311e4f6c1.jpg",
    designTypeId: 1,
    designStyleId: 5
  },
  {
    username: "mizanarifin",
    priceStartFrom: 5,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/138353133/original/59b854d4829c9e34cc2644dc1b63ce2a375bb519.png",
    designTypeId: 1,
    designStyleId: 5
  },
  {
    username: "mh_studio00",
    priceStartFrom: 15,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/308970820/original/33bce4a8ccfc8714040160bd1cf292fd41c63f94.jpg",
    designTypeId: 1,
    designStyleId: 5
  },
  {
    username: "cyber_avanza",
    priceStartFrom: 20,
    imageUrl: "https://fiverr-res.cloudinary.com/video/upload/t_gig_cards_web/xi2ibgbgd1o7it0fwjnc.png",
    designTypeId: 1,
    designStyleId: 5
  },
  {
    username: "rbp_design",
    priceStartFrom: 50,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/247850869/original/310b61add754ba6e90b009258ed6cf265c0d7a56.jpg",
    designTypeId: 1,
    designStyleId: 5
  },
  {
    username: "rareety",
    priceStartFrom: 5,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/256338529/original/f129a45204ea74918df5549b01cfc9bda5e0fe13.jpg",
    designTypeId: 1,
    designStyleId: 5
  },
  {
    username: "logo_bat81",
    priceStartFrom: 15,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/278743467/original/3372ca02cef0ef87d9e501ccd6093f86c165f8bd.jpg",
    designTypeId: 1,
    designStyleId: 5
  },
  {
    username: "logopost",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/107561755/original/15cd0729b081bba3d67186d463cfff5bb5ac171d.jpg",
    designTypeId: 1,
    designStyleId: 5
  },
  {
    username: "grndr09",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/291183813/original/7e5222472cf3f3b7c785fbd253199ae0a65ad4b2.png",
    designTypeId: 1,
    designStyleId: 5
  },
  {
    username: "jaspreetsinghsu",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/100267701/original/dc68a5ca86285ba97ed2fdbac7eb8118fb79b129.jpg",
    designTypeId: 1,
    designStyleId: 5
  },
  {
    username: "naveenlogos",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/290616061/original/e0f369a47738980926c64b1be646f5ca48666e4a.jpg",
    designTypeId: 1,
    designStyleId: 5
  },
  {
    username: "casavirtual",
    priceStartFrom: 25,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/302851925/original/1ebe9ad80e531198bf1e25f2920417dfddaedec5.png",
    designTypeId: 1,
    designStyleId: 5
  },
  {
    username: "kanwaldesigner",
    priceStartFrom: 35,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/47398679/original/42b6048ec3a051a8b6ece163972d769334e35c0a.jpg",
    designTypeId: 1,
    designStyleId: 5
  },
  {
    username: "rahilasafdar",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/270778041/original/3516b07d8997cca316fb27755988228dcec37e1f.png",
    designTypeId: 1,
    designStyleId: 5
  },
  {
    username: "logojiny",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/285033407/original/d7f021bc49512e7ee24c8c5c35a2e1ff27ac8145.jpg",
    designTypeId: 1,
    designStyleId: 5
  },
  {
    username: "haibroartstudio",
    priceStartFrom: 15,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/165525901/original/69c8c22ed406501d66cc1d7ebb2f9075537c2fa2.png",
    designTypeId: 1,
    designStyleId: 5
  },
  {
    username: "artsantis",
    priceStartFrom: 200,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/117571519/original/2eca8f6a336ed3396cf982980f5565ff83ecf508.jpg",
    designTypeId: 2,
    designStyleId: 6
  },
  {
    username: "milytorres",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/109038324/original/f57df5a83a452a07e3dcc1edc13a050b966bf532.jpg",
    designTypeId: 2,
    designStyleId: 6
  },
  {
    username: "studio_rohan",
    priceStartFrom: 15,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/223627216/original/6281e8932b92b0682d446397ade154fde6b12a12.jpg",
    designTypeId: 2,
    designStyleId: 6
  },
  {
    username: "teddy09",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/42968904/original/a5ccd97fe196c1b9327ff08dfe9e4466900a750d.jpg",
    designTypeId: 2,
    designStyleId: 6
  },
  {
    username: "catnip119",
    priceStartFrom: 150,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/269219018/original/6b189e897d9c4d5af027f1d114f65d5606fa8aa0.jpg",
    designTypeId: 2,
    designStyleId: 6
  },
  {
    username: "adotstudio",
    priceStartFrom: 5,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/71321861/original/171271c68acf52cec8958f8decd88e667f504dd1.jpg",
    designTypeId: 2,
    designStyleId: 6
  },
  {
    username: "cindyannisa",
    priceStartFrom: 25,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/200346779/original/df4568c55ac3de5863c2c56245e1bff1e81d4f89.jpg",
    designTypeId: 2,
    designStyleId: 6
  },
  {
    username: "mariakuzeva",
    priceStartFrom: 45,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/269017184/original/0b4861634433a1ea3fd6ed28f7e9165bc23df7e0.jpg",
    designTypeId: 2,
    designStyleId: 6
  },
  {
    username: "illustrasu",
    priceStartFrom: 20,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/145784085/original/1705ee3575acb6519d38d73d842fdf2db4da56da.jpg",
    designTypeId: 2,
    designStyleId: 6
  },
  {
    username: "nashkolna",
    priceStartFrom: 35,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/174604044/original/9ac06952852026ad3b48b51893f4a9a9fee8ec0e.jpg",
    designTypeId: 2,
    designStyleId: 6
  },
  {
    username: "designerturk",
    priceStartFrom: 45,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/230956849/original/f3dd1ed4649a1c1f3adf4319da4e9fd628d144e6.jpg",
    designTypeId: 2,
    designStyleId: 6
  },
  {
    username: "catherinehigh",
    priceStartFrom: 30,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/153273401/original/44350f378b25e2c09cb1ded8a6edff3a51eb8ef8.jpg",
    designTypeId: 2,
    designStyleId: 6
  },
  {
    username: "helen_veras",
    priceStartFrom: 35,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/247031597/original/8bfc4cf5d090d376efcbf495537c207a5857316c.jpg",
    designTypeId: 2,
    designStyleId: 6
  },
  {
    username: "jonathanleyton",
    priceStartFrom: 40,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/273440420/original/15215b9f31b17970cada472d37b26b7caaf684fb.jpg",
    designTypeId: 2,
    designStyleId: 6
  },
  {
    username: "qoqo_graphic",
    priceStartFrom: 55,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/139182744/original/7f651c2b4be53ed74f27584bbedc98cde917fd48.png",
    designTypeId: 2,
    designStyleId: 6
  },
  {
    username: "jameschutton",
    priceStartFrom: 95,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/169223833/original/688a4c010ea3407de01969cda5c96fef796307a5.jpg",
    designTypeId: 2,
    designStyleId: 6
  },
  {
    username: "creatyves",
    priceStartFrom: 55,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/202007324/original/650399954ddf8b9ebabfb1b4cbb079e9b73e63e0.jpeg",
    designTypeId: 2,
    designStyleId: 6
  },
  {
    username: "ariel_friass",
    priceStartFrom: 25,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/250983153/original/2bf50a4e9a71ee3c887f161bea46bf56ea14bf8c.jpeg",
    designTypeId: 2,
    designStyleId: 6
  },
  {
    username: "ivanwithvodka",
    priceStartFrom: 35,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/113109356/original/ada9351f5c604a934c403d7b3a989f1e4314d945.jpg",
    designTypeId: 2,
    designStyleId: 6
  },
  {
    username: "ozguruguz",
    priceStartFrom: 30,
    imageUrl: "https://fiverr-res.cloudinary.com/video/upload/so_29.075841,t_gig_cards_web/w22l2x3hizfia9ooaskt.png",
    designTypeId: 2,
    designStyleId: 6
  },
  {
    username: "osslo99",
    priceStartFrom: 25,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/175321476/original/c1489cc3ed314f5a127a2aa9530763254c7a2576.png",
    designTypeId: 2,
    designStyleId: 6
  },
  {
    username: "hamjaiu",
    priceStartFrom: 25,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/54380214/original/17726798079299cdea78f9ddc528ba7542d093db.png",
    designTypeId: 2,
    designStyleId: 6
  },
  {
    username: "ghostdxart",
    priceStartFrom: 100,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/195227917/original/9a823b02a1a5ecdcd6fb748483bc0b8954822beb.jpeg",
    designTypeId: 2,
    designStyleId: 6
  },
  {
    username: "chadwickvo",
    priceStartFrom: 40,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/262939810/original/4977ff7913c58a52f99300f823190f31e52ef7cf.jpg",
    designTypeId: 2,
    designStyleId: 6
  },
  {
    username: "lmxillustration",
    priceStartFrom: 60,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/267130151/original/823900a68332ec715c2d63c9cd9039a5518d9ee1.jpg",
    designTypeId: 2,
    designStyleId: 6
  },
  {
    username: "shupeipa",
    priceStartFrom: 70,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/185563277/original/85ebca07aca99fce151648bdadb58d6e93f19b37.jpg",
    designTypeId: 2,
    designStyleId: 6
  },
  {
    username: "pantelispolit",
    priceStartFrom: 30,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/59345654/original/3b29402f38bea72f1db91341e672c9235d86cdb5.jpg",
    designTypeId: 2,
    designStyleId: 6
  },
  {
    username: "sandrotsk",
    priceStartFrom: 90,
    imageUrl: "https://fiverr-res.cloudinary.com/video/upload/t_gig_cards_web/cexubuu3oew8bx01aauw.png",
    designTypeId: 2,
    designStyleId: 6
  },
  {
    username: "matthewbines",
    priceStartFrom: 25,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/234774160/original/bcd9dfd316d8fcb97ba676c956b3ab211bcc5b84.png",
    designTypeId: 2,
    designStyleId: 6
  },
  {
    username: "khairulartstuio",
    priceStartFrom: 60,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/143815066/original/836c8a62d40818acaf73366a28e5052588b53052.jpg",
    designTypeId: 2,
    designStyleId: 6
  },
  {
    username: "basem_s1",
    priceStartFrom: 75,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/140591465/original/058bc97c2f8653de24f7550e27cda22f253bbf1a.png",
    designTypeId: 2,
    designStyleId: 6
  },
  {
    username: "kinglylink",
    priceStartFrom: 180,
    imageUrl: "https://fiverr-res.cloudinary.com/video/upload/so_57.933676,t_gig_cards_web/y8z3bya6kwrzf7zrmhp9.png",
    designTypeId: 2,
    designStyleId: 6
  },
  {
    username: "zuroart",
    priceStartFrom: 5,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/72532421/original/c01576974ac409f83197d778abb0cf35b804d8ce.jpg",
    designTypeId: 2,
    designStyleId: 6
  },
  {
    username: "franmr",
    priceStartFrom: 40,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/145380332/original/3d57a8255f1e4a4c24c32fa643fc05f68788ef57.png",
    designTypeId: 2,
    designStyleId: 6
  },
  {
    username: "rickdesign01",
    priceStartFrom: 5,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/152457859/original/b2a96fdd629fec29cf6097cf14cfd8219a1b6bcf.png",
    designTypeId: 2,
    designStyleId: 6
  },
  {
    username: "szybkaiokienko",
    priceStartFrom: 20,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/273669761/original/71104156f97ef04ca31d1a3507f811ae68636c49.png",
    designTypeId: 2,
    designStyleId: 6
  },
  {
    username: "hephaestusart",
    priceStartFrom: 50,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/238705414/original/94ac9e53d5e507666a5416f473f4bdaf966d0066.jpg",
    designTypeId: 2,
    designStyleId: 6
  },
  {
    username: "yordastudio",
    priceStartFrom: 15,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/283008423/original/5f275b04cf876421edf518ca6de3128ba21e7630.jpg",
    designTypeId: 2,
    designStyleId: 6
  },
  {
    username: "tritonart",
    priceStartFrom: 15,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/144447913/original/05aab925a579fd2504e75f692d6b3495577b8967.jpg",
    designTypeId: 2,
    designStyleId: 6
  },
  {
    username: "greendrk",
    priceStartFrom: 20,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/150204866/original/37b3bb56f4e4809abb8e316d8c17bb77a5161f14.png",
    designTypeId: 2,
    designStyleId: 6
  },
  {
    username: "carolinabuiles",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/114075746/original/0f4f4174c1dacb81ec690487014da481d66f4c01.png",
    designTypeId: 2,
    designStyleId: 6
  },
  {
    username: "davidericssonn",
    priceStartFrom: 15,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/293520240/original/0496090ab050b5dd127676d00685963130611f9d.png",
    designTypeId: 2,
    designStyleId: 6
  },
  {
    username: "colorzworks",
    priceStartFrom: 5,
    imageUrl: "https://fiverr-res.cloudinary.com/video/upload/so_3.6266736,t_gig_cards_web/z9rtknestrfq7t9bjivx.png",
    designTypeId: 2,
    designStyleId: 6
  },
  {
    username: "fatahillahrosi",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/145981384/original/f029aac5f156c7d4bb531260230e897c0197b869.jpg",
    designTypeId: 2,
    designStyleId: 6
  },
  {
    username: "wicak964",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/132692192/original/7a5e686d4143efab02fa68025e22de85d48d7040.jpg",
    designTypeId: 2,
    designStyleId: 6
  },
  {
    username: "prazetzo_art",
    priceStartFrom: 5,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/242591831/original/c287c02ce678c202e6e1f72ed5efecbb968915eb.png",
    designTypeId: 2,
    designStyleId: 6
  },
  {
    username: "nokudesain",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/232394973/original/a132e548b38df1b877f0e9edf511dcf5c4aefafd.png",
    designTypeId: 2,
    designStyleId: 6
  },
  {
    username: "artist_canvas",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/255479972/original/f9df77281802edacee63d0de26e44e7c4801fbd6.jpg",
    designTypeId: 2,
    designStyleId: 6
  },
  {
    username: "im_jilla",
    priceStartFrom: 5,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/239637705/original/b09022798e12716b2993e1506e14b5465b294a1e.png",
    designTypeId: 2,
    designStyleId: 6
  },
  {
    username: "arunkumar600",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/135533955/original/33973d73ae860704610cff1174af2e027c695368.jpg",
    designTypeId: 2,
    designStyleId: 6
  },
  {
    username: "xekoluan",
    priceStartFrom: 50,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/134080855/original/71051e5f24aea003b52c98ebbfc5190e09c78a63.jpg",
    designTypeId: 2,
    designStyleId: 6
  },
  {
    username: "loddigex",
    priceStartFrom: 20,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/155489025/original/33185d69c0984cc1c4ba8febb366e66e8987f186.jpg",
    designTypeId: 2,
    designStyleId: 6
  },
  {
    username: "senrouk_arts",
    priceStartFrom: 75,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/167909697/original/ec6de0926935f14dcf1e6218b0e617ede952b620.jpg",
    designTypeId: 2,
    designStyleId: 6
  },
  {
    username: "efa_finearts",
    priceStartFrom: 30,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/229563562/original/f276a04bc34d02033f86cc73d5be527cb7c2a197.jpg",
    designTypeId: 2,
    designStyleId: 6
  },
  {
    username: "conniedragon",
    priceStartFrom: 15,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/119206881/original/06780e8ca6748314c78b9a0c71225579d70f86a0.jpg",
    designTypeId: 2,
    designStyleId: 6
  },
  {
    username: "artistrywings",
    priceStartFrom: 30,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/217151622/original/70b3508f3669a1df21a463a096cf23e48545d887.jpeg",
    designTypeId: 2,
    designStyleId: 6
  },
  {
    username: "minaanandag",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/160800339/original/7c1f3942999e1b3a34bd2ceb7b1fd6dc74a218f3.jpg",
    designTypeId: 2,
    designStyleId: 6
  },
  {
    username: "jadeartzz",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/280543225/original/458bb7fe56be8fde72e5daf3d7b33270083cc073.jpg",
    designTypeId: 2,
    designStyleId: 6
  },
  {
    username: "khusnulhayat",
    priceStartFrom: 20,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/171993948/original/1e5b9c88f07018343d2373e0f7fc995baa0b2cea.jpeg",
    designTypeId: 2,
    designStyleId: 6
  },
  {
    username: "fmuqodas",
    priceStartFrom: 15,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/100752175/original/1e8500b760079bbeb8d57e8d09c979fb6cb6a478.jpg",
    designTypeId: 2,
    designStyleId: 6
  },
  {
    username: "hadesignn",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/159195745/original/1f5b89080d560c94849847a6d9a55807f29b09fd.jpg",
    designTypeId: 2,
    designStyleId: 6
  },
  {
    username: "artsmate",
    priceStartFrom: 15,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/20317777/original/ae8dce46637ab670cc8767183c3a3ee4e0d27119.jpg",
    designTypeId: 2,
    designStyleId: 6
  },
  {
    username: "art_prophet",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/212527032/original/9c5a5cd4939e2b21f25701450fbd282ebd89f295.jpg",
    designTypeId: 2,
    designStyleId: 6
  },
  {
    username: "nudratdesigner",
    priceStartFrom: 20,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/137058022/original/5a7cc1a4673617001873de4c3b8ed68a77cba317.jpg",
    designTypeId: 2,
    designStyleId: 6
  },
  {
    username: "sanjali91",
    priceStartFrom: 20,
    imageUrl: "https://fiverr-res.cloudinary.com/video/upload/so_10.5789963400059,t_gig_cards_web/x1zzlrxfj3ft4epmjkc2.png",
    designTypeId: 2,
    designStyleId: 6
  },
  {
    username: "galichws",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/269436183/original/332214fc3a98b1ed9f1b8e8b2b06b38152a7c228.jpg",
    designTypeId: 2,
    designStyleId: 6
  },
  {
    username: "frankocean922",
    priceStartFrom: 25,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/203255487/original/72deb1c1db5a71405fd0fddcd952817b13ee6f5a.jpg",
    designTypeId: 2,
    designStyleId: 6
  },
  {
    username: "adriandragne",
    priceStartFrom: 5,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/137849060/original/8792ca404827b86f6e42e80c3e9a1fdbdec85302.jpg",
    designTypeId: 2,
    designStyleId: 6
  },
  {
    username: "tndillustration",
    priceStartFrom: 40,
    imageUrl: "https://fiverr-res.cloudinary.com/video/upload/t_gig_cards_web/qzdtznocxd4opmh0ycow.png",
    designTypeId: 2,
    designStyleId: 6
  },
  {
    username: "alfitomedly",
    priceStartFrom: 60,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/188983413/original/56e8f5f3949efdd78cbf2fd0cbced84723741aa2.jpg",
    designTypeId: 2,
    designStyleId: 6
  },
  {
    username: "dazzlingdezigns",
    priceStartFrom: 20,
    imageUrl: "https://fiverr-res.cloudinary.com/video/upload/so_11.276477,t_gig_cards_web/wfnknxn8tmsmjq6ixgsp.png",
    designTypeId: 2,
    designStyleId: 6
  },
  {
    username: "gimalez_an",
    priceStartFrom: 5,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/256645182/original/42c78ec6bc20b279194609342ee9dff748053580.jpg",
    designTypeId: 2,
    designStyleId: 6
  },
  {
    username: "jaymodesigns",
    priceStartFrom: 20,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/131073571/original/e3502856e5778e8f3adc882f6538222c73c9c767.png",
    designTypeId: 2,
    designStyleId: 6
  },
  {
    username: "fmuqodas",
    priceStartFrom: 25,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/4391922/original/f8aeba472eea255cd8f59fe21d010c030e6b79ba.jpg",
    designTypeId: 2,
    designStyleId: 6
  },
  {
    username: "henryez",
    priceStartFrom: 30,
    imageUrl: "https://fiverr-res.cloudinary.com/video/upload/t_gig_cards_web/ahgjyosqmbw8ohcg1pzm.png",
    designTypeId: 2,
    designStyleId: 6
  },
  {
    username: "demonpaimon",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/140836786/original/fb53ed192e92ca19a11b9f6db98e7e08c384066c.png",
    designTypeId: 2,
    designStyleId: 6
  },
  {
    username: "bara42",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/135894688/original/b98bd0ed9a085644ec5e98044d5754dcf1023b1a.jpg",
    designTypeId: 2,
    designStyleId: 6
  },
  {
    username: "mogumash",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/105341233/original/6b6e30c2b7318457af862b315068a4ddc10b7b42.jpg",
    designTypeId: 2,
    designStyleId: 6
  },
  {
    username: "khukukhuku",
    priceStartFrom: 5,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/173839548/original/884c3f25836f499976d9b2ae36d97d93bdde1711.jpg",
    designTypeId: 2,
    designStyleId: 6
  },
  {
    username: "achernushkin",
    priceStartFrom: 45,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/262102345/original/8cf56d7dc77a5c1ba0406debc0b29b0816da3480.jpg",
    designTypeId: 2,
    designStyleId: 6
  },
  {
    username: "anesthesiia",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/230312123/original/e4c0e21cb007964fef1a2b2fb6ffdc0260801542.jpeg",
    designTypeId: 2,
    designStyleId: 6
  },
  {
    username: "pahrizrhendrik",
    priceStartFrom: 5,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/133620450/original/0a1d3d45ad4e11d16f38770ad3d0561d6130839e.jpg",
    designTypeId: 2,
    designStyleId: 6
  },
  {
    username: "dibyoshree0",
    priceStartFrom: 40,
    imageUrl: "https://fiverr-res.cloudinary.com/video/upload/so_0.0,t_gig_cards_web/gmldjw07tlu5uysvvcdn.png",
    designTypeId: 2,
    designStyleId: 6
  },
  {
    username: "tomlinsondaniel",
    priceStartFrom: 25,
    imageUrl: "https://fiverr-res.cloudinary.com/video/upload/so_0.0,t_gig_cards_web/cqbjj9f1nrjgafn3zymv.png",
    designTypeId: 2,
    designStyleId: 6
  },
  {
    username: "jeillustrations",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/204022348/original/5c89d32a4f929d0175f08b5f2b571da04f53d4cd.jpg",
    designTypeId: 2,
    designStyleId: 6
  },
  {
    username: "nicoletadabija",
    priceStartFrom: 30,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/166429838/original/549cecd507e4cdd9b59a086633a6649fe3a3fb9e.jpg",
    designTypeId: 2,
    designStyleId: 6
  },
  {
    username: "shawnd1988",
    priceStartFrom: 20,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/124383853/original/2f0463223dc2bf9a7279313119cb4390bab851d4.jpg",
    designTypeId: 2,
    designStyleId: 6
  },
  {
    username: "huangja",
    priceStartFrom: 40,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/181485077/original/5ab241924f4b9f7bd332db75140ed615273c01cd.jpeg",
    designTypeId: 2,
    designStyleId: 6
  },
  {
    username: "cernnunosss",
    priceStartFrom: 15,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/290500561/original/e84d15b59aeaec61140509c659e63af4917cd849.jpg",
    designTypeId: 2,
    designStyleId: 6
  },
  {
    username: "alexvintagee",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/121119577/original/c73828877a2d0391348b6401a46883ab9ae95847.jpg",
    designTypeId: 2,
    designStyleId: 6
  },
  {
    username: "hannisdjauhari",
    priceStartFrom: 45,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/171026787/original/42df0fd032068ee13a63a4d8ac54265745e1c941.jpg",
    designTypeId: 2,
    designStyleId: 6
  },
  {
    username: "soanala",
    priceStartFrom: 40,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/199373116/original/69c761c8254b0662f3d93525a7622ebd396c23fe.png",
    designTypeId: 2,
    designStyleId: 6
  },
  {
    username: "vitalii_h",
    priceStartFrom: 30,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/146447167/original/4d56cb925b6f0928e06b58cb799831dfdef3b4c2.jpg",
    designTypeId: 2,
    designStyleId: 6
  },
  {
    username: "shawnlart",
    priceStartFrom: 80,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/145382699/original/5d804d087d55e4ff3880f379787f06106a95671a.png",
    designTypeId: 2,
    designStyleId: 6
  },
  {
    username: "sohisoli",
    priceStartFrom: 25,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/213240529/original/6685ca789a59a64656763144270cb5457c83e85c.jpg",
    designTypeId: 2,
    designStyleId: 6
  },
  {
    username: "doantrang",
    priceStartFrom: 40,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/125409227/original/2acfc2dc8d177d0a7873dd01dec85306b88a7eff.jpg",
    designTypeId: 2,
    designStyleId: 6
  },
  {
    username: "lucasalvaro",
    priceStartFrom: 85,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/209847622/original/ec3e432f95dbbe5bf473b26c0aa16cb273bfc24e.png",
    designTypeId: 2,
    designStyleId: 6
  },
  {
    username: "nikhilkumar349",
    priceStartFrom: 30,
    imageUrl: "https://fiverr-res.cloudinary.com/video/upload/so_10.478449,t_gig_cards_web/kcuomkytfx47ssk86txk.png",
    designTypeId: 2,
    designStyleId: 6
  },
  {
    username: "baguspratama",
    priceStartFrom: 30,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs2/163904008/original/5561083f46ae2f8ae8299827c6337665e871a4a8.jpg",
    designTypeId: 2,
    designStyleId: 6
  },
  {
    username: "hoangtejieng",
    priceStartFrom: 50,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/3652300/original/7f105193cc306c100b864a192478393e5a60a69f.jpg",
    designTypeId: 2,
    designStyleId: 6
  },
  {
    username: "kateloz",
    priceStartFrom: 40,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/161642169/original/08f1fda3342cf1bd71ae013381a2596ca6fc9b76.jpg",
    designTypeId: 2,
    designStyleId: 6
  },
  {
    username: "tommoreno747",
    priceStartFrom: 50,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/208538431/original/ca5d501ce8f6262c6388d47bd8909eeea4a85473.jpg",
    designTypeId: 2,
    designStyleId: 6
  },
  {
    username: "dinhhamy",
    priceStartFrom: 65,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/141022253/original/b7df23e4c0f1c2d02e3babd67e78581d3d7fbe69.png",
    designTypeId: 2,
    designStyleId: 6
  },
  {
    username: "dariaromanova",
    priceStartFrom: 50,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/136544467/original/62d93731a9c1b83f6f0fe19c69d475082e3e3e39.jpg",
    designTypeId: 2,
    designStyleId: 6
  },
  {
    username: "ouranos_megas",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/167506769/original/c8389cb144070d45e56973df11bdb03606283eff.jpg",
    designTypeId: 2,
    designStyleId: 6
  },
  {
    username: "buyansanjaaart",
    priceStartFrom: 40,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/203797335/original/32e882c1b3e5f65ebd15fb652e72cc6e5c85869b.jpg",
    designTypeId: 2,
    designStyleId: 6
  },
  {
    username: "leonardartwork",
    priceStartFrom: 15,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/220170462/original/8336dee32d72d512c62e3a52019bd4df3a03ed11.jpg",
    designTypeId: 2,
    designStyleId: 6
  },
  {
    username: "olgasiegel",
    priceStartFrom: 30,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/173656870/original/c7d718818b08e0488d3405dab2766c46de557da7.jpg",
    designTypeId: 2,
    designStyleId: 6
  },
  {
    username: "u_tech",
    priceStartFrom: 20,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/278604033/original/050fd881ec73ec07985770cde371f2355c93013b.jpg",
    designTypeId: 2,
    designStyleId: 6
  },
  {
    username: "fldesigns",
    priceStartFrom: 25,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/99515313/original/e88eae49b5dc275a1108b0f38f1d843b69a10384.jpg",
    designTypeId: 2,
    designStyleId: 6
  },
  {
    username: "soso112429",
    priceStartFrom: 60,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/218349599/original/9f94b272012596e6e9210878f891d5f40a09fea6.jpg",
    designTypeId: 2,
    designStyleId: 6
  },
  {
    username: "whiteghul",
    priceStartFrom: 30,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/148652728/original/d6a3da74ea4e64e1eb21b8a014ef76101b4f8d1b.jpg",
    designTypeId: 2,
    designStyleId: 6
  },
  {
    username: "borisut",
    priceStartFrom: 30,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/159709203/original/06c99b6b15c2c2fa2e05b63ab8cb2d56943b7b9b.jpg",
    designTypeId: 2,
    designStyleId: 6
  },
  {
    username: "hiraarshad",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/126467031/original/f1fc81dbbba107c128a60f3c50c020be5cb470ee.jpg",
    designTypeId: 2,
    designStyleId: 6
  },
  {
    username: "slkcool",
    priceStartFrom: 20,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/185539132/original/8a73fca7a68e2e269e087abb48179f91680709af.jpg",
    designTypeId: 2,
    designStyleId: 6
  },
  {
    username: "armstranger",
    priceStartFrom: 50,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/104752025/original/7550b3d5841fa6f539c8c1b8bcc0850424355218.jpg",
    designTypeId: 2,
    designStyleId: 6
  },
  {
    username: "xuanthai2200",
    priceStartFrom: 30,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/104629708/original/29103e8983cd09ca7ed097c3ec74c110d7eada35.jpg",
    designTypeId: 2,
    designStyleId: 6
  },
  {
    username: "creativedesgnin",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/131680023/original/d4e2ddda83754946b400eae17bd8f27b09471764.jpg",
    designTypeId: 2,
    designStyleId: 6
  },
  {
    username: "atiksugiwara",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/video/upload/so_0.151311,t_gig_cards_web/lptkcyx1e4ii48zcdiky.png",
    designTypeId: 2,
    designStyleId: 6
  },
  {
    username: "apexinfinityg",
    priceStartFrom: 20,
    imageUrl: "https://fiverr-res.cloudinary.com/video/upload/t_gig_cards_web/dgwt9lkwrrfn1cqiuunc.png",
    designTypeId: 2,
    designStyleId: 6
  },
  {
    username: "amberrblue",
    priceStartFrom: 40,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/197891514/original/aeecb77f74ef026411c529594cce42fc8a9eb536.jpg",
    designTypeId: 2,
    designStyleId: 6
  },
  {
    username: "umairjasra",
    priceStartFrom: 30,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/216539686/original/6a3e2e7d8b6fd253e9e6b27543606ae0b3fed9e5.png",
    designTypeId: 2,
    designStyleId: 6
  },
  {
    username: "shellkating",
    priceStartFrom: 20,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/168380983/original/e10b1bd7be9b918cd476bdef360cb8b50a16da52.png",
    designTypeId: 2,
    designStyleId: 6
  },
  {
    username: "badrasketch",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/279214274/original/4817a92d1ba75ca226195b01e1753affb3676deb.jpg",
    designTypeId: 2,
    designStyleId: 6
  },
  {
    username: "ibnulaffan",
    priceStartFrom: 25,
    imageUrl: "https://fiverr-res.cloudinary.com/video/upload/so_3.756862,t_gig_cards_web/k1d07r7fgl1zpllqskwx.png",
    designTypeId: 2,
    designStyleId: 6
  },
  {
    username: "strawberrique",
    priceStartFrom: 85,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/42788779/original/4486b16c4b3e6e1ef867a696445eb25712132ef9.jpg",
    designTypeId: 2,
    designStyleId: 6
  },
  {
    username: "teddyfone",
    priceStartFrom: 30,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/200875854/original/3efd25e9f34f5c0fdc75af7f31952803f0f460ae.jpg",
    designTypeId: 2,
    designStyleId: 6
  },
  {
    username: "grimsloki",
    priceStartFrom: 45,
    imageUrl: "https://fiverr-res.cloudinary.com/video/upload/so_29.605032,t_gig_cards_web/nde8dllirrxak91y3r6f.png",
    designTypeId: 2,
    designStyleId: 6
  },
  {
    username: "thaithank",
    priceStartFrom: 50,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/246204055/original/a8ed74d873b0c89823f3fb3b7ae42ef4a9e32898.png",
    designTypeId: 2,
    designStyleId: 6
  },
  {
    username: "beng312",
    priceStartFrom: 30,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/140039915/original/aa85fa513ca910092a635df74af7d059ef48e2b9.png",
    designTypeId: 2,
    designStyleId: 6
  },
  {
    username: "study3_2d",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/129538636/original/f98bf56a4d4c96ac65a80aa9418642252d868048.jpg",
    designTypeId: 2,
    designStyleId: 6
  },
  {
    username: "mombaedo",
    priceStartFrom: 15,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/42720129/original/40ef929a666193f0779824a16246a399c81c95e1.jpg",
    designTypeId: 2,
    designStyleId: 6
  },
  {
    username: "zanydesigner",
    priceStartFrom: 45,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/246324451/original/9d00604a7e7fb11247c72ff86a7fa49e1f424a4c.png",
    designTypeId: 2,
    designStyleId: 6
  },
  {
    username: "nadezhda_trophy",
    priceStartFrom: 25,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/205912544/original/397124c686394ad44992173bab91afb80030fce7.jpg",
    designTypeId: 2,
    designStyleId: 6
  },
  {
    username: "yuriiflics",
    priceStartFrom: 25,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/216148496/original/59b69bafe0a349a96d7775537c3638a49b48fb14.jpg",
    designTypeId: 2,
    designStyleId: 6
  },
  {
    username: "emilianoff",
    priceStartFrom: 50,
    imageUrl: "https://fiverr-res.cloudinary.com/video/upload/so_0.650078432996728,t_gig_cards_web/nuicdyvv7ufcd2peuuaj.png",
    designTypeId: 2,
    designStyleId: 6
  },
  {
    username: "arofrahman",
    priceStartFrom: 5,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/128598481/original/9b14234ce6cc22a5c505fdef06a878e0b2fa73ec.jpg",
    designTypeId: 2,
    designStyleId: 6
  },
  {
    username: "bee_creation",
    priceStartFrom: 75,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/176327217/original/ae084abb89745f6042140d1dbdd714001510ff4c.jpg",
    designTypeId: 2,
    designStyleId: 6
  },
  {
    username: "gongor32",
    priceStartFrom: 50,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/181491561/original/dcc8c26ba0afa116ee41289e4d73de677f63a41c.jpg",
    designTypeId: 2,
    designStyleId: 6
  },
  {
    username: "izulrahman",
    priceStartFrom: 40,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/190058251/original/bf5282f366e9a427a1a9511a9ac5e43c20dcf9e2.jpeg",
    designTypeId: 2,
    designStyleId: 6
  },
  {
    username: "teoaladashvili",
    priceStartFrom: 35,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/197527546/original/a7bb560c680a5d68da8b72df5a9fc3ffd4f958b3.jpg",
    designTypeId: 2,
    designStyleId: 7
  },
  {
    username: "jeanne_lolness",
    priceStartFrom: 15,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/141664388/original/9ff11bcb278e6f8299532b8c14a209505bda80c6.jpg",
    designTypeId: 2,
    designStyleId: 7
  },
  {
    username: "luccanistic",
    priceStartFrom: 5,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/198131846/original/292ca84a1d4696a1efd9e9443d96bbf9e955c89b.jpg",
    designTypeId: 2,
    designStyleId: 7
  },
  {
    username: "creativesetu22",
    priceStartFrom: 5,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/295242547/original/dc4cf3af550a2ce4d84ef034d3dd1744fccc2ab9.jpg",
    designTypeId: 2,
    designStyleId: 7
  },
  {
    username: "irinaclescenco",
    priceStartFrom: 125,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/177046964/original/e8ed994c5ff71389ecc7c782ca08860ad500dd9f.png",
    designTypeId: 2,
    designStyleId: 7
  },
  {
    username: "diantriyasa",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/258889526/original/f3376d2772224a15d7ac6092e1c38a8aa0dbacb6.png",
    designTypeId: 2,
    designStyleId: 7
  },
  {
    username: "kindrawx22_",
    priceStartFrom: 25,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/214382315/original/e82d9a9aba3a1a759d3ec19756f860280fd734a5.png",
    designTypeId: 2,
    designStyleId: 7
  },
  {
    username: "pavlo_paka",
    priceStartFrom: 50,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/259959935/original/9fd0c039264dbb0036dbe1332f5c92fca21189bf.jpg",
    designTypeId: 2,
    designStyleId: 7
  },
  {
    username: "yozart",
    priceStartFrom: 55,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/161428670/original/1f3e9740155e2073fe86930efa49eee1b50165bb.jpg",
    designTypeId: 2,
    designStyleId: 7
  },
  {
    username: "yozart",
    priceStartFrom: 35,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/129839462/original/b85e461e88f5abc3fceb020a4dc81e0401d20f6d.jpg",
    designTypeId: 2,
    designStyleId: 7
  },
  {
    username: "raquelink",
    priceStartFrom: 50,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/117220091/original/28f1c88f9dbb47f95cd61fa2214c8be9997b5502.png",
    designTypeId: 2,
    designStyleId: 7
  },
  {
    username: "segoshvishna",
    priceStartFrom: 50,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/163428299/original/f5430b7a5c16dccfa38d10969f766c3c67c9d3ad.jpg",
    designTypeId: 2,
    designStyleId: 7
  },
  {
    username: "dickytrd",
    priceStartFrom: 20,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/140586499/original/728874931059555769f13dff51c97a260562dfb5.jpg",
    designTypeId: 2,
    designStyleId: 7
  },
  {
    username: "kmsnsk_std",
    priceStartFrom: 40,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/239423359/original/d1fdad2e7d75f3e94dc6217289a825675ccda669.png",
    designTypeId: 2,
    designStyleId: 7
  },
  {
    username: "albinoartnd",
    priceStartFrom: 50,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/225957448/original/bdc903fb2525db26400fa9a1bc15d3bf89fba5cb.jpg",
    designTypeId: 2,
    designStyleId: 7
  },
  {
    username: "yvren22",
    priceStartFrom: 5,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/144338635/original/97c157820e6dd857114550c10ffe5f2414e4f1ce.jpg",
    designTypeId: 2,
    designStyleId: 7
  },
  {
    username: "ahsansiddiqui10",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/68831326/original/619c27da144b1ff9be00d6dbff44f65656433d61.jpg",
    designTypeId: 2,
    designStyleId: 7
  },
  {
    username: "bananasboy",
    priceStartFrom: 20,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/180237403/original/26ac226506f2aabb8d2a75c1d4c8f2e0309e17a3.jpg",
    designTypeId: 2,
    designStyleId: 7
  },
  {
    username: "nummax",
    priceStartFrom: 5,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/255430646/original/51e2b09484484bb88b53dec79e87476d812a9e40.png",
    designTypeId: 2,
    designStyleId: 7
  },
  {
    username: "uven_arts",
    priceStartFrom: 20,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/190191513/original/7758304827ceea64f72e6c49e15a57b12d95fb99.jpg",
    designTypeId: 2,
    designStyleId: 7
  },
  {
    username: "mihailo147",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/219865556/original/c2958bf34b54cecbff2778c7eae058e2694054e5.png",
    designTypeId: 2,
    designStyleId: 7
  },
  {
    username: "aliraza311",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/128798000/original/a549ba105384f2c57c470ed73316b2934a7f64bc.jpg",
    designTypeId: 2,
    designStyleId: 7
  },
  {
    username: "dungnguyen2705",
    priceStartFrom: 5,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/220542668/original/1a7577f348d09b80aaac86fd95b95e7a6e1a04fc.jpg",
    designTypeId: 2,
    designStyleId: 7
  },
  {
    username: "nizar86",
    priceStartFrom: 5,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/3115199/original/sketsa-5.jpg",
    designTypeId: 2,
    designStyleId: 7
  },
  {
    username: "asugardo",
    priceStartFrom: 5,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/218060542/original/8569d42eae84a5b2e68b615f3f071e3d41ab836b.jpg",
    designTypeId: 2,
    designStyleId: 7
  },
  {
    username: "morganphoont",
    priceStartFrom: 25,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs2/172227915/original/33aa4acdb2b642b78d6baa0790c320d08b0ca36e.jpg",
    designTypeId: 2,
    designStyleId: 7
  },
  {
    username: "vomf902",
    priceStartFrom: 5,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/214763731/original/b70b924c29dcd42c773791ce1ffab5f350de6fbf.jpeg",
    designTypeId: 2,
    designStyleId: 7
  },
  {
    username: "inna_sketches",
    priceStartFrom: 30,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/176322457/original/2921a796ff56ee674d64a216aabadeef86fe3cdd.jpeg",
    designTypeId: 2,
    designStyleId: 7
  },
  {
    username: "vaishali____",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/216032470/original/71c082c54b4b8709d59c561f6498b1b2e2dbd7aa.jpg",
    designTypeId: 2,
    designStyleId: 7
  },
  {
    username: "anouardjoua",
    priceStartFrom: 15,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/250125312/original/f0197b1f6098e45e6158a4979a5b474c5aa868bc.jpg",
    designTypeId: 2,
    designStyleId: 7
  },
  {
    username: "afshinaminiart",
    priceStartFrom: 75,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/240468900/original/5356e85db898b3ebd6b571bebc9068622233b4c5.jpg",
    designTypeId: 2,
    designStyleId: 7
  },
  {
    username: "metal_art",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/200571211/original/31c1f7149bee830bb2ff36e95d2db219a9f6c13a.jpg",
    designTypeId: 2,
    designStyleId: 7
  },
  {
    username: "valentinae4",
    priceStartFrom: 20,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/129706956/original/09dbfe709fd34d4ad484af4ecc4bb9bbc7101dfa.jpeg",
    designTypeId: 2,
    designStyleId: 7
  },
  {
    username: "isaiaspaz",
    priceStartFrom: 5,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/139764273/original/f2a92cb1a49cd56de550d68eca7b0bc71ef554a2.jpg",
    designTypeId: 2,
    designStyleId: 7
  },
  {
    username: "iniapink",
    priceStartFrom: 20,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/282005710/original/d6c55d7d1ea7e0eb31b1bed9857cdf8459dd02b8.png",
    designTypeId: 2,
    designStyleId: 7
  },
  {
    username: "bandara_art",
    priceStartFrom: 25,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/156886455/original/f9699f27ab06ffe934057a7407d41a4ce6628db4.jpg",
    designTypeId: 2,
    designStyleId: 7
  },
  {
    username: "zievonya",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/255152530/original/b4dc7ecc4fd5099fc7be869f49bd0e2fa1fb9023.png",
    designTypeId: 2,
    designStyleId: 7
  },
  {
    username: "gnewwws",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/107841684/original/a9ab422379463a657ee4c0941e4c93880262396b.jpg",
    designTypeId: 2,
    designStyleId: 7
  },
  {
    username: "rancvv1619",
    priceStartFrom: 5,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/245299309/original/4c717b6c51a622c53832609358794ef7a79ce425.jpg",
    designTypeId: 2,
    designStyleId: 7
  },
  {
    username: "a_architects",
    priceStartFrom: 35,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/200141529/original/c236815cf390362bf52b3507132d740f59202a5c.jpg",
    designTypeId: 2,
    designStyleId: 7
  },
  {
    username: "mansithafdo",
    priceStartFrom: 15,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/287314842/original/f02a66ecea71574d751782ba3522dabd1adbb1b1.jpg",
    designTypeId: 2,
    designStyleId: 7
  },
  {
    username: "andryawan",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/158511174/original/2e8a07cc7b53c956ea5104275331160be317f47b.jpg",
    designTypeId: 2,
    designStyleId: 7
  },
  {
    username: "shibasigma",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/255004873/original/3f6eafc40d5dfbd792b66f7f12e1f187f5eb6cb2.png",
    designTypeId: 2,
    designStyleId: 7
  },
  {
    username: "noman114",
    priceStartFrom: 5,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/247875639/original/30b77e108f6a718397bfcc8fc5f737f06c6ca27d.png",
    designTypeId: 2,
    designStyleId: 7
  },
  {
    username: "weerasingheindi",
    priceStartFrom: 15,
    imageUrl: "https://fiverr-res.cloudinary.com/video/upload/so_17.970624,t_gig_cards_web/pxzjhsf0vbwxxvtcsxmv.png",
    designTypeId: 2,
    designStyleId: 7
  },
  {
    username: "bokasana",
    priceStartFrom: 5,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/125889327/original/6ace43f4601705d3b4b795b66647c5e180774e97.png",
    designTypeId: 2,
    designStyleId: 7
  },
  {
    username: "adegraphics01",
    priceStartFrom: 5,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/222145226/original/9b310f5cb753bf82f60aedfdb59fba07ecaa7433.jpg",
    designTypeId: 2,
    designStyleId: 7
  },
  {
    username: "shubahmghonge",
    priceStartFrom: 20,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/145987872/original/8f8944c565fdb3547861c859681cf58ad82482c0.jpg",
    designTypeId: 2,
    designStyleId: 7
  },
  {
    username: "atacan97",
    priceStartFrom: 30,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/183318070/original/0d1d102adf8f9e98f2060edf7a50be0dc26663d8.jpg",
    designTypeId: 2,
    designStyleId: 7
  },
  {
    username: "soso112429",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/231945694/original/5c427db5c317f074cd25b46a93c3158357d1e91a.jpg",
    designTypeId: 2,
    designStyleId: 7
  },
  {
    username: "aleksandrsstavi",
    priceStartFrom: 15,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/195169362/original/d503fc709c08f0e8ff27116ab2ff4fb87ea18ada.jpg",
    designTypeId: 2,
    designStyleId: 7
  },
  {
    username: "drawingexpert_5",
    priceStartFrom: 30,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/209941877/original/04c04a3c9d08ea56636854ec03b29d8009305d63.jpg",
    designTypeId: 2,
    designStyleId: 7
  },
  {
    username: "cernnunosss",
    priceStartFrom: 15,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/221363574/original/fe8d5fa644ce6bf17a3aa3ea6b7b4aec5042826b.jpg",
    designTypeId: 2,
    designStyleId: 7
  },
  {
    username: "samiramakroum",
    priceStartFrom: 15,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/123321428/original/fc50d95e4a54873478f4748d298204f6a1db9a5c.jpg",
    designTypeId: 2,
    designStyleId: 7
  },
  {
    username: "extreeme33",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/203771422/original/80a738a9ed6e8282b4fee5a3ec4a5113771b4e32.jpg",
    designTypeId: 2,
    designStyleId: 7
  },
  {
    username: "imkraken",
    priceStartFrom: 35,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/280967727/original/787864faa5141b0a443086bff0a2a806625e4447.jpg",
    designTypeId: 2,
    designStyleId: 7
  },
  {
    username: "iwanttodrawnow",
    priceStartFrom: 40,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/196778654/original/f2d7390d4f75ce03904b1df747e96dfb289e15b4.jpg",
    designTypeId: 2,
    designStyleId: 7
  },
  {
    username: "artechneo",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/264679001/original/8dcc14d3dfc4803b041ae4820be45ac401ea1376.jpg",
    designTypeId: 2,
    designStyleId: 7
  },
  {
    username: "kissa23",
    priceStartFrom: 35,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/229446297/original/a7cc3d86e7ec65b0eb4f1d4e5e588f8efc9379cb.jpeg",
    designTypeId: 2,
    designStyleId: 7
  },
  {
    username: "konco",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/video/upload/t_gig_cards_web/xrhwu2jqwqbprciomjsk.png",
    designTypeId: 2,
    designStyleId: 7
  },
  {
    username: "mahardika_a_",
    priceStartFrom: 15,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/234657680/original/5fe2e90d0bc667224653cb9a8e6792c941cb20dd.png",
    designTypeId: 2,
    designStyleId: 7
  },
  {
    username: "alansyah",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/133286015/original/d666d0e309983c0700d3716f1459f92f01529a74.jpg",
    designTypeId: 2,
    designStyleId: 7
  },
  {
    username: "shiyukidraws",
    priceStartFrom: 5,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/254363458/original/c166af0fd048003d7ed741d51fc84d03034afa49.png",
    designTypeId: 2,
    designStyleId: 7
  },
  {
    username: "husainanwar25",
    priceStartFrom: 15,
    imageUrl: "https://fiverr-res.cloudinary.com/video/upload/t_gig_cards_web/krua7h9ge7thzdxtipst.png",
    designTypeId: 2,
    designStyleId: 7
  },
  {
    username: "mairys_jasel",
    priceStartFrom: 15,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/128936615/original/77b74f6bdf71a01b4c7add73303d6f4dc4fc614e.jpg",
    designTypeId: 2,
    designStyleId: 7
  },
  {
    username: "designers306",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/208156243/original/974f4b492db72d3e76fc8f3d30ed7f79e74369c7.jpg",
    designTypeId: 2,
    designStyleId: 7
  },
  {
    username: "nekosa0",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/232018220/original/19c3fdc5f52badedca0c2cf960d971eb8e78a326.jpg",
    designTypeId: 2,
    designStyleId: 7
  },
  {
    username: "midsketcher",
    priceStartFrom: 15,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/276055190/original/e1357ccecb5c2cf792644a3bdf0945d1d2927e12.png",
    designTypeId: 2,
    designStyleId: 7
  },
  {
    username: "v_garcia",
    priceStartFrom: 5,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/290551715/original/65772c11987fe25f6dfed442f56efe3805da0885.png",
    designTypeId: 2,
    designStyleId: 7
  },
  {
    username: "kristinekriko",
    priceStartFrom: 25,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/252205798/original/a9a75e518ce88a811f8b6f59689f189330e2ed85.jpg",
    designTypeId: 2,
    designStyleId: 7
  },
  {
    username: "moozart_studio",
    priceStartFrom: 30,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/249015755/original/8e0e1908e365b1ce959b60eea474565f818ee89e.jpg",
    designTypeId: 2,
    designStyleId: 7
  },
  {
    username: "digitalhandart",
    priceStartFrom: 5,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/111799952/original/4c24a358d8404e941466dd788ec171790759d185.jpg",
    designTypeId: 2,
    designStyleId: 7
  },
  {
    username: "gngaston",
    priceStartFrom: 25,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/261971826/original/b5c4d7ba1c382c33402b44f8abfba436eb0927ad.png",
    designTypeId: 2,
    designStyleId: 7
  },
  {
    username: "kokoan",
    priceStartFrom: 5,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/148040406/original/7a087a10af568b254f04b4f9ab4b49bffa792767.jpg",
    designTypeId: 2,
    designStyleId: 7
  },
  {
    username: "i_drawing",
    priceStartFrom: 15,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/242372744/original/bc79df060225a7684e1a7bbb6146ff4ca305f6fb.jpg",
    designTypeId: 2,
    designStyleId: 7
  },
  {
    username: "irvanramdani",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/114052209/original/853f323dc0a856cdb802717b7fe9d9cddd77da23.jpg",
    designTypeId: 2,
    designStyleId: 7
  },
  {
    username: "irinaclescenco",
    priceStartFrom: 125,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/177046964/original/e8ed994c5ff71389ecc7c782ca08860ad500dd9f.png",
    designTypeId: 2,
    designStyleId: 7
  },
  {
    username: "christyj27",
    priceStartFrom: 170,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/120323553/original/08cd4fe66689de1ea3c3310a7406cc82e052fa11.jpg",
    designTypeId: 2,
    designStyleId: 7
  },
  {
    username: "aleksandrafedor",
    priceStartFrom: 50,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/134141155/original/6b34779d78e99aad7124de06ae7cc151ed94add5.jpg",
    designTypeId: 2,
    designStyleId: 7
  },
  {
    username: "hawr50",
    priceStartFrom: 300,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/130871970/original/bdf81ab24b5d3ea17c95563741316ea96858eedc.png",
    designTypeId: 2,
    designStyleId: 7
  },
  {
    username: "igorolszewski27",
    priceStartFrom: 70,
    imageUrl: "https://fiverr-res.cloudinary.com/video/upload/t_gig_cards_web/srvyaietlmidzreg6mik.png",
    designTypeId: 2,
    designStyleId: 7
  },
  {
    username: "yeonjewely",
    priceStartFrom: 50,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/266029802/original/e5e002b3a2e70c3ffe0027ba8ac857bbbcec0fad.jpg",
    designTypeId: 2,
    designStyleId: 7
  },
  {
    username: "darkyrie",
    priceStartFrom: 80,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/136045766/original/e0bce9d5eae0cb1f698fe5e9126b6ac57da52d6c.jpg",
    designTypeId: 2,
    designStyleId: 7
  },
  {
    username: "anastasiia_os",
    priceStartFrom: 100,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/190074103/original/522568ca676ec4dcb67ac012bb0025eb145fe5d3.jpeg",
    designTypeId: 2,
    designStyleId: 7
  },
  {
    username: "unalanac",
    priceStartFrom: 45,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/177583290/original/ed74d6358782845e67991cad7a095b9c1b453ae1.jpg",
    designTypeId: 2,
    designStyleId: 7
  },
  {
    username: "junxiangy",
    priceStartFrom: 250,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/180601208/original/cca7ae4f0223202f2c077ef9caebcfb17f6f454f.jpg",
    designTypeId: 2,
    designStyleId: 7
  },
  {
    username: "agosgarabato",
    priceStartFrom: 120,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/226621758/original/362be9d4d549de4f22ab568a0c8f562c0c5145ed.jpg",
    designTypeId: 2,
    designStyleId: 7
  },
  {
    username: "lucagranai",
    priceStartFrom: 30,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/190390827/original/dbe8b8aa9f4bd838edadbb178353e3b34aed84a0.jpg",
    designTypeId: 2,
    designStyleId: 7
  },
  {
    username: "lorellein",
    priceStartFrom: 50,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/234365976/original/2ce8190156963e593fbe20dce43fb515202c787c.jpg",
    designTypeId: 2,
    designStyleId: 7
  },
  {
    username: "senrouk_arts",
    priceStartFrom: 50,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/151271808/original/81c08a3b0bd42babe1d79a6f1e3f0f50884b6006.jpg",
    designTypeId: 2,
    designStyleId: 7
  },
  {
    username: "mayoroptics",
    priceStartFrom: 50,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/211178604/original/34fb9cef2e1ea3bf3135c0a487dcb07a1c0df1ee.jpg",
    designTypeId: 2,
    designStyleId: 7
  },
  {
    username: "archdesignzz",
    priceStartFrom: 20,
    imageUrl: "https://fiverr-res.cloudinary.com/video/upload/so_17.674452,t_gig_cards_web/hico7rb7ih1on0ngsmfz.png",
    designTypeId: 2,
    designStyleId: 7
  },
  {
    username: "archstudio1",
    priceStartFrom: 20,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/13320014/original/a12439df0e98b3171f0748259389caec9a3043fc.jpg",
    designTypeId: 2,
    designStyleId: 7
  },
  {
    username: "worriedfool",
    priceStartFrom: 70,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/232901628/original/2e3861ed44f76512c743622e358079218e8fd027.jpeg",
    designTypeId: 2,
    designStyleId: 7
  },
  {
    username: "yozart",
    priceStartFrom: 35,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/130133716/original/a6c6887325585834f21731c6876122abdba444fe.jpg",
    designTypeId: 2,
    designStyleId: 7
  },
  {
    username: "bhagya_m",
    priceStartFrom: 25,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/154282163/original/1ae197ddcda5ae47873fc02085854cb4ac45ef50.jpg",
    designTypeId: 2,
    designStyleId: 7
  },
  {
    username: "josefinx3",
    priceStartFrom: 15,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/289398536/original/6c013ac0756078e29dc21659731f18c05ef5dcc9.png",
    designTypeId: 2,
    designStyleId: 7
  },
  {
    username: "bunnipie",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/240418469/original/c03733da28f30eebaf20aa0597b24febff285b21.png",
    designTypeId: 2,
    designStyleId: 7
  },
  {
    username: "sweeetbee",
    priceStartFrom: 25,
    imageUrl: "https://fiverr-res.cloudinary.com/video/upload/t_gig_cards_web/ehxhkyqwgqvy3qq7iiht.png",
    designTypeId: 2,
    designStyleId: 7
  },
  {
    username: "zuino0chi1",
    priceStartFrom: 5,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/219236332/original/f1997f10474236db71ec357e5aa89f6805e04d19.png",
    designTypeId: 2,
    designStyleId: 7
  },
  {
    username: "indraladrawing",
    priceStartFrom: 45,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/219206735/original/2ecac4a32bbc577aab8761c9546a1ae2e7bd6539.jpg",
    designTypeId: 2,
    designStyleId: 7
  },
  {
    username: "tatan_grinding",
    priceStartFrom: 15,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/213923527/original/b49fc6cb2464c1f766abc1cb1d3d805cd522f897.jpg",
    designTypeId: 2,
    designStyleId: 7
  },
  {
    username: "artjuli",
    priceStartFrom: 45,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/180787410/original/1333c8cd6397cf131ab1b20381c97d3f1413a566.jpg",
    designTypeId: 2,
    designStyleId: 7
  },
  {
    username: "yozart",
    priceStartFrom: 35,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/187944302/original/567d73df6b1c114d6f929937abe85aacca6ad42d.jpg",
    designTypeId: 2,
    designStyleId: 7
  },
  {
    username: "yozart",
    priceStartFrom: 45,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/131756222/original/8dcd5efd85bee35256a51f8892f539d9b1744e6a.jpg",
    designTypeId: 2,
    designStyleId: 7
  },
  {
    username: "mairys_jasel",
    priceStartFrom: 25,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/119848624/original/c5d682c9bbdaef94a6477a66a69b525bee5b213e.jpg",
    designTypeId: 2,
    designStyleId: 7
  },
  {
    username: "anyashch",
    priceStartFrom: 30,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/249042501/original/7b4401b095b16d770c46ed5f5d1894aa8322993e.jpg",
    designTypeId: 2,
    designStyleId: 7
  },
  {
    username: "iwanttodrawnow",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/229886872/original/a31a93b4ac6f00f22650b35f894cc0321ea103c3.jpg",
    designTypeId: 2,
    designStyleId: 7
  },
  {
    username: "elena_nazarova",
    priceStartFrom: 25,
    imageUrl: "https://fiverr-res.cloudinary.com/video/upload/t_gig_cards_web/uv48jdognankjgs18lfx.png",
    designTypeId: 2,
    designStyleId: 7
  },
  {
    username: "yozart",
    priceStartFrom: 35,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/223403440/original/e35e9858cce80d3fcd066f0b1bf4d453a56c353f.jpg",
    designTypeId: 2,
    designStyleId: 7
  },
  {
    username: "sudheekshaa",
    priceStartFrom: 15,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/156126498/original/4d215007e6cda23ea18cf421a31157194ee8d612.png",
    designTypeId: 2,
    designStyleId: 7
  },
  {
    username: "hafiz09987",
    priceStartFrom: 20,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/138321944/original/3577b7021df0932578b168e2fa18f8aea8619664.png",
    designTypeId: 2,
    designStyleId: 7
  },
  {
    username: "matteonigro",
    priceStartFrom: 50,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/175988248/original/d18a30c9e4c24add5920dc161ebb4a11db1e2b92.jpg",
    designTypeId: 2,
    designStyleId: 7
  },
  {
    username: "nimshan12",
    priceStartFrom: 30,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/150006954/original/18851b40a776e1c3feb98cd255878afff558fc16.jpg",
    designTypeId: 2,
    designStyleId: 7
  },
  {
    username: "laydakarabulut",
    priceStartFrom: 5,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/257331626/original/6e1cecf3f077669c8af1d51e1494da03f6d32f2b.jpeg",
    designTypeId: 2,
    designStyleId: 7
  },
  {
    username: "drkimdin",
    priceStartFrom: 30,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/219879687/original/065923d48eeb38bae20141b5dc7316647554ba38.png",
    designTypeId: 2,
    designStyleId: 7
  },
  {
    username: "artistrywings",
    priceStartFrom: 25,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/192161121/original/2956126108199e1680e4312e0c302b8708cebc2f.jpeg",
    designTypeId: 2,
    designStyleId: 7
  },
  {
    username: "iwanttodrawnow",
    priceStartFrom: 30,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/148504676/original/829279bcc96c0c5c198f9bf5cd991f49b75f6a22.jpg",
    designTypeId: 2,
    designStyleId: 7
  },
  {
    username: "moeenrajput_",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/190263927/original/3177f62fbbcd1116516b391c81e9f96b7906dbd9.jpg",
    designTypeId: 2,
    designStyleId: 7
  },
  {
    username: "hnmptr",
    priceStartFrom: 50,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/170350677/original/f42fa4f4416431ecbb1178fae9bb6cf8c4ab16fa.jpg",
    designTypeId: 2,
    designStyleId: 7
  },
  {
    username: "chuchazo",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/232300260/original/7d32bd816a674d48a315299131fed66115d11dec.jpg",
    designTypeId: 2,
    designStyleId: 7
  },
  {
    username: "alansyah",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/136620566/original/eb7644695a6f5858c4ccee6c979334441e35ca67.jpg",
    designTypeId: 2,
    designStyleId: 7
  },
  {
    username: "yozart",
    priceStartFrom: 35,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/130134120/original/4d98e1258dfb3c332d7daebe29c5f0b6018c1c31.jpg",
    designTypeId: 2,
    designStyleId: 7
  },
  {
    username: "artworkking",
    priceStartFrom: 25,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/6795367/original/TSHIRT.jpg",
    designTypeId: 2,
    designStyleId: 7
  },
  {
    username: "aanme91",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/118315006/original/cca56bb250aff395499598555ca45d798ec1b59e.jpg",
    designTypeId: 2,
    designStyleId: 7
  },
  {
    username: "radwin_hsu",
    priceStartFrom: 20,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/235670452/original/7016bc946769a8da7a69d769686b878900bbfc5e.jpg",
    designTypeId: 2,
    designStyleId: 7
  },
  {
    username: "username4656",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/196992463/original/bcbf0330a4f4c7286057214af05acde283d69a68.jpg",
    designTypeId: 2,
    designStyleId: 7
  },
  {
    username: "kid_kimono",
    priceStartFrom: 20,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs3/254678769/original/2f71511aac9f9c5d6251f9b1e4539dcfc034a642.jpg",
    designTypeId: 2,
    designStyleId: 7
  },
  {
    username: "marcotiberti",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/233220588/original/99456a76733a718194b280a697804877a080aa96.jpg",
    designTypeId: 2,
    designStyleId: 7
  },
  {
    username: "rizkypongdatu",
    priceStartFrom: 20,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/217906705/original/ec252cbb63683784d6f56667b9c7a3d5fe91b7d7.jpeg",
    designTypeId: 2,
    designStyleId: 7
  },
  {
    username: "galaartcome",
    priceStartFrom: 45,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/129301728/original/1d1e38c3f830e3d827a7660b402bce9bd26dcca9.jpg",
    designTypeId: 2,
    designStyleId: 7
  },
  {
    username: "asankabn",
    priceStartFrom: 25,
    imageUrl: "https://fiverr-res.cloudinary.com/video/upload/t_gig_cards_web/qt4kibqywvfikob0cabr.png",
    designTypeId: 2,
    designStyleId: 7
  },
  {
    username: "zahidpainter",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/248512361/original/02ff12d98595b0ae462bcbc8865201517a4058a0.jpg",
    designTypeId: 2,
    designStyleId: 7
  },
  {
    username: "jeanhinostroza2",
    priceStartFrom: 5,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/283269765/original/f7c1a24f96669f2c5eba3ab5e4cc50d2cf2bee14.jpg",
    designTypeId: 2,
    designStyleId: 7
  },
  {
    username: "hira4art",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/224187787/original/a2abfdb84502ba844bf2f3e3beb7881771d2bf95.jpg",
    designTypeId: 2,
    designStyleId: 7
  },
  {
    username: "hammadkarim7911",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/252815164/original/a6c0b56680b23dd3f1d09e9dfca3f4928bf9c666.png",
    designTypeId: 2,
    designStyleId: 7
  },
  {
    username: "tumpa01756",
    priceStartFrom: 15,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/234935297/original/ce815d70fd70e927faa68dfa2ae46d03aba2a7c9.jpg",
    designTypeId: 2,
    designStyleId: 7
  },
  {
    username: "bhagya_m",
    priceStartFrom: 25,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/174061699/original/acc545e1ed0a46be0aebca9fa85ba8a28d4bf84a.jpg",
    designTypeId: 2,
    designStyleId: 7
  },
  {
    username: "chaloupe",
    priceStartFrom: 15,
    imageUrl: "https://fiverr-res.cloudinary.com/video/upload/so_0.208658,t_gig_cards_web/e7fahfiwyy9ohfywawwe.png",
    designTypeId: 2,
    designStyleId: 7
  },
  {
    username: "najlakay",
    priceStartFrom: 15,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/44442949/original/ccce579fcb5d48d4ad2edd356676aef6e1a3f368.jpg",
    designTypeId: 2,
    designStyleId: 7
  },
  {
    username: "sibawaih",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/199130392/original/6bd5bbadb9f8d0301277ebdac2cb69454fcc7e12.jpg",
    designTypeId: 2,
    designStyleId: 7
  },
  {
    username: "anrilight",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/299375782/original/78a330cb4d1a16e30826ed39e11e2c9465506eaa.jpg",
    designTypeId: 2,
    designStyleId: 7
  },
  {
    username: "hawr50",
    priceStartFrom: 200,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/128124467/original/b3472b13007ce284d8d53edc904bcef8d9bb6d15.jpg",
    designTypeId: 2,
    designStyleId: 7
  },
  {
    username: "nikhilaanil",
    priceStartFrom: 25,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/196940884/original/f1e5b05d1dc352e5ce5b7038ed505475cee5d3d9.jpeg",
    designTypeId: 2,
    designStyleId: 8
  },
  {
    username: "masyhurizal",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/20057367/original/e391878ddda0cc8597a6226e10c2cc1c6219a279.jpg",
    designTypeId: 2,
    designStyleId: 8
  },
  {
    username: "ishanishan5",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/170978140/original/e769f04ad4ca79ae0247bb8b9cb776a09d60a9f2.jpg",
    designTypeId: 2,
    designStyleId: 8
  },
  {
    username: "cartoonizeart",
    priceStartFrom: 15,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/201204105/original/0e01962cfd2e48cac64c7df7fe21b1f9379f3d8e.jpg",
    designTypeId: 2,
    designStyleId: 8
  },
  {
    username: "oleksii94",
    priceStartFrom: 200,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/196830300/original/60b2345120a53647cc7407f10582023942572660.jpg",
    designTypeId: 2,
    designStyleId: 8
  },
  {
    username: "yellowcandies",
    priceStartFrom: 5,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/265103433/original/acdca94668b99a7fbe0c78843e203a185dea8a87.jpg",
    designTypeId: 2,
    designStyleId: 8
  },
  {
    username: "boryskuzenko",
    priceStartFrom: 25,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/199338507/original/6caa594aaa7f731c08809b373cdf517e8cbae7fe.jpg",
    designTypeId: 2,
    designStyleId: 8
  },
  {
    username: "garylarts",
    priceStartFrom: 5,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/3831552/original/f7ae589decb44c55f6e32de65cf08261487f2821.jpg",
    designTypeId: 2,
    designStyleId: 8
  },
  {
    username: "talehuntdesign",
    priceStartFrom: 15,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/244317901/original/78a8111acf786f68ba1c1c595d256bae17a454ae.jpg",
    designTypeId: 2,
    designStyleId: 8
  },
  {
    username: "gab_grafik",
    priceStartFrom: 15,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/248134406/original/2020708e37e647f48f53ad04c751a4055ad826da.png",
    designTypeId: 2,
    designStyleId: 8
  },
  {
    username: "crisshasart",
    priceStartFrom: 70,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/26882822/original/3c6db11d7649bff88a8b53b4de81675af8b6d041.jpg",
    designTypeId: 2,
    designStyleId: 8
  },
  {
    username: "samuelebs",
    priceStartFrom: 50,
    imageUrl: "https://fiverr-res.cloudinary.com/video/upload/so_27.858972,t_gig_cards_web/cvpoxpyymbmkhbugdynz.png",
    designTypeId: 2,
    designStyleId: 8
  },
  {
    username: "mulanjull",
    priceStartFrom: 30,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/251386522/original/bdc97af6476455fd4104b77866a2adad72695ce7.jpeg",
    designTypeId: 2,
    designStyleId: 8
  },
  {
    username: "keiko_reiko",
    priceStartFrom: 65,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/159012318/original/dfaa86f7f6d948af7da5125ff67e40ed855574e5.jpg",
    designTypeId: 2,
    designStyleId: 8
  },
  {
    username: "vhiente_std",
    priceStartFrom: 55,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/138353301/original/64d8f446e8b21d7388218b0cd079a2c579c49571.jpg",
    designTypeId: 2,
    designStyleId: 8
  },
  {
    username: "sasongkoanis",
    priceStartFrom: 30,
    imageUrl: "https://fiverr-res.cloudinary.com/video/upload/so_0.230992,t_gig_cards_web/ysxvvf03uqmdwpav9efc.png",
    designTypeId: 2,
    designStyleId: 8
  },
  {
    username: "gusan0",
    priceStartFrom: 60,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/263697576/original/76a874f64d88983275f0e270a5b73c20bc29f29a.jpg",
    designTypeId: 2,
    designStyleId: 8
  },
  {
    username: "alba1993",
    priceStartFrom: 15,
    imageUrl: "https://fiverr-res.cloudinary.com/video/upload/so_9.263334,t_gig_cards_web/mn5bg2likcse67muzrbp.png",
    designTypeId: 2,
    designStyleId: 8
  },
  {
    username: "rampungin",
    priceStartFrom: 30,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/142645773/original/d396767f9e2e773ed1a125baad0fd0962f54d2e8.jpg",
    designTypeId: 2,
    designStyleId: 8
  },
  {
    username: "artsuroo",
    priceStartFrom: 20,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/196663710/original/56c3b036558ca463297e1631a0c7302afe382eec.png",
    designTypeId: 2,
    designStyleId: 8
  },
  {
    username: "beebel",
    priceStartFrom: 35,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/204908758/original/c62bd90385525106c357bc79ff6830d35a35734e.jpg",
    designTypeId: 2,
    designStyleId: 8
  },
  {
    username: "angela_depaolis",
    priceStartFrom: 40,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/208341910/original/d1447d5c6d324c84a30e4c15907d069c41e3ca6f.jpg",
    designTypeId: 2,
    designStyleId: 8
  },
  {
    username: "ezemenendez",
    priceStartFrom: 80,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/223772591/original/fb857b76427737fcfe37ea9e5e3f5d6eadefe798.jpg",
    designTypeId: 2,
    designStyleId: 8
  },
  {
    username: "kitsunekei1",
    priceStartFrom: 40,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/24093132/original/50826abec42e928b633d5af0c686a23bbf7aa440.jpg",
    designTypeId: 2,
    designStyleId: 8
  },
  {
    username: "designsbyvic",
    priceStartFrom: 65,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/123058282/original/cbb6397debcab7b03d9f177dc701f3f13757806f.jpg",
    designTypeId: 2,
    designStyleId: 8
  },
  {
    username: "chocologicalart",
    priceStartFrom: 25,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/170534894/original/3b2594824389473bdd3deefeec1e4a66dc0b6925.jpg",
    designTypeId: 2,
    designStyleId: 8
  },
  {
    username: "fantasy_factory",
    priceStartFrom: 25,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/184802771/original/a28c1f9ba8aaaae56c4105f1159825618b832269.jpg",
    designTypeId: 2,
    designStyleId: 8
  },
  {
    username: "prodesign47",
    priceStartFrom: 20,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/16878154/original/3c0fd2bb5cc264207cb0365eb4f22b5f34844666.jpg",
    designTypeId: 2,
    designStyleId: 8
  },
  {
    username: "thunderderder",
    priceStartFrom: 60,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/239114752/original/8de02eba293d089377293d8f49bb6285634a8a54.jpg",
    designTypeId: 2,
    designStyleId: 8
  },
  {
    username: "aidedbinkie",
    priceStartFrom: 5,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/264693952/original/ff041397c3c6fdfe29e6a9285f975eff5963587a.png",
    designTypeId: 2,
    designStyleId: 8
  },
  {
    username: "inibudi_studio",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/148324929/original/971c813fb3592d335711c5193085391547367e6e.png",
    designTypeId: 2,
    designStyleId: 8
  },
  {
    username: "kitsunekei1",
    priceStartFrom: 60,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/24094417/original/f0bfabf864d2a925dc2d8cc10692ed2ec8a73616.jpg",
    designTypeId: 2,
    designStyleId: 8
  },
  {
    username: "farhannursahal",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/183170862/original/44f44d112bfae985d8f7043880ac76a3681300d7.jpg",
    designTypeId: 2,
    designStyleId: 8
  },
  {
    username: "miautasworkshop",
    priceStartFrom: 25,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/222718153/original/7d03ddc4bc1008765b5c3ec35408f66ab9f64473.png",
    designTypeId: 2,
    designStyleId: 8
  },
  {
    username: "spidericks",
    priceStartFrom: 15,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/227456874/original/c71162d96916bebaa3f792b54bf47577102ce1fe.jpg",
    designTypeId: 2,
    designStyleId: 8
  },
  {
    username: "souramine",
    priceStartFrom: 30,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/278843378/original/565d095550bc07a6ecdb68a8df7c6cc299df32e4.jpg",
    designTypeId: 2,
    designStyleId: 8
  },
  {
    username: "andch24",
    priceStartFrom: 30,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/109044158/original/c21acaf529f6a546fd8fe3b5cfea9b0d7ea1c8e9.jpg",
    designTypeId: 2,
    designStyleId: 8
  },
  {
    username: "sabzdunz",
    priceStartFrom: 15,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/208215677/original/9c38e190c5a2e8d516acfdc2e86749df18a3d3ed.jpg",
    designTypeId: 2,
    designStyleId: 8
  },
  {
    username: "ardhanipm",
    priceStartFrom: 5,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/232125733/original/7063b43f2013b16e47f18886e321334b390feb46.png",
    designTypeId: 2,
    designStyleId: 8
  },
  {
    username: "lovepixels",
    priceStartFrom: 15,
    imageUrl: "https://fiverr-res.cloudinary.com/video/upload/t_gig_cards_web/glivwwzherigsab9qcpq.png",
    designTypeId: 2,
    designStyleId: 8
  },
  {
    username: "stharana",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/151675297/original/434b19c7e63beb757009c408a5e18530e19ab335.jpg",
    designTypeId: 2,
    designStyleId: 8
  },
  {
    username: "siververis",
    priceStartFrom: 25,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/248686637/original/abf8dcab439f4120185bcfca7437b02073f792ff.jpg",
    designTypeId: 2,
    designStyleId: 8
  },
  {
    username: "vedace_",
    priceStartFrom: 5,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/245246619/original/994d7b0d4060b66a4377dadd770f512a2efe65b5.png",
    designTypeId: 2,
    designStyleId: 8
  },
  {
    username: "peachyyypie",
    priceStartFrom: 20,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/264356346/original/91a5074d1709600697601e483e44a3fac8866948.jpg",
    designTypeId: 2,
    designStyleId: 8
  },
  {
    username: "holejohn",
    priceStartFrom: 25,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/121057637/original/9deef5c534730d2c975029206740d14f4826ddb3.jpg",
    designTypeId: 2,
    designStyleId: 8
  },
  {
    username: "cartoond12",
    priceStartFrom: 20,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/136563218/original/a36571137e031407e059f44adba1c2475e887781.jpeg",
    designTypeId: 2,
    designStyleId: 8
  },
  {
    username: "firmanhatibu",
    priceStartFrom: 20,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/214704248/original/2ca9a0996bfd45fbb18eb9762c99813b8cb2e4f7.png",
    designTypeId: 2,
    designStyleId: 8
  },
  {
    username: "illustrate_vnzl",
    priceStartFrom: 40,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/86681781/original/c248c5f458f40187056a0197bcfdfceb57144235.png",
    designTypeId: 2,
    designStyleId: 8
  },
  {
    username: "galihwindu",
    priceStartFrom: 5,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/13765464/original/b69b5494646fd2f0337acb38bff1899910ee38a4.jpg",
    designTypeId: 2,
    designStyleId: 8
  },
  {
    username: "mariabirigui",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/225866324/original/9f599380bca7f4c918ca49de168d7d9c9efb8a6b.png",
    designTypeId: 2,
    designStyleId: 8
  },
  {
    username: "pigeonpi",
    priceStartFrom: 20,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/216689040/original/1afee1c52edc5009336bc5abf8eb062201f6e53f.jpg",
    designTypeId: 2,
    designStyleId: 8
  },
  {
    username: "bravebirdie",
    priceStartFrom: 35,
    imageUrl: "https://fiverr-res.cloudinary.com/video/upload/so_33.0221527,t_gig_cards_web/xzzfbufbvky7haz8qtkt.png",
    designTypeId: 2,
    designStyleId: 8
  },
  {
    username: "supersienar",
    priceStartFrom: 15,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/66862316/original/3c2c1cb18d10d7d0bb12fce167c14633a8b35c88.jpg",
    designTypeId: 2,
    designStyleId: 8
  },
  {
    username: "riantuk",
    priceStartFrom: 35,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/122700039/original/fb8ac5ccbbbf00fbd0ef88512ce7afd2af94935b.jpg",
    designTypeId: 2,
    designStyleId: 8
  },
  {
    username: "tamagonstudio",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/246009630/original/151ae4c5389934af4683451d5373f3d8a2d3f02e.jpg",
    designTypeId: 2,
    designStyleId: 8
  },
  {
    username: "tnhs_project",
    priceStartFrom: 15,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/131420405/original/d95e90df60a16cab0346ea8f5ed12e9db23f487e.jpg",
    designTypeId: 2,
    designStyleId: 8
  },
  {
    username: "damsonfox",
    priceStartFrom: 90,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/155476043/original/cec84cbb9c9e308cb0e6206fc6fe56928fe8190b.jpg",
    designTypeId: 2,
    designStyleId: 8
  },
  {
    username: "studiogenic",
    priceStartFrom: 5,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/234164924/original/3ef733ead776cbe70c39f77df55a802c1c28830f.jpg",
    designTypeId: 2,
    designStyleId: 8
  },
  {
    username: "meow_bug",
    priceStartFrom: 20,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/111219623/original/cf21637ea83ea57804a7f84bfa8c664ddcbbe6cd.jpg",
    designTypeId: 2,
    designStyleId: 8
  },
  {
    username: "zulfandesignart",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/148337906/original/e0072a950baceb147a44c68cd2dec2d0f5ac18ac.jpg",
    designTypeId: 2,
    designStyleId: 8
  },
  {
    username: "davroave",
    priceStartFrom: 5,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/166983735/original/c332e830caabab19986f0578d2d526de7a07e676.png",
    designTypeId: 2,
    designStyleId: 8
  },
  {
    username: "crayonshd",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/147605528/original/dedd950b11479c2395e3bd5551d271c95ddafba0.jpg",
    designTypeId: 2,
    designStyleId: 8
  },
  {
    username: "sweetmooart",
    priceStartFrom: 15,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/249245962/original/9cba560683c6f155e00416f4a7ec1c99d05d7c4c.jpg",
    designTypeId: 2,
    designStyleId: 8
  },
  {
    username: "irkurniadi",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/19086297/original/eb7732ddacb05aacc73c8da771caade492f6945f.jpg",
    designTypeId: 2,
    designStyleId: 8
  },
  {
    username: "awwibimr",
    priceStartFrom: 35,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/67316711/original/af8be08984ea0e8155e3d69870fe6ac11236be09.jpg",
    designTypeId: 2,
    designStyleId: 8
  },
  {
    username: "aanfatkhan",
    priceStartFrom: 20,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/135690502/original/7f3e0260aa5c99313fbd413c4cdc5f843ff80730.jpg",
    designTypeId: 2,
    designStyleId: 8
  },
  {
    username: "fluffynme",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/256049829/original/f54774b6461bd8dff14856df6eb06f1f81c8df9e.jpeg",
    designTypeId: 2,
    designStyleId: 8
  },
  {
    username: "mr_hand",
    priceStartFrom: 15,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/177099343/original/a61d984a2bd71342a0e84081fbde1d98dd33eaa2.jpg",
    designTypeId: 2,
    designStyleId: 8
  },
  {
    username: "kang_erfan",
    priceStartFrom: 5,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/228559277/original/4749f09eacc91003e84cd972af7a198fd5e4cd3c.jpg",
    designTypeId: 2,
    designStyleId: 8
  },
  {
    username: "henricus_er",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/289486402/original/2c421659068f95ddb7336614a34bf93b39ef4ef5.png",
    designTypeId: 2,
    designStyleId: 8
  },
  {
    username: "vilanpams",
    priceStartFrom: 5,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/202897971/original/c3a043ea8cbad3ea280ca7a67c5b4865b5c298d2.jpg",
    designTypeId: 2,
    designStyleId: 8
  },
  {
    username: "scorpydesign",
    priceStartFrom: 25,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/199101103/original/ba0b174b536dbdddc456be43e3f48edac26aeb6c.jpg",
    designTypeId: 2,
    designStyleId: 8
  },
  {
    username: "annaskytsko",
    priceStartFrom: 15,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/282752872/original/f9d15986448ad511cd37b495e3795564be153925.jpg",
    designTypeId: 2,
    designStyleId: 8
  },
  {
    username: "thesamds",
    priceStartFrom: 15,
    imageUrl: "https://fiverr-res.cloudinary.com/video/upload/t_gig_cards_web/cfi4qf0y0ht9mhplswha.png",
    designTypeId: 2,
    designStyleId: 8
  },
  {
    username: "dalim_artist",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/video/upload/so_2.24725,t_gig_cards_web/ftoukw8qnk53q2psawwh.png",
    designTypeId: 2,
    designStyleId: 8
  },
  {
    username: "infiniteh8pe",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/216839629/original/9a96b9cfbf23ad1b0c37b21e7a91a22f26c96bea.png",
    designTypeId: 2,
    designStyleId: 8
  },
  {
    username: "rizkichandra",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/215407784/original/5d73e3add22cc93271269ff766f6f4ba9a395d56.jpg",
    designTypeId: 2,
    designStyleId: 8
  },
  {
    username: "olegdovgan",
    priceStartFrom: 15,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/135756569/original/ad111afbe62db413890fb9677cf5f546244903c3.jpg",
    designTypeId: 2,
    designStyleId: 8
  },
  {
    username: "ryanprastian",
    priceStartFrom: 15,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/103893619/original/3a892e016a7c00f6680d7dbfee5d2e95ef72ba1f.jpg",
    designTypeId: 2,
    designStyleId: 8
  },
  {
    username: "dracorusterra",
    priceStartFrom: 25,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/224306789/original/a440c01f7848ec355bbdd84af4fdfc49ab9048a9.png",
    designTypeId: 2,
    designStyleId: 8
  },
  {
    username: "kyotan",
    priceStartFrom: 20,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/131426296/original/907771bcca4dcd761e46fc20892d28a37288c440.jpg",
    designTypeId: 2,
    designStyleId: 8
  },
  {
    username: "hedri2705",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/130778138/original/71853e3a41db762e8b8a5c292f5cf9e54ccc322a.jpg",
    designTypeId: 2,
    designStyleId: 8
  },
  {
    username: "vectorinaja",
    priceStartFrom: 5,
    imageUrl: "https://fiverr-res.cloudinary.com/video/upload/so_55.903594,t_gig_cards_web/r4e5owiyttt60lqjw8ws.png",
    designTypeId: 2,
    designStyleId: 8
  },
  {
    username: "violetdraw",
    priceStartFrom: 15,
    imageUrl: "https://fiverr-res.cloudinary.com/video/upload/t_gig_cards_web/w34pjfbi3m3mgr07evfp.png",
    designTypeId: 2,
    designStyleId: 8
  },
  {
    username: "megans_trainer",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/163410924/original/b411388d9a3fe6a46b62f476e6d1653592ed9d35.jpg",
    designTypeId: 2,
    designStyleId: 8
  },
  {
    username: "alukkart",
    priceStartFrom: 25,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/191423106/original/7ac0dbea1b06463c012c4c25a14e5815b21b102e.png",
    designTypeId: 2,
    designStyleId: 8
  },
  {
    username: "luccasolivart",
    priceStartFrom: 20,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/229981615/original/199e93ec37105915fe5af526854a0277dd353cd1.jpg",
    designTypeId: 2,
    designStyleId: 8
  },
  {
    username: "huram_abi",
    priceStartFrom: 5,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/174414139/original/788a310ce19847714ffcc82cf5d6deff002e4ba6.jpg",
    designTypeId: 2,
    designStyleId: 8
  },
  {
    username: "putra9292",
    priceStartFrom: 20,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/208755647/original/644694f34e033826df7b003793ac38eb67b958ff.png",
    designTypeId: 2,
    designStyleId: 8
  },
  {
    username: "neilkohney",
    priceStartFrom: 85,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/68262566/original/054331f9ca4bd42ba2143453548d29e3642c920c.jpg",
    designTypeId: 2,
    designStyleId: 8
  },
  {
    username: "lauracris",
    priceStartFrom: 75,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/136046375/original/6198ccefa269663a46198698ff423ff9c0fc7ebc.png",
    designTypeId: 2,
    designStyleId: 8
  },
  {
    username: "bocvana",
    priceStartFrom: 70,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/215958470/original/465397bc2e6c1d0b54ecab563a1cbc5def55e0b5.jpg",
    designTypeId: 2,
    designStyleId: 8
  },
  {
    username: "vivekart",
    priceStartFrom: 25,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/135967349/original/f8770fa104e9997be6dc5d8ad56d228eab20835e.jpg",
    designTypeId: 2,
    designStyleId: 8
  },
  {
    username: "helensanowo",
    priceStartFrom: 75,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/196710527/original/5074bdfc447fb8b5d1236293feaf9ccd9973a578.png",
    designTypeId: 2,
    designStyleId: 8
  },
  {
    username: "rafaelosales",
    priceStartFrom: 35,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/175646220/original/49f1888cebd4dc6a0042e1d5e1ca99de9bfc8488.jpg",
    designTypeId: 2,
    designStyleId: 8
  },
  {
    username: "oneeightthy",
    priceStartFrom: 55,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/113797653/original/027b086f5dc20b21c858a92305aaebf2b453fe3c.jpg",
    designTypeId: 2,
    designStyleId: 8
  },
  {
    username: "zamalmartian",
    priceStartFrom: 25,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/222785547/original/5be42ad768506c6551ebb3a3a59c2f208ebe3f87.jpg",
    designTypeId: 2,
    designStyleId: 8
  },
  {
    username: "ijulied",
    priceStartFrom: 65,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/168306902/original/b9aa4ae7e781257b5e742e9757c6ab36b10b1d75.png",
    designTypeId: 2,
    designStyleId: 8
  },
  {
    username: "sailorlun",
    priceStartFrom: 35,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/139844294/original/02a9acdab7ca3bf4d2716c5c5bfeb964a547c9d7.jpg",
    designTypeId: 2,
    designStyleId: 8
  },
  {
    username: "animorphic",
    priceStartFrom: 25,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/193251522/original/d080798fb30b684d4269e4830ff95ba1655f3c9e.jpeg",
    designTypeId: 2,
    designStyleId: 8
  },
  {
    username: "galilaweslywayn",
    priceStartFrom: 25,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/429955/original/023fb0d6eb9290a4a1cc5bdf2971bf284c57aa1b.jpg",
    designTypeId: 2,
    designStyleId: 8
  },
  {
    username: "albannastudios",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/video/upload/so_26.331429,t_gig_cards_web/zngw04bpgotmkwyljttt.png",
    designTypeId: 2,
    designStyleId: 8
  },
  {
    username: "treskiddos",
    priceStartFrom: 80,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/118384867/original/a580b06aa377299adfdee2db8e1eadd6a069db4f.jpg",
    designTypeId: 2,
    designStyleId: 8
  },
  {
    username: "nandafatimah",
    priceStartFrom: 5,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/274758885/original/a872ebc60cecb039df186f2e6377bac47470b443.png",
    designTypeId: 2,
    designStyleId: 8
  },
  {
    username: "lucartee",
    priceStartFrom: 25,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/256410862/original/a5ea40653a71b28b171043680ece1389bc20aaf5.png",
    designTypeId: 2,
    designStyleId: 8
  },
  {
    username: "kumotori",
    priceStartFrom: 15,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/190295898/original/80bac074821c9989c18a7180bfd0bf1a7c17af99.png",
    designTypeId: 2,
    designStyleId: 8
  },
  {
    username: "saffrongraphics",
    priceStartFrom: 15,
    imageUrl: "https://fiverr-res.cloudinary.com/video/upload/so_1.748036,t_gig_cards_web/gegvjohrgtcixhwy1o3t.png",
    designTypeId: 2,
    designStyleId: 8
  },
  {
    username: "rafaelosales",
    priceStartFrom: 70,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/175651032/original/162cd5d9a5e44de575e140afbbec5439b03601cb.jpg",
    designTypeId: 2,
    designStyleId: 8
  },
  {
    username: "shalock",
    priceStartFrom: 30,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/144135696/original/7c6a13c0ca2f57b182e5213c0df2670655f23acc.jpg",
    designTypeId: 2,
    designStyleId: 8
  },
  {
    username: "agraworks",
    priceStartFrom: 120,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/225292565/original/8c34dc62693c03ccb3fa0251158fc68ebe583bd3.jpg",
    designTypeId: 2,
    designStyleId: 8
  },
  {
    username: "clicky123",
    priceStartFrom: 15,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/164168369/original/f1e851127facebc5cf55b19c7d31ffa3871112b9.png",
    designTypeId: 2,
    designStyleId: 8
  },
  {
    username: "black_briar",
    priceStartFrom: 50,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/197582370/original/929cf6393efa0b66e3fc794db920bb31c81ad4c9.jpeg",
    designTypeId: 2,
    designStyleId: 8
  },
  {
    username: "dirokuvu",
    priceStartFrom: 65,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/256529876/original/64f32e44db3f46d68707d7b5996d754fdede58db.png",
    designTypeId: 2,
    designStyleId: 8
  },
  {
    username: "koranmerah",
    priceStartFrom: 5,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/211393178/original/99ab119ce65a98866029719fd1b9450441a02557.png",
    designTypeId: 2,
    designStyleId: 8
  },
  {
    username: "jorgeiracheta",
    priceStartFrom: 40,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/183144818/original/76023e3b429d086ed8b9bb7304ebe4aace415344.jpg",
    designTypeId: 2,
    designStyleId: 8
  },
  {
    username: "originilustrasi",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/296246882/original/add9dbf691a325792b93d14b6ac229939a28a066.jpg",
    designTypeId: 2,
    designStyleId: 8
  },
  {
    username: "k2vexel",
    priceStartFrom: 5,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/216962214/original/f28ab59fec01ef271a640a08f54d8a4d8204ead5.jpg",
    designTypeId: 2,
    designStyleId: 8
  },
  {
    username: "anastmeko",
    priceStartFrom: 25,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/284878769/original/5c65a092987e517a2a4ee0f85fa12d53c7f94a87.jpeg",
    designTypeId: 2,
    designStyleId: 8
  },
  {
    username: "so_close",
    priceStartFrom: 45,
    imageUrl: "https://fiverr-res.cloudinary.com/video/upload/so_5.187982,t_gig_cards_web/bsbgfuizkcibu1mrkmg8.png",
    designTypeId: 2,
    designStyleId: 8
  },
  {
    username: "ligermaws",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/151752822/original/3b2923914bf3ab275d0a267329d5ce6043a570d6.png",
    designTypeId: 2,
    designStyleId: 8
  },
  {
    username: "lufenas",
    priceStartFrom: 15,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/260679967/original/2afe941ecda16086a0f689808362dab2b5793796.png",
    designTypeId: 2,
    designStyleId: 8
  },
  {
    username: "arifsuseno",
    priceStartFrom: 40,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/233345271/original/4cdb4685f78712236320fe59f9205151b9d597f1.jpg",
    designTypeId: 2,
    designStyleId: 8
  },
  {
    username: "creepsandbabes",
    priceStartFrom: 50,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/134916071/original/4dca6dfbf935b9ba2a82a69cda743d72937cd591.jpg",
    designTypeId: 2,
    designStyleId: 8
  },
  {
    username: "keziaintan",
    priceStartFrom: 5,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/197930055/original/e9629f41d96297c104f248da01d804c82d2f9328.png",
    designTypeId: 2,
    designStyleId: 8
  },
  {
    username: "chrissy369",
    priceStartFrom: 50,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/281802282/original/38b116e5fa690d6ce1baa2797d831c6a98738265.jpeg",
    designTypeId: 2,
    designStyleId: 8
  },
  {
    username: "arugeru",
    priceStartFrom: 20,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/210571074/original/d4f7a7a1a046f7faca39f5b989064c5c0d58837a.png",
    designTypeId: 2,
    designStyleId: 8
  },
  {
    username: "kerribou",
    priceStartFrom: 50,
    imageUrl: "https://fiverr-res.cloudinary.com/video/upload/t_gig_cards_web/b6de8qmts9p73vt0lfe4.png",
    designTypeId: 2,
    designStyleId: 8
  },
  {
    username: "adraalhafid",
    priceStartFrom: 5,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/305971975/original/8e7723b2c9e8bdb2ab0f0030ea055304f98c4680.png",
    designTypeId: 2,
    designStyleId: 8
  },
  {
    username: "tom_shearman",
    priceStartFrom: 20,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/210984690/original/3d59ed7c4670cf95b4391331f33e182a41034642.png",
    designTypeId: 2,
    designStyleId: 8
  },
  {
    username: "archie90",
    priceStartFrom: 15,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/207217290/original/ba4d40a905d3c808212f31625bb2c1c357df525c.png",
    designTypeId: 2,
    designStyleId: 8
  },
  {
    username: "devonstore",
    priceStartFrom: 60,
    imageUrl: "https://fiverr-res.cloudinary.com/video/upload/so_71.253798,t_gig_cards_web/tj68rn7n7iiwwwdjonz2.png",
    designTypeId: 2,
    designStyleId: 8
  },
  {
    username: "aidmoon",
    priceStartFrom: 15,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/253744937/original/9f515fa486a7d711eb25013b4fb203496a9c12cd.jpg",
    designTypeId: 2,
    designStyleId: 8
  },
  {
    username: "illustrasyo",
    priceStartFrom: 5,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/200506523/original/9f297cff5ea93efd492ee22962eb74abcbb02119.jpg",
    designTypeId: 2,
    designStyleId: 8
  },
  {
    username: "aliciasalazar",
    priceStartFrom: 5,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/138534141/original/46ba281a1c0bf888490905436f725b41cf95651b.png",
    designTypeId: 2,
    designStyleId: 8
  },
  {
    username: "crosonat",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/242031221/original/8c63b2231b8b1ac6d6edaabb60100ec421818fd1.png",
    designTypeId: 2,
    designStyleId: 8
  },
  {
    username: "sabrinaaparicio",
    priceStartFrom: 15,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/159522455/original/df21406936c5c7e2d0b5a8fe85a2446a079f8533.jpg",
    designTypeId: 2,
    designStyleId: 8
  },
  {
    username: "ruangsore",
    priceStartFrom: 35,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/87774291/original/a57b23f162b6dcea01f32ada8cae542006a0006d.jpg",
    designTypeId: 2,
    designStyleId: 9
  },
  {
    username: "ahsandesigner2k",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/258615062/original/ad9838c52acb2c197dbcd4c002ef874a82dbc4c2.jpg",
    designTypeId: 2,
    designStyleId: 9
  },
  {
    username: "gungarya",
    priceStartFrom: 5,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/252352651/original/e897b916881a4ace4ae51ed758bfa1741c17b595.jpg",
    designTypeId: 2,
    designStyleId: 9
  },
  {
    username: "designontable",
    priceStartFrom: 5,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/168848034/original/8d3680d5a7309103de5fa3c56488705d3d653d5e.jpg",
    designTypeId: 2,
    designStyleId: 9
  },
  {
    username: "dvincentgomes",
    priceStartFrom: 550,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/143271214/original/ff03e95329e98c802a585531e740ae5f5566a732.jpg",
    designTypeId: 2,
    designStyleId: 9
  },
  {
    username: "yudhaadtyo",
    priceStartFrom: 5,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/125332143/original/817154badc19890fef1b4a3fb713c8dd52d57155.png",
    designTypeId: 2,
    designStyleId: 9
  },
  {
    username: "ariangga",
    priceStartFrom: 45,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/68101716/original/24b020361bf18231836ea2d5b0928b06c0d780d6.jpg",
    designTypeId: 2,
    designStyleId: 9
  },
  {
    username: "melvinmusanta",
    priceStartFrom: 65,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/206599349/original/3d4b61566229997bd41c8637bada92e997c30811.png",
    designTypeId: 2,
    designStyleId: 9
  },
  {
    username: "andsyah",
    priceStartFrom: 20,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/150455922/original/5aca1b216df1960166215af5723dc98896201a79.jpg",
    designTypeId: 2,
    designStyleId: 9
  },
  {
    username: "torasshuu",
    priceStartFrom: 35,
    imageUrl: "https://fiverr-res.cloudinary.com/video/upload/t_gig_cards_web/ccfchwi68w78gt3wk4nr.png",
    designTypeId: 2,
    designStyleId: 9
  },
  {
    username: "khushbofatima",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/222706940/original/f7e52b6c4b0e97d6d6d2d7fe7a800d3c1b19cae3.jpg",
    designTypeId: 2,
    designStyleId: 9
  },
  {
    username: "firmanhatibu",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/146268654/original/bf77ab9217f385de00c97e074f402aee5145268f.jpg",
    designTypeId: 2,
    designStyleId: 9
  },
  {
    username: "syndanendrea",
    priceStartFrom: 60,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/178982968/original/f8fe41692473847ae2c482f6dc224ebf7223840a.jpg",
    designTypeId: 2,
    designStyleId: 9
  },
  {
    username: "ipinchews",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/111911204/original/9736313fc70bb7f0594e47f433126fabc4d1adc1.jpg",
    designTypeId: 2,
    designStyleId: 9
  },
  {
    username: "felixtheaa",
    priceStartFrom: 5,
    imageUrl: "https://fiverr-res.cloudinary.com/video/upload/so_0.917381,t_gig_cards_web/xaukayfzcqfdldkm4fea.png",
    designTypeId: 2,
    designStyleId: 9
  },
  {
    username: "megaasellia",
    priceStartFrom: 45,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/217361132/original/92add53948e00be088ef9dccfc4d49135d1ecef0.jpg",
    designTypeId: 2,
    designStyleId: 9
  },
  {
    username: "realwpap",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/238147901/original/1aab465907fd401eb2da8423538dd0b0de4c99cf.jpg",
    designTypeId: 2,
    designStyleId: 9
  },
  {
    username: "mothrastudio",
    priceStartFrom: 20,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/149712518/original/5ca56f4643ccb9f49afd810a4750999bdf440f51.jpg",
    designTypeId: 2,
    designStyleId: 9
  },
  {
    username: "vaultboy467",
    priceStartFrom: 20,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/241302104/original/83508eebfbbf1ba1197bddfbef82ef5ca30a2bef.jpg",
    designTypeId: 2,
    designStyleId: 9
  },
  {
    username: "kenkuro_",
    priceStartFrom: 40,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/285418767/original/016b3ca774376d9eea0a95fed5a223042aeadd86.png",
    designTypeId: 2,
    designStyleId: 9
  },
  {
    username: "lanku07",
    priceStartFrom: 5,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/4016471/original/a3b6c00430692c6e26b5c091ebd156aa879965e3.jpg",
    designTypeId: 2,
    designStyleId: 9
  },
  {
    username: "mothrastudio",
    priceStartFrom: 40,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/139836219/original/c80b6493735da0bfb42d4f387702a6fa250bc5ba.jpg",
    designTypeId: 2,
    designStyleId: 9
  },
  {
    username: "bimantarah",
    priceStartFrom: 15,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/233302093/original/3b9c62afe3f8ff7ab301bb637678e6a18ffd416d.jpg",
    designTypeId: 2,
    designStyleId: 9
  },
  {
    username: "andrean_25",
    priceStartFrom: 15,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/262996796/original/f4354af7ab1e3153a22aea4c5cd94009e5186187.jpg",
    designTypeId: 2,
    designStyleId: 9
  },
  {
    username: "puffycurly_work",
    priceStartFrom: 15,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/250607392/original/b4196d2c38fac141e8c3421f26b8d5dca34da107.jpg",
    designTypeId: 2,
    designStyleId: 9
  },
  {
    username: "dooholigan",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/205039671/original/7aca368a13b26eec457288d07d769a6f1f099814.jpg",
    designTypeId: 2,
    designStyleId: 9
  },
  {
    username: "toyapethak",
    priceStartFrom: 5,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/148413598/original/e4a23fd3186566cc8fe3329d97d49a973ed2e301.jpg",
    designTypeId: 2,
    designStyleId: 9
  },
  {
    username: "mohalldi",
    priceStartFrom: 15,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/192253225/original/eb61bec4e085635d2459a8119b6449a004c85317.jpg",
    designTypeId: 2,
    designStyleId: 9
  },
  {
    username: "neonnow",
    priceStartFrom: 20,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/295648163/original/fa46561e9ec53b724edcfbdc39c2bd02c48f2372.png",
    designTypeId: 2,
    designStyleId: 9
  },
  {
    username: "redi_redcal",
    priceStartFrom: 15,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/292269028/original/67e00b0f7fa3c7643437ed7aea0ae9ed86103aac.png",
    designTypeId: 2,
    designStyleId: 9
  },
  {
    username: "komal__butt",
    priceStartFrom: 15,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/174621896/original/d580e73138e8ff84673409774802d436e38a1c5f.jpg",
    designTypeId: 2,
    designStyleId: 9
  },
  {
    username: "guardianboyy",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/270932073/original/7c21130e6dc508ba6c9f7fdedd8340549d2f9478.jpeg",
    designTypeId: 2,
    designStyleId: 9
  },
  {
    username: "and3cl",
    priceStartFrom: 45,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/241114891/original/527d95a8d75d34c4bede13b993b0c338a185be08.jpg",
    designTypeId: 2,
    designStyleId: 9
  },
  {
    username: "gajahnakal",
    priceStartFrom: 35,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/106895549/original/e6d91521772f3109766228400305c3881fa6ee63.jpg",
    designTypeId: 2,
    designStyleId: 9
  },
  {
    username: "dvincentgomes",
    priceStartFrom: 550,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/132097609/original/aeb71a23505ef2ad6c8def7879ea01276aeaee49.png",
    designTypeId: 2,
    designStyleId: 9
  },
  {
    username: "sirakiwiri",
    priceStartFrom: 65,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/248697494/original/b53cb2c543ee1e076f1213c4a759859643f7ce8a.png",
    designTypeId: 2,
    designStyleId: 9
  },
  {
    username: "jfrico",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/281350417/original/a4f2b8ce9fbde1ebe946a3837d93221223683a3e.png",
    designTypeId: 2,
    designStyleId: 9
  },
  {
    username: "sajaklamodesign",
    priceStartFrom: 25,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/138310580/original/78aa17234e077c5272f83feab769376cd36f8372.jpg",
    designTypeId: 2,
    designStyleId: 9
  },
  {
    username: "melvinmusanta",
    priceStartFrom: 120,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/131298784/original/aad831ed8164126420d3b1229d2a5f866c9b671b.png",
    designTypeId: 2,
    designStyleId: 9
  },
  {
    username: "toothless22",
    priceStartFrom: 5,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/129160031/original/7e472e73c9de156a0a56a621e25def59e4df0d56.jpg",
    designTypeId: 2,
    designStyleId: 9
  },
  {
    username: "sirakiwiri",
    priceStartFrom: 65,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/245188224/original/97379a2455a3e945ccfde5c4578e6a5994337180.png",
    designTypeId: 2,
    designStyleId: 9
  },
  {
    username: "dvincentgomes",
    priceStartFrom: 550,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/127649325/original/b326e48c7e87e98b7b858c9045bb4fd283650f69.jpg",
    designTypeId: 2,
    designStyleId: 9
  },
  {
    username: "lamarastudio",
    priceStartFrom: 5,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/286164212/original/b05f76aa4318301946826586d370b8da1d926f8a.png",
    designTypeId: 2,
    designStyleId: 9
  },
  {
    username: "blackpillgh",
    priceStartFrom: 15,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/294928094/original/7bea41de98061268f6fbe4f8a34540645f9fd425.jpg",
    designTypeId: 2,
    designStyleId: 9
  },
  {
    username: "balen_varrios",
    priceStartFrom: 20,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/313326399/original/6561798bc6aa0864f214a16dc7ec5972e2397583.jpg",
    designTypeId: 2,
    designStyleId: 9
  },
  {
    username: "ericabortoloso",
    priceStartFrom: 220,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/271464015/original/4991d34146b40f4639ac85a84240f276825b3efa.png",
    designTypeId: 2,
    designStyleId: 9
  },
  {
    username: "eduardoquiles",
    priceStartFrom: 25,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/280946122/original/2a90954ecda8a17b418062f651b403ac8d6e5a00.png",
    designTypeId: 2,
    designStyleId: 9
  },
  {
    username: "lamarastudio",
    priceStartFrom: 5,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/286236802/original/787dd98a0988c9e832a5110632d208f3f9a89c86.jpg",
    designTypeId: 2,
    designStyleId: 9
  },
  {
    username: "lamarastudio",
    priceStartFrom: 5,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/286236802/original/787dd98a0988c9e832a5110632d208f3f9a89c86.jpg",
    designTypeId: 2,
    designStyleId: 9
  },
  {
    username: "gmt_option1",
    priceStartFrom: 20,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/300133026/original/15ce564f2cbbc502b4b238c2563f9e150622162c.png",
    designTypeId: 2,
    designStyleId: 9
  },
  {
    username: "rebecamarsan",
    priceStartFrom: 5,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/167574903/original/0d8236ab9a6b4a618da2308380628cbc347e83b4.jpg",
    designTypeId: 2,
    designStyleId: 9
  },
  {
    username: "treskiddos",
    priceStartFrom: 120,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/247517804/original/a35ef119ef847036d16b71cb16e9dd00a42a7991.jpg",
    designTypeId: 2,
    designStyleId: 9
  },
  {
    username: "catherinepaiano",
    priceStartFrom: 100,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/149351064/original/f68fbdf66fde7093d9110ba0a2c7a0a936b0e5c3.jpg",
    designTypeId: 2,
    designStyleId: 9
  },
  {
    username: "melvinmusanta",
    priceStartFrom: 110,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/196585169/original/eb51b59c9af13b2e9491f14650d1c5dd10d8d309.png",
    designTypeId: 2,
    designStyleId: 9
  },
  {
    username: "zeeb_princess",
    priceStartFrom: 70,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/238137452/original/2c3554ed41c9435373b15c871c3f9b1633804aaf.png",
    designTypeId: 2,
    designStyleId: 9
  },
  {
    username: "artchtho",
    priceStartFrom: 80,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/175971001/original/758f0c0f6e02e25a78c48be103965d0c9f5c14aa.png",
    designTypeId: 2,
    designStyleId: 9
  },
  {
    username: "norn_art",
    priceStartFrom: 35,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/198387384/original/ac115e607906174567fef0ff92b02d8b8352b529.jpg",
    designTypeId: 2,
    designStyleId: 9
  },
  {
    username: "herusuofficial",
    priceStartFrom: 95,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/81675441/original/56320e54c096ccd69ea7e9893299d94bba1b4b63.jpg",
    designTypeId: 2,
    designStyleId: 9
  },
  {
    username: "ariangga",
    priceStartFrom: 45,
    imageUrl: "https://fiverr-res.cloudinary.com/video/upload/t_gig_cards_web/mjbagqfwensv5qtz8eup.png",
    designTypeId: 2,
    designStyleId: 9
  },
  {
    username: "harsimran73",
    priceStartFrom: 170,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/155763030/original/00eed04038523fc9d242930ebc0c62de3ccaa2c9.jpg",
    designTypeId: 2,
    designStyleId: 9
  },
  {
    username: "howveryretro",
    priceStartFrom: 35,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/163879410/original/8f7731d06b19b33b0b63e2c98bc63221059b74fa.jpg",
    designTypeId: 2,
    designStyleId: 9
  },
  {
    username: "syndanendrea",
    priceStartFrom: 50,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/178973399/original/61de6389e35272d0fb5ceb0670861c185e510654.jpg",
    designTypeId: 2,
    designStyleId: 9
  },
  {
    username: "footmarkstudio",
    priceStartFrom: 20,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/217343173/original/8a410fb2860966481e6d1370dfc179d9139ec3d1.jpg",
    designTypeId: 2,
    designStyleId: 9
  },
  {
    username: "introvertikal",
    priceStartFrom: 35,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/144162014/original/5343801fc46c5fa271731311efc731a5f2b26a3c.jpg",
    designTypeId: 2,
    designStyleId: 9
  },
  {
    username: "klasikohero",
    priceStartFrom: 30,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/248476496/original/5658d63b33b84a95658ebe29fd09e2fe172815c2.jpeg",
    designTypeId: 2,
    designStyleId: 9
  },
  {
    username: "altsam19",
    priceStartFrom: 50,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/80289911/original/b7452e44f822df718a150e257d5041cf8048dc95.png",
    designTypeId: 2,
    designStyleId: 9
  },
  {
    username: "samycartman",
    priceStartFrom: 80,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/219594579/original/5978f82465bf45c430133e925cce43940c51e20d.jpg",
    designTypeId: 2,
    designStyleId: 9
  },
  {
    username: "dafinaasllani",
    priceStartFrom: 55,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/240630084/original/8a156c75f5c4bf8f612813ce4bdea26e1e3f3d1f.jpg",
    designTypeId: 2,
    designStyleId: 9
  },
  {
    username: "oceland",
    priceStartFrom: 50,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/202128497/original/402c096c354686f178c6816284723266aeff2496.jpg",
    designTypeId: 2,
    designStyleId: 9
  },
  {
    username: "degeha",
    priceStartFrom: 20,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/142377928/original/21f16816553069670bd8dadbb91a632766887d60.jpeg",
    designTypeId: 2,
    designStyleId: 9
  },
  {
    username: "dopers_project",
    priceStartFrom: 15,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/252888399/original/c78a3b0f17abe17ca6b2bd1bca41f755f22b5c91.jpg",
    designTypeId: 2,
    designStyleId: 9
  },
  {
    username: "driopeproject",
    priceStartFrom: 20,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/219693292/original/36064345f3420261c306223e9d2460d09d96bb59.jpeg",
    designTypeId: 2,
    designStyleId: 9
  },
  {
    username: "mohalldi",
    priceStartFrom: 70,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/157324672/original/541a470ae2a15d03cd3cf903c701e16936f550c5.jpg",
    designTypeId: 2,
    designStyleId: 9
  },
  {
    username: "artmazigh",
    priceStartFrom: 50,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/227049303/original/030d71b10ce04b2d9de01b68906620494193639f.jpg",
    designTypeId: 2,
    designStyleId: 9
  },
  {
    username: "anugroho",
    priceStartFrom: 50,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/219037168/original/40beac5b0c401850892042623a758f069b0b54fc.jpeg",
    designTypeId: 2,
    designStyleId: 9
  },
  {
    username: "andryknw",
    priceStartFrom: 50,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/247113566/original/f3bc8538ef9aa262ea480c4e2113caecbde1746d.jpg",
    designTypeId: 2,
    designStyleId: 9
  },
  {
    username: "bwanadevilart",
    priceStartFrom: 80,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/253258693/original/880af4a97f92c9111ee146b38f03ff88d3b1a0b3.jpg",
    designTypeId: 2,
    designStyleId: 9
  },
  {
    username: "milicamonaj",
    priceStartFrom: 75,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/195373738/original/9beedd4384297bed8c7a54d5481820a6c5c7a5ee.png",
    designTypeId: 2,
    designStyleId: 9
  },
  {
    username: "harlandier",
    priceStartFrom: 40,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/194678037/original/6dcfdbef1405ef7fa75a3a0927dcd6d80152d6cd.jpg",
    designTypeId: 2,
    designStyleId: 9
  },
  {
    username: "finnwang",
    priceStartFrom: 200,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/183262911/original/7454ea178f46f4cf5076f39bbc1344c8051edb6c.jpg",
    designTypeId: 2,
    designStyleId: 9
  },
  {
    username: "zhijiexu",
    priceStartFrom: 150,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/185437541/original/b6d510ea62a2ab1eb88c339ebef71f997727b437.jpg",
    designTypeId: 2,
    designStyleId: 9
  },
  {
    username: "sasongkoanis",
    priceStartFrom: 40,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/144781607/original/a636a940e3fbb7281d69fed2a252d6947d1c1285.png",
    designTypeId: 2,
    designStyleId: 9
  },
  {
    username: "mhdk_123",
    priceStartFrom: 25,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/200553115/original/8924821a47f3acf2f91c40ae55bb19b6fc9a1f6e.jpeg",
    designTypeId: 2,
    designStyleId: 9
  },
  {
    username: "edwardaxl",
    priceStartFrom: 30,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/200321033/original/57d323b79bf15b31cce0856fc00686fa7c9096cf.jpeg",
    designTypeId: 2,
    designStyleId: 9
  },
  {
    username: "asmorojati",
    priceStartFrom: 20,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/146263935/original/cae169ac41583bfa2423438ce1883438c2108e35.jpg",
    designTypeId: 2,
    designStyleId: 9
  },
  {
    username: "dsbeon",
    priceStartFrom: 25,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/139731946/original/fc0abb2974ba71eb94a9ed94fbcaf451b368bb0c.jpg",
    designTypeId: 2,
    designStyleId: 9
  },
  {
    username: "jero0601",
    priceStartFrom: 20,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/263886071/original/a4d4b8efbddae281037716328523f23275b438f3.jpg",
    designTypeId: 2,
    designStyleId: 9
  },
  {
    username: "slicedbaecon",
    priceStartFrom: 35,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/203248174/original/650c1f349320de09f7a3f5365b1e65a89b946443.png",
    designTypeId: 2,
    designStyleId: 9
  },
  {
    username: "unviz3d",
    priceStartFrom: 50,
    imageUrl: "https://fiverr-res.cloudinary.com/video/upload/t_gig_cards_web/e3vjbcmmpmxn8dj5uqtr.png",
    designTypeId: 2,
    designStyleId: 9
  },
  {
    username: "jericbastillo",
    priceStartFrom: 20,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/122135715/original/abd5053462f2350b84419dc0ec9be8c8209bab36.png",
    designTypeId: 2,
    designStyleId: 9
  },
  {
    username: "seeget",
    priceStartFrom: 30,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/213970503/original/9e213a8bb67922a46683a85f135489a046236564.jpg",
    designTypeId: 2,
    designStyleId: 9
  },
  {
    username: "sarkasprojek",
    priceStartFrom: 20,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/174535911/original/1f20ab37a59374b7e60d42f79b0f24449cd4a4ad.png",
    designTypeId: 2,
    designStyleId: 9
  },
  {
    username: "canrodri84",
    priceStartFrom: 40,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/206801123/original/2848e496e58914b051787cdb010b2506b7465ced.png",
    designTypeId: 2,
    designStyleId: 9
  },
  {
    username: "yeperosario",
    priceStartFrom: 15,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/160978530/original/15958e8701120fec854fcf1efe848cb4543d0638.jpg",
    designTypeId: 2,
    designStyleId: 9
  },
  {
    username: "renaldy23",
    priceStartFrom: 15,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/199904282/original/cb618afe72649a6a5564aa5c5d964836bce1c23a.jpg",
    designTypeId: 2,
    designStyleId: 9
  },
  {
    username: "mothrastudio",
    priceStartFrom: 20,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/139684845/original/24197afafd64c8e27da98d0d9a91dd9cf65f2996.jpg",
    designTypeId: 2,
    designStyleId: 9
  },
  {
    username: "benlee243",
    priceStartFrom: 50,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/147025677/original/626230cc1a2e7e4010d615ca77b758233637888b.jpg",
    designTypeId: 2,
    designStyleId: 9
  },
  {
    username: "galihwis",
    priceStartFrom: 15,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/222547498/original/f446be9dc787739b68dd39934adc6976c04d85ef.jpg",
    designTypeId: 2,
    designStyleId: 9
  },
  {
    username: "dzoy1409",
    priceStartFrom: 50,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/210755980/original/01ab852f9cc11755bca530791ac3d051fc115e0e.jpg",
    designTypeId: 2,
    designStyleId: 9
  },
  {
    username: "wawans718",
    priceStartFrom: 30,
    imageUrl: "https://fiverr-res.cloudinary.com/video/upload/t_gig_cards_web/scb8132s6x029e6sl9la.png",
    designTypeId: 2,
    designStyleId: 9
  },
  {
    username: "reenaldisatria",
    priceStartFrom: 50,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/190614210/original/57db640f5dfc584ac77e1bf64de52fa78eeec267.jpg",
    designTypeId: 2,
    designStyleId: 9
  },
  {
    username: "pupungoktavian",
    priceStartFrom: 15,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/181053091/original/05aaf0b900b3cf5bfb5eeb1ea95801afe4aa363c.jpg",
    designTypeId: 2,
    designStyleId: 9
  },
  {
    username: "ilhamkholfi",
    priceStartFrom: 15,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/190089826/original/c8fa2fefb8db5e6e1309546470c53e3988791432.jpg",
    designTypeId: 2,
    designStyleId: 9
  },
  {
    username: "patriajasa",
    priceStartFrom: 25,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/278263299/original/c9729624add6668e53e965a61c29554995a84a68.jpg",
    designTypeId: 2,
    designStyleId: 9
  },
  {
    username: "adahn19",
    priceStartFrom: 15,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/144854828/original/85b0b57e7e562607b63a34cf5fd11d0de80d645f.jpg",
    designTypeId: 2,
    designStyleId: 9
  },
  {
    username: "charlyanimator",
    priceStartFrom: 30,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/241993801/original/68f5c1777aab1a6c55a3ccb64c2bcc5aa332db26.jpg",
    designTypeId: 2,
    designStyleId: 9
  },
  {
    username: "muhikhwannur",
    priceStartFrom: 15,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/132120387/original/966cbea29336175f962dc5a9494a00a235497ed6.jpg",
    designTypeId: 2,
    designStyleId: 9
  },
  {
    username: "mouya_",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/215362979/original/0f7918602e11744387d8f301065f77a276d3a22b.png",
    designTypeId: 2,
    designStyleId: 9
  },
  {
    username: "jackfi_",
    priceStartFrom: 30,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/179137224/original/8c4cdebce606300e31a7da2c01b736fd74704571.jpeg",
    designTypeId: 2,
    designStyleId: 9
  },
  {
    username: "uriefmaulana",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/127200019/original/f0c0e90313698fa22660440cedfd032644772f04.jpg",
    designTypeId: 2,
    designStyleId: 9
  },
  {
    username: "the_ayankz",
    priceStartFrom: 15,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/210629023/original/30a903ae65314de4b241d9ca5ee25fe9282abb3a.jpg",
    designTypeId: 2,
    designStyleId: 9
  },
  {
    username: "trebold",
    priceStartFrom: 45,
    imageUrl: "https://fiverr-res.cloudinary.com/video/upload/t_gig_cards_web/dimm1b7ppttissdzecd9.png",
    designTypeId: 2,
    designStyleId: 9
  },
  {
    username: "mohyr99",
    priceStartFrom: 15,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs2/228157429/original/440c468ed66736e8ecfce23859bc3e16c56bb48a.jpg",
    designTypeId: 2,
    designStyleId: 9
  },
  {
    username: "kresstudio",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/207796464/original/442a4c3985db6476e59b47446c458061fa8f53b2.jpg",
    designTypeId: 2,
    designStyleId: 9
  },
  {
    username: "apokalips__",
    priceStartFrom: 20,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/239028865/original/949cee9d7ec39cc4212850b0d77272d6a9c2ea36.png",
    designTypeId: 2,
    designStyleId: 9
  },
  {
    username: "adamkhabibi",
    priceStartFrom: 80,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/150020915/original/843925498f2c8b88def9cd2d550d863810c0ebcf.png",
    designTypeId: 2,
    designStyleId: 9
  },
  {
    username: "amertacan",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/147906197/original/e9838a279d5a9eddbb01f28b1f997c980e1e1ee9.jpg",
    designTypeId: 2,
    designStyleId: 9
  },
  {
    username: "purplecubeart",
    priceStartFrom: 45,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/177526850/original/8d3b6134ced48514d3b2e82eb202ade59da2f449.jpg",
    designTypeId: 2,
    designStyleId: 9
  },
  {
    username: "madusena",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/265717888/original/3cae760f2dfa44e1235578cb7a5c98baf752fa3a.jpeg",
    designTypeId: 2,
    designStyleId: 9
  },
  {
    username: "emzanauvaldi",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/235752936/original/76bcc8853285a8c33de092e860fdb984a96fd430.jpg",
    designTypeId: 2,
    designStyleId: 9
  },
  {
    username: "lalabdigitals",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/295990219/original/ee6dadcc294df9c86cf18bb4086d02b32cb45068.jpg",
    designTypeId: 2,
    designStyleId: 9
  },
  {
    username: "gigikukuk_std",
    priceStartFrom: 30,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/225810470/original/272a303fb450279a437d96039402b1454bc2d83a.png",
    designTypeId: 2,
    designStyleId: 9
  },
  {
    username: "rifqikurniawan2",
    priceStartFrom: 5,
    imageUrl: "https://fiverr-res.cloudinary.com/video/upload/t_gig_cards_web/oy71w2jfqsktwrurvu8z.png",
    designTypeId: 2,
    designStyleId: 9
  },
  {
    username: "mulaiajadulu",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/143924860/original/dbee7b44c04e6140967725a63807493ef8783a27.jpg",
    designTypeId: 2,
    designStyleId: 9
  },
  {
    username: "qoqo_graphic",
    priceStartFrom: 35,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/139606656/original/8b3916cd5437317fc4687dc4e1389318faafff31.png",
    designTypeId: 2,
    designStyleId: 9
  },
  {
    username: "ndashmu94",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/182367261/original/a508826fc5a77fa4a6de83404eb604e6644169e1.jpg",
    designTypeId: 2,
    designStyleId: 9
  },
  {
    username: "bernartdigital",
    priceStartFrom: 5,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/214966031/original/60be97a5428e1b7da79edfafc25955365535eb8b.jpg",
    designTypeId: 2,
    designStyleId: 9
  },
  {
    username: "armanrchmn",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/213885176/original/15ce34441227ba9d883b64c3a1fd0848596a5c41.jpg",
    designTypeId: 2,
    designStyleId: 9
  },
  {
    username: "svexels",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/274071012/original/d8c28c98ed9f7a3e97a66bec77410403408dba85.jpg",
    designTypeId: 2,
    designStyleId: 9
  },
  {
    username: "gdrldesign",
    priceStartFrom: 25,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/276687782/original/e6015c7f078282d29f683ec9dfd6b0ee7e2248de.jpg",
    designTypeId: 2,
    designStyleId: 9
  },
  {
    username: "myxp01",
    priceStartFrom: 15,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/233143139/original/5379448d724fa97f9ef7b142c1b28d5ddcb9c70b.jpg",
    designTypeId: 2,
    designStyleId: 9
  },
  {
    username: "comabogbog",
    priceStartFrom: 15,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/300266129/original/f8c149ec5d3db8103b938a6868470b6bea90e13f.jpg",
    designTypeId: 2,
    designStyleId: 9
  },
  {
    username: "solid_style",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/4950977/original/6ab07f67e50ed445083cc270d2ae978385f75078.png",
    designTypeId: 2,
    designStyleId: 9
  },
  {
    username: "im_wajahat",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/299475333/original/5189b6c4d5f20585161d5d90306dd076b10389d3.jpg",
    designTypeId: 2,
    designStyleId: 9
  },
  {
    username: "mohalldi",
    priceStartFrom: 70,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/145585379/original/f56688bba92e26a3cb0a1c6be93de324a90da4e2.jpg",
    designTypeId: 2,
    designStyleId: 9
  },
  {
    username: "indiramay99",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/263285469/original/8831c425243881a23669e6f03ffbb276b62146fe.jpg",
    designTypeId: 2,
    designStyleId: 9
  },
  {
    username: "condropriyoaji",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/132578980/original/e5b5c126e7033877cad1187b38d3202fc9103074.jpg",
    designTypeId: 2,
    designStyleId: 9
  },
  {
    username: "galihanggit",
    priceStartFrom: 20,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/216666712/original/5a1f851046e96b1967ae60a3c83613f820df1b03.png",
    designTypeId: 2,
    designStyleId: 9
  },
  {
    username: "frendydesign",
    priceStartFrom: 20,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/199907058/original/e2502ed3bb93c7a197980778c03ce9be282be4f0.jpg",
    designTypeId: 2,
    designStyleId: 9
  },
  {
    username: "leigh_seinfeld",
    priceStartFrom: 30,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/279313535/original/06793ea19f2c42a6f10e454930d813c5d2f52b6f.jpg",
    designTypeId: 2,
    designStyleId: 9
  },
  {
    username: "adde_ir",
    priceStartFrom: 5,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/173876896/original/dfa0bb5af2760692eb02614c88f861c546c3c1f1.jpg",
    designTypeId: 2,
    designStyleId: 9
  },
  {
    username: "emkeystudio",
    priceStartFrom: 5,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/209037970/original/0605469c1a028e9991810499a16fec6efccf6fa9.jpg",
    designTypeId: 2,
    designStyleId: 10
  },
  {
    username: "carzalas",
    priceStartFrom: 15,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/218670065/original/b365afbaa2e98f56645de5aeb0e099a7ac5e80dc.png",
    designTypeId: 2,
    designStyleId: 10
  },
  {
    username: "yussuf_z",
    priceStartFrom: 5,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/161399829/original/837e2af5c60ba18bd57d0d813c904ac1a40ecd0e.jpg",
    designTypeId: 2,
    designStyleId: 10
  },
  {
    username: "joaomaia7",
    priceStartFrom: 20,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/276371108/original/e9f2e721d0d99965828944133088ecaf4b7002c2.jpg",
    designTypeId: 2,
    designStyleId: 10
  },
  {
    username: "oliverswinburne",
    priceStartFrom: 300,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/151568988/original/a29c4627c1ab89d015ea71626807a349378d3676.jpg",
    designTypeId: 2,
    designStyleId: 10
  },
  {
    username: "dimensiluar",
    priceStartFrom: 20,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/178556996/original/73f0df1fe9dffaf91259a3bd5912544c74aa1952.jpg",
    designTypeId: 2,
    designStyleId: 10
  },
  {
    username: "vilegatti",
    priceStartFrom: 30,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/214672567/original/c7150ba05e437aa39bffe273f9785955cb45799f.jpg",
    designTypeId: 2,
    designStyleId: 10
  },
  {
    username: "ehsanfaridi",
    priceStartFrom: 55,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/176891788/original/3985b4e3102b8de23eb7301a5ae8ceba0c609c40.jpg",
    designTypeId: 2,
    designStyleId: 10
  },
  {
    username: "lavenderdivine",
    priceStartFrom: 30,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/132276729/original/8ea180f1bab8c0fc10ad2251adb8ea2796d14628.jpg",
    designTypeId: 2,
    designStyleId: 10
  },
  {
    username: "ari_warok",
    priceStartFrom: 5,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/174687176/original/8c5a42b19c4a5bf7b4840698e68e8258a4c2a8e0.jpg",
    designTypeId: 2,
    designStyleId: 10
  },
  {
    username: "ggg_design",
    priceStartFrom: 15,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/271402796/original/62438826c787fb47e56c97c27a7b3ef64c75fee9.png",
    designTypeId: 2,
    designStyleId: 10
  },
  {
    username: "juz_a_girl",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/223136185/original/71c1398feb7a4884db059cc22f5f0270f0f04ea4.jpg",
    designTypeId: 2,
    designStyleId: 10
  },
  {
    username: "diacinco",
    priceStartFrom: 30,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/223759455/original/cd42b3407bc489229615a20616bb6f2a465be3e7.jpg",
    designTypeId: 2,
    designStyleId: 10
  },
  {
    username: "cahyow31",
    priceStartFrom: 25,
    imageUrl: "https://fiverr-res.cloudinary.com/video/upload/so_19.175946,t_gig_cards_web/f5k7al3vcdinquqeqoqh.png",
    designTypeId: 2,
    designStyleId: 10
  },
  {
    username: "jorgeiracheta",
    priceStartFrom: 40,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/55877234/original/db483cfe7879255505cb4c14aea684bf327f1610.jpg",
    designTypeId: 2,
    designStyleId: 10
  },
  {
    username: "tazp27",
    priceStartFrom: 35,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/193279972/original/5eb135c4dcd45b6152d7429a8ca37a7acba96a12.jpg",
    designTypeId: 2,
    designStyleId: 10
  },
  {
    username: "cquencestudios",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/159071292/original/185671408dbc86978f48cb5702f8b4487f7b0dea.png",
    designTypeId: 2,
    designStyleId: 10
  },
  {
    username: "kryscos",
    priceStartFrom: 15,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/206073099/original/76ddf7a4efdf962aa65144c27dd19c70464beb9c.jpeg",
    designTypeId: 2,
    designStyleId: 10
  },
  {
    username: "estherphingmoo",
    priceStartFrom: 20,
    imageUrl: "https://fiverr-res.cloudinary.com/video/upload/so_2.56675,t_gig_cards_web/jiybdwaos3y0ybj0qptp.png",
    designTypeId: 2,
    designStyleId: 10
  },
  {
    username: "dikigiyat",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/246282107/original/6c5a7b50b5ad0101fc440145a485c882579d0433.jpg",
    designTypeId: 2,
    designStyleId: 10
  },
  {
    username: "sandrasavarino",
    priceStartFrom: 20,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/222439053/original/511447d24ada1daee0ad75c285258d6c9c7da23f.jpg",
    designTypeId: 2,
    designStyleId: 10
  },
  {
    username: "hesh360",
    priceStartFrom: 35,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/117785122/original/dd4db90f144cdaf854b5292abcb57e710d92052d.jpg",
    designTypeId: 2,
    designStyleId: 10
  },
  {
    username: "gariwdd",
    priceStartFrom: 15,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/165101882/original/6701a577109bfa3250ce2bf76c34465b9ad3c548.jpg",
    designTypeId: 2,
    designStyleId: 10
  },
  {
    username: "dimensiluar",
    priceStartFrom: 20,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/146475037/original/e9199bf5616c8bba166236cb55b3ffd5f4052ffd.jpg",
    designTypeId: 2,
    designStyleId: 10
  },
  {
    username: "afrielian",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/266137523/original/0b11e63b3fd466b4f19f4007baa77ef125f86fcd.jpg",
    designTypeId: 2,
    designStyleId: 10
  },
  {
    username: "unaizakarim29",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/216798082/original/f8884523b15bb3139e2d42c7a5a9bfefe2fcaa19.jpg",
    designTypeId: 2,
    designStyleId: 10
  },
  {
    username: "oraclestudio99",
    priceStartFrom: 25,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/289651010/original/445830860592b7ec1b92ed68166b6967f56d9964.jpg",
    designTypeId: 2,
    designStyleId: 10
  },
  {
    username: "ifungky",
    priceStartFrom: 15,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/202088379/original/5a7616cd03b63827579451d8205c359f604431e6.jpg",
    designTypeId: 2,
    designStyleId: 10
  },
  {
    username: "studiogenic",
    priceStartFrom: 5,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/222392190/original/c53f4e6e695d2f7a70594b3bd9f629fee7df4196.jpg",
    designTypeId: 2,
    designStyleId: 10
  },
  {
    username: "nabeelnajeeb",
    priceStartFrom: 50,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/180280472/original/03af8dc620488389f07d34df1df3694ddafe6f03.jpg",
    designTypeId: 2,
    designStyleId: 10
  },
  {
    username: "uigodesign",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/227238570/original/34ac7185156567fefe5a75f473849ad1c44135e8.png",
    designTypeId: 2,
    designStyleId: 10
  },
  {
    username: "shah_alom1",
    priceStartFrom: 20,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/289102900/original/db8eaea320889c1a33fad31c112b7cb5876ee48a.jpg",
    designTypeId: 2,
    designStyleId: 10
  },
  {
    username: "urieltenconi",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/147656129/original/e489f7fcbb609241046c34c0d895b8c135987e17.jpg",
    designTypeId: 2,
    designStyleId: 10
  },
  {
    username: "mortsy",
    priceStartFrom: 40,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/183188263/original/be33acf5378f944efd85ba9b58dcea688fdcfd62.jpg",
    designTypeId: 2,
    designStyleId: 10
  },
  {
    username: "justinbizlab",
    priceStartFrom: 30,
    imageUrl: "https://fiverr-res.cloudinary.com/video/upload/so_0.969011,t_gig_cards_web/bmqhtgcphzpmhdqfxatl.png",
    designTypeId: 2,
    designStyleId: 10
  },
  {
    username: "vanessamyra",
    priceStartFrom: 5,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/160000123/original/869c52bd429d64811a62894378ba103a6b66467f.png",
    designTypeId: 2,
    designStyleId: 10
  },
  {
    username: "snigdhapriy",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/205664038/original/95026581e3ed9ed15efdd817f3f56ee89580d74a.jpg",
    designTypeId: 2,
    designStyleId: 10
  },
  {
    username: "kleamino",
    priceStartFrom: 5,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/155508575/original/a78486a5bb39c06dbf9918bbfa3928da4361a591.jpg",
    designTypeId: 2,
    designStyleId: 10
  },
  {
    username: "alaecs",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/268748678/original/d3199afd9d7a5804206d4fd619a3769d4fc95f27.jpg",
    designTypeId: 2,
    designStyleId: 10
  },
  {
    username: "seburq",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/276498396/original/0b76a2788b26973f1f3a9f3e7f569103fb9d8893.png",
    designTypeId: 2,
    designStyleId: 10
  },
  {
    username: "lisa_solomoniuk",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/218513184/original/3e220ee0ecb5a7830e0d1ed7beea8f874eb3dc65.png",
    designTypeId: 2,
    designStyleId: 10
  },
  {
    username: "xiaokung",
    priceStartFrom: 50,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/288861244/original/cc55f6196205e8fa50120379c14dc6b0ee2f0042.png",
    designTypeId: 2,
    designStyleId: 10
  },
  {
    username: "crystalrainart",
    priceStartFrom: 5,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/122815532/original/43dfe52a68420f2dbb86c98be1cfa207ddfb0e64.jpg",
    designTypeId: 2,
    designStyleId: 10
  },
  {
    username: "cheesychili",
    priceStartFrom: 100,
    imageUrl: "https://fiverr-res.cloudinary.com/video/upload/t_gig_cards_web/h5sbuigosz5u3efvishk.png",
    designTypeId: 2,
    designStyleId: 10
  },
  {
    username: "art_cofam",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/205036333/original/ca3670852fd1ae3bb6e4fb6a4de7a665ba92b82a.jpg",
    designTypeId: 2,
    designStyleId: 10
  },
  {
    username: "butchbangher",
    priceStartFrom: 50,
    imageUrl: "https://fiverr-res.cloudinary.com/video/upload/t_gig_cards_web/tighm1bueoyg8n5ydcee.png",
    designTypeId: 2,
    designStyleId: 10
  },
  {
    username: "zlemuuz",
    priceStartFrom: 50,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/179433588/original/c1c6138d7310b2c0d5c689208fed4b6008186741.jpeg",
    designTypeId: 2,
    designStyleId: 10
  },
  {
    username: "zlemuuz",
    priceStartFrom: 50,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/179433588/original/c1c6138d7310b2c0d5c689208fed4b6008186741.jpeg",
    designTypeId: 2,
    designStyleId: 10
  },
  {
    username: "flottstudio18",
    priceStartFrom: 15,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/274937966/original/2a22833ab21f94be8379196b8cfee4b511c98e42.jpeg",
    designTypeId: 2,
    designStyleId: 10
  },
  {
    username: "studio901design",
    priceStartFrom: 30,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/265238569/original/6516f9fb9a2e9060663eea8d0eb100f821bb4612.png",
    designTypeId: 2,
    designStyleId: 10
  },
  {
    username: "mithun_kdey",
    priceStartFrom: 25,
    imageUrl: "https://fiverr-res.cloudinary.com/video/upload/so_1.228708,t_gig_cards_web/fejpdbnyhed6dglpvzbt.png",
    designTypeId: 2,
    designStyleId: 10
  },
  {
    username: "dime51",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/134181524/original/dbcd1877c9eb47c563ca4825b338f66d4aebf01c.jpg",
    designTypeId: 2,
    designStyleId: 10
  },
  {
    username: "tomonii",
    priceStartFrom: 30,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/229156531/original/1bd5fed0e61151d38b338b02fdc2341b92157e5c.jpg",
    designTypeId: 2,
    designStyleId: 10
  },
  {
    username: "indraprastika",
    priceStartFrom: 5,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/202967914/original/a9f794b468f632478a22a41461abc3a82866f23a.jpeg",
    designTypeId: 2,
    designStyleId: 10
  },
  {
    username: "mahi_san",
    priceStartFrom: 20,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/302371710/original/8326a813fb8b7f00caa643f97174b210cdaaa0e9.png",
    designTypeId: 2,
    designStyleId: 10
  },
  {
    username: "rezaaditia",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/248195021/original/0ea37f964c3467fc7953099ea34a612acd9a7eb0.jpg",
    designTypeId: 2,
    designStyleId: 10
  },
  {
    username: "blicken",
    priceStartFrom: 15,
    imageUrl: "https://fiverr-res.cloudinary.com/video/upload/t_gig_cards_web/pikqul1lcll1sns2pafv.png",
    designTypeId: 2,
    designStyleId: 10
  },
  {
    username: "eunike_febe",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/185869596/original/08328a29c7f0bd114043fb77eedbc7a20c0f7584.png",
    designTypeId: 2,
    designStyleId: 10
  },
  {
    username: "superminimalism",
    priceStartFrom: 20,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/230867134/original/0ec28e6fca264eefe02e7287933f00120d823173.jpg",
    designTypeId: 2,
    designStyleId: 10
  },
  {
    username: "babybundart",
    priceStartFrom: 25,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/164803285/original/1fd313b7d0c2aa9916807a7f7de13be3817c2790.png",
    designTypeId: 2,
    designStyleId: 10
  },
  {
    username: "claritygee",
    priceStartFrom: 50,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/315276098/original/eebe51a2cd04363a99c8e312050851d69156dd98.png",
    designTypeId: 2,
    designStyleId: 10
  },
  {
    username: "foundrydesigns",
    priceStartFrom: 2500,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/123220017/original/7dd7730411f617e8665458fe7067e06fca46af09.png",
    designTypeId: 2,
    designStyleId: 10
  },
  {
    username: "picxo_creatives",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/224714108/original/d949feb9930202939377fef98823fa9e776e7267.jpg",
    designTypeId: 2,
    designStyleId: 10
  },
  {
    username: "nigelcrown",
    priceStartFrom: 20,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/133612516/original/ec714cd788059fed35a8afa19b923b40597f2b10.jpg",
    designTypeId: 2,
    designStyleId: 10
  },
  {
    username: "artrifin",
    priceStartFrom: 35,
    imageUrl: "https://fiverr-res.cloudinary.com/video/upload/t_gig_cards_web/utlf7a5xz1nwiz4lqqju.png",
    designTypeId: 2,
    designStyleId: 10
  },
  {
    username: "chaimaejebbari",
    priceStartFrom: 5,
    imageUrl: "https://fiverr-res.cloudinary.com/video/upload/t_gig_cards_web/uuprgytmfliho819lpms.png",
    designTypeId: 2,
    designStyleId: 10
  },
  {
    username: "pixie_pines",
    priceStartFrom: 5,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/248358789/original/fe875518a208b7023f723a871ab0d6b4f0570ae0.png",
    designTypeId: 2,
    designStyleId: 10
  },
  {
    username: "abdullahsainn",
    priceStartFrom: 5,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/187474162/original/1db583d4730bca64ed3923c22dd6cd3d1639ba62.jpg",
    designTypeId: 2,
    designStyleId: 10
  },
  {
    username: "lerod_ui",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/292307891/original/7001b1b45beb5387b8907ec4960ddddc3a94d248.png",
    designTypeId: 2,
    designStyleId: 10
  },
  {
    username: "biplob_k_mondol",
    priceStartFrom: 5,
    imageUrl: "https://fiverr-res.cloudinary.com/video/upload/so_14.894488,t_gig_cards_web/zwae2dbpo634asexw8cg.png",
    designTypeId: 2,
    designStyleId: 10
  },
  {
    username: "chrisnic131",
    priceStartFrom: 5,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/294099761/original/3df230ca122eec14f71af2dde268060bc9c6c55e.png",
    designTypeId: 2,
    designStyleId: 10
  },
  {
    username: "doomesia",
    priceStartFrom: 45,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/247117538/original/4f5d6ec880b4bf0fdc1b5ed84fcc14e77592b108.jpg",
    designTypeId: 2,
    designStyleId: 10
  },
  {
    username: "jorgeiracheta",
    priceStartFrom: 75,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/158027463/original/5c3388e0df2add71fa1fe547f69c4333eab5a47d.jpeg",
    designTypeId: 2,
    designStyleId: 10
  },
  {
    username: "febriansatria",
    priceStartFrom: 50,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs2/132776104/original/2ac1a17c49f7f5b97a54ecb680e529cc8b78f6e0.jpg",
    designTypeId: 2,
    designStyleId: 10
  },
  {
    username: "dimensiluar",
    priceStartFrom: 85,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/215282936/original/82eb1514e86fdf8651e1e39fcf923d4c4b59351e.jpg",
    designTypeId: 2,
    designStyleId: 10
  },
  {
    username: "elettra90",
    priceStartFrom: 40,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/1957562/original/fbc751a60afe398dc1e12bce6cc583c4361255eb.jpg",
    designTypeId: 2,
    designStyleId: 10
  },
  {
    username: "wizzitex",
    priceStartFrom: 500,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/281081706/original/2bb632d04f03fc79c556bc1bb9ba3b564f3a9895.jpg",
    designTypeId: 2,
    designStyleId: 10
  },
  {
    username: "hammm6",
    priceStartFrom: 85,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/251644956/original/a1c5d6f1208ee8edc22f19f6a3b925f8613faa13.jpg",
    designTypeId: 2,
    designStyleId: 10
  },
  {
    username: "rayarmas",
    priceStartFrom: 100,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/248426642/original/dc928c0f82b98ae3fc9bc67abda8938d2af0a79d.jpg",
    designTypeId: 2,
    designStyleId: 10
  },
  {
    username: "itsqubbaj",
    priceStartFrom: 75,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/262206925/original/17d7060d481e6c72400fd977cc9da52aaf0770cb.jpg",
    designTypeId: 2,
    designStyleId: 10
  },
  {
    username: "itsqubbaj",
    priceStartFrom: 75,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/262210642/original/5d82add2d851ceca4ffb531009acd905caabb70a.jpg",
    designTypeId: 2,
    designStyleId: 10
  },
  {
    username: "csabaxkasik",
    priceStartFrom: 95,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/254898295/original/a137d70f1399534e185ce6faec332bf2a2a1a450.jpg",
    designTypeId: 2,
    designStyleId: 10
  },
  {
    username: "duyenart",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/232581789/original/6abd0411e71827e5462be8a48da3b73cb11e919c.jpg",
    designTypeId: 2,
    designStyleId: 10
  },
  {
    username: "paper_piece",
    priceStartFrom: 60,
    imageUrl: "https://fiverr-res.cloudinary.com/video/upload/so_63.169298,t_gig_cards_web/haxi8mtlaeinbefppgia.png",
    designTypeId: 2,
    designStyleId: 10
  },
  {
    username: "chepeshepe",
    priceStartFrom: 55,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/144167220/original/4176710008d0076892745b581f4a7e5ce618ba30.jpg",
    designTypeId: 2,
    designStyleId: 10
  },
  {
    username: "zlivkun",
    priceStartFrom: 80,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/109004096/original/bdb9a2b53ede8a6f70b651870eddb6b319c52af7.png",
    designTypeId: 2,
    designStyleId: 10
  },
  {
    username: "kaffeboy",
    priceStartFrom: 100,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/172684399/original/f49bbd6a3b7245da015132be01a624dacead1099.jpg",
    designTypeId: 2,
    designStyleId: 10
  },
  {
    username: "artacet_design",
    priceStartFrom: 200,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/212638599/original/2b05885fb9b6ab275d51eed60ddc1527aa050ada.jpg",
    designTypeId: 2,
    designStyleId: 10
  },
  {
    username: "artacet_design",
    priceStartFrom: 200,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs2/159112937/original/844e3f1995cd44b951c6f2e4199c28427c27f745.jpg",
    designTypeId: 2,
    designStyleId: 10
  },
  {
    username: "sashkiadesign",
    priceStartFrom: 400,
    imageUrl: "https://fiverr-res.cloudinary.com/video/upload/t_gig_cards_web/tkgdzzlghjqbm6da6sqj.png",
    designTypeId: 2,
    designStyleId: 10
  },
  {
    username: "egedoan590",
    priceStartFrom: 100,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/229559867/original/2fde9ee55661a53bcf6df74bda5a0c02c71760ed.jpg",
    designTypeId: 2,
    designStyleId: 10
  },
  {
    username: "csabaxkasik",
    priceStartFrom: 110,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/170889671/original/811dcaa64864797edec3d6951e43c6d57750082b.jpg",
    designTypeId: 2,
    designStyleId: 10
  },
  {
    username: "lenakiagia",
    priceStartFrom: 70,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/240071198/original/b377df82fff8017a7878b45ecd83a3b1b076257d.jpg",
    designTypeId: 2,
    designStyleId: 10
  },
  {
    username: "dimensiluar",
    priceStartFrom: 30,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/147051223/original/3985348fdbb94933c82e7586a35dcac7f05d6aa4.jpg",
    designTypeId: 2,
    designStyleId: 10
  },
  {
    username: "sprincess579",
    priceStartFrom: 70,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/242067026/original/2708e1dbf5f5eef2774fc2237620d793cdb92575.jpg",
    designTypeId: 2,
    designStyleId: 10
  },
  {
    username: "niluferustuner",
    priceStartFrom: 60,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/180521669/original/3126cc429825f1f8051688986ab7900cf6bda9e3.jpg",
    designTypeId: 2,
    designStyleId: 10
  },
  {
    username: "vlad_ar",
    priceStartFrom: 150,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/299270373/original/77848b4d819195700bece926b7d5dd08df869e99.png",
    designTypeId: 2,
    designStyleId: 10
  },
  {
    username: "germanbernales",
    priceStartFrom: 50,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/174201461/original/98298850c50c6330f728f6530c580bcb4473a05d.jpg",
    designTypeId: 2,
    designStyleId: 10
  },
  {
    username: "yabbadabbodu",
    priceStartFrom: 30,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/228062262/original/739641cc780d0f6587b8812aee69d7f84bafaec0.jpg",
    designTypeId: 2,
    designStyleId: 10
  },
  {
    username: "videohaven",
    priceStartFrom: 600,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/303807436/original/ce4d4de331ac7be0f1f7a790f49b1e76ed82120e.jpg",
    designTypeId: 2,
    designStyleId: 10
  },
  {
    username: "jandonbanyu",
    priceStartFrom: 30,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/133644707/original/26c83526e82b63aae4276972e1ede6dbf99f3a4c.jpg",
    designTypeId: 2,
    designStyleId: 10
  },
  {
    username: "doomesia",
    priceStartFrom: 40,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/247133114/original/b4858c3a5bc8ac380478352f240d5e6b34356535.jpg",
    designTypeId: 2,
    designStyleId: 10
  },
  {
    username: "najlakay",
    priceStartFrom: 15,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/25353247/original/47823b4610ee446b0aa7548e00a1cfd78dd7082e.jpg",
    designTypeId: 2,
    designStyleId: 10
  },
  {
    username: "sirakiwiri",
    priceStartFrom: 65,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs2/253483546/original/582f9e7bd57385a8c7a1242b27d03e35ffbfca58.jpg",
    designTypeId: 2,
    designStyleId: 10
  },
  {
    username: "seeget",
    priceStartFrom: 90,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/240975417/original/e3acfbe22977887d01b2f3d6a7daf09bbbe87b33.jpg",
    designTypeId: 2,
    designStyleId: 10
  },
  {
    username: "navetone45",
    priceStartFrom: 30,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/245583394/original/d2e77d55b3c346d019b45c5ca53bb0d27e0bfc3b.jpg",
    designTypeId: 2,
    designStyleId: 10
  },
  {
    username: "ferdianalamsah",
    priceStartFrom: 25,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/197700600/original/3f568719d1a784831ae6509ecaac18e902df49a6.jpg",
    designTypeId: 2,
    designStyleId: 10
  },
  {
    username: "christianozoude",
    priceStartFrom: 15,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/137341189/original/40a4ec074e1dd629c917d62763785a3622e6a4d0.jpg",
    designTypeId: 2,
    designStyleId: 10
  },
  {
    username: "lades_brae_art",
    priceStartFrom: 50,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/294896792/original/f5265660439d6e90434de47b94554228f89b2bfe.png",
    designTypeId: 2,
    designStyleId: 10
  },
  {
    username: "adrianjordan5",
    priceStartFrom: 20,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/257126477/original/621f18cc29493caea20ef2b272b6ab5b909b3247.jpg",
    designTypeId: 2,
    designStyleId: 10
  },
  {
    username: "syabronadya",
    priceStartFrom: 95,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/185491658/original/29ac2bc97d6a8d841c1f4731620bb4577ada7be8.jpg",
    designTypeId: 2,
    designStyleId: 10
  },
  {
    username: "fenkurniawan",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/217454613/original/d8d6765f49be3b4a35c2f3d04d749c909989482b.jpeg",
    designTypeId: 2,
    designStyleId: 10
  },
  {
    username: "shafiaaslam267",
    priceStartFrom: 15,
    imageUrl: "https://fiverr-res.cloudinary.com/video/upload/t_gig_cards_web/v0jn28weooxza8yjqyvn.png",
    designTypeId: 2,
    designStyleId: 10
  },
  {
    username: "karanbawari",
    priceStartFrom: 20,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/141018007/original/afceba3c76be8cfeb65cc3bc814669f028b68964.jpg",
    designTypeId: 2,
    designStyleId: 10
  },
  {
    username: "cordsdavid",
    priceStartFrom: 35,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/265998028/original/be34ade781cda7c6a2d0fb32d2b285e7e21bcdba.png",
    designTypeId: 2,
    designStyleId: 10
  },
  {
    username: "immortellepk",
    priceStartFrom: 5,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/216683000/original/36dd1c9531273bd6df13f023c1f4c4d6c09ecabe.jpg",
    designTypeId: 2,
    designStyleId: 10
  },
  {
    username: "tomonii",
    priceStartFrom: 30,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/278246286/original/14563ac3fbc97499e0083992ac9d3ff47fe4f22b.jpg",
    designTypeId: 2,
    designStyleId: 10
  },
  {
    username: "tomascus",
    priceStartFrom: 45,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/199594142/original/2e747737d7abbbc9dd879df5bdd8114eb8dbfe10.jpg",
    designTypeId: 2,
    designStyleId: 10
  },
  {
    username: "chrnhr",
    priceStartFrom: 150,
    imageUrl: "https://fiverr-res.cloudinary.com/video/upload/t_gig_cards_web/qdm00cfzqtg8gtn2opie.png",
    designTypeId: 2,
    designStyleId: 10
  },
  {
    username: "harsimran73",
    priceStartFrom: 100,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/132947155/original/d7c0e763362bdfce15d2eebec73677d7fad7a9d5.jpg",
    designTypeId: 2,
    designStyleId: 10
  },
  {
    username: "katerynavol",
    priceStartFrom: 100,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/265434688/original/b84d4d044e0d37e5870012109427b73442d069f3.jpg",
    designTypeId: 2,
    designStyleId: 10
  },
  {
    username: "skeptic_writer",
    priceStartFrom: 50,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/293699566/original/5f27765f3faee977bacbfe56c1a90219ed54ae33.jpeg",
    designTypeId: 2,
    designStyleId: 10
  },
  {
    username: "matsugae",
    priceStartFrom: 15,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/2832960/original/GlitchCoverG01.jpg",
    designTypeId: 2,
    designStyleId: 10
  },
  {
    username: "ashraful_96",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/video/upload/so_39.278,t_gig_cards_web/uphrvw37ss4lfmgk9grq.png",
    designTypeId: 2,
    designStyleId: 10
  },
  {
    username: "theshubhamdhage",
    priceStartFrom: 65,
    imageUrl: "https://fiverr-res.cloudinary.com/video/upload/t_gig_cards_web/pd4nfp4xrijelkfyncku.png",
    designTypeId: 2,
    designStyleId: 10
  },
  {
    username: "klllane",
    priceStartFrom: 70,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/220923545/original/4e176a11b2428a7b160427eb21b7e1d86270fca7.jpg",
    designTypeId: 2,
    designStyleId: 10
  },
  {
    username: "chevitary",
    priceStartFrom: 20,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/208919996/original/1db79c48de8fc22febb7e1d0fdf1a70b817df0ae.png",
    designTypeId: 2,
    designStyleId: 10
  },
  {
    username: "asadgraphics656",
    priceStartFrom: 100,
    imageUrl: "https://fiverr-res.cloudinary.com/video/upload/t_gig_cards_web/dxpkkfqmxxhv8zx4jvjn.png",
    designTypeId: 2,
    designStyleId: 10
  },
  {
    username: "psycomedy",
    priceStartFrom: 35,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/181832658/original/4f62a440eebb820dd8fee2fa418c9e68cbbab29b.jpg",
    designTypeId: 2,
    designStyleId: 10
  },
  {
    username: "tigerblaez",
    priceStartFrom: 50,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/109205308/original/025b7c9625df41296cdd6ad564fa31e2ed0dbcba.jpg",
    designTypeId: 2,
    designStyleId: 10
  },
  {
    username: "tincantimmy",
    priceStartFrom: 50,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/258454771/original/ae823e6f2cfa69d620514eb3403122f9c2779d79.jpg",
    designTypeId: 2,
    designStyleId: 10
  },
  {
    username: "ozandoganbey",
    priceStartFrom: 35,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/77798056/original/608c489c19a545fd461410a4715dee57bd624ac4.jpg",
    designTypeId: 2,
    designStyleId: 10
  },
  {
    username: "teodoratopor",
    priceStartFrom: 15,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/204925920/original/3959f8f5ce0e186d4fd8cf277ddaec5634dc802f.png",
    designTypeId: 2,
    designStyleId: 10
  },
  {
    username: "doomesia",
    priceStartFrom: 45,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/192329684/original/a3409c6663568872d7d6a93a3c2fa74ee83129fe.jpg",
    designTypeId: 2,
    designStyleId: 10
  },
  {
    username: "valtentart_",
    priceStartFrom: 30,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/186918958/original/9eae77c54a69b12903921dd53e52d6f5da3fcc5e.jpg",
    designTypeId: 2,
    designStyleId: 10
  },
  {
    username: "duvida",
    priceStartFrom: 50,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/246391819/original/d12b912f30fcdef0e0e35048ab64df361f489bcf.jpg",
    designTypeId: 2,
    designStyleId: 10
  },
  {
    username: "witeboard",
    priceStartFrom: 120,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/38144980/original/b81bbaf423d496bb3934eef9fbfb0a0ad353df2f.jpg",
    designTypeId: 2,
    designStyleId: 10
  },
  {
    username: "maan_meraki18",
    priceStartFrom: 100,
    imageUrl: "https://fiverr-res.cloudinary.com/video/upload/t_gig_cards_web/p3plocrkxwdbtts6q2rf.png",
    designTypeId: 2,
    designStyleId: 10
  },
  {
    username: "marynabolsunova",
    priceStartFrom: 110,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/181559601/original/b937854e908c0c708f715747260b847c9cc44836.jpg",
    designTypeId: 2,
    designStyleId: 10
  },
  {
    username: "oliver_artwork",
    priceStartFrom: 55,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/129513282/original/6154ea6a986c9ca5235ad2ebe178de84cf7da4df.jpg",
    designTypeId: 2,
    designStyleId: 11
  },
  {
    username: "nelsinios",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/238063164/original/7db85bb0d686667d614d1e67585519a6a214df32.png",
    designTypeId: 2,
    designStyleId: 11
  },
  {
    username: "aripradnyanaa",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/168965827/original/c9a57d19e5189ea105ad271cbd2a46210398375d.jpg",
    designTypeId: 2,
    designStyleId: 11
  },
  {
    username: "themorgenstern_",
    priceStartFrom: 15,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/200517281/original/d197cc4b031f63404efafdfa9fa3bb443df3092d.png",
    designTypeId: 2,
    designStyleId: 11
  },
  {
    username: "miftasee",
    priceStartFrom: 5,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/118633106/original/7c956cfdf8e5992a601e061523df361bab0d608d.jpg",
    designTypeId: 2,
    designStyleId: 11
  },
  {
    username: "az_sven",
    priceStartFrom: 30,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/183701118/original/12965752c37ed4c9afe685ccf22b85f42e48d8e0.jpg",
    designTypeId: 2,
    designStyleId: 11
  },
  {
    username: "nogatsu_",
    priceStartFrom: 35,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/166334952/original/7e5996f72f03bbb763b6c8cbd44d2087232f4206.png",
    designTypeId: 2,
    designStyleId: 11
  },
  {
    username: "valeri_mirley",
    priceStartFrom: 25,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/181657831/original/2435366e5e885dbb34016fa73ff5af5bf2bfb508.png",
    designTypeId: 2,
    designStyleId: 11
  },
  {
    username: "banbanns",
    priceStartFrom: 40,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/187517791/original/c28153730c0f15b0d004a0e0442b522e8ea7d332.jpg",
    designTypeId: 2,
    designStyleId: 11
  },
  {
    username: "laksana_",
    priceStartFrom: 25,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/246005229/original/17c443a3ad65d20ee40320e270c307bebee55875.jpg",
    designTypeId: 2,
    designStyleId: 11
  },
  {
    username: "powlsart",
    priceStartFrom: 20,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/231187525/original/bdcbc677b3dc57e1153d36220d9a414a4931533d.jpg",
    designTypeId: 2,
    designStyleId: 11
  },
  {
    username: "nirokawa",
    priceStartFrom: 40,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/139046065/original/33ddb2335b2ac5e25601fc6333afdaf78183cc38.png",
    designTypeId: 2,
    designStyleId: 11
  },
  {
    username: "pilipikachan",
    priceStartFrom: 5,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/250329352/original/034d3de7ea96c09adfc170f0fa0e127066540480.png",
    designTypeId: 2,
    designStyleId: 11
  },
  {
    username: "silavadsen",
    priceStartFrom: 15,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/268261132/original/72b1fe8a472603f4d74242f65bb5240f6ef8f13d.jpg",
    designTypeId: 2,
    designStyleId: 11
  },
  {
    username: "rackzi",
    priceStartFrom: 50,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/124046873/original/ac528ac7bf663eb8a8b775e5d7a80269ac997b6d.png",
    designTypeId: 2,
    designStyleId: 11
  },
  {
    username: "anandasuryaniga",
    priceStartFrom: 20,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/168208670/original/5ef88089cd07a37ec6cf58fa9f5e57bb024b63a9.jpg",
    designTypeId: 2,
    designStyleId: 11
  },
  {
    username: "yoki_shiraishi",
    priceStartFrom: 60,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/269040615/original/2b76501626f9812c6bedfef0fc3eb25a581f76e6.png",
    designTypeId: 2,
    designStyleId: 11
  },
  {
    username: "raazu692",
    priceStartFrom: 40,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/122784261/original/3c4fe5ba40131eba8d5672d9a48b6258f71e1cd7.jpg",
    designTypeId: 2,
    designStyleId: 11
  },
  {
    username: "raitvisualworks",
    priceStartFrom: 35,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs2/145364359/original/e2c753c181cfd98b4cb08129868687c345319401.jpg",
    designTypeId: 2,
    designStyleId: 11
  },
  {
    username: "fruxeyot",
    priceStartFrom: 35,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/232593414/original/8aa9282cbc3faa66ea293c940488f6131fa13f41.png",
    designTypeId: 2,
    designStyleId: 11
  },
  {
    username: "treskiddos",
    priceStartFrom: 80,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/137546265/original/9a313ba7e17a8c23cb0d820364c7c95bcc610505.jpg",
    designTypeId: 2,
    designStyleId: 11
  },
  {
    username: "mikohouse",
    priceStartFrom: 40,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/212017113/original/11a03d9657534651ef347372c7b94c5af4867c48.png",
    designTypeId: 2,
    designStyleId: 11
  },
  {
    username: "riszaperdhana",
    priceStartFrom: 90,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/123907218/original/fccdc48c5d7e319ae32d19898d11182290c3021d.jpg",
    designTypeId: 2,
    designStyleId: 11
  },
  {
    username: "zeroym",
    priceStartFrom: 70,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/240158838/original/94010db272949af68bd79891ceb468ad77cf4f18.jpg",
    designTypeId: 2,
    designStyleId: 11
  },
  {
    username: "akanichiyu",
    priceStartFrom: 60,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/197899229/original/482416bcf8cb15000a34f06745c4f74c8a2071f9.jpg",
    designTypeId: 2,
    designStyleId: 11
  },
  {
    username: "wilmienk",
    priceStartFrom: 30,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/191810676/original/7d019e9235f26bb42a49bfefa3fe6276b31eba33.png",
    designTypeId: 2,
    designStyleId: 11
  },
  {
    username: "patofermin",
    priceStartFrom: 15,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/214821188/original/6b9007bb6b2dfbf8ae281aff5edf0f15ee63a486.jpg",
    designTypeId: 2,
    designStyleId: 11
  },
  {
    username: "libror",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/207131630/original/96101c8f74840eafeefb4037a729435dcd26861a.jpg",
    designTypeId: 2,
    designStyleId: 11
  },
  {
    username: "arakibastudio",
    priceStartFrom: 20,
    imageUrl: "https://fiverr-res.cloudinary.com/video/upload/t_gig_cards_web/nivd0imgh8xxrijkbbhl.png",
    designTypeId: 2,
    designStyleId: 11
  },
  {
    username: "chewichewi",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/252511026/original/1805e92fd00f44d9fe7da8891adfedca169bcc3d.jpg",
    designTypeId: 2,
    designStyleId: 11
  },
  {
    username: "jakkisenpai",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/139361729/original/0c8e32551c358d4bba96b9455ad9719b63972aae.jpg",
    designTypeId: 2,
    designStyleId: 11
  },
  {
    username: "jhoanjlf",
    priceStartFrom: 25,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs2/185363519/original/f272d3750e504ef2f7144106f6497dab97efd635.png",
    designTypeId: 2,
    designStyleId: 11
  },
  {
    username: "narululu",
    priceStartFrom: 35,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/187413086/original/34fe07fb535686604ecd01220b378503d552babf.jpg",
    designTypeId: 2,
    designStyleId: 11
  },
  {
    username: "adrytia45",
    priceStartFrom: 80,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/84040296/original/c66d7f960c72ba7f43742d88a57a2387b5927a55.jpg",
    designTypeId: 2,
    designStyleId: 11
  },
  {
    username: "cherry_ava",
    priceStartFrom: 25,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/210126926/original/1c29263a663d3e46f291a9e3a1a91452c44401f7.png",
    designTypeId: 2,
    designStyleId: 11
  },
  {
    username: "kochim",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/136903182/original/1718aa724f94ddc946763db46b579ed7a2b5f316.jpg",
    designTypeId: 2,
    designStyleId: 11
  },
  {
    username: "xynmeii",
    priceStartFrom: 25,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/215235174/original/fe1fecae4b61a785bc9cd12d30aaead9888243aa.jpg",
    designTypeId: 2,
    designStyleId: 11
  },
  {
    username: "ri2swardhani",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/160181863/original/1da78367eb47fd599932990b7373599ab61e6128.png",
    designTypeId: 2,
    designStyleId: 11
  },
  {
    username: "kawako__",
    priceStartFrom: 40,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/219153665/original/812ab264d29d960758aee72c4c8ca5aaaa0464e3.jpg",
    designTypeId: 2,
    designStyleId: 11
  },
  {
    username: "prushk",
    priceStartFrom: 500,
    imageUrl: "https://fiverr-res.cloudinary.com/video/upload/so_1.333333,t_gig_cards_web/u7syywlbthbinl4x2l4x.png",
    designTypeId: 2,
    designStyleId: 11
  },
  {
    username: "jackripperart",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/275353767/original/fe352037f93aba948afc18e36195d8274aaa0975.jpg",
    designTypeId: 2,
    designStyleId: 11
  },
  {
    username: "gustianhe",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/244056199/original/c4e749c495763c38995b2ffe3c8a74c225606ce0.jpg",
    designTypeId: 2,
    designStyleId: 11
  },
  {
    username: "carlosbobadilla",
    priceStartFrom: 100,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/132444377/original/89ef3954c6546daee477ce9a120ed108953afcfc.jpg",
    designTypeId: 2,
    designStyleId: 11
  },
  {
    username: "anzailee",
    priceStartFrom: 25,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/146886374/original/a46686d03431e9ed511e804820de78526b7f514f.jpg",
    designTypeId: 2,
    designStyleId: 11
  },
  {
    username: "h4rtex",
    priceStartFrom: 30,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/186895366/original/0ea13df05b3526a5bbdfab1cad3622176655be3e.png",
    designTypeId: 2,
    designStyleId: 11
  },
  {
    username: "aini27",
    priceStartFrom: 50,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/185158027/original/3fae49d953b05cc769368f5a64b06d8c1b94cf8b.jpg",
    designTypeId: 2,
    designStyleId: 11
  },
  {
    username: "ezblossom",
    priceStartFrom: 15,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/218884014/original/db397aa32f62e3eadce068ce034c3e3cc923e8a8.jpg",
    designTypeId: 2,
    designStyleId: 11
  },
  {
    username: "mtwandaa",
    priceStartFrom: 50,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/261981371/original/356d5b8ea8b54aca640cc204ae86ff5b0f358fc8.jpg",
    designTypeId: 2,
    designStyleId: 11
  },
  {
    username: "orenjiii",
    priceStartFrom: 20,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/214409351/original/1fd8aaaadba980762fe378ee3a666713ac758be0.jpg",
    designTypeId: 2,
    designStyleId: 11
  },
  {
    username: "karung_susu",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/104072436/original/01d8b66431db33b19e58bd6b168e9cbc9e11c69a.png",
    designTypeId: 2,
    designStyleId: 11
  },
  {
    username: "tansartwork",
    priceStartFrom: 40,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/127687876/original/2d11ba397059e6cf4597223871486c136ba610bb.jpg",
    designTypeId: 2,
    designStyleId: 11
  },
  {
    username: "arielistianto",
    priceStartFrom: 35,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/179291708/original/9a1c18ca4f4a61e658f7dab268d0b09ae6964ba7.jpg",
    designTypeId: 2,
    designStyleId: 11
  },
  {
    username: "delivian",
    priceStartFrom: 25,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/162887008/original/5d05485ac8447884ad5990470bcd6e2500d3c336.jpg",
    designTypeId: 2,
    designStyleId: 11
  },
  {
    username: "toomywoomy",
    priceStartFrom: 45,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/238037383/original/58092d8e58aa86824b1fb708839fc771f863f0f2.png",
    designTypeId: 2,
    designStyleId: 11
  },
  {
    username: "yo_roppa",
    priceStartFrom: 15,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/37647505/original/44a7c88690efa3e88db024bfe2c786647541bea0.jpg",
    designTypeId: 2,
    designStyleId: 11
  },
  {
    username: "ayadoart",
    priceStartFrom: 15,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/222147912/original/236277edbf0bd03c75e154d5c56614c65b27c5ec.png",
    designTypeId: 2,
    designStyleId: 11
  },
  {
    username: "hakuyaid",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/160104033/original/f87eb7ad4b3fcbb9029b4eb466a2fd5985ae25fe.png",
    designTypeId: 2,
    designStyleId: 11
  },
  {
    username: "shibushio",
    priceStartFrom: 15,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/277687277/original/1e12ce2ab181c2f799119a11f88615a79c293211.png",
    designTypeId: 2,
    designStyleId: 11
  },
  {
    username: "kazisain",
    priceStartFrom: 5,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/307416972/original/4d0691c76beca1191c23d3ad1ea0d3d0f5b3d7b0.jpg",
    designTypeId: 2,
    designStyleId: 11
  },
  {
    username: "frettes",
    priceStartFrom: 75,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/234312705/original/b574dbedd5bb2fb8d662757fb2d03fd8ec86d640.jpg",
    designTypeId: 2,
    designStyleId: 11
  },
  {
    username: "joesketch",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/193530041/original/f9bf0494177c562b7195876f816071b92360e1a9.jpg",
    designTypeId: 2,
    designStyleId: 11
  },
  {
    username: "ainazene",
    priceStartFrom: 35,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/163747939/original/7011b88eb115dcd6407797b973e9d0d044db4b49.jpg",
    designTypeId: 2,
    designStyleId: 11
  },
  {
    username: "dahataanime",
    priceStartFrom: 35,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/208532202/original/bc0e7c445cd4e859d82eee64c3506983284a1a95.jpg",
    designTypeId: 2,
    designStyleId: 11
  },
  {
    username: "casha154",
    priceStartFrom: 20,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/267965090/original/410baf72d7d641b6881d36c3bacee4dda97a5ab2.png",
    designTypeId: 2,
    designStyleId: 11
  },
  {
    username: "conejo_rosa",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/281988697/original/1d57d566fc92851c7fda1a12da1375c02ea00e07.png",
    designTypeId: 2,
    designStyleId: 11
  },
  {
    username: "mayosumii",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/video/upload/t_gig_cards_web/tanng5e56nvo2qplhkdw.png",
    designTypeId: 2,
    designStyleId: 11
  },
  {
    username: "princce2459",
    priceStartFrom: 5,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/174564569/original/e5a88f671d3d215d696430d7d03e37f48ed441cd.png",
    designTypeId: 2,
    designStyleId: 11
  },
  {
    username: "faiahaato",
    priceStartFrom: 35,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/144717889/original/4939b1e64ad7749141a1c35bbb9dae6e5ba22603.png",
    designTypeId: 2,
    designStyleId: 11
  },
  {
    username: "ghyukai",
    priceStartFrom: 20,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/266192501/original/c2fb640523d3815dfde66e5ed87a5937a14fae8d.jpeg",
    designTypeId: 2,
    designStyleId: 11
  },
  {
    username: "sweetdeemon",
    priceStartFrom: 25,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/253593684/original/00338d2adc1b32aaf207bd2fff2f8e753c5af4f6.jpg",
    designTypeId: 2,
    designStyleId: 11
  },
  {
    username: "gokusl",
    priceStartFrom: 15,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/171840688/original/ade263771afc4502ca21f8c66f2f1c6a57d3db38.jpg",
    designTypeId: 2,
    designStyleId: 11
  },
  {
    username: "dennaz",
    priceStartFrom: 20,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/200518874/original/c2ceb1968632e15ac9203f5803aebfddf61a550f.jpg",
    designTypeId: 2,
    designStyleId: 11
  },
  {
    username: "yoviniart",
    priceStartFrom: 15,
    imageUrl: "https://fiverr-res.cloudinary.com/video/upload/t_gig_cards_web/cfhbywv1kkxujqobjnk1.png",
    designTypeId: 2,
    designStyleId: 11
  },
  {
    username: "dinal06",
    priceStartFrom: 30,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/192797738/original/8174b2735b2160153b73f9bf30d2f7cde1edb46c.jpg",
    designTypeId: 2,
    designStyleId: 11
  },
  {
    username: "faiahaato",
    priceStartFrom: 25,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/199815236/original/74961e24cae4e7982027ace59bf93d8ad5519d33.png",
    designTypeId: 2,
    designStyleId: 11
  },
  {
    username: "ratihtri",
    priceStartFrom: 15,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/255154801/original/ebd602c0f2b598901717159b80249434eade8bb6.jpeg",
    designTypeId: 2,
    designStyleId: 11
  },
  {
    username: "raitvisualworks",
    priceStartFrom: 55,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/202992710/original/605d513ba4dc67f31ea8f147245f4d43f91470f8.jpg",
    designTypeId: 2,
    designStyleId: 11
  },
  {
    username: "yassine_sey",
    priceStartFrom: 100,
    imageUrl: "https://fiverr-res.cloudinary.com/video/upload/so_1.0873,t_gig_cards_web/pbfk0s6hdjcxevlw1anz.png",
    designTypeId: 2,
    designStyleId: 11
  },
  {
    username: "efemena_agbaire",
    priceStartFrom: 5,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/225993186/original/c1858870b726f88b67a58a864aa62462c731b4aa.png",
    designTypeId: 2,
    designStyleId: 11
  },
  {
    username: "kindar995",
    priceStartFrom: 30,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/235595635/original/08155dca5653da662d8575cfabf8665f522bc49e.jpg",
    designTypeId: 2,
    designStyleId: 11
  },
  {
    username: "vtuber_graphics",
    priceStartFrom: 95,
    imageUrl: "https://fiverr-res.cloudinary.com/video/upload/so_24.171816,t_gig_cards_web/jz6dcz9db1ikping6byc.png",
    designTypeId: 2,
    designStyleId: 11
  },
  {
    username: "artmazigh",
    priceStartFrom: 50,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/300858796/original/cf83df2aad58cf08a9305431b62aea6b5831539f.jpg",
    designTypeId: 2,
    designStyleId: 11
  },
  {
    username: "rissayori",
    priceStartFrom: 15,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/254235752/original/0a15dabd45b7e61438726d8343ce7deefb16a125.jpg",
    designTypeId: 2,
    designStyleId: 11
  },
  {
    username: "y0on1e_",
    priceStartFrom: 5,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/254381932/original/48c3d9b3b862801a90e91d8aa273d6e50d705d94.jpg",
    designTypeId: 2,
    designStyleId: 11
  },
  {
    username: "pzpana",
    priceStartFrom: 40,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/209652143/original/f01eb53902cac06a291a1425effff173fccc0cec.png",
    designTypeId: 2,
    designStyleId: 11
  },
  {
    username: "hina0303",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/269284749/original/763d0590ffbf603e5975d9b099dde2b79842c935.png",
    designTypeId: 2,
    designStyleId: 11
  },
  {
    username: "kholed_f",
    priceStartFrom: 40,
    imageUrl: "https://fiverr-res.cloudinary.com/video/upload/so_2.167692,t_gig_cards_web/pztbvdz4cfn30ul2wq7p.png",
    designTypeId: 2,
    designStyleId: 11
  },
  {
    username: "nflsrs",
    priceStartFrom: 25,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/248366887/original/beaa2032999fed254b3410b1d87e4ec43e881468.jpg",
    designTypeId: 2,
    designStyleId: 11
  },
  {
    username: "samaelsanche891",
    priceStartFrom: 5,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/238121792/original/006de07da1e042885acb4b1131d1d1442170b326.jpg",
    designTypeId: 2,
    designStyleId: 11
  },
  {
    username: "alipseda",
    priceStartFrom: 40,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/255181635/original/93f61bd373250e4f6b941e43cf1b495f82c49e1c.jpg",
    designTypeId: 2,
    designStyleId: 11
  },
  {
    username: "udang_",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/239960002/original/5d36cb3a61ab051ac6926d3c82954cde5965dd85.png",
    designTypeId: 2,
    designStyleId: 11
  },
  {
    username: "zorkxa",
    priceStartFrom: 30,
    imageUrl: "https://fiverr-res.cloudinary.com/video/upload/so_0.564244,t_gig_cards_web/tykribeveckvc67tfy2o.png",
    designTypeId: 2,
    designStyleId: 11
  },
  {
    username: "triiachizu",
    priceStartFrom: 80,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/249239367/original/e28662e0491cd8f9a7eec0d3e312a8b04676ec4c.png",
    designTypeId: 2,
    designStyleId: 11
  },
  {
    username: "alilippoi",
    priceStartFrom: 30,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/135224129/original/8aa9397385d7de6857c0953fcdd4e112530402a7.jpg",
    designTypeId: 2,
    designStyleId: 11
  },
  {
    username: "alliumiao",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/274401628/original/ff14198aaef516999ff5a4d3da3cad24ac25e6f0.png",
    designTypeId: 2,
    designStyleId: 11
  },
  {
    username: "sketshori",
    priceStartFrom: 15,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/221956667/original/4f53ebef9e963fc9b819cd8905af4e2f033b23ea.jpg",
    designTypeId: 2,
    designStyleId: 11
  },
  {
    username: "maotorata",
    priceStartFrom: 15,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/74639436/original/cd8f20ea8488421e4311395a80b68b9719463127.jpg",
    designTypeId: 2,
    designStyleId: 11
  },
  {
    username: "equilaa",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/244479025/original/f049f24878570f04d3828bb21b0c6705dbd1f662.jpg",
    designTypeId: 2,
    designStyleId: 11
  },
  {
    username: "david_allan",
    priceStartFrom: 25,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/196688766/original/b1401e80d7c3d9170b9cd853f9bf3cd70d7af13e.jpeg",
    designTypeId: 2,
    designStyleId: 11
  },
  {
    username: "otakraptor",
    priceStartFrom: 75,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/159777978/original/e2b9ddc7aca1d089e1b18dfed10b5dedbd17335e.jpeg",
    designTypeId: 2,
    designStyleId: 11
  },
  {
    username: "arakibastudio",
    priceStartFrom: 60,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/274511421/original/78bbf6ad0be4cf719d689004a3072bbd4fdeb63c.jpg",
    designTypeId: 2,
    designStyleId: 11
  },
  {
    username: "soydamarisherna",
    priceStartFrom: 35,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/239200137/original/f9e5ca92e9e6c6c3270888fee8b6df363e8e5b5b.jpg",
    designTypeId: 2,
    designStyleId: 11
  },
  {
    username: "keanoveart",
    priceStartFrom: 5,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/289572957/original/d204fcdeccb972667779f75df1f7e61ebb6f5479.jpg",
    designTypeId: 2,
    designStyleId: 11
  },
  {
    username: "klerwin",
    priceStartFrom: 20,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/220823000/original/eb95dec2c7cce99f2d8e58f1187abfd4a71f1e4c.jpg",
    designTypeId: 2,
    designStyleId: 11
  },
  {
    username: "emsedesing",
    priceStartFrom: 20,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/216363876/original/872a26cb3211137ca7ef7493284214bd5a722675.jpg",
    designTypeId: 2,
    designStyleId: 11
  },
  {
    username: "team_richmei",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/141680055/original/8287b7333bd2f769333a5ca9bdbb64c94df337e8.jpg",
    designTypeId: 2,
    designStyleId: 11
  },
  {
    username: "aniwaifuai",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/289004812/original/b3a5bff7b51425cd60f67bb290aaa96f8f5359a7.png",
    designTypeId: 2,
    designStyleId: 11
  },
  {
    username: "okamired",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/140682102/original/4e9852de75dcd4f02d018fcf59f9ae49ecff0a24.jpg",
    designTypeId: 2,
    designStyleId: 11
  },
  {
    username: "vincentjaya",
    priceStartFrom: 35,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/215875895/original/ae0ced92dd16e41b5506a3b841b3e301f8cb81d4.jpg",
    designTypeId: 2,
    designStyleId: 11
  },
  {
    username: "inggit_awaliyah",
    priceStartFrom: 30,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/292545604/original/c8d121d6ed28f536662f9ed2fb665b8cde9062e0.jpg",
    designTypeId: 2,
    designStyleId: 11
  },
  {
    username: "mechbrainconcep",
    priceStartFrom: 15,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/97523866/original/625c81b5ad035fb3347c471da7f15d646ff0fecc.png",
    designTypeId: 2,
    designStyleId: 11
  },
  {
    username: "colaberry",
    priceStartFrom: 20,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/195005354/original/c3c51a8b4e2d8e38e2baa4d8d267a599c3c7daa3.jpg",
    designTypeId: 2,
    designStyleId: 11
  },
  {
    username: "alennarucoba",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/250647060/original/f54f30e1144cd04658a7275768e04b5bdb13914d.png",
    designTypeId: 2,
    designStyleId: 11
  },
  {
    username: "usagi1923",
    priceStartFrom: 25,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/137113513/original/41084e76b8dc53b744a969d98bb23d1ef4993dfa.png",
    designTypeId: 2,
    designStyleId: 11
  },
  {
    username: "neverdusk",
    priceStartFrom: 20,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/275110654/original/9675f4fec30e0e9c2897e39804969735eb2043b6.png",
    designTypeId: 2,
    designStyleId: 11
  },
  {
    username: "notionart",
    priceStartFrom: 200,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/269221898/original/4c5726d057085f3d0449085f73f43a8ee255ee39.png",
    designTypeId: 2,
    designStyleId: 11
  },
  {
    username: "kairikazu",
    priceStartFrom: 25,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/132259317/original/024e328ec17a9ffbb25e3746328e26cd1ea81e29.jpg",
    designTypeId: 2,
    designStyleId: 11
  },
  {
    username: "noyart",
    priceStartFrom: 70,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/238926535/original/6d74c975c69e30e7068aca41e9235a33f4a67953.jpg",
    designTypeId: 2,
    designStyleId: 11
  },
  {
    username: "harisunstudios",
    priceStartFrom: 20,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/266541865/original/7db40c95c4967fb417fec2902ed1f5f0d6de73bc.jpg",
    designTypeId: 2,
    designStyleId: 11
  },
  {
    username: "argiansyah",
    priceStartFrom: 5,
    imageUrl: "https://fiverr-res.cloudinary.com/video/upload/t_gig_cards_web/sqiapldxva1lzhmmpqq2.png",
    designTypeId: 2,
    designStyleId: 11
  },
  {
    username: "g4vtuber",
    priceStartFrom: 35,
    imageUrl: "https://fiverr-res.cloudinary.com/video/upload/t_gig_cards_web/izkbbhqs1urb250tmams.png",
    designTypeId: 2,
    designStyleId: 11
  },
  {
    username: "tanpeiii",
    priceStartFrom: 35,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/238817697/original/b4aaf288efff4bdbd57f55d8ffd00846585d993f.jpeg",
    designTypeId: 2,
    designStyleId: 11
  },
  {
    username: "dylanjjp",
    priceStartFrom: 15,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/235671236/original/8f863b0d2f6ba3a4bb525619c093f9b5b9b377b4.jpg",
    designTypeId: 2,
    designStyleId: 11
  },
  {
    username: "animorphic",
    priceStartFrom: 15,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/192566231/original/7e989e5d54bda0425e174add47932d80991a7e6b.jpeg",
    designTypeId: 2,
    designStyleId: 11
  },
  {
    username: "nogame_kun",
    priceStartFrom: 20,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/187384738/original/54149e862db098fcb082fd93b7cbd2291f30a890.png",
    designTypeId: 2,
    designStyleId: 11
  },
  {
    username: "potatodahamster",
    priceStartFrom: 5,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/275707693/original/f03a28fe1d745c144fa06b63516bf22f7f95b10b.png",
    designTypeId: 2,
    designStyleId: 11
  },
  {
    username: "aishcream24",
    priceStartFrom: 15,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/255597887/original/812bd8b4408b6d84d280d8f5bd15f2f7a3377ddb.jpg",
    designTypeId: 2,
    designStyleId: 11
  },
  {
    username: "noatriz",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/181958076/original/8e511e927054912a994c8c031ca1e1dea059edf9.png",
    designTypeId: 2,
    designStyleId: 11
  },
  {
    username: "tfnfe_sach",
    priceStartFrom: 20,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/167011736/original/f76bcc63cce7a034ffe12b767f2d6111139c1700.jpg",
    designTypeId: 2,
    designStyleId: 11
  },
  {
    username: "leandronotado",
    priceStartFrom: 30,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/167364920/original/6f19d4c94454a869751ad14188ab3c84389a640e.jpg",
    designTypeId: 2,
    designStyleId: 11
  },
  {
    username: "lyy___",
    priceStartFrom: 20,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/266619761/original/3d02856d7a175539f1c3f9fe12febf93325f9d4b.jpg",
    designTypeId: 2,
    designStyleId: 11
  },
  {
    username: "geerux_",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/223586816/original/2cb8ece63d6f6506ddaf6a3a58a77c6c66ff20bd.png",
    designTypeId: 2,
    designStyleId: 11
  },
  {
    username: "artechneo",
    priceStartFrom: 5,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/266031660/original/048a8d838f4e5efb86437703063c182b9f718e9f.jpg",
    designTypeId: 2,
    designStyleId: 11
  },
  {
    username: "qeemera",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/194700646/original/877aa84c5028ef5eb24631ef9ab7b50d9c03754e.jpg",
    designTypeId: 2,
    designStyleId: 11
  },
  {
    username: "papoy_banana",
    priceStartFrom: 5,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/226744682/original/057c131bb0c9fb4412d43c3603d939acb4c6c567.jpeg",
    designTypeId: 2,
    designStyleId: 11
  },
  {
    username: "izeunne",
    priceStartFrom: 5,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/183372277/original/906584376e34bab3e5dfc967a686acf761203a6c.jpg",
    designTypeId: 2,
    designStyleId: 11
  },
  {
    username: "liilica",
    priceStartFrom: 15,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/142911148/original/e1467f7a722bb1e2d21fc2ab2db227dbc168d695.jpg",
    designTypeId: 2,
    designStyleId: 11
  },
  {
    username: "jesussantana351",
    priceStartFrom: 30,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/230136121/original/8112b6546dd825d8cf047884523f197b9de8ffd5.jpg",
    designTypeId: 2,
    designStyleId: 11
  },
  {
    username: "rnfdrawing",
    priceStartFrom: 20,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/204403975/original/2ef2632ce8724de478d799e71e4a53a71e8ba38e.jpg",
    designTypeId: 2,
    designStyleId: 11
  },
  {
    username: "julilee",
    priceStartFrom: 25,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/172660276/original/ed89b0a03f078ef59937a7a0ef9c79d4cd5b560d.jpg",
    designTypeId: 2,
    designStyleId: 12
  },
  {
    username: "mnash884",
    priceStartFrom: 80,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/268552967/original/580d9304430dd8332e45b8c2feebf3eacedc51c0.jpeg",
    designTypeId: 2,
    designStyleId: 12
  },
  {
    username: "kelelowor",
    priceStartFrom: 50,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/58672324/original/8c54f4abbd2d9926a8e94dde5ff630a190e18cad.jpg",
    designTypeId: 2,
    designStyleId: 12
  },
  {
    username: "jasperlim",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/21670417/original/ab7aea65046b0c23fcb03057f5aad87f6c96fe68.jpg",
    designTypeId: 2,
    designStyleId: 12
  },
  {
    username: "mladjaart",
    priceStartFrom: 20,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/138998585/original/7229e7cb8566059ee8001025aa1b2befcadc8028.png",
    designTypeId: 2,
    designStyleId: 12
  },
  {
    username: "javanart",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/135410724/original/49cfb4c9e32a0c9d96d0ca701c67a7f5050c4523.jpg",
    designTypeId: 2,
    designStyleId: 12
  },
  {
    username: "sumonjisan786",
    priceStartFrom: 5,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/249576118/original/a5cb9814fd172384730c8e17e7fc4cb77c2d7245.jpg",
    designTypeId: 2,
    designStyleId: 12
  },
  {
    username: "shamim5181",
    priceStartFrom: 5,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/171531502/original/a713218728f47abaf8142177fdfc18c18671fe36.jpg",
    designTypeId: 2,
    designStyleId: 12
  },
  {
    username: "sakibhasan480",
    priceStartFrom: 5,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/199992083/original/2e8717aaf5b291085245094a22e358aa7f354841.jpg",
    designTypeId: 2,
    designStyleId: 12
  },
  {
    username: "pixelscure",
    priceStartFrom: 5,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/154519142/original/8ae51cd4ed0c1a8e8f7b4ff6fa20eb29a97c65b9.jpg",
    designTypeId: 2,
    designStyleId: 12
  },
  {
    username: "gustavogorgone",
    priceStartFrom: 15,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/196731572/original/468e3bf29ad9ad1fedb07e1dccd6f13735816367.jpg",
    designTypeId: 2,
    designStyleId: 12
  },
  {
    username: "vijaytn41",
    priceStartFrom: 5,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/108792800/original/58848729e480cd0f143fa0a818e95662f2025bc1.jpg",
    designTypeId: 2,
    designStyleId: 12
  },
  {
    username: "abdurrohmanalha",
    priceStartFrom: 15,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/242853329/original/c71aab9b864a030470e5fb9d970a7aa15f02e6a4.jpg",
    designTypeId: 2,
    designStyleId: 12
  },
  {
    username: "volegian",
    priceStartFrom: 5,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/229247715/original/cb8cfb672524c396df6fdd882cabfa84e4992d46.png",
    designTypeId: 2,
    designStyleId: 12
  },
  {
    username: "nymurkhan",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/191809411/original/df2489757256cc6af57aaf6f970ff8a494043b77.jpg",
    designTypeId: 2,
    designStyleId: 12
  },
  {
    username: "e_word_graphic",
    priceStartFrom: 5,
    imageUrl: "https://fiverr-res.cloudinary.com/video/upload/so_1.254021,t_gig_cards_web/rbnhcovimxpsfexg2ez0.png",
    designTypeId: 2,
    designStyleId: 12
  },
  {
    username: "damngods",
    priceStartFrom: 15,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/233170661/original/c6f9b93f288295d36034dd625146b79fce70c9ba.jpg",
    designTypeId: 2,
    designStyleId: 12
  },
  {
    username: "venivenikr",
    priceStartFrom: 5,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/175774900/original/e2d51343b5b8d653a1ce6ec13cf1dd7217f49eef.png",
    designTypeId: 2,
    designStyleId: 12
  },
  {
    username: "phis_animations",
    priceStartFrom: 15,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/180851590/original/0501724273880c52cb46c846fc309da6b06f67a1.png",
    designTypeId: 2,
    designStyleId: 12
  },
  {
    username: "devi_novita",
    priceStartFrom: 30,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/195507390/original/73f49f4111eaf40d0ba389f37b76b762bbb69f9d.jpg",
    designTypeId: 2,
    designStyleId: 12
  },
  {
    username: "exxart",
    priceStartFrom: 5,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/126839415/original/4e80fadb5f466f534e8556831bbecb8c0a3b2ca1.jpg",
    designTypeId: 2,
    designStyleId: 12
  },
  {
    username: "mettawijaksana",
    priceStartFrom: 5,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/263632126/original/84392c114a3bcee82790b000fb08723d2407513e.png",
    designTypeId: 2,
    designStyleId: 12
  },
  {
    username: "eminencesys",
    priceStartFrom: 15,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/52021659/original/1edb2eb254242385783269709bbf32098b54ace1.jpg",
    designTypeId: 2,
    designStyleId: 12
  },
  {
    username: "goregasmic",
    priceStartFrom: 30,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/196069033/original/1662a3b58d03718158b6baca659e469b92a217c2.jpg",
    designTypeId: 2,
    designStyleId: 12
  },
  {
    username: "danieldomm",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/153145634/original/650b02d0ce7641627b21d701c92d92b71258ab32.jpg",
    designTypeId: 2,
    designStyleId: 12
  },
  {
    username: "lewreid",
    priceStartFrom: 20,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/130165046/original/39f244387a1f6ddfd00e3654e4976d3b41cc6b22.jpg",
    designTypeId: 2,
    designStyleId: 12
  },
  {
    username: "atiksugiwara",
    priceStartFrom: 5,
    imageUrl: "https://fiverr-res.cloudinary.com/video/upload/so_0.350431,t_gig_cards_web/dole68nscze3xbxgcczf.png",
    designTypeId: 2,
    designStyleId: 12
  },
  {
    username: "katerinadot",
    priceStartFrom: 70,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/29822865/original/8976d7ab849cc63b7a1150cf66ee42af74185307.jpg",
    designTypeId: 2,
    designStyleId: 12
  },
  {
    username: "donartmagic",
    priceStartFrom: 5,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/191488208/original/1e5042266d55ff2d341b9fc758452ac70b942b2e.jpg",
    designTypeId: 2,
    designStyleId: 12
  },
  {
    username: "ranazain597",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/157687815/original/843e0f985ea91ca84d60ea330c3dfabbed5ca642.jpg",
    designTypeId: 2,
    designStyleId: 12
  },
  {
    username: "alex1wing",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/209858193/original/c05afe8a260b132afe340014a65f7d24d5529bde.jpg",
    designTypeId: 2,
    designStyleId: 12
  },
  {
    username: "reindrawthings",
    priceStartFrom: 5,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/295099214/original/f2eb3b8322cfade6958e411bd17ee0274ddde45e.png",
    designTypeId: 2,
    designStyleId: 12
  },
  {
    username: "shalock",
    priceStartFrom: 20,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/192340845/original/e7eeba2f4537585210023c1a05565fac5e4376bd.jpg",
    designTypeId: 2,
    designStyleId: 12
  },
  {
    username: "reindrawthings",
    priceStartFrom: 5,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/295389668/original/936303ae6f41c652bab131394abebe0521376e85.jpg",
    designTypeId: 2,
    designStyleId: 12
  },
  {
    username: "ryant92",
    priceStartFrom: 5,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/177714173/original/7ed54823d87e155b5288b1eb49b18d4f63b1cf6a.jpg",
    designTypeId: 2,
    designStyleId: 12
  },
  {
    username: "mak109",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/244564588/original/15948f5fd84942211f2409bb1117a56526a2e6f6.jpg",
    designTypeId: 2,
    designStyleId: 12
  },
  {
    username: "musaddar",
    priceStartFrom: 5,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/132098093/original/d39311d16d3f2e5d607bf3c943996f7691b14338.jpg",
    designTypeId: 2,
    designStyleId: 12
  },
  {
    username: "fatimaseehar",
    priceStartFrom: 5,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/216011003/original/602e32f22ff75c2774f842ef822890fb1a617aae.png",
    designTypeId: 2,
    designStyleId: 12
  },
  {
    username: "awanpena",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/220300437/original/905fb4b4735c6c665c0900e820e1e9ac98767a8b.jpg",
    designTypeId: 2,
    designStyleId: 12
  },
  {
    username: "giuseppegianni",
    priceStartFrom: 20,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/147285497/original/35fb437cc67d948ae6b77099fb79f8927b40d4a5.png",
    designTypeId: 2,
    designStyleId: 12
  },
  {
    username: "achith_",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/196930498/original/5b1f68c6157dd61704c4af1b288dc434a8405adb.jpg",
    designTypeId: 2,
    designStyleId: 12
  },
  {
    username: "anastasisoroka",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/281456837/original/3e1dd370192b46b92681eabc210f78a7f5bffb3f.jpeg",
    designTypeId: 2,
    designStyleId: 12
  },
  {
    username: "deny_wicka",
    priceStartFrom: 30,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/133100211/original/f77fea699c92e6d6c7f76e6b597b1b3c60aa8516.jpeg",
    designTypeId: 2,
    designStyleId: 12
  },
  {
    username: "john062",
    priceStartFrom: 20,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/79496151/original/47304720f450cbe1477e68df890d8f561f1c4017.jpg",
    designTypeId: 2,
    designStyleId: 12
  },
  {
    username: "stencilsensei",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/9631287/original/aab3871b61480d098a31f9fcd45440c91094fd65.jpg",
    designTypeId: 2,
    designStyleId: 12
  },
  {
    username: "pafgraphics",
    priceStartFrom: 5,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/215925865/original/e38aaf095b4716167bc344c1f7abd4e4d3d16ea5.png",
    designTypeId: 2,
    designStyleId: 12
  },
  {
    username: "linkrawkartwork",
    priceStartFrom: 20,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/173963265/original/d694972fd720766e818dbbe81d1f896750abd9c0.jpg",
    designTypeId: 2,
    designStyleId: 12
  },
  {
    username: "afiant",
    priceStartFrom: 5,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/230911980/original/72953d6f77a1d1aa212f8cae9c8061dc91679fea.jpg",
    designTypeId: 2,
    designStyleId: 12
  },
  {
    username: "videohaven",
    priceStartFrom: 300,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/269342477/original/f0c1f5e44f337053869daa0c848755ee456dd2e5.jpg",
    designTypeId: 2,
    designStyleId: 12
  },
  {
    username: "adoraarts_",
    priceStartFrom: 15,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/184919726/original/70350698072d8e51a9b8fc9d61314d1683765ad7.jpg",
    designTypeId: 2,
    designStyleId: 12
  },
  {
    username: "rajdeepsingh070",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/115861171/original/68f5e390b01638866cac1433dd63578cf9c3ad67.jpg",
    designTypeId: 2,
    designStyleId: 12
  },
  {
    username: "save_eric",
    priceStartFrom: 5,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/149890753/original/e1577fcd3940c19feaac44a8a3f8399d1432e615.jpg",
    designTypeId: 2,
    designStyleId: 12
  },
  {
    username: "tonymidi",
    priceStartFrom: 250,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/145046317/original/6c3fbcbfdad3ba77b38957596b97db8e2b3833d6.jpg",
    designTypeId: 2,
    designStyleId: 12
  },
  {
    username: "ricardomossini7",
    priceStartFrom: 15,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/182632196/original/cdb278c715f5f171b3fb11431113659236e8c9a9.jpg",
    designTypeId: 2,
    designStyleId: 12
  },
  {
    username: "patentdrawings",
    priceStartFrom: 20,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/121947858/original/5008a97c9a1a3085e68925dc5288db1fcb7f6a56.jpg",
    designTypeId: 2,
    designStyleId: 12
  },
  {
    username: "nalalya",
    priceStartFrom: 25,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs2/222735162/original/3602c9db74fcee1359b02429fa8da521f34754ad.jpg",
    designTypeId: 2,
    designStyleId: 12
  },
  {
    username: "alansyah",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/268570015/original/d823a2b1906015bee27273237e0a40947cb65202.jpg",
    designTypeId: 2,
    designStyleId: 12
  },
  {
    username: "agneszakaria",
    priceStartFrom: 35,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/126867661/original/4bb21618bf6eb15d3a84923b1cc198f8868db021.jpeg",
    designTypeId: 2,
    designStyleId: 12
  },
  {
    username: "aleksandra06",
    priceStartFrom: 30,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/131944386/original/85eaa6f4c55e25be65c262d1df185d4421a99cd0.jpeg",
    designTypeId: 2,
    designStyleId: 12
  },
  {
    username: "saboakdag",
    priceStartFrom: 20,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/221324254/original/1605f5da2bb89afa0a3b03f4c9834c835490293c.jpg",
    designTypeId: 2,
    designStyleId: 12
  },
  {
    username: "sakibhasan480",
    priceStartFrom: 5,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/200137660/original/e9270654f4e3ee3fe7bc0070c7157c7d056ee9ed.jpg",
    designTypeId: 2,
    designStyleId: 12
  },
  {
    username: "mnash884",
    priceStartFrom: 65,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/208203227/original/914456002462cd858001756255ac0b528df8be3c.png",
    designTypeId: 2,
    designStyleId: 12
  },
  {
    username: "shizukahanari",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/145409261/original/aede068f6d85a43da1cf5aec184429b315ec1645.png",
    designTypeId: 2,
    designStyleId: 12
  },
  {
    username: "shawnd1988",
    priceStartFrom: 15,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/87053351/original/94ee45351fbcdf869b9dd276abb36ff2d2de65c9.jpg",
    designTypeId: 2,
    designStyleId: 12
  },
  {
    username: "m_faseeh7",
    priceStartFrom: 5,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/223326010/original/6d76d23b14c3ec86473a341e87403ec07d5cb439.jpg",
    designTypeId: 2,
    designStyleId: 12
  },
  {
    username: "blos_graffiti",
    priceStartFrom: 20,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/124395559/original/825170a8415917c647c512c95bc79c34d1af92ba.jpg",
    designTypeId: 2,
    designStyleId: 12
  },
  {
    username: "batafuth101",
    priceStartFrom: 5,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/189620107/original/f214aec49a7f7423007c7bb70d27184562b4ff51.jpg",
    designTypeId: 2,
    designStyleId: 12
  },
  {
    username: "chaimholtjer",
    priceStartFrom: 75,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/157654554/original/b76f20b7cfac8be115d8bc8dd81a5be22e2fff8f.jpg",
    designTypeId: 2,
    designStyleId: 12
  },
  {
    username: "erickdsgn",
    priceStartFrom: 5,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/144585077/original/ac7bf0c5d000c66bb04d97092c197c21681fbfa2.jpg",
    designTypeId: 2,
    designStyleId: 12
  },
  {
    username: "dandipdn",
    priceStartFrom: 20,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/200243693/original/0eb7e4ea9375e05b8f9035acc56acbcc287638db.png",
    designTypeId: 2,
    designStyleId: 12
  },
  {
    username: "ipamia",
    priceStartFrom: 50,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/164095176/original/d459fbcc9ee13ef7c83f8aa4536329786badbd22.jpg",
    designTypeId: 2,
    designStyleId: 12
  },
  {
    username: "mary_savko",
    priceStartFrom: 80,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/132064207/original/45a8489f5f7faf3121569a28d1d6f9d81c74704a.jpg",
    designTypeId: 2,
    designStyleId: 12
  },
  {
    username: "deepakkumar54",
    priceStartFrom: 15,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/161776147/original/bd50402a16aed526386261eec78aa026c87ea423.jpg",
    designTypeId: 2,
    designStyleId: 12
  },
  {
    username: "crushnickred",
    priceStartFrom: 20,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/219013966/original/4754d2a4c19d5aebdf136495756ca7727f86f196.jpg",
    designTypeId: 2,
    designStyleId: 12
  },
  {
    username: "aleksandrafedor",
    priceStartFrom: 15,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/159560609/original/aa599036992bf59a540e9531a16fa45c78120b25.jpg",
    designTypeId: 2,
    designStyleId: 12
  },
  {
    username: "rotna03",
    priceStartFrom: 5,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/219720943/original/2df21bd1d300b0f7c965b92ec1fc66bd4d30e6a6.jpg",
    designTypeId: 2,
    designStyleId: 12
  },
  {
    username: "radennorfiqri",
    priceStartFrom: 15,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/88563086/original/023e97c81afe2c7a51a0914c765526f930b480c9.jpg",
    designTypeId: 2,
    designStyleId: 12
  },
  {
    username: "cherrydemon",
    priceStartFrom: 25,
    imageUrl: "https://fiverr-res.cloudinary.com/video/upload/so_0.344241,t_gig_cards_web/feqa5iqwkj17qmzecz8a.png",
    designTypeId: 2,
    designStyleId: 12
  },
  {
    username: "yunaz_ant",
    priceStartFrom: 5,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/190434120/original/b9f21efd0ad1ed9f59ac27c5022aa42f143d2b52.jpeg",
    designTypeId: 2,
    designStyleId: 12
  },
  {
    username: "mifta96",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/133616149/original/f4849d89d2fa90454d610290e1ea355ad92ff421.png",
    designTypeId: 2,
    designStyleId: 12
  },
  {
    username: "jherfan",
    priceStartFrom: 5,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/191074358/original/4e96a47b26d3d2237148ee0642c2e473d9079a60.jpg",
    designTypeId: 2,
    designStyleId: 12
  },
  {
    username: "jeeshiu",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/264254294/original/a6e4efe97e2f063733af4f3f2e108b1c84ff66cd.jpg",
    designTypeId: 2,
    designStyleId: 12
  },
  {
    username: "raster2vector",
    priceStartFrom: 15,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/127867676/original/a38be3ec933b1dccffa31b57149421026cfdc4fd.png",
    designTypeId: 2,
    designStyleId: 12
  },
  {
    username: "nguyenngocthach",
    priceStartFrom: 15,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/171414260/original/9a811414dc606f88acf93cf00e2658a4ebaeb3ac.png",
    designTypeId: 2,
    designStyleId: 12
  },
  {
    username: "bloodonice",
    priceStartFrom: 5,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/242131057/original/3463638d18098a56459840f51f8b1d0013eae0a3.jpg",
    designTypeId: 2,
    designStyleId: 12
  },
  {
    username: "faisalamin472",
    priceStartFrom: 5,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/127406829/original/e5e8eaab636db2bcb516911e3513c0873f8482da.jpg",
    designTypeId: 2,
    designStyleId: 12
  },
  {
    username: "jayaprastya",
    priceStartFrom: 5,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/256295684/original/ae97ffebad6ceec8af285282c17785d80a1c290f.jpg",
    designTypeId: 2,
    designStyleId: 12
  },
  {
    username: "fukamihb",
    priceStartFrom: 5,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/148774464/original/c8c56a4301603c033b874e5443c1741436e89088.jpg",
    designTypeId: 2,
    designStyleId: 12
  },
  {
    username: "mifta96",
    priceStartFrom: 5,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/142816283/original/a7072d0662b3d28fdb5e7bdb06020c610273e053.png",
    designTypeId: 2,
    designStyleId: 12
  },
  {
    username: "sabiraputul",
    priceStartFrom: 15,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/98015396/original/5cd4c911c3226c5312ae8a19c9566155e0ef819c.png",
    designTypeId: 2,
    designStyleId: 12
  },
  {
    username: "asmomarfaruk",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/144048237/original/91a360ffaa6196b22a3386074ee7e8c3710ff826.jpg",
    designTypeId: 2,
    designStyleId: 12
  },
  {
    username: "tienmx11",
    priceStartFrom: 5,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/87823686/original/2a3b55b9e0dc9da63d54b1a4450d86f9fbbb49db.jpg",
    designTypeId: 2,
    designStyleId: 12
  },
  {
    username: "bara42",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/135683454/original/4cc799b83d2f771521dba193d861c9b57d810276.jpg",
    designTypeId: 2,
    designStyleId: 12
  },
  {
    username: "nekovoid",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/124249599/original/25e9afefcdcbf5495f7139ff596d67ecabc3e276.jpg",
    designTypeId: 2,
    designStyleId: 12
  },
  {
    username: "eijazz",
    priceStartFrom: 5,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/178773757/original/8f2ab32e2c4c692cadc03ec6e78301036978e789.jpg",
    designTypeId: 2,
    designStyleId: 12
  },
  {
    username: "gouache7",
    priceStartFrom: 40,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/189568921/original/24c16156f135d256d114a5324cd1bc2d3513f617.jpg",
    designTypeId: 2,
    designStyleId: 12
  },
  {
    username: "fassal_be",
    priceStartFrom: 5,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/250547431/original/ee3a5739c011b99f9ab445f4f9244bbdb5b29be1.jpg",
    designTypeId: 2,
    designStyleId: 12
  },
  {
    username: "freddievincent",
    priceStartFrom: 5,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/243706999/original/c8bec7fde419557c8d1f47c62c6ab7ccbf2a2af7.jpg",
    designTypeId: 2,
    designStyleId: 12
  },
  {
    username: "ropidarmansyah",
    priceStartFrom: 15,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/217069896/original/4c97870a3541e89e03413279e6e37d3fa9d97d97.png",
    designTypeId: 2,
    designStyleId: 12
  },
  {
    username: "elmagnificoart",
    priceStartFrom: 20,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/115763308/original/d5139f1a6b06080bfda74f540dacb3d3517e189c.png",
    designTypeId: 2,
    designStyleId: 12
  },
  {
    username: "zuhdise",
    priceStartFrom: 15,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/256740945/original/408ce1da2efb8047ce6163a98b4cfe90fce51c64.jpg",
    designTypeId: 2,
    designStyleId: 12
  },
  {
    username: "drishhtiiii",
    priceStartFrom: 5,
    imageUrl: "https://fiverr-res.cloudinary.com/video/upload/t_gig_cards_web/hmtmdtgmitabfgivoorh.png",
    designTypeId: 2,
    designStyleId: 12
  },
  {
    username: "savannahkswnd",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/153633546/original/855bf63f538929e9a571801036984b01bd10570a.jpg",
    designTypeId: 2,
    designStyleId: 12
  },
  {
    username: "john062",
    priceStartFrom: 15,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/106802309/original/c6a750d07bd03d94718ed71f805588162fb08a54.jpg",
    designTypeId: 2,
    designStyleId: 12
  },
  {
    username: "induranga596",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/188420355/original/3f1c705519abfa657f766b9209373739ab7bf2a4.jpg",
    designTypeId: 2,
    designStyleId: 12
  },
  {
    username: "juancruzvitelli",
    priceStartFrom: 75,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/140089025/original/0ed106f51b1abf7ae934bb4190e6b6feaeba3b35.png",
    designTypeId: 2,
    designStyleId: 12
  },
  {
    username: "rafifathurrohma",
    priceStartFrom: 15,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/231714697/original/9ffeb5b3f1744090a6c3d25a4054840b9d2a2980.jpg",
    designTypeId: 2,
    designStyleId: 12
  },
  {
    username: "farhannursahal",
    priceStartFrom: 5,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/143158529/original/3e53006948d8fb96557f53c451d6e4b9b5fb183c.jpg",
    designTypeId: 2,
    designStyleId: 12
  },
  {
    username: "kavi7755",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/217295895/original/10e739163646dc9344c76d16ea8b2e304666fa2c.jpg",
    designTypeId: 2,
    designStyleId: 12
  },
  {
    username: "gushadi",
    priceStartFrom: 5,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/133753602/original/7cc4a5bfe3108e8e898976fd79309bd78f23f4d5.jpg",
    designTypeId: 2,
    designStyleId: 12
  },
  {
    username: "yosafat_catur",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/136160664/original/b00088aee77fae0bb4b394959159f2d53c63a0b6.jpg",
    designTypeId: 2,
    designStyleId: 12
  },
  {
    username: "kavi7755",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/video/upload/so_5.617733,t_gig_cards_web/ef8e2vgzm46wjzstsoxt.png",
    designTypeId: 2,
    designStyleId: 12
  },
  {
    username: "javanart",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/138697009/original/cb067e0ffec697955de5c5e2b1f9bbc311b14734.jpg",
    designTypeId: 2,
    designStyleId: 12
  },
  {
    username: "decorafis",
    priceStartFrom: 20,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/123191563/original/a5cb29b335843073d3703a4b9b1fd517ed78bdb4.jpg",
    designTypeId: 2,
    designStyleId: 12
  },
  {
    username: "logostate",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/207143775/original/db0687385d05ab514bc08ec908d447c04a6b1e85.jpg",
    designTypeId: 2,
    designStyleId: 12
  },
  {
    username: "fassal_be",
    priceStartFrom: 5,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/229034212/original/7303592ad12c0feb066a8cbdaf9a14ae6e0f7523.jpg",
    designTypeId: 2,
    designStyleId: 12
  },
  {
    username: "virginiamtnez",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/147820854/original/c95b48742b3610071c6ec408740189969987f19a.jpg",
    designTypeId: 2,
    designStyleId: 12
  },
  {
    username: "gudkraf",
    priceStartFrom: 15,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/141076953/original/616b9440a9dd2f4eb27ea2f9fcdc25a59822a4a7.png",
    designTypeId: 2,
    designStyleId: 12
  },
  {
    username: "ariyan95",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/237980311/original/5b9018be135a9bb2ce40986594e0de52a45f68f6.jpg",
    designTypeId: 2,
    designStyleId: 12
  },
  {
    username: "ateryx_",
    priceStartFrom: 30,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/266972597/original/7af088693e547de5efd33b6727cc441919f681c9.png",
    designTypeId: 2,
    designStyleId: 12
  },
  {
    username: "rupert_jake",
    priceStartFrom: 30,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/142688003/original/dc4451f2490ef5d705eb800713cc9c7a332cdb42.jpg",
    designTypeId: 2,
    designStyleId: 12
  },
  {
    username: "karozdesign",
    priceStartFrom: 5,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/236787310/original/0c2b0f765fc7cc24540fac081a4c89be2c138297.jpg",
    designTypeId: 2,
    designStyleId: 12
  },
  {
    username: "mdhasinuzzaman",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/175293550/original/dafe9eb1b74fad871bfa9668a0ca79cecfd559c6.jpg",
    designTypeId: 2,
    designStyleId: 12
  },
  {
    username: "soesdraw",
    priceStartFrom: 25,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/200303195/original/70ec4fff9a5eeb819b97126d58c8c1ccbc1697ed.jpeg",
    designTypeId: 2,
    designStyleId: 12
  },
  {
    username: "raththalage",
    priceStartFrom: 5,
    imageUrl: "https://fiverr-res.cloudinary.com/video/upload/so_5.454683,t_gig_cards_web/tyyxdzvqedt5pchypfoo.png",
    designTypeId: 2,
    designStyleId: 12
  },
  {
    username: "vector_graphy",
    priceStartFrom: 5,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/165643611/original/c63a9223b41347556ee399f425e0383a8de77f38.jpg",
    designTypeId: 2,
    designStyleId: 12
  },
  {
    username: "galihramadlan",
    priceStartFrom: 5,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/216173124/original/f3ba5f70e4f8bff4c41fc85dc7afc78db0abb77c.png",
    designTypeId: 2,
    designStyleId: 12
  },
  {
    username: "tonymidi",
    priceStartFrom: 250,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/145046317/original/6c3fbcbfdad3ba77b38957596b97db8e2b3833d6.jpg",
    designTypeId: 2,
    designStyleId: 12
  },
  {
    username: "yarilochka",
    priceStartFrom: 15,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/185715552/original/05e4e8eebd1860379643250f7598cfd0f99a3b98.png",
    designTypeId: 2,
    designStyleId: 12
  },
  {
    username: "bipudaskajol",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/183156471/original/f8d81e6719587afac0e095bd7811c2b354aaa37a.png",
    designTypeId: 2,
    designStyleId: 12
  },
  {
    username: "lanart_",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/video/upload/so_8.726122,t_gig_cards_web/bydlwmmmai5hz7ha6cos.png",
    designTypeId: 2,
    designStyleId: 12
  },
  {
    username: "bea_davila",
    priceStartFrom: 15,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/247429596/original/8a118b9da20ac2ca0f4f0b4705aa3df610f21f75.png",
    designTypeId: 2,
    designStyleId: 12
  },
  {
    username: "antaripaarts",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/179832109/original/edaebd05db42b4e0ec5f83d730237466217743ad.jpg",
    designTypeId: 2,
    designStyleId: 12
  },
  {
    username: "gilmoyang",
    priceStartFrom: 80,
    imageUrl: "https://fiverr-res.cloudinary.com/video/upload/t_gig_cards_web/ie6aqleet8lhdnqpecun.png",
    designTypeId: 2,
    designStyleId: 12
  },
  {
    username: "creativesetu22",
    priceStartFrom: 5,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/267321570/original/cfd1b67adb9342f9b6239b117ad9f0c394ce2514.jpg",
    designTypeId: 2,
    designStyleId: 12
  },
  {
    username: "creativespacewo",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/102070118/original/d3c293cb19d7ad1748104d6a69afa2baf77024a4.jpg",
    designTypeId: 2,
    designStyleId: 12
  },
  {
    username: "aliusman10",
    priceStartFrom: 15,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/269901758/original/5938a2dcc5c2c926136a27d624d2dd79f034560b.jpg",
    designTypeId: 2,
    designStyleId: 12
  },
  {
    username: "farhanfaiz",
    priceStartFrom: 5,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/105471647/original/611bd4348d83e91bf6944f41c6914045253151aa.jpg",
    designTypeId: 2,
    designStyleId: 12
  },
  {
    username: "andvect_dp",
    priceStartFrom: 5,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/170792359/original/e9728646e69481d4984d89e2aa1925687b84bfb2.jpg",
    designTypeId: 2,
    designStyleId: 12
  },
  {
    username: "sultanaart",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/181848212/original/534b6cb5bd3ce414d7c7d660bf53ffa19e7ea19d.jpg",
    designTypeId: 2,
    designStyleId: 12
  },
  {
    username: "santi777",
    priceStartFrom: 5,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/123014351/original/a1f904454abb6d7b5d92bbf9e210378ac9716d6b.jpg",
    designTypeId: 2,
    designStyleId: 12
  },
  {
    username: "najibfatikhun",
    priceStartFrom: 5,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/160670867/original/5034540a957eea9ed8c8f4ec72d2e051a8f1c4d6.png",
    designTypeId: 2,
    designStyleId: 12
  },
  {
    username: "akbarlucu",
    priceStartFrom: 5,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/239336517/original/317d9b036f622c7ec153afad6041b91b945779a9.png",
    designTypeId: 2,
    designStyleId: 12
  },
  {
    username: "bymarmara",
    priceStartFrom: 20,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/221865323/original/158d335401059b942bb0f9c62b9620a85f9dff77.jpg",
    designTypeId: 3,
    designStyleId: 10
  },
  {
    username: "hasher2019",
    priceStartFrom: 5,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/159382220/original/cc6408ea334e7e617ed850100bf8ad121a38f37b.jpg",
    designTypeId: 3,
    designStyleId: 10
  },
  {
    username: "samsitara",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/25936772/original/ac9dc5f9192cf74b6739c5271380ddd11087d12a.jpg",
    designTypeId: 3,
    designStyleId: 10
  },
  {
    username: "quickkdesign",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/182590110/original/80505be05c8a37c2f7d8a395fe754c9957386ee6.jpg",
    designTypeId: 3,
    designStyleId: 10
  },
  {
    username: "mariettis",
    priceStartFrom: 190,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/114414928/original/c8b9fb199b6cd82b85f3a25487aa85409748de17.jpg",
    designTypeId: 3,
    designStyleId: 10
  },
  {
    username: "filandesign",
    priceStartFrom: 20,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/177043231/original/b80d5fbb4a8e210476ec37e65acb06a24f0d3c48.jpg",
    designTypeId: 3,
    designStyleId: 10
  },
  {
    username: "mirifada",
    priceStartFrom: 35,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/162378637/original/e3365de50a14cb602e037da771ba823ade3a9309.jpg",
    designTypeId: 3,
    designStyleId: 10
  },
  {
    username: "fancyartist",
    priceStartFrom: 30,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/104029895/original/5c60194d5ff91171addfc1b3d3ab6a4ea4384082.png",
    designTypeId: 3,
    designStyleId: 10
  },
  {
    username: "annalight",
    priceStartFrom: 50,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/128665515/original/9af2033a3b830230b80215d1cb77ce410e71c81b.jpg",
    designTypeId: 3,
    designStyleId: 10
  },
  {
    username: "andreajolie030",
    priceStartFrom: 15,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/98714275/original/a3ac1f7f968479731a0df1f3a68e32680e29a5d1.png",
    designTypeId: 3,
    designStyleId: 10
  },
  {
    username: "tamanna14111986",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/video/upload/t_gig_cards_web/fyarxdbap63trr9rhbyi.png",
    designTypeId: 3,
    designStyleId: 10
  },
  {
    username: "novaya371",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/195831214/original/97078c7a7bfcae6f97ff767fd90c72a616485ce5.jpg",
    designTypeId: 3,
    designStyleId: 10
  },
  {
    username: "sajee_changer",
    priceStartFrom: 15,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs2/156173273/original/4ae041e149b889d2ff94a16ea94b71835e424e26.png",
    designTypeId: 3,
    designStyleId: 10
  },
  {
    username: "waqasilyas945",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/171748245/original/da9066114f4759815b8e0d5dcf17b3694be4fdc6.jpg",
    designTypeId: 3,
    designStyleId: 10
  },
  {
    username: "eman_16",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/213257726/original/85a2216ca8fbd8a7a9ac4d12afa3dd7079663d65.png",
    designTypeId: 3,
    designStyleId: 10
  },
  {
    username: "humaansari55",
    priceStartFrom: 20,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/231959563/original/a08170032c7184a54f578863e42460c3246492dc.jpg",
    designTypeId: 3,
    designStyleId: 10
  },
  {
    username: "arnikodetanto",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/208214816/original/ca636c2da3238ded5a7f00cf0088578f6f1e75be.jpg",
    designTypeId: 3,
    designStyleId: 10
  },
  {
    username: "vectorfox",
    priceStartFrom: 15,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/121285685/original/4db0e74ece3d6104bf7e70eb59fca2e0a72e4804.jpg",
    designTypeId: 3,
    designStyleId: 10
  },
  {
    username: "dhanushikasilva",
    priceStartFrom: 30,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/125824832/original/d2f9b45de4fb834ea7977f5d6551e63e00687e12.jpg",
    designTypeId: 3,
    designStyleId: 10
  },
  {
    username: "kseniia_zh",
    priceStartFrom: 25,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/112321118/original/a2dc16600cf9a2c7ab87626d9222f6a64520cfeb.png",
    designTypeId: 3,
    designStyleId: 10
  },
  {
    username: "phenomenal_tech",
    priceStartFrom: 25,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/148455794/original/ca223882487e6aeb3e7bc9d2eadc81de2e071dc3.jpg",
    designTypeId: 3,
    designStyleId: 10
  },
  {
    username: "shwetarawat",
    priceStartFrom: 25,
    imageUrl: "https://fiverr-res.cloudinary.com/video/upload/so_12.55719,t_gig_cards_web/zps1snnythosmipf6fbm.png",
    designTypeId: 3,
    designStyleId: 10
  },
  {
    username: "bbf_design1",
    priceStartFrom: 15,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/196956005/original/c5da0b69d0a971522b534bea8d56f4f7f4dba6af.jpg",
    designTypeId: 3,
    designStyleId: 10
  },
  {
    username: "polinamussse",
    priceStartFrom: 30,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/130075892/original/496522123bc7e2a1588d07482fe519d16c658050.jpg",
    designTypeId: 3,
    designStyleId: 10
  },
  {
    username: "roshnirote",
    priceStartFrom: 5,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/173674535/original/a0a75459654fd18802734221e5c8ddea07f6f946.jpg",
    designTypeId: 3,
    designStyleId: 10
  },
  {
    username: "zayns5",
    priceStartFrom: 5,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/272843796/original/cdad7720dcac039510c4a7440e5a679088a51f0c.jpg",
    designTypeId: 3,
    designStyleId: 10
  },
  {
    username: "artykate",
    priceStartFrom: 25,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/162985865/original/8918798162dd1292426ec7568ae9671739573ab3.png",
    designTypeId: 3,
    designStyleId: 10
  },
  {
    username: "nichaan",
    priceStartFrom: 5,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/274429572/original/2def1328453203bdc0be82af0dbd8a373a8bbfd5.png",
    designTypeId: 3,
    designStyleId: 10
  },
  {
    username: "graphic_plus1",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs2/241131486/original/d424707bbe5b50f90a9c60b6299d90b96e0db900.jpg",
    designTypeId: 3,
    designStyleId: 10
  },
  {
    username: "khateejaa",
    priceStartFrom: 15,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/303272534/original/fcb2f3565c64fd9b355cd8a6ff6d5ae2f3241153.jpg",
    designTypeId: 3,
    designStyleId: 10
  },
  {
    username: "ifrat_jahan",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/194705882/original/440376e2deaaf1c5059427f0c18c1c953f4c2577.jpg",
    designTypeId: 3,
    designStyleId: 10
  },
  {
    username: "lisa_elin_dutch",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/136867309/original/1a0771337ba1d0e8e62cbd38fa25f734607d84a2.png",
    designTypeId: 3,
    designStyleId: 10
  },
  {
    username: "illusionroom",
    priceStartFrom: 5,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/192009553/original/218358ee6613d579824ea803cc1c6969cab072aa.png",
    designTypeId: 3,
    designStyleId: 10
  },
  {
    username: "vectplanet",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/300245556/original/8d5f12b448c2d93de982226f1f57da38bc2681de.jpg",
    designTypeId: 3,
    designStyleId: 10
  },
  {
    username: "bymarmara",
    priceStartFrom: 15,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/221949130/original/c3ff824bb62c705ece092cf9ac78b8e3cf62a8e4.jpg",
    designTypeId: 3,
    designStyleId: 10
  },
  {
    username: "faizajaved949",
    priceStartFrom: 15,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/195639125/original/b8b6841bbf92f6e06ebc4c0cee33b73cc1304085.jpg",
    designTypeId: 3,
    designStyleId: 10
  },
  {
    username: "janugajanayake",
    priceStartFrom: 15,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/110738539/original/1f4ce06b102da3217e34fb5ddb54bc4d9326f6f4.png",
    designTypeId: 3,
    designStyleId: 10
  },
  {
    username: "itz_anm",
    priceStartFrom: 25,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/133161241/original/a51df684ed9391a18b85b378f9a2fc8e68533155.jpg",
    designTypeId: 3,
    designStyleId: 10
  },
  {
    username: "sabacreates",
    priceStartFrom: 20,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/226082687/original/b7618ab4f89240f85221bbd2fd9cbccd61b99555.png",
    designTypeId: 3,
    designStyleId: 10
  },
  {
    username: "mahmudulhasa260",
    priceStartFrom: 20,
    imageUrl: "https://fiverr-res.cloudinary.com/video/upload/so_1.368154,t_gig_cards_web/ghzsyffkllppm85zonea.png",
    designTypeId: 3,
    designStyleId: 10
  },
  {
    username: "studio141",
    priceStartFrom: 5,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/192418161/original/247d2379f714ae8c338ca5d4319bf0caac18b4f8.jpg",
    designTypeId: 3,
    designStyleId: 10
  },
  {
    username: "hanacreator",
    priceStartFrom: 25,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/284704293/original/f23a88aa46f20b099e2fb4428ffab3e8ec31feb7.png",
    designTypeId: 3,
    designStyleId: 10
  },
  {
    username: "zaintextile123",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/265799566/original/da9b7ae0e76b02f456af45dba38f8e38519c287b.png",
    designTypeId: 3,
    designStyleId: 10
  },
  {
    username: "abdelalijordani",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/234453443/original/5ea51b7ca5857bb4f6f8e407c8545c1613db814b.png",
    designTypeId: 3,
    designStyleId: 10
  },
  {
    username: "seemabgill",
    priceStartFrom: 5,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/181786328/original/70380a7112a97fc8b77c8f1ad595214f0cc79b53.jpg",
    designTypeId: 3,
    designStyleId: 10
  },
  {
    username: "sokol_artstudio",
    priceStartFrom: 15,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/114777007/original/7ae4b472a3d50b1dac9696a44306067c289ce77c.jpg",
    designTypeId: 3,
    designStyleId: 10
  },
  {
    username: "hayasajid",
    priceStartFrom: 15,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/291412946/original/ce4319e692dba904a6fc8aa2214934b2a7b460d5.jpg",
    designTypeId: 3,
    designStyleId: 10
  },
  {
    username: "bymarmara",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/229430067/original/7980f0bceb5bf76930d0be05f4f08a60eb3e43d1.jpg",
    designTypeId: 3,
    designStyleId: 10
  },
  {
    username: "iamqurratulain",
    priceStartFrom: 15,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/180270452/original/4d68e061af41b7cf9c868f695f24dcbfaa2a3b1f.jpg",
    designTypeId: 3,
    designStyleId: 10
  },
  {
    username: "kainatt1",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/162955082/original/d1fdc0ce37c14bb9873e23d1689e49346a683bb0.jpg",
    designTypeId: 3,
    designStyleId: 10
  },
  {
    username: "fikrihidajat",
    priceStartFrom: 20,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/245942436/original/ee3f02055462b7435350c3b29117c32b5b03f6e5.png",
    designTypeId: 3,
    designStyleId: 10
  },
  {
    username: "solanat",
    priceStartFrom: 200,
    imageUrl: "https://fiverr-res.cloudinary.com/video/upload/t_gig_cards_web/elnk1frjjitzxt0szmpw.png",
    designTypeId: 3,
    designStyleId: 10
  },
  {
    username: "a_aesthete_e",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/203241088/original/a7f2d0ef45abec1cb826ed99e46d435de378f5f5.jpg",
    designTypeId: 3,
    designStyleId: 10
  },
  {
    username: "maryumgulzar",
    priceStartFrom: 55,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/141273535/original/8b9da3db5a21a8341482317d3ec56449930b4e30.jpg",
    designTypeId: 3,
    designStyleId: 10
  },
  {
    username: "ulfat1616",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/192056700/original/988e6721b1d00d38a63fafaec6e87cac9a20c623.png",
    designTypeId: 3,
    designStyleId: 10
  },
  {
    username: "siddikhp",
    priceStartFrom: 50,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/196433177/original/e8ca3a55ff5de74264851c76ee2530f531f56556.jpg",
    designTypeId: 3,
    designStyleId: 10
  },
  {
    username: "estudioneb",
    priceStartFrom: 70,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/218737716/original/d5fc1e06b13d9dd6745bcc35305112fb99ebfc60.jpg",
    designTypeId: 3,
    designStyleId: 10
  },
  {
    username: "najwaaris",
    priceStartFrom: 35,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/253754314/original/6ee621296e2c1cc3a9178928c8d052f1e17c789a.jpg",
    designTypeId: 3,
    designStyleId: 10
  },
  {
    username: "momenaishaq",
    priceStartFrom: 20,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/150074318/original/61f8eefd7ff8f9dbda34e382ff2b031a969003e7.jpg",
    designTypeId: 3,
    designStyleId: 10
  },
  {
    username: "lunakarin",
    priceStartFrom: 20,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/221129828/original/dda316e2c1483a78e68620085b89fb1a2e95d379.jpg",
    designTypeId: 3,
    designStyleId: 10
  },
  {
    username: "aklimabernard",
    priceStartFrom: 5,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/106358569/original/2b05c45beaab06591e23921b08d4d0ae758c6e47.png",
    designTypeId: 3,
    designStyleId: 10
  },
  {
    username: "monikapuo",
    priceStartFrom: 30,
    imageUrl: "https://fiverr-res.cloudinary.com/video/upload/so_0.84975,t_gig_cards_web/udmnw0ns0gmh21y55mee.png",
    designTypeId: 3,
    designStyleId: 10
  },
  {
    username: "soch_gd",
    priceStartFrom: 15,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/269604673/original/a30852c5ac56d7dfd0fdb4fdc3cf1eda148a7a34.png",
    designTypeId: 3,
    designStyleId: 10
  },
  {
    username: "shahadatsetubd",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/165582955/original/5f4af9a9f3011d81febb297e2805ab2b11d532d5.png",
    designTypeId: 3,
    designStyleId: 10
  },
  {
    username: "hafizaamin",
    priceStartFrom: 20,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/205178259/original/93f16449142fd388f6f18161a965fd03f59ecd8b.jpg",
    designTypeId: 3,
    designStyleId: 10
  },
  {
    username: "nooriasaud",
    priceStartFrom: 5,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/270021462/original/30f4b93c839fdbf5afdd6c4b366a4cc5b8ad0615.jpg",
    designTypeId: 3,
    designStyleId: 10
  },
  {
    username: "logomaker7863",
    priceStartFrom: 30,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/197130082/original/530fe93ebb37e535b83c7f5782c8afd285aac825.jpg",
    designTypeId: 3,
    designStyleId: 10
  },
  {
    username: "tamanna14111986",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/video/upload/t_gig_cards_web/kfxqgtewdukemhzshn2v.png",
    designTypeId: 3,
    designStyleId: 10
  },
  {
    username: "anjoleena_26",
    priceStartFrom: 20,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/115486917/original/7be4ac6244d9dd5049ff71aa73225bcf550100c6.jpg",
    designTypeId: 3,
    designStyleId: 10
  },
  {
    username: "jannatyaqoob_",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/238308493/original/c85f146c700dc2e59ecd605146d5bd4e43ec53a0.jpeg",
    designTypeId: 3,
    designStyleId: 10
  },
  {
    username: "goseeu",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/250525148/original/ee53d7b3c42413cc181c78294647253094b393a1.jpg",
    designTypeId: 3,
    designStyleId: 10
  },
  {
    username: "pixcel_studio",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/221099905/original/3fa78865512b76ac112b7ea9e49de8e5f5c4ff5f.jpg",
    designTypeId: 3,
    designStyleId: 10
  },
  {
    username: "usman_mani10",
    priceStartFrom: 15,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/202753284/original/e46bd4ff7709fd0c140294a0bff52507aa1763c8.jpg",
    designTypeId: 3,
    designStyleId: 10
  },
  {
    username: "h_bgraphics12",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/228587886/original/6ba4ba6f662a60d6005bf098aa625f3e2578f46a.png",
    designTypeId: 3,
    designStyleId: 10
  },
  {
    username: "arnikodetanto",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/256313665/original/665a2b7e2372d41185ee1e6c3092327f4744cfef.jpg",
    designTypeId: 3,
    designStyleId: 10
  },
  {
    username: "asmahanif991",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/145005093/original/8a0c551e7a560f30580d35a7d2f062c65fdcf7a8.png",
    designTypeId: 3,
    designStyleId: 10
  },
  {
    username: "mhtomal",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/261572498/original/5c9c319988c31796c2ecf1a5dfd170baa2c807bc.jpg",
    designTypeId: 3,
    designStyleId: 10
  },
  {
    username: "dr_graficx",
    priceStartFrom: 5,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/231322320/original/ab9afe255ec433170c9c8007c815a1de35644025.png",
    designTypeId: 3,
    designStyleId: 10
  },
  {
    username: "afaqalam193",
    priceStartFrom: 5,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/312861913/original/8d39c2f1f91379a9543f53d83bb61a2318a97f22.jpg",
    designTypeId: 3,
    designStyleId: 10
  },
  {
    username: "a_alahakoon",
    priceStartFrom: 5,
    imageUrl: "https://fiverr-res.cloudinary.com/video/upload/t_gig_cards_web/vyzqnubkvf5vu2yb2vth.png",
    designTypeId: 3,
    designStyleId: 10
  },
  {
    username: "mariettis",
    priceStartFrom: 190,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/114414928/original/c8b9fb199b6cd82b85f3a25487aa85409748de17.jpg",
    designTypeId: 3,
    designStyleId: 10
  },
  {
    username: "renatara",
    priceStartFrom: 60,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/102064364/original/8ea73bafc62bfc43517f286faf21600725555e4a.jpg",
    designTypeId: 3,
    designStyleId: 10
  },
  {
    username: "thegiftery",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/263172990/original/989eee52f1bedbc1428d42d874f19b6f320640f7.jpg",
    designTypeId: 3,
    designStyleId: 10
  },
  {
    username: "sabawajid782",
    priceStartFrom: 15,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/270095301/original/d4e0d79a255251f50d9114e55d826cdcfbbb8095.png",
    designTypeId: 3,
    designStyleId: 10
  },
  {
    username: "studiokeyko",
    priceStartFrom: 100,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/145351206/original/70fa078ae1f695a8855421362d106e591968b060.png",
    designTypeId: 3,
    designStyleId: 10
  },
  {
    username: "katiealiceh",
    priceStartFrom: 30,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/232035361/original/de15285f587d2cac78e860d29bb85e843819cb74.jpg",
    designTypeId: 3,
    designStyleId: 10
  },
  {
    username: "monikwnek",
    priceStartFrom: 80,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/102195961/original/ef363ee5768d41a564221cde74d12a2d56d8bd8f.jpg",
    designTypeId: 3,
    designStyleId: 10
  },
  {
    username: "renatara",
    priceStartFrom: 60,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/102066337/original/e753e4ee1d50226887d7123a8f05d24170497200.jpg",
    designTypeId: 3,
    designStyleId: 10
  },
  {
    username: "eraseras",
    priceStartFrom: 100,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/247639755/original/2621022557b91deaaa0c61dc41f44c859c9b1624.jpg",
    designTypeId: 3,
    designStyleId: 10
  },
  {
    username: "rachelrusak",
    priceStartFrom: 95,
    imageUrl: "https://fiverr-res.cloudinary.com/video/upload/so_1.183536,t_gig_cards_web/kwxtusd6zd6jlx8tefry.png",
    designTypeId: 3,
    designStyleId: 10
  },
  {
    username: "annalight",
    priceStartFrom: 450,
    imageUrl: "https://fiverr-res.cloudinary.com/video/upload/t_gig_cards_web/to4xi1ewpui6qm6yiq4c.png",
    designTypeId: 3,
    designStyleId: 10
  },
  {
    username: "minasparklina",
    priceStartFrom: 80,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/4684759/original/20dd063b862c540a55d1faee7926baf97960c8e6.jpg",
    designTypeId: 3,
    designStyleId: 10
  },
  {
    username: "afrocreation",
    priceStartFrom: 25,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/91529911/original/a2424db89063d683c2d1ea54f9fee61615e445ea.jpg",
    designTypeId: 3,
    designStyleId: 10
  },
  {
    username: "byingrid",
    priceStartFrom: 220,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/155341548/original/bc7b1894e814bab7ee59fcb6c5825b9c954a6baf.jpg",
    designTypeId: 3,
    designStyleId: 10
  },
  {
    username: "asad9863",
    priceStartFrom: 15,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/130709841/original/21f29d08b7bf264653fbcae51d4f13b855f2f725.jpg",
    designTypeId: 3,
    designStyleId: 10
  },
  {
    username: "evakocharian",
    priceStartFrom: 100,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/175796221/original/3399a641754f976ac279add785996b54e1c00c10.png",
    designTypeId: 3,
    designStyleId: 10
  },
  {
    username: "slavkokahovsky",
    priceStartFrom: 100,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/223944969/original/4ab75a8e277b64f71183786564eff65da7fc1952.jpg",
    designTypeId: 3,
    designStyleId: 10
  },
  {
    username: "eraseras",
    priceStartFrom: 150,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/215113604/original/10ccf93a7fa03a945e0abaad5bc8609315d2e7b4.jpg",
    designTypeId: 3,
    designStyleId: 10
  },
  {
    username: "adeliavellawati",
    priceStartFrom: 100,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/220239280/original/824502ca3a18070c705436cd178b2cd11969f981.jpg",
    designTypeId: 3,
    designStyleId: 10
  },
  {
    username: "studiolumitex",
    priceStartFrom: 20,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/158620329/original/cfd0ea30c28d9eacbf1c872aa4619816c3852ff8.jpg",
    designTypeId: 3,
    designStyleId: 10
  },
  {
    username: "masoudtaki",
    priceStartFrom: 100,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/209074499/original/a50be874f8c0fe7bb74fdd76dfa1e7262d4be8a0.png",
    designTypeId: 3,
    designStyleId: 10
  },
  {
    username: "yourwaystyle",
    priceStartFrom: 20,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/63200734/original/200e2a1d8a6f707edb1208534027a082c5c00d59.jpg",
    designTypeId: 3,
    designStyleId: 10
  },
  {
    username: "yungracer",
    priceStartFrom: 95,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/169688307/original/dd8bd3060891667d1124265867719427c318ff8d.jpg",
    designTypeId: 3,
    designStyleId: 10
  },
  {
    username: "visiondsgns",
    priceStartFrom: 20,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/301121983/original/1baf613a4b0537b2040c4d44e0a75e8f1f48cf1a.png",
    designTypeId: 3,
    designStyleId: 10
  },
  {
    username: "uccheyyy",
    priceStartFrom: 5,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/251151635/original/04ef7270b21c58ee1d29b7f47149ab22b83c5d83.jpg",
    designTypeId: 3,
    designStyleId: 10
  },
  {
    username: "missirshad",
    priceStartFrom: 50,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/127679035/original/282ead08a318f8fd1f9ca985fe1bcf7dda655a90.jpg",
    designTypeId: 3,
    designStyleId: 10
  },
  {
    username: "mirifada",
    priceStartFrom: 40,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/162399206/original/1f0b895054278b665062e3c512478f126d09618b.jpg",
    designTypeId: 3,
    designStyleId: 10
  },
  {
    username: "fariha_nadeem",
    priceStartFrom: 50,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/201429256/original/85ea8b142f3aedb17af080ca01997c8f7c9a5cc3.jpg",
    designTypeId: 3,
    designStyleId: 10
  },
  {
    username: "louisventura",
    priceStartFrom: 50,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/211391318/original/9284d6a1c0c70d7abb42e1eab357c970fd3cd342.jpg",
    designTypeId: 3,
    designStyleId: 10
  },
  {
    username: "atik6733",
    priceStartFrom: 75,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/126553344/original/5d348dd2dbfd0e183f4ea0ccd471df4eb93a7a86.jpg",
    designTypeId: 3,
    designStyleId: 10
  },
  {
    username: "ashfaqshah_007",
    priceStartFrom: 20,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/99424321/original/82ba0d182c6acf23c840351bd14206df79c0c02a.jpg",
    designTypeId: 3,
    designStyleId: 10
  },
  {
    username: "ewuramakwofie",
    priceStartFrom: 50,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/193762338/original/62181e811baea3661b101f1f988c8c72e6158bdc.png",
    designTypeId: 3,
    designStyleId: 10
  },
  {
    username: "rmtextile",
    priceStartFrom: 55,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/304353352/original/d735583c61ee7e8e75f313b64608d06d11e617eb.jpg",
    designTypeId: 3,
    designStyleId: 10
  },
  {
    username: "omniverse360",
    priceStartFrom: 20,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/168711069/original/bb32afa1175af3ec4c3a7f8b68ab5741fd97057a.jpg",
    designTypeId: 3,
    designStyleId: 10
  },
  {
    username: "qiqadesign",
    priceStartFrom: 35,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/176708089/original/7cb71209e9ec344b98d3488d3fb6d418ae475c17.jpg",
    designTypeId: 3,
    designStyleId: 10
  },
  {
    username: "oca_sabhila",
    priceStartFrom: 50,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/231487770/original/f28941ef8103da671e3a02f878abde0388ef749e.jpg",
    designTypeId: 3,
    designStyleId: 10
  },
  {
    username: "mmshani",
    priceStartFrom: 15,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/42107049/original/87d183f9285f61a64ae8d786fc36fabbf6eb9852.jpg",
    designTypeId: 3,
    designStyleId: 10
  },
  {
    username: "flostudio",
    priceStartFrom: 95,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/207295775/original/d59f39115a77db9fe16993f1147b41f8a17cdda5.jpg",
    designTypeId: 3,
    designStyleId: 10
  },
  {
    username: "aishakhan9221",
    priceStartFrom: 70,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/194030310/original/658a7539cfe626dc8030c78f6d0b8e2b0873fde2.jpg",
    designTypeId: 3,
    designStyleId: 10
  },
  {
    username: "rachelrusak",
    priceStartFrom: 95,
    imageUrl: "https://fiverr-res.cloudinary.com/video/upload/t_gig_cards_web/yazznqy3jmt9acnd6ot5.png",
    designTypeId: 3,
    designStyleId: 10
  },
  {
    username: "shahzadjavai901",
    priceStartFrom: 25,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/213358403/original/abf572d11b6fbd9dd0ddf65889588f74bf7d578f.jpg",
    designTypeId: 3,
    designStyleId: 10
  },
  {
    username: "andreeacauta",
    priceStartFrom: 20,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/190140352/original/8478b2e5645490b51078b9e3c7d03654775459ca.jpg",
    designTypeId: 3,
    designStyleId: 10
  },
  {
    username: "adeliavellawati",
    priceStartFrom: 25,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/220760222/original/e20990a53b0768a1c886c1bbb62e48fd6cf71e48.jpg",
    designTypeId: 3,
    designStyleId: 10
  },
  {
    username: "vanidesigner",
    priceStartFrom: 95,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/195400009/original/35e21e86833d78718831ee56a74fa4f2e3a834c1.jpg",
    designTypeId: 3,
    designStyleId: 10
  },
  {
    username: "designz_geek",
    priceStartFrom: 20,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/118898324/original/ca9774c58f506295e92478fa80a78c89f9876a43.jpg",
    designTypeId: 3,
    designStyleId: 10
  },
  {
    username: "najwaaris",
    priceStartFrom: 45,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/260541575/original/89a092f6401284cfafd955354db4d8907ec0ffa5.jpg",
    designTypeId: 3,
    designStyleId: 10
  },
  {
    username: "hndesign710",
    priceStartFrom: 15,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/191681753/original/21c60a5d23a736e0dd43dc86f70d9e5f46225b65.png",
    designTypeId: 3,
    designStyleId: 10
  },
  {
    username: "rsbrad",
    priceStartFrom: 35,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/232072684/original/94ab6b64c122815535d74e17e307f65a5e949410.jpg",
    designTypeId: 3,
    designStyleId: 10
  },
  {
    username: "sokol_artstudio",
    priceStartFrom: 15,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/114740712/original/cc14f6ab92ab38b50ecd3b41ec09ab1af1c9580c.jpg",
    designTypeId: 3,
    designStyleId: 10
  },
  {
    username: "munirsheikh2019",
    priceStartFrom: 45,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/203733912/original/52615e4f686e3663537e70718a64d095c737eaa7.jpg",
    designTypeId: 3,
    designStyleId: 10
  },
  {
    username: "ozandoganbey",
    priceStartFrom: 55,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/99898212/original/b15689d4c5b97a5545c02051d148abd36d3eda08.jpg",
    designTypeId: 3,
    designStyleId: 10
  },
  {
    username: "katarinaldesign",
    priceStartFrom: 25,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/268183043/original/b41c0de329f7c61271f8e2a7fc572f28e2469801.jpg",
    designTypeId: 3,
    designStyleId: 10
  },
  {
    username: "ivanamundja",
    priceStartFrom: 35,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/203037577/original/05ff83a2d10e623fdfbfbe8095093fad64467813.png",
    designTypeId: 3,
    designStyleId: 10
  },
  {
    username: "ahmadmukhtar18",
    priceStartFrom: 5,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/202036715/original/0153abff3091c23829f54c27ff4a2890c3fc4249.jpg",
    designTypeId: 3,
    designStyleId: 10
  },
  {
    username: "polinamussse",
    priceStartFrom: 30,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/240085830/original/6595b660747cf9d03d9feaa0b1c32aa85caf8c6d.jpg",
    designTypeId: 3,
    designStyleId: 10
  },
  {
    username: "yumnamuazzam",
    priceStartFrom: 15,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/271363724/original/db77d5ca753a36583287f26b80955a4189765ae0.jpg",
    designTypeId: 3,
    designStyleId: 10
  },
  {
    username: "maryamateeq28",
    priceStartFrom: 15,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/180319137/original/0ad9644b6023f60c507c9e5cb3208be20044e53b.jpg",
    designTypeId: 3,
    designStyleId: 10
  },
  {
    username: "crazyaboutunive",
    priceStartFrom: 20,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/204211223/original/843195060f8f8b088dbeef0ba89dffc6b363c620.jpg",
    designTypeId: 3,
    designStyleId: 10
  },
  {
    username: "belagraphic",
    priceStartFrom: 125,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/176258450/original/2415b9c65ee561f8af2a024661b3d4e5d1641b77.jpg",
    designTypeId: 3,
    designStyleId: 10
  },
  {
    username: "michael_mb",
    priceStartFrom: 50,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/114090516/original/e6460ee8063f252b033dc5b2acb3f347729bda77.jpg",
    designTypeId: 3,
    designStyleId: 10
  },
  {
    username: "maprarthana",
    priceStartFrom: 30,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/126786753/original/89b80c9c6a3ebc4e219ee126b076c5f635ed2e69.jpg",
    designTypeId: 3,
    designStyleId: 10
  },
  {
    username: "damien031266",
    priceStartFrom: 50,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/262296454/original/ab4cbd03bce77f1eec6ba83d8710c2302503788d.jpg",
    designTypeId: 3,
    designStyleId: 10
  },
  {
    username: "eman_16",
    priceStartFrom: 5,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/210828174/original/ae36e6a32de4280f0a61fc627a96b44b3655c304.png",
    designTypeId: 3,
    designStyleId: 10
  },
  {
    username: "melissawales",
    priceStartFrom: 35,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/160691110/original/74e5904d1b944c776beeb1b8fc045bf481c5e22d.jpg",
    designTypeId: 3,
    designStyleId: 10
  },
  {
    username: "masoudtaki",
    priceStartFrom: 100,
    imageUrl: "https://fiverr-res.cloudinary.com/video/upload/so_1.457297,t_gig_cards_web/vdjbvu22wygkszxyhmth.png",
    designTypeId: 3,
    designStyleId: 6
  },
  {
    username: "razinaathar",
    priceStartFrom: 15,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/154345314/original/ea91d3820396fa3296651be0c9e435c8c9e58d48.jpg",
    designTypeId: 3,
    designStyleId: 6
  },
  {
    username: "iamqurratulain",
    priceStartFrom: 15,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/180189860/original/2626b13d55f313cf913b640ade56bed89f53f616.jpg",
    designTypeId: 3,
    designStyleId: 6
  },
  {
    username: "farahfh",
    priceStartFrom: 5,
    imageUrl: "https://fiverr-res.cloudinary.com/video/upload/t_gig_cards_web/cmensgu9bycpuelzyqli.png",
    designTypeId: 3,
    designStyleId: 6
  },
  {
    username: "analuizasanti",
    priceStartFrom: 180,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/208804148/original/7aff246fdf7a3c7dc42d5409e28c241f88fe61d9.png",
    designTypeId: 3,
    designStyleId: 6
  },
  {
    username: "creative_zilla",
    priceStartFrom: 15,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/179320657/original/b7e03f0b9da0dee7569728bb18abc335206566a3.png",
    designTypeId: 3,
    designStyleId: 6
  },
  {
    username: "illustrationss",
    priceStartFrom: 40,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/25455342/original/9fc77eb64cfb2eb6d029c7126b947cde5aed44f7.jpg",
    designTypeId: 3,
    designStyleId: 6
  },
  {
    username: "mayurmore9909",
    priceStartFrom: 25,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/186203199/original/ac4f450cead248e104a7ff0c66cc927476b39849.jpg",
    designTypeId: 3,
    designStyleId: 6
  },
  {
    username: "reinapatterns",
    priceStartFrom: 65,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/203305370/original/65875ec4ee9aa5805d20bf388d0d71395815600f.jpg",
    designTypeId: 3,
    designStyleId: 6
  },
  {
    username: "thefloraartist",
    priceStartFrom: 65,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/198169133/original/0d313d6319f26f0a4640cd7050a79174724d2720.jpg",
    designTypeId: 3,
    designStyleId: 6
  },
  {
    username: "sajib380",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/209497873/original/f8d11d748f412079fc8dce18532fac802bfb407e.jpg",
    designTypeId: 3,
    designStyleId: 6
  },
  {
    username: "aitoubrimsaid",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/223076016/original/a0dc6f294a2884624f2994b34fbef9fe8717ba4c.png",
    designTypeId: 3,
    designStyleId: 6
  },
  {
    username: "firsova_kate",
    priceStartFrom: 15,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/170160244/original/6ffee6365b8f7b1ff8783c07794a914eee3b2b9c.jpg",
    designTypeId: 3,
    designStyleId: 6
  },
  {
    username: "amaartz_",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/271894540/original/6195ced8d4b32a20b01c2dea80e44edd052e53bd.jpeg",
    designTypeId: 3,
    designStyleId: 6
  },
  {
    username: "spider4graphics",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/250170082/original/f62da854fd3b366fbd2b861695ccc940db9edbdb.jpg",
    designTypeId: 3,
    designStyleId: 6
  },
  {
    username: "nookshawn",
    priceStartFrom: 95,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/216774455/original/3cd3db16a16bc6d1898419ef3056c89c3b20deef.jpg",
    designTypeId: 3,
    designStyleId: 6
  },
  {
    username: "yulianii",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/230042929/original/a09609489c10045023001f68c0785858567a70a9.png",
    designTypeId: 3,
    designStyleId: 6
  },
  {
    username: "hound123",
    priceStartFrom: 15,
    imageUrl: "https://fiverr-res.cloudinary.com/video/upload/so_38.033061,t_gig_cards_web/kyrdxoaprfe5zckmoi4d.png",
    designTypeId: 3,
    designStyleId: 6
  },
  {
    username: "kaleemahmed1",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/179596519/original/8113fc44d7a580e3595b88d69d939cd9c216a987.jpg",
    designTypeId: 3,
    designStyleId: 6
  },
  {
    username: "design_ville3",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/video/upload/t_gig_cards_web/xpelei6ryttkq84pyxbk.png",
    designTypeId: 3,
    designStyleId: 6
  },
  {
    username: "amaljad",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/244172043/original/1c7e314d17a762b166695ba5583eb474e4fb9ec5.jpg",
    designTypeId: 3,
    designStyleId: 6
  },
  {
    username: "taroza",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/200046957/original/34659f57ce81d114e446e3f8a0e0c80ab25c6ba6.jpg",
    designTypeId: 3,
    designStyleId: 6
  },
  {
    username: "usamafaiz686",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/video/upload/t_gig_cards_web/lgberhsbw8h3yfjf6bpa.png",
    designTypeId: 3,
    designStyleId: 6
  },
  {
    username: "belagraphic",
    priceStartFrom: 125,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/145818640/original/6f778ee8c14d1194522ee091b209d60ba8f274a3.jpg",
    designTypeId: 3,
    designStyleId: 6
  },
  {
    username: "shwetasc",
    priceStartFrom: 50,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/189043676/original/aa839dd15c3d80fb010f40b43b5ba03d1dca6e37.jpg",
    designTypeId: 3,
    designStyleId: 6
  },
  {
    username: "saastechbd",
    priceStartFrom: 25,
    imageUrl: "https://fiverr-res.cloudinary.com/video/upload/so_1.141996,t_gig_cards_web/yeqbjwa3cet1evvl5vlr.png",
    designTypeId: 3,
    designStyleId: 6
  },
  {
    username: "amitbochkeri",
    priceStartFrom: 20,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs3/265775333/original/fdd74b1c48e6efe8a0c3b3344883ca7ba801d42f.png",
    designTypeId: 3,
    designStyleId: 6
  },
  {
    username: "jamal3838",
    priceStartFrom: 15,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/185425183/original/78d2395dd46730c6104503f10b330df3e050e27b.jpg",
    designTypeId: 3,
    designStyleId: 6
  },
  {
    username: "nasghar",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/200900540/original/5f144304fc3552c1f8cb4fa317158ba0c3b0775f.jfif",
    designTypeId: 3,
    designStyleId: 6
  },
  {
    username: "radee96",
    priceStartFrom: 15,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/270842530/original/ef2bb8c857d2994e2eecff2f230115ff20c2310d.jpg",
    designTypeId: 3,
    designStyleId: 6
  },
  {
    username: "fancy_artist",
    priceStartFrom: 35,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/134581909/original/8a4c21cb1b23b5d94967b957480d33f055a74394.png",
    designTypeId: 3,
    designStyleId: 6
  },
  {
    username: "salimreza350",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/239514390/original/464b4cb137aefcb9dec7d6b5d54615303ceb440c.jpg",
    designTypeId: 3,
    designStyleId: 6
  },
  {
    username: "saidurrahman85",
    priceStartFrom: 15,
    imageUrl: "https://fiverr-res.cloudinary.com/video/upload/so_5.044587,t_gig_cards_web/n2df1ur2p6ma7jawgnci.png",
    designTypeId: 3,
    designStyleId: 6
  },
  {
    username: "brandhut_97",
    priceStartFrom: 60,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/256484737/original/4cbc84eab09e0b58331a7d22fe62607d1c6f97d9.png",
    designTypeId: 3,
    designStyleId: 6
  },
  {
    username: "pro_daniyal",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/257765015/original/d762ba4308014592e78cf589cd40ba33b2b39f6e.jpg",
    designTypeId: 3,
    designStyleId: 6
  },
  {
    username: "shahin239",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/video/upload/so_0.458616,t_gig_cards_web/sigjp49u07mrqspt87fr.png",
    designTypeId: 3,
    designStyleId: 6
  },
  {
    username: "roks_olana",
    priceStartFrom: 30,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/249384056/original/fd62654dfdabf06a2d39d7553f3f6e0b3811944e.jpg",
    designTypeId: 3,
    designStyleId: 6
  },
  {
    username: "amaisha",
    priceStartFrom: 35,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/108992120/original/7ec205c91b1127471ffc1f3ac3c51af749040a08.png",
    designTypeId: 3,
    designStyleId: 6
  },
  {
    username: "arikshahinya245",
    priceStartFrom: 15,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/252638755/original/e845e2dd8f95a0b8484fef16979141726a83cace.jpg",
    designTypeId: 3,
    designStyleId: 6
  },
  {
    username: "katidesign99",
    priceStartFrom: 30,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/232814237/original/e9996e6a54a8c8159cba50c59d6e7af3b1ba10b2.jpg",
    designTypeId: 3,
    designStyleId: 6
  },
  {
    username: "abirkhan7",
    priceStartFrom: 5,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/147963801/original/0677ab27fcaf632452b4f48ecbab1c7753ebe183.jpg",
    designTypeId: 3,
    designStyleId: 6
  },
  {
    username: "fancyartist",
    priceStartFrom: 25,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/80272381/original/73527f971f8f00ed6423465092280c4e6c4f00ea.jpg",
    designTypeId: 3,
    designStyleId: 6
  },
  {
    username: "hafizansriaz",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/235589135/original/8bf2a91829230166dca6b0fb70eb15d6e8596f54.jpg",
    designTypeId: 3,
    designStyleId: 6
  },
  {
    username: "kaanchkaari",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/221936327/original/e9d8ede8662da1dd3ff59bc240802076ba42adab.jpg",
    designTypeId: 3,
    designStyleId: 6
  },
  {
    username: "tahniarahman12",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/290393274/original/c154b0d16073e644bcc8c7b539ab1da7759b17b7.jpg",
    designTypeId: 3,
    designStyleId: 6
  },
  {
    username: "amaisha",
    priceStartFrom: 35,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/112319650/original/90290d0c25f5566f2501748ef4378ecf055f1ae4.png",
    designTypeId: 3,
    designStyleId: 6
  },
  {
    username: "cmcaras",
    priceStartFrom: 30,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/184864088/original/9dd89fa8815cf184754b4d50816d086218957397.png",
    designTypeId: 3,
    designStyleId: 6
  },
  {
    username: "yons99",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/video/upload/t_gig_cards_web/bzowuiwvs0jpaxawgjdr.png",
    designTypeId: 3,
    designStyleId: 6
  },
  {
    username: "sonia211",
    priceStartFrom: 15,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/259621576/original/a2853c2dad17f3e6bcb823d7de43c79dcd21fef4.jpg",
    designTypeId: 3,
    designStyleId: 6
  },
  {
    username: "analuizasanti",
    priceStartFrom: 180,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/208804148/original/7aff246fdf7a3c7dc42d5409e28c241f88fe61d9.png",
    designTypeId: 3,
    designStyleId: 6
  },
  {
    username: "mahwish_kanwal",
    priceStartFrom: 30,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/277757611/original/cb609bb8be0f5d02d44c9edb8a928e2b56a7a066.jpg",
    designTypeId: 3,
    designStyleId: 6
  },
  {
    username: "kans13",
    priceStartFrom: 5,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/45902274/original/4893735c17dcf35af770c97ad5737da16728af34.jpg",
    designTypeId: 3,
    designStyleId: 6
  },
  {
    username: "nabbashkt",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/236676780/original/99ebf3784345dc27806e5db6966c0f3193df7bb6.jpg",
    designTypeId: 3,
    designStyleId: 6
  },
  {
    username: "maharbunga",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/198183148/original/705ac1bc3cd1a32335b7b18a68873fe5b6bcde4b.png",
    designTypeId: 3,
    designStyleId: 6
  },
  {
    username: "staneslav",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/236972145/original/f73e02e1c443b2d0012e18155bf11c7726dc499d.png",
    designTypeId: 3,
    designStyleId: 6
  },
  {
    username: "samsitara",
    priceStartFrom: 25,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/31814410/original/8113ddb8c1827447839bb755e2ba01e4c18f483e.jpg",
    designTypeId: 3,
    designStyleId: 6
  },
  {
    username: "rabeeashahid",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/160705996/original/f53256115a24bdc1d39c0dcab6423af2cfc66261.jpg",
    designTypeId: 3,
    designStyleId: 6
  },
  {
    username: "analuizasanti",
    priceStartFrom: 200,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/265636860/original/c7ba2d473960357627210e24ade50963e687f675.png",
    designTypeId: 3,
    designStyleId: 6
  },
  {
    username: "analuizasanti",
    priceStartFrom: 180,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/208054042/original/e3ed4b2701102692d892e077e9de9c935d654b82.png",
    designTypeId: 3,
    designStyleId: 6
  },
  {
    username: "designbyahsan1",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/238265674/original/595146cd7696f0a4a8c26dc7b271d36245dffd73.jpg",
    designTypeId: 3,
    designStyleId: 6
  },
  {
    username: "analuizasanti",
    priceStartFrom: 200,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/208813539/original/006fbf17be7b8cc4eded24fa26fc046247701001.png",
    designTypeId: 3,
    designStyleId: 6
  },
  {
    username: "ipamia",
    priceStartFrom: 60,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/183989694/original/215993a0b8c92186fbbc5b83f964056cfdf18440.jpg",
    designTypeId: 3,
    designStyleId: 6
  },
  {
    username: "ivanamundja",
    priceStartFrom: 35,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/108059485/original/6dc68ec6d957a1e286b313c626bdd4613b3ebc62.png",
    designTypeId: 3,
    designStyleId: 6
  },
  {
    username: "marynazahumenny",
    priceStartFrom: 5,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/269745353/original/8865ca209bef1d563e484e0ed9a13cfd9198ef7c.png",
    designTypeId: 3,
    designStyleId: 6
  },
  {
    username: "momnahaider",
    priceStartFrom: 60,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/215731753/original/f3ab8696710eabc14d15340b7ef00af795153bc2.jpg",
    designTypeId: 3,
    designStyleId: 6
  },
  {
    username: "antonellacat",
    priceStartFrom: 15,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/126810244/original/5dff04cd2313fd882e3c2c0e07b102425e02084b.jpg",
    designTypeId: 3,
    designStyleId: 6
  },
  {
    username: "imunja",
    priceStartFrom: 125,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/167605225/original/e411907d4dea15063c37205861c3408629189bf3.jpg",
    designTypeId: 3,
    designStyleId: 6
  },
  {
    username: "qdesign008",
    priceStartFrom: 5,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/162841097/original/a03d04fe52b8a80da084f405c06fc01d358915d3.jpg",
    designTypeId: 3,
    designStyleId: 6
  },
  {
    username: "osmankhan120",
    priceStartFrom: 15,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/235070339/original/2da1a050fcd87691232316d6874b32d0a0c8533a.png",
    designTypeId: 3,
    designStyleId: 6
  },
  {
    username: "sallyroughton",
    priceStartFrom: 45,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/297753787/original/cd61e7d5631a7f212ffb17ffcbc6a9c7781cc055.png",
    designTypeId: 3,
    designStyleId: 6
  },
  {
    username: "razinaathar",
    priceStartFrom: 30,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/107593916/original/d27f529eddc04e722c71aa63d0703b72fdd31945.jpg",
    designTypeId: 3,
    designStyleId: 6
  },
  {
    username: "aniakucharek",
    priceStartFrom: 60,
    imageUrl: "https://fiverr-res.cloudinary.com/video/upload/t_gig_cards_web/ltl0wgu4wfng7wwwgrnu.png",
    designTypeId: 3,
    designStyleId: 6
  },
  {
    username: "zziyasheikh",
    priceStartFrom: 30,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/238248365/original/0613dcf9d6ab903fba9c418994d6eb29550dd17c.png",
    designTypeId: 3,
    designStyleId: 6
  },
  {
    username: "cansuaycan",
    priceStartFrom: 20,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/179788680/original/37a5eb5628cd985a883341dc0477a628c69d1ec0.jpg",
    designTypeId: 3,
    designStyleId: 6
  },
  {
    username: "rofik_mus",
    priceStartFrom: 15,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/257300218/original/4a676658c3f136bac42b1a9d29f9f926c253b8de.jpg",
    designTypeId: 3,
    designStyleId: 6
  },
  {
    username: "jolisascelba200",
    priceStartFrom: 35,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/300835259/original/1f4e4db4af79116fb1e82366c47b3bae4bab8413.png",
    designTypeId: 3,
    designStyleId: 6
  },
  {
    username: "nusratzahan58",
    priceStartFrom: 20,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/228382733/original/90390f20117e855d4b8dd0da55d605bc675bc005.jpg",
    designTypeId: 3,
    designStyleId: 6
  },
  {
    username: "saffinmalik",
    priceStartFrom: 50,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/204941209/original/dde04daa03c83ec4c689aab9002cd1074b50557a.png",
    designTypeId: 3,
    designStyleId: 6
  },
  {
    username: "lyuart",
    priceStartFrom: 30,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/146255079/original/2dccbe5e11ab299c136227286363707eca28f3cd.jpg",
    designTypeId: 3,
    designStyleId: 6
  },
  {
    username: "ea_graphics15",
    priceStartFrom: 20,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/280737283/original/1565dc24822de80d31260e5797ccc50c0a05bd8d.jpg",
    designTypeId: 3,
    designStyleId: 6
  },
  {
    username: "rafiafarooq724",
    priceStartFrom: 20,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/145222328/original/a65acfd8e4d170ebdb1294cbc2e7b5d08d3f3017.jpg",
    designTypeId: 3,
    designStyleId: 6
  },
  {
    username: "juhisharma_",
    priceStartFrom: 20,
    imageUrl: "https://fiverr-res.cloudinary.com/video/upload/so_1.88613,t_gig_cards_web/fwq5rf1dcudilozmr9wf.png",
    designTypeId: 3,
    designStyleId: 6
  },
  {
    username: "xpertpatterns",
    priceStartFrom: 30,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/214442478/original/2fb308a0ab81dd78cce962a16cef2e662d528606.jpg",
    designTypeId: 3,
    designStyleId: 6
  },
  {
    username: "vivicampos1993",
    priceStartFrom: 700,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/170855266/original/01affdc61668aca02772186cc2822243365d4efc.jpg",
    designTypeId: 3,
    designStyleId: 6
  },
  {
    username: "aimankhokhar77",
    priceStartFrom: 50,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/174145641/original/d183553f0b22a0c21cf30bfb2ab245ed07840649.png",
    designTypeId: 3,
    designStyleId: 6
  },
  {
    username: "jyotig79",
    priceStartFrom: 15,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/214374826/original/d21d70da839ffdb8c654625958f125e5b4c60d4d.png",
    designTypeId: 3,
    designStyleId: 6
  },
  {
    username: "cosmic_design",
    priceStartFrom: 20,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/166482458/original/fba8f9076836041f33a62975e76f6a0ce005b211.jpg",
    designTypeId: 3,
    designStyleId: 6
  },
  {
    username: "laraibrashid1",
    priceStartFrom: 20,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/274415375/original/0a699cfe71616926be8a8a0c7467d1eb25d11d76.jpg",
    designTypeId: 3,
    designStyleId: 6
  },
  {
    username: "gfx_shaha",
    priceStartFrom: 15,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/251174376/original/e4fe2974b1c3fa899d3b46d5bd286679125d4773.png",
    designTypeId: 3,
    designStyleId: 6
  },
  {
    username: "ahidhasan12",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/233441610/original/830624326baf7a4dd3c87911a05ce9c401f5343b.jpg",
    designTypeId: 3,
    designStyleId: 6
  },
  {
    username: "misskajafortune",
    priceStartFrom: 40,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/212274162/original/9078bf0ffb3e18d5cc61ab4228c33019df8a261a.png",
    designTypeId: 3,
    designStyleId: 6
  },
  {
    username: "aasmadigi",
    priceStartFrom: 35,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/18789102/original/d603397c50330b2af37d39ea1b7e374f81e3eaa1.jpg",
    designTypeId: 3,
    designStyleId: 6
  },
  {
    username: "fariha_nadeem",
    priceStartFrom: 50,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/202497193/original/8c7bbb9d7f20e4fe2566b6c39004e894cd2c74ea.jpg",
    designTypeId: 3,
    designStyleId: 6
  },
  {
    username: "doublelumi",
    priceStartFrom: 25,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/235382375/original/059b9c0a3febe5c3b4cac186ef03354a5bb1fd48.png",
    designTypeId: 3,
    designStyleId: 6
  },
  {
    username: "saffinmalik",
    priceStartFrom: 35,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/205412164/original/547a074adecda349948a2e069bef0e723c93f9eb.png",
    designTypeId: 3,
    designStyleId: 6
  },
  {
    username: "rossispasova",
    priceStartFrom: 20,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/272011531/original/cb82aed7c94fc8ce7e3a6803492127b3ac7228c1.jpg",
    designTypeId: 3,
    designStyleId: 6
  },
  {
    username: "sylboy",
    priceStartFrom: 30,
    imageUrl: "https://fiverr-res.cloudinary.com/video/upload/t_gig_cards_web/lthgpihbtuxrqb803v4t.png",
    designTypeId: 3,
    designStyleId: 6
  },
  {
    username: "khizarawan275",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/192455223/original/9c6656ebf1a1689ca0058bddad4b42e2223b2637.jpg",
    designTypeId: 3,
    designStyleId: 6
  },
  {
    username: "aimankhokhar77",
    priceStartFrom: 50,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/174143308/original/a1aa323d4beb2b6177f963811decdda25206283c.png",
    designTypeId: 3,
    designStyleId: 6
  },
  {
    username: "sumeragillani",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/209010057/original/7aac94b3c5798d8ba6cafc8f2e7a528c1a8a43a6.jpg",
    designTypeId: 3,
    designStyleId: 6
  },
  {
    username: "silvforlife",
    priceStartFrom: 25,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/145573936/original/b09b3214ad5992152d1f2a74e654a33fa2aec1ce.jpg",
    designTypeId: 3,
    designStyleId: 6
  },
  {
    username: "repeatpatterns",
    priceStartFrom: 25,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/126711892/original/2cba3a70e635863b95b8ac14fe3951c1fc34ffd9.jpg",
    designTypeId: 3,
    designStyleId: 6
  },
  {
    username: "faizajaved949",
    priceStartFrom: 15,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/196705173/original/d9fcec3cab1e041c509662f3d318c47b91d68980.jpg",
    designTypeId: 3,
    designStyleId: 6
  },
  {
    username: "dpsundkar",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/117831225/original/b7acb0cfc8924d5985716bced8cdbfac2b7a0075.png",
    designTypeId: 3,
    designStyleId: 6
  },
  {
    username: "repeatpatterns",
    priceStartFrom: 25,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/126714312/original/36b85fce4a8dd3a3785a79b13629870668df461f.jpg",
    designTypeId: 3,
    designStyleId: 6
  },
  {
    username: "alaaelbajoury",
    priceStartFrom: 15,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/297196949/original/d68ca85111d624a0098207ff5e9f98cdcc34bc67.png",
    designTypeId: 3,
    designStyleId: 6
  },
  {
    username: "lihua002",
    priceStartFrom: 25,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/251030508/original/542040762c20049698a48730be046e7b68d7b79e.png",
    designTypeId: 3,
    designStyleId: 6
  },
  {
    username: "pattern_studio",
    priceStartFrom: 25,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/243039053/original/27ecc98363171498255041bca4d5d03b080c0c3f.jpg",
    designTypeId: 3,
    designStyleId: 6
  },
  {
    username: "belagraphic",
    priceStartFrom: 5,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/109681221/original/44067a2eee4b3db035d9d771d2186c8f8af05cb1.jpg",
    designTypeId: 3,
    designStyleId: 6
  },
  {
    username: "mdmasiud533",
    priceStartFrom: 40,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/205407231/original/7859871f4223bddd499b8fa0fd88bcd65077c7b4.png",
    designTypeId: 3,
    designStyleId: 6
  },
  {
    username: "pvidcum",
    priceStartFrom: 25,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/167890093/original/41ce4176f1b2147ebab23438a3b085ceb53cfac6.png",
    designTypeId: 3,
    designStyleId: 6
  },
  {
    username: "mahmudulhasa260",
    priceStartFrom: 15,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/241994705/original/bedce6d58166de8ec742ba12bf431287a0c21e7c.jpg",
    designTypeId: 3,
    designStyleId: 6
  },
  {
    username: "pablomora658",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/video/upload/t_gig_cards_web/ff0zekoahyycdnsdyihk.png",
    designTypeId: 3,
    designStyleId: 6
  },
  {
    username: "designermanrk",
    priceStartFrom: 20,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/232174159/original/3b5c7340e4d3ed5f05255b055a03b41c7ab96832.png",
    designTypeId: 3,
    designStyleId: 6
  },
  {
    username: "jhumakhatun",
    priceStartFrom: 5,
    imageUrl: "https://fiverr-res.cloudinary.com/video/upload/t_gig_cards_web/jobj1mh2amo4epio1d5m.png",
    designTypeId: 3,
    designStyleId: 6
  },
  {
    username: "krish_jay1",
    priceStartFrom: 40,
    imageUrl: "https://fiverr-res.cloudinary.com/video/upload/t_gig_cards_web/skp6j29qj2s17uviap4i.png",
    designTypeId: 3,
    designStyleId: 6
  },
  {
    username: "shanzy12",
    priceStartFrom: 20,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/200156415/original/b8ce4131c504d2f890121d022d3715dcecb0f51d.png",
    designTypeId: 3,
    designStyleId: 6
  },
  {
    username: "hamza_ali111",
    priceStartFrom: 5,
    imageUrl: "https://fiverr-res.cloudinary.com/video/upload/t_gig_cards_web/xfi1xzcmaowc3tssqdbs.png",
    designTypeId: 3,
    designStyleId: 6
  },
  {
    username: "sameulshajid",
    priceStartFrom: 20,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/196313677/original/8058986b348cd6173b3e9875aba4ad4d463e33f3.jpg",
    designTypeId: 3,
    designStyleId: 6
  },
  {
    username: "rabiulbuft",
    priceStartFrom: 5,
    imageUrl: "https://fiverr-res.cloudinary.com/video/upload/t_gig_cards_web/vxxgcfdbpm6n1cdeeevu.png",
    designTypeId: 3,
    designStyleId: 6
  },
  {
    username: "ahmedlatif_2428",
    priceStartFrom: 5,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/129649290/original/7bfd99795714d8ea4f575fd406c1044e6002abce.jpg",
    designTypeId: 3,
    designStyleId: 6
  },
  {
    username: "irina_sidyakina",
    priceStartFrom: 15,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/249619668/original/b85d36d0ca8c2fdb603a22d2b2a5c7dfd442cc99.png",
    designTypeId: 3,
    designStyleId: 6
  },
  {
    username: "ahidhasan12",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/233445963/original/76573f60fad72ec456e0d0b9abe9192bbd624fa7.jpg",
    designTypeId: 3,
    designStyleId: 6
  },
  {
    username: "creative_arts0",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/250318291/original/b58bd21f63f2665bf589be477039ad7bfcb9aa3e.png",
    designTypeId: 3,
    designStyleId: 6
  },
  {
    username: "nazar8510",
    priceStartFrom: 50,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/200634334/original/624efbe1ff5ee1360f8091cd56db50f05ef0e7b4.jpeg",
    designTypeId: 3,
    designStyleId: 6
  },
  {
    username: "charismavoguish",
    priceStartFrom: 15,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/204010755/original/4155a09823f05664f5f6f851b5c5e8719a17cdbf.jpg",
    designTypeId: 3,
    designStyleId: 6
  },
  {
    username: "sonaliafroj",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/194312552/original/a0c77784014e55fb0c31d72440985394efb789f7.jpg",
    designTypeId: 3,
    designStyleId: 6
  },
  {
    username: "mahmudulhasa260",
    priceStartFrom: 15,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/279894510/original/ce94cfa358879476d7fbbc12c8dacc4aa50c17db.png",
    designTypeId: 3,
    designStyleId: 6
  },
  {
    username: "lihua002",
    priceStartFrom: 25,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/251027606/original/e1482b2cec66be75217461a083cc75f82ae43553.png",
    designTypeId: 3,
    designStyleId: 6
  },
  {
    username: "monica_888",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/153362223/original/e53e48549dcffff6879fa430323c7abead2173f5.jpg",
    designTypeId: 3,
    designStyleId: 6
  },
  {
    username: "bibdesign",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/133480626/original/81a24877e77aaa80a664bb010cd14ac9899f5f88.png",
    designTypeId: 3,
    designStyleId: 6
  },
  {
    username: "aaklat",
    priceStartFrom: 15,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/198200701/original/7cea0e465eed5a8d8ef79a7b5a77a9a88222fbbc.jpg",
    designTypeId: 3,
    designStyleId: 6
  },
  {
    username: "cluster_studio",
    priceStartFrom: 5,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/311496769/original/4cfc3a4b256cf0859dae7d71abb4562ff92b8cd5.jpg",
    designTypeId: 3,
    designStyleId: 6
  },
  {
    username: "grace_van_pelt",
    priceStartFrom: 20,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/126600643/original/c79d20caac7b5629ce2ae5873205450deea7aeb8.jpg",
    designTypeId: 3,
    designStyleId: 6
  },
  {
    username: "nesenili",
    priceStartFrom: 15,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/210211153/original/6439e5881742a0e18239072cf5e1804c469cdbad.jpg",
    designTypeId: 3,
    designStyleId: 6
  },
  {
    username: "sonia211",
    priceStartFrom: 15,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/259496728/original/73136ed1fc11794399c17d62765ca79606d2d20f.jpg",
    designTypeId: 3,
    designStyleId: 6
  },
  {
    username: "faarehajannat",
    priceStartFrom: 5,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/208628631/original/417dc673178acd3edc07b241aca9871a91b65aea.jpg",
    designTypeId: 3,
    designStyleId: 6
  },
  {
    username: "designillusionz",
    priceStartFrom: 15,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/176251267/original/dc9d145ff7c00bba10947ac53e7e5b89daaff1d8.jpg",
    designTypeId: 3,
    designStyleId: 6
  },
  {
    username: "nomanbd888",
    priceStartFrom: 20,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/195445705/original/415c0d03226b88a19103b47931ce949b52b2907d.png",
    designTypeId: 3,
    designStyleId: 6
  },
  {
    username: "riponaliin",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/160076406/original/ba43013358e311a86790c7aa2af2d959d5caec1d.jpg",
    designTypeId: 3,
    designStyleId: 6
  },
  {
    username: "sasaelebea",
    priceStartFrom: 420,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/109575668/original/6c4ac4277283897aaccbc89b562bf07db405cc09.png",
    designTypeId: 3,
    designStyleId: 8
  },
  {
    username: "parradesigner",
    priceStartFrom: 5,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/130535192/original/64ddae5c4e77dceb5e2036ede5389c1ed5146e32.jpg",
    designTypeId: 3,
    designStyleId: 8
  },
  {
    username: "natali_brill",
    priceStartFrom: 15,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/110011382/original/c7fef54dc9038ba3f74c0cc2347e975d3ff3d6ea.jpg",
    designTypeId: 3,
    designStyleId: 8
  },
  {
    username: "superoraurus",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/130872470/original/2a8344105a3be4ac14da240124663ad6b77a628e.png",
    designTypeId: 3,
    designStyleId: 8
  },
  {
    username: "gabykatten",
    priceStartFrom: 100,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/128533187/original/e53ae558b0a60dd8967c4b50c0e8c342f7b6a3ee.png",
    designTypeId: 3,
    designStyleId: 8
  },
  {
    username: "arnikodetanto",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/256701172/original/5029a0d932f6ff61ab3c3bd9aa00abd2d1277fd8.jpg",
    designTypeId: 3,
    designStyleId: 8
  },
  {
    username: "vikka_shakun",
    priceStartFrom: 40,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/104487730/original/b7b75dcf23841297b8da580418577a89f3134549.jpg",
    designTypeId: 3,
    designStyleId: 8
  },
  {
    username: "ruangsore",
    priceStartFrom: 20,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/79240036/original/476cc90f0f9eda4925ad963cba3493dbc08f26d9.jpg",
    designTypeId: 3,
    designStyleId: 8
  },
  {
    username: "radee96",
    priceStartFrom: 25,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/208331934/original/8a692c6d6d5db6b24c531df72f65c1d1883b90b2.jpg",
    designTypeId: 3,
    designStyleId: 8
  },
  {
    username: "sveta_zhadko",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/204054655/original/edadb30af6477cef40141855ac16718fad969d9f.png",
    designTypeId: 3,
    designStyleId: 8
  },
  {
    username: "novaya371",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/188547234/original/e7cbe74a7bc1357989040248ef562fb54ef1d60a.jpg",
    designTypeId: 3,
    designStyleId: 8
  },
  {
    username: "gabglb",
    priceStartFrom: 30,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/208774237/original/c19d62e2de864416e80b3cef22bf933106d7d3d0.jpg",
    designTypeId: 3,
    designStyleId: 8
  },
  {
    username: "novaya371",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/189679974/original/8894b3aabdfac2a245a02a25843edbd7696b9b22.jpg",
    designTypeId: 3,
    designStyleId: 8
  },
  {
    username: "msthappy02",
    priceStartFrom: 20,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/286253697/original/4fb69abfcb8f38d132ffe504abaa1958bcfa8885.jpeg",
    designTypeId: 3,
    designStyleId: 8
  },
  {
    username: "awighnamastu",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/144028765/original/6256d7a092afb6d8df5d4811facba6e740938d92.jpg",
    designTypeId: 3,
    designStyleId: 8
  },
  {
    username: "aroosaameer92",
    priceStartFrom: 5,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/118650535/original/5cc6477008b8bf789d0d872ed5393a8eadbce380.jpg",
    designTypeId: 3,
    designStyleId: 8
  },
  {
    username: "taniyasingh629",
    priceStartFrom: 25,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/175392549/original/6903d0e7006396605dc91049a1653aaf924a160c.jpg",
    designTypeId: 3,
    designStyleId: 8
  },
  {
    username: "valeryaogarko",
    priceStartFrom: 5,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/254396515/original/ede2924ab8416cf8ea3522a15aaccea97aeacc1e.png",
    designTypeId: 3,
    designStyleId: 8
  },
  {
    username: "dibujantis",
    priceStartFrom: 110,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/174449996/original/805dc8c1feb4941b3ff6dab60b9334f4b109f0d7.png",
    designTypeId: 3,
    designStyleId: 8
  },
  {
    username: "nataliaafnita",
    priceStartFrom: 60,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/224549822/original/f96449bc574a2e2406aec14b5c2076d207eea951.jpg",
    designTypeId: 3,
    designStyleId: 8
  },
  {
    username: "slavkokahovsky",
    priceStartFrom: 100,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/206851608/original/76f4563f64e8443b64eae9577992cb78dae0b3e3.jpg",
    designTypeId: 3,
    designStyleId: 8
  },
  {
    username: "apolinarias",
    priceStartFrom: 100,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/32437665/original/1dc6a7e39976652c863abd87327f738b26d3b72e.jpg",
    designTypeId: 3,
    designStyleId: 8
  },
  {
    username: "fairoosmusadick",
    priceStartFrom: 30,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/157708259/original/6d07c8ffc8711b9a13ae4b2a54066a64b9cb1e99.jpg",
    designTypeId: 3,
    designStyleId: 8
  },
  {
    username: "designbyc",
    priceStartFrom: 90,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/234467565/original/963d711b9a18bcd364f86e183284e7f9972d0628.jpg",
    designTypeId: 3,
    designStyleId: 8
  },
  {
    username: "damian3d5",
    priceStartFrom: 300,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/160611456/original/5f83cba6af90715c51f4b95ed781d57e4f106e2c.jpg",
    designTypeId: 3,
    designStyleId: 8
  },
  {
    username: "fikrihidajat",
    priceStartFrom: 45,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/126869385/original/dd15317f01ac85ab248455bc8d8a23ae5251772a.png",
    designTypeId: 3,
    designStyleId: 8
  },
  {
    username: "fikrihidajat",
    priceStartFrom: 45,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/246474461/original/b11f8f51300c662cecf6531c3d53c99fbb9514d1.png",
    designTypeId: 3,
    designStyleId: 8
  },
  {
    username: "nataliwing",
    priceStartFrom: 30,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/97749133/original/2752e7c6ba30bf7621768a4ca1c20774dbbe05c5.jpg",
    designTypeId: 3,
    designStyleId: 8
  },
  {
    username: "avotaco",
    priceStartFrom: 25,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/186359699/original/1d5ad167f6c14552a30dff98bb1253134cc47152.png",
    designTypeId: 3,
    designStyleId: 8
  },
  {
    username: "soraia_freire",
    priceStartFrom: 15,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/248251738/original/0afeb056dc46d68c94d7ed432c0308822385dfa8.png",
    designTypeId: 3,
    designStyleId: 8
  },
  {
    username: "girlprog",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/151736196/original/e8c49a6d9f0baf3b5b6b2cb6f1fe02e50f25faf1.jpg",
    designTypeId: 3,
    designStyleId: 8
  },
  {
    username: "elenahavroshka",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/291691946/original/2f5da3b18b15b4e691d9e3c6991272d3dc5c6777.png",
    designTypeId: 3,
    designStyleId: 8
  },
  {
    username: "hazelnatt",
    priceStartFrom: 5,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/243405822/original/8cbdad4aa42ed9f55471909f568e804ad2e1285a.jpg",
    designTypeId: 3,
    designStyleId: 8
  },
  {
    username: "elyluu",
    priceStartFrom: 580,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/107675030/original/8a02df8eeac2a6abc4dd9eb5b3cf962011373cfe.jpg",
    designTypeId: 3,
    designStyleId: 8
  },
  {
    username: "wowyellow",
    priceStartFrom: 190,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/105149781/original/22d332ca1c903c8c06564d8791101afa8d13001c.jpg",
    designTypeId: 3,
    designStyleId: 8
  },
  {
    username: "jo_si_pa",
    priceStartFrom: 20,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/228393403/original/7ddca4156b49408f8798aa379cfc15dd833a7960.jpg",
    designTypeId: 3,
    designStyleId: 8
  },
  {
    username: "twoturtlesdzn",
    priceStartFrom: 50,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/216776385/original/ec2047bb0b011081b066ff45e847ce56ea55bde6.jpg",
    designTypeId: 3,
    designStyleId: 8
  },
  {
    username: "gabykatten",
    priceStartFrom: 200,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/211853761/original/c3febf644a653fc1d8a2729163507ee70992725c.png",
    designTypeId: 3,
    designStyleId: 8
  },
  {
    username: "wowyellow",
    priceStartFrom: 195,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/14804554/original/c677d62d37f180cc2710586ccc5672ba6b47d423.jpg",
    designTypeId: 3,
    designStyleId: 8
  },
  {
    username: "sasakhalisa",
    priceStartFrom: 250,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/135610114/original/6bcccbf1cc776386070b54bba1449189aea87479.png",
    designTypeId: 3,
    designStyleId: 8
  },
  {
    username: "bananodromo",
    priceStartFrom: 250,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/115458061/original/09120c573b5ac1eeb81d742dded25282c9096ebf.jpg",
    designTypeId: 3,
    designStyleId: 8
  },
  {
    username: "alinebruniere",
    priceStartFrom: 65,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/136878313/original/6a7957d946920fd09fa393445caab26d48fff09a.png",
    designTypeId: 3,
    designStyleId: 8
  },
  {
    username: "maayanx",
    priceStartFrom: 75,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/152915550/original/95e14732adc87b033bae57c422b3bed45c0de49d.jpg",
    designTypeId: 3,
    designStyleId: 8
  },
  {
    username: "marks_jp",
    priceStartFrom: 5,
    imageUrl: "https://fiverr-res.cloudinary.com/video/upload/so_74.653,t_gig_cards_web/akkeqfw1g4qrrvolc68n.png",
    designTypeId: 3,
    designStyleId: 8
  },
  {
    username: "nocitostudio",
    priceStartFrom: 55,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/228058918/original/5c3fc4f2cae6839582753148aca447a3ec19a55b.jpeg",
    designTypeId: 3,
    designStyleId: 8
  },
  {
    username: "chresjoent",
    priceStartFrom: 25,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/161875684/original/a418d3e02f19f42c7f0e5317046c1892c75f9d78.jpg",
    designTypeId: 3,
    designStyleId: 8
  },
  {
    username: "stindyart",
    priceStartFrom: 30,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/241474389/original/632cbfaaebbffebadaac0e1f67bf7a11ce88c0de.jpg",
    designTypeId: 3,
    designStyleId: 8
  },
  {
    username: "stindyart",
    priceStartFrom: 30,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/241474389/original/632cbfaaebbffebadaac0e1f67bf7a11ce88c0de.jpg",
    designTypeId: 3,
    designStyleId: 8
  },
  {
    username: "logomaker110",
    priceStartFrom: 15,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/281540619/original/5afb3841e314b4e1edc84c8f8f514f91f7f0a6aa.jpg",
    designTypeId: 3,
    designStyleId: 8
  },
  {
    username: "mireiamullor",
    priceStartFrom: 75,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/193341226/original/f27d73be726ea4dd1d792c241a13706f58337573.jpg",
    designTypeId: 3,
    designStyleId: 8
  },
  {
    username: "valeriiadomino",
    priceStartFrom: 35,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/66012654/original/280e31199c0daa8155b7557b802ba5231aded8f5.jpg",
    designTypeId: 3,
    designStyleId: 8
  },
  {
    username: "yennyyasnila",
    priceStartFrom: 25,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/128332944/original/35551fbabbc0de5f1e8a33ae7300f1baeffe8e38.jpg",
    designTypeId: 3,
    designStyleId: 8
  },
  {
    username: "artykate",
    priceStartFrom: 25,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/222393024/original/f5739da64febeddac84b0e89dada2a674c3b732b.png",
    designTypeId: 3,
    designStyleId: 8
  },
  {
    username: "monica_888",
    priceStartFrom: 25,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/152986172/original/bc98096710d81b845c3c159b5fcd6a5574451a32.jpg",
    designTypeId: 3,
    designStyleId: 8
  },
  {
    username: "deeadeac",
    priceStartFrom: 25,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/225958370/original/485ec26b5a1541bfaa771d6d23a1c0d6be4e8652.png",
    designTypeId: 3,
    designStyleId: 8
  },
  {
    username: "cutefoxyshop",
    priceStartFrom: 50,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs2/269211714/original/e518f4d852aee3410725162390dc5fc0567db1f0.png",
    designTypeId: 3,
    designStyleId: 8
  },
  {
    username: "fikrihidajat",
    priceStartFrom: 20,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/259306516/original/9600623d169eb59b56f5092b61bbd32254dc61b2.jpg",
    designTypeId: 3,
    designStyleId: 8
  },
  {
    username: "maryamateeq28",
    priceStartFrom: 25,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/187327289/original/2f5e17ad6e908169cb7894420e2665c76c90959b.jpg",
    designTypeId: 3,
    designStyleId: 8
  },
  {
    username: "apolinarias",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/298646794/original/3cf09ab22cbf41d5445c86e263c554cb8e09b74e.jpg",
    designTypeId: 3,
    designStyleId: 8
  },
  {
    username: "heritadashi",
    priceStartFrom: 35,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/284476072/original/6dc3faf88a9da51f3e4972df0cf8501f06fb6589.jpg",
    designTypeId: 3,
    designStyleId: 8
  },
  {
    username: "trasaves",
    priceStartFrom: 30,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/174046427/original/20add5366dc0170ee7ce2202e1f4905763826671.jpg",
    designTypeId: 3,
    designStyleId: 8
  },
  {
    username: "analourenso",
    priceStartFrom: 75,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/130784992/original/b98409726978f9b7f125f7f4d3063ce011e329b8.png",
    designTypeId: 3,
    designStyleId: 8
  },
  {
    username: "zarya_kiqo",
    priceStartFrom: 25,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/238513720/original/fc0ff0dfe243a68fa804327e0d53a0120c77a023.png",
    designTypeId: 3,
    designStyleId: 8
  },
  {
    username: "moevil",
    priceStartFrom: 5,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/231994430/original/d5700d58fabbc5fb817c403fa12f0f67f42e5471.jpeg",
    designTypeId: 3,
    designStyleId: 8
  },
  {
    username: "cutefoxyshop",
    priceStartFrom: 50,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/263810837/original/5c5657b4ed7748c22d602a54d7a2e7649d3db78c.png",
    designTypeId: 3,
    designStyleId: 8
  },
  {
    username: "felizabeth",
    priceStartFrom: 20,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/244780357/original/076c25b0713cd2a0556598bb2339d98153040a44.jpg",
    designTypeId: 3,
    designStyleId: 8
  },
  {
    username: "lunaartix",
    priceStartFrom: 30,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/266839774/original/1505b831b8e28f558391143a64f4571ea2f97e65.jpg",
    designTypeId: 3,
    designStyleId: 8
  },
  {
    username: "cindyannisa",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/236718044/original/3b1a5ef72d244eb728b1f75596a398b11cfbea34.jpg",
    designTypeId: 3,
    designStyleId: 8
  },
  {
    username: "aldilapermata",
    priceStartFrom: 50,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/235046010/original/b7aa81331cd5184994c60d5d63422805dc116615.png",
    designTypeId: 3,
    designStyleId: 8
  },
  {
    username: "kusumagy",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/219015316/original/11b98634624b04bd607b12b979477c63796c8338.png",
    designTypeId: 3,
    designStyleId: 8
  },
  {
    username: "zainabliaqat",
    priceStartFrom: 30,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/140493026/original/a9f7918c7cca57d7dc6fba81729b03d7deee0be3.jpg",
    designTypeId: 3,
    designStyleId: 8
  },
  {
    username: "inthisworld",
    priceStartFrom: 30,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/80008181/original/ff3e75145317b2aed6198ef607828719257e87bd.jpg",
    designTypeId: 3,
    designStyleId: 8
  },
  {
    username: "vallikestodraw",
    priceStartFrom: 20,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/111115070/original/e1c7227d28bb958bc262e18facccf286c0042a6c.jpg",
    designTypeId: 3,
    designStyleId: 8
  },
  {
    username: "luwiss",
    priceStartFrom: 30,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/223353719/original/212cf6ad1c5f74f059d9e3a55c70ce1c1d27f10c.jpg",
    designTypeId: 3,
    designStyleId: 8
  },
  {
    username: "viktoryia_reut",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/254074006/original/b3369b1eb48a9d101f23ded87b3689e9c9de3143.jpg",
    designTypeId: 3,
    designStyleId: 8
  },
  {
    username: "alitosart",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs2/249890922/original/06c299a31a65034eaf3d9f2ad680199a90ec4a00.jpg",
    designTypeId: 3,
    designStyleId: 8
  },
  {
    username: "nina_kononova",
    priceStartFrom: 40,
    imageUrl: "https://fiverr-res.cloudinary.com/video/upload/so_26.869395,t_gig_cards_web/prpkzovhwgdnwcvetee8.png",
    designTypeId: 3,
    designStyleId: 8
  },
  {
    username: "star_line",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/229718316/original/b82b2be62522dcaa1c147e8d9e0a7db045a23636.jpg",
    designTypeId: 3,
    designStyleId: 8
  },
  {
    username: "msthappy02",
    priceStartFrom: 20,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/285056535/original/833b00fded7ae42286859f49dd6d033035e5f61a.png",
    designTypeId: 3,
    designStyleId: 8
  },
  {
    username: "ajantailora",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/236970266/original/3cd7923aff51534115891f333f8c7db11172d947.jpg",
    designTypeId: 3,
    designStyleId: 8
  },
  {
    username: "mariafatima9501",
    priceStartFrom: 30,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/192026115/original/dcc15ced2b6ad44b7b97f9095596e3181512d615.png",
    designTypeId: 3,
    designStyleId: 8
  },
  {
    username: "yusufyusuf728",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/159478258/original/4bb91284dd9e41ba11d9dc25ca3d761e2528b048.jpg",
    designTypeId: 3,
    designStyleId: 8
  },
  {
    username: "ksenia_biruk",
    priceStartFrom: 25,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/197954043/original/d6264838c3557c2ef5b67494e93ca04bcd702942.png",
    designTypeId: 3,
    designStyleId: 8
  },
  {
    username: "darya_lavit",
    priceStartFrom: 25,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/211310523/original/aa61f04824a959fc35c84b149ea071a91f68039b.png",
    designTypeId: 3,
    designStyleId: 8
  },
  {
    username: "mahamchaudhari",
    priceStartFrom: 20,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/251512066/original/785721567fbc1618962da22f8eca1676284cf5b4.png",
    designTypeId: 3,
    designStyleId: 8
  },
  {
    username: "alasmine",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/235132286/original/bb0c0203bd0b8bc73048db923698bb39a3130768.jpg",
    designTypeId: 3,
    designStyleId: 8
  },
  {
    username: "yashkaku",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/295287755/original/71f9d8734ef43860d51d8a45560216f6d6a7d779.jpg",
    designTypeId: 3,
    designStyleId: 8
  },
  {
    username: "pan_corn",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/301137242/original/e70d8bb71e15f30c24d52441f7c25c179bce9f3c.jpg",
    designTypeId: 3,
    designStyleId: 8
  },
  {
    username: "martu90",
    priceStartFrom: 25,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/249523544/original/f53b44ef1683192964e8b205c858f1e97c997997.png",
    designTypeId: 3,
    designStyleId: 8
  },
  {
    username: "olga_vatrushka",
    priceStartFrom: 5,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/277476000/original/f750dc268fc0c10dc0eb405a972f96d198ee7010.png",
    designTypeId: 3,
    designStyleId: 8
  },
  {
    username: "mikkasole",
    priceStartFrom: 20,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/186134694/original/f7ee62cee4df4dc65e9c99281aeb92349a8281f0.jpg",
    designTypeId: 3,
    designStyleId: 8
  },
  {
    username: "yevhenii_ch",
    priceStartFrom: 15,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/282632382/original/98b4a2aedca1ff30b102a01a77ff28325bfb1153.jpg",
    designTypeId: 3,
    designStyleId: 8
  },
  {
    username: "eman_tawfik",
    priceStartFrom: 5,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/253584938/original/571e3147dfa5f526fe0ac22b4fd97112622f8cf2.jpg",
    designTypeId: 3,
    designStyleId: 8
  },
  {
    username: "taniyasingh629",
    priceStartFrom: 30,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/187853305/original/c00c41ffad0f6bcd0e734d8ae904e178887571d6.jpg",
    designTypeId: 3,
    designStyleId: 8
  },
  {
    username: "azkasalsabila",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/216154786/original/08b50d37b54a716132940805c09b6c6982a2c848.jpg",
    designTypeId: 3,
    designStyleId: 8
  },
  {
    username: "girlswithnojob4",
    priceStartFrom: 25,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/209052424/original/7f53e9adba47b02fff5a97a38d110c4a6e987e4b.jpg",
    designTypeId: 3,
    designStyleId: 8
  },
  {
    username: "andrealopezp",
    priceStartFrom: 20,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/207323893/original/af2caf9339ccd9f788739d5df34a18b6647ad526.jpg",
    designTypeId: 3,
    designStyleId: 8
  },
  {
    username: "sasha__sasha",
    priceStartFrom: 15,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/140117255/original/8cea8e31be2dd2215b8da130309a6dc69b488c28.jpg",
    designTypeId: 3,
    designStyleId: 8
  },
  {
    username: "monika_reddy",
    priceStartFrom: 5,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/212647332/original/efd3812b17d4d26481a4b032fce0df1c67e53c7a.png",
    designTypeId: 3,
    designStyleId: 8
  },
  {
    username: "mailksaleem",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/226957849/original/058e085496ac0de79a5e4baa23b8e0658e699567.jpg",
    designTypeId: 3,
    designStyleId: 8
  },
  {
    username: "tetianabylyna",
    priceStartFrom: 20,
    imageUrl: "https://fiverr-res.cloudinary.com/video/upload/so_7.401277,t_gig_cards_web/lesfagtyfxpfcj7oswyq.png",
    designTypeId: 3,
    designStyleId: 8
  },
  {
    username: "generatinx",
    priceStartFrom: 15,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/175528653/original/2ab10d9f0ffcd35f8361feeed5fe0be89085a739.jpg",
    designTypeId: 3,
    designStyleId: 8
  },
  {
    username: "dobroyerdesign",
    priceStartFrom: 15,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/196538751/original/83be148062092b2da5fe5e5108d30a37b27d55f1.jpg",
    designTypeId: 3,
    designStyleId: 8
  },
  {
    username: "ann_sg",
    priceStartFrom: 15,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/262574540/original/23c2dedd0796392d95778e46248fe97af9b9d292.jpg",
    designTypeId: 3,
    designStyleId: 8
  },
  {
    username: "msthappy02",
    priceStartFrom: 20,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/245773880/original/fb2f45a711bf7b411c06cfe11b2a00ba4a969ba3.png",
    designTypeId: 3,
    designStyleId: 8
  },
  {
    username: "fatiqasim",
    priceStartFrom: 15,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/246782790/original/ac1924734be7fde4ca657c5f7baced238f82580f.jpg",
    designTypeId: 3,
    designStyleId: 8
  },
  {
    username: "syedhuzaifa936",
    priceStartFrom: 15,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/309731500/original/7fccd1a89ecfe13bc9bf990753036482f7ee6641.jpg",
    designTypeId: 3,
    designStyleId: 8
  },
  {
    username: "yahya_ahmad07",
    priceStartFrom: 15,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/233947535/original/024d013031e92be4d255d1ec3d1d04c6307e33a2.jpg",
    designTypeId: 3,
    designStyleId: 8
  },
  {
    username: "cartoonist10",
    priceStartFrom: 25,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/266298561/original/b83c73bc3e540456c9e2b7217c017204d5a55e9d.jpg",
    designTypeId: 3,
    designStyleId: 8
  },
  {
    username: "mawra66",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/239811676/original/c50116a1ff9e7fcaa12b84a659a286b459199a5f.jpg",
    designTypeId: 3,
    designStyleId: 8
  },
  {
    username: "nata_gvozd",
    priceStartFrom: 20,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/244656427/original/cab2f85442fde973e99eb37f183bd2538bbe83db.jpg",
    designTypeId: 3,
    designStyleId: 8
  },
  {
    username: "blos_graffiti",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/279741134/original/7c2e5a1b38415ad0770b00932e84f86c7fff3839.jpg",
    designTypeId: 3,
    designStyleId: 8
  },
  {
    username: "elenaclee",
    priceStartFrom: 20,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/262530068/original/224f88d2697f26912f9de6af0bdf2a321a2942aa.png",
    designTypeId: 3,
    designStyleId: 8
  },
  {
    username: "neelsoha",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/video/upload/so_2.6,t_gig_cards_web/x7drl4otk9bvmriec1zi.png",
    designTypeId: 3,
    designStyleId: 8
  },
  {
    username: "mahaongreen",
    priceStartFrom: 15,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/181825003/original/0274a407151cc70459d5b0c8539b6729a7f6dfec.jpg",
    designTypeId: 3,
    designStyleId: 8
  },
  {
    username: "manuzambrano",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/127896317/original/dea11e8aa14cc97b079e6327237a1268418884c2.png",
    designTypeId: 3,
    designStyleId: 8
  },
  {
    username: "ghaisan_design",
    priceStartFrom: 5,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/167352475/original/0648014c2d3e41d51984db365ee510116ac286e5.jpg",
    designTypeId: 3,
    designStyleId: 8
  },
  {
    username: "dineshmadhushan",
    priceStartFrom: 20,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/223990695/original/dfc0e95cc8bee7e30237b7f550d9ab69694f792d.jpg",
    designTypeId: 3,
    designStyleId: 8
  },
  {
    username: "zyatusolutions",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/135640803/original/4e573d28668432a51b9ad2f65a9677bda51e8ed0.jpg",
    designTypeId: 3,
    designStyleId: 8
  },
  {
    username: "lina_graphic",
    priceStartFrom: 20,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/161118072/original/ac4989eae999abca13a70ffda316a5cf7a120c19.jpg",
    designTypeId: 3,
    designStyleId: 8
  },
  {
    username: "baladesginer",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/120913420/original/b37945e003b3635b00ad3723e49c2dfbea17dc99.jpg",
    designTypeId: 3,
    designStyleId: 8
  },
  {
    username: "mansipanwar",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/186527710/original/53d99c2a2a1a91eb2836f6982c05dd580297f215.jpg",
    designTypeId: 3,
    designStyleId: 8
  },
  {
    username: "differenttouch7",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/251070169/original/b28635bef3e258e0f8ce2883df52339d913df361.jpg",
    designTypeId: 3,
    designStyleId: 8
  },
  {
    username: "kainatkarim03",
    priceStartFrom: 5,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/251379795/original/8d0fc553280c551950cfaf667310a1c280637702.jpg",
    designTypeId: 3,
    designStyleId: 8
  },
  {
    username: "dahamindraji773",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/160473591/original/0a701ba6c252e86308abcc1aa368282da4c956fb.png",
    designTypeId: 3,
    designStyleId: 8
  },
  {
    username: "darshanasrimal",
    priceStartFrom: 20,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/178748750/original/be0ff50e3df13fd22c67aa9d650910a417767a5a.jpg",
    designTypeId: 3,
    designStyleId: 8
  },
  {
    username: "lutviaanisah",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/138737933/original/a968f73cb129674bafb0a41d0ce16c356e037d0e.jpg",
    designTypeId: 3,
    designStyleId: 8
  },
  {
    username: "tahneejung",
    priceStartFrom: 20,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/77548811/original/e01865f23de1344ecbcce148a92cc438677f2adf.jpg",
    designTypeId: 3,
    designStyleId: 8
  },
  {
    username: "febriyanafadill",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/232765473/original/ea5fa569021bf5b37674391ad848948b2e907cb8.jpg",
    designTypeId: 3,
    designStyleId: 8
  },
  {
    username: "nibir_arif",
    priceStartFrom: 20,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/99441331/original/a864907ba473d1beb0484312fc5cbb22dabf0ad8.jpg",
    designTypeId: 3,
    designStyleId: 8
  },
  {
    username: "saadzahouan",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/276307204/original/04eae39be225ebff8a5d7e54a01b1ca1dc1a712e.png",
    designTypeId: 3,
    designStyleId: 8
  },
  {
    username: "kikidhila",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/222695877/original/d54036a0b611a7032006f43ee9c5a78296d5da4b.jpg",
    designTypeId: 3,
    designStyleId: 8
  },
  {
    username: "shayanqureshii",
    priceStartFrom: 5,
    imageUrl: "https://fiverr-res.cloudinary.com/video/upload/so_1.429675,t_gig_cards_web/b1swmhmuyavzpxpkljho.png",
    designTypeId: 3,
    designStyleId: 8
  },
  {
    username: "avioem",
    priceStartFrom: 25,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/179385097/original/57be996766b7bea0189fc48c8fa5479d1297daa6.jpg",
    designTypeId: 3,
    designStyleId: 8
  },
  {
    username: "gastonproductio",
    priceStartFrom: 5,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/192664829/original/eb8ed341898e6b115750742a0d9c37fb31e7a070.jpg",
    designTypeId: 3,
    designStyleId: 8
  },
  {
    username: "goseeu",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/289551378/original/87fb0e0752adfcde5e72196213399b1f95f2f6a1.jpg",
    designTypeId: 3,
    designStyleId: 8
  },
  {
    username: "kaleemahmed1",
    priceStartFrom: 5,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/262750463/original/1ce9df476e7366bb931d28ac29060f79309cdd72.jpg",
    designTypeId: 3,
    designStyleId: 8
  },
  {
    username: "pratikfloyd",
    priceStartFrom: 5,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/311162661/original/49892c9841688ae8bfa7bdbe37283cc757e48298.png",
    designTypeId: 3,
    designStyleId: 8
  },
  {
    username: "art_treasure01",
    priceStartFrom: 15,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/283140707/original/dd9baaf9f724990e369316463038da0ab0a871f5.jpg",
    designTypeId: 4,
    designStyleId: 13
  },
  {
    username: "farth_",
    priceStartFrom: 15,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/251252357/original/61260c15efa36088adacb33b8991ea11e033becf.jpg",
    designTypeId: 4,
    designStyleId: 13
  },
  {
    username: "typealiens",
    priceStartFrom: 20,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/235681607/original/7b18f4103febe0431a240e21b0ad99211e95e16e.png",
    designTypeId: 4,
    designStyleId: 13
  },
  {
    username: "aiadesign",
    priceStartFrom: 25,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/290515152/original/13d5c7da79fa8ab29bded54f47989ef6a41457bf.png",
    designTypeId: 4,
    designStyleId: 13
  },
  {
    username: "salma_farhoune",
    priceStartFrom: 25,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/243014111/original/343304a9f7d0fe276fe113ca02ab9bd35210956c.jpg",
    designTypeId: 4,
    designStyleId: 13
  },
  {
    username: "opeelepeel",
    priceStartFrom: 50,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/263744553/original/49910f342469f490e083f1e314cfab52b0a07318.jpeg",
    designTypeId: 4,
    designStyleId: 13
  },
  {
    username: "tanzeel13",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/293028281/original/abbf85b2f6c801bc5841afdfa897305a56d7b78e.jpg",
    designTypeId: 4,
    designStyleId: 13
  },
  {
    username: "amineabdou262",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/267756219/original/349b755f6a42c2f4f0f14901fecc148b98d33a73.png",
    designTypeId: 4,
    designStyleId: 13
  },
  {
    username: "vistualproject",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/video/upload/t_gig_cards_web/uiisio5n5jag8mh6xsei.png",
    designTypeId: 4,
    designStyleId: 13
  },
  {
    username: "harshakon",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/279165218/original/98dceb8fb1a99cc74cab715d0e4cacb0fb9f265d.png",
    designTypeId: 4,
    designStyleId: 13
  },
  {
    username: "unique_designsx",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/239264704/original/1f81f3f69cff33a2365642e90a6d14409b3b8391.jpg",
    designTypeId: 4,
    designStyleId: 13
  },
  {
    username: "hbiplob730",
    priceStartFrom: 15,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/225717960/original/a76b66b16b7791b71d6f6c3b9fe205e48cf75d05.jpg",
    designTypeId: 4,
    designStyleId: 13
  },
  {
    username: "inonefilms",
    priceStartFrom: 15,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/303531897/original/044de2fd51928635d006c5faaf2e1087fcac1463.jpg",
    designTypeId: 4,
    designStyleId: 13
  },
  {
    username: "evoquee",
    priceStartFrom: 15,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/255526983/original/36378ce4a89b7e3b163bd8e53dd712561cb5e05b.jpg",
    designTypeId: 4,
    designStyleId: 13
  },
  {
    username: "atlasi_designs",
    priceStartFrom: 25,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/221399935/original/a9bbff374d89f88c6a0d4f1fdaa15679888cd7d6.jpg",
    designTypeId: 4,
    designStyleId: 13
  },
  {
    username: "tomoiaugus",
    priceStartFrom: 15,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/274852491/original/246e15864ff5ddca19dce27f71c1e96c4fcbefcb.jpg",
    designTypeId: 4,
    designStyleId: 13
  },
  {
    username: "laluaku",
    priceStartFrom: 15,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/230550603/original/044840833b8d82b058f0e3b4da560eb7f01f5885.jpg",
    designTypeId: 4,
    designStyleId: 13
  },
  {
    username: "artist_squad75",
    priceStartFrom: 15,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/273397987/original/89b613427f5f7afe104f9f25bdfc30b8eb97a3b1.jpg",
    designTypeId: 4,
    designStyleId: 13
  },
  {
    username: "rindanghimawan",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/video/upload/so_0.538728,t_gig_cards_web/m8jptkamqgxtf0n5yvg1.png",
    designTypeId: 4,
    designStyleId: 13
  },
  {
    username: "ammara_090",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/271055187/original/15e5ebd7d907e0addc91f82458cc33912bfb6bf4.jpg",
    designTypeId: 4,
    designStyleId: 13
  },
  {
    username: "mark_zuckerbrg",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/262888960/original/38de344a56e74644b9e0f4943196f1f3da6edc1e.jpg",
    designTypeId: 4,
    designStyleId: 13
  },
  {
    username: "star_studio8",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/256970141/original/f602ac7ce416072ce22ac5c1c19dee85aac96229.jpg",
    designTypeId: 4,
    designStyleId: 13
  },
  {
    username: "uchen01",
    priceStartFrom: 20,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/112444627/original/6859597a25e68d9bb1dbdda2f2fbf94b01a6892e.png",
    designTypeId: 4,
    designStyleId: 13
  },
  {
    username: "sidra344",
    priceStartFrom: 5,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/285425641/original/1f9190ebd0d5d5db09ccca5151dc5498b4ed7110.png",
    designTypeId: 4,
    designStyleId: 13
  },
  {
    username: "sofiahueck",
    priceStartFrom: 40,
    imageUrl: "https://fiverr-res.cloudinary.com/video/upload/t_gig_cards_web/pqh1ihgmbivwxppwxrli.png",
    designTypeId: 4,
    designStyleId: 13
  },
  {
    username: "society_std",
    priceStartFrom: 15,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/190467605/original/65d131827dad0c3f94253293c802aa4390e6e45c.png",
    designTypeId: 4,
    designStyleId: 13
  },
  {
    username: "kylajuruena",
    priceStartFrom: 20,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/282488989/original/6a1c67dfd445a9029f0ab55b0f87d91207796633.png",
    designTypeId: 4,
    designStyleId: 13
  },
  {
    username: "adityafikri",
    priceStartFrom: 20,
    imageUrl: "https://fiverr-res.cloudinary.com/video/upload/t_gig_cards_web/qphchqszufl6hjnlbcud.png",
    designTypeId: 4,
    designStyleId: 13
  },
  {
    username: "erumprints",
    priceStartFrom: 5,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/265016291/original/6441c023b66079a3ad2cdcfe1b70473d96763adb.png",
    designTypeId: 4,
    designStyleId: 13
  },
  {
    username: "mewindson",
    priceStartFrom: 20,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/252859027/original/b6fe94485c4f0bb8fc33c6e4d72c2b7fdbf26f79.jpg",
    designTypeId: 4,
    designStyleId: 13
  },
  {
    username: "frozenpixel",
    priceStartFrom: 20,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/262535066/original/5968600ed683f21267115f8d1c9ba9182a195293.jpg",
    designTypeId: 4,
    designStyleId: 13
  },
  {
    username: "eloymendo",
    priceStartFrom: 15,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/170289613/original/ca47019730b62638d22e74a42098eec27ecfa4a0.png",
    designTypeId: 4,
    designStyleId: 13
  },
  {
    username: "dameproject",
    priceStartFrom: 5,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/184793641/original/5811684648600beaa6ba46de832f58caaa1e2424.jpg",
    designTypeId: 4,
    designStyleId: 13
  },
  {
    username: "labisal",
    priceStartFrom: 30,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs2/238817696/original/9d88b1d670061ad76c6493ef620736e2071a73cd.jpg",
    designTypeId: 4,
    designStyleId: 13
  },
  {
    username: "aq_graphix4",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/197053954/original/94d6b83e44cc0641cd6141b237794f01c8ee5329.jpg",
    designTypeId: 4,
    designStyleId: 13
  },
  {
    username: "saqlain_graphic",
    priceStartFrom: 5,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/265450450/original/a1a7733abb572299fcd49dce8a2504a55a096a64.jpg",
    designTypeId: 4,
    designStyleId: 13
  },
  {
    username: "marsarts",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/89558/original/0ad4749b7f7693fc1cac95b7a61abfa638e8103f.jpg",
    designTypeId: 4,
    designStyleId: 13
  },
  {
    username: "anthony_ilacqua",
    priceStartFrom: 5,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/296287429/original/3aba737f2f2e8b6b81fafe1816e6760ab3f1a6cd.jpg",
    designTypeId: 4,
    designStyleId: 13
  },
  {
    username: "magyarmelcsi",
    priceStartFrom: 30,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/146554491/original/3d79a39c3c19216844d2ed053bac9334550ab0d4.png",
    designTypeId: 4,
    designStyleId: 13
  },
  {
    username: "labisal",
    priceStartFrom: 25,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/169342074/original/9f79b1169bb6375f12281af90e0219a19920e5a9.jpg",
    designTypeId: 4,
    designStyleId: 13
  },
  {
    username: "natashaartist",
    priceStartFrom: 30,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/278407639/original/d22859fcb91fe4f0fd37d6282de89d56dfedc7f4.jpg",
    designTypeId: 4,
    designStyleId: 13
  },
  {
    username: "samraaqeel",
    priceStartFrom: 5,
    imageUrl: "https://fiverr-res.cloudinary.com/video/upload/so_9.752381,t_gig_cards_web/uvzda0hz9gqkpd5qmzfd.png",
    designTypeId: 4,
    designStyleId: 13
  },
  {
    username: "saliha_alie",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/257044394/original/31a8945675f9cddcbdbc5da63b7c62d95c67169c.png",
    designTypeId: 4,
    designStyleId: 13
  },
  {
    username: "inndesign_tm",
    priceStartFrom: 15,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/165504694/original/305926a8b4736ab069637ec7ceb3250980b8c22e.png",
    designTypeId: 4,
    designStyleId: 13
  },
  {
    username: "m_arslan_ch",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/217283736/original/aae5843e32d51922abf489e09e50b1b1c314770c.jpg",
    designTypeId: 4,
    designStyleId: 13
  },
  {
    username: "diazanoms",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/284207428/original/50c0b00d03cd0cd620b389ba38c281d2c5a87206.png",
    designTypeId: 4,
    designStyleId: 13
  },
  {
    username: "arthrodite",
    priceStartFrom: 5,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/286874154/original/5c2a3ba83a867ba071f95d3f788dca5b0d2fc351.png",
    designTypeId: 4,
    designStyleId: 13
  },
  {
    username: "woodengrafis",
    priceStartFrom: 50,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/179347256/original/2ab48dd417b08fcc99b1757adefc91caf9545f2d.jpg",
    designTypeId: 4,
    designStyleId: 13
  },
  {
    username: "sifar_art",
    priceStartFrom: 25,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/131034401/original/ae76d8f761162dfdbc8d26ce5fbc7b49cc6f437c.jpg",
    designTypeId: 4,
    designStyleId: 13
  },
  {
    username: "fedricoreyes",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/242953441/original/fc08feb15c80c7d7c08e3ae1c96633e32dcfbaa1.jpg",
    designTypeId: 4,
    designStyleId: 13
  },
  {
    username: "gaphicdeluxe",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/139182331/original/3bbadc77643ef8b38d29db9e077931266b8467f4.jpg",
    designTypeId: 4,
    designStyleId: 13
  },
  {
    username: "metadesign0",
    priceStartFrom: 5,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/110810519/original/d0756eb064d557a7ce45ddbc71ded21af128a8f9.jpg",
    designTypeId: 4,
    designStyleId: 13
  },
  {
    username: "marina_safaric",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/168289636/original/82feff5658291c6ef15b593f60099c598cf1ac15.jpg",
    designTypeId: 4,
    designStyleId: 13
  },
  {
    username: "lotemalole",
    priceStartFrom: 5,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/250426434/original/047713f00fa2575a7543e0e08e77fe80eb0076e9.jpg",
    designTypeId: 4,
    designStyleId: 13
  },
  {
    username: "saqlain_graphic",
    priceStartFrom: 5,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/270019650/original/fab630a45ce5797298605f089b90a479668d03de.jpg",
    designTypeId: 4,
    designStyleId: 13
  },
  {
    username: "woodengrafis",
    priceStartFrom: 40,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/220119007/original/eaaaa22f81451a7024f2da244f1234543d7ef071.jpg",
    designTypeId: 4,
    designStyleId: 13
  },
  {
    username: "elijahyrwd",
    priceStartFrom: 25,
    imageUrl: "https://fiverr-res.cloudinary.com/video/upload/t_gig_cards_web/jecdqrv2f4mwnww2qrjz.png",
    designTypeId: 4,
    designStyleId: 13
  },
  {
    username: "iramkhan851",
    priceStartFrom: 5,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/256555773/original/8507b3b15547d0940955d995c4a4b8f8d6be18f8.jpg",
    designTypeId: 4,
    designStyleId: 13
  },
  {
    username: "khan_design07",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/248881342/original/bdfcd22ee054d6233b87c2af65233ad1507821d1.jpg",
    designTypeId: 4,
    designStyleId: 13
  },
  {
    username: "designerxpertz",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/video/upload/so_3.342222,t_gig_cards_web/kofljbneixa2cwbqvz6r.png",
    designTypeId: 4,
    designStyleId: 13
  },
  {
    username: "graphicandpixel",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/video/upload/so_3.26738,t_gig_cards_web/xxnl3ewrazbqhstyhwwa.png",
    designTypeId: 4,
    designStyleId: 13
  },
  {
    username: "amineabdou262",
    priceStartFrom: 5,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/276109212/original/b051e0c0bce514966b00e017e071501e53ebf2df.png",
    designTypeId: 4,
    designStyleId: 13
  },
  {
    username: "farth_",
    priceStartFrom: 15,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/240602683/original/37b622411009b61a6776c65a62d0cb31dbb2d4c7.jpg",
    designTypeId: 4,
    designStyleId: 13
  },
  {
    username: "mdaatib",
    priceStartFrom: 5,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/224047620/original/8452f95cbc5045464af831e766f8ea4fca8de478.jpg",
    designTypeId: 4,
    designStyleId: 13
  },
  {
    username: "shanto33",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/124644787/original/85f54790d7b40a3c0d8e8fe1e493e4f6c11031c9.jpg",
    designTypeId: 4,
    designStyleId: 13
  },
  {
    username: "sujon10khan",
    priceStartFrom: 5,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/192415561/original/37d3967cd568ef7c06db5354fb95b6a5230e212f.jpg",
    designTypeId: 4,
    designStyleId: 13
  },
  {
    username: "eloymendo",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/199207670/original/adf232a73ce44572328e3ce37885352636725aa3.png",
    designTypeId: 4,
    designStyleId: 13
  },
  {
    username: "rabia1148",
    priceStartFrom: 15,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/171237524/original/e4afbb52414d9eb9eb9bff02cd67015554e2a36a.jpg",
    designTypeId: 4,
    designStyleId: 13
  },
  {
    username: "masrofik",
    priceStartFrom: 70,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/199639909/original/d80927794a667ec481b78fe60c3f08e70ff7bb44.jpg",
    designTypeId: 4,
    designStyleId: 13
  },
  {
    username: "surayazoya93",
    priceStartFrom: 40,
    imageUrl: "https://fiverr-res.cloudinary.com/video/upload/so_1.039711,t_gig_cards_web/luwq7lagwuujss4t9ro0.png",
    designTypeId: 4,
    designStyleId: 13
  },
  {
    username: "kokodifo",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/241606513/original/615b7f657c61007d2ecf26e2f4fdc5cdc5a385a4.png",
    designTypeId: 4,
    designStyleId: 13
  },
  {
    username: "mittalrao",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/50663794/original/a66cef890296b41018c8e53c63a9e57fafbbdfd9.jpg",
    designTypeId: 4,
    designStyleId: 13
  },
  {
    username: "expartclub",
    priceStartFrom: 50,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/160660433/original/aa610aef4ea002060f0a3a2928c08dfedf81a624.jpg",
    designTypeId: 4,
    designStyleId: 13
  },
  {
    username: "logo_designers5",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/230712842/original/7db11662e06ddded87a0d1968e38b191c6cd2e11.jpg",
    designTypeId: 4,
    designStyleId: 13
  },
  {
    username: "henta_zkhr",
    priceStartFrom: 25,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/165659791/original/63f6b9629beb95acd000b8516a023b68a0045041.jpg",
    designTypeId: 4,
    designStyleId: 13
  },
  {
    username: "eno_onf",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/159870328/original/81785920934f93271430026657812308eee72743.png",
    designTypeId: 4,
    designStyleId: 13
  },
  {
    username: "bagusutama",
    priceStartFrom: 35,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/115500977/original/7226e1cfe97512ace4cd47097bb1dfcac2ab564c.jpg",
    designTypeId: 4,
    designStyleId: 13
  },
  {
    username: "xoxoconcepts",
    priceStartFrom: 25,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/188205729/original/68229fd6976fa9cded1e5baddd8d67758a571f18.jpg",
    designTypeId: 4,
    designStyleId: 13
  },
  {
    username: "raowcksepand",
    priceStartFrom: 35,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/204571589/original/79ae45ac4f492f8d963e06dcd0541d4b8dc23cbc.jpg",
    designTypeId: 4,
    designStyleId: 13
  },
  {
    username: "raj_skilled",
    priceStartFrom: 5,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/202174213/original/3ff7ce0c658ea647429375b69d17d3183c88f630.jpg",
    designTypeId: 4,
    designStyleId: 13
  },
  {
    username: "lauragraphicart",
    priceStartFrom: 20,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/138585235/original/02f674ddb22ad6bf674d2aa2b19cfce29de2c6b1.png",
    designTypeId: 4,
    designStyleId: 13
  },
  {
    username: "krisnahandikaa",
    priceStartFrom: 30,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/246543372/original/e051ecf1db264453dddde57eb811d379f1521250.png",
    designTypeId: 4,
    designStyleId: 13
  },
  {
    username: "joyamondal",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/258702276/original/b2b5e448bcbf4ef020fd1b30a509a10a6127aec1.jpg",
    designTypeId: 4,
    designStyleId: 13
  },
  {
    username: "mbarts17",
    priceStartFrom: 20,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/310025897/original/7ecfe1b47fb21f31638541d48620c391dc98cc31.jpg",
    designTypeId: 4,
    designStyleId: 13
  },
  {
    username: "saba_anwar",
    priceStartFrom: 25,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/269124277/original/f67a278e209af8a5cfa16d02ee94bd84fcd565af.png",
    designTypeId: 4,
    designStyleId: 13
  },
  {
    username: "ghaziandesigner",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/156389130/original/0560ab4cfe2534c7ccc43a6e422fa2e49d853bef.png",
    designTypeId: 4,
    designStyleId: 13
  },
  {
    username: "m_arslan_ch",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/172418275/original/a88923253a79fe146d48cab7d48ea0b24940aa53.jpg",
    designTypeId: 4,
    designStyleId: 13
  },
  {
    username: "vikvikdesigner",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/233827729/original/828836134cfe4edaa1b4d1581962a29bcc5c5d5a.jpg",
    designTypeId: 4,
    designStyleId: 13
  },
  {
    username: "iyuna667",
    priceStartFrom: 25,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/190750743/original/8754e8c8f201139a318221e090a644b4b639937f.png",
    designTypeId: 4,
    designStyleId: 13
  },
  {
    username: "koala_bg",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/236398225/original/d9693cd99109b77e566e5e86b3603b3827b91855.jpg",
    designTypeId: 4,
    designStyleId: 13
  },
  {
    username: "lewis_dales",
    priceStartFrom: 25,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/255520608/original/42a5b8950e93b3e612b3489d75d7f00dff026504.jpg",
    designTypeId: 4,
    designStyleId: 13
  },
  {
    username: "oldmobo",
    priceStartFrom: 15,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/234994855/original/9f67c491960bcf9b9516778d742c2d7963cc8ca5.jpg",
    designTypeId: 4,
    designStyleId: 13
  },
  {
    username: "dopers_project",
    priceStartFrom: 15,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/263044158/original/d1f69a61f5da85f6a58671ef1981c18e59a78536.jpg",
    designTypeId: 4,
    designStyleId: 13
  },
  {
    username: "visualvolder",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/264308537/original/31ebf54354ff94b7af44585871fe8acc89b5ef15.jpg",
    designTypeId: 4,
    designStyleId: 13
  },
  {
    username: "gauranshgupta",
    priceStartFrom: 5,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/218881727/original/033fa98a7e16f710d00deaccf3ce4813c98b948d.jpg",
    designTypeId: 4,
    designStyleId: 13
  },
  {
    username: "samanjamil05",
    priceStartFrom: 15,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/280832581/original/293c97968a9261aa92b58071b276fe23e6a1eac8.png",
    designTypeId: 4,
    designStyleId: 13
  },
  {
    username: "thehiidea",
    priceStartFrom: 15,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/256874764/original/70dd84fe8d5c93e311339592ab101864014260c4.png",
    designTypeId: 4,
    designStyleId: 13
  },
  {
    username: "greenhulk3",
    priceStartFrom: 5,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/251126693/original/00d837be6f8766cdf2b4a19534a8d1fc70e70f1f.jpg",
    designTypeId: 4,
    designStyleId: 13
  },
  {
    username: "hamzarix",
    priceStartFrom: 25,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/230760933/original/3dea346b88fe0224557352a47b1f4e03581d1d5a.jpg",
    designTypeId: 4,
    designStyleId: 13
  },
  {
    username: "mbart338",
    priceStartFrom: 15,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/125716376/original/affd921308a4d8b71157e64f26f9076302604c25.png",
    designTypeId: 4,
    designStyleId: 13
  },
  {
    username: "sanjidatara",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/236656079/original/76d8217cd66e93ac8ddebaa286a1ec57b09fdbe5.jpg",
    designTypeId: 4,
    designStyleId: 13
  },
  {
    username: "roniangga",
    priceStartFrom: 20,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/188335162/original/8e4cac6c92bd635936ced4232b0f5eacbd24a7de.jpg",
    designTypeId: 4,
    designStyleId: 13
  },
  {
    username: "renzacamila",
    priceStartFrom: 20,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/257780965/original/7e23e5820a8e4d38bfd9663ac8d2f691e9fe0b74.jpg",
    designTypeId: 4,
    designStyleId: 13
  },
  {
    username: "mariasensei",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/308835002/original/a33db30453eeca4ad72b21bbff9d72f2a980c5e2.png",
    designTypeId: 4,
    designStyleId: 13
  },
  {
    username: "fidafis",
    priceStartFrom: 20,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/67477136/original/8d8801e96843d0d6db0a633150506fa0d504ef9c.jpg",
    designTypeId: 4,
    designStyleId: 13
  },
  {
    username: "thequalitymaker",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/289886837/original/d7a39944e544ca806de390294e6a334d2f85fe9a.jpg",
    designTypeId: 4,
    designStyleId: 13
  },
  {
    username: "lorenzocolmaer",
    priceStartFrom: 15,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/259426576/original/2c7e153762419ef2fd51dcbe30d1c370e0a510ad.jpg",
    designTypeId: 4,
    designStyleId: 13
  },
  {
    username: "tuaha_design",
    priceStartFrom: 5,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/288723988/original/712aa8cab640941ac7d0baaffae77bceff5aa611.png",
    designTypeId: 4,
    designStyleId: 13
  },
  {
    username: "saepudinasep",
    priceStartFrom: 15,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/151638590/original/0d16509e42a5c5637294c3d3b9ab8f537e7b2e6a.jpg",
    designTypeId: 4,
    designStyleId: 13
  },
  {
    username: "aroojcreation",
    priceStartFrom: 15,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/256322496/original/069fe14fba1416b4c972f30bad795ba530a31515.jpg",
    designTypeId: 4,
    designStyleId: 13
  },
  {
    username: "deand55d",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs2/283830493/original/661e9a483471cc932172fc694b239c89b800e2cd.png",
    designTypeId: 4,
    designStyleId: 13
  },
  {
    username: "eremteka",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/140180670/original/f778db864b7292f8387ff0b241499366e2939ab4.jpg",
    designTypeId: 4,
    designStyleId: 13
  },
  {
    username: "tanzeel13",
    priceStartFrom: 5,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/292269645/original/cfdf1d101202fdd127892e7c32f1d05c7436c0bf.jpg",
    designTypeId: 4,
    designStyleId: 13
  },
  {
    username: "elakirikollek",
    priceStartFrom: 5,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/102059081/original/0e01a61bdcb4a2c6115c2fc6579481ed4782f0e4.jpg",
    designTypeId: 4,
    designStyleId: 13
  },
  {
    username: "septak",
    priceStartFrom: 15,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/103098519/original/a070bdf8f15da3cb58e141e9f9a4284f2c50c36a.jpg",
    designTypeId: 4,
    designStyleId: 13
  },
  {
    username: "klnmaduranga96",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/107811849/original/de309fcad13ae23bfee68e2559dc2732a66f5cf8.jpg",
    designTypeId: 4,
    designStyleId: 13
  },
  {
    username: "shailaja_nandan",
    priceStartFrom: 5,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/99493852/original/05e863ad03415756e967ed4b331118f1f40450c3.jpg",
    designTypeId: 4,
    designStyleId: 13
  },
  {
    username: "logo_designer16",
    priceStartFrom: 20,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/26575127/original/67dd7b993f3a500c468fb11efe9ad9ff1bc70be5.jpg",
    designTypeId: 4,
    designStyleId: 13
  },
  {
    username: "design_eng77",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/video/upload/t_gig_cards_web/qjrmorz5430gjfadndk8.png",
    designTypeId: 4,
    designStyleId: 13
  },
  {
    username: "irbabass",
    priceStartFrom: 15,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/264799076/original/180a7fc2ed3cde86c7a64ff680e0b912725147b5.jpeg",
    designTypeId: 4,
    designStyleId: 13
  },
  {
    username: "abdulloh3349",
    priceStartFrom: 5,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/207918654/original/a2932c5a9d5df83eaeb782bc8fd4dc56a9e7ed67.jpg",
    designTypeId: 4,
    designStyleId: 13
  },
  {
    username: "jasminetanaka",
    priceStartFrom: 5,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/197543722/original/8d28a6098ab58f6bb99e94393ccbd9e8060178d8.png",
    designTypeId: 4,
    designStyleId: 13
  },
  {
    username: "iyliagalleria",
    priceStartFrom: 5,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/250600163/original/fb4944a184c7faceaee176aad1c35a4fdbbe2536.jpg",
    designTypeId: 4,
    designStyleId: 13
  },
  {
    username: "ikhsanabrori",
    priceStartFrom: 20,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/163818616/original/2836f7018c4d126ef30d3cea0b9d9dc8687fb4b4.png",
    designTypeId: 4,
    designStyleId: 13
  },
  {
    username: "ripon117",
    priceStartFrom: 5,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/230609028/original/2360413084a9f24e2fd7be65429c6dd1adb55142.jpg",
    designTypeId: 4,
    designStyleId: 13
  },
  {
    username: "fidafis",
    priceStartFrom: 15,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/67475636/original/8b1447588cc3391a660f5f1b4554f02a15dbc335.jpg",
    designTypeId: 4,
    designStyleId: 13
  },
  {
    username: "tabasumdesigner",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/265361596/original/c015cf1fa812c7324bdcd644127fca8527323b3d.jpg",
    designTypeId: 4,
    designStyleId: 13
  },
  {
    username: "yassine45",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/1987753/original/c1ad9424dae7c7315a2a0a22f169e52667a4e221.jpg",
    designTypeId: 4,
    designStyleId: 13
  },
  {
    username: "hamu83",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/276229759/original/b62c518f0e13d5f2c3aad5ca56c8f797d3d7a776.jpg",
    designTypeId: 4,
    designStyleId: 13
  },
  {
    username: "artsstudio789",
    priceStartFrom: 5,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/289709096/original/5731d0de1183f8997520787aa1732bf08465a7e4.jpg",
    designTypeId: 4,
    designStyleId: 13
  },
  {
    username: "glass_merch",
    priceStartFrom: 15,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/236344049/original/d2f30d03ad17486d70d68687211d993bd2f0d3d1.png",
    designTypeId: 4,
    designStyleId: 13
  },
  {
    username: "sahan22___",
    priceStartFrom: 5,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/289438464/original/b5324cde816a9df4d4b686b75aa687a6bd1d0f69.png",
    designTypeId: 4,
    designStyleId: 13
  },
  {
    username: "meryah",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/216346748/original/7091ea59c02c934790c92a35349c0c1d02bdc7bc.jpg",
    designTypeId: 4,
    designStyleId: 13
  },
  {
    username: "shahid370",
    priceStartFrom: 5,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/279689681/original/047522f2e5bcbe33649d96817df4d1e1941e16e5.jpg",
    designTypeId: 4,
    designStyleId: 13
  },
  {
    username: "ridabargoute",
    priceStartFrom: 30,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/132986739/original/df53fdf8bc545861eac62cd78ef87d32164a1877.jpg",
    designTypeId: 4,
    designStyleId: 14
  },
  {
    username: "minesoul",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/116124572/original/3ec880674faecbf7fdf60b643fca4216a68fed81.png",
    designTypeId: 4,
    designStyleId: 14
  },
  {
    username: "graphicfixers",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/138850959/original/f46ea76f1d87fbd006146f9eb2f8aeec319492ab.png",
    designTypeId: 4,
    designStyleId: 14
  },
  {
    username: "grafixclub",
    priceStartFrom: 15,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/234289712/original/a9c300a360b49d1e43d836aa21647f571371cf36.jpg",
    designTypeId: 4,
    designStyleId: 14
  },
  {
    username: "bohemiaa",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/201229562/original/ffbd851aff5e7485c8066105bf78ad18fcd300fc.jpg",
    designTypeId: 4,
    designStyleId: 14
  },
  {
    username: "kingkrd",
    priceStartFrom: 25,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/183319865/original/b0065f721fd473a204995c2151969eec8180c46e.png",
    designTypeId: 4,
    designStyleId: 14
  },
  {
    username: "theapollodesign",
    priceStartFrom: 40,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/262729367/original/c9d9f1a7623b4f86fc6604a049ee302729f42f41.jpg",
    designTypeId: 4,
    designStyleId: 14
  },
  {
    username: "colorqo",
    priceStartFrom: 25,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/108868460/original/1c4ee9a20b4e37d43aef4fefcb38c4d63953cbde.png",
    designTypeId: 4,
    designStyleId: 14
  },
  {
    username: "apexdsigner",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/221990623/original/8e2cc000184c4efefdaadb9faa4a4e0c44edc0ed.png",
    designTypeId: 4,
    designStyleId: 14
  },
  {
    username: "king_suleman",
    priceStartFrom: 20,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/236841492/original/83f1eee0871e02926221b4ebe0c74693a9c8e448.png",
    designTypeId: 4,
    designStyleId: 14
  },
  {
    username: "usama_jadun",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/video/upload/t_gig_cards_web/ldjhrtfxzdqw9c02j2rq.png",
    designTypeId: 4,
    designStyleId: 14
  },
  {
    username: "asmahanif991",
    priceStartFrom: 15,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/135161556/original/ab2e201958be2622db6e9e8e9341eb96ae7e10cb.jpg",
    designTypeId: 4,
    designStyleId: 14
  },
  {
    username: "bohemiaa",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/129071364/original/747a2c15546c9d6cc4509bde802da58b42d97b91.jpg",
    designTypeId: 4,
    designStyleId: 14
  },
  {
    username: "grafixclub",
    priceStartFrom: 15,
    imageUrl: "https://fiverr-res.cloudinary.com/video/upload/so_2.128178,t_gig_cards_web/qo2si2op0idpokspniuh.png",
    designTypeId: 4,
    designStyleId: 14
  },
  {
    username: "ahsandesigner2k",
    priceStartFrom: 5,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/281711676/original/398c7ffaf322c2acb3ae7174905f785207f81176.jpg",
    designTypeId: 4,
    designStyleId: 14
  },
  {
    username: "audiprasetya",
    priceStartFrom: 20,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/158009278/original/e13009afc29ef3609c834e77517be3b8d987882f.png",
    designTypeId: 4,
    designStyleId: 14
  },
  {
    username: "darkgraphx",
    priceStartFrom: 5,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/222572964/original/771952881b2f678ef6daaab07a87b034d411827d.jpg",
    designTypeId: 4,
    designStyleId: 14
  },
  {
    username: "king_suleman",
    priceStartFrom: 5,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/228926085/original/fbd0fe3b2450697285a1d9f04666003ea21793d3.png",
    designTypeId: 4,
    designStyleId: 14
  },
  {
    username: "nftlakmal323",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/250778228/original/dfebbba61599d824f684f961d0dfe1fbbf5bf26d.jpg",
    designTypeId: 4,
    designStyleId: 14
  },
  {
    username: "ninjadesignr",
    priceStartFrom: 15,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/229754354/original/d855a3eab7d75cbb85c9f0342ebdccf08ef76696.jpg",
    designTypeId: 4,
    designStyleId: 14
  },
  {
    username: "designavmad",
    priceStartFrom: 50,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/219348686/original/7c12503933118478e2cdc8ba01c03b64ca36f8b1.png",
    designTypeId: 4,
    designStyleId: 14
  },
  {
    username: "chaplin22",
    priceStartFrom: 40,
    imageUrl: "https://fiverr-res.cloudinary.com/video/upload/t_gig_cards_web/a8kglexb3xh3rwdsodsk.png",
    designTypeId: 4,
    designStyleId: 14
  },
  {
    username: "daniele_franchi",
    priceStartFrom: 150,
    imageUrl: "https://fiverr-res.cloudinary.com/video/upload/t_gig_cards_web/y0ymts7gfedsn9ywgbz8.png",
    designTypeId: 4,
    designStyleId: 14
  },
  {
    username: "omaimakhan",
    priceStartFrom: 20,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/124316426/original/838fc7cc9e9c73f3de89e1a48fcc407a768cacc1.jpg",
    designTypeId: 4,
    designStyleId: 14
  },
  {
    username: "hishamhkarim",
    priceStartFrom: 30,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/27787317/original/8008b5405c13894f6fcb1935d5823aa970b0f9a2.jpg",
    designTypeId: 4,
    designStyleId: 14
  },
  {
    username: "usama_jadun",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/241506753/original/f196594f711f72663bd3b83caefb834accdc5f03.jpg",
    designTypeId: 4,
    designStyleId: 14
  },
  {
    username: "nnisaa44",
    priceStartFrom: 35,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/244641508/original/8176aec7d99d26af951eca621917408bde59b6b7.png",
    designTypeId: 4,
    designStyleId: 14
  },
  {
    username: "hc_graphic",
    priceStartFrom: 5,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/313506272/original/080a11884d67ed4981dc5247173e84f53f558787.png",
    designTypeId: 4,
    designStyleId: 14
  },
  {
    username: "johnathan_miid",
    priceStartFrom: 75,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/213713744/original/179ba07e3e5d6c6fa7c25d411c6f7a5fbe41f560.jpg",
    designTypeId: 4,
    designStyleId: 14
  },
  {
    username: "ahmadbahawalpur",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/171393540/original/1b2ea33c88166eb8298483ad3cad26ddd972ee98.png",
    designTypeId: 4,
    designStyleId: 14
  },
  {
    username: "writingvirtual",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/166780897/original/95e7000c710a9cc36a66bd797010d81b22bc115a.png",
    designTypeId: 4,
    designStyleId: 14
  },
  {
    username: "becartoon",
    priceStartFrom: 25,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/211649427/original/54a507ef120d44edfb95058e0d1a6cff939dec51.jpg",
    designTypeId: 4,
    designStyleId: 14
  },
  {
    username: "hamid_zefrar",
    priceStartFrom: 80,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/111604035/original/d5716d372ba5c6f7014bea792fbd27dffbded00b.png",
    designTypeId: 4,
    designStyleId: 14
  },
  {
    username: "ardyanawa",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/282483134/original/9756c2e4590c9b9019fc565310f48f0f5b71367e.png",
    designTypeId: 4,
    designStyleId: 14
  },
  {
    username: "mehr_type",
    priceStartFrom: 200,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/133391189/original/4314370244f8e14dd44c209e3537cd4e3e88d290.png",
    designTypeId: 4,
    designStyleId: 14
  },
  {
    username: "ankitphuyal",
    priceStartFrom: 30,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/213865477/original/9528e926ea01500dc5ab56d9a0a694314a106bf7.jpg",
    designTypeId: 4,
    designStyleId: 14
  },
  {
    username: "bohemiaa",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/125999054/original/a43bf1e4c3fe6f3d587ba9f22225d00a21e06644.jpg",
    designTypeId: 4,
    designStyleId: 14
  },
  {
    username: "miastegner",
    priceStartFrom: 35,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/254539759/original/79cc86c7cf4bdf346d639b42ad85f35713e24631.png",
    designTypeId: 4,
    designStyleId: 14
  },
  {
    username: "michael_mb",
    priceStartFrom: 260,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/114183182/original/c194ea91a693f3644ef67982fc647bbd19e0fe9e.jpg",
    designTypeId: 4,
    designStyleId: 14
  },
  {
    username: "audiprasetya",
    priceStartFrom: 20,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/156660970/original/16f91535a35d8fd7ac286b16e95320961a5c0abb.png",
    designTypeId: 4,
    designStyleId: 14
  },
  {
    username: "nasikamim",
    priceStartFrom: 5,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/257669768/original/33a65c8f8fbcf2b20534a53b1c8d037365434a54.png",
    designTypeId: 4,
    designStyleId: 14
  },
  {
    username: "apexdsigner",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/229752117/original/af0aff8bc109e7609a4c43115dc5350a946586bf.jpg",
    designTypeId: 4,
    designStyleId: 14
  },
  {
    username: "volandsbride",
    priceStartFrom: 100,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/105575953/original/ca410cdfb553b0d004ba4153a31b2ea93e7b695e.jpg",
    designTypeId: 4,
    designStyleId: 14
  },
  {
    username: "apexdsigner",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/224693314/original/beb44e33c2a9f92f148651d323e696afc47c6a42.png",
    designTypeId: 4,
    designStyleId: 14
  },
  {
    username: "duta915",
    priceStartFrom: 15,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/131924959/original/d844693d141f5eb447bde7fd088cd65b744a195c.jpg",
    designTypeId: 4,
    designStyleId: 14
  },
  {
    username: "prabhadaham",
    priceStartFrom: 5,
    imageUrl: "https://fiverr-res.cloudinary.com/video/upload/t_gig_cards_web/gnhsezupxbgp3s0kytkc.png",
    designTypeId: 4,
    designStyleId: 14
  },
  {
    username: "mevrik1",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/video/upload/t_gig_cards_web/gngpjm2gn8lko9g7j5y5.png",
    designTypeId: 4,
    designStyleId: 14
  },
  {
    username: "wasif_azeem",
    priceStartFrom: 5,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/275321158/original/3a10a9b799ea5bce24da3c8d0c41efff5ecd4813.png",
    designTypeId: 4,
    designStyleId: 14
  },
  {
    username: "muhammaduzai914",
    priceStartFrom: 25,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/263197477/original/e2715adeb60c4436e1913513dc1d7c38f92d889f.jpg",
    designTypeId: 4,
    designStyleId: 14
  },
  {
    username: "ninjadesignr",
    priceStartFrom: 15,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/258267583/original/9ce7bb4f72cf7153133411633aa3c91eb8c8eb1c.png",
    designTypeId: 4,
    designStyleId: 14
  },
  {
    username: "rajibmatiur",
    priceStartFrom: 25,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/58452509/original/5ff7a78470f694cc99ff5ea6b97b99a345273643.png",
    designTypeId: 4,
    designStyleId: 14
  },
  {
    username: "ninjadesignr",
    priceStartFrom: 15,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/214707103/original/dd3f5d3ea83549a7d7eee5b54876fee47dd3d55e.jpg",
    designTypeId: 4,
    designStyleId: 14
  },
  {
    username: "jaydeearts",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/254541501/original/2105a31765c2437d533d36e5f952c1286b40a597.png",
    designTypeId: 4,
    designStyleId: 14
  },
  {
    username: "hadddid",
    priceStartFrom: 5,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/281750593/original/64fee1a82764233540748db19ab7e570185cfa1d.jpg",
    designTypeId: 4,
    designStyleId: 14
  },
  {
    username: "kazimjawad142",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/video/upload/so_14.460016,t_gig_cards_web/nmajsslfawqqkv943uby.png",
    designTypeId: 4,
    designStyleId: 14
  },
  {
    username: "nasikamim",
    priceStartFrom: 5,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/256862199/original/d1bd88f1b7cdcdbbbed146402c826b7df01e3a68.png",
    designTypeId: 4,
    designStyleId: 14
  },
  {
    username: "mrdesigner77",
    priceStartFrom: 5,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/279391439/original/272057fc7adcbbc7c3a460ab9df18be2ff0ecaaf.jpg",
    designTypeId: 4,
    designStyleId: 14
  },
  {
    username: "damanjana",
    priceStartFrom: 5,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/250684864/original/4781b8b94602e9c195d5f21521eb816ae8882f92.jpg",
    designTypeId: 4,
    designStyleId: 14
  },
  {
    username: "patrik_taylor",
    priceStartFrom: 100,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/185254723/original/b4bdbc148b13138a81fd00bd197ca6863f176474.jpg",
    designTypeId: 4,
    designStyleId: 14
  },
  {
    username: "badonali",
    priceStartFrom: 5,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/281036470/original/dc006fb0353d22ad709189c8cd26fb36c60e7ff7.jpg",
    designTypeId: 4,
    designStyleId: 14
  },
  {
    username: "mrfontt",
    priceStartFrom: 5,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/261684551/original/f3ff2b7e8fc179739d55c7a5a435d382717a5b6c.png",
    designTypeId: 4,
    designStyleId: 14
  },
  {
    username: "qavtaradzeqeti",
    priceStartFrom: 25,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/203880948/original/bba08beb81df9bf581b56c91e6fb5a2765389ff6.png",
    designTypeId: 4,
    designStyleId: 14
  },
  {
    username: "faizajabeen4",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/163263272/original/1c1c413e7feb44f443febf2affdc5f1759f02695.jpg",
    designTypeId: 4,
    designStyleId: 14
  },
  {
    username: "renaldielang",
    priceStartFrom: 5,
    imageUrl: "https://fiverr-res.cloudinary.com/video/upload/t_gig_cards_web/kxwog0bf0wdpsomrckn1.png",
    designTypeId: 4,
    designStyleId: 14
  },
  {
    username: "misel_ahmmed",
    priceStartFrom: 5,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/272998709/original/622c728733d710e5ed2fdebfcbe0cb06d023d1f0.jpg",
    designTypeId: 4,
    designStyleId: 14
  },
  {
    username: "remmyjoee",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/255832849/original/7a56a2752364763868227e2e276745f3653925ce.png",
    designTypeId: 4,
    designStyleId: 14
  },
  {
    username: "i_am_artistic",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/276991193/original/2a8ed1f22fd8ab3a75739e72fd58f1186f87be23.png",
    designTypeId: 4,
    designStyleId: 14
  },
  {
    username: "rainbombstudio",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/214250523/original/1709bd481cc959a9a6248e50ac58388c9919bd95.png",
    designTypeId: 4,
    designStyleId: 14
  },
  {
    username: "mehr_type",
    priceStartFrom: 40,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/172520864/original/0d11576f79990681d1a2e64aef7fe101ca21d72a.jpg",
    designTypeId: 4,
    designStyleId: 14
  },
  {
    username: "ninjadesignr",
    priceStartFrom: 15,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/214705078/original/078d6845e2a041b9ae56e6fe079bec54afb12403.png",
    designTypeId: 4,
    designStyleId: 14
  },
  {
    username: "graphics_media",
    priceStartFrom: 30,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/29335310/original/b535bf27090d123dc17004d79b845345a51e1065.png",
    designTypeId: 4,
    designStyleId: 14
  },
  {
    username: "king_suleman",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/video/upload/so_15.202194,t_gig_cards_web/pjw92ifsmtk4kt32abtr.png",
    designTypeId: 4,
    designStyleId: 14
  },
  {
    username: "rashedfinance",
    priceStartFrom: 200,
    imageUrl: "https://fiverr-res.cloudinary.com/video/upload/t_gig_cards_web/dk38hx5fspemhwhriyhx.png",
    designTypeId: 4,
    designStyleId: 14
  },
  {
    username: "yehoas",
    priceStartFrom: 80,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/139197221/original/18ef91bf5951b01b14c132aa6e2f5d2477637416.png",
    designTypeId: 4,
    designStyleId: 14
  },
  {
    username: "tbawxandco",
    priceStartFrom: 5,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/101109322/original/b7cd599395891a490414fc16369b6b8efcd84974.jpg",
    designTypeId: 4,
    designStyleId: 14
  },
  {
    username: "eduusunday",
    priceStartFrom: 30,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/291386167/original/7955149f3fa531e7aedf52548aba38875e3f1e08.jpg",
    designTypeId: 4,
    designStyleId: 14
  },
  {
    username: "chaichology",
    priceStartFrom: 20,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/209316033/original/cfb7b80e34ea6545a875c2add66f0b67fde24379.png",
    designTypeId: 4,
    designStyleId: 14
  },
  {
    username: "polarbear665",
    priceStartFrom: 60,
    imageUrl: "https://fiverr-res.cloudinary.com/video/upload/t_gig_cards_web/viz1m5qhgwsofympchut.png",
    designTypeId: 4,
    designStyleId: 14
  },
  {
    username: "artatei",
    priceStartFrom: 40,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/249954848/original/196c733bbc1cc74d23babcd77724dbdbbe3d8bff.jpg",
    designTypeId: 4,
    designStyleId: 14
  },
  {
    username: "holycommunion",
    priceStartFrom: 50,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/187733088/original/351a83377ada5476363b5b663733b1b6e038c404.png",
    designTypeId: 4,
    designStyleId: 14
  },
  {
    username: "epik_designs",
    priceStartFrom: 70,
    imageUrl: "https://fiverr-res.cloudinary.com/video/upload/t_gig_cards_web/t86kaevwjrba3s6heub6.png",
    designTypeId: 4,
    designStyleId: 14
  },
  {
    username: "sajid390",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/19160007/original/b6dbb63ec92b28aa2bb3cdd92b419ffeec60cf51.png",
    designTypeId: 4,
    designStyleId: 14
  },
  {
    username: "yaqeens",
    priceStartFrom: 15,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/197371974/original/637f3e6480d3ff0eed2462932cf36e4e5efc1d4e.png",
    designTypeId: 4,
    designStyleId: 14
  },
  {
    username: "muhammadkhanj",
    priceStartFrom: 5,
    imageUrl: "https://fiverr-res.cloudinary.com/video/upload/t_gig_cards_web/kbygoxrkbcl0ir1oqfap.png",
    designTypeId: 4,
    designStyleId: 14
  },
  {
    username: "bill_art_",
    priceStartFrom: 25,
    imageUrl: "https://fiverr-res.cloudinary.com/video/upload/t_gig_cards_web/th4fcgompoylfgfoh78e.png",
    designTypeId: 4,
    designStyleId: 14
  },
  {
    username: "audiobook853",
    priceStartFrom: 30,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/264470353/original/8f19d3136f802d1bd84b68d2729367afb37f93d7.png",
    designTypeId: 4,
    designStyleId: 14
  },
  {
    username: "saba_anwar",
    priceStartFrom: 25,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/267189083/original/7fa896de0716ca82ed046b40599f3a41e38f6dca.png",
    designTypeId: 4,
    designStyleId: 14
  },
  {
    username: "usdesign143",
    priceStartFrom: 20,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/212718178/original/d45a50621378dbcc0609d99275f405d3de3108bd.jpg",
    designTypeId: 4,
    designStyleId: 14
  },
  {
    username: "farhan4u45",
    priceStartFrom: 5,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/258284892/original/9fa84d8e7cc3e39fa34327b2af57c6eb847eb4ea.jpg",
    designTypeId: 4,
    designStyleId: 14
  },
  {
    username: "muhammadlati816",
    priceStartFrom: 5,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/272765635/original/58475bfa619a75b46902cac3a800d673913925ff.png",
    designTypeId: 4,
    designStyleId: 14
  },
  {
    username: "yuanasta",
    priceStartFrom: 15,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/259980839/original/0a399ba76eb5da4c6d810fed0c9ea74f00ce16e7.jpg",
    designTypeId: 4,
    designStyleId: 14
  },
  {
    username: "smaykoo",
    priceStartFrom: 20,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/259263169/original/0457cfec6065299ee881b2c50fe97447b16cfc52.png",
    designTypeId: 4,
    designStyleId: 14
  },
  {
    username: "nasikamim",
    priceStartFrom: 5,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/257129204/original/312d7ee60f32cf7152543a3deaa9a9cb10388db6.png",
    designTypeId: 4,
    designStyleId: 14
  },
  {
    username: "joshuatsukayama",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/248202641/original/db84957e1f413b2dbe431e140a2995a5f1d6f285.jpg",
    designTypeId: 4,
    designStyleId: 14
  },
  {
    username: "sheryarkhurshid",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/178343056/original/ae8223cfc9f37cdcbad8eda912e5a25c5ca74c13.jpg",
    designTypeId: 4,
    designStyleId: 14
  },
  {
    username: "ammah_ucha",
    priceStartFrom: 20,
    imageUrl: "https://fiverr-res.cloudinary.com/video/upload/t_gig_cards_web/rgewoq0bi9njlasucx4z.png",
    designTypeId: 4,
    designStyleId: 14
  },
  {
    username: "agamous",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/video/upload/so_0.463417165904886,t_gig_cards_web/xbu5dokejycd3eeznzbm.png",
    designTypeId: 4,
    designStyleId: 14
  },
  {
    username: "mrcbttgl",
    priceStartFrom: 2990,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/288975000/original/8137c40e4787bbf894487132f3dae40a6ce86de5.jpg",
    designTypeId: 4,
    designStyleId: 14
  },
  {
    username: "hishamhkarim",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/121187749/original/ccc8ef6aed357a51e039fbff06d27413c6755d17.jpg",
    designTypeId: 4,
    designStyleId: 14
  },
  {
    username: "dineshsuper",
    priceStartFrom: 5,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/283285793/original/62a358948b2c0eb4e74c7ae115b5a25e21318763.jpg",
    designTypeId: 4,
    designStyleId: 14
  },
  {
    username: "abdjan12",
    priceStartFrom: 5,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/250180688/original/5295a3c095f1c10c4da9798eaf455f92961e5556.jpg",
    designTypeId: 4,
    designStyleId: 14
  },
  {
    username: "mhmstudios",
    priceStartFrom: 5,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/274724112/original/b89c0a89220bc9abd13f229c04b95540020db2d0.png",
    designTypeId: 4,
    designStyleId: 14
  },
  {
    username: "iiixl3",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/267865015/original/a2d902d6b3002b268a3f7295811704b1ec6d2233.png",
    designTypeId: 4,
    designStyleId: 14
  },
  {
    username: "graphicfixers",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/225425149/original/6c043e91720d4fdccb06bcd7be87fffb81e83258.png",
    designTypeId: 4,
    designStyleId: 14
  },
  {
    username: "wasif_azeem",
    priceStartFrom: 5,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/292869863/original/983f81546ca688b46edbb538db071c0010c487cf.png",
    designTypeId: 4,
    designStyleId: 14
  },
  {
    username: "manihakanwal",
    priceStartFrom: 5,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/270973727/original/23f3e5e272188f5f85b11a8cb97ffb8ebdf4408e.png",
    designTypeId: 4,
    designStyleId: 14
  },
  {
    username: "lhou11",
    priceStartFrom: 5,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/162116009/original/267d2025accbf9da066ef4354c478dda95434db6.png",
    designTypeId: 4,
    designStyleId: 14
  },
  {
    username: "mailksaleem",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/219769348/original/cc5d9e4911ae92fba8dd22d2056951f45f2e2260.jpg",
    designTypeId: 4,
    designStyleId: 14
  },
  {
    username: "moduz4",
    priceStartFrom: 5,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/266195800/original/d4ee86f2939c14349fb873e170c81778f1f6017f.png",
    designTypeId: 4,
    designStyleId: 14
  },
  {
    username: "kayejill",
    priceStartFrom: 5,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/294050362/original/6528f3808045696bbb3fe21daff6b46d190463de.jpg",
    designTypeId: 4,
    designStyleId: 14
  },
  {
    username: "m_faroque_bhati",
    priceStartFrom: 5,
    imageUrl: "https://fiverr-res.cloudinary.com/video/upload/so_2.18049,t_gig_cards_web/dda4a6elojym9lrnlx3f.png",
    designTypeId: 4,
    designStyleId: 14
  },
  {
    username: "ahamedirfanirf",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/264098487/original/1ceb9a9015e71c8ea160a5e549095734568d11c9.png",
    designTypeId: 4,
    designStyleId: 14
  },
  {
    username: "creative_anii",
    priceStartFrom: 5,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/285331106/original/898f6e8a911e36095d741cbd3fcf136e3ea5160b.jpg",
    designTypeId: 4,
    designStyleId: 14
  },
  {
    username: "djdezign",
    priceStartFrom: 5,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/17694004/original/e0b2f63bd0054868c976615adcf31d12d99c47b9.jpg",
    designTypeId: 4,
    designStyleId: 14
  },
  {
    username: "desertking007",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/video/upload/t_gig_cards_web/of4cdfnna7ifsvz3yjtt.png",
    designTypeId: 4,
    designStyleId: 14
  },
  {
    username: "zawyed",
    priceStartFrom: 50,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/165267182/original/82a9a98f984e5c95e24b2df61b59532ffabac2fe.jpg",
    designTypeId: 4,
    designStyleId: 14
  },
  {
    username: "josiedanila",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/183588988/original/46b8b044f99607e6a0f32755c452d330129f536f.jpg",
    designTypeId: 4,
    designStyleId: 14
  },
  {
    username: "romcris",
    priceStartFrom: 5,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/17660504/original/5b3b72ada963314e643a72394ad478738d357a8b.jpg",
    designTypeId: 4,
    designStyleId: 14
  },
  {
    username: "contraponta",
    priceStartFrom: 650,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/313904335/original/fcd69e070ba3ac6b9b9fb3e88fa20190cf2724d2.jpg",
    designTypeId: 4,
    designStyleId: 14
  },
  {
    username: "arisfrow",
    priceStartFrom: 5,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/168927466/original/1a833a68ed3de08d8ea106319084462a5af49f95.jpg",
    designTypeId: 4,
    designStyleId: 14
  },
  {
    username: "neat_soft",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/131709012/original/9e22d546b623ba47947fd7b6e6f01a0b752cbb4f.png",
    designTypeId: 4,
    designStyleId: 14
  },
  {
    username: "ismaabaas",
    priceStartFrom: 5,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/256030631/original/a173c456281bc3f710b36c0cef7d0f702437932b.png",
    designTypeId: 4,
    designStyleId: 14
  },
  {
    username: "areebaruba",
    priceStartFrom: 5,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/259069013/original/1220bb1a30ec6e60ac469f2a8dd841845f50c09b.png",
    designTypeId: 4,
    designStyleId: 14
  },
  {
    username: "apexdsigner",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/258267567/original/303f6318ee4e200e273a0bcd4e4ea15f04b87617.png",
    designTypeId: 4,
    designStyleId: 14
  },
  {
    username: "aftabs_design",
    priceStartFrom: 5,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/256421653/original/6765004c07c6486ff97a18bf8905da42dcf9bc30.png",
    designTypeId: 4,
    designStyleId: 14
  },
  {
    username: "a1perfectstudio",
    priceStartFrom: 5,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/179661823/original/b4fb42aad75fec426be5c6636c4567ce3a48e867.jpg",
    designTypeId: 4,
    designStyleId: 14
  },
  {
    username: "grafixclub",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/242699406/original/fa4ea9389f06a886f1263acd849941567bac218f.jpg",
    designTypeId: 4,
    designStyleId: 14
  },
  {
    username: "potage",
    priceStartFrom: 5,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/294497707/original/306ac64aa0d0ba235e28eac1a426f59845991e92.png",
    designTypeId: 4,
    designStyleId: 14
  },
  {
    username: "ahsandesigner2k",
    priceStartFrom: 5,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/276416157/original/65f00cd3939f281c4e21c15f33fa646cb006d589.jpg",
    designTypeId: 4,
    designStyleId: 14
  },
  {
    username: "writeplace",
    priceStartFrom: 35,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/2900204/original/a95fca79d6136ffca06b6c1494dab2e847587287.jpg",
    designTypeId: 4,
    designStyleId: 15
  },
  {
    username: "mkh343",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/196485597/original/165a9cd371f891fa3b90db4f1161b861c420f148.jpg",
    designTypeId: 4,
    designStyleId: 15
  },
  {
    username: "fajrihaj",
    priceStartFrom: 5,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/178039744/original/555f5fb833a42f6bdb42daec9a975b85f2450942.png",
    designTypeId: 4,
    designStyleId: 15
  },
  {
    username: "onbeecom",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/213808051/original/52c86e18463dd2185bd5679d989ffdb2f49e762d.png",
    designTypeId: 4,
    designStyleId: 15
  },
  {
    username: "jaceypeake",
    priceStartFrom: 40,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/169312634/original/bd84053b953d7873e2566b6708ab1a0faf26bd72.png",
    designTypeId: 4,
    designStyleId: 15
  },
  {
    username: "senkawa",
    priceStartFrom: 40,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/217108124/original/83ce0e3bdfed93ad7a65c27456795e859858f14b.png",
    designTypeId: 4,
    designStyleId: 15
  },
  {
    username: "best_creatures",
    priceStartFrom: 30,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/100955264/original/0500c21e89e1349e2cea19cdcb7f64c9dede9ba3.jpg",
    designTypeId: 4,
    designStyleId: 15
  },
  {
    username: "mahsaz",
    priceStartFrom: 20,
    imageUrl: "https://fiverr-res.cloudinary.com/video/upload/t_gig_cards_web/wpovl96fdxbswmkan9n2.png",
    designTypeId: 4,
    designStyleId: 15
  },
  {
    username: "miraclenolasco",
    priceStartFrom: 15,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/131477774/original/88de63f9565eb3205a5582d2619d94df10b8f98a.jpg",
    designTypeId: 4,
    designStyleId: 15
  },
  {
    username: "koyukoyu",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/video/upload/t_gig_cards_web/ixaeiltfzptr0usk4ynt.png",
    designTypeId: 4,
    designStyleId: 15
  },
  {
    username: "logo_design_at",
    priceStartFrom: 25,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/184036135/original/46fb0bfc01b86393ba6bfeea99babdfd04f2df0e.jpg",
    designTypeId: 4,
    designStyleId: 15
  },
  {
    username: "aizaej18",
    priceStartFrom: 5,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/210550646/original/2134f6541e48c98726068d57fbe1138b6e5abd24.jpg",
    designTypeId: 4,
    designStyleId: 15
  },
  {
    username: "noori345",
    priceStartFrom: 5,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/239006926/original/868464e5799a5f1b0b81e135ffa1960e97c6aaf9.png",
    designTypeId: 4,
    designStyleId: 15
  },
  {
    username: "ikken_creative",
    priceStartFrom: 35,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/196896708/original/d38000c4fd8351402fdfe99b313dd44c72fc6af0.jpeg",
    designTypeId: 4,
    designStyleId: 15
  },
  {
    username: "younes_boularas",
    priceStartFrom: 60,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/123790423/original/118588c04aa375ec1798e715befea81d48ce7f52.jpg",
    designTypeId: 4,
    designStyleId: 15
  },
  {
    username: "arsanytalaat",
    priceStartFrom: 50,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/98667517/original/a4ac8ee24b86afeb8dfba9064c0c4cdc150ce5d6.jpg",
    designTypeId: 4,
    designStyleId: 15
  },
  {
    username: "benwahid",
    priceStartFrom: 50,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/101066621/original/dae636844fcbc7533ff7b0e7845e062f5cc2118b.jpg",
    designTypeId: 4,
    designStyleId: 15
  },
  {
    username: "miminoshka",
    priceStartFrom: 60,
    imageUrl: "https://fiverr-res.cloudinary.com/video/upload/t_gig_cards_web/vyyivkwnqgvmxzspfiio.png",
    designTypeId: 4,
    designStyleId: 15
  },
  {
    username: "mediagallery",
    priceStartFrom: 15,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/209124209/original/43d064cbec50470b208ca59fd69b53cea6b312bc.jpg",
    designTypeId: 4,
    designStyleId: 15
  },
  {
    username: "samigharbi",
    priceStartFrom: 25,
    imageUrl: "https://fiverr-res.cloudinary.com/video/upload/t_gig_cards_web/kgp5z5mlda8bcipitqd7.png",
    designTypeId: 4,
    designStyleId: 15
  },
  {
    username: "miminoshka",
    priceStartFrom: 60,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/143336338/original/48f24ad3a2bd49c7e76b065a6df4c891f483c65e.jpg",
    designTypeId: 4,
    designStyleId: 15
  },
  {
    username: "aroobahaq",
    priceStartFrom: 5,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/217988573/original/24f7fc3c231d9684c8d574fed9ccde6cf4270aa1.jpg",
    designTypeId: 4,
    designStyleId: 15
  },
  {
    username: "ahmadyahya_art",
    priceStartFrom: 15,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/158594696/original/e9a6b37148d6212ffd88629db73fc23fb4455ab0.jpg",
    designTypeId: 4,
    designStyleId: 15
  },
  {
    username: "jaceypeake",
    priceStartFrom: 5,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/176545379/original/1b0902db2874fa7da5387f4bc5ff9c067d4cf3e6.png",
    designTypeId: 4,
    designStyleId: 15
  },
  {
    username: "fathi_isha",
    priceStartFrom: 5,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/241278986/original/119f7d63e80f2b20adc34fa968570f2e4b0f09e9.jpg",
    designTypeId: 4,
    designStyleId: 15
  },
  {
    username: "noorqureshi123",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/209753249/original/daaed3af6276d786c575f37798e003927df416ba.jpg",
    designTypeId: 4,
    designStyleId: 15
  },
  {
    username: "ghazalerahmani",
    priceStartFrom: 30,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/218287834/original/b90f97cbd8dd6848c67f932696ffd6147c0d3107.jpg",
    designTypeId: 4,
    designStyleId: 15
  },
  {
    username: "curry72501",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/video/upload/t_gig_cards_web/aqurkhjracpf2mjemklk.png",
    designTypeId: 4,
    designStyleId: 15
  },
  {
    username: "samigharbi",
    priceStartFrom: 30,
    imageUrl: "https://fiverr-res.cloudinary.com/video/upload/t_gig_cards_web/zdq18ccneltcuaiqyt1r.png",
    designTypeId: 4,
    designStyleId: 15
  },
  {
    username: "lonely_life",
    priceStartFrom: 25,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/21026067/original/644416bd514941248b6661bbca22b558b1502bef.jpg",
    designTypeId: 4,
    designStyleId: 15
  },
  {
    username: "setsetset",
    priceStartFrom: 5,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/268777554/original/b3cc7d9f399036f24fe35c926c37679b36f56915.png",
    designTypeId: 4,
    designStyleId: 15
  },
  {
    username: "setsetset",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/261760221/original/80a326d9e5cd2f97ba7c933028e72809d1a82e06.png",
    designTypeId: 4,
    designStyleId: 15
  },
  {
    username: "shodowave",
    priceStartFrom: 15,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/221451105/original/7da9ccfbc24a1f171c101038400ef5cdc16e3916.jpg",
    designTypeId: 4,
    designStyleId: 15
  },
  {
    username: "benwahid",
    priceStartFrom: 15,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/119542609/original/0cfb98a4940280b63ffc10b03f5c9d717bdbb486.jpg",
    designTypeId: 4,
    designStyleId: 15
  },
  {
    username: "masgozali",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/51567874/original/e7ee0840382abefcd6a181068ea1a5bc4cc38917.jpg",
    designTypeId: 4,
    designStyleId: 15
  },
  {
    username: "seven____",
    priceStartFrom: 5,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/236282925/original/05011cde03fa45f7308a2f16c920bc3833431e0c.jpg",
    designTypeId: 4,
    designStyleId: 15
  },
  {
    username: "yulingo",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/35451370/original/7bf4ec8f16295277d2cd99b31566d4bad31b6498.jpg",
    designTypeId: 4,
    designStyleId: 15
  },
  {
    username: "letter_studio",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/280549700/original/cc284c3fc947a7c7ac4f75f26e3c304e2e7bdc86.png",
    designTypeId: 4,
    designStyleId: 15
  },
  {
    username: "fajrihaj",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/224495430/original/e1f2b771ca971b0a8f2b6426a1d1cbbe5785f840.jpg",
    designTypeId: 4,
    designStyleId: 15
  },
  {
    username: "grafixel2021",
    priceStartFrom: 15,
    imageUrl: "https://fiverr-res.cloudinary.com/video/upload/so_23.790014,t_gig_cards_web/awno8mfhbip4btnin8mg.png",
    designTypeId: 4,
    designStyleId: 15
  },
  {
    username: "minakuo",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/274189721/original/80f2a6ebb1cfb46a51c800fa5ea4e67509ea3d52.png",
    designTypeId: 4,
    designStyleId: 15
  },
  {
    username: "theefficient5",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/245490153/original/9ff3cd02731e8bd098d9ed3cdd7f591b4bfcd492.png",
    designTypeId: 4,
    designStyleId: 15
  },
  {
    username: "totidrawing",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/190013362/original/a4d3957f710b70c8045f96da5f7b27d4527478b6.png",
    designTypeId: 4,
    designStyleId: 15
  },
  {
    username: "eduusunday",
    priceStartFrom: 20,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/176541302/original/c814dff092c9fb5c29f55c8df42eefbaeaed3171.jpg",
    designTypeId: 4,
    designStyleId: 15
  },
  {
    username: "os_design",
    priceStartFrom: 5,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs2/115296825/original/971885a94bcb0ec9066ffa6b6b6fe105dddd318f.jpg",
    designTypeId: 4,
    designStyleId: 15
  },
  {
    username: "talal_munir1",
    priceStartFrom: 5,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/263180831/original/3607c9040399d0b84fbcd84353fdc14187a9c44b.png",
    designTypeId: 4,
    designStyleId: 15
  },
  {
    username: "boon_24",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/270997060/original/8b0a42c5bf7a7cfe79d5f3f26cce90b5fd272d60.png",
    designTypeId: 4,
    designStyleId: 15
  },
  {
    username: "omararahman45",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/98217906/original/d6aa6a2a2b1bb744945b4f0dc6589dec19e07167.jpg",
    designTypeId: 4,
    designStyleId: 15
  },
  {
    username: "oussbilly",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/179360897/original/2c490fe5cfdb368ed5515823fb5e31ee5d6807c0.jpg",
    designTypeId: 4,
    designStyleId: 15
  },
  {
    username: "ahmedkandil",
    priceStartFrom: 5,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/32511205/original/b25ec11c9b025957d5e16da9b82a47bb95b0ff05.png",
    designTypeId: 4,
    designStyleId: 15
  },
  {
    username: "mehr_type",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/133390947/original/bca54de9c2f94d51750ba086538d944dc2648d57.jpg",
    designTypeId: 4,
    designStyleId: 15
  },
  {
    username: "youneshadjiali",
    priceStartFrom: 5,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/140452908/original/14c5067d1eb469d908754145c5b5f7605d1da65c.png",
    designTypeId: 4,
    designStyleId: 15
  },
  {
    username: "noman114",
    priceStartFrom: 20,
    imageUrl: "https://fiverr-res.cloudinary.com/video/upload/so_23.546942,t_gig_cards_web/e4i2ozwfsjwetag5xqok.png",
    designTypeId: 4,
    designStyleId: 15
  },
  {
    username: "customtattooart",
    priceStartFrom: 60,
    imageUrl: "https://fiverr-res.cloudinary.com/video/upload/so_51.595344,t_gig_cards_web/oqq9pfeo5midbklssfor.png",
    designTypeId: 4,
    designStyleId: 15
  },
  {
    username: "zerocomplexity",
    priceStartFrom: 15,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/254484919/original/90986ff3f41cf1d6da8ae7117714eac3ab368442.jpeg",
    designTypeId: 4,
    designStyleId: 15
  },
  {
    username: "jessicagu87",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/172214332/original/b6c7601e50c102a086a0194a5c22df0412b55729.jpg",
    designTypeId: 4,
    designStyleId: 15
  },
  {
    username: "faisalfans",
    priceStartFrom: 60,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/198658799/original/8a12edae543e21a94ef1cdeb50108b5b237245c2.jpg",
    designTypeId: 4,
    designStyleId: 15
  },
  {
    username: "jecazub",
    priceStartFrom: 80,
    imageUrl: "https://fiverr-res.cloudinary.com/video/upload/t_gig_cards_web/vvcvtje6ibeu6us8abkj.png",
    designTypeId: 4,
    designStyleId: 15
  },
  {
    username: "alikhalid23",
    priceStartFrom: 50,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/172995831/original/32a123902ad6fd8c8a17e0cb1f223b69200a73cc.jpg",
    designTypeId: 4,
    designStyleId: 15
  },
  {
    username: "howiex0127",
    priceStartFrom: 30,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/264481214/original/0bfae797604316acef2c1f41b64169e6fbeeaeb4.jpg",
    designTypeId: 4,
    designStyleId: 15
  },
  {
    username: "lingpitts",
    priceStartFrom: 20,
    imageUrl: "https://fiverr-res.cloudinary.com/video/upload/t_gig_cards_web/fdnw3xbmgesnapxqd4ao.png",
    designTypeId: 4,
    designStyleId: 15
  },
  {
    username: "shkahmad001",
    priceStartFrom: 20,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/158363715/original/692cb6050398bd1312f2cafae9fb0974ff2877fd.jpg",
    designTypeId: 4,
    designStyleId: 15
  },
  {
    username: "rawryousef",
    priceStartFrom: 15,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/23767032/original/a9d18b7a95f887c851d9a8d08c7a193739c5c15f.jpg",
    designTypeId: 4,
    designStyleId: 15
  },
  {
    username: "samigharbi",
    priceStartFrom: 30,
    imageUrl: "https://fiverr-res.cloudinary.com/video/upload/t_gig_cards_web/gn2muur4spf0gi5mrlxv.png",
    designTypeId: 4,
    designStyleId: 15
  },
  {
    username: "yummy2021",
    priceStartFrom: 20,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/235489338/original/3ac4de1ef543dd23605fee86665f0c16e7b5c90a.jpg",
    designTypeId: 4,
    designStyleId: 15
  },
  {
    username: "mariashtelle",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/74777006/original/e0952bf5e34dd81099c8d5fc20f826f1620561fc.jpg",
    designTypeId: 4,
    designStyleId: 15
  },
  {
    username: "multazambnyusuf",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/247902384/original/c756e5c7865496e5c3ba5d25aceef5e3de88b771.png",
    designTypeId: 4,
    designStyleId: 15
  },
  {
    username: "atarafi",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/50878229/original/4acbff5b8d250a6c0e40dfc66ae2387e705acaec.jpg",
    designTypeId: 4,
    designStyleId: 15
  },
  {
    username: "muhamed_eshahed",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/105650023/original/2e60bd1ff873baee9f743abbe3d5ace99df89c72.jpg",
    designTypeId: 4,
    designStyleId: 15
  },
  {
    username: "stellarboy0629",
    priceStartFrom: 5,
    imageUrl: "https://fiverr-res.cloudinary.com/video/upload/t_gig_cards_web/cdxo0vvnan8kipl3sfaw.png",
    designTypeId: 4,
    designStyleId: 15
  },
  {
    username: "desheng01010",
    priceStartFrom: 15,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/124145251/original/682e59b617196844c24a43b99a5e46bcd1ac7c0c.jpg",
    designTypeId: 4,
    designStyleId: 15
  },
  {
    username: "bashrah_",
    priceStartFrom: 15,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/136847976/original/a2cf28616462083ff931f960d159388e70108ebe.jpg",
    designTypeId: 4,
    designStyleId: 15
  },
  {
    username: "nitdesigner",
    priceStartFrom: 15,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/269449276/original/0e06dd4dac82782ad4e8de75f8a25e9f8fc48dd2.jpg",
    designTypeId: 4,
    designStyleId: 15
  },
  {
    username: "mehr_type",
    priceStartFrom: 20,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/198779843/original/e0d1dc2b8bfd8b4e24ceba62cd117ab4476d0700.jpg",
    designTypeId: 4,
    designStyleId: 15
  },
  {
    username: "setsetset",
    priceStartFrom: 5,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/266951427/original/49a46b80ad531fcf0968550bfaba1374d41815a3.png",
    designTypeId: 4,
    designStyleId: 15
  },
  {
    username: "leopon",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/video/upload/t_gig_cards_web/cxibq7qz2wmmmvjn1hzm.png",
    designTypeId: 4,
    designStyleId: 15
  },
  {
    username: "oussbilly",
    priceStartFrom: 5,
    imageUrl: "https://fiverr-res.cloudinary.com/video/upload/t_gig_cards_web/rjzxylacrb23f4zwldkn.png",
    designTypeId: 4,
    designStyleId: 15
  },
  {
    username: "oussbilly",
    priceStartFrom: 5,
    imageUrl: "https://fiverr-res.cloudinary.com/video/upload/t_gig_cards_web/ombhaixpywepyd7qbu5c.png",
    designTypeId: 4,
    designStyleId: 15
  },
  {
    username: "daniyal_ah",
    priceStartFrom: 20,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/230533073/original/b5cfbf7db4023d14d8775f2154c364e1302c07a5.jpg",
    designTypeId: 4,
    designStyleId: 15
  },
  {
    username: "fachoarif",
    priceStartFrom: 5,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/287586001/original/c81e442404753858884e5c07b705d1fea40593fd.jpg",
    designTypeId: 4,
    designStyleId: 15
  },
  {
    username: "spiros__o",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/video/upload/t_gig_cards_web/wkatnb116qti1xk90roa.png",
    designTypeId: 4,
    designStyleId: 15
  },
  {
    username: "ahmadyahya_art",
    priceStartFrom: 5,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/254947257/original/5b09ca1da29d1abcae3e27fd7011788fca3c4342.jpg",
    designTypeId: 4,
    designStyleId: 15
  },
  {
    username: "oussbilly",
    priceStartFrom: 5,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/117973063/original/85151114084b056e5f28cc2dcb44861510d7f16f.jpg",
    designTypeId: 4,
    designStyleId: 15
  },
  {
    username: "abhay_calli",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/147122795/original/013574116c75c853b16e75955bdde8a452d61f8d.png",
    designTypeId: 4,
    designStyleId: 15
  },
  {
    username: "zainashraf538",
    priceStartFrom: 5,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/242541143/original/fca1d92a532728205e936aaf5fa1d98ad3f0f605.jpg",
    designTypeId: 4,
    designStyleId: 15
  },
  {
    username: "grafixel2021",
    priceStartFrom: 15,
    imageUrl: "https://fiverr-res.cloudinary.com/video/upload/so_70.142909,t_gig_cards_web/wnmrrwidd7rjzndatpd1.png",
    designTypeId: 4,
    designStyleId: 15
  },
  {
    username: "natdolloso1001",
    priceStartFrom: 15,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/228925723/original/33c2817c44cf39ce637fa7a4aa220c42a8ed247e.jpg",
    designTypeId: 4,
    designStyleId: 15
  },
  {
    username: "lazyeggdesk",
    priceStartFrom: 5,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/140228405/original/1be5706ff9fd06eb90be9e025ab5a39585f6fa1d.jpg",
    designTypeId: 4,
    designStyleId: 15
  },
  {
    username: "rawryousef",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/63638889/original/946bb9aebb974c900cdc37d3671db05f84c6039a.jpg",
    designTypeId: 4,
    designStyleId: 15
  },
  {
    username: "yaciraiza",
    priceStartFrom: 5,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/288909525/original/dda3b690912112274629c44db7842de470e53127.jpg",
    designTypeId: 4,
    designStyleId: 15
  },
  {
    username: "yunse0k",
    priceStartFrom: 5,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/288659856/original/130ace7cd0a315310ecf250a06325459030b3afd.png",
    designTypeId: 4,
    designStyleId: 15
  },
  {
    username: "dragil",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/video/upload/t_gig_cards_web/j9dczatdoipwnnpjt9b5.png",
    designTypeId: 4,
    designStyleId: 15
  },
  {
    username: "mehr_type",
    priceStartFrom: 5,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/199036792/original/31bcc660c8eb8cc389c8b7aa85f24c2e55dea3a5.jpg",
    designTypeId: 4,
    designStyleId: 15
  },
  {
    username: "faizafarooqui21",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/video/upload/t_gig_cards_web/z41zcyduqczz3u4x2wf2.png",
    designTypeId: 4,
    designStyleId: 15
  },
  {
    username: "learning_haus",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/video/upload/t_gig_cards_web/tsqxxptpwferkwyullqm.png",
    designTypeId: 4,
    designStyleId: 15
  },
  {
    username: "mevrik1",
    priceStartFrom: 5,
    imageUrl: "https://fiverr-res.cloudinary.com/video/upload/so_32.835795,t_gig_cards_web/gnw99cmgerm1weyi9upn.png",
    designTypeId: 4,
    designStyleId: 15
  },
  {
    username: "miraclenolasco",
    priceStartFrom: 15,
    imageUrl: "https://fiverr-res.cloudinary.com/video/upload/t_gig_cards_web/cndrsvi3xemgehetdgox.png",
    designTypeId: 4,
    designStyleId: 15
  },
  {
    username: "sanizahra972",
    priceStartFrom: 25,
    imageUrl: "https://fiverr-res.cloudinary.com/video/upload/t_gig_cards_web/v11dlja1hmcqmr5zlrfu.png",
    designTypeId: 4,
    designStyleId: 15
  },
  {
    username: "ahmedhama2i",
    priceStartFrom: 15,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/220295987/original/728a6107cfd3ee68e6a324ba4a8fd5da3f141d0d.jpg",
    designTypeId: 4,
    designStyleId: 15
  },
  {
    username: "bongja",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/124345743/original/6327805af92f34c4bda8f036a17ca12f97f616b7.jpg",
    designTypeId: 4,
    designStyleId: 15
  },
  {
    username: "ali_nouioua",
    priceStartFrom: 5,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/237634430/original/4d7810ed3d65d7ac191e7366e5dd1c8dcc893127.png",
    designTypeId: 4,
    designStyleId: 15
  },
  {
    username: "abdulmustofa",
    priceStartFrom: 30,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/213854242/original/d7ced1ec09005af2547efe75ca9364d188672e82.jpeg",
    designTypeId: 4,
    designStyleId: 15
  },
  {
    username: "extrasunday",
    priceStartFrom: 5,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/285486335/original/545e2f323577de4b7a50095b99d18b7988da69e3.jpeg",
    designTypeId: 4,
    designStyleId: 15
  },
  {
    username: "mahdihasan29",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/125215446/original/46832a17202d88e6654fdde3202d3e787af24dbb.jpg",
    designTypeId: 4,
    designStyleId: 15
  },
  {
    username: "alexis1453",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/264474576/original/38700c2440a96b20406a800e3d0f07fb6c5d209f.png",
    designTypeId: 4,
    designStyleId: 15
  },
  {
    username: "syedscribe",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/video/upload/t_gig_cards_web/oxnqvumznp8rvcthggi3.png",
    designTypeId: 4,
    designStyleId: 15
  },
  {
    username: "rubabafaq",
    priceStartFrom: 5,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/240888718/original/a6f7b24fa930d2ee7cb5bd7bcaa29d34b26c7331.jpeg",
    designTypeId: 4,
    designStyleId: 15
  },
  {
    username: "exprecn",
    priceStartFrom: 35,
    imageUrl: "https://fiverr-res.cloudinary.com/video/upload/t_gig_cards_web/ta1rnvazlbn3oue83lgk.png",
    designTypeId: 4,
    designStyleId: 15
  },
  {
    username: "thecalligraphy1",
    priceStartFrom: 15,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/250348317/original/60571fafae1d86c957db39a86a91ebd540274b09.jpg",
    designTypeId: 4,
    designStyleId: 15
  },
  {
    username: "aditya2048",
    priceStartFrom: 5,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/262233984/original/09b1b4857fa1b98ea94268b3f58a5e857fe05b4a.jpg",
    designTypeId: 4,
    designStyleId: 15
  },
  {
    username: "princefromsky",
    priceStartFrom: 5,
    imageUrl: "https://fiverr-res.cloudinary.com/video/upload/t_gig_cards_web/mar5j0rh8uvwbabnr6ag.png",
    designTypeId: 4,
    designStyleId: 15
  },
  {
    username: "mahesh0965",
    priceStartFrom: 5,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/215472083/original/bdb397c7c8e8007f1e9539482ab9580c2c2c9c8c.jpg",
    designTypeId: 4,
    designStyleId: 15
  },
  {
    username: "str_japan",
    priceStartFrom: 5,
    imageUrl: "https://fiverr-res.cloudinary.com/video/upload/so_1.108774,t_gig_cards_web/wdob9opu8oyiugqvfpwg.png",
    designTypeId: 4,
    designStyleId: 15
  },
  {
    username: "liz181",
    priceStartFrom: 5,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/11879748/original/d21496aa0c5da7207661c8df13beb0e46af8b24c.jpg",
    designTypeId: 4,
    designStyleId: 15
  },
  {
    username: "creative_creat",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/159283872/original/6865699ec5cef0dda84e3a673f408d45f888f436.jpg",
    designTypeId: 4,
    designStyleId: 15
  },
  {
    username: "tmke99",
    priceStartFrom: 15,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/305050990/original/379efe4aea987f121d98cc042fae30e0d3dcf46c.png",
    designTypeId: 4,
    designStyleId: 15
  },
  {
    username: "mukigorotetsuwo",
    priceStartFrom: 5,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/276994056/original/57d75d0825242ddafe71abc850f170d55d2f5eea.jpeg",
    designTypeId: 4,
    designStyleId: 15
  },
  {
    username: "jacobando",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/281300758/original/7b88834c1f8ce965d61dfa703c477bcfa989222e.png",
    designTypeId: 4,
    designStyleId: 15
  },
  {
    username: "bernaadiguzel",
    priceStartFrom: 5,
    imageUrl: "https://fiverr-res.cloudinary.com/video/upload/t_gig_cards_web/ohqpsot8qukk58cyhqty.png",
    designTypeId: 4,
    designStyleId: 15
  },
  {
    username: "talal_munir1",
    priceStartFrom: 5,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/305841070/original/68ceb7cfc5bd62a01ba57d251f54957dd2ce84fa.jpg",
    designTypeId: 4,
    designStyleId: 15
  },
  {
    username: "yousufjamal80",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/306598255/original/49c3e201e82de3afe5e5cf8542f68c40cc53a91b.png",
    designTypeId: 4,
    designStyleId: 15
  },
  {
    username: "natdolloso1001",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/254063593/original/1bb23e3fcd150bcd525820ca9490246f4522f2e5.jpg",
    designTypeId: 4,
    designStyleId: 15
  },
  {
    username: "lordiheb",
    priceStartFrom: 5,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/226699230/original/2d9cca7e38d431e4e809641d93ea632c5e90bc2f.jpg",
    designTypeId: 4,
    designStyleId: 15
  },
  {
    username: "desheng01010",
    priceStartFrom: 15,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/121819693/original/6a3dd615879b90a14a333964652bdd641121cc83.jpg",
    designTypeId: 4,
    designStyleId: 15
  },
  {
    username: "rt_lettering",
    priceStartFrom: 5,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/126747810/original/88bec962f6330bb9304f6d71af8c5685ee846ec0.png",
    designTypeId: 4,
    designStyleId: 15
  },
  {
    username: "seven____",
    priceStartFrom: 5,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/264350863/original/73d8216a1c084a1df909681af0e527e4a8c2e257.jpg",
    designTypeId: 4,
    designStyleId: 15
  },
  {
    username: "varun1912",
    priceStartFrom: 5,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/820221/original/7d70e4c45258836376977eeeeb2179135531037c.png",
    designTypeId: 4,
    designStyleId: 15
  },
  {
    username: "natdolloso1001",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/178121670/original/21aeb0fa0355e16524ac6ec4ba4e1ff8ccd65e66.png",
    designTypeId: 4,
    designStyleId: 15
  },
  {
    username: "esthermariart",
    priceStartFrom: 20,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/206451333/original/aa226afbe6823bbb14703b78a6281a1e034475d3.jpg",
    designTypeId: 4,
    designStyleId: 16
  },
  {
    username: "mbonster",
    priceStartFrom: 15,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/260426860/original/2a538d2f3eca344ac06da2f5c86468230993c935.png",
    designTypeId: 4,
    designStyleId: 16
  },
  {
    username: "ote_ote",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/111886590/original/87bdb7ea1f2bb1fc789927f58a5d4f11908be30a.png",
    designTypeId: 4,
    designStyleId: 16
  },
  {
    username: "superkij",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/99343776/original/d80c065317c3001cdee1fd36f49c8da29330dff7.jpg",
    designTypeId: 4,
    designStyleId: 16
  },
  {
    username: "just_greta",
    priceStartFrom: 100,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/288420404/original/d1c877d2eae76ef2401e21e0a2de7a4b18c262c2.png",
    designTypeId: 4,
    designStyleId: 16
  },
  {
    username: "jnstacey",
    priceStartFrom: 35,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/254481731/original/e7fed3413f018d9ad8da88ed1bcc95326fb646dc.jpeg",
    designTypeId: 4,
    designStyleId: 16
  },
  {
    username: "joyfeliza",
    priceStartFrom: 20,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/295113661/original/0620ecc9d58f575c7a3b2d8dd1da7b3a8028168f.png",
    designTypeId: 4,
    designStyleId: 16
  },
  {
    username: "uchen01",
    priceStartFrom: 20,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/129171735/original/6927a15969d05a431079205f62c69ba5b4843e80.png",
    designTypeId: 4,
    designStyleId: 16
  },
  {
    username: "simonwilkoszz",
    priceStartFrom: 5,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/161263429/original/fedd30fb5225fb627ce2f51dd1e2390b83644f56.png",
    designTypeId: 4,
    designStyleId: 16
  },
  {
    username: "yogi_isnanda",
    priceStartFrom: 5,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs2/127741017/original/7c5c603f8bfcd1e4e1c791bc8aff32885855f831.png",
    designTypeId: 4,
    designStyleId: 16
  },
  {
    username: "addinu",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/105654625/original/e2242b7a805d222931b7c205491dfb7d29b7801c.jpg",
    designTypeId: 4,
    designStyleId: 16
  },
  {
    username: "chresjoent",
    priceStartFrom: 20,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/160240879/original/4b430f03115f65affec243c65a24a9bb08a38bd9.jpg",
    designTypeId: 4,
    designStyleId: 16
  },
  {
    username: "khnhd2708",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/218825755/original/e7a11a502820f5a7cf31a271b0e9baf0f851339b.png",
    designTypeId: 4,
    designStyleId: 16
  },
  {
    username: "riorezaldy",
    priceStartFrom: 5,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/273734549/original/e2ac465668dde32dee8d49b290d4c7dadfc19052.jpg",
    designTypeId: 4,
    designStyleId: 16
  },
  {
    username: "yogi_isnanda",
    priceStartFrom: 5,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/265585032/original/3f3bb99a8ba179aa4095c41a1370be24583d6335.jpg",
    designTypeId: 4,
    designStyleId: 16
  },
  {
    username: "fancyfruits_rar",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/256885497/original/68e471ce46c62a1427ed47ace4e569ce35ca7698.png",
    designTypeId: 4,
    designStyleId: 16
  },
  {
    username: "hunter4rt",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/140225813/original/2c4953d84e2306903492c62879fbf9372c296253.jpg",
    designTypeId: 4,
    designStyleId: 16
  },
  {
    username: "hunter4rt",
    priceStartFrom: 20,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/241587320/original/321602e38f3a9dd858b555dc269a75f04047b177.jpg",
    designTypeId: 4,
    designStyleId: 16
  },
  {
    username: "yanuaradii",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/128500413/original/c9ebca77bf9d35fd4a9ab605dda49ebd8a4c0236.jpg",
    designTypeId: 4,
    designStyleId: 16
  },
  {
    username: "dimasrawk",
    priceStartFrom: 5,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/261950397/original/1d0382baa18135ee6ec7777a11bcb7715568009c.jpg",
    designTypeId: 4,
    designStyleId: 16
  },
  {
    username: "aminulislam45",
    priceStartFrom: 5,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/254401694/original/154e4d0445a5b00fc81374ff357f745859246509.jpg",
    designTypeId: 4,
    designStyleId: 16
  },
  {
    username: "design_expert2",
    priceStartFrom: 5,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/78403046/original/02847617bd37fb903e2fd70e6d6990da4d012587.jpg",
    designTypeId: 4,
    designStyleId: 16
  },
  {
    username: "vardgd",
    priceStartFrom: 30,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/150648122/original/38b617ac7e7674298d807d1f5ab1df17b2b18ab1.jpg",
    designTypeId: 4,
    designStyleId: 16
  },
  {
    username: "nasrulkhaq",
    priceStartFrom: 45,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/195799303/original/9e856aa7a81e4bb542101aa535cee043169f60fe.jpg",
    designTypeId: 4,
    designStyleId: 16
  },
  {
    username: "dennydaske",
    priceStartFrom: 15,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/114467243/original/cda7ef48d11da166c81cb86daeaaa6c9fbc82f60.jpg",
    designTypeId: 4,
    designStyleId: 16
  },
  {
    username: "cbwall",
    priceStartFrom: 30,
    imageUrl: "https://fiverr-res.cloudinary.com/video/upload/so_7.29816,t_gig_cards_web/n4nhphgc9fuwnjihsuqw.png",
    designTypeId: 4,
    designStyleId: 16
  },
  {
    username: "bjornbauerart",
    priceStartFrom: 70,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/211452521/original/c3b52cf2cc53084681cdc484d51a4b20338bb128.jpg",
    designTypeId: 4,
    designStyleId: 16
  },
  {
    username: "orychii",
    priceStartFrom: 15,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/198931772/original/36291b79957d6b7f379287541cebc6a9384e5152.jpg",
    designTypeId: 4,
    designStyleId: 16
  },
  {
    username: "weapestudio",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/27447832/original/27d07ade6178e48999afb18c2bd42d3604ccc73e.jpg",
    designTypeId: 4,
    designStyleId: 16
  },
  {
    username: "crkstyles",
    priceStartFrom: 30,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/144198904/original/738289732e65cd13f0ce96e2779f0606f742dbb6.png",
    designTypeId: 4,
    designStyleId: 16
  },
  {
    username: "andregwas",
    priceStartFrom: 20,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/104845290/original/d87dbccb970a45a80212027ffb974a8e0a24e360.jpg",
    designTypeId: 4,
    designStyleId: 16
  },
  {
    username: "ambvrr",
    priceStartFrom: 15,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/116090934/original/147ee733c935acc84e6a15eb0df39e6eb7dcd9a9.png",
    designTypeId: 4,
    designStyleId: 16
  },
  {
    username: "yaqeens",
    priceStartFrom: 15,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/199693034/original/ba2e515f6c5e96c9cf59861cd857bb685e6ccf32.png",
    designTypeId: 4,
    designStyleId: 16
  },
  {
    username: "jnstacey",
    priceStartFrom: 40,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/254305633/original/cd025202ec6c2abc83454d092a6a842a61ab20c7.jpg",
    designTypeId: 4,
    designStyleId: 16
  },
  {
    username: "hunter4rt",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/241745851/original/ebed17356aba98d1f04933b94afe98972956b712.jpg",
    designTypeId: 4,
    designStyleId: 16
  },
  {
    username: "smartdesigns756",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/306551603/original/b290371e9533bf6f7a10a2da152d73fd42ab36eb.jpg",
    designTypeId: 4,
    designStyleId: 16
  },
  {
    username: "tomtypography",
    priceStartFrom: 45,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/132430895/original/b9c2af57fdcc15adf291b9cf0c32e3d66e3090dd.jpg",
    designTypeId: 4,
    designStyleId: 16
  },
  {
    username: "butaprosedur",
    priceStartFrom: 5,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/20903602/original/68ccac73dc3cff73db94034f760dbcca5007a856.jpg",
    designTypeId: 4,
    designStyleId: 16
  },
  {
    username: "josiedanila",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/video/upload/t_gig_cards_web/km7g6ynutfdjokhagxq6.png",
    designTypeId: 4,
    designStyleId: 16
  },
  {
    username: "theefficient5",
    priceStartFrom: 5,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/260746573/original/94d67ae59467c992780477e7ce51419ca0aa3b64.png",
    designTypeId: 4,
    designStyleId: 16
  },
  {
    username: "masdito",
    priceStartFrom: 30,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/141309962/original/da6f214923a9e43625d41cc843a7ab950059876f.jpg",
    designTypeId: 4,
    designStyleId: 16
  },
  {
    username: "riorezaldy",
    priceStartFrom: 5,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/273721542/original/7c3772d4366c39794eb7ee73b24b1fdcd0f588ab.jpg",
    designTypeId: 4,
    designStyleId: 16
  },
  {
    username: "varxtika",
    priceStartFrom: 5,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/256773449/original/559372061c00e300df4395b48fb4fb967a66c970.jpg",
    designTypeId: 4,
    designStyleId: 16
  },
  {
    username: "salma_farhoune",
    priceStartFrom: 25,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/214728765/original/1ae6b3d98dfca66e29e643e89ebd6ac0bdfc3a72.jpg",
    designTypeId: 4,
    designStyleId: 16
  },
  {
    username: "chykoazahra",
    priceStartFrom: 5,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/277692557/original/c3c4b0c301b2aca4418b9135a3eb496866e11bf1.jpg",
    designTypeId: 4,
    designStyleId: 16
  },
  {
    username: "abdalaka",
    priceStartFrom: 75,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/135078339/original/f568d9133552f13daf4ad4305ac26609be803579.jpg",
    designTypeId: 4,
    designStyleId: 16
  },
  {
    username: "rinabertha",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/219225479/original/b0cb9426ebb04d4b3d39bb9163e383a7b08a0cc3.png",
    designTypeId: 4,
    designStyleId: 16
  },
  {
    username: "pangeranbee",
    priceStartFrom: 5,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/156930606/original/5fde455dc9831805bbecabdf1d37be6cac05ea41.png",
    designTypeId: 4,
    designStyleId: 16
  },
  {
    username: "riskyanaad",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/100175685/original/0531df1a9873ba7d4bfa28831916295c8996b355.png",
    designTypeId: 4,
    designStyleId: 16
  },
  {
    username: "juliagladysheva",
    priceStartFrom: 50,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/229146330/original/b6b60416a6e5b1976d572f9962e63dac4e421748.jpg",
    designTypeId: 4,
    designStyleId: 16
  },
  {
    username: "ruangsore",
    priceStartFrom: 35,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/119773782/original/33776729a349231b751a5da56b7cef249fa51084.jpg",
    designTypeId: 4,
    designStyleId: 16
  },
  {
    username: "andracire",
    priceStartFrom: 5,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/306083484/original/b86ca1d6501cfe44ed6fac4d875a5cbdbbd46f18.jpeg",
    designTypeId: 4,
    designStyleId: 16
  },
  {
    username: "woodengrafis",
    priceStartFrom: 5,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/146761809/original/9255d203faca9780db1b378934694d26bded5bfd.jpg",
    designTypeId: 4,
    designStyleId: 16
  },
  {
    username: "designbyfaisal0",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/265761529/original/72adb137cc8621c55d6544bcaac3ee7350358c1c.png",
    designTypeId: 4,
    designStyleId: 16
  },
  {
    username: "weapestudio",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/117749840/original/75c735e7e355ea0f9372134594a9a68f28efa7e3.jpg",
    designTypeId: 4,
    designStyleId: 16
  },
  {
    username: "janganlupa",
    priceStartFrom: 5,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/125211639/original/ef024b9296b3f0de78f0205688af976643bd2071.jpg",
    designTypeId: 4,
    designStyleId: 16
  },
  {
    username: "raeannakay",
    priceStartFrom: 15,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/8968532/original/e4a7e386fd3a897f465973a92264f3c572f7b2fa.jpg",
    designTypeId: 4,
    designStyleId: 16
  },
  {
    username: "tomtypography",
    priceStartFrom: 45,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/109431151/original/f5dffcf1f60397b83a8d278b7dd813d061e3f61f.jpg",
    designTypeId: 4,
    designStyleId: 16
  },
  {
    username: "sayapr",
    priceStartFrom: 5,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/102782935/original/d626c5751fde1c64c292a25f840ca1a374aa151e.png",
    designTypeId: 4,
    designStyleId: 16
  },
  {
    username: "just_greta",
    priceStartFrom: 100,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/288420404/original/d1c877d2eae76ef2401e21e0a2de7a4b18c262c2.png",
    designTypeId: 4,
    designStyleId: 16
  },
  {
    username: "gajahnakal",
    priceStartFrom: 30,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/164070062/original/6ae03c580f6c237caef5ec8fedde72170e6e1f01.jpg",
    designTypeId: 4,
    designStyleId: 16
  },
  {
    username: "seventea7",
    priceStartFrom: 35,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/82483141/original/ed295e7ae685f09c872bd4c3c0ad5b3da11a204c.jpg",
    designTypeId: 4,
    designStyleId: 16
  },
  {
    username: "krittikak",
    priceStartFrom: 5,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/267466135/original/d39d7b8444d5eaf4ebe962021a9636605c800d45.png",
    designTypeId: 4,
    designStyleId: 16
  },
  {
    username: "annabovi",
    priceStartFrom: 100,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/154839733/original/ceccd282e2bcec3095d6ee772f961f90d358ec0d.png",
    designTypeId: 4,
    designStyleId: 16
  },
  {
    username: "yo_rabt",
    priceStartFrom: 20,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/196929270/original/9bfc8969bd631f19cf7635bb852ee24d13edaf5b.jpg",
    designTypeId: 4,
    designStyleId: 16
  },
  {
    username: "esthab",
    priceStartFrom: 5,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/235025486/original/09fa583942a6fac86e4b44c7f95dc80e3ab80868.jpg",
    designTypeId: 4,
    designStyleId: 16
  },
  {
    username: "poisondust__",
    priceStartFrom: 45,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/280060241/original/1412d4e469bec21c0ffc9a971b629ac129540cb4.png",
    designTypeId: 4,
    designStyleId: 16
  },
  {
    username: "mbarts17",
    priceStartFrom: 15,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/288454512/original/820da15c054b00e03d46ae45e08c7d293ccbf99b.jpg",
    designTypeId: 4,
    designStyleId: 16
  },
  {
    username: "julia_ilustra1",
    priceStartFrom: 25,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/264822195/original/2f5ff749309b413a11b8fb8eeb48dfb1031d106a.png",
    designTypeId: 4,
    designStyleId: 16
  },
  {
    username: "sildinho",
    priceStartFrom: 50,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/160527968/original/dd782bcb28e11692e75b518d5e9f74fb8cfb3f64.jpeg",
    designTypeId: 4,
    designStyleId: 16
  },
  {
    username: "fabiring",
    priceStartFrom: 35,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/8736372/original/cc45f7c22576ae4d43deae11b43bf803436179e8.jpg",
    designTypeId: 4,
    designStyleId: 16
  },
  {
    username: "mustfstd",
    priceStartFrom: 20,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/125481875/original/51244b661a6a1f607e5c1f557a8d0406e69ea703.png",
    designTypeId: 4,
    designStyleId: 16
  },
  {
    username: "shekoone",
    priceStartFrom: 30,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/148508805/original/e78ae7da553fb522bf879e5c7a7a26dbb4f8aa61.jpg",
    designTypeId: 4,
    designStyleId: 16
  },
  {
    username: "waqas098",
    priceStartFrom: 25,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/182636849/original/6cf866543c4d20d85d1a11eb1aa647bdf8a2c4a4.jpg",
    designTypeId: 4,
    designStyleId: 16
  },
  {
    username: "bill_art_",
    priceStartFrom: 25,
    imageUrl: "https://fiverr-res.cloudinary.com/video/upload/so_2.541667,t_gig_cards_web/k3khi6sd22r73kibvyhc.png",
    designTypeId: 4,
    designStyleId: 16
  },
  {
    username: "protonkid",
    priceStartFrom: 5,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/208266716/original/d490fdf1ccb64982048b60ba1499fb0643381a46.jpg",
    designTypeId: 4,
    designStyleId: 16
  },
  {
    username: "nadya_m",
    priceStartFrom: 25,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/213745379/original/9485be568e55b6d70a539ed702a17a89a625c174.jpg",
    designTypeId: 4,
    designStyleId: 16
  },
  {
    username: "diahzia",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/292694664/original/3967e2cc9781f0cb1ee92cc317db27fd6bd6d2d5.jpg",
    designTypeId: 4,
    designStyleId: 16
  },
  {
    username: "mery_arty",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/246325764/original/92821bf95cbd60b60e94a521ae81f80a8a22d8bf.jpg",
    designTypeId: 4,
    designStyleId: 16
  },
  {
    username: "dollmaster",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/8795792/original/a2134155e268dc2fd7b7aa3f4b54564ce8d4921d.png",
    designTypeId: 4,
    designStyleId: 16
  },
  {
    username: "zsasakaslavska",
    priceStartFrom: 5,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/242284010/original/c84c7e3a12e94f5daf15f0d61b1f51ac31bbb2f8.png",
    designTypeId: 4,
    designStyleId: 16
  },
  {
    username: "kierandilligaf",
    priceStartFrom: 20,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/306404119/original/fe172f35a50ed1bb1227c68dd896bbc1954285c6.jpg",
    designTypeId: 4,
    designStyleId: 16
  },
  {
    username: "angelojimnz",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/209327486/original/ac7fd27b8d7162320801b7eefd72034535c3a12d.jpg",
    designTypeId: 4,
    designStyleId: 16
  },
  {
    username: "nagisaokay",
    priceStartFrom: 15,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/195356282/original/0ed7de0243fbfe72215e11d22c20aab9088ba1f1.jpg",
    designTypeId: 4,
    designStyleId: 16
  },
  {
    username: "halina_viahera",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/294666667/original/5f98ef6ab0b3c2e2b4f6c2ce8a475a12a8706c57.jpg",
    designTypeId: 4,
    designStyleId: 16
  },
  {
    username: "luveight",
    priceStartFrom: 15,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/200133637/original/25bc5a9b7f12a82fc54a0a9d806d6c114958ebaf.jpg",
    designTypeId: 4,
    designStyleId: 16
  },
  {
    username: "ronos_art",
    priceStartFrom: 20,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/190024967/original/0501f8542bcf02ea081bfc0d9c3b337b00a890ea.jpg",
    designTypeId: 4,
    designStyleId: 16
  },
  {
    username: "mrcbttgl",
    priceStartFrom: 310,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/289406483/original/e230bf00151a77cd81b44bec47a5490fa55fee67.jpg",
    designTypeId: 4,
    designStyleId: 16
  },
  {
    username: "bhadrajimaw33",
    priceStartFrom: 30,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/155520362/original/c0d4c3a5c4dfaab00283bc3c5c560fc5919e3e6b.jpg",
    designTypeId: 4,
    designStyleId: 16
  },
  {
    username: "gabrielenini",
    priceStartFrom: 20,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/257195838/original/9ebd05afa18f5a611a56f3cc7bf9cfae8c075a2f.png",
    designTypeId: 4,
    designStyleId: 16
  },
  {
    username: "affenirhandi",
    priceStartFrom: 25,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/216769358/original/aeb54f02cf50fd0c51b78834996097c2e04856db.png",
    designTypeId: 4,
    designStyleId: 16
  },
  {
    username: "lorenzomasieri",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs2/174088647/original/84b0a932c686a030d7bbb6956d351ef1e29e57f0.jpg",
    designTypeId: 4,
    designStyleId: 16
  },
  {
    username: "egilia",
    priceStartFrom: 5,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/189230598/original/f811e9f9d88e5c34ed5a8fc6ea2d1c1198295901.jpg",
    designTypeId: 4,
    designStyleId: 16
  },
  {
    username: "whisky_d7",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/211204598/original/a8f5df51fdaf0fb526170c4f398657abd3553418.jpg",
    designTypeId: 4,
    designStyleId: 16
  },
  {
    username: "designbyfatima",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/209032183/original/c88c97b211806e52c05eae51a0177ef094f3fb0f.jpg",
    designTypeId: 4,
    designStyleId: 16
  },
  {
    username: "angelojimnz",
    priceStartFrom: 15,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/133016938/original/4980aa4832aa2bafecabb9d0ba5bbb032f45a07a.jpg",
    designTypeId: 4,
    designStyleId: 16
  },
  {
    username: "mehr_type",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/164018418/original/6657444bc88e80614ff1e660c23d48cd9dc4bc86.jpg",
    designTypeId: 4,
    designStyleId: 16
  },
  {
    username: "elite_designs2u",
    priceStartFrom: 25,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/255593204/original/ca84c9a4a1deb293cc7fa256a73449cbe5fe39bb.jpg",
    designTypeId: 4,
    designStyleId: 16
  },
  {
    username: "gnewwws",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/107009340/original/e3ea3991311456c1f0da590d138d4b101dd2225c.jpg",
    designTypeId: 4,
    designStyleId: 16
  },
  {
    username: "gatranaya",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/231258205/original/4163bdf31aabf69fc1fc5fbc23d998a62dc54101.jpg",
    designTypeId: 4,
    designStyleId: 16
  },
  {
    username: "felixtheaa",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/219054194/original/4c932aa46d879de07aada1eb9d2d700524cdfeb4.png",
    designTypeId: 4,
    designStyleId: 16
  },
  {
    username: "chelsyarts",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/295969389/original/877c4d56a9a12130dd9202e5047a1caad1aea2ae.jpg",
    designTypeId: 4,
    designStyleId: 16
  },
  {
    username: "agifantastik",
    priceStartFrom: 15,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/144043784/original/b476705b7c425c0525a00293a3eb25f0dc6db3b4.jpg",
    designTypeId: 4,
    designStyleId: 16
  },
  {
    username: "unclenine",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/290668100/original/eaad203614eab2c8e9d5f6b28b4f74ca9ea399a2.png",
    designTypeId: 4,
    designStyleId: 16
  },
  {
    username: "danielalauro",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/292184191/original/06215027a81d32ca94969240d300f43f4cbf689b.jpg",
    designTypeId: 4,
    designStyleId: 16
  },
  {
    username: "mbarts17",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/286344643/original/2c6e978d1ab62c2c5d9b4acc4dc73ead544e3a8c.jpg",
    designTypeId: 4,
    designStyleId: 16
  },
  {
    username: "raiannegouvea",
    priceStartFrom: 5,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/208945844/original/ebd5dee2f0a191970558f6d2485e5ea3287c2f4a.png",
    designTypeId: 4,
    designStyleId: 16
  },
  {
    username: "tuiebrek",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/156379204/original/3c006a191f86cb3cc7869d63e2b93b00e3ee5824.jpg",
    designTypeId: 4,
    designStyleId: 16
  },
  {
    username: "angelojimnz",
    priceStartFrom: 15,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/127445890/original/171ad5c8027a2afed170fef6f34d3b1a0ace4bf9.jpg",
    designTypeId: 4,
    designStyleId: 16
  },
  {
    username: "coldmedina2000",
    priceStartFrom: 5,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/306081941/original/134b29e0cee0ee85456aeb359210b9ceedce7ca0.png",
    designTypeId: 4,
    designStyleId: 16
  },
  {
    username: "metierpalette",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/242680459/original/fc33f7bc89c6e924cdcbef7c0086108e1f47334c.png",
    designTypeId: 4,
    designStyleId: 16
  },
  {
    username: "salmashahzadi44",
    priceStartFrom: 5,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/267886957/original/f78481afd8405ce60df0ec01f6290a344071be16.png",
    designTypeId: 4,
    designStyleId: 16
  },
  {
    username: "quanvu",
    priceStartFrom: 5,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/15947034/original/02fb0ccb3b0631f057a4b4dbe5b12953e8632680.png",
    designTypeId: 4,
    designStyleId: 16
  },
  {
    username: "alnoman1971",
    priceStartFrom: 5,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/258917185/original/aeeb3262f040992c23b6e27d637171bc86c87849.png",
    designTypeId: 4,
    designStyleId: 16
  },
  {
    username: "dnzrteen",
    priceStartFrom: 5,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/194776325/original/88fc7565e07b721a35265eae7e4b96c645d27323.png",
    designTypeId: 4,
    designStyleId: 16
  },
  {
    username: "abdulghan441281",
    priceStartFrom: 5,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/254698891/original/1dfd9725340ea2c60e460208884346ce8dff4525.jpg",
    designTypeId: 4,
    designStyleId: 16
  },
  {
    username: "minksone",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/236882577/original/000dec8f4d71296989826a02d108a501d7f87e67.jpeg",
    designTypeId: 4,
    designStyleId: 16
  },
  {
    username: "aldiramdan",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/120150339/original/a56843b4943e8457fecc78c0f9f61847552c542f.jpg",
    designTypeId: 4,
    designStyleId: 16
  },
  {
    username: "artisco99",
    priceStartFrom: 5,
    imageUrl: "https://fiverr-res.cloudinary.com/video/upload/so_0.0,t_gig_cards_web/ydmveuqhebaxytx77lsy.png",
    designTypeId: 4,
    designStyleId: 16
  },
  {
    username: "victoriant99",
    priceStartFrom: 5,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/111468650/original/bda325cb8bcd650e541761b98ca598e00ae640b9.png",
    designTypeId: 4,
    designStyleId: 16
  },
  {
    username: "shodowave",
    priceStartFrom: 5,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/202431973/original/abf60698880bb0c988d58a91a40fd8d760a13ffc.jpg",
    designTypeId: 4,
    designStyleId: 16
  },
  {
    username: "meriam23",
    priceStartFrom: 5,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/254503995/original/8ca21b82fbb32612bb49c44e12caeffbbe59b9f5.jpg",
    designTypeId: 4,
    designStyleId: 16
  },
  {
    username: "strongro",
    priceStartFrom: 5,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/276499491/original/7d148f770f299e26846ee191898b1d46f3cf453b.png",
    designTypeId: 4,
    designStyleId: 16
  },
  {
    username: "evan528",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/242997113/original/ad74b9270bca91229f5642753c19cc7d75f17034.jpg",
    designTypeId: 4,
    designStyleId: 16
  },
  {
    username: "yogi_isnanda",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/141158378/original/19769b391f1c3a16882d02ac20b37151ce7a2fae.jpeg",
    designTypeId: 4,
    designStyleId: 16
  },
  {
    username: "vergosann",
    priceStartFrom: 5,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/228091087/original/9effa89a721b2545b863f0ee439b25c8a6183e1f.jpg",
    designTypeId: 4,
    designStyleId: 16
  },
  {
    username: "nikithakamath21",
    priceStartFrom: 5,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/288978625/original/dc95789e7ba09f048f5c43517677a8664562d7e1.jpg",
    designTypeId: 4,
    designStyleId: 16
  },
  {
    username: "rickystudio23",
    priceStartFrom: 5,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/191868343/original/b3777ace8bf9217b9080eb83059e04da11c8f160.jpg",
    designTypeId: 4,
    designStyleId: 16
  },
  {
    username: "rt_lettering",
    priceStartFrom: 5,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/128756661/original/2343252e68d6e94b82a5deb53e0731b529cc7032.jpeg",
    designTypeId: 4,
    designStyleId: 16
  },
  {
    username: "chisarieswendha",
    priceStartFrom: 10,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/207472582/original/17a686d494d77034e6d210ffd843f525950265e9.jpg",
    designTypeId: 4,
    designStyleId: 16
  },
  {
    username: "caet_art",
    priceStartFrom: 25,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/178802228/original/b8f673775f71d9ceec9437b4d942d9555ee82976.jpg",
    designTypeId: 4,
    designStyleId: 16
  },
  {
    username: "deloket",
    priceStartFrom: 5,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/312766231/original/b7ffd07109a747366ea3dbe1cbf5b264f67ed4fa.jpg",
    designTypeId: 4,
    designStyleId: 16
  },
  {
    username: "joyfeliza",
    priceStartFrom: 5,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/301102275/original/7c30633c70ce1960ee9f659e03aca5ab5a1e78b3.png",
    designTypeId: 4,
    designStyleId: 16
  },
  {
    username: "tanyavasileva",
    priceStartFrom: 30,
    imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs2/168391117/original/f771a2dd211e3e47b48963ba84e4db1599cbb171.jpg",
    designTypeId: 4,
    designStyleId: 16
  }
]

const json_users = [
  {
    username: "nadia_younus",
    name: "nadia_younus",
    email: "nadia_younus@gmail.com",
    password: "12345678"
  },
  {
    username: "mariya_logo99",
    name: "mariya_logo99",
    email: "mariya_logo99@gmail.com",
    password: "12345678"
  },
  {
    username: "mountdesign",
    name: "mountdesign",
    email: "mountdesign@gmail.com",
    password: "12345678"
  },
  {
    username: "ahmed_gfx786",
    name: "ahmed_gfx786",
    email: "ahmed_gfx786@gmail.com",
    password: "12345678"
  },
  {
    username: "websutra",
    name: "websutra",
    email: "websutra@gmail.com",
    password: "12345678"
  },
  {
    username: "kiara43",
    name: "kiara43",
    email: "kiara43@gmail.com",
    password: "12345678"
  },
  {
    username: "crawford96",
    name: "crawford96",
    email: "crawford96@gmail.com",
    password: "12345678"
  },
  {
    username: "morningdesigns",
    name: "morningdesigns",
    email: "morningdesigns@gmail.com",
    password: "12345678"
  },
  {
    username: "ninjadesigners",
    name: "ninjadesigners",
    email: "ninjadesigners@gmail.com",
    password: "12345678"
  },
  {
    username: "shiv_graphix",
    name: "shiv_graphix",
    email: "shiv_graphix@gmail.com",
    password: "12345678"
  },
  {
    username: "mewindson",
    name: "mewindson",
    email: "mewindson@gmail.com",
    password: "12345678"
  },
  {
    username: "mrtranscendence",
    name: "mrtranscendence",
    email: "mrtranscendence@gmail.com",
    password: "12345678"
  },
  {
    username: "merryalexa",
    name: "merryalexa",
    email: "merryalexa@gmail.com",
    password: "12345678"
  },
  {
    username: "camilozuluagaf",
    name: "camilozuluagaf",
    email: "camilozuluagaf@gmail.com",
    password: "12345678"
  },
  {
    username: "supergf_x",
    name: "supergf_x",
    email: "supergf_x@gmail.com",
    password: "12345678"
  },
  {
    username: "weperfectionist",
    name: "weperfectionist",
    email: "weperfectionist@gmail.com",
    password: "12345678"
  },
  {
    username: "softriver",
    name: "softriver",
    email: "softriver@gmail.com",
    password: "12345678"
  },
  {
    username: "ameliadesigns43",
    name: "ameliadesigns43",
    email: "ameliadesigns43@gmail.com",
    password: "12345678"
  },
  {
    username: "shailene_george",
    name: "shailene_george",
    email: "shailene_george@gmail.com",
    password: "12345678"
  },
  {
    username: "markterry15",
    name: "markterry15",
    email: "markterry15@gmail.com",
    password: "12345678"
  },
  {
    username: "finder3nasu",
    name: "finder3nasu",
    email: "finder3nasu@gmail.com",
    password: "12345678"
  },
  {
    username: "caterina82",
    name: "caterina82",
    email: "caterina82@gmail.com",
    password: "12345678"
  },
  {
    username: "valeriiaty",
    name: "valeriiaty",
    email: "valeriiaty@gmail.com",
    password: "12345678"
  },
  {
    username: "iovitalucian",
    name: "iovitalucian",
    email: "iovitalucian@gmail.com",
    password: "12345678"
  },
  {
    username: "vanillattack",
    name: "vanillattack",
    email: "vanillattack@gmail.com",
    password: "12345678"
  },
  {
    username: "design_desk",
    name: "design_desk",
    email: "design_desk@gmail.com",
    password: "12345678"
  },
  {
    username: "listypop",
    name: "listypop",
    email: "listypop@gmail.com",
    password: "12345678"
  },
  {
    username: "sync_hamza",
    name: "sync_hamza",
    email: "sync_hamza@gmail.com",
    password: "12345678"
  },
  {
    username: "designs_storm",
    name: "designs_storm",
    email: "designs_storm@gmail.com",
    password: "12345678"
  },
  {
    username: "pixinndesignz",
    name: "pixinndesignz",
    email: "pixinndesignz@gmail.com",
    password: "12345678"
  },
  {
    username: "marioland",
    name: "marioland",
    email: "marioland@gmail.com",
    password: "12345678"
  },
  {
    username: "aleem_studio",
    name: "aleem_studio",
    email: "aleem_studio@gmail.com",
    password: "12345678"
  },
  {
    username: "ingeniousarts",
    name: "ingeniousarts",
    email: "ingeniousarts@gmail.com",
    password: "12345678"
  },
  {
    username: "graphixygen",
    name: "graphixygen",
    email: "graphixygen@gmail.com",
    password: "12345678"
  },
  {
    username: "majidmozafari",
    name: "majidmozafari",
    email: "majidmozafari@gmail.com",
    password: "12345678"
  },
  {
    username: "romisriyoool",
    name: "romisriyoool",
    email: "romisriyoool@gmail.com",
    password: "12345678"
  },
  {
    username: "johnny_bhai",
    name: "johnny_bhai",
    email: "johnny_bhai@gmail.com",
    password: "12345678"
  },
  {
    username: "delengo",
    name: "delengo",
    email: "delengo@gmail.com",
    password: "12345678"
  },
  {
    username: "mr_vogt",
    name: "mr_vogt",
    email: "mr_vogt@gmail.com",
    password: "12345678"
  },
  {
    username: "ericdesigner1",
    name: "ericdesigner1",
    email: "ericdesigner1@gmail.com",
    password: "12345678"
  },
  {
    username: "fetannus",
    name: "fetannus",
    email: "fetannus@gmail.com",
    password: "12345678"
  },
  {
    username: "logodreams",
    name: "logodreams",
    email: "logodreams@gmail.com",
    password: "12345678"
  },
  {
    username: "zera93",
    name: "zera93",
    email: "zera93@gmail.com",
    password: "12345678"
  },
  {
    username: "thedesignaffair",
    name: "thedesignaffair",
    email: "thedesignaffair@gmail.com",
    password: "12345678"
  },
  {
    username: "misty_mole",
    name: "misty_mole",
    email: "misty_mole@gmail.com",
    password: "12345678"
  },
  {
    username: "zunairaah",
    name: "zunairaah",
    email: "zunairaah@gmail.com",
    password: "12345678"
  },
  {
    username: "mariakhan811",
    name: "mariakhan811",
    email: "mariakhan811@gmail.com",
    password: "12345678"
  },
  {
    username: "skydesigner",
    name: "skydesigner",
    email: "skydesigner@gmail.com",
    password: "12345678"
  },
  {
    username: "b_logomaker",
    name: "b_logomaker",
    email: "b_logomaker@gmail.com",
    password: "12345678"
  },
  {
    username: "logoflow",
    name: "logoflow",
    email: "logoflow@gmail.com",
    password: "12345678"
  },
  {
    username: "aviafriat",
    name: "aviafriat",
    email: "aviafriat@gmail.com",
    password: "12345678"
  },
  {
    username: "zeeshanzahirali",
    name: "zeeshanzahirali",
    email: "zeeshanzahirali@gmail.com",
    password: "12345678"
  },
  {
    username: "shezy_design",
    name: "shezy_design",
    email: "shezy_design@gmail.com",
    password: "12345678"
  },
  {
    username: "xer0_xdesign",
    name: "xer0_xdesign",
    email: "xer0_xdesign@gmail.com",
    password: "12345678"
  },
  {
    username: "arundaskm",
    name: "arundaskm",
    email: "arundaskm@gmail.com",
    password: "12345678"
  },
  {
    username: "teamofcreatives",
    name: "teamofcreatives",
    email: "teamofcreatives@gmail.com",
    password: "12345678"
  },
  {
    username: "jeyarts",
    name: "jeyarts",
    email: "jeyarts@gmail.com",
    password: "12345678"
  },
  {
    username: "xco_studio",
    name: "xco_studio",
    email: "xco_studio@gmail.com",
    password: "12345678"
  },
  {
    username: "illustriouss",
    name: "illustriouss",
    email: "illustriouss@gmail.com",
    password: "12345678"
  },
  {
    username: "malikahmed99",
    name: "malikahmed99",
    email: "malikahmed99@gmail.com",
    password: "12345678"
  },
  {
    username: "shapebuilders",
    name: "shapebuilders",
    email: "shapebuilders@gmail.com",
    password: "12345678"
  },
  {
    username: "delightlogoz",
    name: "delightlogoz",
    email: "delightlogoz@gmail.com",
    password: "12345678"
  },
  {
    username: "roxsybeuw",
    name: "roxsybeuw",
    email: "roxsybeuw@gmail.com",
    password: "12345678"
  },
  {
    username: "hirparabhavin",
    name: "hirparabhavin",
    email: "hirparabhavin@gmail.com",
    password: "12345678"
  },
  {
    username: "poppy_lights",
    name: "poppy_lights",
    email: "poppy_lights@gmail.com",
    password: "12345678"
  },
  {
    username: "explorance",
    name: "explorance",
    email: "explorance@gmail.com",
    password: "12345678"
  },
  {
    username: "kawsarhossan",
    name: "kawsarhossan",
    email: "kawsarhossan@gmail.com",
    password: "12345678"
  },
  {
    username: "hello_friday",
    name: "hello_friday",
    email: "hello_friday@gmail.com",
    password: "12345678"
  },
  {
    username: "talentino12",
    name: "talentino12",
    email: "talentino12@gmail.com",
    password: "12345678"
  },
  {
    username: "faizankhanani",
    name: "faizankhanani",
    email: "faizankhanani@gmail.com",
    password: "12345678"
  },
  {
    username: "mm_hassan",
    name: "mm_hassan",
    email: "mm_hassan@gmail.com",
    password: "12345678"
  },
  {
    username: "texas_studios",
    name: "texas_studios",
    email: "texas_studios@gmail.com",
    password: "12345678"
  },
  {
    username: "hasyodesign",
    name: "hasyodesign",
    email: "hasyodesign@gmail.com",
    password: "12345678"
  },
  {
    username: "mrh_apon",
    name: "mrh_apon",
    email: "mrh_apon@gmail.com",
    password: "12345678"
  },
  {
    username: "zonestudio1",
    name: "zonestudio1",
    email: "zonestudio1@gmail.com",
    password: "12345678"
  },
  {
    username: "logosdreams",
    name: "logosdreams",
    email: "logosdreams@gmail.com",
    password: "12345678"
  },
  {
    username: "junaid710",
    name: "junaid710",
    email: "junaid710@gmail.com",
    password: "12345678"
  },
  {
    username: "cantikdesign",
    name: "cantikdesign",
    email: "cantikdesign@gmail.com",
    password: "12345678"
  },
  {
    username: "alex_logos",
    name: "alex_logos",
    email: "alex_logos@gmail.com",
    password: "12345678"
  },
  {
    username: "hellogfx7",
    name: "hellogfx7",
    email: "hellogfx7@gmail.com",
    password: "12345678"
  },
  {
    username: "infinitygraphcs",
    name: "infinitygraphcs",
    email: "infinitygraphcs@gmail.com",
    password: "12345678"
  },
  {
    username: "arona1",
    name: "arona1",
    email: "arona1@gmail.com",
    password: "12345678"
  },
  {
    username: "stdesigns",
    name: "stdesigns",
    email: "stdesigns@gmail.com",
    password: "12345678"
  },
  {
    username: "hasnyousaf",
    name: "hasnyousaf",
    email: "hasnyousaf@gmail.com",
    password: "12345678"
  },
  {
    username: "malish_logo",
    name: "malish_logo",
    email: "malish_logo@gmail.com",
    password: "12345678"
  },
  {
    username: "alinabogner24",
    name: "alinabogner24",
    email: "alinabogner24@gmail.com",
    password: "12345678"
  },
  {
    username: "gpsfirestudio",
    name: "gpsfirestudio",
    email: "gpsfirestudio@gmail.com",
    password: "12345678"
  },
  {
    username: "sevenarc",
    name: "sevenarc",
    email: "sevenarc@gmail.com",
    password: "12345678"
  },
  {
    username: "anu_designs4u",
    name: "anu_designs4u",
    email: "anu_designs4u@gmail.com",
    password: "12345678"
  },
  {
    username: "srdjanstojicic",
    name: "srdjanstojicic",
    email: "srdjanstojicic@gmail.com",
    password: "12345678"
  },
  {
    username: "rroxx",
    name: "rroxx",
    email: "rroxx@gmail.com",
    password: "12345678"
  },
  {
    username: "tony_dezign",
    name: "tony_dezign",
    email: "tony_dezign@gmail.com",
    password: "12345678"
  },
  {
    username: "ratrihalder",
    name: "ratrihalder",
    email: "ratrihalder@gmail.com",
    password: "12345678"
  },
  {
    username: "logo_angel_",
    name: "logo_angel_",
    email: "logo_angel_@gmail.com",
    password: "12345678"
  },
  {
    username: "danielaotero",
    name: "danielaotero",
    email: "danielaotero@gmail.com",
    password: "12345678"
  },
  {
    username: "marrygigvilla",
    name: "marrygigvilla",
    email: "marrygigvilla@gmail.com",
    password: "12345678"
  },
  {
    username: "actualreviewnet",
    name: "actualreviewnet",
    email: "actualreviewnet@gmail.com",
    password: "12345678"
  },
  {
    username: "khokonhassan",
    name: "khokonhassan",
    email: "khokonhassan@gmail.com",
    password: "12345678"
  },
  {
    username: "aiadesign",
    name: "aiadesign",
    email: "aiadesign@gmail.com",
    password: "12345678"
  },
  {
    username: "happy_art54",
    name: "happy_art54",
    email: "happy_art54@gmail.com",
    password: "12345678"
  },
  {
    username: "katieekat",
    name: "katieekat",
    email: "katieekat@gmail.com",
    password: "12345678"
  },
  {
    username: "tailor_brands",
    name: "tailor_brands",
    email: "tailor_brands@gmail.com",
    password: "12345678"
  },
  {
    username: "designtown",
    name: "designtown",
    email: "designtown@gmail.com",
    password: "12345678"
  },
  {
    username: "plantantion",
    name: "plantantion",
    email: "plantantion@gmail.com",
    password: "12345678"
  },
  {
    username: "logo_masters786",
    name: "logo_masters786",
    email: "logo_masters786@gmail.com",
    password: "12345678"
  },
  {
    username: "harshas",
    name: "harshas",
    email: "harshas@gmail.com",
    password: "12345678"
  },
  {
    username: "adripoggetti",
    name: "adripoggetti",
    email: "adripoggetti@gmail.com",
    password: "12345678"
  },
  {
    username: "ranisuchi",
    name: "ranisuchi",
    email: "ranisuchi@gmail.com",
    password: "12345678"
  },
  {
    username: "germancreative",
    name: "germancreative",
    email: "germancreative@gmail.com",
    password: "12345678"
  },
  {
    username: "misty_2",
    name: "misty_2",
    email: "misty_2@gmail.com",
    password: "12345678"
  },
  {
    username: "gogelle",
    name: "gogelle",
    email: "gogelle@gmail.com",
    password: "12345678"
  },
  {
    username: "greentask",
    name: "greentask",
    email: "greentask@gmail.com",
    password: "12345678"
  },
  {
    username: "designsbysaba",
    name: "designsbysaba",
    email: "designsbysaba@gmail.com",
    password: "12345678"
  },
  {
    username: "divastudio1",
    name: "divastudio1",
    email: "divastudio1@gmail.com",
    password: "12345678"
  },
  {
    username: "mjcagency",
    name: "mjcagency",
    email: "mjcagency@gmail.com",
    password: "12345678"
  },
  {
    username: "abrahamdave",
    name: "abrahamdave",
    email: "abrahamdave@gmail.com",
    password: "12345678"
  },
  {
    username: "luisahanna",
    name: "luisahanna",
    email: "luisahanna@gmail.com",
    password: "12345678"
  },
  {
    username: "logo_kings",
    name: "logo_kings",
    email: "logo_kings@gmail.com",
    password: "12345678"
  },
  {
    username: "polar_creative",
    name: "polar_creative",
    email: "polar_creative@gmail.com",
    password: "12345678"
  },
  {
    username: "qullart",
    name: "qullart",
    email: "qullart@gmail.com",
    password: "12345678"
  },
  {
    username: "sumairaladhaa",
    name: "sumairaladhaa",
    email: "sumairaladhaa@gmail.com",
    password: "12345678"
  },
  {
    username: "heimat_berlin",
    name: "heimat_berlin",
    email: "heimat_berlin@gmail.com",
    password: "12345678"
  },
  {
    username: "rfj_graphics",
    name: "rfj_graphics",
    email: "rfj_graphics@gmail.com",
    password: "12345678"
  },
  {
    username: "logo_factory10",
    name: "logo_factory10",
    email: "logo_factory10@gmail.com",
    password: "12345678"
  },
  {
    username: "bithi_akther",
    name: "bithi_akther",
    email: "bithi_akther@gmail.com",
    password: "12345678"
  },
  {
    username: "selflovepn",
    name: "selflovepn",
    email: "selflovepn@gmail.com",
    password: "12345678"
  },
  {
    username: "imtalha",
    name: "imtalha",
    email: "imtalha@gmail.com",
    password: "12345678"
  },
  {
    username: "maya610",
    name: "maya610",
    email: "maya610@gmail.com",
    password: "12345678"
  },
  {
    username: "atxstudio",
    name: "atxstudio",
    email: "atxstudio@gmail.com",
    password: "12345678"
  },
  {
    username: "reksaaji_",
    name: "reksaaji_",
    email: "reksaaji_@gmail.com",
    password: "12345678"
  },
  {
    username: "ravindu_ps",
    name: "ravindu_ps",
    email: "ravindu_ps@gmail.com",
    password: "12345678"
  },
  {
    username: "art_treasure01",
    name: "art_treasure01",
    email: "art_treasure01@gmail.com",
    password: "12345678"
  },
  {
    username: "jackiebalboa1",
    name: "jackiebalboa1",
    email: "jackiebalboa1@gmail.com",
    password: "12345678"
  },
  {
    username: "monarchgfx",
    name: "monarchgfx",
    email: "monarchgfx@gmail.com",
    password: "12345678"
  },
  {
    username: "graphic_zone786",
    name: "graphic_zone786",
    email: "graphic_zone786@gmail.com",
    password: "12345678"
  },
  {
    username: "thebluestudio01",
    name: "thebluestudio01",
    email: "thebluestudio01@gmail.com",
    password: "12345678"
  },
  {
    username: "purplehate",
    name: "purplehate",
    email: "purplehate@gmail.com",
    password: "12345678"
  },
  {
    username: "lonely_life",
    name: "lonely_life",
    email: "lonely_life@gmail.com",
    password: "12345678"
  },
  {
    username: "lanlanceart",
    name: "lanlanceart",
    email: "lanlanceart@gmail.com",
    password: "12345678"
  },
  {
    username: "ki_creation",
    name: "ki_creation",
    email: "ki_creation@gmail.com",
    password: "12345678"
  },
  {
    username: "floroliva",
    name: "floroliva",
    email: "floroliva@gmail.com",
    password: "12345678"
  },
  {
    username: "vanartcreator",
    name: "vanartcreator",
    email: "vanartcreator@gmail.com",
    password: "12345678"
  },
  {
    username: "esther_design",
    name: "esther_design",
    email: "esther_design@gmail.com",
    password: "12345678"
  },
  {
    username: "wigi_wigel",
    name: "wigi_wigel",
    email: "wigi_wigel@gmail.com",
    password: "12345678"
  },
  {
    username: "graffic_factory",
    name: "graffic_factory",
    email: "graffic_factory@gmail.com",
    password: "12345678"
  },
  {
    username: "stevanzivkovic",
    name: "stevanzivkovic",
    email: "stevanzivkovic@gmail.com",
    password: "12345678"
  },
  {
    username: "bilquis_arif",
    name: "bilquis_arif",
    email: "bilquis_arif@gmail.com",
    password: "12345678"
  },
  {
    username: "bilalhaider23",
    name: "bilalhaider23",
    email: "bilalhaider23@gmail.com",
    password: "12345678"
  },
  {
    username: "logo_maxy",
    name: "logo_maxy",
    email: "logo_maxy@gmail.com",
    password: "12345678"
  },
  {
    username: "tomtypography",
    name: "tomtypography",
    email: "tomtypography@gmail.com",
    password: "12345678"
  },
  {
    username: "rigerspopa",
    name: "rigerspopa",
    email: "rigerspopa@gmail.com",
    password: "12345678"
  },
  {
    username: "rafikaleng",
    name: "rafikaleng",
    email: "rafikaleng@gmail.com",
    password: "12345678"
  },
  {
    username: "l0g0king",
    name: "l0g0king",
    email: "l0g0king@gmail.com",
    password: "12345678"
  },
  {
    username: "abdulsalam972",
    name: "abdulsalam972",
    email: "abdulsalam972@gmail.com",
    password: "12345678"
  },
  {
    username: "sumbal_khan",
    name: "sumbal_khan",
    email: "sumbal_khan@gmail.com",
    password: "12345678"
  },
  {
    username: "andreasdamas",
    name: "andreasdamas",
    email: "andreasdamas@gmail.com",
    password: "12345678"
  },
  {
    username: "milanga",
    name: "milanga",
    email: "milanga@gmail.com",
    password: "12345678"
  },
  {
    username: "dynamostudioo",
    name: "dynamostudioo",
    email: "dynamostudioo@gmail.com",
    password: "12345678"
  },
  {
    username: "ridho_saras",
    name: "ridho_saras",
    email: "ridho_saras@gmail.com",
    password: "12345678"
  },
  {
    username: "olvtreedesign",
    name: "olvtreedesign",
    email: "olvtreedesign@gmail.com",
    password: "12345678"
  },
  {
    username: "vector_factory",
    name: "vector_factory",
    email: "vector_factory@gmail.com",
    password: "12345678"
  },
  {
    username: "adu_design",
    name: "adu_design",
    email: "adu_design@gmail.com",
    password: "12345678"
  },
  {
    username: "tegarbrian",
    name: "tegarbrian",
    email: "tegarbrian@gmail.com",
    password: "12345678"
  },
  {
    username: "cheftychefty",
    name: "cheftychefty",
    email: "cheftychefty@gmail.com",
    password: "12345678"
  },
  {
    username: "fahms_works",
    name: "fahms_works",
    email: "fahms_works@gmail.com",
    password: "12345678"
  },
  {
    username: "lamberti",
    name: "lamberti",
    email: "lamberti@gmail.com",
    password: "12345678"
  },
  {
    username: "delivian",
    name: "delivian",
    email: "delivian@gmail.com",
    password: "12345678"
  },
  {
    username: "nimra_aziz_",
    name: "nimra_aziz_",
    email: "nimra_aziz_@gmail.com",
    password: "12345678"
  },
  {
    username: "sk_virtuoso",
    name: "sk_virtuoso",
    email: "sk_virtuoso@gmail.com",
    password: "12345678"
  },
  {
    username: "sevenheavens_",
    name: "sevenheavens_",
    email: "sevenheavens_@gmail.com",
    password: "12345678"
  },
  {
    username: "elmantastic",
    name: "elmantastic",
    email: "elmantastic@gmail.com",
    password: "12345678"
  },
  {
    username: "leoash522",
    name: "leoash522",
    email: "leoash522@gmail.com",
    password: "12345678"
  },
  {
    username: "danyprasetyo",
    name: "danyprasetyo",
    email: "danyprasetyo@gmail.com",
    password: "12345678"
  },
  {
    username: "logo_adi",
    name: "logo_adi",
    email: "logo_adi@gmail.com",
    password: "12345678"
  },
  {
    username: "febiansaputra",
    name: "febiansaputra",
    email: "febiansaputra@gmail.com",
    password: "12345678"
  },
  {
    username: "shankaradesign",
    name: "shankaradesign",
    email: "shankaradesign@gmail.com",
    password: "12345678"
  },
  {
    username: "mikucchi",
    name: "mikucchi",
    email: "mikucchi@gmail.com",
    password: "12345678"
  },
  {
    username: "epi_creative",
    name: "epi_creative",
    email: "epi_creative@gmail.com",
    password: "12345678"
  },
  {
    username: "dunjabosanac",
    name: "dunjabosanac",
    email: "dunjabosanac@gmail.com",
    password: "12345678"
  },
  {
    username: "ana_vallejo",
    name: "ana_vallejo",
    email: "ana_vallejo@gmail.com",
    password: "12345678"
  },
  {
    username: "wahab_dhedhi",
    name: "wahab_dhedhi",
    email: "wahab_dhedhi@gmail.com",
    password: "12345678"
  },
  {
    username: "anelijas",
    name: "anelijas",
    email: "anelijas@gmail.com",
    password: "12345678"
  },
  {
    username: "rizkiivan",
    name: "rizkiivan",
    email: "rizkiivan@gmail.com",
    password: "12345678"
  },
  {
    username: "dh_studio",
    name: "dh_studio",
    email: "dh_studio@gmail.com",
    password: "12345678"
  },
  {
    username: "bisma_ahmad",
    name: "bisma_ahmad",
    email: "bisma_ahmad@gmail.com",
    password: "12345678"
  },
  {
    username: "logo_rhm98",
    name: "logo_rhm98",
    email: "logo_rhm98@gmail.com",
    password: "12345678"
  },
  {
    username: "creativitylove",
    name: "creativitylove",
    email: "creativitylove@gmail.com",
    password: "12345678"
  },
  {
    username: "satrioalfandi",
    name: "satrioalfandi",
    email: "satrioalfandi@gmail.com",
    password: "12345678"
  },
  {
    username: "earish_design",
    name: "earish_design",
    email: "earish_design@gmail.com",
    password: "12345678"
  },
  {
    username: "anggorotony",
    name: "anggorotony",
    email: "anggorotony@gmail.com",
    password: "12345678"
  },
  {
    username: "lissamii",
    name: "lissamii",
    email: "lissamii@gmail.com",
    password: "12345678"
  },
  {
    username: "adikrib_8",
    name: "adikrib_8",
    email: "adikrib_8@gmail.com",
    password: "12345678"
  },
  {
    username: "meherun_nesa",
    name: "meherun_nesa",
    email: "meherun_nesa@gmail.com",
    password: "12345678"
  },
  {
    username: "wantaraputra",
    name: "wantaraputra",
    email: "wantaraputra@gmail.com",
    password: "12345678"
  },
  {
    username: "kurtmaz",
    name: "kurtmaz",
    email: "kurtmaz@gmail.com",
    password: "12345678"
  },
  {
    username: "mscarlettdesign",
    name: "mscarlettdesign",
    email: "mscarlettdesign@gmail.com",
    password: "12345678"
  },
  {
    username: "glorias_studio",
    name: "glorias_studio",
    email: "glorias_studio@gmail.com",
    password: "12345678"
  },
  {
    username: "holo_dreamz",
    name: "holo_dreamz",
    email: "holo_dreamz@gmail.com",
    password: "12345678"
  },
  {
    username: "logoartisttt",
    name: "logoartisttt",
    email: "logoartisttt@gmail.com",
    password: "12345678"
  },
  {
    username: "smile_skunks",
    name: "smile_skunks",
    email: "smile_skunks@gmail.com",
    password: "12345678"
  },
  {
    username: "blackupheaval",
    name: "blackupheaval",
    email: "blackupheaval@gmail.com",
    password: "12345678"
  },
  {
    username: "lineandcircle",
    name: "lineandcircle",
    email: "lineandcircle@gmail.com",
    password: "12345678"
  },
  {
    username: "iamfrk7",
    name: "iamfrk7",
    email: "iamfrk7@gmail.com",
    password: "12345678"
  },
  {
    username: "experts_team0",
    name: "experts_team0",
    email: "experts_team0@gmail.com",
    password: "12345678"
  },
  {
    username: "tahasohail491",
    name: "tahasohail491",
    email: "tahasohail491@gmail.com",
    password: "12345678"
  },
  {
    username: "aboubakryamoul",
    name: "aboubakryamoul",
    email: "aboubakryamoul@gmail.com",
    password: "12345678"
  },
  {
    username: "saadbin08",
    name: "saadbin08",
    email: "saadbin08@gmail.com",
    password: "12345678"
  },
  {
    username: "basarts",
    name: "basarts",
    email: "basarts@gmail.com",
    password: "12345678"
  },
  {
    username: "doominking",
    name: "doominking",
    email: "doominking@gmail.com",
    password: "12345678"
  },
  {
    username: "logoversum",
    name: "logoversum",
    email: "logoversum@gmail.com",
    password: "12345678"
  },
  {
    username: "vectordesigns",
    name: "vectordesigns",
    email: "vectordesigns@gmail.com",
    password: "12345678"
  },
  {
    username: "tomandro",
    name: "tomandro",
    email: "tomandro@gmail.com",
    password: "12345678"
  },
  {
    username: "emonstudio101",
    name: "emonstudio101",
    email: "emonstudio101@gmail.com",
    password: "12345678"
  },
  {
    username: "krisnantokrisna",
    name: "krisnantokrisna",
    email: "krisnantokrisna@gmail.com",
    password: "12345678"
  },
  {
    username: "tubaasnari",
    name: "tubaasnari",
    email: "tubaasnari@gmail.com",
    password: "12345678"
  },
  {
    username: "soufianali",
    name: "soufianali",
    email: "soufianali@gmail.com",
    password: "12345678"
  },
  {
    username: "aiman_designn",
    name: "aiman_designn",
    email: "aiman_designn@gmail.com",
    password: "12345678"
  },
  {
    username: "achernushkin",
    name: "achernushkin",
    email: "achernushkin@gmail.com",
    password: "12345678"
  },
  {
    username: "iqrajaved06",
    name: "iqrajaved06",
    email: "iqrajaved06@gmail.com",
    password: "12345678"
  },
  {
    username: "logo_designers5",
    name: "logo_designers5",
    email: "logo_designers5@gmail.com",
    password: "12345678"
  },
  {
    username: "metamorphist666",
    name: "metamorphist666",
    email: "metamorphist666@gmail.com",
    password: "12345678"
  },
  {
    username: "monosdesign",
    name: "monosdesign",
    email: "monosdesign@gmail.com",
    password: "12345678"
  },
  {
    username: "akh000111",
    name: "akh000111",
    email: "akh000111@gmail.com",
    password: "12345678"
  },
  {
    username: "syahbanaadam",
    name: "syahbanaadam",
    email: "syahbanaadam@gmail.com",
    password: "12345678"
  },
  {
    username: "slimcrazy",
    name: "slimcrazy",
    email: "slimcrazy@gmail.com",
    password: "12345678"
  },
  {
    username: "veedii_designer",
    name: "veedii_designer",
    email: "veedii_designer@gmail.com",
    password: "12345678"
  },
  {
    username: "designofix",
    name: "designofix",
    email: "designofix@gmail.com",
    password: "12345678"
  },
  {
    username: "japanart83",
    name: "japanart83",
    email: "japanart83@gmail.com",
    password: "12345678"
  },
  {
    username: "haroonkhaan",
    name: "haroonkhaan",
    email: "haroonkhaan@gmail.com",
    password: "12345678"
  },
  {
    username: "maseiqbal",
    name: "maseiqbal",
    email: "maseiqbal@gmail.com",
    password: "12345678"
  },
  {
    username: "yadisab",
    name: "yadisab",
    email: "yadisab@gmail.com",
    password: "12345678"
  },
  {
    username: "artsabd",
    name: "artsabd",
    email: "artsabd@gmail.com",
    password: "12345678"
  },
  {
    username: "saybrand",
    name: "saybrand",
    email: "saybrand@gmail.com",
    password: "12345678"
  },
  {
    username: "raw_logos01",
    name: "raw_logos01",
    email: "raw_logos01@gmail.com",
    password: "12345678"
  },
  {
    username: "avebriant",
    name: "avebriant",
    email: "avebriant@gmail.com",
    password: "12345678"
  },
  {
    username: "juugend",
    name: "juugend",
    email: "juugend@gmail.com",
    password: "12345678"
  },
  {
    username: "danishehsan824",
    name: "danishehsan824",
    email: "danishehsan824@gmail.com",
    password: "12345678"
  },
  {
    username: "top_designer12",
    name: "top_designer12",
    email: "top_designer12@gmail.com",
    password: "12345678"
  },
  {
    username: "nomer61",
    name: "nomer61",
    email: "nomer61@gmail.com",
    password: "12345678"
  },
  {
    username: "hungrytukik",
    name: "hungrytukik",
    email: "hungrytukik@gmail.com",
    password: "12345678"
  },
  {
    username: "lowobiru",
    name: "lowobiru",
    email: "lowobiru@gmail.com",
    password: "12345678"
  },
  {
    username: "angiemil",
    name: "angiemil",
    email: "angiemil@gmail.com",
    password: "12345678"
  },
  {
    username: "shehreyar_ali",
    name: "shehreyar_ali",
    email: "shehreyar_ali@gmail.com",
    password: "12345678"
  },
  {
    username: "rabii_design",
    name: "rabii_design",
    email: "rabii_design@gmail.com",
    password: "12345678"
  },
  {
    username: "yasir_raja",
    name: "yasir_raja",
    email: "yasir_raja@gmail.com",
    password: "12345678"
  },
  {
    username: "dibujantis",
    name: "dibujantis",
    email: "dibujantis@gmail.com",
    password: "12345678"
  },
  {
    username: "nidagraphics3",
    name: "nidagraphics3",
    email: "nidagraphics3@gmail.com",
    password: "12345678"
  },
  {
    username: "ayyarametallogo",
    name: "ayyarametallogo",
    email: "ayyarametallogo@gmail.com",
    password: "12345678"
  },
  {
    username: "artsygraphy",
    name: "artsygraphy",
    email: "artsygraphy@gmail.com",
    password: "12345678"
  },
  {
    username: "marii_creation",
    name: "marii_creation",
    email: "marii_creation@gmail.com",
    password: "12345678"
  },
  {
    username: "sasniandika",
    name: "sasniandika",
    email: "sasniandika@gmail.com",
    password: "12345678"
  },
  {
    username: "ifanfarid",
    name: "ifanfarid",
    email: "ifanfarid@gmail.com",
    password: "12345678"
  },
  {
    username: "jitendayama",
    name: "jitendayama",
    email: "jitendayama@gmail.com",
    password: "12345678"
  },
  {
    username: "logodeck",
    name: "logodeck",
    email: "logodeck@gmail.com",
    password: "12345678"
  },
  {
    username: "aqsalogoz",
    name: "aqsalogoz",
    email: "aqsalogoz@gmail.com",
    password: "12345678"
  },
  {
    username: "aesthetics32",
    name: "aesthetics32",
    email: "aesthetics32@gmail.com",
    password: "12345678"
  },
  {
    username: "doodlinwithalex",
    name: "doodlinwithalex",
    email: "doodlinwithalex@gmail.com",
    password: "12345678"
  },
  {
    username: "neon_cacti",
    name: "neon_cacti",
    email: "neon_cacti@gmail.com",
    password: "12345678"
  },
  {
    username: "roseidink",
    name: "roseidink",
    email: "roseidink@gmail.com",
    password: "12345678"
  },
  {
    username: "sutrisnayana",
    name: "sutrisnayana",
    email: "sutrisnayana@gmail.com",
    password: "12345678"
  },
  {
    username: "shatteredsicks",
    name: "shatteredsicks",
    email: "shatteredsicks@gmail.com",
    password: "12345678"
  },
  {
    username: "born_somthing",
    name: "born_somthing",
    email: "born_somthing@gmail.com",
    password: "12345678"
  },
  {
    username: "xgarmothx",
    name: "xgarmothx",
    email: "xgarmothx@gmail.com",
    password: "12345678"
  },
  {
    username: "supercalifra923",
    name: "supercalifra923",
    email: "supercalifra923@gmail.com",
    password: "12345678"
  },
  {
    username: "wendzip",
    name: "wendzip",
    email: "wendzip@gmail.com",
    password: "12345678"
  },
  {
    username: "saimfaras235",
    name: "saimfaras235",
    email: "saimfaras235@gmail.com",
    password: "12345678"
  },
  {
    username: "drinidesign",
    name: "drinidesign",
    email: "drinidesign@gmail.com",
    password: "12345678"
  },
  {
    username: "superdaystudio",
    name: "superdaystudio",
    email: "superdaystudio@gmail.com",
    password: "12345678"
  },
  {
    username: "manifestolab",
    name: "manifestolab",
    email: "manifestolab@gmail.com",
    password: "12345678"
  },
  {
    username: "brucedesign1989",
    name: "brucedesign1989",
    email: "brucedesign1989@gmail.com",
    password: "12345678"
  },
  {
    username: "idrees_desg",
    name: "idrees_desg",
    email: "idrees_desg@gmail.com",
    password: "12345678"
  },
  {
    username: "candrabintoro2",
    name: "candrabintoro2",
    email: "candrabintoro2@gmail.com",
    password: "12345678"
  },
  {
    username: "crea8ive_studi0",
    name: "crea8ive_studi0",
    email: "crea8ive_studi0@gmail.com",
    password: "12345678"
  },
  {
    username: "bilaldesigner",
    name: "bilaldesigner",
    email: "bilaldesigner@gmail.com",
    password: "12345678"
  },
  {
    username: "g_designer1",
    name: "g_designer1",
    email: "g_designer1@gmail.com",
    password: "12345678"
  },
  {
    username: "logomore",
    name: "logomore",
    email: "logomore@gmail.com",
    password: "12345678"
  },
  {
    username: "borydesign",
    name: "borydesign",
    email: "borydesign@gmail.com",
    password: "12345678"
  },
  {
    username: "vixuaholic",
    name: "vixuaholic",
    email: "vixuaholic@gmail.com",
    password: "12345678"
  },
  {
    username: "vintage_valley",
    name: "vintage_valley",
    email: "vintage_valley@gmail.com",
    password: "12345678"
  },
  {
    username: "pintalsari",
    name: "pintalsari",
    email: "pintalsari@gmail.com",
    password: "12345678"
  },
  {
    username: "lumihano",
    name: "lumihano",
    email: "lumihano@gmail.com",
    password: "12345678"
  },
  {
    username: "tayyabadesigns4",
    name: "tayyabadesigns4",
    email: "tayyabadesigns4@gmail.com",
    password: "12345678"
  },
  {
    username: "smork",
    name: "smork",
    email: "smork@gmail.com",
    password: "12345678"
  },
  {
    username: "mayeda_studio",
    name: "mayeda_studio",
    email: "mayeda_studio@gmail.com",
    password: "12345678"
  },
  {
    username: "adi_graphics196",
    name: "adi_graphics196",
    email: "adi_graphics196@gmail.com",
    password: "12345678"
  },
  {
    username: "harry44taylor",
    name: "harry44taylor",
    email: "harry44taylor@gmail.com",
    password: "12345678"
  },
  {
    username: "sony_gfx",
    name: "sony_gfx",
    email: "sony_gfx@gmail.com",
    password: "12345678"
  },
  {
    username: "andhynugrh",
    name: "andhynugrh",
    email: "andhynugrh@gmail.com",
    password: "12345678"
  },
  {
    username: "tungraphic",
    name: "tungraphic",
    email: "tungraphic@gmail.com",
    password: "12345678"
  },
  {
    username: "arianit_komneni",
    name: "arianit_komneni",
    email: "arianit_komneni@gmail.com",
    password: "12345678"
  },
  {
    username: "mikey_de",
    name: "mikey_de",
    email: "mikey_de@gmail.com",
    password: "12345678"
  },
  {
    username: "masudparvez554",
    name: "masudparvez554",
    email: "masudparvez554@gmail.com",
    password: "12345678"
  },
  {
    username: "nick_std",
    name: "nick_std",
    email: "nick_std@gmail.com",
    password: "12345678"
  },
  {
    username: "artdictive",
    name: "artdictive",
    email: "artdictive@gmail.com",
    password: "12345678"
  },
  {
    username: "epicdesigns07",
    name: "epicdesigns07",
    email: "epicdesigns07@gmail.com",
    password: "12345678"
  },
  {
    username: "franzduro",
    name: "franzduro",
    email: "franzduro@gmail.com",
    password: "12345678"
  },
  {
    username: "s4rt4_",
    name: "s4rt4_",
    email: "s4rt4_@gmail.com",
    password: "12345678"
  },
  {
    username: "razaphics",
    name: "razaphics",
    email: "razaphics@gmail.com",
    password: "12345678"
  },
  {
    username: "dreamzdesignerz",
    name: "dreamzdesignerz",
    email: "dreamzdesignerz@gmail.com",
    password: "12345678"
  },
  {
    username: "raihansuman209",
    name: "raihansuman209",
    email: "raihansuman209@gmail.com",
    password: "12345678"
  },
  {
    username: "crazy_design4",
    name: "crazy_design4",
    email: "crazy_design4@gmail.com",
    password: "12345678"
  },
  {
    username: "vintagewizard",
    name: "vintagewizard",
    email: "vintagewizard@gmail.com",
    password: "12345678"
  },
  {
    username: "dezkon",
    name: "dezkon",
    email: "dezkon@gmail.com",
    password: "12345678"
  },
  {
    username: "multishop283",
    name: "multishop283",
    email: "multishop283@gmail.com",
    password: "12345678"
  },
  {
    username: "sandrorkjunior",
    name: "sandrorkjunior",
    email: "sandrorkjunior@gmail.com",
    password: "12345678"
  },
  {
    username: "endmor",
    name: "endmor",
    email: "endmor@gmail.com",
    password: "12345678"
  },
  {
    username: "rituakther252",
    name: "rituakther252",
    email: "rituakther252@gmail.com",
    password: "12345678"
  },
  {
    username: "emmastnlydesign",
    name: "emmastnlydesign",
    email: "emmastnlydesign@gmail.com",
    password: "12345678"
  },
  {
    username: "vintagedesign90",
    name: "vintagedesign90",
    email: "vintagedesign90@gmail.com",
    password: "12345678"
  },
  {
    username: "rolanputut",
    name: "rolanputut",
    email: "rolanputut@gmail.com",
    password: "12345678"
  },
  {
    username: "marssounds",
    name: "marssounds",
    email: "marssounds@gmail.com",
    password: "12345678"
  },
  {
    username: "gx_arts",
    name: "gx_arts",
    email: "gx_arts@gmail.com",
    password: "12345678"
  },
  {
    username: "desiger786",
    name: "desiger786",
    email: "desiger786@gmail.com",
    password: "12345678"
  },
  {
    username: "samumair",
    name: "samumair",
    email: "samumair@gmail.com",
    password: "12345678"
  },
  {
    username: "roksanabegum",
    name: "roksanabegum",
    email: "roksanabegum@gmail.com",
    password: "12345678"
  },
  {
    username: "maespro",
    name: "maespro",
    email: "maespro@gmail.com",
    password: "12345678"
  },
  {
    username: "saida69_design",
    name: "saida69_design",
    email: "saida69_design@gmail.com",
    password: "12345678"
  },
  {
    username: "agimdesign",
    name: "agimdesign",
    email: "agimdesign@gmail.com",
    password: "12345678"
  },
  {
    username: "graphixeye",
    name: "graphixeye",
    email: "graphixeye@gmail.com",
    password: "12345678"
  },
  {
    username: "saleemnoor25",
    name: "saleemnoor25",
    email: "saleemnoor25@gmail.com",
    password: "12345678"
  },
  {
    username: "d4gstudio",
    name: "d4gstudio",
    email: "d4gstudio@gmail.com",
    password: "12345678"
  },
  {
    username: "shoaib_arts",
    name: "shoaib_arts",
    email: "shoaib_arts@gmail.com",
    password: "12345678"
  },
  {
    username: "belen_serrano",
    name: "belen_serrano",
    email: "belen_serrano@gmail.com",
    password: "12345678"
  },
  {
    username: "narindrarb",
    name: "narindrarb",
    email: "narindrarb@gmail.com",
    password: "12345678"
  },
  {
    username: "rajamubeenzafar",
    name: "rajamubeenzafar",
    email: "rajamubeenzafar@gmail.com",
    password: "12345678"
  },
  {
    username: "psyponti0007",
    name: "psyponti0007",
    email: "psyponti0007@gmail.com",
    password: "12345678"
  },
  {
    username: "awaisgraphics1",
    name: "awaisgraphics1",
    email: "awaisgraphics1@gmail.com",
    password: "12345678"
  },
  {
    username: "cc_design",
    name: "cc_design",
    email: "cc_design@gmail.com",
    password: "12345678"
  },
  {
    username: "yogirmwn",
    name: "yogirmwn",
    email: "yogirmwn@gmail.com",
    password: "12345678"
  },
  {
    username: "uuniqe_designer",
    name: "uuniqe_designer",
    email: "uuniqe_designer@gmail.com",
    password: "12345678"
  },
  {
    username: "jahanzaibnasir",
    name: "jahanzaibnasir",
    email: "jahanzaibnasir@gmail.com",
    password: "12345678"
  },
  {
    username: "aesnman",
    name: "aesnman",
    email: "aesnman@gmail.com",
    password: "12345678"
  },
  {
    username: "niloyb2b",
    name: "niloyb2b",
    email: "niloyb2b@gmail.com",
    password: "12345678"
  },
  {
    username: "designersanjoy",
    name: "designersanjoy",
    email: "designersanjoy@gmail.com",
    password: "12345678"
  },
  {
    username: "john848",
    name: "john848",
    email: "john848@gmail.com",
    password: "12345678"
  },
  {
    username: "kiranashrafgfx",
    name: "kiranashrafgfx",
    email: "kiranashrafgfx@gmail.com",
    password: "12345678"
  },
  {
    username: "sifatali537",
    name: "sifatali537",
    email: "sifatali537@gmail.com",
    password: "12345678"
  },
  {
    username: "mursalin78",
    name: "mursalin78",
    email: "mursalin78@gmail.com",
    password: "12345678"
  },
  {
    username: "rashed150",
    name: "rashed150",
    email: "rashed150@gmail.com",
    password: "12345678"
  },
  {
    username: "staynormal",
    name: "staynormal",
    email: "staynormal@gmail.com",
    password: "12345678"
  },
  {
    username: "danielsadana",
    name: "danielsadana",
    email: "danielsadana@gmail.com",
    password: "12345678"
  },
  {
    username: "mariam_designs",
    name: "mariam_designs",
    email: "mariam_designs@gmail.com",
    password: "12345678"
  },
  {
    username: "midulgihad",
    name: "midulgihad",
    email: "midulgihad@gmail.com",
    password: "12345678"
  },
  {
    username: "nadia_azhar",
    name: "nadia_azhar",
    email: "nadia_azhar@gmail.com",
    password: "12345678"
  },
  {
    username: "graveyardshiftx",
    name: "graveyardshiftx",
    email: "graveyardshiftx@gmail.com",
    password: "12345678"
  },
  {
    username: "nomee_graphics",
    name: "nomee_graphics",
    email: "nomee_graphics@gmail.com",
    password: "12345678"
  },
  {
    username: "bizness_logos",
    name: "bizness_logos",
    email: "bizness_logos@gmail.com",
    password: "12345678"
  },
  {
    username: "happygraph",
    name: "happygraph",
    email: "happygraph@gmail.com",
    password: "12345678"
  },
  {
    username: "blos_graffiti",
    name: "blos_graffiti",
    email: "blos_graffiti@gmail.com",
    password: "12345678"
  },
  {
    username: "feargodstudio",
    name: "feargodstudio",
    email: "feargodstudio@gmail.com",
    password: "12345678"
  },
  {
    username: "farazch69",
    name: "farazch69",
    email: "farazch69@gmail.com",
    password: "12345678"
  },
  {
    username: "gfx_world8",
    name: "gfx_world8",
    email: "gfx_world8@gmail.com",
    password: "12345678"
  },
  {
    username: "mamun629",
    name: "mamun629",
    email: "mamun629@gmail.com",
    password: "12345678"
  },
  {
    username: "rasiorise",
    name: "rasiorise",
    email: "rasiorise@gmail.com",
    password: "12345678"
  },
  {
    username: "logo_splash",
    name: "logo_splash",
    email: "logo_splash@gmail.com",
    password: "12345678"
  },
  {
    username: "eartdesign",
    name: "eartdesign",
    email: "eartdesign@gmail.com",
    password: "12345678"
  },
  {
    username: "ushadesign",
    name: "ushadesign",
    email: "ushadesign@gmail.com",
    password: "12345678"
  },
  {
    username: "branddesigner15",
    name: "branddesigner15",
    email: "branddesigner15@gmail.com",
    password: "12345678"
  },
  {
    username: "raiyan567",
    name: "raiyan567",
    email: "raiyan567@gmail.com",
    password: "12345678"
  },
  {
    username: "lauraameyer",
    name: "lauraameyer",
    email: "lauraameyer@gmail.com",
    password: "12345678"
  },
  {
    username: "vect_studio",
    name: "vect_studio",
    email: "vect_studio@gmail.com",
    password: "12345678"
  },
  {
    username: "rhsouravx",
    name: "rhsouravx",
    email: "rhsouravx@gmail.com",
    password: "12345678"
  },
  {
    username: "we_solvers",
    name: "we_solvers",
    email: "we_solvers@gmail.com",
    password: "12345678"
  },
  {
    username: "buuhoo_artist",
    name: "buuhoo_artist",
    email: "buuhoo_artist@gmail.com",
    password: "12345678"
  },
  {
    username: "unrealbird",
    name: "unrealbird",
    email: "unrealbird@gmail.com",
    password: "12345678"
  },
  {
    username: "karmasanchita",
    name: "karmasanchita",
    email: "karmasanchita@gmail.com",
    password: "12345678"
  },
  {
    username: "gdesign_point",
    name: "gdesign_point",
    email: "gdesign_point@gmail.com",
    password: "12345678"
  },
  {
    username: "ponypunx",
    name: "ponypunx",
    email: "ponypunx@gmail.com",
    password: "12345678"
  },
  {
    username: "andinovadhitya",
    name: "andinovadhitya",
    email: "andinovadhitya@gmail.com",
    password: "12345678"
  },
  {
    username: "kgm1988",
    name: "kgm1988",
    email: "kgm1988@gmail.com",
    password: "12345678"
  },
  {
    username: "saraahh14",
    name: "saraahh14",
    email: "saraahh14@gmail.com",
    password: "12345678"
  },
  {
    username: "salarzai44",
    name: "salarzai44",
    email: "salarzai44@gmail.com",
    password: "12345678"
  },
  {
    username: "johnelements",
    name: "johnelements",
    email: "johnelements@gmail.com",
    password: "12345678"
  },
  {
    username: "neccholis",
    name: "neccholis",
    email: "neccholis@gmail.com",
    password: "12345678"
  },
  {
    username: "shaf_gfx",
    name: "shaf_gfx",
    email: "shaf_gfx@gmail.com",
    password: "12345678"
  },
  {
    username: "hifriday",
    name: "hifriday",
    email: "hifriday@gmail.com",
    password: "12345678"
  },
  {
    username: "lux_design",
    name: "lux_design",
    email: "lux_design@gmail.com",
    password: "12345678"
  },
  {
    username: "logomoko",
    name: "logomoko",
    email: "logomoko@gmail.com",
    password: "12345678"
  },
  {
    username: "omorfarukcd",
    name: "omorfarukcd",
    email: "omorfarukcd@gmail.com",
    password: "12345678"
  },
  {
    username: "gilangfram4",
    name: "gilangfram4",
    email: "gilangfram4@gmail.com",
    password: "12345678"
  },
  {
    username: "bak_brandexpert",
    name: "bak_brandexpert",
    email: "bak_brandexpert@gmail.com",
    password: "12345678"
  },
  {
    username: "stars_branding",
    name: "stars_branding",
    email: "stars_branding@gmail.com",
    password: "12345678"
  },
  {
    username: "rabbi_studio",
    name: "rabbi_studio",
    email: "rabbi_studio@gmail.com",
    password: "12345678"
  },
  {
    username: "azbaaftab",
    name: "azbaaftab",
    email: "azbaaftab@gmail.com",
    password: "12345678"
  },
  {
    username: "prachiroybest",
    name: "prachiroybest",
    email: "prachiroybest@gmail.com",
    password: "12345678"
  },
  {
    username: "logoforte",
    name: "logoforte",
    email: "logoforte@gmail.com",
    password: "12345678"
  },
  {
    username: "zebragraphix92",
    name: "zebragraphix92",
    email: "zebragraphix92@gmail.com",
    password: "12345678"
  },
  {
    username: "sirjeel_zahid",
    name: "sirjeel_zahid",
    email: "sirjeel_zahid@gmail.com",
    password: "12345678"
  },
  {
    username: "saadoalex",
    name: "saadoalex",
    email: "saadoalex@gmail.com",
    password: "12345678"
  },
  {
    username: "kingdesigner3",
    name: "kingdesigner3",
    email: "kingdesigner3@gmail.com",
    password: "12345678"
  },
  {
    username: "artmaniaex",
    name: "artmaniaex",
    email: "artmaniaex@gmail.com",
    password: "12345678"
  },
  {
    username: "cosmicbeauty2",
    name: "cosmicbeauty2",
    email: "cosmicbeauty2@gmail.com",
    password: "12345678"
  },
  {
    username: "bellpeppr",
    name: "bellpeppr",
    email: "bellpeppr@gmail.com",
    password: "12345678"
  },
  {
    username: "kairachel451",
    name: "kairachel451",
    email: "kairachel451@gmail.com",
    password: "12345678"
  },
  {
    username: "design_civil",
    name: "design_civil",
    email: "design_civil@gmail.com",
    password: "12345678"
  },
  {
    username: "graphics_spot93",
    name: "graphics_spot93",
    email: "graphics_spot93@gmail.com",
    password: "12345678"
  },
  {
    username: "ahsan_memon8",
    name: "ahsan_memon8",
    email: "ahsan_memon8@gmail.com",
    password: "12345678"
  },
  {
    username: "prince_logo",
    name: "prince_logo",
    email: "prince_logo@gmail.com",
    password: "12345678"
  },
  {
    username: "hana_designer",
    name: "hana_designer",
    email: "hana_designer@gmail.com",
    password: "12345678"
  },
  {
    username: "dawoodnazir02",
    name: "dawoodnazir02",
    email: "dawoodnazir02@gmail.com",
    password: "12345678"
  },
  {
    username: "frankietheboss",
    name: "frankietheboss",
    email: "frankietheboss@gmail.com",
    password: "12345678"
  },
  {
    username: "markauther",
    name: "markauther",
    email: "markauther@gmail.com",
    password: "12345678"
  },
  {
    username: "sophiekarbjins",
    name: "sophiekarbjins",
    email: "sophiekarbjins@gmail.com",
    password: "12345678"
  },
  {
    username: "minimal_logo864",
    name: "minimal_logo864",
    email: "minimal_logo864@gmail.com",
    password: "12345678"
  },
  {
    username: "goodlancer",
    name: "goodlancer",
    email: "goodlancer@gmail.com",
    password: "12345678"
  },
  {
    username: "designzone247",
    name: "designzone247",
    email: "designzone247@gmail.com",
    password: "12345678"
  },
  {
    username: "cheema_designss",
    name: "cheema_designss",
    email: "cheema_designss@gmail.com",
    password: "12345678"
  },
  {
    username: "nazimistic",
    name: "nazimistic",
    email: "nazimistic@gmail.com",
    password: "12345678"
  },
  {
    username: "aquilakhter",
    name: "aquilakhter",
    email: "aquilakhter@gmail.com",
    password: "12345678"
  },
  {
    username: "zeeshanpardesi",
    name: "zeeshanpardesi",
    email: "zeeshanpardesi@gmail.com",
    password: "12345678"
  },
  {
    username: "logodesign250",
    name: "logodesign250",
    email: "logodesign250@gmail.com",
    password: "12345678"
  },
  {
    username: "logo_logics",
    name: "logo_logics",
    email: "logo_logics@gmail.com",
    password: "12345678"
  },
  {
    username: "perri_edward",
    name: "perri_edward",
    email: "perri_edward@gmail.com",
    password: "12345678"
  },
  {
    username: "logobasher",
    name: "logobasher",
    email: "logobasher@gmail.com",
    password: "12345678"
  },
  {
    username: "zaara_studio",
    name: "zaara_studio",
    email: "zaara_studio@gmail.com",
    password: "12345678"
  },
  {
    username: "khaledmig",
    name: "khaledmig",
    email: "khaledmig@gmail.com",
    password: "12345678"
  },
  {
    username: "ijaz_saab",
    name: "ijaz_saab",
    email: "ijaz_saab@gmail.com",
    password: "12345678"
  },
  {
    username: "bright_graphix",
    name: "bright_graphix",
    email: "bright_graphix@gmail.com",
    password: "12345678"
  },
  {
    username: "softdesignsz",
    name: "softdesignsz",
    email: "softdesignsz@gmail.com",
    password: "12345678"
  },
  {
    username: "charlesstudio1",
    name: "charlesstudio1",
    email: "charlesstudio1@gmail.com",
    password: "12345678"
  },
  {
    username: "rehman_sheikhu",
    name: "rehman_sheikhu",
    email: "rehman_sheikhu@gmail.com",
    password: "12345678"
  },
  {
    username: "zsdezigns",
    name: "zsdezigns",
    email: "zsdezigns@gmail.com",
    password: "12345678"
  },
  {
    username: "flinders221",
    name: "flinders221",
    email: "flinders221@gmail.com",
    password: "12345678"
  },
  {
    username: "mirha_designz",
    name: "mirha_designz",
    email: "mirha_designz@gmail.com",
    password: "12345678"
  },
  {
    username: "ashley2244",
    name: "ashley2244",
    email: "ashley2244@gmail.com",
    password: "12345678"
  },
  {
    username: "hafiz09987",
    name: "hafiz09987",
    email: "hafiz09987@gmail.com",
    password: "12345678"
  },
  {
    username: "sobyaiqbal",
    name: "sobyaiqbal",
    email: "sobyaiqbal@gmail.com",
    password: "12345678"
  },
  {
    username: "mohsinbhatti2",
    name: "mohsinbhatti2",
    email: "mohsinbhatti2@gmail.com",
    password: "12345678"
  },
  {
    username: "logoking2018",
    name: "logoking2018",
    email: "logoking2018@gmail.com",
    password: "12345678"
  },
  {
    username: "tiptox",
    name: "tiptox",
    email: "tiptox@gmail.com",
    password: "12345678"
  },
  {
    username: "kreative_logo1",
    name: "kreative_logo1",
    email: "kreative_logo1@gmail.com",
    password: "12345678"
  },
  {
    username: "brandingspell",
    name: "brandingspell",
    email: "brandingspell@gmail.com",
    password: "12345678"
  },
  {
    username: "alluredesigns9",
    name: "alluredesigns9",
    email: "alluredesigns9@gmail.com",
    password: "12345678"
  },
  {
    username: "ryan_studi0",
    name: "ryan_studi0",
    email: "ryan_studi0@gmail.com",
    password: "12345678"
  },
  {
    username: "usmanparvez",
    name: "usmanparvez",
    email: "usmanparvez@gmail.com",
    password: "12345678"
  },
  {
    username: "sophie_devine",
    name: "sophie_devine",
    email: "sophie_devine@gmail.com",
    password: "12345678"
  },
  {
    username: "eva_stacy",
    name: "eva_stacy",
    email: "eva_stacy@gmail.com",
    password: "12345678"
  },
  {
    username: "tayyabharoon936",
    name: "tayyabharoon936",
    email: "tayyabharoon936@gmail.com",
    password: "12345678"
  },
  {
    username: "dens_saputra",
    name: "dens_saputra",
    email: "dens_saputra@gmail.com",
    password: "12345678"
  },
  {
    username: "logo_artist_az",
    name: "logo_artist_az",
    email: "logo_artist_az@gmail.com",
    password: "12345678"
  },
  {
    username: "malikbilaldhaku",
    name: "malikbilaldhaku",
    email: "malikbilaldhaku@gmail.com",
    password: "12345678"
  },
  {
    username: "teamgraphics932",
    name: "teamgraphics932",
    email: "teamgraphics932@gmail.com",
    password: "12345678"
  },
  {
    username: "dream_art_work",
    name: "dream_art_work",
    email: "dream_art_work@gmail.com",
    password: "12345678"
  },
  {
    username: "raheelk01",
    name: "raheelk01",
    email: "raheelk01@gmail.com",
    password: "12345678"
  },
  {
    username: "abrarjehan",
    name: "abrarjehan",
    email: "abrarjehan@gmail.com",
    password: "12345678"
  },
  {
    username: "logobyminsa",
    name: "logobyminsa",
    email: "logobyminsa@gmail.com",
    password: "12345678"
  },
  {
    username: "uzair_here_",
    name: "uzair_here_",
    email: "uzair_here_@gmail.com",
    password: "12345678"
  },
  {
    username: "anum_noor9",
    name: "anum_noor9",
    email: "anum_noor9@gmail.com",
    password: "12345678"
  },
  {
    username: "shemulehsan",
    name: "shemulehsan",
    email: "shemulehsan@gmail.com",
    password: "12345678"
  },
  {
    username: "adishen13",
    name: "adishen13",
    email: "adishen13@gmail.com",
    password: "12345678"
  },
  {
    username: "missgraphic01",
    name: "missgraphic01",
    email: "missgraphic01@gmail.com",
    password: "12345678"
  },
  {
    username: "amazartist",
    name: "amazartist",
    email: "amazartist@gmail.com",
    password: "12345678"
  },
  {
    username: "aychuck",
    name: "aychuck",
    email: "aychuck@gmail.com",
    password: "12345678"
  },
  {
    username: "riajul_islam69",
    name: "riajul_islam69",
    email: "riajul_islam69@gmail.com",
    password: "12345678"
  },
  {
    username: "log0designer090",
    name: "log0designer090",
    email: "log0designer090@gmail.com",
    password: "12345678"
  },
  {
    username: "kassou_design",
    name: "kassou_design",
    email: "kassou_design@gmail.com",
    password: "12345678"
  },
  {
    username: "priya90",
    name: "priya90",
    email: "priya90@gmail.com",
    password: "12345678"
  },
  {
    username: "zia_designs90",
    name: "zia_designs90",
    email: "zia_designs90@gmail.com",
    password: "12345678"
  },
  {
    username: "maxx_graphic",
    name: "maxx_graphic",
    email: "maxx_graphic@gmail.com",
    password: "12345678"
  },
  {
    username: "ashi_designers",
    name: "ashi_designers",
    email: "ashi_designers@gmail.com",
    password: "12345678"
  },
  {
    username: "leo_design95",
    name: "leo_design95",
    email: "leo_design95@gmail.com",
    password: "12345678"
  },
  {
    username: "devinstanford11",
    name: "devinstanford11",
    email: "devinstanford11@gmail.com",
    password: "12345678"
  },
  {
    username: "razi111",
    name: "razi111",
    email: "razi111@gmail.com",
    password: "12345678"
  },
  {
    username: "refly8",
    name: "refly8",
    email: "refly8@gmail.com",
    password: "12345678"
  },
  {
    username: "eliycia",
    name: "eliycia",
    email: "eliycia@gmail.com",
    password: "12345678"
  },
  {
    username: "designsterx",
    name: "designsterx",
    email: "designsterx@gmail.com",
    password: "12345678"
  },
  {
    username: "shahbaz2006",
    name: "shahbaz2006",
    email: "shahbaz2006@gmail.com",
    password: "12345678"
  },
  {
    username: "kdesigns786",
    name: "kdesigns786",
    email: "kdesigns786@gmail.com",
    password: "12345678"
  },
  {
    username: "marriumadnan",
    name: "marriumadnan",
    email: "marriumadnan@gmail.com",
    password: "12345678"
  },
  {
    username: "designbrandx",
    name: "designbrandx",
    email: "designbrandx@gmail.com",
    password: "12345678"
  },
  {
    username: "thedezignstarz",
    name: "thedezignstarz",
    email: "thedezignstarz@gmail.com",
    password: "12345678"
  },
  {
    username: "leo_brand1",
    name: "leo_brand1",
    email: "leo_brand1@gmail.com",
    password: "12345678"
  },
  {
    username: "phoenix_logos1",
    name: "phoenix_logos1",
    email: "phoenix_logos1@gmail.com",
    password: "12345678"
  },
  {
    username: "logofication",
    name: "logofication",
    email: "logofication@gmail.com",
    password: "12345678"
  },
  {
    username: "rydia_lm",
    name: "rydia_lm",
    email: "rydia_lm@gmail.com",
    password: "12345678"
  },
  {
    username: "uniquestudio1",
    name: "uniquestudio1",
    email: "uniquestudio1@gmail.com",
    password: "12345678"
  },
  {
    username: "sarah_logo1",
    name: "sarah_logo1",
    email: "sarah_logo1@gmail.com",
    password: "12345678"
  },
  {
    username: "alexmorenoac",
    name: "alexmorenoac",
    email: "alexmorenoac@gmail.com",
    password: "12345678"
  },
  {
    username: "subhanwains",
    name: "subhanwains",
    email: "subhanwains@gmail.com",
    password: "12345678"
  },
  {
    username: "pisces_designs",
    name: "pisces_designs",
    email: "pisces_designs@gmail.com",
    password: "12345678"
  },
  {
    username: "sarmadsiddiqui9",
    name: "sarmadsiddiqui9",
    email: "sarmadsiddiqui9@gmail.com",
    password: "12345678"
  },
  {
    username: "graphicpronitay",
    name: "graphicpronitay",
    email: "graphicpronitay@gmail.com",
    password: "12345678"
  },
  {
    username: "maria_studio35",
    name: "maria_studio35",
    email: "maria_studio35@gmail.com",
    password: "12345678"
  },
  {
    username: "eric_glenn",
    name: "eric_glenn",
    email: "eric_glenn@gmail.com",
    password: "12345678"
  },
  {
    username: "meerub_designs",
    name: "meerub_designs",
    email: "meerub_designs@gmail.com",
    password: "12345678"
  },
  {
    username: "yasirubasnayake",
    name: "yasirubasnayake",
    email: "yasirubasnayake@gmail.com",
    password: "12345678"
  },
  {
    username: "mariaxcreations",
    name: "mariaxcreations",
    email: "mariaxcreations@gmail.com",
    password: "12345678"
  },
  {
    username: "creativezone2",
    name: "creativezone2",
    email: "creativezone2@gmail.com",
    password: "12345678"
  },
  {
    username: "bhavans",
    name: "bhavans",
    email: "bhavans@gmail.com",
    password: "12345678"
  },
  {
    username: "mujju26",
    name: "mujju26",
    email: "mujju26@gmail.com",
    password: "12345678"
  },
  {
    username: "janifer_gfx7",
    name: "janifer_gfx7",
    email: "janifer_gfx7@gmail.com",
    password: "12345678"
  },
  {
    username: "blackholeworld",
    name: "blackholeworld",
    email: "blackholeworld@gmail.com",
    password: "12345678"
  },
  {
    username: "afroja_nipa",
    name: "afroja_nipa",
    email: "afroja_nipa@gmail.com",
    password: "12345678"
  },
  {
    username: "realisticlogo",
    name: "realisticlogo",
    email: "realisticlogo@gmail.com",
    password: "12345678"
  },
  {
    username: "hamza_sial",
    name: "hamza_sial",
    email: "hamza_sial@gmail.com",
    password: "12345678"
  },
  {
    username: "zdaplay",
    name: "zdaplay",
    email: "zdaplay@gmail.com",
    password: "12345678"
  },
  {
    username: "enylee",
    name: "enylee",
    email: "enylee@gmail.com",
    password: "12345678"
  },
  {
    username: "goodhandstudio",
    name: "goodhandstudio",
    email: "goodhandstudio@gmail.com",
    password: "12345678"
  },
  {
    username: "logo_expert_it",
    name: "logo_expert_it",
    email: "logo_expert_it@gmail.com",
    password: "12345678"
  },
  {
    username: "graphix_switch",
    name: "graphix_switch",
    email: "graphix_switch@gmail.com",
    password: "12345678"
  },
  {
    username: "molesa",
    name: "molesa",
    email: "molesa@gmail.com",
    password: "12345678"
  },
  {
    username: "ilogosmith",
    name: "ilogosmith",
    email: "ilogosmith@gmail.com",
    password: "12345678"
  },
  {
    username: "logo_master1014",
    name: "logo_master1014",
    email: "logo_master1014@gmail.com",
    password: "12345678"
  },
  {
    username: "honeyqureshi",
    name: "honeyqureshi",
    email: "honeyqureshi@gmail.com",
    password: "12345678"
  },
  {
    username: "leo_dj",
    name: "leo_dj",
    email: "leo_dj@gmail.com",
    password: "12345678"
  },
  {
    username: "pel_studio",
    name: "pel_studio",
    email: "pel_studio@gmail.com",
    password: "12345678"
  },
  {
    username: "fatoniyahya",
    name: "fatoniyahya",
    email: "fatoniyahya@gmail.com",
    password: "12345678"
  },
  {
    username: "zmeree31",
    name: "zmeree31",
    email: "zmeree31@gmail.com",
    password: "12345678"
  },
  {
    username: "gdrldesign",
    name: "gdrldesign",
    email: "gdrldesign@gmail.com",
    password: "12345678"
  },
  {
    username: "mobigraphics1",
    name: "mobigraphics1",
    email: "mobigraphics1@gmail.com",
    password: "12345678"
  },
  {
    username: "widya_gfx",
    name: "widya_gfx",
    email: "widya_gfx@gmail.com",
    password: "12345678"
  },
  {
    username: "sahoodmughal",
    name: "sahoodmughal",
    email: "sahoodmughal@gmail.com",
    password: "12345678"
  },
  {
    username: "designologoio",
    name: "designologoio",
    email: "designologoio@gmail.com",
    password: "12345678"
  },
  {
    username: "kreative_krew01",
    name: "kreative_krew01",
    email: "kreative_krew01@gmail.com",
    password: "12345678"
  },
  {
    username: "calsolaroart",
    name: "calsolaroart",
    email: "calsolaroart@gmail.com",
    password: "12345678"
  },
  {
    username: "diplomadon",
    name: "diplomadon",
    email: "diplomadon@gmail.com",
    password: "12345678"
  },
  {
    username: "waqaryounis11",
    name: "waqaryounis11",
    email: "waqaryounis11@gmail.com",
    password: "12345678"
  },
  {
    username: "bilal_designeer",
    name: "bilal_designeer",
    email: "bilal_designeer@gmail.com",
    password: "12345678"
  },
  {
    username: "tiagonarciso",
    name: "tiagonarciso",
    email: "tiagonarciso@gmail.com",
    password: "12345678"
  },
  {
    username: "intime_designer",
    name: "intime_designer",
    email: "intime_designer@gmail.com",
    password: "12345678"
  },
  {
    username: "sarahzohairdes",
    name: "sarahzohairdes",
    email: "sarahzohairdes@gmail.com",
    password: "12345678"
  },
  {
    username: "kevinraymund",
    name: "kevinraymund",
    email: "kevinraymund@gmail.com",
    password: "12345678"
  },
  {
    username: "shanzay_graphic",
    name: "shanzay_graphic",
    email: "shanzay_graphic@gmail.com",
    password: "12345678"
  },
  {
    username: "rishad_art",
    name: "rishad_art",
    email: "rishad_art@gmail.com",
    password: "12345678"
  },
  {
    username: "minhaz_48",
    name: "minhaz_48",
    email: "minhaz_48@gmail.com",
    password: "12345678"
  },
  {
    username: "kathreenrose",
    name: "kathreenrose",
    email: "kathreenrose@gmail.com",
    password: "12345678"
  },
  {
    username: "remonisco",
    name: "remonisco",
    email: "remonisco@gmail.com",
    password: "12345678"
  },
  {
    username: "lordoflogos",
    name: "lordoflogos",
    email: "lordoflogos@gmail.com",
    password: "12345678"
  },
  {
    username: "ezzabell5758",
    name: "ezzabell5758",
    email: "ezzabell5758@gmail.com",
    password: "12345678"
  },
  {
    username: "logo_master56",
    name: "logo_master56",
    email: "logo_master56@gmail.com",
    password: "12345678"
  },
  {
    username: "carminesannino",
    name: "carminesannino",
    email: "carminesannino@gmail.com",
    password: "12345678"
  },
  {
    username: "mk_sanwal",
    name: "mk_sanwal",
    email: "mk_sanwal@gmail.com",
    password: "12345678"
  },
  {
    username: "tom_creates",
    name: "tom_creates",
    email: "tom_creates@gmail.com",
    password: "12345678"
  },
  {
    username: "lordoflogo",
    name: "lordoflogo",
    email: "lordoflogo@gmail.com",
    password: "12345678"
  },
  {
    username: "magickgraphics",
    name: "magickgraphics",
    email: "magickgraphics@gmail.com",
    password: "12345678"
  },
  {
    username: "alphastudio_as",
    name: "alphastudio_as",
    email: "alphastudio_as@gmail.com",
    password: "12345678"
  },
  {
    username: "shadab_graphics",
    name: "shadab_graphics",
    email: "shadab_graphics@gmail.com",
    password: "12345678"
  },
  {
    username: "bryanshepard",
    name: "bryanshepard",
    email: "bryanshepard@gmail.com",
    password: "12345678"
  },
  {
    username: "abdullahshek518",
    name: "abdullahshek518",
    email: "abdullahshek518@gmail.com",
    password: "12345678"
  },
  {
    username: "natasha_designz",
    name: "natasha_designz",
    email: "natasha_designz@gmail.com",
    password: "12345678"
  },
  {
    username: "identitycreat0r",
    name: "identitycreat0r",
    email: "identitycreat0r@gmail.com",
    password: "12345678"
  },
  {
    username: "sirrexs",
    name: "sirrexs",
    email: "sirrexs@gmail.com",
    password: "12345678"
  },
  {
    username: "mertfidan454",
    name: "mertfidan454",
    email: "mertfidan454@gmail.com",
    password: "12345678"
  },
  {
    username: "addahub",
    name: "addahub",
    email: "addahub@gmail.com",
    password: "12345678"
  },
  {
    username: "cre8iveartwork",
    name: "cre8iveartwork",
    email: "cre8iveartwork@gmail.com",
    password: "12345678"
  },
  {
    username: "mateodcarmona",
    name: "mateodcarmona",
    email: "mateodcarmona@gmail.com",
    password: "12345678"
  },
  {
    username: "thegraficohub",
    name: "thegraficohub",
    email: "thegraficohub@gmail.com",
    password: "12345678"
  },
  {
    username: "amirkhan1996",
    name: "amirkhan1996",
    email: "amirkhan1996@gmail.com",
    password: "12345678"
  },
  {
    username: "riki_std",
    name: "riki_std",
    email: "riki_std@gmail.com",
    password: "12345678"
  },
  {
    username: "vicki_hari",
    name: "vicki_hari",
    email: "vicki_hari@gmail.com",
    password: "12345678"
  },
  {
    username: "braidedlady",
    name: "braidedlady",
    email: "braidedlady@gmail.com",
    password: "12345678"
  },
  {
    username: "deleyo",
    name: "deleyo",
    email: "deleyo@gmail.com",
    password: "12345678"
  },
  {
    username: "asahab",
    name: "asahab",
    email: "asahab@gmail.com",
    password: "12345678"
  },
  {
    username: "sumbal_logos",
    name: "sumbal_logos",
    email: "sumbal_logos@gmail.com",
    password: "12345678"
  },
  {
    username: "ngengames",
    name: "ngengames",
    email: "ngengames@gmail.com",
    password: "12345678"
  },
  {
    username: "mola_jutt01",
    name: "mola_jutt01",
    email: "mola_jutt01@gmail.com",
    password: "12345678"
  },
  {
    username: "crafting_galaxy",
    name: "crafting_galaxy",
    email: "crafting_galaxy@gmail.com",
    password: "12345678"
  },
  {
    username: "w7experts",
    name: "w7experts",
    email: "w7experts@gmail.com",
    password: "12345678"
  },
  {
    username: "jahidhassan496",
    name: "jahidhassan496",
    email: "jahidhassan496@gmail.com",
    password: "12345678"
  },
  {
    username: "mscottdesign",
    name: "mscottdesign",
    email: "mscottdesign@gmail.com",
    password: "12345678"
  },
  {
    username: "alif365",
    name: "alif365",
    email: "alif365@gmail.com",
    password: "12345678"
  },
  {
    username: "komail98",
    name: "komail98",
    email: "komail98@gmail.com",
    password: "12345678"
  },
  {
    username: "kamrulhasan70",
    name: "kamrulhasan70",
    email: "kamrulhasan70@gmail.com",
    password: "12345678"
  },
  {
    username: "zohad_hossain",
    name: "zohad_hossain",
    email: "zohad_hossain@gmail.com",
    password: "12345678"
  },
  {
    username: "hmd_graphic",
    name: "hmd_graphic",
    email: "hmd_graphic@gmail.com",
    password: "12345678"
  },
  {
    username: "graphicsisland1",
    name: "graphicsisland1",
    email: "graphicsisland1@gmail.com",
    password: "12345678"
  },
  {
    username: "valo_design",
    name: "valo_design",
    email: "valo_design@gmail.com",
    password: "12345678"
  },
  {
    username: "anna_taylor",
    name: "anna_taylor",
    email: "anna_taylor@gmail.com",
    password: "12345678"
  },
  {
    username: "creative_manial",
    name: "creative_manial",
    email: "creative_manial@gmail.com",
    password: "12345678"
  },
  {
    username: "fabien_bglt",
    name: "fabien_bglt",
    email: "fabien_bglt@gmail.com",
    password: "12345678"
  },
  {
    username: "artshipa",
    name: "artshipa",
    email: "artshipa@gmail.com",
    password: "12345678"
  },
  {
    username: "tonigdesign",
    name: "tonigdesign",
    email: "tonigdesign@gmail.com",
    password: "12345678"
  },
  {
    username: "azgraphics_01",
    name: "azgraphics_01",
    email: "azgraphics_01@gmail.com",
    password: "12345678"
  },
  {
    username: "chadkills",
    name: "chadkills",
    email: "chadkills@gmail.com",
    password: "12345678"
  },
  {
    username: "bcendet",
    name: "bcendet",
    email: "bcendet@gmail.com",
    password: "12345678"
  },
  {
    username: "venkateshvinod",
    name: "venkateshvinod",
    email: "venkateshvinod@gmail.com",
    password: "12345678"
  },
  {
    username: "gina_28",
    name: "gina_28",
    email: "gina_28@gmail.com",
    password: "12345678"
  },
  {
    username: "ait_taoufiq",
    name: "ait_taoufiq",
    email: "ait_taoufiq@gmail.com",
    password: "12345678"
  },
  {
    username: "gfxdesigns506",
    name: "gfxdesigns506",
    email: "gfxdesigns506@gmail.com",
    password: "12345678"
  },
  {
    username: "kmlogos",
    name: "kmlogos",
    email: "kmlogos@gmail.com",
    password: "12345678"
  },
  {
    username: "mila_akter",
    name: "mila_akter",
    email: "mila_akter@gmail.com",
    password: "12345678"
  },
  {
    username: "merry_designer4",
    name: "merry_designer4",
    email: "merry_designer4@gmail.com",
    password: "12345678"
  },
  {
    username: "raminder",
    name: "raminder",
    email: "raminder@gmail.com",
    password: "12345678"
  },
  {
    username: "mahnoorfaseh",
    name: "mahnoorfaseh",
    email: "mahnoorfaseh@gmail.com",
    password: "12345678"
  },
  {
    username: "creativespiritb",
    name: "creativespiritb",
    email: "creativespiritb@gmail.com",
    password: "12345678"
  },
  {
    username: "imranpiash",
    name: "imranpiash",
    email: "imranpiash@gmail.com",
    password: "12345678"
  },
  {
    username: "vince_hua",
    name: "vince_hua",
    email: "vince_hua@gmail.com",
    password: "12345678"
  },
  {
    username: "mayaagustina_",
    name: "mayaagustina_",
    email: "mayaagustina_@gmail.com",
    password: "12345678"
  },
  {
    username: "musabkhurshid",
    name: "musabkhurshid",
    email: "musabkhurshid@gmail.com",
    password: "12345678"
  },
  {
    username: "jubin241",
    name: "jubin241",
    email: "jubin241@gmail.com",
    password: "12345678"
  },
  {
    username: "alejandrahurtad",
    name: "alejandrahurtad",
    email: "alejandrahurtad@gmail.com",
    password: "12345678"
  },
  {
    username: "logohype",
    name: "logohype",
    email: "logohype@gmail.com",
    password: "12345678"
  },
  {
    username: "daimonddesign",
    name: "daimonddesign",
    email: "daimonddesign@gmail.com",
    password: "12345678"
  },
  {
    username: "diga_atelier",
    name: "diga_atelier",
    email: "diga_atelier@gmail.com",
    password: "12345678"
  },
  {
    username: "ustaad_ultra",
    name: "ustaad_ultra",
    email: "ustaad_ultra@gmail.com",
    password: "12345678"
  },
  {
    username: "aestheticx",
    name: "aestheticx",
    email: "aestheticx@gmail.com",
    password: "12345678"
  },
  {
    username: "andrisaan",
    name: "andrisaan",
    email: "andrisaan@gmail.com",
    password: "12345678"
  },
  {
    username: "alphastudio7",
    name: "alphastudio7",
    email: "alphastudio7@gmail.com",
    password: "12345678"
  },
  {
    username: "kelly112",
    name: "kelly112",
    email: "kelly112@gmail.com",
    password: "12345678"
  },
  {
    username: "alexa_stonefish",
    name: "alexa_stonefish",
    email: "alexa_stonefish@gmail.com",
    password: "12345678"
  },
  {
    username: "tarunwalia826",
    name: "tarunwalia826",
    email: "tarunwalia826@gmail.com",
    password: "12345678"
  },
  {
    username: "dansanugrah",
    name: "dansanugrah",
    email: "dansanugrah@gmail.com",
    password: "12345678"
  },
  {
    username: "gregyed",
    name: "gregyed",
    email: "gregyed@gmail.com",
    password: "12345678"
  },
  {
    username: "abdulali5",
    name: "abdulali5",
    email: "abdulali5@gmail.com",
    password: "12345678"
  },
  {
    username: "hafifslv",
    name: "hafifslv",
    email: "hafifslv@gmail.com",
    password: "12345678"
  },
  {
    username: "faiq_logos",
    name: "faiq_logos",
    email: "faiq_logos@gmail.com",
    password: "12345678"
  },
  {
    username: "service_logoz",
    name: "service_logoz",
    email: "service_logoz@gmail.com",
    password: "12345678"
  },
  {
    username: "designmelt",
    name: "designmelt",
    email: "designmelt@gmail.com",
    password: "12345678"
  },
  {
    username: "cat__designer",
    name: "cat__designer",
    email: "cat__designer@gmail.com",
    password: "12345678"
  },
  {
    username: "thedesigners007",
    name: "thedesigners007",
    email: "thedesigners007@gmail.com",
    password: "12345678"
  },
  {
    username: "logovibing",
    name: "logovibing",
    email: "logovibing@gmail.com",
    password: "12345678"
  },
  {
    username: "shaharia_s",
    name: "shaharia_s",
    email: "shaharia_s@gmail.com",
    password: "12345678"
  },
  {
    username: "kindness_ideas",
    name: "kindness_ideas",
    email: "kindness_ideas@gmail.com",
    password: "12345678"
  },
  {
    username: "logoferr",
    name: "logoferr",
    email: "logoferr@gmail.com",
    password: "12345678"
  },
  {
    username: "artareq36",
    name: "artareq36",
    email: "artareq36@gmail.com",
    password: "12345678"
  },
  {
    username: "abbatete634",
    name: "abbatete634",
    email: "abbatete634@gmail.com",
    password: "12345678"
  },
  {
    username: "carlosderkaiser",
    name: "carlosderkaiser",
    email: "carlosderkaiser@gmail.com",
    password: "12345678"
  },
  {
    username: "designsforrest",
    name: "designsforrest",
    email: "designsforrest@gmail.com",
    password: "12345678"
  },
  {
    username: "teamxlogos",
    name: "teamxlogos",
    email: "teamxlogos@gmail.com",
    password: "12345678"
  },
  {
    username: "hachlouthaskour",
    name: "hachlouthaskour",
    email: "hachlouthaskour@gmail.com",
    password: "12345678"
  },
  {
    username: "gobindasarka521",
    name: "gobindasarka521",
    email: "gobindasarka521@gmail.com",
    password: "12345678"
  },
  {
    username: "cbhitech",
    name: "cbhitech",
    email: "cbhitech@gmail.com",
    password: "12345678"
  },
  {
    username: "toseefnaser",
    name: "toseefnaser",
    email: "toseefnaser@gmail.com",
    password: "12345678"
  },
  {
    username: "abdullahriaz001",
    name: "abdullahriaz001",
    email: "abdullahriaz001@gmail.com",
    password: "12345678"
  },
  {
    username: "rayaanpromo",
    name: "rayaanpromo",
    email: "rayaanpromo@gmail.com",
    password: "12345678"
  },
  {
    username: "gabrielaashly",
    name: "gabrielaashly",
    email: "gabrielaashly@gmail.com",
    password: "12345678"
  },
  {
    username: "zarawalker",
    name: "zarawalker",
    email: "zarawalker@gmail.com",
    password: "12345678"
  },
  {
    username: "shanmark002",
    name: "shanmark002",
    email: "shanmark002@gmail.com",
    password: "12345678"
  },
  {
    username: "um3rmumtaz",
    name: "um3rmumtaz",
    email: "um3rmumtaz@gmail.com",
    password: "12345678"
  },
  {
    username: "mizanarifin",
    name: "mizanarifin",
    email: "mizanarifin@gmail.com",
    password: "12345678"
  },
  {
    username: "mh_studio00",
    name: "mh_studio00",
    email: "mh_studio00@gmail.com",
    password: "12345678"
  },
  {
    username: "cyber_avanza",
    name: "cyber_avanza",
    email: "cyber_avanza@gmail.com",
    password: "12345678"
  },
  {
    username: "rbp_design",
    name: "rbp_design",
    email: "rbp_design@gmail.com",
    password: "12345678"
  },
  {
    username: "rareety",
    name: "rareety",
    email: "rareety@gmail.com",
    password: "12345678"
  },
  {
    username: "logo_bat81",
    name: "logo_bat81",
    email: "logo_bat81@gmail.com",
    password: "12345678"
  },
  {
    username: "logopost",
    name: "logopost",
    email: "logopost@gmail.com",
    password: "12345678"
  },
  {
    username: "grndr09",
    name: "grndr09",
    email: "grndr09@gmail.com",
    password: "12345678"
  },
  {
    username: "jaspreetsinghsu",
    name: "jaspreetsinghsu",
    email: "jaspreetsinghsu@gmail.com",
    password: "12345678"
  },
  {
    username: "naveenlogos",
    name: "naveenlogos",
    email: "naveenlogos@gmail.com",
    password: "12345678"
  },
  {
    username: "casavirtual",
    name: "casavirtual",
    email: "casavirtual@gmail.com",
    password: "12345678"
  },
  {
    username: "kanwaldesigner",
    name: "kanwaldesigner",
    email: "kanwaldesigner@gmail.com",
    password: "12345678"
  },
  {
    username: "rahilasafdar",
    name: "rahilasafdar",
    email: "rahilasafdar@gmail.com",
    password: "12345678"
  },
  {
    username: "logojiny",
    name: "logojiny",
    email: "logojiny@gmail.com",
    password: "12345678"
  },
  {
    username: "haibroartstudio",
    name: "haibroartstudio",
    email: "haibroartstudio@gmail.com",
    password: "12345678"
  },
  {
    username: "artsantis",
    name: "artsantis",
    email: "artsantis@gmail.com",
    password: "12345678"
  },
  {
    username: "milytorres",
    name: "milytorres",
    email: "milytorres@gmail.com",
    password: "12345678"
  },
  {
    username: "studio_rohan",
    name: "studio_rohan",
    email: "studio_rohan@gmail.com",
    password: "12345678"
  },
  {
    username: "teddy09",
    name: "teddy09",
    email: "teddy09@gmail.com",
    password: "12345678"
  },
  {
    username: "catnip119",
    name: "catnip119",
    email: "catnip119@gmail.com",
    password: "12345678"
  },
  {
    username: "adotstudio",
    name: "adotstudio",
    email: "adotstudio@gmail.com",
    password: "12345678"
  },
  {
    username: "cindyannisa",
    name: "cindyannisa",
    email: "cindyannisa@gmail.com",
    password: "12345678"
  },
  {
    username: "mariakuzeva",
    name: "mariakuzeva",
    email: "mariakuzeva@gmail.com",
    password: "12345678"
  },
  {
    username: "illustrasu",
    name: "illustrasu",
    email: "illustrasu@gmail.com",
    password: "12345678"
  },
  {
    username: "nashkolna",
    name: "nashkolna",
    email: "nashkolna@gmail.com",
    password: "12345678"
  },
  {
    username: "designerturk",
    name: "designerturk",
    email: "designerturk@gmail.com",
    password: "12345678"
  },
  {
    username: "catherinehigh",
    name: "catherinehigh",
    email: "catherinehigh@gmail.com",
    password: "12345678"
  },
  {
    username: "helen_veras",
    name: "helen_veras",
    email: "helen_veras@gmail.com",
    password: "12345678"
  },
  {
    username: "jonathanleyton",
    name: "jonathanleyton",
    email: "jonathanleyton@gmail.com",
    password: "12345678"
  },
  {
    username: "qoqo_graphic",
    name: "qoqo_graphic",
    email: "qoqo_graphic@gmail.com",
    password: "12345678"
  },
  {
    username: "jameschutton",
    name: "jameschutton",
    email: "jameschutton@gmail.com",
    password: "12345678"
  },
  {
    username: "creatyves",
    name: "creatyves",
    email: "creatyves@gmail.com",
    password: "12345678"
  },
  {
    username: "ariel_friass",
    name: "ariel_friass",
    email: "ariel_friass@gmail.com",
    password: "12345678"
  },
  {
    username: "ivanwithvodka",
    name: "ivanwithvodka",
    email: "ivanwithvodka@gmail.com",
    password: "12345678"
  },
  {
    username: "ozguruguz",
    name: "ozguruguz",
    email: "ozguruguz@gmail.com",
    password: "12345678"
  },
  {
    username: "osslo99",
    name: "osslo99",
    email: "osslo99@gmail.com",
    password: "12345678"
  },
  {
    username: "hamjaiu",
    name: "hamjaiu",
    email: "hamjaiu@gmail.com",
    password: "12345678"
  },
  {
    username: "ghostdxart",
    name: "ghostdxart",
    email: "ghostdxart@gmail.com",
    password: "12345678"
  },
  {
    username: "chadwickvo",
    name: "chadwickvo",
    email: "chadwickvo@gmail.com",
    password: "12345678"
  },
  {
    username: "lmxillustration",
    name: "lmxillustration",
    email: "lmxillustration@gmail.com",
    password: "12345678"
  },
  {
    username: "shupeipa",
    name: "shupeipa",
    email: "shupeipa@gmail.com",
    password: "12345678"
  },
  {
    username: "pantelispolit",
    name: "pantelispolit",
    email: "pantelispolit@gmail.com",
    password: "12345678"
  },
  {
    username: "sandrotsk",
    name: "sandrotsk",
    email: "sandrotsk@gmail.com",
    password: "12345678"
  },
  {
    username: "matthewbines",
    name: "matthewbines",
    email: "matthewbines@gmail.com",
    password: "12345678"
  },
  {
    username: "khairulartstuio",
    name: "khairulartstuio",
    email: "khairulartstuio@gmail.com",
    password: "12345678"
  },
  {
    username: "basem_s1",
    name: "basem_s1",
    email: "basem_s1@gmail.com",
    password: "12345678"
  },
  {
    username: "kinglylink",
    name: "kinglylink",
    email: "kinglylink@gmail.com",
    password: "12345678"
  },
  {
    username: "zuroart",
    name: "zuroart",
    email: "zuroart@gmail.com",
    password: "12345678"
  },
  {
    username: "franmr",
    name: "franmr",
    email: "franmr@gmail.com",
    password: "12345678"
  },
  {
    username: "rickdesign01",
    name: "rickdesign01",
    email: "rickdesign01@gmail.com",
    password: "12345678"
  },
  {
    username: "szybkaiokienko",
    name: "szybkaiokienko",
    email: "szybkaiokienko@gmail.com",
    password: "12345678"
  },
  {
    username: "hephaestusart",
    name: "hephaestusart",
    email: "hephaestusart@gmail.com",
    password: "12345678"
  },
  {
    username: "yordastudio",
    name: "yordastudio",
    email: "yordastudio@gmail.com",
    password: "12345678"
  },
  {
    username: "tritonart",
    name: "tritonart",
    email: "tritonart@gmail.com",
    password: "12345678"
  },
  {
    username: "greendrk",
    name: "greendrk",
    email: "greendrk@gmail.com",
    password: "12345678"
  },
  {
    username: "carolinabuiles",
    name: "carolinabuiles",
    email: "carolinabuiles@gmail.com",
    password: "12345678"
  },
  {
    username: "davidericssonn",
    name: "davidericssonn",
    email: "davidericssonn@gmail.com",
    password: "12345678"
  },
  {
    username: "colorzworks",
    name: "colorzworks",
    email: "colorzworks@gmail.com",
    password: "12345678"
  },
  {
    username: "fatahillahrosi",
    name: "fatahillahrosi",
    email: "fatahillahrosi@gmail.com",
    password: "12345678"
  },
  {
    username: "wicak964",
    name: "wicak964",
    email: "wicak964@gmail.com",
    password: "12345678"
  },
  {
    username: "prazetzo_art",
    name: "prazetzo_art",
    email: "prazetzo_art@gmail.com",
    password: "12345678"
  },
  {
    username: "nokudesain",
    name: "nokudesain",
    email: "nokudesain@gmail.com",
    password: "12345678"
  },
  {
    username: "artist_canvas",
    name: "artist_canvas",
    email: "artist_canvas@gmail.com",
    password: "12345678"
  },
  {
    username: "im_jilla",
    name: "im_jilla",
    email: "im_jilla@gmail.com",
    password: "12345678"
  },
  {
    username: "arunkumar600",
    name: "arunkumar600",
    email: "arunkumar600@gmail.com",
    password: "12345678"
  },
  {
    username: "xekoluan",
    name: "xekoluan",
    email: "xekoluan@gmail.com",
    password: "12345678"
  },
  {
    username: "loddigex",
    name: "loddigex",
    email: "loddigex@gmail.com",
    password: "12345678"
  },
  {
    username: "senrouk_arts",
    name: "senrouk_arts",
    email: "senrouk_arts@gmail.com",
    password: "12345678"
  },
  {
    username: "efa_finearts",
    name: "efa_finearts",
    email: "efa_finearts@gmail.com",
    password: "12345678"
  },
  {
    username: "conniedragon",
    name: "conniedragon",
    email: "conniedragon@gmail.com",
    password: "12345678"
  },
  {
    username: "artistrywings",
    name: "artistrywings",
    email: "artistrywings@gmail.com",
    password: "12345678"
  },
  {
    username: "minaanandag",
    name: "minaanandag",
    email: "minaanandag@gmail.com",
    password: "12345678"
  },
  {
    username: "jadeartzz",
    name: "jadeartzz",
    email: "jadeartzz@gmail.com",
    password: "12345678"
  },
  {
    username: "khusnulhayat",
    name: "khusnulhayat",
    email: "khusnulhayat@gmail.com",
    password: "12345678"
  },
  {
    username: "fmuqodas",
    name: "fmuqodas",
    email: "fmuqodas@gmail.com",
    password: "12345678"
  },
  {
    username: "hadesignn",
    name: "hadesignn",
    email: "hadesignn@gmail.com",
    password: "12345678"
  },
  {
    username: "artsmate",
    name: "artsmate",
    email: "artsmate@gmail.com",
    password: "12345678"
  },
  {
    username: "art_prophet",
    name: "art_prophet",
    email: "art_prophet@gmail.com",
    password: "12345678"
  },
  {
    username: "nudratdesigner",
    name: "nudratdesigner",
    email: "nudratdesigner@gmail.com",
    password: "12345678"
  },
  {
    username: "sanjali91",
    name: "sanjali91",
    email: "sanjali91@gmail.com",
    password: "12345678"
  },
  {
    username: "galichws",
    name: "galichws",
    email: "galichws@gmail.com",
    password: "12345678"
  },
  {
    username: "frankocean922",
    name: "frankocean922",
    email: "frankocean922@gmail.com",
    password: "12345678"
  },
  {
    username: "adriandragne",
    name: "adriandragne",
    email: "adriandragne@gmail.com",
    password: "12345678"
  },
  {
    username: "tndillustration",
    name: "tndillustration",
    email: "tndillustration@gmail.com",
    password: "12345678"
  },
  {
    username: "alfitomedly",
    name: "alfitomedly",
    email: "alfitomedly@gmail.com",
    password: "12345678"
  },
  {
    username: "dazzlingdezigns",
    name: "dazzlingdezigns",
    email: "dazzlingdezigns@gmail.com",
    password: "12345678"
  },
  {
    username: "gimalez_an",
    name: "gimalez_an",
    email: "gimalez_an@gmail.com",
    password: "12345678"
  },
  {
    username: "jaymodesigns",
    name: "jaymodesigns",
    email: "jaymodesigns@gmail.com",
    password: "12345678"
  },
  {
    username: "henryez",
    name: "henryez",
    email: "henryez@gmail.com",
    password: "12345678"
  },
  {
    username: "demonpaimon",
    name: "demonpaimon",
    email: "demonpaimon@gmail.com",
    password: "12345678"
  },
  {
    username: "bara42",
    name: "bara42",
    email: "bara42@gmail.com",
    password: "12345678"
  },
  {
    username: "mogumash",
    name: "mogumash",
    email: "mogumash@gmail.com",
    password: "12345678"
  },
  {
    username: "khukukhuku",
    name: "khukukhuku",
    email: "khukukhuku@gmail.com",
    password: "12345678"
  },
  {
    username: "anesthesiia",
    name: "anesthesiia",
    email: "anesthesiia@gmail.com",
    password: "12345678"
  },
  {
    username: "pahrizrhendrik",
    name: "pahrizrhendrik",
    email: "pahrizrhendrik@gmail.com",
    password: "12345678"
  },
  {
    username: "dibyoshree0",
    name: "dibyoshree0",
    email: "dibyoshree0@gmail.com",
    password: "12345678"
  },
  {
    username: "tomlinsondaniel",
    name: "tomlinsondaniel",
    email: "tomlinsondaniel@gmail.com",
    password: "12345678"
  },
  {
    username: "jeillustrations",
    name: "jeillustrations",
    email: "jeillustrations@gmail.com",
    password: "12345678"
  },
  {
    username: "nicoletadabija",
    name: "nicoletadabija",
    email: "nicoletadabija@gmail.com",
    password: "12345678"
  },
  {
    username: "shawnd1988",
    name: "shawnd1988",
    email: "shawnd1988@gmail.com",
    password: "12345678"
  },
  {
    username: "huangja",
    name: "huangja",
    email: "huangja@gmail.com",
    password: "12345678"
  },
  {
    username: "cernnunosss",
    name: "cernnunosss",
    email: "cernnunosss@gmail.com",
    password: "12345678"
  },
  {
    username: "alexvintagee",
    name: "alexvintagee",
    email: "alexvintagee@gmail.com",
    password: "12345678"
  },
  {
    username: "hannisdjauhari",
    name: "hannisdjauhari",
    email: "hannisdjauhari@gmail.com",
    password: "12345678"
  },
  {
    username: "soanala",
    name: "soanala",
    email: "soanala@gmail.com",
    password: "12345678"
  },
  {
    username: "vitalii_h",
    name: "vitalii_h",
    email: "vitalii_h@gmail.com",
    password: "12345678"
  },
  {
    username: "shawnlart",
    name: "shawnlart",
    email: "shawnlart@gmail.com",
    password: "12345678"
  },
  {
    username: "sohisoli",
    name: "sohisoli",
    email: "sohisoli@gmail.com",
    password: "12345678"
  },
  {
    username: "doantrang",
    name: "doantrang",
    email: "doantrang@gmail.com",
    password: "12345678"
  },
  {
    username: "lucasalvaro",
    name: "lucasalvaro",
    email: "lucasalvaro@gmail.com",
    password: "12345678"
  },
  {
    username: "nikhilkumar349",
    name: "nikhilkumar349",
    email: "nikhilkumar349@gmail.com",
    password: "12345678"
  },
  {
    username: "baguspratama",
    name: "baguspratama",
    email: "baguspratama@gmail.com",
    password: "12345678"
  },
  {
    username: "hoangtejieng",
    name: "hoangtejieng",
    email: "hoangtejieng@gmail.com",
    password: "12345678"
  },
  {
    username: "kateloz",
    name: "kateloz",
    email: "kateloz@gmail.com",
    password: "12345678"
  },
  {
    username: "tommoreno747",
    name: "tommoreno747",
    email: "tommoreno747@gmail.com",
    password: "12345678"
  },
  {
    username: "dinhhamy",
    name: "dinhhamy",
    email: "dinhhamy@gmail.com",
    password: "12345678"
  },
  {
    username: "dariaromanova",
    name: "dariaromanova",
    email: "dariaromanova@gmail.com",
    password: "12345678"
  },
  {
    username: "ouranos_megas",
    name: "ouranos_megas",
    email: "ouranos_megas@gmail.com",
    password: "12345678"
  },
  {
    username: "buyansanjaaart",
    name: "buyansanjaaart",
    email: "buyansanjaaart@gmail.com",
    password: "12345678"
  },
  {
    username: "leonardartwork",
    name: "leonardartwork",
    email: "leonardartwork@gmail.com",
    password: "12345678"
  },
  {
    username: "olgasiegel",
    name: "olgasiegel",
    email: "olgasiegel@gmail.com",
    password: "12345678"
  },
  {
    username: "u_tech",
    name: "u_tech",
    email: "u_tech@gmail.com",
    password: "12345678"
  },
  {
    username: "fldesigns",
    name: "fldesigns",
    email: "fldesigns@gmail.com",
    password: "12345678"
  },
  {
    username: "soso112429",
    name: "soso112429",
    email: "soso112429@gmail.com",
    password: "12345678"
  },
  {
    username: "whiteghul",
    name: "whiteghul",
    email: "whiteghul@gmail.com",
    password: "12345678"
  },
  {
    username: "borisut",
    name: "borisut",
    email: "borisut@gmail.com",
    password: "12345678"
  },
  {
    username: "hiraarshad",
    name: "hiraarshad",
    email: "hiraarshad@gmail.com",
    password: "12345678"
  },
  {
    username: "slkcool",
    name: "slkcool",
    email: "slkcool@gmail.com",
    password: "12345678"
  },
  {
    username: "armstranger",
    name: "armstranger",
    email: "armstranger@gmail.com",
    password: "12345678"
  },
  {
    username: "xuanthai2200",
    name: "xuanthai2200",
    email: "xuanthai2200@gmail.com",
    password: "12345678"
  },
  {
    username: "creativedesgnin",
    name: "creativedesgnin",
    email: "creativedesgnin@gmail.com",
    password: "12345678"
  },
  {
    username: "atiksugiwara",
    name: "atiksugiwara",
    email: "atiksugiwara@gmail.com",
    password: "12345678"
  },
  {
    username: "apexinfinityg",
    name: "apexinfinityg",
    email: "apexinfinityg@gmail.com",
    password: "12345678"
  },
  {
    username: "amberrblue",
    name: "amberrblue",
    email: "amberrblue@gmail.com",
    password: "12345678"
  },
  {
    username: "umairjasra",
    name: "umairjasra",
    email: "umairjasra@gmail.com",
    password: "12345678"
  },
  {
    username: "shellkating",
    name: "shellkating",
    email: "shellkating@gmail.com",
    password: "12345678"
  },
  {
    username: "badrasketch",
    name: "badrasketch",
    email: "badrasketch@gmail.com",
    password: "12345678"
  },
  {
    username: "ibnulaffan",
    name: "ibnulaffan",
    email: "ibnulaffan@gmail.com",
    password: "12345678"
  },
  {
    username: "strawberrique",
    name: "strawberrique",
    email: "strawberrique@gmail.com",
    password: "12345678"
  },
  {
    username: "teddyfone",
    name: "teddyfone",
    email: "teddyfone@gmail.com",
    password: "12345678"
  },
  {
    username: "grimsloki",
    name: "grimsloki",
    email: "grimsloki@gmail.com",
    password: "12345678"
  },
  {
    username: "thaithank",
    name: "thaithank",
    email: "thaithank@gmail.com",
    password: "12345678"
  },
  {
    username: "beng312",
    name: "beng312",
    email: "beng312@gmail.com",
    password: "12345678"
  },
  {
    username: "study3_2d",
    name: "study3_2d",
    email: "study3_2d@gmail.com",
    password: "12345678"
  },
  {
    username: "mombaedo",
    name: "mombaedo",
    email: "mombaedo@gmail.com",
    password: "12345678"
  },
  {
    username: "zanydesigner",
    name: "zanydesigner",
    email: "zanydesigner@gmail.com",
    password: "12345678"
  },
  {
    username: "nadezhda_trophy",
    name: "nadezhda_trophy",
    email: "nadezhda_trophy@gmail.com",
    password: "12345678"
  },
  {
    username: "yuriiflics",
    name: "yuriiflics",
    email: "yuriiflics@gmail.com",
    password: "12345678"
  },
  {
    username: "emilianoff",
    name: "emilianoff",
    email: "emilianoff@gmail.com",
    password: "12345678"
  },
  {
    username: "arofrahman",
    name: "arofrahman",
    email: "arofrahman@gmail.com",
    password: "12345678"
  },
  {
    username: "bee_creation",
    name: "bee_creation",
    email: "bee_creation@gmail.com",
    password: "12345678"
  },
  {
    username: "gongor32",
    name: "gongor32",
    email: "gongor32@gmail.com",
    password: "12345678"
  },
  {
    username: "izulrahman",
    name: "izulrahman",
    email: "izulrahman@gmail.com",
    password: "12345678"
  },
  {
    username: "teoaladashvili",
    name: "teoaladashvili",
    email: "teoaladashvili@gmail.com",
    password: "12345678"
  },
  {
    username: "jeanne_lolness",
    name: "jeanne_lolness",
    email: "jeanne_lolness@gmail.com",
    password: "12345678"
  },
  {
    username: "luccanistic",
    name: "luccanistic",
    email: "luccanistic@gmail.com",
    password: "12345678"
  },
  {
    username: "creativesetu22",
    name: "creativesetu22",
    email: "creativesetu22@gmail.com",
    password: "12345678"
  },
  {
    username: "irinaclescenco",
    name: "irinaclescenco",
    email: "irinaclescenco@gmail.com",
    password: "12345678"
  },
  {
    username: "diantriyasa",
    name: "diantriyasa",
    email: "diantriyasa@gmail.com",
    password: "12345678"
  },
  {
    username: "kindrawx22_",
    name: "kindrawx22_",
    email: "kindrawx22_@gmail.com",
    password: "12345678"
  },
  {
    username: "pavlo_paka",
    name: "pavlo_paka",
    email: "pavlo_paka@gmail.com",
    password: "12345678"
  },
  {
    username: "yozart",
    name: "yozart",
    email: "yozart@gmail.com",
    password: "12345678"
  },
  {
    username: "raquelink",
    name: "raquelink",
    email: "raquelink@gmail.com",
    password: "12345678"
  },
  {
    username: "segoshvishna",
    name: "segoshvishna",
    email: "segoshvishna@gmail.com",
    password: "12345678"
  },
  {
    username: "dickytrd",
    name: "dickytrd",
    email: "dickytrd@gmail.com",
    password: "12345678"
  },
  {
    username: "kmsnsk_std",
    name: "kmsnsk_std",
    email: "kmsnsk_std@gmail.com",
    password: "12345678"
  },
  {
    username: "albinoartnd",
    name: "albinoartnd",
    email: "albinoartnd@gmail.com",
    password: "12345678"
  },
  {
    username: "yvren22",
    name: "yvren22",
    email: "yvren22@gmail.com",
    password: "12345678"
  },
  {
    username: "ahsansiddiqui10",
    name: "ahsansiddiqui10",
    email: "ahsansiddiqui10@gmail.com",
    password: "12345678"
  },
  {
    username: "bananasboy",
    name: "bananasboy",
    email: "bananasboy@gmail.com",
    password: "12345678"
  },
  {
    username: "nummax",
    name: "nummax",
    email: "nummax@gmail.com",
    password: "12345678"
  },
  {
    username: "uven_arts",
    name: "uven_arts",
    email: "uven_arts@gmail.com",
    password: "12345678"
  },
  {
    username: "mihailo147",
    name: "mihailo147",
    email: "mihailo147@gmail.com",
    password: "12345678"
  },
  {
    username: "aliraza311",
    name: "aliraza311",
    email: "aliraza311@gmail.com",
    password: "12345678"
  },
  {
    username: "dungnguyen2705",
    name: "dungnguyen2705",
    email: "dungnguyen2705@gmail.com",
    password: "12345678"
  },
  {
    username: "nizar86",
    name: "nizar86",
    email: "nizar86@gmail.com",
    password: "12345678"
  },
  {
    username: "asugardo",
    name: "asugardo",
    email: "asugardo@gmail.com",
    password: "12345678"
  },
  {
    username: "morganphoont",
    name: "morganphoont",
    email: "morganphoont@gmail.com",
    password: "12345678"
  },
  {
    username: "vomf902",
    name: "vomf902",
    email: "vomf902@gmail.com",
    password: "12345678"
  },
  {
    username: "inna_sketches",
    name: "inna_sketches",
    email: "inna_sketches@gmail.com",
    password: "12345678"
  },
  {
    username: "vaishali____",
    name: "vaishali____",
    email: "vaishali____@gmail.com",
    password: "12345678"
  },
  {
    username: "anouardjoua",
    name: "anouardjoua",
    email: "anouardjoua@gmail.com",
    password: "12345678"
  },
  {
    username: "afshinaminiart",
    name: "afshinaminiart",
    email: "afshinaminiart@gmail.com",
    password: "12345678"
  },
  {
    username: "metal_art",
    name: "metal_art",
    email: "metal_art@gmail.com",
    password: "12345678"
  },
  {
    username: "valentinae4",
    name: "valentinae4",
    email: "valentinae4@gmail.com",
    password: "12345678"
  },
  {
    username: "isaiaspaz",
    name: "isaiaspaz",
    email: "isaiaspaz@gmail.com",
    password: "12345678"
  },
  {
    username: "iniapink",
    name: "iniapink",
    email: "iniapink@gmail.com",
    password: "12345678"
  },
  {
    username: "bandara_art",
    name: "bandara_art",
    email: "bandara_art@gmail.com",
    password: "12345678"
  },
  {
    username: "zievonya",
    name: "zievonya",
    email: "zievonya@gmail.com",
    password: "12345678"
  },
  {
    username: "gnewwws",
    name: "gnewwws",
    email: "gnewwws@gmail.com",
    password: "12345678"
  },
  {
    username: "rancvv1619",
    name: "rancvv1619",
    email: "rancvv1619@gmail.com",
    password: "12345678"
  },
  {
    username: "a_architects",
    name: "a_architects",
    email: "a_architects@gmail.com",
    password: "12345678"
  },
  {
    username: "mansithafdo",
    name: "mansithafdo",
    email: "mansithafdo@gmail.com",
    password: "12345678"
  },
  {
    username: "andryawan",
    name: "andryawan",
    email: "andryawan@gmail.com",
    password: "12345678"
  },
  {
    username: "shibasigma",
    name: "shibasigma",
    email: "shibasigma@gmail.com",
    password: "12345678"
  },
  {
    username: "noman114",
    name: "noman114",
    email: "noman114@gmail.com",
    password: "12345678"
  },
  {
    username: "weerasingheindi",
    name: "weerasingheindi",
    email: "weerasingheindi@gmail.com",
    password: "12345678"
  },
  {
    username: "bokasana",
    name: "bokasana",
    email: "bokasana@gmail.com",
    password: "12345678"
  },
  {
    username: "adegraphics01",
    name: "adegraphics01",
    email: "adegraphics01@gmail.com",
    password: "12345678"
  },
  {
    username: "shubahmghonge",
    name: "shubahmghonge",
    email: "shubahmghonge@gmail.com",
    password: "12345678"
  },
  {
    username: "atacan97",
    name: "atacan97",
    email: "atacan97@gmail.com",
    password: "12345678"
  },
  {
    username: "aleksandrsstavi",
    name: "aleksandrsstavi",
    email: "aleksandrsstavi@gmail.com",
    password: "12345678"
  },
  {
    username: "drawingexpert_5",
    name: "drawingexpert_5",
    email: "drawingexpert_5@gmail.com",
    password: "12345678"
  },
  {
    username: "samiramakroum",
    name: "samiramakroum",
    email: "samiramakroum@gmail.com",
    password: "12345678"
  },
  {
    username: "extreeme33",
    name: "extreeme33",
    email: "extreeme33@gmail.com",
    password: "12345678"
  },
  {
    username: "imkraken",
    name: "imkraken",
    email: "imkraken@gmail.com",
    password: "12345678"
  },
  {
    username: "iwanttodrawnow",
    name: "iwanttodrawnow",
    email: "iwanttodrawnow@gmail.com",
    password: "12345678"
  },
  {
    username: "artechneo",
    name: "artechneo",
    email: "artechneo@gmail.com",
    password: "12345678"
  },
  {
    username: "kissa23",
    name: "kissa23",
    email: "kissa23@gmail.com",
    password: "12345678"
  },
  {
    username: "konco",
    name: "konco",
    email: "konco@gmail.com",
    password: "12345678"
  },
  {
    username: "mahardika_a_",
    name: "mahardika_a_",
    email: "mahardika_a_@gmail.com",
    password: "12345678"
  },
  {
    username: "alansyah",
    name: "alansyah",
    email: "alansyah@gmail.com",
    password: "12345678"
  },
  {
    username: "shiyukidraws",
    name: "shiyukidraws",
    email: "shiyukidraws@gmail.com",
    password: "12345678"
  },
  {
    username: "husainanwar25",
    name: "husainanwar25",
    email: "husainanwar25@gmail.com",
    password: "12345678"
  },
  {
    username: "mairys_jasel",
    name: "mairys_jasel",
    email: "mairys_jasel@gmail.com",
    password: "12345678"
  },
  {
    username: "designers306",
    name: "designers306",
    email: "designers306@gmail.com",
    password: "12345678"
  },
  {
    username: "nekosa0",
    name: "nekosa0",
    email: "nekosa0@gmail.com",
    password: "12345678"
  },
  {
    username: "midsketcher",
    name: "midsketcher",
    email: "midsketcher@gmail.com",
    password: "12345678"
  },
  {
    username: "v_garcia",
    name: "v_garcia",
    email: "v_garcia@gmail.com",
    password: "12345678"
  },
  {
    username: "kristinekriko",
    name: "kristinekriko",
    email: "kristinekriko@gmail.com",
    password: "12345678"
  },
  {
    username: "moozart_studio",
    name: "moozart_studio",
    email: "moozart_studio@gmail.com",
    password: "12345678"
  },
  {
    username: "digitalhandart",
    name: "digitalhandart",
    email: "digitalhandart@gmail.com",
    password: "12345678"
  },
  {
    username: "gngaston",
    name: "gngaston",
    email: "gngaston@gmail.com",
    password: "12345678"
  },
  {
    username: "kokoan",
    name: "kokoan",
    email: "kokoan@gmail.com",
    password: "12345678"
  },
  {
    username: "i_drawing",
    name: "i_drawing",
    email: "i_drawing@gmail.com",
    password: "12345678"
  },
  {
    username: "irvanramdani",
    name: "irvanramdani",
    email: "irvanramdani@gmail.com",
    password: "12345678"
  },
  {
    username: "christyj27",
    name: "christyj27",
    email: "christyj27@gmail.com",
    password: "12345678"
  },
  {
    username: "aleksandrafedor",
    name: "aleksandrafedor",
    email: "aleksandrafedor@gmail.com",
    password: "12345678"
  },
  {
    username: "hawr50",
    name: "hawr50",
    email: "hawr50@gmail.com",
    password: "12345678"
  },
  {
    username: "igorolszewski27",
    name: "igorolszewski27",
    email: "igorolszewski27@gmail.com",
    password: "12345678"
  },
  {
    username: "yeonjewely",
    name: "yeonjewely",
    email: "yeonjewely@gmail.com",
    password: "12345678"
  },
  {
    username: "darkyrie",
    name: "darkyrie",
    email: "darkyrie@gmail.com",
    password: "12345678"
  },
  {
    username: "anastasiia_os",
    name: "anastasiia_os",
    email: "anastasiia_os@gmail.com",
    password: "12345678"
  },
  {
    username: "unalanac",
    name: "unalanac",
    email: "unalanac@gmail.com",
    password: "12345678"
  },
  {
    username: "junxiangy",
    name: "junxiangy",
    email: "junxiangy@gmail.com",
    password: "12345678"
  },
  {
    username: "agosgarabato",
    name: "agosgarabato",
    email: "agosgarabato@gmail.com",
    password: "12345678"
  },
  {
    username: "lucagranai",
    name: "lucagranai",
    email: "lucagranai@gmail.com",
    password: "12345678"
  },
  {
    username: "lorellein",
    name: "lorellein",
    email: "lorellein@gmail.com",
    password: "12345678"
  },
  {
    username: "mayoroptics",
    name: "mayoroptics",
    email: "mayoroptics@gmail.com",
    password: "12345678"
  },
  {
    username: "archdesignzz",
    name: "archdesignzz",
    email: "archdesignzz@gmail.com",
    password: "12345678"
  },
  {
    username: "archstudio1",
    name: "archstudio1",
    email: "archstudio1@gmail.com",
    password: "12345678"
  },
  {
    username: "worriedfool",
    name: "worriedfool",
    email: "worriedfool@gmail.com",
    password: "12345678"
  },
  {
    username: "bhagya_m",
    name: "bhagya_m",
    email: "bhagya_m@gmail.com",
    password: "12345678"
  },
  {
    username: "josefinx3",
    name: "josefinx3",
    email: "josefinx3@gmail.com",
    password: "12345678"
  },
  {
    username: "bunnipie",
    name: "bunnipie",
    email: "bunnipie@gmail.com",
    password: "12345678"
  },
  {
    username: "sweeetbee",
    name: "sweeetbee",
    email: "sweeetbee@gmail.com",
    password: "12345678"
  },
  {
    username: "zuino0chi1",
    name: "zuino0chi1",
    email: "zuino0chi1@gmail.com",
    password: "12345678"
  },
  {
    username: "indraladrawing",
    name: "indraladrawing",
    email: "indraladrawing@gmail.com",
    password: "12345678"
  },
  {
    username: "tatan_grinding",
    name: "tatan_grinding",
    email: "tatan_grinding@gmail.com",
    password: "12345678"
  },
  {
    username: "artjuli",
    name: "artjuli",
    email: "artjuli@gmail.com",
    password: "12345678"
  },
  {
    username: "anyashch",
    name: "anyashch",
    email: "anyashch@gmail.com",
    password: "12345678"
  },
  {
    username: "elena_nazarova",
    name: "elena_nazarova",
    email: "elena_nazarova@gmail.com",
    password: "12345678"
  },
  {
    username: "sudheekshaa",
    name: "sudheekshaa",
    email: "sudheekshaa@gmail.com",
    password: "12345678"
  },
  {
    username: "matteonigro",
    name: "matteonigro",
    email: "matteonigro@gmail.com",
    password: "12345678"
  },
  {
    username: "nimshan12",
    name: "nimshan12",
    email: "nimshan12@gmail.com",
    password: "12345678"
  },
  {
    username: "laydakarabulut",
    name: "laydakarabulut",
    email: "laydakarabulut@gmail.com",
    password: "12345678"
  },
  {
    username: "drkimdin",
    name: "drkimdin",
    email: "drkimdin@gmail.com",
    password: "12345678"
  },
  {
    username: "moeenrajput_",
    name: "moeenrajput_",
    email: "moeenrajput_@gmail.com",
    password: "12345678"
  },
  {
    username: "hnmptr",
    name: "hnmptr",
    email: "hnmptr@gmail.com",
    password: "12345678"
  },
  {
    username: "chuchazo",
    name: "chuchazo",
    email: "chuchazo@gmail.com",
    password: "12345678"
  },
  {
    username: "artworkking",
    name: "artworkking",
    email: "artworkking@gmail.com",
    password: "12345678"
  },
  {
    username: "aanme91",
    name: "aanme91",
    email: "aanme91@gmail.com",
    password: "12345678"
  },
  {
    username: "radwin_hsu",
    name: "radwin_hsu",
    email: "radwin_hsu@gmail.com",
    password: "12345678"
  },
  {
    username: "username4656",
    name: "username4656",
    email: "username4656@gmail.com",
    password: "12345678"
  },
  {
    username: "kid_kimono",
    name: "kid_kimono",
    email: "kid_kimono@gmail.com",
    password: "12345678"
  },
  {
    username: "marcotiberti",
    name: "marcotiberti",
    email: "marcotiberti@gmail.com",
    password: "12345678"
  },
  {
    username: "rizkypongdatu",
    name: "rizkypongdatu",
    email: "rizkypongdatu@gmail.com",
    password: "12345678"
  },
  {
    username: "galaartcome",
    name: "galaartcome",
    email: "galaartcome@gmail.com",
    password: "12345678"
  },
  {
    username: "asankabn",
    name: "asankabn",
    email: "asankabn@gmail.com",
    password: "12345678"
  },
  {
    username: "zahidpainter",
    name: "zahidpainter",
    email: "zahidpainter@gmail.com",
    password: "12345678"
  },
  {
    username: "jeanhinostroza2",
    name: "jeanhinostroza2",
    email: "jeanhinostroza2@gmail.com",
    password: "12345678"
  },
  {
    username: "hira4art",
    name: "hira4art",
    email: "hira4art@gmail.com",
    password: "12345678"
  },
  {
    username: "hammadkarim7911",
    name: "hammadkarim7911",
    email: "hammadkarim7911@gmail.com",
    password: "12345678"
  },
  {
    username: "tumpa01756",
    name: "tumpa01756",
    email: "tumpa01756@gmail.com",
    password: "12345678"
  },
  {
    username: "chaloupe",
    name: "chaloupe",
    email: "chaloupe@gmail.com",
    password: "12345678"
  },
  {
    username: "najlakay",
    name: "najlakay",
    email: "najlakay@gmail.com",
    password: "12345678"
  },
  {
    username: "sibawaih",
    name: "sibawaih",
    email: "sibawaih@gmail.com",
    password: "12345678"
  },
  {
    username: "anrilight",
    name: "anrilight",
    email: "anrilight@gmail.com",
    password: "12345678"
  },
  {
    username: "nikhilaanil",
    name: "nikhilaanil",
    email: "nikhilaanil@gmail.com",
    password: "12345678"
  },
  {
    username: "masyhurizal",
    name: "masyhurizal",
    email: "masyhurizal@gmail.com",
    password: "12345678"
  },
  {
    username: "ishanishan5",
    name: "ishanishan5",
    email: "ishanishan5@gmail.com",
    password: "12345678"
  },
  {
    username: "cartoonizeart",
    name: "cartoonizeart",
    email: "cartoonizeart@gmail.com",
    password: "12345678"
  },
  {
    username: "oleksii94",
    name: "oleksii94",
    email: "oleksii94@gmail.com",
    password: "12345678"
  },
  {
    username: "yellowcandies",
    name: "yellowcandies",
    email: "yellowcandies@gmail.com",
    password: "12345678"
  },
  {
    username: "boryskuzenko",
    name: "boryskuzenko",
    email: "boryskuzenko@gmail.com",
    password: "12345678"
  },
  {
    username: "garylarts",
    name: "garylarts",
    email: "garylarts@gmail.com",
    password: "12345678"
  },
  {
    username: "talehuntdesign",
    name: "talehuntdesign",
    email: "talehuntdesign@gmail.com",
    password: "12345678"
  },
  {
    username: "gab_grafik",
    name: "gab_grafik",
    email: "gab_grafik@gmail.com",
    password: "12345678"
  },
  {
    username: "crisshasart",
    name: "crisshasart",
    email: "crisshasart@gmail.com",
    password: "12345678"
  },
  {
    username: "samuelebs",
    name: "samuelebs",
    email: "samuelebs@gmail.com",
    password: "12345678"
  },
  {
    username: "mulanjull",
    name: "mulanjull",
    email: "mulanjull@gmail.com",
    password: "12345678"
  },
  {
    username: "keiko_reiko",
    name: "keiko_reiko",
    email: "keiko_reiko@gmail.com",
    password: "12345678"
  },
  {
    username: "vhiente_std",
    name: "vhiente_std",
    email: "vhiente_std@gmail.com",
    password: "12345678"
  },
  {
    username: "sasongkoanis",
    name: "sasongkoanis",
    email: "sasongkoanis@gmail.com",
    password: "12345678"
  },
  {
    username: "gusan0",
    name: "gusan0",
    email: "gusan0@gmail.com",
    password: "12345678"
  },
  {
    username: "alba1993",
    name: "alba1993",
    email: "alba1993@gmail.com",
    password: "12345678"
  },
  {
    username: "rampungin",
    name: "rampungin",
    email: "rampungin@gmail.com",
    password: "12345678"
  },
  {
    username: "artsuroo",
    name: "artsuroo",
    email: "artsuroo@gmail.com",
    password: "12345678"
  },
  {
    username: "beebel",
    name: "beebel",
    email: "beebel@gmail.com",
    password: "12345678"
  },
  {
    username: "angela_depaolis",
    name: "angela_depaolis",
    email: "angela_depaolis@gmail.com",
    password: "12345678"
  },
  {
    username: "ezemenendez",
    name: "ezemenendez",
    email: "ezemenendez@gmail.com",
    password: "12345678"
  },
  {
    username: "kitsunekei1",
    name: "kitsunekei1",
    email: "kitsunekei1@gmail.com",
    password: "12345678"
  },
  {
    username: "designsbyvic",
    name: "designsbyvic",
    email: "designsbyvic@gmail.com",
    password: "12345678"
  },
  {
    username: "chocologicalart",
    name: "chocologicalart",
    email: "chocologicalart@gmail.com",
    password: "12345678"
  },
  {
    username: "fantasy_factory",
    name: "fantasy_factory",
    email: "fantasy_factory@gmail.com",
    password: "12345678"
  },
  {
    username: "prodesign47",
    name: "prodesign47",
    email: "prodesign47@gmail.com",
    password: "12345678"
  },
  {
    username: "thunderderder",
    name: "thunderderder",
    email: "thunderderder@gmail.com",
    password: "12345678"
  },
  {
    username: "aidedbinkie",
    name: "aidedbinkie",
    email: "aidedbinkie@gmail.com",
    password: "12345678"
  },
  {
    username: "inibudi_studio",
    name: "inibudi_studio",
    email: "inibudi_studio@gmail.com",
    password: "12345678"
  },
  {
    username: "farhannursahal",
    name: "farhannursahal",
    email: "farhannursahal@gmail.com",
    password: "12345678"
  },
  {
    username: "miautasworkshop",
    name: "miautasworkshop",
    email: "miautasworkshop@gmail.com",
    password: "12345678"
  },
  {
    username: "spidericks",
    name: "spidericks",
    email: "spidericks@gmail.com",
    password: "12345678"
  },
  {
    username: "souramine",
    name: "souramine",
    email: "souramine@gmail.com",
    password: "12345678"
  },
  {
    username: "andch24",
    name: "andch24",
    email: "andch24@gmail.com",
    password: "12345678"
  },
  {
    username: "sabzdunz",
    name: "sabzdunz",
    email: "sabzdunz@gmail.com",
    password: "12345678"
  },
  {
    username: "ardhanipm",
    name: "ardhanipm",
    email: "ardhanipm@gmail.com",
    password: "12345678"
  },
  {
    username: "lovepixels",
    name: "lovepixels",
    email: "lovepixels@gmail.com",
    password: "12345678"
  },
  {
    username: "stharana",
    name: "stharana",
    email: "stharana@gmail.com",
    password: "12345678"
  },
  {
    username: "siververis",
    name: "siververis",
    email: "siververis@gmail.com",
    password: "12345678"
  },
  {
    username: "vedace_",
    name: "vedace_",
    email: "vedace_@gmail.com",
    password: "12345678"
  },
  {
    username: "peachyyypie",
    name: "peachyyypie",
    email: "peachyyypie@gmail.com",
    password: "12345678"
  },
  {
    username: "holejohn",
    name: "holejohn",
    email: "holejohn@gmail.com",
    password: "12345678"
  },
  {
    username: "cartoond12",
    name: "cartoond12",
    email: "cartoond12@gmail.com",
    password: "12345678"
  },
  {
    username: "firmanhatibu",
    name: "firmanhatibu",
    email: "firmanhatibu@gmail.com",
    password: "12345678"
  },
  {
    username: "illustrate_vnzl",
    name: "illustrate_vnzl",
    email: "illustrate_vnzl@gmail.com",
    password: "12345678"
  },
  {
    username: "galihwindu",
    name: "galihwindu",
    email: "galihwindu@gmail.com",
    password: "12345678"
  },
  {
    username: "mariabirigui",
    name: "mariabirigui",
    email: "mariabirigui@gmail.com",
    password: "12345678"
  },
  {
    username: "pigeonpi",
    name: "pigeonpi",
    email: "pigeonpi@gmail.com",
    password: "12345678"
  },
  {
    username: "bravebirdie",
    name: "bravebirdie",
    email: "bravebirdie@gmail.com",
    password: "12345678"
  },
  {
    username: "supersienar",
    name: "supersienar",
    email: "supersienar@gmail.com",
    password: "12345678"
  },
  {
    username: "riantuk",
    name: "riantuk",
    email: "riantuk@gmail.com",
    password: "12345678"
  },
  {
    username: "tamagonstudio",
    name: "tamagonstudio",
    email: "tamagonstudio@gmail.com",
    password: "12345678"
  },
  {
    username: "tnhs_project",
    name: "tnhs_project",
    email: "tnhs_project@gmail.com",
    password: "12345678"
  },
  {
    username: "damsonfox",
    name: "damsonfox",
    email: "damsonfox@gmail.com",
    password: "12345678"
  },
  {
    username: "studiogenic",
    name: "studiogenic",
    email: "studiogenic@gmail.com",
    password: "12345678"
  },
  {
    username: "meow_bug",
    name: "meow_bug",
    email: "meow_bug@gmail.com",
    password: "12345678"
  },
  {
    username: "zulfandesignart",
    name: "zulfandesignart",
    email: "zulfandesignart@gmail.com",
    password: "12345678"
  },
  {
    username: "davroave",
    name: "davroave",
    email: "davroave@gmail.com",
    password: "12345678"
  },
  {
    username: "crayonshd",
    name: "crayonshd",
    email: "crayonshd@gmail.com",
    password: "12345678"
  },
  {
    username: "sweetmooart",
    name: "sweetmooart",
    email: "sweetmooart@gmail.com",
    password: "12345678"
  },
  {
    username: "irkurniadi",
    name: "irkurniadi",
    email: "irkurniadi@gmail.com",
    password: "12345678"
  },
  {
    username: "awwibimr",
    name: "awwibimr",
    email: "awwibimr@gmail.com",
    password: "12345678"
  },
  {
    username: "aanfatkhan",
    name: "aanfatkhan",
    email: "aanfatkhan@gmail.com",
    password: "12345678"
  },
  {
    username: "fluffynme",
    name: "fluffynme",
    email: "fluffynme@gmail.com",
    password: "12345678"
  },
  {
    username: "mr_hand",
    name: "mr_hand",
    email: "mr_hand@gmail.com",
    password: "12345678"
  },
  {
    username: "kang_erfan",
    name: "kang_erfan",
    email: "kang_erfan@gmail.com",
    password: "12345678"
  },
  {
    username: "henricus_er",
    name: "henricus_er",
    email: "henricus_er@gmail.com",
    password: "12345678"
  },
  {
    username: "vilanpams",
    name: "vilanpams",
    email: "vilanpams@gmail.com",
    password: "12345678"
  },
  {
    username: "scorpydesign",
    name: "scorpydesign",
    email: "scorpydesign@gmail.com",
    password: "12345678"
  },
  {
    username: "annaskytsko",
    name: "annaskytsko",
    email: "annaskytsko@gmail.com",
    password: "12345678"
  },
  {
    username: "thesamds",
    name: "thesamds",
    email: "thesamds@gmail.com",
    password: "12345678"
  },
  {
    username: "dalim_artist",
    name: "dalim_artist",
    email: "dalim_artist@gmail.com",
    password: "12345678"
  },
  {
    username: "infiniteh8pe",
    name: "infiniteh8pe",
    email: "infiniteh8pe@gmail.com",
    password: "12345678"
  },
  {
    username: "rizkichandra",
    name: "rizkichandra",
    email: "rizkichandra@gmail.com",
    password: "12345678"
  },
  {
    username: "olegdovgan",
    name: "olegdovgan",
    email: "olegdovgan@gmail.com",
    password: "12345678"
  },
  {
    username: "ryanprastian",
    name: "ryanprastian",
    email: "ryanprastian@gmail.com",
    password: "12345678"
  },
  {
    username: "dracorusterra",
    name: "dracorusterra",
    email: "dracorusterra@gmail.com",
    password: "12345678"
  },
  {
    username: "kyotan",
    name: "kyotan",
    email: "kyotan@gmail.com",
    password: "12345678"
  },
  {
    username: "hedri2705",
    name: "hedri2705",
    email: "hedri2705@gmail.com",
    password: "12345678"
  },
  {
    username: "vectorinaja",
    name: "vectorinaja",
    email: "vectorinaja@gmail.com",
    password: "12345678"
  },
  {
    username: "violetdraw",
    name: "violetdraw",
    email: "violetdraw@gmail.com",
    password: "12345678"
  },
  {
    username: "megans_trainer",
    name: "megans_trainer",
    email: "megans_trainer@gmail.com",
    password: "12345678"
  },
  {
    username: "alukkart",
    name: "alukkart",
    email: "alukkart@gmail.com",
    password: "12345678"
  },
  {
    username: "luccasolivart",
    name: "luccasolivart",
    email: "luccasolivart@gmail.com",
    password: "12345678"
  },
  {
    username: "huram_abi",
    name: "huram_abi",
    email: "huram_abi@gmail.com",
    password: "12345678"
  },
  {
    username: "putra9292",
    name: "putra9292",
    email: "putra9292@gmail.com",
    password: "12345678"
  },
  {
    username: "neilkohney",
    name: "neilkohney",
    email: "neilkohney@gmail.com",
    password: "12345678"
  },
  {
    username: "lauracris",
    name: "lauracris",
    email: "lauracris@gmail.com",
    password: "12345678"
  },
  {
    username: "bocvana",
    name: "bocvana",
    email: "bocvana@gmail.com",
    password: "12345678"
  },
  {
    username: "vivekart",
    name: "vivekart",
    email: "vivekart@gmail.com",
    password: "12345678"
  },
  {
    username: "helensanowo",
    name: "helensanowo",
    email: "helensanowo@gmail.com",
    password: "12345678"
  },
  {
    username: "rafaelosales",
    name: "rafaelosales",
    email: "rafaelosales@gmail.com",
    password: "12345678"
  },
  {
    username: "oneeightthy",
    name: "oneeightthy",
    email: "oneeightthy@gmail.com",
    password: "12345678"
  },
  {
    username: "zamalmartian",
    name: "zamalmartian",
    email: "zamalmartian@gmail.com",
    password: "12345678"
  },
  {
    username: "ijulied",
    name: "ijulied",
    email: "ijulied@gmail.com",
    password: "12345678"
  },
  {
    username: "sailorlun",
    name: "sailorlun",
    email: "sailorlun@gmail.com",
    password: "12345678"
  },
  {
    username: "animorphic",
    name: "animorphic",
    email: "animorphic@gmail.com",
    password: "12345678"
  },
  {
    username: "galilaweslywayn",
    name: "galilaweslywayn",
    email: "galilaweslywayn@gmail.com",
    password: "12345678"
  },
  {
    username: "albannastudios",
    name: "albannastudios",
    email: "albannastudios@gmail.com",
    password: "12345678"
  },
  {
    username: "treskiddos",
    name: "treskiddos",
    email: "treskiddos@gmail.com",
    password: "12345678"
  },
  {
    username: "nandafatimah",
    name: "nandafatimah",
    email: "nandafatimah@gmail.com",
    password: "12345678"
  },
  {
    username: "lucartee",
    name: "lucartee",
    email: "lucartee@gmail.com",
    password: "12345678"
  },
  {
    username: "kumotori",
    name: "kumotori",
    email: "kumotori@gmail.com",
    password: "12345678"
  },
  {
    username: "saffrongraphics",
    name: "saffrongraphics",
    email: "saffrongraphics@gmail.com",
    password: "12345678"
  },
  {
    username: "shalock",
    name: "shalock",
    email: "shalock@gmail.com",
    password: "12345678"
  },
  {
    username: "agraworks",
    name: "agraworks",
    email: "agraworks@gmail.com",
    password: "12345678"
  },
  {
    username: "clicky123",
    name: "clicky123",
    email: "clicky123@gmail.com",
    password: "12345678"
  },
  {
    username: "black_briar",
    name: "black_briar",
    email: "black_briar@gmail.com",
    password: "12345678"
  },
  {
    username: "dirokuvu",
    name: "dirokuvu",
    email: "dirokuvu@gmail.com",
    password: "12345678"
  },
  {
    username: "koranmerah",
    name: "koranmerah",
    email: "koranmerah@gmail.com",
    password: "12345678"
  },
  {
    username: "jorgeiracheta",
    name: "jorgeiracheta",
    email: "jorgeiracheta@gmail.com",
    password: "12345678"
  },
  {
    username: "originilustrasi",
    name: "originilustrasi",
    email: "originilustrasi@gmail.com",
    password: "12345678"
  },
  {
    username: "k2vexel",
    name: "k2vexel",
    email: "k2vexel@gmail.com",
    password: "12345678"
  },
  {
    username: "anastmeko",
    name: "anastmeko",
    email: "anastmeko@gmail.com",
    password: "12345678"
  },
  {
    username: "so_close",
    name: "so_close",
    email: "so_close@gmail.com",
    password: "12345678"
  },
  {
    username: "ligermaws",
    name: "ligermaws",
    email: "ligermaws@gmail.com",
    password: "12345678"
  },
  {
    username: "lufenas",
    name: "lufenas",
    email: "lufenas@gmail.com",
    password: "12345678"
  },
  {
    username: "arifsuseno",
    name: "arifsuseno",
    email: "arifsuseno@gmail.com",
    password: "12345678"
  },
  {
    username: "creepsandbabes",
    name: "creepsandbabes",
    email: "creepsandbabes@gmail.com",
    password: "12345678"
  },
  {
    username: "keziaintan",
    name: "keziaintan",
    email: "keziaintan@gmail.com",
    password: "12345678"
  },
  {
    username: "chrissy369",
    name: "chrissy369",
    email: "chrissy369@gmail.com",
    password: "12345678"
  },
  {
    username: "arugeru",
    name: "arugeru",
    email: "arugeru@gmail.com",
    password: "12345678"
  },
  {
    username: "kerribou",
    name: "kerribou",
    email: "kerribou@gmail.com",
    password: "12345678"
  },
  {
    username: "adraalhafid",
    name: "adraalhafid",
    email: "adraalhafid@gmail.com",
    password: "12345678"
  },
  {
    username: "tom_shearman",
    name: "tom_shearman",
    email: "tom_shearman@gmail.com",
    password: "12345678"
  },
  {
    username: "archie90",
    name: "archie90",
    email: "archie90@gmail.com",
    password: "12345678"
  },
  {
    username: "devonstore",
    name: "devonstore",
    email: "devonstore@gmail.com",
    password: "12345678"
  },
  {
    username: "aidmoon",
    name: "aidmoon",
    email: "aidmoon@gmail.com",
    password: "12345678"
  },
  {
    username: "illustrasyo",
    name: "illustrasyo",
    email: "illustrasyo@gmail.com",
    password: "12345678"
  },
  {
    username: "aliciasalazar",
    name: "aliciasalazar",
    email: "aliciasalazar@gmail.com",
    password: "12345678"
  },
  {
    username: "crosonat",
    name: "crosonat",
    email: "crosonat@gmail.com",
    password: "12345678"
  },
  {
    username: "sabrinaaparicio",
    name: "sabrinaaparicio",
    email: "sabrinaaparicio@gmail.com",
    password: "12345678"
  },
  {
    username: "ruangsore",
    name: "ruangsore",
    email: "ruangsore@gmail.com",
    password: "12345678"
  },
  {
    username: "ahsandesigner2k",
    name: "ahsandesigner2k",
    email: "ahsandesigner2k@gmail.com",
    password: "12345678"
  },
  {
    username: "gungarya",
    name: "gungarya",
    email: "gungarya@gmail.com",
    password: "12345678"
  },
  {
    username: "designontable",
    name: "designontable",
    email: "designontable@gmail.com",
    password: "12345678"
  },
  {
    username: "dvincentgomes",
    name: "dvincentgomes",
    email: "dvincentgomes@gmail.com",
    password: "12345678"
  },
  {
    username: "yudhaadtyo",
    name: "yudhaadtyo",
    email: "yudhaadtyo@gmail.com",
    password: "12345678"
  },
  {
    username: "ariangga",
    name: "ariangga",
    email: "ariangga@gmail.com",
    password: "12345678"
  },
  {
    username: "melvinmusanta",
    name: "melvinmusanta",
    email: "melvinmusanta@gmail.com",
    password: "12345678"
  },
  {
    username: "andsyah",
    name: "andsyah",
    email: "andsyah@gmail.com",
    password: "12345678"
  },
  {
    username: "torasshuu",
    name: "torasshuu",
    email: "torasshuu@gmail.com",
    password: "12345678"
  },
  {
    username: "khushbofatima",
    name: "khushbofatima",
    email: "khushbofatima@gmail.com",
    password: "12345678"
  },
  {
    username: "syndanendrea",
    name: "syndanendrea",
    email: "syndanendrea@gmail.com",
    password: "12345678"
  },
  {
    username: "ipinchews",
    name: "ipinchews",
    email: "ipinchews@gmail.com",
    password: "12345678"
  },
  {
    username: "felixtheaa",
    name: "felixtheaa",
    email: "felixtheaa@gmail.com",
    password: "12345678"
  },
  {
    username: "megaasellia",
    name: "megaasellia",
    email: "megaasellia@gmail.com",
    password: "12345678"
  },
  {
    username: "realwpap",
    name: "realwpap",
    email: "realwpap@gmail.com",
    password: "12345678"
  },
  {
    username: "mothrastudio",
    name: "mothrastudio",
    email: "mothrastudio@gmail.com",
    password: "12345678"
  },
  {
    username: "vaultboy467",
    name: "vaultboy467",
    email: "vaultboy467@gmail.com",
    password: "12345678"
  },
  {
    username: "kenkuro_",
    name: "kenkuro_",
    email: "kenkuro_@gmail.com",
    password: "12345678"
  },
  {
    username: "lanku07",
    name: "lanku07",
    email: "lanku07@gmail.com",
    password: "12345678"
  },
  {
    username: "bimantarah",
    name: "bimantarah",
    email: "bimantarah@gmail.com",
    password: "12345678"
  },
  {
    username: "andrean_25",
    name: "andrean_25",
    email: "andrean_25@gmail.com",
    password: "12345678"
  },
  {
    username: "puffycurly_work",
    name: "puffycurly_work",
    email: "puffycurly_work@gmail.com",
    password: "12345678"
  },
  {
    username: "dooholigan",
    name: "dooholigan",
    email: "dooholigan@gmail.com",
    password: "12345678"
  },
  {
    username: "toyapethak",
    name: "toyapethak",
    email: "toyapethak@gmail.com",
    password: "12345678"
  },
  {
    username: "mohalldi",
    name: "mohalldi",
    email: "mohalldi@gmail.com",
    password: "12345678"
  },
  {
    username: "neonnow",
    name: "neonnow",
    email: "neonnow@gmail.com",
    password: "12345678"
  },
  {
    username: "redi_redcal",
    name: "redi_redcal",
    email: "redi_redcal@gmail.com",
    password: "12345678"
  },
  {
    username: "komal__butt",
    name: "komal__butt",
    email: "komal__butt@gmail.com",
    password: "12345678"
  },
  {
    username: "guardianboyy",
    name: "guardianboyy",
    email: "guardianboyy@gmail.com",
    password: "12345678"
  },
  {
    username: "and3cl",
    name: "and3cl",
    email: "and3cl@gmail.com",
    password: "12345678"
  },
  {
    username: "gajahnakal",
    name: "gajahnakal",
    email: "gajahnakal@gmail.com",
    password: "12345678"
  },
  {
    username: "sirakiwiri",
    name: "sirakiwiri",
    email: "sirakiwiri@gmail.com",
    password: "12345678"
  },
  {
    username: "jfrico",
    name: "jfrico",
    email: "jfrico@gmail.com",
    password: "12345678"
  },
  {
    username: "sajaklamodesign",
    name: "sajaklamodesign",
    email: "sajaklamodesign@gmail.com",
    password: "12345678"
  },
  {
    username: "toothless22",
    name: "toothless22",
    email: "toothless22@gmail.com",
    password: "12345678"
  },
  {
    username: "lamarastudio",
    name: "lamarastudio",
    email: "lamarastudio@gmail.com",
    password: "12345678"
  },
  {
    username: "blackpillgh",
    name: "blackpillgh",
    email: "blackpillgh@gmail.com",
    password: "12345678"
  },
  {
    username: "balen_varrios",
    name: "balen_varrios",
    email: "balen_varrios@gmail.com",
    password: "12345678"
  },
  {
    username: "ericabortoloso",
    name: "ericabortoloso",
    email: "ericabortoloso@gmail.com",
    password: "12345678"
  },
  {
    username: "eduardoquiles",
    name: "eduardoquiles",
    email: "eduardoquiles@gmail.com",
    password: "12345678"
  },
  {
    username: "gmt_option1",
    name: "gmt_option1",
    email: "gmt_option1@gmail.com",
    password: "12345678"
  },
  {
    username: "rebecamarsan",
    name: "rebecamarsan",
    email: "rebecamarsan@gmail.com",
    password: "12345678"
  },
  {
    username: "catherinepaiano",
    name: "catherinepaiano",
    email: "catherinepaiano@gmail.com",
    password: "12345678"
  },
  {
    username: "zeeb_princess",
    name: "zeeb_princess",
    email: "zeeb_princess@gmail.com",
    password: "12345678"
  },
  {
    username: "artchtho",
    name: "artchtho",
    email: "artchtho@gmail.com",
    password: "12345678"
  },
  {
    username: "norn_art",
    name: "norn_art",
    email: "norn_art@gmail.com",
    password: "12345678"
  },
  {
    username: "herusuofficial",
    name: "herusuofficial",
    email: "herusuofficial@gmail.com",
    password: "12345678"
  },
  {
    username: "harsimran73",
    name: "harsimran73",
    email: "harsimran73@gmail.com",
    password: "12345678"
  },
  {
    username: "howveryretro",
    name: "howveryretro",
    email: "howveryretro@gmail.com",
    password: "12345678"
  },
  {
    username: "footmarkstudio",
    name: "footmarkstudio",
    email: "footmarkstudio@gmail.com",
    password: "12345678"
  },
  {
    username: "introvertikal",
    name: "introvertikal",
    email: "introvertikal@gmail.com",
    password: "12345678"
  },
  {
    username: "klasikohero",
    name: "klasikohero",
    email: "klasikohero@gmail.com",
    password: "12345678"
  },
  {
    username: "altsam19",
    name: "altsam19",
    email: "altsam19@gmail.com",
    password: "12345678"
  },
  {
    username: "samycartman",
    name: "samycartman",
    email: "samycartman@gmail.com",
    password: "12345678"
  },
  {
    username: "dafinaasllani",
    name: "dafinaasllani",
    email: "dafinaasllani@gmail.com",
    password: "12345678"
  },
  {
    username: "oceland",
    name: "oceland",
    email: "oceland@gmail.com",
    password: "12345678"
  },
  {
    username: "degeha",
    name: "degeha",
    email: "degeha@gmail.com",
    password: "12345678"
  },
  {
    username: "dopers_project",
    name: "dopers_project",
    email: "dopers_project@gmail.com",
    password: "12345678"
  },
  {
    username: "driopeproject",
    name: "driopeproject",
    email: "driopeproject@gmail.com",
    password: "12345678"
  },
  {
    username: "artmazigh",
    name: "artmazigh",
    email: "artmazigh@gmail.com",
    password: "12345678"
  },
  {
    username: "anugroho",
    name: "anugroho",
    email: "anugroho@gmail.com",
    password: "12345678"
  },
  {
    username: "andryknw",
    name: "andryknw",
    email: "andryknw@gmail.com",
    password: "12345678"
  },
  {
    username: "bwanadevilart",
    name: "bwanadevilart",
    email: "bwanadevilart@gmail.com",
    password: "12345678"
  },
  {
    username: "milicamonaj",
    name: "milicamonaj",
    email: "milicamonaj@gmail.com",
    password: "12345678"
  },
  {
    username: "harlandier",
    name: "harlandier",
    email: "harlandier@gmail.com",
    password: "12345678"
  },
  {
    username: "finnwang",
    name: "finnwang",
    email: "finnwang@gmail.com",
    password: "12345678"
  },
  {
    username: "zhijiexu",
    name: "zhijiexu",
    email: "zhijiexu@gmail.com",
    password: "12345678"
  },
  {
    username: "mhdk_123",
    name: "mhdk_123",
    email: "mhdk_123@gmail.com",
    password: "12345678"
  },
  {
    username: "edwardaxl",
    name: "edwardaxl",
    email: "edwardaxl@gmail.com",
    password: "12345678"
  },
  {
    username: "asmorojati",
    name: "asmorojati",
    email: "asmorojati@gmail.com",
    password: "12345678"
  },
  {
    username: "dsbeon",
    name: "dsbeon",
    email: "dsbeon@gmail.com",
    password: "12345678"
  },
  {
    username: "jero0601",
    name: "jero0601",
    email: "jero0601@gmail.com",
    password: "12345678"
  },
  {
    username: "slicedbaecon",
    name: "slicedbaecon",
    email: "slicedbaecon@gmail.com",
    password: "12345678"
  },
  {
    username: "unviz3d",
    name: "unviz3d",
    email: "unviz3d@gmail.com",
    password: "12345678"
  },
  {
    username: "jericbastillo",
    name: "jericbastillo",
    email: "jericbastillo@gmail.com",
    password: "12345678"
  },
  {
    username: "seeget",
    name: "seeget",
    email: "seeget@gmail.com",
    password: "12345678"
  },
  {
    username: "sarkasprojek",
    name: "sarkasprojek",
    email: "sarkasprojek@gmail.com",
    password: "12345678"
  },
  {
    username: "canrodri84",
    name: "canrodri84",
    email: "canrodri84@gmail.com",
    password: "12345678"
  },
  {
    username: "yeperosario",
    name: "yeperosario",
    email: "yeperosario@gmail.com",
    password: "12345678"
  },
  {
    username: "renaldy23",
    name: "renaldy23",
    email: "renaldy23@gmail.com",
    password: "12345678"
  },
  {
    username: "benlee243",
    name: "benlee243",
    email: "benlee243@gmail.com",
    password: "12345678"
  },
  {
    username: "galihwis",
    name: "galihwis",
    email: "galihwis@gmail.com",
    password: "12345678"
  },
  {
    username: "dzoy1409",
    name: "dzoy1409",
    email: "dzoy1409@gmail.com",
    password: "12345678"
  },
  {
    username: "wawans718",
    name: "wawans718",
    email: "wawans718@gmail.com",
    password: "12345678"
  },
  {
    username: "reenaldisatria",
    name: "reenaldisatria",
    email: "reenaldisatria@gmail.com",
    password: "12345678"
  },
  {
    username: "pupungoktavian",
    name: "pupungoktavian",
    email: "pupungoktavian@gmail.com",
    password: "12345678"
  },
  {
    username: "ilhamkholfi",
    name: "ilhamkholfi",
    email: "ilhamkholfi@gmail.com",
    password: "12345678"
  },
  {
    username: "patriajasa",
    name: "patriajasa",
    email: "patriajasa@gmail.com",
    password: "12345678"
  },
  {
    username: "adahn19",
    name: "adahn19",
    email: "adahn19@gmail.com",
    password: "12345678"
  },
  {
    username: "charlyanimator",
    name: "charlyanimator",
    email: "charlyanimator@gmail.com",
    password: "12345678"
  },
  {
    username: "muhikhwannur",
    name: "muhikhwannur",
    email: "muhikhwannur@gmail.com",
    password: "12345678"
  },
  {
    username: "mouya_",
    name: "mouya_",
    email: "mouya_@gmail.com",
    password: "12345678"
  },
  {
    username: "jackfi_",
    name: "jackfi_",
    email: "jackfi_@gmail.com",
    password: "12345678"
  },
  {
    username: "uriefmaulana",
    name: "uriefmaulana",
    email: "uriefmaulana@gmail.com",
    password: "12345678"
  },
  {
    username: "the_ayankz",
    name: "the_ayankz",
    email: "the_ayankz@gmail.com",
    password: "12345678"
  },
  {
    username: "trebold",
    name: "trebold",
    email: "trebold@gmail.com",
    password: "12345678"
  },
  {
    username: "mohyr99",
    name: "mohyr99",
    email: "mohyr99@gmail.com",
    password: "12345678"
  },
  {
    username: "kresstudio",
    name: "kresstudio",
    email: "kresstudio@gmail.com",
    password: "12345678"
  },
  {
    username: "apokalips__",
    name: "apokalips__",
    email: "apokalips__@gmail.com",
    password: "12345678"
  },
  {
    username: "adamkhabibi",
    name: "adamkhabibi",
    email: "adamkhabibi@gmail.com",
    password: "12345678"
  },
  {
    username: "amertacan",
    name: "amertacan",
    email: "amertacan@gmail.com",
    password: "12345678"
  },
  {
    username: "purplecubeart",
    name: "purplecubeart",
    email: "purplecubeart@gmail.com",
    password: "12345678"
  },
  {
    username: "madusena",
    name: "madusena",
    email: "madusena@gmail.com",
    password: "12345678"
  },
  {
    username: "emzanauvaldi",
    name: "emzanauvaldi",
    email: "emzanauvaldi@gmail.com",
    password: "12345678"
  },
  {
    username: "lalabdigitals",
    name: "lalabdigitals",
    email: "lalabdigitals@gmail.com",
    password: "12345678"
  },
  {
    username: "gigikukuk_std",
    name: "gigikukuk_std",
    email: "gigikukuk_std@gmail.com",
    password: "12345678"
  },
  {
    username: "rifqikurniawan2",
    name: "rifqikurniawan2",
    email: "rifqikurniawan2@gmail.com",
    password: "12345678"
  },
  {
    username: "mulaiajadulu",
    name: "mulaiajadulu",
    email: "mulaiajadulu@gmail.com",
    password: "12345678"
  },
  {
    username: "ndashmu94",
    name: "ndashmu94",
    email: "ndashmu94@gmail.com",
    password: "12345678"
  },
  {
    username: "bernartdigital",
    name: "bernartdigital",
    email: "bernartdigital@gmail.com",
    password: "12345678"
  },
  {
    username: "armanrchmn",
    name: "armanrchmn",
    email: "armanrchmn@gmail.com",
    password: "12345678"
  },
  {
    username: "svexels",
    name: "svexels",
    email: "svexels@gmail.com",
    password: "12345678"
  },
  {
    username: "myxp01",
    name: "myxp01",
    email: "myxp01@gmail.com",
    password: "12345678"
  },
  {
    username: "comabogbog",
    name: "comabogbog",
    email: "comabogbog@gmail.com",
    password: "12345678"
  },
  {
    username: "solid_style",
    name: "solid_style",
    email: "solid_style@gmail.com",
    password: "12345678"
  },
  {
    username: "im_wajahat",
    name: "im_wajahat",
    email: "im_wajahat@gmail.com",
    password: "12345678"
  },
  {
    username: "indiramay99",
    name: "indiramay99",
    email: "indiramay99@gmail.com",
    password: "12345678"
  },
  {
    username: "condropriyoaji",
    name: "condropriyoaji",
    email: "condropriyoaji@gmail.com",
    password: "12345678"
  },
  {
    username: "galihanggit",
    name: "galihanggit",
    email: "galihanggit@gmail.com",
    password: "12345678"
  },
  {
    username: "frendydesign",
    name: "frendydesign",
    email: "frendydesign@gmail.com",
    password: "12345678"
  },
  {
    username: "leigh_seinfeld",
    name: "leigh_seinfeld",
    email: "leigh_seinfeld@gmail.com",
    password: "12345678"
  },
  {
    username: "adde_ir",
    name: "adde_ir",
    email: "adde_ir@gmail.com",
    password: "12345678"
  },
  {
    username: "emkeystudio",
    name: "emkeystudio",
    email: "emkeystudio@gmail.com",
    password: "12345678"
  },
  {
    username: "carzalas",
    name: "carzalas",
    email: "carzalas@gmail.com",
    password: "12345678"
  },
  {
    username: "yussuf_z",
    name: "yussuf_z",
    email: "yussuf_z@gmail.com",
    password: "12345678"
  },
  {
    username: "joaomaia7",
    name: "joaomaia7",
    email: "joaomaia7@gmail.com",
    password: "12345678"
  },
  {
    username: "oliverswinburne",
    name: "oliverswinburne",
    email: "oliverswinburne@gmail.com",
    password: "12345678"
  },
  {
    username: "dimensiluar",
    name: "dimensiluar",
    email: "dimensiluar@gmail.com",
    password: "12345678"
  },
  {
    username: "vilegatti",
    name: "vilegatti",
    email: "vilegatti@gmail.com",
    password: "12345678"
  },
  {
    username: "ehsanfaridi",
    name: "ehsanfaridi",
    email: "ehsanfaridi@gmail.com",
    password: "12345678"
  },
  {
    username: "lavenderdivine",
    name: "lavenderdivine",
    email: "lavenderdivine@gmail.com",
    password: "12345678"
  },
  {
    username: "ari_warok",
    name: "ari_warok",
    email: "ari_warok@gmail.com",
    password: "12345678"
  },
  {
    username: "ggg_design",
    name: "ggg_design",
    email: "ggg_design@gmail.com",
    password: "12345678"
  },
  {
    username: "juz_a_girl",
    name: "juz_a_girl",
    email: "juz_a_girl@gmail.com",
    password: "12345678"
  },
  {
    username: "diacinco",
    name: "diacinco",
    email: "diacinco@gmail.com",
    password: "12345678"
  },
  {
    username: "cahyow31",
    name: "cahyow31",
    email: "cahyow31@gmail.com",
    password: "12345678"
  },
  {
    username: "tazp27",
    name: "tazp27",
    email: "tazp27@gmail.com",
    password: "12345678"
  },
  {
    username: "cquencestudios",
    name: "cquencestudios",
    email: "cquencestudios@gmail.com",
    password: "12345678"
  },
  {
    username: "kryscos",
    name: "kryscos",
    email: "kryscos@gmail.com",
    password: "12345678"
  },
  {
    username: "estherphingmoo",
    name: "estherphingmoo",
    email: "estherphingmoo@gmail.com",
    password: "12345678"
  },
  {
    username: "dikigiyat",
    name: "dikigiyat",
    email: "dikigiyat@gmail.com",
    password: "12345678"
  },
  {
    username: "sandrasavarino",
    name: "sandrasavarino",
    email: "sandrasavarino@gmail.com",
    password: "12345678"
  },
  {
    username: "hesh360",
    name: "hesh360",
    email: "hesh360@gmail.com",
    password: "12345678"
  },
  {
    username: "gariwdd",
    name: "gariwdd",
    email: "gariwdd@gmail.com",
    password: "12345678"
  },
  {
    username: "afrielian",
    name: "afrielian",
    email: "afrielian@gmail.com",
    password: "12345678"
  },
  {
    username: "unaizakarim29",
    name: "unaizakarim29",
    email: "unaizakarim29@gmail.com",
    password: "12345678"
  },
  {
    username: "oraclestudio99",
    name: "oraclestudio99",
    email: "oraclestudio99@gmail.com",
    password: "12345678"
  },
  {
    username: "ifungky",
    name: "ifungky",
    email: "ifungky@gmail.com",
    password: "12345678"
  },
  {
    username: "nabeelnajeeb",
    name: "nabeelnajeeb",
    email: "nabeelnajeeb@gmail.com",
    password: "12345678"
  },
  {
    username: "uigodesign",
    name: "uigodesign",
    email: "uigodesign@gmail.com",
    password: "12345678"
  },
  {
    username: "shah_alom1",
    name: "shah_alom1",
    email: "shah_alom1@gmail.com",
    password: "12345678"
  },
  {
    username: "urieltenconi",
    name: "urieltenconi",
    email: "urieltenconi@gmail.com",
    password: "12345678"
  },
  {
    username: "mortsy",
    name: "mortsy",
    email: "mortsy@gmail.com",
    password: "12345678"
  },
  {
    username: "justinbizlab",
    name: "justinbizlab",
    email: "justinbizlab@gmail.com",
    password: "12345678"
  },
  {
    username: "vanessamyra",
    name: "vanessamyra",
    email: "vanessamyra@gmail.com",
    password: "12345678"
  },
  {
    username: "snigdhapriy",
    name: "snigdhapriy",
    email: "snigdhapriy@gmail.com",
    password: "12345678"
  },
  {
    username: "kleamino",
    name: "kleamino",
    email: "kleamino@gmail.com",
    password: "12345678"
  },
  {
    username: "alaecs",
    name: "alaecs",
    email: "alaecs@gmail.com",
    password: "12345678"
  },
  {
    username: "seburq",
    name: "seburq",
    email: "seburq@gmail.com",
    password: "12345678"
  },
  {
    username: "lisa_solomoniuk",
    name: "lisa_solomoniuk",
    email: "lisa_solomoniuk@gmail.com",
    password: "12345678"
  },
  {
    username: "xiaokung",
    name: "xiaokung",
    email: "xiaokung@gmail.com",
    password: "12345678"
  },
  {
    username: "crystalrainart",
    name: "crystalrainart",
    email: "crystalrainart@gmail.com",
    password: "12345678"
  },
  {
    username: "cheesychili",
    name: "cheesychili",
    email: "cheesychili@gmail.com",
    password: "12345678"
  },
  {
    username: "art_cofam",
    name: "art_cofam",
    email: "art_cofam@gmail.com",
    password: "12345678"
  },
  {
    username: "butchbangher",
    name: "butchbangher",
    email: "butchbangher@gmail.com",
    password: "12345678"
  },
  {
    username: "zlemuuz",
    name: "zlemuuz",
    email: "zlemuuz@gmail.com",
    password: "12345678"
  },
  {
    username: "flottstudio18",
    name: "flottstudio18",
    email: "flottstudio18@gmail.com",
    password: "12345678"
  },
  {
    username: "studio901design",
    name: "studio901design",
    email: "studio901design@gmail.com",
    password: "12345678"
  },
  {
    username: "mithun_kdey",
    name: "mithun_kdey",
    email: "mithun_kdey@gmail.com",
    password: "12345678"
  },
  {
    username: "dime51",
    name: "dime51",
    email: "dime51@gmail.com",
    password: "12345678"
  },
  {
    username: "tomonii",
    name: "tomonii",
    email: "tomonii@gmail.com",
    password: "12345678"
  },
  {
    username: "indraprastika",
    name: "indraprastika",
    email: "indraprastika@gmail.com",
    password: "12345678"
  },
  {
    username: "mahi_san",
    name: "mahi_san",
    email: "mahi_san@gmail.com",
    password: "12345678"
  },
  {
    username: "rezaaditia",
    name: "rezaaditia",
    email: "rezaaditia@gmail.com",
    password: "12345678"
  },
  {
    username: "blicken",
    name: "blicken",
    email: "blicken@gmail.com",
    password: "12345678"
  },
  {
    username: "eunike_febe",
    name: "eunike_febe",
    email: "eunike_febe@gmail.com",
    password: "12345678"
  },
  {
    username: "superminimalism",
    name: "superminimalism",
    email: "superminimalism@gmail.com",
    password: "12345678"
  },
  {
    username: "babybundart",
    name: "babybundart",
    email: "babybundart@gmail.com",
    password: "12345678"
  },
  {
    username: "claritygee",
    name: "claritygee",
    email: "claritygee@gmail.com",
    password: "12345678"
  },
  {
    username: "foundrydesigns",
    name: "foundrydesigns",
    email: "foundrydesigns@gmail.com",
    password: "12345678"
  },
  {
    username: "picxo_creatives",
    name: "picxo_creatives",
    email: "picxo_creatives@gmail.com",
    password: "12345678"
  },
  {
    username: "nigelcrown",
    name: "nigelcrown",
    email: "nigelcrown@gmail.com",
    password: "12345678"
  },
  {
    username: "artrifin",
    name: "artrifin",
    email: "artrifin@gmail.com",
    password: "12345678"
  },
  {
    username: "chaimaejebbari",
    name: "chaimaejebbari",
    email: "chaimaejebbari@gmail.com",
    password: "12345678"
  },
  {
    username: "pixie_pines",
    name: "pixie_pines",
    email: "pixie_pines@gmail.com",
    password: "12345678"
  },
  {
    username: "abdullahsainn",
    name: "abdullahsainn",
    email: "abdullahsainn@gmail.com",
    password: "12345678"
  },
  {
    username: "lerod_ui",
    name: "lerod_ui",
    email: "lerod_ui@gmail.com",
    password: "12345678"
  },
  {
    username: "biplob_k_mondol",
    name: "biplob_k_mondol",
    email: "biplob_k_mondol@gmail.com",
    password: "12345678"
  },
  {
    username: "chrisnic131",
    name: "chrisnic131",
    email: "chrisnic131@gmail.com",
    password: "12345678"
  },
  {
    username: "doomesia",
    name: "doomesia",
    email: "doomesia@gmail.com",
    password: "12345678"
  },
  {
    username: "febriansatria",
    name: "febriansatria",
    email: "febriansatria@gmail.com",
    password: "12345678"
  },
  {
    username: "elettra90",
    name: "elettra90",
    email: "elettra90@gmail.com",
    password: "12345678"
  },
  {
    username: "wizzitex",
    name: "wizzitex",
    email: "wizzitex@gmail.com",
    password: "12345678"
  },
  {
    username: "hammm6",
    name: "hammm6",
    email: "hammm6@gmail.com",
    password: "12345678"
  },
  {
    username: "rayarmas",
    name: "rayarmas",
    email: "rayarmas@gmail.com",
    password: "12345678"
  },
  {
    username: "itsqubbaj",
    name: "itsqubbaj",
    email: "itsqubbaj@gmail.com",
    password: "12345678"
  },
  {
    username: "csabaxkasik",
    name: "csabaxkasik",
    email: "csabaxkasik@gmail.com",
    password: "12345678"
  },
  {
    username: "duyenart",
    name: "duyenart",
    email: "duyenart@gmail.com",
    password: "12345678"
  },
  {
    username: "paper_piece",
    name: "paper_piece",
    email: "paper_piece@gmail.com",
    password: "12345678"
  },
  {
    username: "chepeshepe",
    name: "chepeshepe",
    email: "chepeshepe@gmail.com",
    password: "12345678"
  },
  {
    username: "zlivkun",
    name: "zlivkun",
    email: "zlivkun@gmail.com",
    password: "12345678"
  },
  {
    username: "kaffeboy",
    name: "kaffeboy",
    email: "kaffeboy@gmail.com",
    password: "12345678"
  },
  {
    username: "artacet_design",
    name: "artacet_design",
    email: "artacet_design@gmail.com",
    password: "12345678"
  },
  {
    username: "sashkiadesign",
    name: "sashkiadesign",
    email: "sashkiadesign@gmail.com",
    password: "12345678"
  },
  {
    username: "egedoan590",
    name: "egedoan590",
    email: "egedoan590@gmail.com",
    password: "12345678"
  },
  {
    username: "lenakiagia",
    name: "lenakiagia",
    email: "lenakiagia@gmail.com",
    password: "12345678"
  },
  {
    username: "sprincess579",
    name: "sprincess579",
    email: "sprincess579@gmail.com",
    password: "12345678"
  },
  {
    username: "niluferustuner",
    name: "niluferustuner",
    email: "niluferustuner@gmail.com",
    password: "12345678"
  },
  {
    username: "vlad_ar",
    name: "vlad_ar",
    email: "vlad_ar@gmail.com",
    password: "12345678"
  },
  {
    username: "germanbernales",
    name: "germanbernales",
    email: "germanbernales@gmail.com",
    password: "12345678"
  },
  {
    username: "yabbadabbodu",
    name: "yabbadabbodu",
    email: "yabbadabbodu@gmail.com",
    password: "12345678"
  },
  {
    username: "videohaven",
    name: "videohaven",
    email: "videohaven@gmail.com",
    password: "12345678"
  },
  {
    username: "jandonbanyu",
    name: "jandonbanyu",
    email: "jandonbanyu@gmail.com",
    password: "12345678"
  },
  {
    username: "navetone45",
    name: "navetone45",
    email: "navetone45@gmail.com",
    password: "12345678"
  },
  {
    username: "ferdianalamsah",
    name: "ferdianalamsah",
    email: "ferdianalamsah@gmail.com",
    password: "12345678"
  },
  {
    username: "christianozoude",
    name: "christianozoude",
    email: "christianozoude@gmail.com",
    password: "12345678"
  },
  {
    username: "lades_brae_art",
    name: "lades_brae_art",
    email: "lades_brae_art@gmail.com",
    password: "12345678"
  },
  {
    username: "adrianjordan5",
    name: "adrianjordan5",
    email: "adrianjordan5@gmail.com",
    password: "12345678"
  },
  {
    username: "syabronadya",
    name: "syabronadya",
    email: "syabronadya@gmail.com",
    password: "12345678"
  },
  {
    username: "fenkurniawan",
    name: "fenkurniawan",
    email: "fenkurniawan@gmail.com",
    password: "12345678"
  },
  {
    username: "shafiaaslam267",
    name: "shafiaaslam267",
    email: "shafiaaslam267@gmail.com",
    password: "12345678"
  },
  {
    username: "karanbawari",
    name: "karanbawari",
    email: "karanbawari@gmail.com",
    password: "12345678"
  },
  {
    username: "cordsdavid",
    name: "cordsdavid",
    email: "cordsdavid@gmail.com",
    password: "12345678"
  },
  {
    username: "immortellepk",
    name: "immortellepk",
    email: "immortellepk@gmail.com",
    password: "12345678"
  },
  {
    username: "tomascus",
    name: "tomascus",
    email: "tomascus@gmail.com",
    password: "12345678"
  },
  {
    username: "chrnhr",
    name: "chrnhr",
    email: "chrnhr@gmail.com",
    password: "12345678"
  },
  {
    username: "katerynavol",
    name: "katerynavol",
    email: "katerynavol@gmail.com",
    password: "12345678"
  },
  {
    username: "skeptic_writer",
    name: "skeptic_writer",
    email: "skeptic_writer@gmail.com",
    password: "12345678"
  },
  {
    username: "matsugae",
    name: "matsugae",
    email: "matsugae@gmail.com",
    password: "12345678"
  },
  {
    username: "ashraful_96",
    name: "ashraful_96",
    email: "ashraful_96@gmail.com",
    password: "12345678"
  },
  {
    username: "theshubhamdhage",
    name: "theshubhamdhage",
    email: "theshubhamdhage@gmail.com",
    password: "12345678"
  },
  {
    username: "klllane",
    name: "klllane",
    email: "klllane@gmail.com",
    password: "12345678"
  },
  {
    username: "chevitary",
    name: "chevitary",
    email: "chevitary@gmail.com",
    password: "12345678"
  },
  {
    username: "asadgraphics656",
    name: "asadgraphics656",
    email: "asadgraphics656@gmail.com",
    password: "12345678"
  },
  {
    username: "psycomedy",
    name: "psycomedy",
    email: "psycomedy@gmail.com",
    password: "12345678"
  },
  {
    username: "tigerblaez",
    name: "tigerblaez",
    email: "tigerblaez@gmail.com",
    password: "12345678"
  },
  {
    username: "tincantimmy",
    name: "tincantimmy",
    email: "tincantimmy@gmail.com",
    password: "12345678"
  },
  {
    username: "ozandoganbey",
    name: "ozandoganbey",
    email: "ozandoganbey@gmail.com",
    password: "12345678"
  },
  {
    username: "teodoratopor",
    name: "teodoratopor",
    email: "teodoratopor@gmail.com",
    password: "12345678"
  },
  {
    username: "valtentart_",
    name: "valtentart_",
    email: "valtentart_@gmail.com",
    password: "12345678"
  },
  {
    username: "duvida",
    name: "duvida",
    email: "duvida@gmail.com",
    password: "12345678"
  },
  {
    username: "witeboard",
    name: "witeboard",
    email: "witeboard@gmail.com",
    password: "12345678"
  },
  {
    username: "maan_meraki18",
    name: "maan_meraki18",
    email: "maan_meraki18@gmail.com",
    password: "12345678"
  },
  {
    username: "marynabolsunova",
    name: "marynabolsunova",
    email: "marynabolsunova@gmail.com",
    password: "12345678"
  },
  {
    username: "oliver_artwork",
    name: "oliver_artwork",
    email: "oliver_artwork@gmail.com",
    password: "12345678"
  },
  {
    username: "nelsinios",
    name: "nelsinios",
    email: "nelsinios@gmail.com",
    password: "12345678"
  },
  {
    username: "aripradnyanaa",
    name: "aripradnyanaa",
    email: "aripradnyanaa@gmail.com",
    password: "12345678"
  },
  {
    username: "themorgenstern_",
    name: "themorgenstern_",
    email: "themorgenstern_@gmail.com",
    password: "12345678"
  },
  {
    username: "miftasee",
    name: "miftasee",
    email: "miftasee@gmail.com",
    password: "12345678"
  },
  {
    username: "az_sven",
    name: "az_sven",
    email: "az_sven@gmail.com",
    password: "12345678"
  },
  {
    username: "nogatsu_",
    name: "nogatsu_",
    email: "nogatsu_@gmail.com",
    password: "12345678"
  },
  {
    username: "valeri_mirley",
    name: "valeri_mirley",
    email: "valeri_mirley@gmail.com",
    password: "12345678"
  },
  {
    username: "banbanns",
    name: "banbanns",
    email: "banbanns@gmail.com",
    password: "12345678"
  },
  {
    username: "laksana_",
    name: "laksana_",
    email: "laksana_@gmail.com",
    password: "12345678"
  },
  {
    username: "powlsart",
    name: "powlsart",
    email: "powlsart@gmail.com",
    password: "12345678"
  },
  {
    username: "nirokawa",
    name: "nirokawa",
    email: "nirokawa@gmail.com",
    password: "12345678"
  },
  {
    username: "pilipikachan",
    name: "pilipikachan",
    email: "pilipikachan@gmail.com",
    password: "12345678"
  },
  {
    username: "silavadsen",
    name: "silavadsen",
    email: "silavadsen@gmail.com",
    password: "12345678"
  },
  {
    username: "rackzi",
    name: "rackzi",
    email: "rackzi@gmail.com",
    password: "12345678"
  },
  {
    username: "anandasuryaniga",
    name: "anandasuryaniga",
    email: "anandasuryaniga@gmail.com",
    password: "12345678"
  },
  {
    username: "yoki_shiraishi",
    name: "yoki_shiraishi",
    email: "yoki_shiraishi@gmail.com",
    password: "12345678"
  },
  {
    username: "raazu692",
    name: "raazu692",
    email: "raazu692@gmail.com",
    password: "12345678"
  },
  {
    username: "raitvisualworks",
    name: "raitvisualworks",
    email: "raitvisualworks@gmail.com",
    password: "12345678"
  },
  {
    username: "fruxeyot",
    name: "fruxeyot",
    email: "fruxeyot@gmail.com",
    password: "12345678"
  },
  {
    username: "mikohouse",
    name: "mikohouse",
    email: "mikohouse@gmail.com",
    password: "12345678"
  },
  {
    username: "riszaperdhana",
    name: "riszaperdhana",
    email: "riszaperdhana@gmail.com",
    password: "12345678"
  },
  {
    username: "zeroym",
    name: "zeroym",
    email: "zeroym@gmail.com",
    password: "12345678"
  },
  {
    username: "akanichiyu",
    name: "akanichiyu",
    email: "akanichiyu@gmail.com",
    password: "12345678"
  },
  {
    username: "wilmienk",
    name: "wilmienk",
    email: "wilmienk@gmail.com",
    password: "12345678"
  },
  {
    username: "patofermin",
    name: "patofermin",
    email: "patofermin@gmail.com",
    password: "12345678"
  },
  {
    username: "libror",
    name: "libror",
    email: "libror@gmail.com",
    password: "12345678"
  },
  {
    username: "arakibastudio",
    name: "arakibastudio",
    email: "arakibastudio@gmail.com",
    password: "12345678"
  },
  {
    username: "chewichewi",
    name: "chewichewi",
    email: "chewichewi@gmail.com",
    password: "12345678"
  },
  {
    username: "jakkisenpai",
    name: "jakkisenpai",
    email: "jakkisenpai@gmail.com",
    password: "12345678"
  },
  {
    username: "jhoanjlf",
    name: "jhoanjlf",
    email: "jhoanjlf@gmail.com",
    password: "12345678"
  },
  {
    username: "narululu",
    name: "narululu",
    email: "narululu@gmail.com",
    password: "12345678"
  },
  {
    username: "adrytia45",
    name: "adrytia45",
    email: "adrytia45@gmail.com",
    password: "12345678"
  },
  {
    username: "cherry_ava",
    name: "cherry_ava",
    email: "cherry_ava@gmail.com",
    password: "12345678"
  },
  {
    username: "kochim",
    name: "kochim",
    email: "kochim@gmail.com",
    password: "12345678"
  },
  {
    username: "xynmeii",
    name: "xynmeii",
    email: "xynmeii@gmail.com",
    password: "12345678"
  },
  {
    username: "ri2swardhani",
    name: "ri2swardhani",
    email: "ri2swardhani@gmail.com",
    password: "12345678"
  },
  {
    username: "kawako__",
    name: "kawako__",
    email: "kawako__@gmail.com",
    password: "12345678"
  },
  {
    username: "prushk",
    name: "prushk",
    email: "prushk@gmail.com",
    password: "12345678"
  },
  {
    username: "jackripperart",
    name: "jackripperart",
    email: "jackripperart@gmail.com",
    password: "12345678"
  },
  {
    username: "gustianhe",
    name: "gustianhe",
    email: "gustianhe@gmail.com",
    password: "12345678"
  },
  {
    username: "carlosbobadilla",
    name: "carlosbobadilla",
    email: "carlosbobadilla@gmail.com",
    password: "12345678"
  },
  {
    username: "anzailee",
    name: "anzailee",
    email: "anzailee@gmail.com",
    password: "12345678"
  },
  {
    username: "h4rtex",
    name: "h4rtex",
    email: "h4rtex@gmail.com",
    password: "12345678"
  },
  {
    username: "aini27",
    name: "aini27",
    email: "aini27@gmail.com",
    password: "12345678"
  },
  {
    username: "ezblossom",
    name: "ezblossom",
    email: "ezblossom@gmail.com",
    password: "12345678"
  },
  {
    username: "mtwandaa",
    name: "mtwandaa",
    email: "mtwandaa@gmail.com",
    password: "12345678"
  },
  {
    username: "orenjiii",
    name: "orenjiii",
    email: "orenjiii@gmail.com",
    password: "12345678"
  },
  {
    username: "karung_susu",
    name: "karung_susu",
    email: "karung_susu@gmail.com",
    password: "12345678"
  },
  {
    username: "tansartwork",
    name: "tansartwork",
    email: "tansartwork@gmail.com",
    password: "12345678"
  },
  {
    username: "arielistianto",
    name: "arielistianto",
    email: "arielistianto@gmail.com",
    password: "12345678"
  },
  {
    username: "toomywoomy",
    name: "toomywoomy",
    email: "toomywoomy@gmail.com",
    password: "12345678"
  },
  {
    username: "yo_roppa",
    name: "yo_roppa",
    email: "yo_roppa@gmail.com",
    password: "12345678"
  },
  {
    username: "ayadoart",
    name: "ayadoart",
    email: "ayadoart@gmail.com",
    password: "12345678"
  },
  {
    username: "hakuyaid",
    name: "hakuyaid",
    email: "hakuyaid@gmail.com",
    password: "12345678"
  },
  {
    username: "shibushio",
    name: "shibushio",
    email: "shibushio@gmail.com",
    password: "12345678"
  },
  {
    username: "kazisain",
    name: "kazisain",
    email: "kazisain@gmail.com",
    password: "12345678"
  },
  {
    username: "frettes",
    name: "frettes",
    email: "frettes@gmail.com",
    password: "12345678"
  },
  {
    username: "joesketch",
    name: "joesketch",
    email: "joesketch@gmail.com",
    password: "12345678"
  },
  {
    username: "ainazene",
    name: "ainazene",
    email: "ainazene@gmail.com",
    password: "12345678"
  },
  {
    username: "dahataanime",
    name: "dahataanime",
    email: "dahataanime@gmail.com",
    password: "12345678"
  },
  {
    username: "casha154",
    name: "casha154",
    email: "casha154@gmail.com",
    password: "12345678"
  },
  {
    username: "conejo_rosa",
    name: "conejo_rosa",
    email: "conejo_rosa@gmail.com",
    password: "12345678"
  },
  {
    username: "mayosumii",
    name: "mayosumii",
    email: "mayosumii@gmail.com",
    password: "12345678"
  },
  {
    username: "princce2459",
    name: "princce2459",
    email: "princce2459@gmail.com",
    password: "12345678"
  },
  {
    username: "faiahaato",
    name: "faiahaato",
    email: "faiahaato@gmail.com",
    password: "12345678"
  },
  {
    username: "ghyukai",
    name: "ghyukai",
    email: "ghyukai@gmail.com",
    password: "12345678"
  },
  {
    username: "sweetdeemon",
    name: "sweetdeemon",
    email: "sweetdeemon@gmail.com",
    password: "12345678"
  },
  {
    username: "gokusl",
    name: "gokusl",
    email: "gokusl@gmail.com",
    password: "12345678"
  },
  {
    username: "dennaz",
    name: "dennaz",
    email: "dennaz@gmail.com",
    password: "12345678"
  },
  {
    username: "yoviniart",
    name: "yoviniart",
    email: "yoviniart@gmail.com",
    password: "12345678"
  },
  {
    username: "dinal06",
    name: "dinal06",
    email: "dinal06@gmail.com",
    password: "12345678"
  },
  {
    username: "ratihtri",
    name: "ratihtri",
    email: "ratihtri@gmail.com",
    password: "12345678"
  },
  {
    username: "yassine_sey",
    name: "yassine_sey",
    email: "yassine_sey@gmail.com",
    password: "12345678"
  },
  {
    username: "efemena_agbaire",
    name: "efemena_agbaire",
    email: "efemena_agbaire@gmail.com",
    password: "12345678"
  },
  {
    username: "kindar995",
    name: "kindar995",
    email: "kindar995@gmail.com",
    password: "12345678"
  },
  {
    username: "vtuber_graphics",
    name: "vtuber_graphics",
    email: "vtuber_graphics@gmail.com",
    password: "12345678"
  },
  {
    username: "rissayori",
    name: "rissayori",
    email: "rissayori@gmail.com",
    password: "12345678"
  },
  {
    username: "y0on1e_",
    name: "y0on1e_",
    email: "y0on1e_@gmail.com",
    password: "12345678"
  },
  {
    username: "pzpana",
    name: "pzpana",
    email: "pzpana@gmail.com",
    password: "12345678"
  },
  {
    username: "hina0303",
    name: "hina0303",
    email: "hina0303@gmail.com",
    password: "12345678"
  },
  {
    username: "kholed_f",
    name: "kholed_f",
    email: "kholed_f@gmail.com",
    password: "12345678"
  },
  {
    username: "nflsrs",
    name: "nflsrs",
    email: "nflsrs@gmail.com",
    password: "12345678"
  },
  {
    username: "samaelsanche891",
    name: "samaelsanche891",
    email: "samaelsanche891@gmail.com",
    password: "12345678"
  },
  {
    username: "alipseda",
    name: "alipseda",
    email: "alipseda@gmail.com",
    password: "12345678"
  },
  {
    username: "udang_",
    name: "udang_",
    email: "udang_@gmail.com",
    password: "12345678"
  },
  {
    username: "zorkxa",
    name: "zorkxa",
    email: "zorkxa@gmail.com",
    password: "12345678"
  },
  {
    username: "triiachizu",
    name: "triiachizu",
    email: "triiachizu@gmail.com",
    password: "12345678"
  },
  {
    username: "alilippoi",
    name: "alilippoi",
    email: "alilippoi@gmail.com",
    password: "12345678"
  },
  {
    username: "alliumiao",
    name: "alliumiao",
    email: "alliumiao@gmail.com",
    password: "12345678"
  },
  {
    username: "sketshori",
    name: "sketshori",
    email: "sketshori@gmail.com",
    password: "12345678"
  },
  {
    username: "maotorata",
    name: "maotorata",
    email: "maotorata@gmail.com",
    password: "12345678"
  },
  {
    username: "equilaa",
    name: "equilaa",
    email: "equilaa@gmail.com",
    password: "12345678"
  },
  {
    username: "david_allan",
    name: "david_allan",
    email: "david_allan@gmail.com",
    password: "12345678"
  },
  {
    username: "otakraptor",
    name: "otakraptor",
    email: "otakraptor@gmail.com",
    password: "12345678"
  },
  {
    username: "soydamarisherna",
    name: "soydamarisherna",
    email: "soydamarisherna@gmail.com",
    password: "12345678"
  },
  {
    username: "keanoveart",
    name: "keanoveart",
    email: "keanoveart@gmail.com",
    password: "12345678"
  },
  {
    username: "klerwin",
    name: "klerwin",
    email: "klerwin@gmail.com",
    password: "12345678"
  },
  {
    username: "emsedesing",
    name: "emsedesing",
    email: "emsedesing@gmail.com",
    password: "12345678"
  },
  {
    username: "team_richmei",
    name: "team_richmei",
    email: "team_richmei@gmail.com",
    password: "12345678"
  },
  {
    username: "aniwaifuai",
    name: "aniwaifuai",
    email: "aniwaifuai@gmail.com",
    password: "12345678"
  },
  {
    username: "okamired",
    name: "okamired",
    email: "okamired@gmail.com",
    password: "12345678"
  },
  {
    username: "vincentjaya",
    name: "vincentjaya",
    email: "vincentjaya@gmail.com",
    password: "12345678"
  },
  {
    username: "inggit_awaliyah",
    name: "inggit_awaliyah",
    email: "inggit_awaliyah@gmail.com",
    password: "12345678"
  },
  {
    username: "mechbrainconcep",
    name: "mechbrainconcep",
    email: "mechbrainconcep@gmail.com",
    password: "12345678"
  },
  {
    username: "colaberry",
    name: "colaberry",
    email: "colaberry@gmail.com",
    password: "12345678"
  },
  {
    username: "alennarucoba",
    name: "alennarucoba",
    email: "alennarucoba@gmail.com",
    password: "12345678"
  },
  {
    username: "usagi1923",
    name: "usagi1923",
    email: "usagi1923@gmail.com",
    password: "12345678"
  },
  {
    username: "neverdusk",
    name: "neverdusk",
    email: "neverdusk@gmail.com",
    password: "12345678"
  },
  {
    username: "notionart",
    name: "notionart",
    email: "notionart@gmail.com",
    password: "12345678"
  },
  {
    username: "kairikazu",
    name: "kairikazu",
    email: "kairikazu@gmail.com",
    password: "12345678"
  },
  {
    username: "noyart",
    name: "noyart",
    email: "noyart@gmail.com",
    password: "12345678"
  },
  {
    username: "harisunstudios",
    name: "harisunstudios",
    email: "harisunstudios@gmail.com",
    password: "12345678"
  },
  {
    username: "argiansyah",
    name: "argiansyah",
    email: "argiansyah@gmail.com",
    password: "12345678"
  },
  {
    username: "g4vtuber",
    name: "g4vtuber",
    email: "g4vtuber@gmail.com",
    password: "12345678"
  },
  {
    username: "tanpeiii",
    name: "tanpeiii",
    email: "tanpeiii@gmail.com",
    password: "12345678"
  },
  {
    username: "dylanjjp",
    name: "dylanjjp",
    email: "dylanjjp@gmail.com",
    password: "12345678"
  },
  {
    username: "nogame_kun",
    name: "nogame_kun",
    email: "nogame_kun@gmail.com",
    password: "12345678"
  },
  {
    username: "potatodahamster",
    name: "potatodahamster",
    email: "potatodahamster@gmail.com",
    password: "12345678"
  },
  {
    username: "aishcream24",
    name: "aishcream24",
    email: "aishcream24@gmail.com",
    password: "12345678"
  },
  {
    username: "noatriz",
    name: "noatriz",
    email: "noatriz@gmail.com",
    password: "12345678"
  },
  {
    username: "tfnfe_sach",
    name: "tfnfe_sach",
    email: "tfnfe_sach@gmail.com",
    password: "12345678"
  },
  {
    username: "leandronotado",
    name: "leandronotado",
    email: "leandronotado@gmail.com",
    password: "12345678"
  },
  {
    username: "lyy___",
    name: "lyy___",
    email: "lyy___@gmail.com",
    password: "12345678"
  },
  {
    username: "geerux_",
    name: "geerux_",
    email: "geerux_@gmail.com",
    password: "12345678"
  },
  {
    username: "qeemera",
    name: "qeemera",
    email: "qeemera@gmail.com",
    password: "12345678"
  },
  {
    username: "papoy_banana",
    name: "papoy_banana",
    email: "papoy_banana@gmail.com",
    password: "12345678"
  },
  {
    username: "izeunne",
    name: "izeunne",
    email: "izeunne@gmail.com",
    password: "12345678"
  },
  {
    username: "liilica",
    name: "liilica",
    email: "liilica@gmail.com",
    password: "12345678"
  },
  {
    username: "jesussantana351",
    name: "jesussantana351",
    email: "jesussantana351@gmail.com",
    password: "12345678"
  },
  {
    username: "rnfdrawing",
    name: "rnfdrawing",
    email: "rnfdrawing@gmail.com",
    password: "12345678"
  },
  {
    username: "julilee",
    name: "julilee",
    email: "julilee@gmail.com",
    password: "12345678"
  },
  {
    username: "mnash884",
    name: "mnash884",
    email: "mnash884@gmail.com",
    password: "12345678"
  },
  {
    username: "kelelowor",
    name: "kelelowor",
    email: "kelelowor@gmail.com",
    password: "12345678"
  },
  {
    username: "jasperlim",
    name: "jasperlim",
    email: "jasperlim@gmail.com",
    password: "12345678"
  },
  {
    username: "mladjaart",
    name: "mladjaart",
    email: "mladjaart@gmail.com",
    password: "12345678"
  },
  {
    username: "javanart",
    name: "javanart",
    email: "javanart@gmail.com",
    password: "12345678"
  },
  {
    username: "sumonjisan786",
    name: "sumonjisan786",
    email: "sumonjisan786@gmail.com",
    password: "12345678"
  },
  {
    username: "shamim5181",
    name: "shamim5181",
    email: "shamim5181@gmail.com",
    password: "12345678"
  },
  {
    username: "sakibhasan480",
    name: "sakibhasan480",
    email: "sakibhasan480@gmail.com",
    password: "12345678"
  },
  {
    username: "pixelscure",
    name: "pixelscure",
    email: "pixelscure@gmail.com",
    password: "12345678"
  },
  {
    username: "gustavogorgone",
    name: "gustavogorgone",
    email: "gustavogorgone@gmail.com",
    password: "12345678"
  },
  {
    username: "vijaytn41",
    name: "vijaytn41",
    email: "vijaytn41@gmail.com",
    password: "12345678"
  },
  {
    username: "abdurrohmanalha",
    name: "abdurrohmanalha",
    email: "abdurrohmanalha@gmail.com",
    password: "12345678"
  },
  {
    username: "volegian",
    name: "volegian",
    email: "volegian@gmail.com",
    password: "12345678"
  },
  {
    username: "nymurkhan",
    name: "nymurkhan",
    email: "nymurkhan@gmail.com",
    password: "12345678"
  },
  {
    username: "e_word_graphic",
    name: "e_word_graphic",
    email: "e_word_graphic@gmail.com",
    password: "12345678"
  },
  {
    username: "damngods",
    name: "damngods",
    email: "damngods@gmail.com",
    password: "12345678"
  },
  {
    username: "venivenikr",
    name: "venivenikr",
    email: "venivenikr@gmail.com",
    password: "12345678"
  },
  {
    username: "phis_animations",
    name: "phis_animations",
    email: "phis_animations@gmail.com",
    password: "12345678"
  },
  {
    username: "devi_novita",
    name: "devi_novita",
    email: "devi_novita@gmail.com",
    password: "12345678"
  },
  {
    username: "exxart",
    name: "exxart",
    email: "exxart@gmail.com",
    password: "12345678"
  },
  {
    username: "mettawijaksana",
    name: "mettawijaksana",
    email: "mettawijaksana@gmail.com",
    password: "12345678"
  },
  {
    username: "eminencesys",
    name: "eminencesys",
    email: "eminencesys@gmail.com",
    password: "12345678"
  },
  {
    username: "goregasmic",
    name: "goregasmic",
    email: "goregasmic@gmail.com",
    password: "12345678"
  },
  {
    username: "danieldomm",
    name: "danieldomm",
    email: "danieldomm@gmail.com",
    password: "12345678"
  },
  {
    username: "lewreid",
    name: "lewreid",
    email: "lewreid@gmail.com",
    password: "12345678"
  },
  {
    username: "katerinadot",
    name: "katerinadot",
    email: "katerinadot@gmail.com",
    password: "12345678"
  },
  {
    username: "donartmagic",
    name: "donartmagic",
    email: "donartmagic@gmail.com",
    password: "12345678"
  },
  {
    username: "ranazain597",
    name: "ranazain597",
    email: "ranazain597@gmail.com",
    password: "12345678"
  },
  {
    username: "alex1wing",
    name: "alex1wing",
    email: "alex1wing@gmail.com",
    password: "12345678"
  },
  {
    username: "reindrawthings",
    name: "reindrawthings",
    email: "reindrawthings@gmail.com",
    password: "12345678"
  },
  {
    username: "ryant92",
    name: "ryant92",
    email: "ryant92@gmail.com",
    password: "12345678"
  },
  {
    username: "mak109",
    name: "mak109",
    email: "mak109@gmail.com",
    password: "12345678"
  },
  {
    username: "musaddar",
    name: "musaddar",
    email: "musaddar@gmail.com",
    password: "12345678"
  },
  {
    username: "fatimaseehar",
    name: "fatimaseehar",
    email: "fatimaseehar@gmail.com",
    password: "12345678"
  },
  {
    username: "awanpena",
    name: "awanpena",
    email: "awanpena@gmail.com",
    password: "12345678"
  },
  {
    username: "giuseppegianni",
    name: "giuseppegianni",
    email: "giuseppegianni@gmail.com",
    password: "12345678"
  },
  {
    username: "achith_",
    name: "achith_",
    email: "achith_@gmail.com",
    password: "12345678"
  },
  {
    username: "anastasisoroka",
    name: "anastasisoroka",
    email: "anastasisoroka@gmail.com",
    password: "12345678"
  },
  {
    username: "deny_wicka",
    name: "deny_wicka",
    email: "deny_wicka@gmail.com",
    password: "12345678"
  },
  {
    username: "john062",
    name: "john062",
    email: "john062@gmail.com",
    password: "12345678"
  },
  {
    username: "stencilsensei",
    name: "stencilsensei",
    email: "stencilsensei@gmail.com",
    password: "12345678"
  },
  {
    username: "pafgraphics",
    name: "pafgraphics",
    email: "pafgraphics@gmail.com",
    password: "12345678"
  },
  {
    username: "linkrawkartwork",
    name: "linkrawkartwork",
    email: "linkrawkartwork@gmail.com",
    password: "12345678"
  },
  {
    username: "afiant",
    name: "afiant",
    email: "afiant@gmail.com",
    password: "12345678"
  },
  {
    username: "adoraarts_",
    name: "adoraarts_",
    email: "adoraarts_@gmail.com",
    password: "12345678"
  },
  {
    username: "rajdeepsingh070",
    name: "rajdeepsingh070",
    email: "rajdeepsingh070@gmail.com",
    password: "12345678"
  },
  {
    username: "save_eric",
    name: "save_eric",
    email: "save_eric@gmail.com",
    password: "12345678"
  },
  {
    username: "tonymidi",
    name: "tonymidi",
    email: "tonymidi@gmail.com",
    password: "12345678"
  },
  {
    username: "ricardomossini7",
    name: "ricardomossini7",
    email: "ricardomossini7@gmail.com",
    password: "12345678"
  },
  {
    username: "patentdrawings",
    name: "patentdrawings",
    email: "patentdrawings@gmail.com",
    password: "12345678"
  },
  {
    username: "nalalya",
    name: "nalalya",
    email: "nalalya@gmail.com",
    password: "12345678"
  },
  {
    username: "agneszakaria",
    name: "agneszakaria",
    email: "agneszakaria@gmail.com",
    password: "12345678"
  },
  {
    username: "aleksandra06",
    name: "aleksandra06",
    email: "aleksandra06@gmail.com",
    password: "12345678"
  },
  {
    username: "saboakdag",
    name: "saboakdag",
    email: "saboakdag@gmail.com",
    password: "12345678"
  },
  {
    username: "shizukahanari",
    name: "shizukahanari",
    email: "shizukahanari@gmail.com",
    password: "12345678"
  },
  {
    username: "m_faseeh7",
    name: "m_faseeh7",
    email: "m_faseeh7@gmail.com",
    password: "12345678"
  },
  {
    username: "batafuth101",
    name: "batafuth101",
    email: "batafuth101@gmail.com",
    password: "12345678"
  },
  {
    username: "chaimholtjer",
    name: "chaimholtjer",
    email: "chaimholtjer@gmail.com",
    password: "12345678"
  },
  {
    username: "erickdsgn",
    name: "erickdsgn",
    email: "erickdsgn@gmail.com",
    password: "12345678"
  },
  {
    username: "dandipdn",
    name: "dandipdn",
    email: "dandipdn@gmail.com",
    password: "12345678"
  },
  {
    username: "ipamia",
    name: "ipamia",
    email: "ipamia@gmail.com",
    password: "12345678"
  },
  {
    username: "mary_savko",
    name: "mary_savko",
    email: "mary_savko@gmail.com",
    password: "12345678"
  },
  {
    username: "deepakkumar54",
    name: "deepakkumar54",
    email: "deepakkumar54@gmail.com",
    password: "12345678"
  },
  {
    username: "crushnickred",
    name: "crushnickred",
    email: "crushnickred@gmail.com",
    password: "12345678"
  },
  {
    username: "rotna03",
    name: "rotna03",
    email: "rotna03@gmail.com",
    password: "12345678"
  },
  {
    username: "radennorfiqri",
    name: "radennorfiqri",
    email: "radennorfiqri@gmail.com",
    password: "12345678"
  },
  {
    username: "cherrydemon",
    name: "cherrydemon",
    email: "cherrydemon@gmail.com",
    password: "12345678"
  },
  {
    username: "yunaz_ant",
    name: "yunaz_ant",
    email: "yunaz_ant@gmail.com",
    password: "12345678"
  },
  {
    username: "mifta96",
    name: "mifta96",
    email: "mifta96@gmail.com",
    password: "12345678"
  },
  {
    username: "jherfan",
    name: "jherfan",
    email: "jherfan@gmail.com",
    password: "12345678"
  },
  {
    username: "jeeshiu",
    name: "jeeshiu",
    email: "jeeshiu@gmail.com",
    password: "12345678"
  },
  {
    username: "raster2vector",
    name: "raster2vector",
    email: "raster2vector@gmail.com",
    password: "12345678"
  },
  {
    username: "nguyenngocthach",
    name: "nguyenngocthach",
    email: "nguyenngocthach@gmail.com",
    password: "12345678"
  },
  {
    username: "bloodonice",
    name: "bloodonice",
    email: "bloodonice@gmail.com",
    password: "12345678"
  },
  {
    username: "faisalamin472",
    name: "faisalamin472",
    email: "faisalamin472@gmail.com",
    password: "12345678"
  },
  {
    username: "jayaprastya",
    name: "jayaprastya",
    email: "jayaprastya@gmail.com",
    password: "12345678"
  },
  {
    username: "fukamihb",
    name: "fukamihb",
    email: "fukamihb@gmail.com",
    password: "12345678"
  },
  {
    username: "sabiraputul",
    name: "sabiraputul",
    email: "sabiraputul@gmail.com",
    password: "12345678"
  },
  {
    username: "asmomarfaruk",
    name: "asmomarfaruk",
    email: "asmomarfaruk@gmail.com",
    password: "12345678"
  },
  {
    username: "tienmx11",
    name: "tienmx11",
    email: "tienmx11@gmail.com",
    password: "12345678"
  },
  {
    username: "nekovoid",
    name: "nekovoid",
    email: "nekovoid@gmail.com",
    password: "12345678"
  },
  {
    username: "eijazz",
    name: "eijazz",
    email: "eijazz@gmail.com",
    password: "12345678"
  },
  {
    username: "gouache7",
    name: "gouache7",
    email: "gouache7@gmail.com",
    password: "12345678"
  },
  {
    username: "fassal_be",
    name: "fassal_be",
    email: "fassal_be@gmail.com",
    password: "12345678"
  },
  {
    username: "freddievincent",
    name: "freddievincent",
    email: "freddievincent@gmail.com",
    password: "12345678"
  },
  {
    username: "ropidarmansyah",
    name: "ropidarmansyah",
    email: "ropidarmansyah@gmail.com",
    password: "12345678"
  },
  {
    username: "elmagnificoart",
    name: "elmagnificoart",
    email: "elmagnificoart@gmail.com",
    password: "12345678"
  },
  {
    username: "zuhdise",
    name: "zuhdise",
    email: "zuhdise@gmail.com",
    password: "12345678"
  },
  {
    username: "drishhtiiii",
    name: "drishhtiiii",
    email: "drishhtiiii@gmail.com",
    password: "12345678"
  },
  {
    username: "savannahkswnd",
    name: "savannahkswnd",
    email: "savannahkswnd@gmail.com",
    password: "12345678"
  },
  {
    username: "induranga596",
    name: "induranga596",
    email: "induranga596@gmail.com",
    password: "12345678"
  },
  {
    username: "juancruzvitelli",
    name: "juancruzvitelli",
    email: "juancruzvitelli@gmail.com",
    password: "12345678"
  },
  {
    username: "rafifathurrohma",
    name: "rafifathurrohma",
    email: "rafifathurrohma@gmail.com",
    password: "12345678"
  },
  {
    username: "kavi7755",
    name: "kavi7755",
    email: "kavi7755@gmail.com",
    password: "12345678"
  },
  {
    username: "gushadi",
    name: "gushadi",
    email: "gushadi@gmail.com",
    password: "12345678"
  },
  {
    username: "yosafat_catur",
    name: "yosafat_catur",
    email: "yosafat_catur@gmail.com",
    password: "12345678"
  },
  {
    username: "decorafis",
    name: "decorafis",
    email: "decorafis@gmail.com",
    password: "12345678"
  },
  {
    username: "logostate",
    name: "logostate",
    email: "logostate@gmail.com",
    password: "12345678"
  },
  {
    username: "virginiamtnez",
    name: "virginiamtnez",
    email: "virginiamtnez@gmail.com",
    password: "12345678"
  },
  {
    username: "gudkraf",
    name: "gudkraf",
    email: "gudkraf@gmail.com",
    password: "12345678"
  },
  {
    username: "ariyan95",
    name: "ariyan95",
    email: "ariyan95@gmail.com",
    password: "12345678"
  },
  {
    username: "ateryx_",
    name: "ateryx_",
    email: "ateryx_@gmail.com",
    password: "12345678"
  },
  {
    username: "rupert_jake",
    name: "rupert_jake",
    email: "rupert_jake@gmail.com",
    password: "12345678"
  },
  {
    username: "karozdesign",
    name: "karozdesign",
    email: "karozdesign@gmail.com",
    password: "12345678"
  },
  {
    username: "mdhasinuzzaman",
    name: "mdhasinuzzaman",
    email: "mdhasinuzzaman@gmail.com",
    password: "12345678"
  },
  {
    username: "soesdraw",
    name: "soesdraw",
    email: "soesdraw@gmail.com",
    password: "12345678"
  },
  {
    username: "raththalage",
    name: "raththalage",
    email: "raththalage@gmail.com",
    password: "12345678"
  },
  {
    username: "vector_graphy",
    name: "vector_graphy",
    email: "vector_graphy@gmail.com",
    password: "12345678"
  },
  {
    username: "galihramadlan",
    name: "galihramadlan",
    email: "galihramadlan@gmail.com",
    password: "12345678"
  },
  {
    username: "yarilochka",
    name: "yarilochka",
    email: "yarilochka@gmail.com",
    password: "12345678"
  },
  {
    username: "bipudaskajol",
    name: "bipudaskajol",
    email: "bipudaskajol@gmail.com",
    password: "12345678"
  },
  {
    username: "lanart_",
    name: "lanart_",
    email: "lanart_@gmail.com",
    password: "12345678"
  },
  {
    username: "bea_davila",
    name: "bea_davila",
    email: "bea_davila@gmail.com",
    password: "12345678"
  },
  {
    username: "antaripaarts",
    name: "antaripaarts",
    email: "antaripaarts@gmail.com",
    password: "12345678"
  },
  {
    username: "gilmoyang",
    name: "gilmoyang",
    email: "gilmoyang@gmail.com",
    password: "12345678"
  },
  {
    username: "creativespacewo",
    name: "creativespacewo",
    email: "creativespacewo@gmail.com",
    password: "12345678"
  },
  {
    username: "aliusman10",
    name: "aliusman10",
    email: "aliusman10@gmail.com",
    password: "12345678"
  },
  {
    username: "farhanfaiz",
    name: "farhanfaiz",
    email: "farhanfaiz@gmail.com",
    password: "12345678"
  },
  {
    username: "andvect_dp",
    name: "andvect_dp",
    email: "andvect_dp@gmail.com",
    password: "12345678"
  },
  {
    username: "sultanaart",
    name: "sultanaart",
    email: "sultanaart@gmail.com",
    password: "12345678"
  },
  {
    username: "santi777",
    name: "santi777",
    email: "santi777@gmail.com",
    password: "12345678"
  },
  {
    username: "najibfatikhun",
    name: "najibfatikhun",
    email: "najibfatikhun@gmail.com",
    password: "12345678"
  },
  {
    username: "akbarlucu",
    name: "akbarlucu",
    email: "akbarlucu@gmail.com",
    password: "12345678"
  },
  {
    username: "bymarmara",
    name: "bymarmara",
    email: "bymarmara@gmail.com",
    password: "12345678"
  },
  {
    username: "hasher2019",
    name: "hasher2019",
    email: "hasher2019@gmail.com",
    password: "12345678"
  },
  {
    username: "samsitara",
    name: "samsitara",
    email: "samsitara@gmail.com",
    password: "12345678"
  },
  {
    username: "quickkdesign",
    name: "quickkdesign",
    email: "quickkdesign@gmail.com",
    password: "12345678"
  },
  {
    username: "mariettis",
    name: "mariettis",
    email: "mariettis@gmail.com",
    password: "12345678"
  },
  {
    username: "filandesign",
    name: "filandesign",
    email: "filandesign@gmail.com",
    password: "12345678"
  },
  {
    username: "mirifada",
    name: "mirifada",
    email: "mirifada@gmail.com",
    password: "12345678"
  },
  {
    username: "fancyartist",
    name: "fancyartist",
    email: "fancyartist@gmail.com",
    password: "12345678"
  },
  {
    username: "annalight",
    name: "annalight",
    email: "annalight@gmail.com",
    password: "12345678"
  },
  {
    username: "andreajolie030",
    name: "andreajolie030",
    email: "andreajolie030@gmail.com",
    password: "12345678"
  },
  {
    username: "tamanna14111986",
    name: "tamanna14111986",
    email: "tamanna14111986@gmail.com",
    password: "12345678"
  },
  {
    username: "novaya371",
    name: "novaya371",
    email: "novaya371@gmail.com",
    password: "12345678"
  },
  {
    username: "sajee_changer",
    name: "sajee_changer",
    email: "sajee_changer@gmail.com",
    password: "12345678"
  },
  {
    username: "waqasilyas945",
    name: "waqasilyas945",
    email: "waqasilyas945@gmail.com",
    password: "12345678"
  },
  {
    username: "eman_16",
    name: "eman_16",
    email: "eman_16@gmail.com",
    password: "12345678"
  },
  {
    username: "humaansari55",
    name: "humaansari55",
    email: "humaansari55@gmail.com",
    password: "12345678"
  },
  {
    username: "arnikodetanto",
    name: "arnikodetanto",
    email: "arnikodetanto@gmail.com",
    password: "12345678"
  },
  {
    username: "vectorfox",
    name: "vectorfox",
    email: "vectorfox@gmail.com",
    password: "12345678"
  },
  {
    username: "dhanushikasilva",
    name: "dhanushikasilva",
    email: "dhanushikasilva@gmail.com",
    password: "12345678"
  },
  {
    username: "kseniia_zh",
    name: "kseniia_zh",
    email: "kseniia_zh@gmail.com",
    password: "12345678"
  },
  {
    username: "phenomenal_tech",
    name: "phenomenal_tech",
    email: "phenomenal_tech@gmail.com",
    password: "12345678"
  },
  {
    username: "shwetarawat",
    name: "shwetarawat",
    email: "shwetarawat@gmail.com",
    password: "12345678"
  },
  {
    username: "bbf_design1",
    name: "bbf_design1",
    email: "bbf_design1@gmail.com",
    password: "12345678"
  },
  {
    username: "polinamussse",
    name: "polinamussse",
    email: "polinamussse@gmail.com",
    password: "12345678"
  },
  {
    username: "roshnirote",
    name: "roshnirote",
    email: "roshnirote@gmail.com",
    password: "12345678"
  },
  {
    username: "zayns5",
    name: "zayns5",
    email: "zayns5@gmail.com",
    password: "12345678"
  },
  {
    username: "artykate",
    name: "artykate",
    email: "artykate@gmail.com",
    password: "12345678"
  },
  {
    username: "nichaan",
    name: "nichaan",
    email: "nichaan@gmail.com",
    password: "12345678"
  },
  {
    username: "graphic_plus1",
    name: "graphic_plus1",
    email: "graphic_plus1@gmail.com",
    password: "12345678"
  },
  {
    username: "khateejaa",
    name: "khateejaa",
    email: "khateejaa@gmail.com",
    password: "12345678"
  },
  {
    username: "ifrat_jahan",
    name: "ifrat_jahan",
    email: "ifrat_jahan@gmail.com",
    password: "12345678"
  },
  {
    username: "lisa_elin_dutch",
    name: "lisa_elin_dutch",
    email: "lisa_elin_dutch@gmail.com",
    password: "12345678"
  },
  {
    username: "illusionroom",
    name: "illusionroom",
    email: "illusionroom@gmail.com",
    password: "12345678"
  },
  {
    username: "vectplanet",
    name: "vectplanet",
    email: "vectplanet@gmail.com",
    password: "12345678"
  },
  {
    username: "faizajaved949",
    name: "faizajaved949",
    email: "faizajaved949@gmail.com",
    password: "12345678"
  },
  {
    username: "janugajanayake",
    name: "janugajanayake",
    email: "janugajanayake@gmail.com",
    password: "12345678"
  },
  {
    username: "itz_anm",
    name: "itz_anm",
    email: "itz_anm@gmail.com",
    password: "12345678"
  },
  {
    username: "sabacreates",
    name: "sabacreates",
    email: "sabacreates@gmail.com",
    password: "12345678"
  },
  {
    username: "mahmudulhasa260",
    name: "mahmudulhasa260",
    email: "mahmudulhasa260@gmail.com",
    password: "12345678"
  },
  {
    username: "studio141",
    name: "studio141",
    email: "studio141@gmail.com",
    password: "12345678"
  },
  {
    username: "hanacreator",
    name: "hanacreator",
    email: "hanacreator@gmail.com",
    password: "12345678"
  },
  {
    username: "zaintextile123",
    name: "zaintextile123",
    email: "zaintextile123@gmail.com",
    password: "12345678"
  },
  {
    username: "abdelalijordani",
    name: "abdelalijordani",
    email: "abdelalijordani@gmail.com",
    password: "12345678"
  },
  {
    username: "seemabgill",
    name: "seemabgill",
    email: "seemabgill@gmail.com",
    password: "12345678"
  },
  {
    username: "sokol_artstudio",
    name: "sokol_artstudio",
    email: "sokol_artstudio@gmail.com",
    password: "12345678"
  },
  {
    username: "hayasajid",
    name: "hayasajid",
    email: "hayasajid@gmail.com",
    password: "12345678"
  },
  {
    username: "iamqurratulain",
    name: "iamqurratulain",
    email: "iamqurratulain@gmail.com",
    password: "12345678"
  },
  {
    username: "kainatt1",
    name: "kainatt1",
    email: "kainatt1@gmail.com",
    password: "12345678"
  },
  {
    username: "fikrihidajat",
    name: "fikrihidajat",
    email: "fikrihidajat@gmail.com",
    password: "12345678"
  },
  {
    username: "solanat",
    name: "solanat",
    email: "solanat@gmail.com",
    password: "12345678"
  },
  {
    username: "a_aesthete_e",
    name: "a_aesthete_e",
    email: "a_aesthete_e@gmail.com",
    password: "12345678"
  },
  {
    username: "maryumgulzar",
    name: "maryumgulzar",
    email: "maryumgulzar@gmail.com",
    password: "12345678"
  },
  {
    username: "ulfat1616",
    name: "ulfat1616",
    email: "ulfat1616@gmail.com",
    password: "12345678"
  },
  {
    username: "siddikhp",
    name: "siddikhp",
    email: "siddikhp@gmail.com",
    password: "12345678"
  },
  {
    username: "estudioneb",
    name: "estudioneb",
    email: "estudioneb@gmail.com",
    password: "12345678"
  },
  {
    username: "najwaaris",
    name: "najwaaris",
    email: "najwaaris@gmail.com",
    password: "12345678"
  },
  {
    username: "momenaishaq",
    name: "momenaishaq",
    email: "momenaishaq@gmail.com",
    password: "12345678"
  },
  {
    username: "lunakarin",
    name: "lunakarin",
    email: "lunakarin@gmail.com",
    password: "12345678"
  },
  {
    username: "aklimabernard",
    name: "aklimabernard",
    email: "aklimabernard@gmail.com",
    password: "12345678"
  },
  {
    username: "monikapuo",
    name: "monikapuo",
    email: "monikapuo@gmail.com",
    password: "12345678"
  },
  {
    username: "soch_gd",
    name: "soch_gd",
    email: "soch_gd@gmail.com",
    password: "12345678"
  },
  {
    username: "shahadatsetubd",
    name: "shahadatsetubd",
    email: "shahadatsetubd@gmail.com",
    password: "12345678"
  },
  {
    username: "hafizaamin",
    name: "hafizaamin",
    email: "hafizaamin@gmail.com",
    password: "12345678"
  },
  {
    username: "nooriasaud",
    name: "nooriasaud",
    email: "nooriasaud@gmail.com",
    password: "12345678"
  },
  {
    username: "logomaker7863",
    name: "logomaker7863",
    email: "logomaker7863@gmail.com",
    password: "12345678"
  },
  {
    username: "anjoleena_26",
    name: "anjoleena_26",
    email: "anjoleena_26@gmail.com",
    password: "12345678"
  },
  {
    username: "jannatyaqoob_",
    name: "jannatyaqoob_",
    email: "jannatyaqoob_@gmail.com",
    password: "12345678"
  },
  {
    username: "goseeu",
    name: "goseeu",
    email: "goseeu@gmail.com",
    password: "12345678"
  },
  {
    username: "pixcel_studio",
    name: "pixcel_studio",
    email: "pixcel_studio@gmail.com",
    password: "12345678"
  },
  {
    username: "usman_mani10",
    name: "usman_mani10",
    email: "usman_mani10@gmail.com",
    password: "12345678"
  },
  {
    username: "h_bgraphics12",
    name: "h_bgraphics12",
    email: "h_bgraphics12@gmail.com",
    password: "12345678"
  },
  {
    username: "asmahanif991",
    name: "asmahanif991",
    email: "asmahanif991@gmail.com",
    password: "12345678"
  },
  {
    username: "mhtomal",
    name: "mhtomal",
    email: "mhtomal@gmail.com",
    password: "12345678"
  },
  {
    username: "dr_graficx",
    name: "dr_graficx",
    email: "dr_graficx@gmail.com",
    password: "12345678"
  },
  {
    username: "afaqalam193",
    name: "afaqalam193",
    email: "afaqalam193@gmail.com",
    password: "12345678"
  },
  {
    username: "a_alahakoon",
    name: "a_alahakoon",
    email: "a_alahakoon@gmail.com",
    password: "12345678"
  },
  {
    username: "renatara",
    name: "renatara",
    email: "renatara@gmail.com",
    password: "12345678"
  },
  {
    username: "thegiftery",
    name: "thegiftery",
    email: "thegiftery@gmail.com",
    password: "12345678"
  },
  {
    username: "sabawajid782",
    name: "sabawajid782",
    email: "sabawajid782@gmail.com",
    password: "12345678"
  },
  {
    username: "studiokeyko",
    name: "studiokeyko",
    email: "studiokeyko@gmail.com",
    password: "12345678"
  },
  {
    username: "katiealiceh",
    name: "katiealiceh",
    email: "katiealiceh@gmail.com",
    password: "12345678"
  },
  {
    username: "monikwnek",
    name: "monikwnek",
    email: "monikwnek@gmail.com",
    password: "12345678"
  },
  {
    username: "eraseras",
    name: "eraseras",
    email: "eraseras@gmail.com",
    password: "12345678"
  },
  {
    username: "rachelrusak",
    name: "rachelrusak",
    email: "rachelrusak@gmail.com",
    password: "12345678"
  },
  {
    username: "minasparklina",
    name: "minasparklina",
    email: "minasparklina@gmail.com",
    password: "12345678"
  },
  {
    username: "afrocreation",
    name: "afrocreation",
    email: "afrocreation@gmail.com",
    password: "12345678"
  },
  {
    username: "byingrid",
    name: "byingrid",
    email: "byingrid@gmail.com",
    password: "12345678"
  },
  {
    username: "asad9863",
    name: "asad9863",
    email: "asad9863@gmail.com",
    password: "12345678"
  },
  {
    username: "evakocharian",
    name: "evakocharian",
    email: "evakocharian@gmail.com",
    password: "12345678"
  },
  {
    username: "slavkokahovsky",
    name: "slavkokahovsky",
    email: "slavkokahovsky@gmail.com",
    password: "12345678"
  },
  {
    username: "adeliavellawati",
    name: "adeliavellawati",
    email: "adeliavellawati@gmail.com",
    password: "12345678"
  },
  {
    username: "studiolumitex",
    name: "studiolumitex",
    email: "studiolumitex@gmail.com",
    password: "12345678"
  },
  {
    username: "masoudtaki",
    name: "masoudtaki",
    email: "masoudtaki@gmail.com",
    password: "12345678"
  },
  {
    username: "yourwaystyle",
    name: "yourwaystyle",
    email: "yourwaystyle@gmail.com",
    password: "12345678"
  },
  {
    username: "yungracer",
    name: "yungracer",
    email: "yungracer@gmail.com",
    password: "12345678"
  },
  {
    username: "visiondsgns",
    name: "visiondsgns",
    email: "visiondsgns@gmail.com",
    password: "12345678"
  },
  {
    username: "uccheyyy",
    name: "uccheyyy",
    email: "uccheyyy@gmail.com",
    password: "12345678"
  },
  {
    username: "missirshad",
    name: "missirshad",
    email: "missirshad@gmail.com",
    password: "12345678"
  },
  {
    username: "fariha_nadeem",
    name: "fariha_nadeem",
    email: "fariha_nadeem@gmail.com",
    password: "12345678"
  },
  {
    username: "louisventura",
    name: "louisventura",
    email: "louisventura@gmail.com",
    password: "12345678"
  },
  {
    username: "atik6733",
    name: "atik6733",
    email: "atik6733@gmail.com",
    password: "12345678"
  },
  {
    username: "ashfaqshah_007",
    name: "ashfaqshah_007",
    email: "ashfaqshah_007@gmail.com",
    password: "12345678"
  },
  {
    username: "ewuramakwofie",
    name: "ewuramakwofie",
    email: "ewuramakwofie@gmail.com",
    password: "12345678"
  },
  {
    username: "rmtextile",
    name: "rmtextile",
    email: "rmtextile@gmail.com",
    password: "12345678"
  },
  {
    username: "omniverse360",
    name: "omniverse360",
    email: "omniverse360@gmail.com",
    password: "12345678"
  },
  {
    username: "qiqadesign",
    name: "qiqadesign",
    email: "qiqadesign@gmail.com",
    password: "12345678"
  },
  {
    username: "oca_sabhila",
    name: "oca_sabhila",
    email: "oca_sabhila@gmail.com",
    password: "12345678"
  },
  {
    username: "mmshani",
    name: "mmshani",
    email: "mmshani@gmail.com",
    password: "12345678"
  },
  {
    username: "flostudio",
    name: "flostudio",
    email: "flostudio@gmail.com",
    password: "12345678"
  },
  {
    username: "aishakhan9221",
    name: "aishakhan9221",
    email: "aishakhan9221@gmail.com",
    password: "12345678"
  },
  {
    username: "shahzadjavai901",
    name: "shahzadjavai901",
    email: "shahzadjavai901@gmail.com",
    password: "12345678"
  },
  {
    username: "andreeacauta",
    name: "andreeacauta",
    email: "andreeacauta@gmail.com",
    password: "12345678"
  },
  {
    username: "vanidesigner",
    name: "vanidesigner",
    email: "vanidesigner@gmail.com",
    password: "12345678"
  },
  {
    username: "designz_geek",
    name: "designz_geek",
    email: "designz_geek@gmail.com",
    password: "12345678"
  },
  {
    username: "hndesign710",
    name: "hndesign710",
    email: "hndesign710@gmail.com",
    password: "12345678"
  },
  {
    username: "rsbrad",
    name: "rsbrad",
    email: "rsbrad@gmail.com",
    password: "12345678"
  },
  {
    username: "munirsheikh2019",
    name: "munirsheikh2019",
    email: "munirsheikh2019@gmail.com",
    password: "12345678"
  },
  {
    username: "katarinaldesign",
    name: "katarinaldesign",
    email: "katarinaldesign@gmail.com",
    password: "12345678"
  },
  {
    username: "ivanamundja",
    name: "ivanamundja",
    email: "ivanamundja@gmail.com",
    password: "12345678"
  },
  {
    username: "ahmadmukhtar18",
    name: "ahmadmukhtar18",
    email: "ahmadmukhtar18@gmail.com",
    password: "12345678"
  },
  {
    username: "yumnamuazzam",
    name: "yumnamuazzam",
    email: "yumnamuazzam@gmail.com",
    password: "12345678"
  },
  {
    username: "maryamateeq28",
    name: "maryamateeq28",
    email: "maryamateeq28@gmail.com",
    password: "12345678"
  },
  {
    username: "crazyaboutunive",
    name: "crazyaboutunive",
    email: "crazyaboutunive@gmail.com",
    password: "12345678"
  },
  {
    username: "belagraphic",
    name: "belagraphic",
    email: "belagraphic@gmail.com",
    password: "12345678"
  },
  {
    username: "michael_mb",
    name: "michael_mb",
    email: "michael_mb@gmail.com",
    password: "12345678"
  },
  {
    username: "maprarthana",
    name: "maprarthana",
    email: "maprarthana@gmail.com",
    password: "12345678"
  },
  {
    username: "damien031266",
    name: "damien031266",
    email: "damien031266@gmail.com",
    password: "12345678"
  },
  {
    username: "melissawales",
    name: "melissawales",
    email: "melissawales@gmail.com",
    password: "12345678"
  },
  {
    username: "razinaathar",
    name: "razinaathar",
    email: "razinaathar@gmail.com",
    password: "12345678"
  },
  {
    username: "farahfh",
    name: "farahfh",
    email: "farahfh@gmail.com",
    password: "12345678"
  },
  {
    username: "analuizasanti",
    name: "analuizasanti",
    email: "analuizasanti@gmail.com",
    password: "12345678"
  },
  {
    username: "creative_zilla",
    name: "creative_zilla",
    email: "creative_zilla@gmail.com",
    password: "12345678"
  },
  {
    username: "illustrationss",
    name: "illustrationss",
    email: "illustrationss@gmail.com",
    password: "12345678"
  },
  {
    username: "mayurmore9909",
    name: "mayurmore9909",
    email: "mayurmore9909@gmail.com",
    password: "12345678"
  },
  {
    username: "reinapatterns",
    name: "reinapatterns",
    email: "reinapatterns@gmail.com",
    password: "12345678"
  },
  {
    username: "thefloraartist",
    name: "thefloraartist",
    email: "thefloraartist@gmail.com",
    password: "12345678"
  },
  {
    username: "sajib380",
    name: "sajib380",
    email: "sajib380@gmail.com",
    password: "12345678"
  },
  {
    username: "aitoubrimsaid",
    name: "aitoubrimsaid",
    email: "aitoubrimsaid@gmail.com",
    password: "12345678"
  },
  {
    username: "firsova_kate",
    name: "firsova_kate",
    email: "firsova_kate@gmail.com",
    password: "12345678"
  },
  {
    username: "amaartz_",
    name: "amaartz_",
    email: "amaartz_@gmail.com",
    password: "12345678"
  },
  {
    username: "spider4graphics",
    name: "spider4graphics",
    email: "spider4graphics@gmail.com",
    password: "12345678"
  },
  {
    username: "nookshawn",
    name: "nookshawn",
    email: "nookshawn@gmail.com",
    password: "12345678"
  },
  {
    username: "yulianii",
    name: "yulianii",
    email: "yulianii@gmail.com",
    password: "12345678"
  },
  {
    username: "hound123",
    name: "hound123",
    email: "hound123@gmail.com",
    password: "12345678"
  },
  {
    username: "kaleemahmed1",
    name: "kaleemahmed1",
    email: "kaleemahmed1@gmail.com",
    password: "12345678"
  },
  {
    username: "design_ville3",
    name: "design_ville3",
    email: "design_ville3@gmail.com",
    password: "12345678"
  },
  {
    username: "amaljad",
    name: "amaljad",
    email: "amaljad@gmail.com",
    password: "12345678"
  },
  {
    username: "taroza",
    name: "taroza",
    email: "taroza@gmail.com",
    password: "12345678"
  },
  {
    username: "usamafaiz686",
    name: "usamafaiz686",
    email: "usamafaiz686@gmail.com",
    password: "12345678"
  },
  {
    username: "shwetasc",
    name: "shwetasc",
    email: "shwetasc@gmail.com",
    password: "12345678"
  },
  {
    username: "saastechbd",
    name: "saastechbd",
    email: "saastechbd@gmail.com",
    password: "12345678"
  },
  {
    username: "amitbochkeri",
    name: "amitbochkeri",
    email: "amitbochkeri@gmail.com",
    password: "12345678"
  },
  {
    username: "jamal3838",
    name: "jamal3838",
    email: "jamal3838@gmail.com",
    password: "12345678"
  },
  {
    username: "nasghar",
    name: "nasghar",
    email: "nasghar@gmail.com",
    password: "12345678"
  },
  {
    username: "radee96",
    name: "radee96",
    email: "radee96@gmail.com",
    password: "12345678"
  },
  {
    username: "fancy_artist",
    name: "fancy_artist",
    email: "fancy_artist@gmail.com",
    password: "12345678"
  },
  {
    username: "salimreza350",
    name: "salimreza350",
    email: "salimreza350@gmail.com",
    password: "12345678"
  },
  {
    username: "saidurrahman85",
    name: "saidurrahman85",
    email: "saidurrahman85@gmail.com",
    password: "12345678"
  },
  {
    username: "brandhut_97",
    name: "brandhut_97",
    email: "brandhut_97@gmail.com",
    password: "12345678"
  },
  {
    username: "pro_daniyal",
    name: "pro_daniyal",
    email: "pro_daniyal@gmail.com",
    password: "12345678"
  },
  {
    username: "shahin239",
    name: "shahin239",
    email: "shahin239@gmail.com",
    password: "12345678"
  },
  {
    username: "roks_olana",
    name: "roks_olana",
    email: "roks_olana@gmail.com",
    password: "12345678"
  },
  {
    username: "amaisha",
    name: "amaisha",
    email: "amaisha@gmail.com",
    password: "12345678"
  },
  {
    username: "arikshahinya245",
    name: "arikshahinya245",
    email: "arikshahinya245@gmail.com",
    password: "12345678"
  },
  {
    username: "katidesign99",
    name: "katidesign99",
    email: "katidesign99@gmail.com",
    password: "12345678"
  },
  {
    username: "abirkhan7",
    name: "abirkhan7",
    email: "abirkhan7@gmail.com",
    password: "12345678"
  },
  {
    username: "hafizansriaz",
    name: "hafizansriaz",
    email: "hafizansriaz@gmail.com",
    password: "12345678"
  },
  {
    username: "kaanchkaari",
    name: "kaanchkaari",
    email: "kaanchkaari@gmail.com",
    password: "12345678"
  },
  {
    username: "tahniarahman12",
    name: "tahniarahman12",
    email: "tahniarahman12@gmail.com",
    password: "12345678"
  },
  {
    username: "cmcaras",
    name: "cmcaras",
    email: "cmcaras@gmail.com",
    password: "12345678"
  },
  {
    username: "yons99",
    name: "yons99",
    email: "yons99@gmail.com",
    password: "12345678"
  },
  {
    username: "sonia211",
    name: "sonia211",
    email: "sonia211@gmail.com",
    password: "12345678"
  },
  {
    username: "mahwish_kanwal",
    name: "mahwish_kanwal",
    email: "mahwish_kanwal@gmail.com",
    password: "12345678"
  },
  {
    username: "kans13",
    name: "kans13",
    email: "kans13@gmail.com",
    password: "12345678"
  },
  {
    username: "nabbashkt",
    name: "nabbashkt",
    email: "nabbashkt@gmail.com",
    password: "12345678"
  },
  {
    username: "maharbunga",
    name: "maharbunga",
    email: "maharbunga@gmail.com",
    password: "12345678"
  },
  {
    username: "staneslav",
    name: "staneslav",
    email: "staneslav@gmail.com",
    password: "12345678"
  },
  {
    username: "rabeeashahid",
    name: "rabeeashahid",
    email: "rabeeashahid@gmail.com",
    password: "12345678"
  },
  {
    username: "designbyahsan1",
    name: "designbyahsan1",
    email: "designbyahsan1@gmail.com",
    password: "12345678"
  },
  {
    username: "marynazahumenny",
    name: "marynazahumenny",
    email: "marynazahumenny@gmail.com",
    password: "12345678"
  },
  {
    username: "momnahaider",
    name: "momnahaider",
    email: "momnahaider@gmail.com",
    password: "12345678"
  },
  {
    username: "antonellacat",
    name: "antonellacat",
    email: "antonellacat@gmail.com",
    password: "12345678"
  },
  {
    username: "imunja",
    name: "imunja",
    email: "imunja@gmail.com",
    password: "12345678"
  },
  {
    username: "qdesign008",
    name: "qdesign008",
    email: "qdesign008@gmail.com",
    password: "12345678"
  },
  {
    username: "osmankhan120",
    name: "osmankhan120",
    email: "osmankhan120@gmail.com",
    password: "12345678"
  },
  {
    username: "sallyroughton",
    name: "sallyroughton",
    email: "sallyroughton@gmail.com",
    password: "12345678"
  },
  {
    username: "aniakucharek",
    name: "aniakucharek",
    email: "aniakucharek@gmail.com",
    password: "12345678"
  },
  {
    username: "zziyasheikh",
    name: "zziyasheikh",
    email: "zziyasheikh@gmail.com",
    password: "12345678"
  },
  {
    username: "cansuaycan",
    name: "cansuaycan",
    email: "cansuaycan@gmail.com",
    password: "12345678"
  },
  {
    username: "rofik_mus",
    name: "rofik_mus",
    email: "rofik_mus@gmail.com",
    password: "12345678"
  },
  {
    username: "jolisascelba200",
    name: "jolisascelba200",
    email: "jolisascelba200@gmail.com",
    password: "12345678"
  },
  {
    username: "nusratzahan58",
    name: "nusratzahan58",
    email: "nusratzahan58@gmail.com",
    password: "12345678"
  },
  {
    username: "saffinmalik",
    name: "saffinmalik",
    email: "saffinmalik@gmail.com",
    password: "12345678"
  },
  {
    username: "lyuart",
    name: "lyuart",
    email: "lyuart@gmail.com",
    password: "12345678"
  },
  {
    username: "ea_graphics15",
    name: "ea_graphics15",
    email: "ea_graphics15@gmail.com",
    password: "12345678"
  },
  {
    username: "rafiafarooq724",
    name: "rafiafarooq724",
    email: "rafiafarooq724@gmail.com",
    password: "12345678"
  },
  {
    username: "juhisharma_",
    name: "juhisharma_",
    email: "juhisharma_@gmail.com",
    password: "12345678"
  },
  {
    username: "xpertpatterns",
    name: "xpertpatterns",
    email: "xpertpatterns@gmail.com",
    password: "12345678"
  },
  {
    username: "vivicampos1993",
    name: "vivicampos1993",
    email: "vivicampos1993@gmail.com",
    password: "12345678"
  },
  {
    username: "aimankhokhar77",
    name: "aimankhokhar77",
    email: "aimankhokhar77@gmail.com",
    password: "12345678"
  },
  {
    username: "jyotig79",
    name: "jyotig79",
    email: "jyotig79@gmail.com",
    password: "12345678"
  },
  {
    username: "cosmic_design",
    name: "cosmic_design",
    email: "cosmic_design@gmail.com",
    password: "12345678"
  },
  {
    username: "laraibrashid1",
    name: "laraibrashid1",
    email: "laraibrashid1@gmail.com",
    password: "12345678"
  },
  {
    username: "gfx_shaha",
    name: "gfx_shaha",
    email: "gfx_shaha@gmail.com",
    password: "12345678"
  },
  {
    username: "ahidhasan12",
    name: "ahidhasan12",
    email: "ahidhasan12@gmail.com",
    password: "12345678"
  },
  {
    username: "misskajafortune",
    name: "misskajafortune",
    email: "misskajafortune@gmail.com",
    password: "12345678"
  },
  {
    username: "aasmadigi",
    name: "aasmadigi",
    email: "aasmadigi@gmail.com",
    password: "12345678"
  },
  {
    username: "doublelumi",
    name: "doublelumi",
    email: "doublelumi@gmail.com",
    password: "12345678"
  },
  {
    username: "rossispasova",
    name: "rossispasova",
    email: "rossispasova@gmail.com",
    password: "12345678"
  },
  {
    username: "sylboy",
    name: "sylboy",
    email: "sylboy@gmail.com",
    password: "12345678"
  },
  {
    username: "khizarawan275",
    name: "khizarawan275",
    email: "khizarawan275@gmail.com",
    password: "12345678"
  },
  {
    username: "sumeragillani",
    name: "sumeragillani",
    email: "sumeragillani@gmail.com",
    password: "12345678"
  },
  {
    username: "silvforlife",
    name: "silvforlife",
    email: "silvforlife@gmail.com",
    password: "12345678"
  },
  {
    username: "repeatpatterns",
    name: "repeatpatterns",
    email: "repeatpatterns@gmail.com",
    password: "12345678"
  },
  {
    username: "dpsundkar",
    name: "dpsundkar",
    email: "dpsundkar@gmail.com",
    password: "12345678"
  },
  {
    username: "alaaelbajoury",
    name: "alaaelbajoury",
    email: "alaaelbajoury@gmail.com",
    password: "12345678"
  },
  {
    username: "lihua002",
    name: "lihua002",
    email: "lihua002@gmail.com",
    password: "12345678"
  },
  {
    username: "pattern_studio",
    name: "pattern_studio",
    email: "pattern_studio@gmail.com",
    password: "12345678"
  },
  {
    username: "mdmasiud533",
    name: "mdmasiud533",
    email: "mdmasiud533@gmail.com",
    password: "12345678"
  },
  {
    username: "pvidcum",
    name: "pvidcum",
    email: "pvidcum@gmail.com",
    password: "12345678"
  },
  {
    username: "pablomora658",
    name: "pablomora658",
    email: "pablomora658@gmail.com",
    password: "12345678"
  },
  {
    username: "designermanrk",
    name: "designermanrk",
    email: "designermanrk@gmail.com",
    password: "12345678"
  },
  {
    username: "jhumakhatun",
    name: "jhumakhatun",
    email: "jhumakhatun@gmail.com",
    password: "12345678"
  },
  {
    username: "krish_jay1",
    name: "krish_jay1",
    email: "krish_jay1@gmail.com",
    password: "12345678"
  },
  {
    username: "shanzy12",
    name: "shanzy12",
    email: "shanzy12@gmail.com",
    password: "12345678"
  },
  {
    username: "hamza_ali111",
    name: "hamza_ali111",
    email: "hamza_ali111@gmail.com",
    password: "12345678"
  },
  {
    username: "sameulshajid",
    name: "sameulshajid",
    email: "sameulshajid@gmail.com",
    password: "12345678"
  },
  {
    username: "rabiulbuft",
    name: "rabiulbuft",
    email: "rabiulbuft@gmail.com",
    password: "12345678"
  },
  {
    username: "ahmedlatif_2428",
    name: "ahmedlatif_2428",
    email: "ahmedlatif_2428@gmail.com",
    password: "12345678"
  },
  {
    username: "irina_sidyakina",
    name: "irina_sidyakina",
    email: "irina_sidyakina@gmail.com",
    password: "12345678"
  },
  {
    username: "creative_arts0",
    name: "creative_arts0",
    email: "creative_arts0@gmail.com",
    password: "12345678"
  },
  {
    username: "nazar8510",
    name: "nazar8510",
    email: "nazar8510@gmail.com",
    password: "12345678"
  },
  {
    username: "charismavoguish",
    name: "charismavoguish",
    email: "charismavoguish@gmail.com",
    password: "12345678"
  },
  {
    username: "sonaliafroj",
    name: "sonaliafroj",
    email: "sonaliafroj@gmail.com",
    password: "12345678"
  },
  {
    username: "monica_888",
    name: "monica_888",
    email: "monica_888@gmail.com",
    password: "12345678"
  },
  {
    username: "bibdesign",
    name: "bibdesign",
    email: "bibdesign@gmail.com",
    password: "12345678"
  },
  {
    username: "aaklat",
    name: "aaklat",
    email: "aaklat@gmail.com",
    password: "12345678"
  },
  {
    username: "cluster_studio",
    name: "cluster_studio",
    email: "cluster_studio@gmail.com",
    password: "12345678"
  },
  {
    username: "grace_van_pelt",
    name: "grace_van_pelt",
    email: "grace_van_pelt@gmail.com",
    password: "12345678"
  },
  {
    username: "nesenili",
    name: "nesenili",
    email: "nesenili@gmail.com",
    password: "12345678"
  },
  {
    username: "faarehajannat",
    name: "faarehajannat",
    email: "faarehajannat@gmail.com",
    password: "12345678"
  },
  {
    username: "designillusionz",
    name: "designillusionz",
    email: "designillusionz@gmail.com",
    password: "12345678"
  },
  {
    username: "nomanbd888",
    name: "nomanbd888",
    email: "nomanbd888@gmail.com",
    password: "12345678"
  },
  {
    username: "riponaliin",
    name: "riponaliin",
    email: "riponaliin@gmail.com",
    password: "12345678"
  },
  {
    username: "sasaelebea",
    name: "sasaelebea",
    email: "sasaelebea@gmail.com",
    password: "12345678"
  },
  {
    username: "parradesigner",
    name: "parradesigner",
    email: "parradesigner@gmail.com",
    password: "12345678"
  },
  {
    username: "natali_brill",
    name: "natali_brill",
    email: "natali_brill@gmail.com",
    password: "12345678"
  },
  {
    username: "superoraurus",
    name: "superoraurus",
    email: "superoraurus@gmail.com",
    password: "12345678"
  },
  {
    username: "gabykatten",
    name: "gabykatten",
    email: "gabykatten@gmail.com",
    password: "12345678"
  },
  {
    username: "vikka_shakun",
    name: "vikka_shakun",
    email: "vikka_shakun@gmail.com",
    password: "12345678"
  },
  {
    username: "sveta_zhadko",
    name: "sveta_zhadko",
    email: "sveta_zhadko@gmail.com",
    password: "12345678"
  },
  {
    username: "gabglb",
    name: "gabglb",
    email: "gabglb@gmail.com",
    password: "12345678"
  },
  {
    username: "msthappy02",
    name: "msthappy02",
    email: "msthappy02@gmail.com",
    password: "12345678"
  },
  {
    username: "awighnamastu",
    name: "awighnamastu",
    email: "awighnamastu@gmail.com",
    password: "12345678"
  },
  {
    username: "aroosaameer92",
    name: "aroosaameer92",
    email: "aroosaameer92@gmail.com",
    password: "12345678"
  },
  {
    username: "taniyasingh629",
    name: "taniyasingh629",
    email: "taniyasingh629@gmail.com",
    password: "12345678"
  },
  {
    username: "valeryaogarko",
    name: "valeryaogarko",
    email: "valeryaogarko@gmail.com",
    password: "12345678"
  },
  {
    username: "nataliaafnita",
    name: "nataliaafnita",
    email: "nataliaafnita@gmail.com",
    password: "12345678"
  },
  {
    username: "apolinarias",
    name: "apolinarias",
    email: "apolinarias@gmail.com",
    password: "12345678"
  },
  {
    username: "fairoosmusadick",
    name: "fairoosmusadick",
    email: "fairoosmusadick@gmail.com",
    password: "12345678"
  },
  {
    username: "designbyc",
    name: "designbyc",
    email: "designbyc@gmail.com",
    password: "12345678"
  },
  {
    username: "damian3d5",
    name: "damian3d5",
    email: "damian3d5@gmail.com",
    password: "12345678"
  },
  {
    username: "nataliwing",
    name: "nataliwing",
    email: "nataliwing@gmail.com",
    password: "12345678"
  },
  {
    username: "avotaco",
    name: "avotaco",
    email: "avotaco@gmail.com",
    password: "12345678"
  },
  {
    username: "soraia_freire",
    name: "soraia_freire",
    email: "soraia_freire@gmail.com",
    password: "12345678"
  },
  {
    username: "girlprog",
    name: "girlprog",
    email: "girlprog@gmail.com",
    password: "12345678"
  },
  {
    username: "elenahavroshka",
    name: "elenahavroshka",
    email: "elenahavroshka@gmail.com",
    password: "12345678"
  },
  {
    username: "hazelnatt",
    name: "hazelnatt",
    email: "hazelnatt@gmail.com",
    password: "12345678"
  },
  {
    username: "elyluu",
    name: "elyluu",
    email: "elyluu@gmail.com",
    password: "12345678"
  },
  {
    username: "wowyellow",
    name: "wowyellow",
    email: "wowyellow@gmail.com",
    password: "12345678"
  },
  {
    username: "jo_si_pa",
    name: "jo_si_pa",
    email: "jo_si_pa@gmail.com",
    password: "12345678"
  },
  {
    username: "twoturtlesdzn",
    name: "twoturtlesdzn",
    email: "twoturtlesdzn@gmail.com",
    password: "12345678"
  },
  {
    username: "sasakhalisa",
    name: "sasakhalisa",
    email: "sasakhalisa@gmail.com",
    password: "12345678"
  },
  {
    username: "bananodromo",
    name: "bananodromo",
    email: "bananodromo@gmail.com",
    password: "12345678"
  },
  {
    username: "alinebruniere",
    name: "alinebruniere",
    email: "alinebruniere@gmail.com",
    password: "12345678"
  },
  {
    username: "maayanx",
    name: "maayanx",
    email: "maayanx@gmail.com",
    password: "12345678"
  },
  {
    username: "marks_jp",
    name: "marks_jp",
    email: "marks_jp@gmail.com",
    password: "12345678"
  },
  {
    username: "nocitostudio",
    name: "nocitostudio",
    email: "nocitostudio@gmail.com",
    password: "12345678"
  },
  {
    username: "chresjoent",
    name: "chresjoent",
    email: "chresjoent@gmail.com",
    password: "12345678"
  },
  {
    username: "stindyart",
    name: "stindyart",
    email: "stindyart@gmail.com",
    password: "12345678"
  },
  {
    username: "logomaker110",
    name: "logomaker110",
    email: "logomaker110@gmail.com",
    password: "12345678"
  },
  {
    username: "mireiamullor",
    name: "mireiamullor",
    email: "mireiamullor@gmail.com",
    password: "12345678"
  },
  {
    username: "valeriiadomino",
    name: "valeriiadomino",
    email: "valeriiadomino@gmail.com",
    password: "12345678"
  },
  {
    username: "yennyyasnila",
    name: "yennyyasnila",
    email: "yennyyasnila@gmail.com",
    password: "12345678"
  },
  {
    username: "deeadeac",
    name: "deeadeac",
    email: "deeadeac@gmail.com",
    password: "12345678"
  },
  {
    username: "cutefoxyshop",
    name: "cutefoxyshop",
    email: "cutefoxyshop@gmail.com",
    password: "12345678"
  },
  {
    username: "heritadashi",
    name: "heritadashi",
    email: "heritadashi@gmail.com",
    password: "12345678"
  },
  {
    username: "trasaves",
    name: "trasaves",
    email: "trasaves@gmail.com",
    password: "12345678"
  },
  {
    username: "analourenso",
    name: "analourenso",
    email: "analourenso@gmail.com",
    password: "12345678"
  },
  {
    username: "zarya_kiqo",
    name: "zarya_kiqo",
    email: "zarya_kiqo@gmail.com",
    password: "12345678"
  },
  {
    username: "moevil",
    name: "moevil",
    email: "moevil@gmail.com",
    password: "12345678"
  },
  {
    username: "felizabeth",
    name: "felizabeth",
    email: "felizabeth@gmail.com",
    password: "12345678"
  },
  {
    username: "lunaartix",
    name: "lunaartix",
    email: "lunaartix@gmail.com",
    password: "12345678"
  },
  {
    username: "aldilapermata",
    name: "aldilapermata",
    email: "aldilapermata@gmail.com",
    password: "12345678"
  },
  {
    username: "kusumagy",
    name: "kusumagy",
    email: "kusumagy@gmail.com",
    password: "12345678"
  },
  {
    username: "zainabliaqat",
    name: "zainabliaqat",
    email: "zainabliaqat@gmail.com",
    password: "12345678"
  },
  {
    username: "inthisworld",
    name: "inthisworld",
    email: "inthisworld@gmail.com",
    password: "12345678"
  },
  {
    username: "vallikestodraw",
    name: "vallikestodraw",
    email: "vallikestodraw@gmail.com",
    password: "12345678"
  },
  {
    username: "luwiss",
    name: "luwiss",
    email: "luwiss@gmail.com",
    password: "12345678"
  },
  {
    username: "viktoryia_reut",
    name: "viktoryia_reut",
    email: "viktoryia_reut@gmail.com",
    password: "12345678"
  },
  {
    username: "alitosart",
    name: "alitosart",
    email: "alitosart@gmail.com",
    password: "12345678"
  },
  {
    username: "nina_kononova",
    name: "nina_kononova",
    email: "nina_kononova@gmail.com",
    password: "12345678"
  },
  {
    username: "star_line",
    name: "star_line",
    email: "star_line@gmail.com",
    password: "12345678"
  },
  {
    username: "ajantailora",
    name: "ajantailora",
    email: "ajantailora@gmail.com",
    password: "12345678"
  },
  {
    username: "mariafatima9501",
    name: "mariafatima9501",
    email: "mariafatima9501@gmail.com",
    password: "12345678"
  },
  {
    username: "yusufyusuf728",
    name: "yusufyusuf728",
    email: "yusufyusuf728@gmail.com",
    password: "12345678"
  },
  {
    username: "ksenia_biruk",
    name: "ksenia_biruk",
    email: "ksenia_biruk@gmail.com",
    password: "12345678"
  },
  {
    username: "darya_lavit",
    name: "darya_lavit",
    email: "darya_lavit@gmail.com",
    password: "12345678"
  },
  {
    username: "mahamchaudhari",
    name: "mahamchaudhari",
    email: "mahamchaudhari@gmail.com",
    password: "12345678"
  },
  {
    username: "alasmine",
    name: "alasmine",
    email: "alasmine@gmail.com",
    password: "12345678"
  },
  {
    username: "yashkaku",
    name: "yashkaku",
    email: "yashkaku@gmail.com",
    password: "12345678"
  },
  {
    username: "pan_corn",
    name: "pan_corn",
    email: "pan_corn@gmail.com",
    password: "12345678"
  },
  {
    username: "martu90",
    name: "martu90",
    email: "martu90@gmail.com",
    password: "12345678"
  },
  {
    username: "olga_vatrushka",
    name: "olga_vatrushka",
    email: "olga_vatrushka@gmail.com",
    password: "12345678"
  },
  {
    username: "mikkasole",
    name: "mikkasole",
    email: "mikkasole@gmail.com",
    password: "12345678"
  },
  {
    username: "yevhenii_ch",
    name: "yevhenii_ch",
    email: "yevhenii_ch@gmail.com",
    password: "12345678"
  },
  {
    username: "eman_tawfik",
    name: "eman_tawfik",
    email: "eman_tawfik@gmail.com",
    password: "12345678"
  },
  {
    username: "azkasalsabila",
    name: "azkasalsabila",
    email: "azkasalsabila@gmail.com",
    password: "12345678"
  },
  {
    username: "girlswithnojob4",
    name: "girlswithnojob4",
    email: "girlswithnojob4@gmail.com",
    password: "12345678"
  },
  {
    username: "andrealopezp",
    name: "andrealopezp",
    email: "andrealopezp@gmail.com",
    password: "12345678"
  },
  {
    username: "sasha__sasha",
    name: "sasha__sasha",
    email: "sasha__sasha@gmail.com",
    password: "12345678"
  },
  {
    username: "monika_reddy",
    name: "monika_reddy",
    email: "monika_reddy@gmail.com",
    password: "12345678"
  },
  {
    username: "mailksaleem",
    name: "mailksaleem",
    email: "mailksaleem@gmail.com",
    password: "12345678"
  },
  {
    username: "tetianabylyna",
    name: "tetianabylyna",
    email: "tetianabylyna@gmail.com",
    password: "12345678"
  },
  {
    username: "generatinx",
    name: "generatinx",
    email: "generatinx@gmail.com",
    password: "12345678"
  },
  {
    username: "dobroyerdesign",
    name: "dobroyerdesign",
    email: "dobroyerdesign@gmail.com",
    password: "12345678"
  },
  {
    username: "ann_sg",
    name: "ann_sg",
    email: "ann_sg@gmail.com",
    password: "12345678"
  },
  {
    username: "fatiqasim",
    name: "fatiqasim",
    email: "fatiqasim@gmail.com",
    password: "12345678"
  },
  {
    username: "syedhuzaifa936",
    name: "syedhuzaifa936",
    email: "syedhuzaifa936@gmail.com",
    password: "12345678"
  },
  {
    username: "yahya_ahmad07",
    name: "yahya_ahmad07",
    email: "yahya_ahmad07@gmail.com",
    password: "12345678"
  },
  {
    username: "cartoonist10",
    name: "cartoonist10",
    email: "cartoonist10@gmail.com",
    password: "12345678"
  },
  {
    username: "mawra66",
    name: "mawra66",
    email: "mawra66@gmail.com",
    password: "12345678"
  },
  {
    username: "nata_gvozd",
    name: "nata_gvozd",
    email: "nata_gvozd@gmail.com",
    password: "12345678"
  },
  {
    username: "elenaclee",
    name: "elenaclee",
    email: "elenaclee@gmail.com",
    password: "12345678"
  },
  {
    username: "neelsoha",
    name: "neelsoha",
    email: "neelsoha@gmail.com",
    password: "12345678"
  },
  {
    username: "mahaongreen",
    name: "mahaongreen",
    email: "mahaongreen@gmail.com",
    password: "12345678"
  },
  {
    username: "manuzambrano",
    name: "manuzambrano",
    email: "manuzambrano@gmail.com",
    password: "12345678"
  },
  {
    username: "ghaisan_design",
    name: "ghaisan_design",
    email: "ghaisan_design@gmail.com",
    password: "12345678"
  },
  {
    username: "dineshmadhushan",
    name: "dineshmadhushan",
    email: "dineshmadhushan@gmail.com",
    password: "12345678"
  },
  {
    username: "zyatusolutions",
    name: "zyatusolutions",
    email: "zyatusolutions@gmail.com",
    password: "12345678"
  },
  {
    username: "lina_graphic",
    name: "lina_graphic",
    email: "lina_graphic@gmail.com",
    password: "12345678"
  },
  {
    username: "baladesginer",
    name: "baladesginer",
    email: "baladesginer@gmail.com",
    password: "12345678"
  },
  {
    username: "mansipanwar",
    name: "mansipanwar",
    email: "mansipanwar@gmail.com",
    password: "12345678"
  },
  {
    username: "differenttouch7",
    name: "differenttouch7",
    email: "differenttouch7@gmail.com",
    password: "12345678"
  },
  {
    username: "kainatkarim03",
    name: "kainatkarim03",
    email: "kainatkarim03@gmail.com",
    password: "12345678"
  },
  {
    username: "dahamindraji773",
    name: "dahamindraji773",
    email: "dahamindraji773@gmail.com",
    password: "12345678"
  },
  {
    username: "darshanasrimal",
    name: "darshanasrimal",
    email: "darshanasrimal@gmail.com",
    password: "12345678"
  },
  {
    username: "lutviaanisah",
    name: "lutviaanisah",
    email: "lutviaanisah@gmail.com",
    password: "12345678"
  },
  {
    username: "tahneejung",
    name: "tahneejung",
    email: "tahneejung@gmail.com",
    password: "12345678"
  },
  {
    username: "febriyanafadill",
    name: "febriyanafadill",
    email: "febriyanafadill@gmail.com",
    password: "12345678"
  },
  {
    username: "nibir_arif",
    name: "nibir_arif",
    email: "nibir_arif@gmail.com",
    password: "12345678"
  },
  {
    username: "saadzahouan",
    name: "saadzahouan",
    email: "saadzahouan@gmail.com",
    password: "12345678"
  },
  {
    username: "kikidhila",
    name: "kikidhila",
    email: "kikidhila@gmail.com",
    password: "12345678"
  },
  {
    username: "shayanqureshii",
    name: "shayanqureshii",
    email: "shayanqureshii@gmail.com",
    password: "12345678"
  },
  {
    username: "avioem",
    name: "avioem",
    email: "avioem@gmail.com",
    password: "12345678"
  },
  {
    username: "gastonproductio",
    name: "gastonproductio",
    email: "gastonproductio@gmail.com",
    password: "12345678"
  },
  {
    username: "pratikfloyd",
    name: "pratikfloyd",
    email: "pratikfloyd@gmail.com",
    password: "12345678"
  },
  {
    username: "farth_",
    name: "farth_",
    email: "farth_@gmail.com",
    password: "12345678"
  },
  {
    username: "typealiens",
    name: "typealiens",
    email: "typealiens@gmail.com",
    password: "12345678"
  },
  {
    username: "salma_farhoune",
    name: "salma_farhoune",
    email: "salma_farhoune@gmail.com",
    password: "12345678"
  },
  {
    username: "opeelepeel",
    name: "opeelepeel",
    email: "opeelepeel@gmail.com",
    password: "12345678"
  },
  {
    username: "tanzeel13",
    name: "tanzeel13",
    email: "tanzeel13@gmail.com",
    password: "12345678"
  },
  {
    username: "amineabdou262",
    name: "amineabdou262",
    email: "amineabdou262@gmail.com",
    password: "12345678"
  },
  {
    username: "vistualproject",
    name: "vistualproject",
    email: "vistualproject@gmail.com",
    password: "12345678"
  },
  {
    username: "harshakon",
    name: "harshakon",
    email: "harshakon@gmail.com",
    password: "12345678"
  },
  {
    username: "unique_designsx",
    name: "unique_designsx",
    email: "unique_designsx@gmail.com",
    password: "12345678"
  },
  {
    username: "hbiplob730",
    name: "hbiplob730",
    email: "hbiplob730@gmail.com",
    password: "12345678"
  },
  {
    username: "inonefilms",
    name: "inonefilms",
    email: "inonefilms@gmail.com",
    password: "12345678"
  },
  {
    username: "evoquee",
    name: "evoquee",
    email: "evoquee@gmail.com",
    password: "12345678"
  },
  {
    username: "atlasi_designs",
    name: "atlasi_designs",
    email: "atlasi_designs@gmail.com",
    password: "12345678"
  },
  {
    username: "tomoiaugus",
    name: "tomoiaugus",
    email: "tomoiaugus@gmail.com",
    password: "12345678"
  },
  {
    username: "laluaku",
    name: "laluaku",
    email: "laluaku@gmail.com",
    password: "12345678"
  },
  {
    username: "artist_squad75",
    name: "artist_squad75",
    email: "artist_squad75@gmail.com",
    password: "12345678"
  },
  {
    username: "rindanghimawan",
    name: "rindanghimawan",
    email: "rindanghimawan@gmail.com",
    password: "12345678"
  },
  {
    username: "ammara_090",
    name: "ammara_090",
    email: "ammara_090@gmail.com",
    password: "12345678"
  },
  {
    username: "mark_zuckerbrg",
    name: "mark_zuckerbrg",
    email: "mark_zuckerbrg@gmail.com",
    password: "12345678"
  },
  {
    username: "star_studio8",
    name: "star_studio8",
    email: "star_studio8@gmail.com",
    password: "12345678"
  },
  {
    username: "uchen01",
    name: "uchen01",
    email: "uchen01@gmail.com",
    password: "12345678"
  },
  {
    username: "sidra344",
    name: "sidra344",
    email: "sidra344@gmail.com",
    password: "12345678"
  },
  {
    username: "sofiahueck",
    name: "sofiahueck",
    email: "sofiahueck@gmail.com",
    password: "12345678"
  },
  {
    username: "society_std",
    name: "society_std",
    email: "society_std@gmail.com",
    password: "12345678"
  },
  {
    username: "kylajuruena",
    name: "kylajuruena",
    email: "kylajuruena@gmail.com",
    password: "12345678"
  },
  {
    username: "adityafikri",
    name: "adityafikri",
    email: "adityafikri@gmail.com",
    password: "12345678"
  },
  {
    username: "erumprints",
    name: "erumprints",
    email: "erumprints@gmail.com",
    password: "12345678"
  },
  {
    username: "frozenpixel",
    name: "frozenpixel",
    email: "frozenpixel@gmail.com",
    password: "12345678"
  },
  {
    username: "eloymendo",
    name: "eloymendo",
    email: "eloymendo@gmail.com",
    password: "12345678"
  },
  {
    username: "dameproject",
    name: "dameproject",
    email: "dameproject@gmail.com",
    password: "12345678"
  },
  {
    username: "labisal",
    name: "labisal",
    email: "labisal@gmail.com",
    password: "12345678"
  },
  {
    username: "aq_graphix4",
    name: "aq_graphix4",
    email: "aq_graphix4@gmail.com",
    password: "12345678"
  },
  {
    username: "saqlain_graphic",
    name: "saqlain_graphic",
    email: "saqlain_graphic@gmail.com",
    password: "12345678"
  },
  {
    username: "marsarts",
    name: "marsarts",
    email: "marsarts@gmail.com",
    password: "12345678"
  },
  {
    username: "anthony_ilacqua",
    name: "anthony_ilacqua",
    email: "anthony_ilacqua@gmail.com",
    password: "12345678"
  },
  {
    username: "magyarmelcsi",
    name: "magyarmelcsi",
    email: "magyarmelcsi@gmail.com",
    password: "12345678"
  },
  {
    username: "natashaartist",
    name: "natashaartist",
    email: "natashaartist@gmail.com",
    password: "12345678"
  },
  {
    username: "samraaqeel",
    name: "samraaqeel",
    email: "samraaqeel@gmail.com",
    password: "12345678"
  },
  {
    username: "saliha_alie",
    name: "saliha_alie",
    email: "saliha_alie@gmail.com",
    password: "12345678"
  },
  {
    username: "inndesign_tm",
    name: "inndesign_tm",
    email: "inndesign_tm@gmail.com",
    password: "12345678"
  },
  {
    username: "m_arslan_ch",
    name: "m_arslan_ch",
    email: "m_arslan_ch@gmail.com",
    password: "12345678"
  },
  {
    username: "diazanoms",
    name: "diazanoms",
    email: "diazanoms@gmail.com",
    password: "12345678"
  },
  {
    username: "arthrodite",
    name: "arthrodite",
    email: "arthrodite@gmail.com",
    password: "12345678"
  },
  {
    username: "woodengrafis",
    name: "woodengrafis",
    email: "woodengrafis@gmail.com",
    password: "12345678"
  },
  {
    username: "sifar_art",
    name: "sifar_art",
    email: "sifar_art@gmail.com",
    password: "12345678"
  },
  {
    username: "fedricoreyes",
    name: "fedricoreyes",
    email: "fedricoreyes@gmail.com",
    password: "12345678"
  },
  {
    username: "gaphicdeluxe",
    name: "gaphicdeluxe",
    email: "gaphicdeluxe@gmail.com",
    password: "12345678"
  },
  {
    username: "metadesign0",
    name: "metadesign0",
    email: "metadesign0@gmail.com",
    password: "12345678"
  },
  {
    username: "marina_safaric",
    name: "marina_safaric",
    email: "marina_safaric@gmail.com",
    password: "12345678"
  },
  {
    username: "lotemalole",
    name: "lotemalole",
    email: "lotemalole@gmail.com",
    password: "12345678"
  },
  {
    username: "elijahyrwd",
    name: "elijahyrwd",
    email: "elijahyrwd@gmail.com",
    password: "12345678"
  },
  {
    username: "iramkhan851",
    name: "iramkhan851",
    email: "iramkhan851@gmail.com",
    password: "12345678"
  },
  {
    username: "khan_design07",
    name: "khan_design07",
    email: "khan_design07@gmail.com",
    password: "12345678"
  },
  {
    username: "designerxpertz",
    name: "designerxpertz",
    email: "designerxpertz@gmail.com",
    password: "12345678"
  },
  {
    username: "graphicandpixel",
    name: "graphicandpixel",
    email: "graphicandpixel@gmail.com",
    password: "12345678"
  },
  {
    username: "mdaatib",
    name: "mdaatib",
    email: "mdaatib@gmail.com",
    password: "12345678"
  },
  {
    username: "shanto33",
    name: "shanto33",
    email: "shanto33@gmail.com",
    password: "12345678"
  },
  {
    username: "sujon10khan",
    name: "sujon10khan",
    email: "sujon10khan@gmail.com",
    password: "12345678"
  },
  {
    username: "rabia1148",
    name: "rabia1148",
    email: "rabia1148@gmail.com",
    password: "12345678"
  },
  {
    username: "masrofik",
    name: "masrofik",
    email: "masrofik@gmail.com",
    password: "12345678"
  },
  {
    username: "surayazoya93",
    name: "surayazoya93",
    email: "surayazoya93@gmail.com",
    password: "12345678"
  },
  {
    username: "kokodifo",
    name: "kokodifo",
    email: "kokodifo@gmail.com",
    password: "12345678"
  },
  {
    username: "mittalrao",
    name: "mittalrao",
    email: "mittalrao@gmail.com",
    password: "12345678"
  },
  {
    username: "expartclub",
    name: "expartclub",
    email: "expartclub@gmail.com",
    password: "12345678"
  },
  {
    username: "henta_zkhr",
    name: "henta_zkhr",
    email: "henta_zkhr@gmail.com",
    password: "12345678"
  },
  {
    username: "eno_onf",
    name: "eno_onf",
    email: "eno_onf@gmail.com",
    password: "12345678"
  },
  {
    username: "bagusutama",
    name: "bagusutama",
    email: "bagusutama@gmail.com",
    password: "12345678"
  },
  {
    username: "xoxoconcepts",
    name: "xoxoconcepts",
    email: "xoxoconcepts@gmail.com",
    password: "12345678"
  },
  {
    username: "raowcksepand",
    name: "raowcksepand",
    email: "raowcksepand@gmail.com",
    password: "12345678"
  },
  {
    username: "raj_skilled",
    name: "raj_skilled",
    email: "raj_skilled@gmail.com",
    password: "12345678"
  },
  {
    username: "lauragraphicart",
    name: "lauragraphicart",
    email: "lauragraphicart@gmail.com",
    password: "12345678"
  },
  {
    username: "krisnahandikaa",
    name: "krisnahandikaa",
    email: "krisnahandikaa@gmail.com",
    password: "12345678"
  },
  {
    username: "joyamondal",
    name: "joyamondal",
    email: "joyamondal@gmail.com",
    password: "12345678"
  },
  {
    username: "mbarts17",
    name: "mbarts17",
    email: "mbarts17@gmail.com",
    password: "12345678"
  },
  {
    username: "saba_anwar",
    name: "saba_anwar",
    email: "saba_anwar@gmail.com",
    password: "12345678"
  },
  {
    username: "ghaziandesigner",
    name: "ghaziandesigner",
    email: "ghaziandesigner@gmail.com",
    password: "12345678"
  },
  {
    username: "vikvikdesigner",
    name: "vikvikdesigner",
    email: "vikvikdesigner@gmail.com",
    password: "12345678"
  },
  {
    username: "iyuna667",
    name: "iyuna667",
    email: "iyuna667@gmail.com",
    password: "12345678"
  },
  {
    username: "koala_bg",
    name: "koala_bg",
    email: "koala_bg@gmail.com",
    password: "12345678"
  },
  {
    username: "lewis_dales",
    name: "lewis_dales",
    email: "lewis_dales@gmail.com",
    password: "12345678"
  },
  {
    username: "oldmobo",
    name: "oldmobo",
    email: "oldmobo@gmail.com",
    password: "12345678"
  },
  {
    username: "visualvolder",
    name: "visualvolder",
    email: "visualvolder@gmail.com",
    password: "12345678"
  },
  {
    username: "gauranshgupta",
    name: "gauranshgupta",
    email: "gauranshgupta@gmail.com",
    password: "12345678"
  },
  {
    username: "samanjamil05",
    name: "samanjamil05",
    email: "samanjamil05@gmail.com",
    password: "12345678"
  },
  {
    username: "thehiidea",
    name: "thehiidea",
    email: "thehiidea@gmail.com",
    password: "12345678"
  },
  {
    username: "greenhulk3",
    name: "greenhulk3",
    email: "greenhulk3@gmail.com",
    password: "12345678"
  },
  {
    username: "hamzarix",
    name: "hamzarix",
    email: "hamzarix@gmail.com",
    password: "12345678"
  },
  {
    username: "mbart338",
    name: "mbart338",
    email: "mbart338@gmail.com",
    password: "12345678"
  },
  {
    username: "sanjidatara",
    name: "sanjidatara",
    email: "sanjidatara@gmail.com",
    password: "12345678"
  },
  {
    username: "roniangga",
    name: "roniangga",
    email: "roniangga@gmail.com",
    password: "12345678"
  },
  {
    username: "renzacamila",
    name: "renzacamila",
    email: "renzacamila@gmail.com",
    password: "12345678"
  },
  {
    username: "mariasensei",
    name: "mariasensei",
    email: "mariasensei@gmail.com",
    password: "12345678"
  },
  {
    username: "fidafis",
    name: "fidafis",
    email: "fidafis@gmail.com",
    password: "12345678"
  },
  {
    username: "thequalitymaker",
    name: "thequalitymaker",
    email: "thequalitymaker@gmail.com",
    password: "12345678"
  },
  {
    username: "lorenzocolmaer",
    name: "lorenzocolmaer",
    email: "lorenzocolmaer@gmail.com",
    password: "12345678"
  },
  {
    username: "tuaha_design",
    name: "tuaha_design",
    email: "tuaha_design@gmail.com",
    password: "12345678"
  },
  {
    username: "saepudinasep",
    name: "saepudinasep",
    email: "saepudinasep@gmail.com",
    password: "12345678"
  },
  {
    username: "aroojcreation",
    name: "aroojcreation",
    email: "aroojcreation@gmail.com",
    password: "12345678"
  },
  {
    username: "deand55d",
    name: "deand55d",
    email: "deand55d@gmail.com",
    password: "12345678"
  },
  {
    username: "eremteka",
    name: "eremteka",
    email: "eremteka@gmail.com",
    password: "12345678"
  },
  {
    username: "elakirikollek",
    name: "elakirikollek",
    email: "elakirikollek@gmail.com",
    password: "12345678"
  },
  {
    username: "septak",
    name: "septak",
    email: "septak@gmail.com",
    password: "12345678"
  },
  {
    username: "klnmaduranga96",
    name: "klnmaduranga96",
    email: "klnmaduranga96@gmail.com",
    password: "12345678"
  },
  {
    username: "shailaja_nandan",
    name: "shailaja_nandan",
    email: "shailaja_nandan@gmail.com",
    password: "12345678"
  },
  {
    username: "logo_designer16",
    name: "logo_designer16",
    email: "logo_designer16@gmail.com",
    password: "12345678"
  },
  {
    username: "design_eng77",
    name: "design_eng77",
    email: "design_eng77@gmail.com",
    password: "12345678"
  },
  {
    username: "irbabass",
    name: "irbabass",
    email: "irbabass@gmail.com",
    password: "12345678"
  },
  {
    username: "abdulloh3349",
    name: "abdulloh3349",
    email: "abdulloh3349@gmail.com",
    password: "12345678"
  },
  {
    username: "jasminetanaka",
    name: "jasminetanaka",
    email: "jasminetanaka@gmail.com",
    password: "12345678"
  },
  {
    username: "iyliagalleria",
    name: "iyliagalleria",
    email: "iyliagalleria@gmail.com",
    password: "12345678"
  },
  {
    username: "ikhsanabrori",
    name: "ikhsanabrori",
    email: "ikhsanabrori@gmail.com",
    password: "12345678"
  },
  {
    username: "ripon117",
    name: "ripon117",
    email: "ripon117@gmail.com",
    password: "12345678"
  },
  {
    username: "tabasumdesigner",
    name: "tabasumdesigner",
    email: "tabasumdesigner@gmail.com",
    password: "12345678"
  },
  {
    username: "yassine45",
    name: "yassine45",
    email: "yassine45@gmail.com",
    password: "12345678"
  },
  {
    username: "hamu83",
    name: "hamu83",
    email: "hamu83@gmail.com",
    password: "12345678"
  },
  {
    username: "artsstudio789",
    name: "artsstudio789",
    email: "artsstudio789@gmail.com",
    password: "12345678"
  },
  {
    username: "glass_merch",
    name: "glass_merch",
    email: "glass_merch@gmail.com",
    password: "12345678"
  },
  {
    username: "sahan22___",
    name: "sahan22___",
    email: "sahan22___@gmail.com",
    password: "12345678"
  },
  {
    username: "meryah",
    name: "meryah",
    email: "meryah@gmail.com",
    password: "12345678"
  },
  {
    username: "shahid370",
    name: "shahid370",
    email: "shahid370@gmail.com",
    password: "12345678"
  },
  {
    username: "ridabargoute",
    name: "ridabargoute",
    email: "ridabargoute@gmail.com",
    password: "12345678"
  },
  {
    username: "minesoul",
    name: "minesoul",
    email: "minesoul@gmail.com",
    password: "12345678"
  },
  {
    username: "graphicfixers",
    name: "graphicfixers",
    email: "graphicfixers@gmail.com",
    password: "12345678"
  },
  {
    username: "grafixclub",
    name: "grafixclub",
    email: "grafixclub@gmail.com",
    password: "12345678"
  },
  {
    username: "bohemiaa",
    name: "bohemiaa",
    email: "bohemiaa@gmail.com",
    password: "12345678"
  },
  {
    username: "kingkrd",
    name: "kingkrd",
    email: "kingkrd@gmail.com",
    password: "12345678"
  },
  {
    username: "theapollodesign",
    name: "theapollodesign",
    email: "theapollodesign@gmail.com",
    password: "12345678"
  },
  {
    username: "colorqo",
    name: "colorqo",
    email: "colorqo@gmail.com",
    password: "12345678"
  },
  {
    username: "apexdsigner",
    name: "apexdsigner",
    email: "apexdsigner@gmail.com",
    password: "12345678"
  },
  {
    username: "king_suleman",
    name: "king_suleman",
    email: "king_suleman@gmail.com",
    password: "12345678"
  },
  {
    username: "usama_jadun",
    name: "usama_jadun",
    email: "usama_jadun@gmail.com",
    password: "12345678"
  },
  {
    username: "audiprasetya",
    name: "audiprasetya",
    email: "audiprasetya@gmail.com",
    password: "12345678"
  },
  {
    username: "darkgraphx",
    name: "darkgraphx",
    email: "darkgraphx@gmail.com",
    password: "12345678"
  },
  {
    username: "nftlakmal323",
    name: "nftlakmal323",
    email: "nftlakmal323@gmail.com",
    password: "12345678"
  },
  {
    username: "ninjadesignr",
    name: "ninjadesignr",
    email: "ninjadesignr@gmail.com",
    password: "12345678"
  },
  {
    username: "designavmad",
    name: "designavmad",
    email: "designavmad@gmail.com",
    password: "12345678"
  },
  {
    username: "chaplin22",
    name: "chaplin22",
    email: "chaplin22@gmail.com",
    password: "12345678"
  },
  {
    username: "daniele_franchi",
    name: "daniele_franchi",
    email: "daniele_franchi@gmail.com",
    password: "12345678"
  },
  {
    username: "omaimakhan",
    name: "omaimakhan",
    email: "omaimakhan@gmail.com",
    password: "12345678"
  },
  {
    username: "hishamhkarim",
    name: "hishamhkarim",
    email: "hishamhkarim@gmail.com",
    password: "12345678"
  },
  {
    username: "nnisaa44",
    name: "nnisaa44",
    email: "nnisaa44@gmail.com",
    password: "12345678"
  },
  {
    username: "hc_graphic",
    name: "hc_graphic",
    email: "hc_graphic@gmail.com",
    password: "12345678"
  },
  {
    username: "johnathan_miid",
    name: "johnathan_miid",
    email: "johnathan_miid@gmail.com",
    password: "12345678"
  },
  {
    username: "ahmadbahawalpur",
    name: "ahmadbahawalpur",
    email: "ahmadbahawalpur@gmail.com",
    password: "12345678"
  },
  {
    username: "writingvirtual",
    name: "writingvirtual",
    email: "writingvirtual@gmail.com",
    password: "12345678"
  },
  {
    username: "becartoon",
    name: "becartoon",
    email: "becartoon@gmail.com",
    password: "12345678"
  },
  {
    username: "hamid_zefrar",
    name: "hamid_zefrar",
    email: "hamid_zefrar@gmail.com",
    password: "12345678"
  },
  {
    username: "ardyanawa",
    name: "ardyanawa",
    email: "ardyanawa@gmail.com",
    password: "12345678"
  },
  {
    username: "mehr_type",
    name: "mehr_type",
    email: "mehr_type@gmail.com",
    password: "12345678"
  },
  {
    username: "ankitphuyal",
    name: "ankitphuyal",
    email: "ankitphuyal@gmail.com",
    password: "12345678"
  },
  {
    username: "miastegner",
    name: "miastegner",
    email: "miastegner@gmail.com",
    password: "12345678"
  },
  {
    username: "nasikamim",
    name: "nasikamim",
    email: "nasikamim@gmail.com",
    password: "12345678"
  },
  {
    username: "volandsbride",
    name: "volandsbride",
    email: "volandsbride@gmail.com",
    password: "12345678"
  },
  {
    username: "duta915",
    name: "duta915",
    email: "duta915@gmail.com",
    password: "12345678"
  },
  {
    username: "prabhadaham",
    name: "prabhadaham",
    email: "prabhadaham@gmail.com",
    password: "12345678"
  },
  {
    username: "mevrik1",
    name: "mevrik1",
    email: "mevrik1@gmail.com",
    password: "12345678"
  },
  {
    username: "wasif_azeem",
    name: "wasif_azeem",
    email: "wasif_azeem@gmail.com",
    password: "12345678"
  },
  {
    username: "muhammaduzai914",
    name: "muhammaduzai914",
    email: "muhammaduzai914@gmail.com",
    password: "12345678"
  },
  {
    username: "rajibmatiur",
    name: "rajibmatiur",
    email: "rajibmatiur@gmail.com",
    password: "12345678"
  },
  {
    username: "jaydeearts",
    name: "jaydeearts",
    email: "jaydeearts@gmail.com",
    password: "12345678"
  },
  {
    username: "hadddid",
    name: "hadddid",
    email: "hadddid@gmail.com",
    password: "12345678"
  },
  {
    username: "kazimjawad142",
    name: "kazimjawad142",
    email: "kazimjawad142@gmail.com",
    password: "12345678"
  },
  {
    username: "mrdesigner77",
    name: "mrdesigner77",
    email: "mrdesigner77@gmail.com",
    password: "12345678"
  },
  {
    username: "damanjana",
    name: "damanjana",
    email: "damanjana@gmail.com",
    password: "12345678"
  },
  {
    username: "patrik_taylor",
    name: "patrik_taylor",
    email: "patrik_taylor@gmail.com",
    password: "12345678"
  },
  {
    username: "badonali",
    name: "badonali",
    email: "badonali@gmail.com",
    password: "12345678"
  },
  {
    username: "mrfontt",
    name: "mrfontt",
    email: "mrfontt@gmail.com",
    password: "12345678"
  },
  {
    username: "qavtaradzeqeti",
    name: "qavtaradzeqeti",
    email: "qavtaradzeqeti@gmail.com",
    password: "12345678"
  },
  {
    username: "faizajabeen4",
    name: "faizajabeen4",
    email: "faizajabeen4@gmail.com",
    password: "12345678"
  },
  {
    username: "renaldielang",
    name: "renaldielang",
    email: "renaldielang@gmail.com",
    password: "12345678"
  },
  {
    username: "misel_ahmmed",
    name: "misel_ahmmed",
    email: "misel_ahmmed@gmail.com",
    password: "12345678"
  },
  {
    username: "remmyjoee",
    name: "remmyjoee",
    email: "remmyjoee@gmail.com",
    password: "12345678"
  },
  {
    username: "i_am_artistic",
    name: "i_am_artistic",
    email: "i_am_artistic@gmail.com",
    password: "12345678"
  },
  {
    username: "rainbombstudio",
    name: "rainbombstudio",
    email: "rainbombstudio@gmail.com",
    password: "12345678"
  },
  {
    username: "graphics_media",
    name: "graphics_media",
    email: "graphics_media@gmail.com",
    password: "12345678"
  },
  {
    username: "rashedfinance",
    name: "rashedfinance",
    email: "rashedfinance@gmail.com",
    password: "12345678"
  },
  {
    username: "yehoas",
    name: "yehoas",
    email: "yehoas@gmail.com",
    password: "12345678"
  },
  {
    username: "tbawxandco",
    name: "tbawxandco",
    email: "tbawxandco@gmail.com",
    password: "12345678"
  },
  {
    username: "eduusunday",
    name: "eduusunday",
    email: "eduusunday@gmail.com",
    password: "12345678"
  },
  {
    username: "chaichology",
    name: "chaichology",
    email: "chaichology@gmail.com",
    password: "12345678"
  },
  {
    username: "polarbear665",
    name: "polarbear665",
    email: "polarbear665@gmail.com",
    password: "12345678"
  },
  {
    username: "artatei",
    name: "artatei",
    email: "artatei@gmail.com",
    password: "12345678"
  },
  {
    username: "holycommunion",
    name: "holycommunion",
    email: "holycommunion@gmail.com",
    password: "12345678"
  },
  {
    username: "epik_designs",
    name: "epik_designs",
    email: "epik_designs@gmail.com",
    password: "12345678"
  },
  {
    username: "sajid390",
    name: "sajid390",
    email: "sajid390@gmail.com",
    password: "12345678"
  },
  {
    username: "yaqeens",
    name: "yaqeens",
    email: "yaqeens@gmail.com",
    password: "12345678"
  },
  {
    username: "muhammadkhanj",
    name: "muhammadkhanj",
    email: "muhammadkhanj@gmail.com",
    password: "12345678"
  },
  {
    username: "bill_art_",
    name: "bill_art_",
    email: "bill_art_@gmail.com",
    password: "12345678"
  },
  {
    username: "audiobook853",
    name: "audiobook853",
    email: "audiobook853@gmail.com",
    password: "12345678"
  },
  {
    username: "usdesign143",
    name: "usdesign143",
    email: "usdesign143@gmail.com",
    password: "12345678"
  },
  {
    username: "farhan4u45",
    name: "farhan4u45",
    email: "farhan4u45@gmail.com",
    password: "12345678"
  },
  {
    username: "muhammadlati816",
    name: "muhammadlati816",
    email: "muhammadlati816@gmail.com",
    password: "12345678"
  },
  {
    username: "yuanasta",
    name: "yuanasta",
    email: "yuanasta@gmail.com",
    password: "12345678"
  },
  {
    username: "smaykoo",
    name: "smaykoo",
    email: "smaykoo@gmail.com",
    password: "12345678"
  },
  {
    username: "joshuatsukayama",
    name: "joshuatsukayama",
    email: "joshuatsukayama@gmail.com",
    password: "12345678"
  },
  {
    username: "sheryarkhurshid",
    name: "sheryarkhurshid",
    email: "sheryarkhurshid@gmail.com",
    password: "12345678"
  },
  {
    username: "ammah_ucha",
    name: "ammah_ucha",
    email: "ammah_ucha@gmail.com",
    password: "12345678"
  },
  {
    username: "agamous",
    name: "agamous",
    email: "agamous@gmail.com",
    password: "12345678"
  },
  {
    username: "mrcbttgl",
    name: "mrcbttgl",
    email: "mrcbttgl@gmail.com",
    password: "12345678"
  },
  {
    username: "dineshsuper",
    name: "dineshsuper",
    email: "dineshsuper@gmail.com",
    password: "12345678"
  },
  {
    username: "abdjan12",
    name: "abdjan12",
    email: "abdjan12@gmail.com",
    password: "12345678"
  },
  {
    username: "mhmstudios",
    name: "mhmstudios",
    email: "mhmstudios@gmail.com",
    password: "12345678"
  },
  {
    username: "iiixl3",
    name: "iiixl3",
    email: "iiixl3@gmail.com",
    password: "12345678"
  },
  {
    username: "manihakanwal",
    name: "manihakanwal",
    email: "manihakanwal@gmail.com",
    password: "12345678"
  },
  {
    username: "lhou11",
    name: "lhou11",
    email: "lhou11@gmail.com",
    password: "12345678"
  },
  {
    username: "moduz4",
    name: "moduz4",
    email: "moduz4@gmail.com",
    password: "12345678"
  },
  {
    username: "kayejill",
    name: "kayejill",
    email: "kayejill@gmail.com",
    password: "12345678"
  },
  {
    username: "m_faroque_bhati",
    name: "m_faroque_bhati",
    email: "m_faroque_bhati@gmail.com",
    password: "12345678"
  },
  {
    username: "ahamedirfanirf",
    name: "ahamedirfanirf",
    email: "ahamedirfanirf@gmail.com",
    password: "12345678"
  },
  {
    username: "creative_anii",
    name: "creative_anii",
    email: "creative_anii@gmail.com",
    password: "12345678"
  },
  {
    username: "djdezign",
    name: "djdezign",
    email: "djdezign@gmail.com",
    password: "12345678"
  },
  {
    username: "desertking007",
    name: "desertking007",
    email: "desertking007@gmail.com",
    password: "12345678"
  },
  {
    username: "zawyed",
    name: "zawyed",
    email: "zawyed@gmail.com",
    password: "12345678"
  },
  {
    username: "josiedanila",
    name: "josiedanila",
    email: "josiedanila@gmail.com",
    password: "12345678"
  },
  {
    username: "romcris",
    name: "romcris",
    email: "romcris@gmail.com",
    password: "12345678"
  },
  {
    username: "contraponta",
    name: "contraponta",
    email: "contraponta@gmail.com",
    password: "12345678"
  },
  {
    username: "arisfrow",
    name: "arisfrow",
    email: "arisfrow@gmail.com",
    password: "12345678"
  },
  {
    username: "neat_soft",
    name: "neat_soft",
    email: "neat_soft@gmail.com",
    password: "12345678"
  },
  {
    username: "ismaabaas",
    name: "ismaabaas",
    email: "ismaabaas@gmail.com",
    password: "12345678"
  },
  {
    username: "areebaruba",
    name: "areebaruba",
    email: "areebaruba@gmail.com",
    password: "12345678"
  },
  {
    username: "aftabs_design",
    name: "aftabs_design",
    email: "aftabs_design@gmail.com",
    password: "12345678"
  },
  {
    username: "a1perfectstudio",
    name: "a1perfectstudio",
    email: "a1perfectstudio@gmail.com",
    password: "12345678"
  },
  {
    username: "potage",
    name: "potage",
    email: "potage@gmail.com",
    password: "12345678"
  },
  {
    username: "writeplace",
    name: "writeplace",
    email: "writeplace@gmail.com",
    password: "12345678"
  },
  {
    username: "mkh343",
    name: "mkh343",
    email: "mkh343@gmail.com",
    password: "12345678"
  },
  {
    username: "fajrihaj",
    name: "fajrihaj",
    email: "fajrihaj@gmail.com",
    password: "12345678"
  },
  {
    username: "onbeecom",
    name: "onbeecom",
    email: "onbeecom@gmail.com",
    password: "12345678"
  },
  {
    username: "jaceypeake",
    name: "jaceypeake",
    email: "jaceypeake@gmail.com",
    password: "12345678"
  },
  {
    username: "senkawa",
    name: "senkawa",
    email: "senkawa@gmail.com",
    password: "12345678"
  },
  {
    username: "best_creatures",
    name: "best_creatures",
    email: "best_creatures@gmail.com",
    password: "12345678"
  },
  {
    username: "mahsaz",
    name: "mahsaz",
    email: "mahsaz@gmail.com",
    password: "12345678"
  },
  {
    username: "miraclenolasco",
    name: "miraclenolasco",
    email: "miraclenolasco@gmail.com",
    password: "12345678"
  },
  {
    username: "koyukoyu",
    name: "koyukoyu",
    email: "koyukoyu@gmail.com",
    password: "12345678"
  },
  {
    username: "logo_design_at",
    name: "logo_design_at",
    email: "logo_design_at@gmail.com",
    password: "12345678"
  },
  {
    username: "aizaej18",
    name: "aizaej18",
    email: "aizaej18@gmail.com",
    password: "12345678"
  },
  {
    username: "noori345",
    name: "noori345",
    email: "noori345@gmail.com",
    password: "12345678"
  },
  {
    username: "ikken_creative",
    name: "ikken_creative",
    email: "ikken_creative@gmail.com",
    password: "12345678"
  },
  {
    username: "younes_boularas",
    name: "younes_boularas",
    email: "younes_boularas@gmail.com",
    password: "12345678"
  },
  {
    username: "arsanytalaat",
    name: "arsanytalaat",
    email: "arsanytalaat@gmail.com",
    password: "12345678"
  },
  {
    username: "benwahid",
    name: "benwahid",
    email: "benwahid@gmail.com",
    password: "12345678"
  },
  {
    username: "miminoshka",
    name: "miminoshka",
    email: "miminoshka@gmail.com",
    password: "12345678"
  },
  {
    username: "mediagallery",
    name: "mediagallery",
    email: "mediagallery@gmail.com",
    password: "12345678"
  },
  {
    username: "samigharbi",
    name: "samigharbi",
    email: "samigharbi@gmail.com",
    password: "12345678"
  },
  {
    username: "aroobahaq",
    name: "aroobahaq",
    email: "aroobahaq@gmail.com",
    password: "12345678"
  },
  {
    username: "ahmadyahya_art",
    name: "ahmadyahya_art",
    email: "ahmadyahya_art@gmail.com",
    password: "12345678"
  },
  {
    username: "fathi_isha",
    name: "fathi_isha",
    email: "fathi_isha@gmail.com",
    password: "12345678"
  },
  {
    username: "noorqureshi123",
    name: "noorqureshi123",
    email: "noorqureshi123@gmail.com",
    password: "12345678"
  },
  {
    username: "ghazalerahmani",
    name: "ghazalerahmani",
    email: "ghazalerahmani@gmail.com",
    password: "12345678"
  },
  {
    username: "curry72501",
    name: "curry72501",
    email: "curry72501@gmail.com",
    password: "12345678"
  },
  {
    username: "setsetset",
    name: "setsetset",
    email: "setsetset@gmail.com",
    password: "12345678"
  },
  {
    username: "shodowave",
    name: "shodowave",
    email: "shodowave@gmail.com",
    password: "12345678"
  },
  {
    username: "masgozali",
    name: "masgozali",
    email: "masgozali@gmail.com",
    password: "12345678"
  },
  {
    username: "seven____",
    name: "seven____",
    email: "seven____@gmail.com",
    password: "12345678"
  },
  {
    username: "yulingo",
    name: "yulingo",
    email: "yulingo@gmail.com",
    password: "12345678"
  },
  {
    username: "letter_studio",
    name: "letter_studio",
    email: "letter_studio@gmail.com",
    password: "12345678"
  },
  {
    username: "grafixel2021",
    name: "grafixel2021",
    email: "grafixel2021@gmail.com",
    password: "12345678"
  },
  {
    username: "minakuo",
    name: "minakuo",
    email: "minakuo@gmail.com",
    password: "12345678"
  },
  {
    username: "theefficient5",
    name: "theefficient5",
    email: "theefficient5@gmail.com",
    password: "12345678"
  },
  {
    username: "totidrawing",
    name: "totidrawing",
    email: "totidrawing@gmail.com",
    password: "12345678"
  },
  {
    username: "os_design",
    name: "os_design",
    email: "os_design@gmail.com",
    password: "12345678"
  },
  {
    username: "talal_munir1",
    name: "talal_munir1",
    email: "talal_munir1@gmail.com",
    password: "12345678"
  },
  {
    username: "boon_24",
    name: "boon_24",
    email: "boon_24@gmail.com",
    password: "12345678"
  },
  {
    username: "omararahman45",
    name: "omararahman45",
    email: "omararahman45@gmail.com",
    password: "12345678"
  },
  {
    username: "oussbilly",
    name: "oussbilly",
    email: "oussbilly@gmail.com",
    password: "12345678"
  },
  {
    username: "ahmedkandil",
    name: "ahmedkandil",
    email: "ahmedkandil@gmail.com",
    password: "12345678"
  },
  {
    username: "youneshadjiali",
    name: "youneshadjiali",
    email: "youneshadjiali@gmail.com",
    password: "12345678"
  },
  {
    username: "customtattooart",
    name: "customtattooart",
    email: "customtattooart@gmail.com",
    password: "12345678"
  },
  {
    username: "zerocomplexity",
    name: "zerocomplexity",
    email: "zerocomplexity@gmail.com",
    password: "12345678"
  },
  {
    username: "jessicagu87",
    name: "jessicagu87",
    email: "jessicagu87@gmail.com",
    password: "12345678"
  },
  {
    username: "faisalfans",
    name: "faisalfans",
    email: "faisalfans@gmail.com",
    password: "12345678"
  },
  {
    username: "jecazub",
    name: "jecazub",
    email: "jecazub@gmail.com",
    password: "12345678"
  },
  {
    username: "alikhalid23",
    name: "alikhalid23",
    email: "alikhalid23@gmail.com",
    password: "12345678"
  },
  {
    username: "howiex0127",
    name: "howiex0127",
    email: "howiex0127@gmail.com",
    password: "12345678"
  },
  {
    username: "lingpitts",
    name: "lingpitts",
    email: "lingpitts@gmail.com",
    password: "12345678"
  },
  {
    username: "shkahmad001",
    name: "shkahmad001",
    email: "shkahmad001@gmail.com",
    password: "12345678"
  },
  {
    username: "rawryousef",
    name: "rawryousef",
    email: "rawryousef@gmail.com",
    password: "12345678"
  },
  {
    username: "yummy2021",
    name: "yummy2021",
    email: "yummy2021@gmail.com",
    password: "12345678"
  },
  {
    username: "mariashtelle",
    name: "mariashtelle",
    email: "mariashtelle@gmail.com",
    password: "12345678"
  },
  {
    username: "multazambnyusuf",
    name: "multazambnyusuf",
    email: "multazambnyusuf@gmail.com",
    password: "12345678"
  },
  {
    username: "atarafi",
    name: "atarafi",
    email: "atarafi@gmail.com",
    password: "12345678"
  },
  {
    username: "muhamed_eshahed",
    name: "muhamed_eshahed",
    email: "muhamed_eshahed@gmail.com",
    password: "12345678"
  },
  {
    username: "stellarboy0629",
    name: "stellarboy0629",
    email: "stellarboy0629@gmail.com",
    password: "12345678"
  },
  {
    username: "desheng01010",
    name: "desheng01010",
    email: "desheng01010@gmail.com",
    password: "12345678"
  },
  {
    username: "bashrah_",
    name: "bashrah_",
    email: "bashrah_@gmail.com",
    password: "12345678"
  },
  {
    username: "nitdesigner",
    name: "nitdesigner",
    email: "nitdesigner@gmail.com",
    password: "12345678"
  },
  {
    username: "leopon",
    name: "leopon",
    email: "leopon@gmail.com",
    password: "12345678"
  },
  {
    username: "daniyal_ah",
    name: "daniyal_ah",
    email: "daniyal_ah@gmail.com",
    password: "12345678"
  },
  {
    username: "fachoarif",
    name: "fachoarif",
    email: "fachoarif@gmail.com",
    password: "12345678"
  },
  {
    username: "spiros__o",
    name: "spiros__o",
    email: "spiros__o@gmail.com",
    password: "12345678"
  },
  {
    username: "abhay_calli",
    name: "abhay_calli",
    email: "abhay_calli@gmail.com",
    password: "12345678"
  },
  {
    username: "zainashraf538",
    name: "zainashraf538",
    email: "zainashraf538@gmail.com",
    password: "12345678"
  },
  {
    username: "natdolloso1001",
    name: "natdolloso1001",
    email: "natdolloso1001@gmail.com",
    password: "12345678"
  },
  {
    username: "lazyeggdesk",
    name: "lazyeggdesk",
    email: "lazyeggdesk@gmail.com",
    password: "12345678"
  },
  {
    username: "yaciraiza",
    name: "yaciraiza",
    email: "yaciraiza@gmail.com",
    password: "12345678"
  },
  {
    username: "yunse0k",
    name: "yunse0k",
    email: "yunse0k@gmail.com",
    password: "12345678"
  },
  {
    username: "dragil",
    name: "dragil",
    email: "dragil@gmail.com",
    password: "12345678"
  },
  {
    username: "faizafarooqui21",
    name: "faizafarooqui21",
    email: "faizafarooqui21@gmail.com",
    password: "12345678"
  },
  {
    username: "learning_haus",
    name: "learning_haus",
    email: "learning_haus@gmail.com",
    password: "12345678"
  },
  {
    username: "sanizahra972",
    name: "sanizahra972",
    email: "sanizahra972@gmail.com",
    password: "12345678"
  },
  {
    username: "ahmedhama2i",
    name: "ahmedhama2i",
    email: "ahmedhama2i@gmail.com",
    password: "12345678"
  },
  {
    username: "bongja",
    name: "bongja",
    email: "bongja@gmail.com",
    password: "12345678"
  },
  {
    username: "ali_nouioua",
    name: "ali_nouioua",
    email: "ali_nouioua@gmail.com",
    password: "12345678"
  },
  {
    username: "abdulmustofa",
    name: "abdulmustofa",
    email: "abdulmustofa@gmail.com",
    password: "12345678"
  },
  {
    username: "extrasunday",
    name: "extrasunday",
    email: "extrasunday@gmail.com",
    password: "12345678"
  },
  {
    username: "mahdihasan29",
    name: "mahdihasan29",
    email: "mahdihasan29@gmail.com",
    password: "12345678"
  },
  {
    username: "alexis1453",
    name: "alexis1453",
    email: "alexis1453@gmail.com",
    password: "12345678"
  },
  {
    username: "syedscribe",
    name: "syedscribe",
    email: "syedscribe@gmail.com",
    password: "12345678"
  },
  {
    username: "rubabafaq",
    name: "rubabafaq",
    email: "rubabafaq@gmail.com",
    password: "12345678"
  },
  {
    username: "exprecn",
    name: "exprecn",
    email: "exprecn@gmail.com",
    password: "12345678"
  },
  {
    username: "thecalligraphy1",
    name: "thecalligraphy1",
    email: "thecalligraphy1@gmail.com",
    password: "12345678"
  },
  {
    username: "aditya2048",
    name: "aditya2048",
    email: "aditya2048@gmail.com",
    password: "12345678"
  },
  {
    username: "princefromsky",
    name: "princefromsky",
    email: "princefromsky@gmail.com",
    password: "12345678"
  },
  {
    username: "mahesh0965",
    name: "mahesh0965",
    email: "mahesh0965@gmail.com",
    password: "12345678"
  },
  {
    username: "str_japan",
    name: "str_japan",
    email: "str_japan@gmail.com",
    password: "12345678"
  },
  {
    username: "liz181",
    name: "liz181",
    email: "liz181@gmail.com",
    password: "12345678"
  },
  {
    username: "creative_creat",
    name: "creative_creat",
    email: "creative_creat@gmail.com",
    password: "12345678"
  },
  {
    username: "tmke99",
    name: "tmke99",
    email: "tmke99@gmail.com",
    password: "12345678"
  },
  {
    username: "mukigorotetsuwo",
    name: "mukigorotetsuwo",
    email: "mukigorotetsuwo@gmail.com",
    password: "12345678"
  },
  {
    username: "jacobando",
    name: "jacobando",
    email: "jacobando@gmail.com",
    password: "12345678"
  },
  {
    username: "bernaadiguzel",
    name: "bernaadiguzel",
    email: "bernaadiguzel@gmail.com",
    password: "12345678"
  },
  {
    username: "yousufjamal80",
    name: "yousufjamal80",
    email: "yousufjamal80@gmail.com",
    password: "12345678"
  },
  {
    username: "lordiheb",
    name: "lordiheb",
    email: "lordiheb@gmail.com",
    password: "12345678"
  },
  {
    username: "rt_lettering",
    name: "rt_lettering",
    email: "rt_lettering@gmail.com",
    password: "12345678"
  },
  {
    username: "varun1912",
    name: "varun1912",
    email: "varun1912@gmail.com",
    password: "12345678"
  },
  {
    username: "esthermariart",
    name: "esthermariart",
    email: "esthermariart@gmail.com",
    password: "12345678"
  },
  {
    username: "mbonster",
    name: "mbonster",
    email: "mbonster@gmail.com",
    password: "12345678"
  },
  {
    username: "ote_ote",
    name: "ote_ote",
    email: "ote_ote@gmail.com",
    password: "12345678"
  },
  {
    username: "superkij",
    name: "superkij",
    email: "superkij@gmail.com",
    password: "12345678"
  },
  {
    username: "just_greta",
    name: "just_greta",
    email: "just_greta@gmail.com",
    password: "12345678"
  },
  {
    username: "jnstacey",
    name: "jnstacey",
    email: "jnstacey@gmail.com",
    password: "12345678"
  },
  {
    username: "joyfeliza",
    name: "joyfeliza",
    email: "joyfeliza@gmail.com",
    password: "12345678"
  },
  {
    username: "simonwilkoszz",
    name: "simonwilkoszz",
    email: "simonwilkoszz@gmail.com",
    password: "12345678"
  },
  {
    username: "yogi_isnanda",
    name: "yogi_isnanda",
    email: "yogi_isnanda@gmail.com",
    password: "12345678"
  },
  {
    username: "addinu",
    name: "addinu",
    email: "addinu@gmail.com",
    password: "12345678"
  },
  {
    username: "khnhd2708",
    name: "khnhd2708",
    email: "khnhd2708@gmail.com",
    password: "12345678"
  },
  {
    username: "riorezaldy",
    name: "riorezaldy",
    email: "riorezaldy@gmail.com",
    password: "12345678"
  },
  {
    username: "fancyfruits_rar",
    name: "fancyfruits_rar",
    email: "fancyfruits_rar@gmail.com",
    password: "12345678"
  },
  {
    username: "hunter4rt",
    name: "hunter4rt",
    email: "hunter4rt@gmail.com",
    password: "12345678"
  },
  {
    username: "yanuaradii",
    name: "yanuaradii",
    email: "yanuaradii@gmail.com",
    password: "12345678"
  },
  {
    username: "dimasrawk",
    name: "dimasrawk",
    email: "dimasrawk@gmail.com",
    password: "12345678"
  },
  {
    username: "aminulislam45",
    name: "aminulislam45",
    email: "aminulislam45@gmail.com",
    password: "12345678"
  },
  {
    username: "design_expert2",
    name: "design_expert2",
    email: "design_expert2@gmail.com",
    password: "12345678"
  },
  {
    username: "vardgd",
    name: "vardgd",
    email: "vardgd@gmail.com",
    password: "12345678"
  },
  {
    username: "nasrulkhaq",
    name: "nasrulkhaq",
    email: "nasrulkhaq@gmail.com",
    password: "12345678"
  },
  {
    username: "dennydaske",
    name: "dennydaske",
    email: "dennydaske@gmail.com",
    password: "12345678"
  },
  {
    username: "cbwall",
    name: "cbwall",
    email: "cbwall@gmail.com",
    password: "12345678"
  },
  {
    username: "bjornbauerart",
    name: "bjornbauerart",
    email: "bjornbauerart@gmail.com",
    password: "12345678"
  },
  {
    username: "orychii",
    name: "orychii",
    email: "orychii@gmail.com",
    password: "12345678"
  },
  {
    username: "weapestudio",
    name: "weapestudio",
    email: "weapestudio@gmail.com",
    password: "12345678"
  },
  {
    username: "crkstyles",
    name: "crkstyles",
    email: "crkstyles@gmail.com",
    password: "12345678"
  },
  {
    username: "andregwas",
    name: "andregwas",
    email: "andregwas@gmail.com",
    password: "12345678"
  },
  {
    username: "ambvrr",
    name: "ambvrr",
    email: "ambvrr@gmail.com",
    password: "12345678"
  },
  {
    username: "smartdesigns756",
    name: "smartdesigns756",
    email: "smartdesigns756@gmail.com",
    password: "12345678"
  },
  {
    username: "butaprosedur",
    name: "butaprosedur",
    email: "butaprosedur@gmail.com",
    password: "12345678"
  },
  {
    username: "masdito",
    name: "masdito",
    email: "masdito@gmail.com",
    password: "12345678"
  },
  {
    username: "varxtika",
    name: "varxtika",
    email: "varxtika@gmail.com",
    password: "12345678"
  },
  {
    username: "chykoazahra",
    name: "chykoazahra",
    email: "chykoazahra@gmail.com",
    password: "12345678"
  },
  {
    username: "abdalaka",
    name: "abdalaka",
    email: "abdalaka@gmail.com",
    password: "12345678"
  },
  {
    username: "rinabertha",
    name: "rinabertha",
    email: "rinabertha@gmail.com",
    password: "12345678"
  },
  {
    username: "pangeranbee",
    name: "pangeranbee",
    email: "pangeranbee@gmail.com",
    password: "12345678"
  },
  {
    username: "riskyanaad",
    name: "riskyanaad",
    email: "riskyanaad@gmail.com",
    password: "12345678"
  },
  {
    username: "juliagladysheva",
    name: "juliagladysheva",
    email: "juliagladysheva@gmail.com",
    password: "12345678"
  },
  {
    username: "andracire",
    name: "andracire",
    email: "andracire@gmail.com",
    password: "12345678"
  },
  {
    username: "designbyfaisal0",
    name: "designbyfaisal0",
    email: "designbyfaisal0@gmail.com",
    password: "12345678"
  },
  {
    username: "janganlupa",
    name: "janganlupa",
    email: "janganlupa@gmail.com",
    password: "12345678"
  },
  {
    username: "raeannakay",
    name: "raeannakay",
    email: "raeannakay@gmail.com",
    password: "12345678"
  },
  {
    username: "sayapr",
    name: "sayapr",
    email: "sayapr@gmail.com",
    password: "12345678"
  },
  {
    username: "seventea7",
    name: "seventea7",
    email: "seventea7@gmail.com",
    password: "12345678"
  },
  {
    username: "krittikak",
    name: "krittikak",
    email: "krittikak@gmail.com",
    password: "12345678"
  },
  {
    username: "annabovi",
    name: "annabovi",
    email: "annabovi@gmail.com",
    password: "12345678"
  },
  {
    username: "yo_rabt",
    name: "yo_rabt",
    email: "yo_rabt@gmail.com",
    password: "12345678"
  },
  {
    username: "esthab",
    name: "esthab",
    email: "esthab@gmail.com",
    password: "12345678"
  },
  {
    username: "poisondust__",
    name: "poisondust__",
    email: "poisondust__@gmail.com",
    password: "12345678"
  },
  {
    username: "julia_ilustra1",
    name: "julia_ilustra1",
    email: "julia_ilustra1@gmail.com",
    password: "12345678"
  },
  {
    username: "sildinho",
    name: "sildinho",
    email: "sildinho@gmail.com",
    password: "12345678"
  },
  {
    username: "fabiring",
    name: "fabiring",
    email: "fabiring@gmail.com",
    password: "12345678"
  },
  {
    username: "mustfstd",
    name: "mustfstd",
    email: "mustfstd@gmail.com",
    password: "12345678"
  },
  {
    username: "shekoone",
    name: "shekoone",
    email: "shekoone@gmail.com",
    password: "12345678"
  },
  {
    username: "waqas098",
    name: "waqas098",
    email: "waqas098@gmail.com",
    password: "12345678"
  },
  {
    username: "protonkid",
    name: "protonkid",
    email: "protonkid@gmail.com",
    password: "12345678"
  },
  {
    username: "nadya_m",
    name: "nadya_m",
    email: "nadya_m@gmail.com",
    password: "12345678"
  },
  {
    username: "diahzia",
    name: "diahzia",
    email: "diahzia@gmail.com",
    password: "12345678"
  },
  {
    username: "mery_arty",
    name: "mery_arty",
    email: "mery_arty@gmail.com",
    password: "12345678"
  },
  {
    username: "dollmaster",
    name: "dollmaster",
    email: "dollmaster@gmail.com",
    password: "12345678"
  },
  {
    username: "zsasakaslavska",
    name: "zsasakaslavska",
    email: "zsasakaslavska@gmail.com",
    password: "12345678"
  },
  {
    username: "kierandilligaf",
    name: "kierandilligaf",
    email: "kierandilligaf@gmail.com",
    password: "12345678"
  },
  {
    username: "angelojimnz",
    name: "angelojimnz",
    email: "angelojimnz@gmail.com",
    password: "12345678"
  },
  {
    username: "nagisaokay",
    name: "nagisaokay",
    email: "nagisaokay@gmail.com",
    password: "12345678"
  },
  {
    username: "halina_viahera",
    name: "halina_viahera",
    email: "halina_viahera@gmail.com",
    password: "12345678"
  },
  {
    username: "luveight",
    name: "luveight",
    email: "luveight@gmail.com",
    password: "12345678"
  },
  {
    username: "ronos_art",
    name: "ronos_art",
    email: "ronos_art@gmail.com",
    password: "12345678"
  },
  {
    username: "bhadrajimaw33",
    name: "bhadrajimaw33",
    email: "bhadrajimaw33@gmail.com",
    password: "12345678"
  },
  {
    username: "gabrielenini",
    name: "gabrielenini",
    email: "gabrielenini@gmail.com",
    password: "12345678"
  },
  {
    username: "affenirhandi",
    name: "affenirhandi",
    email: "affenirhandi@gmail.com",
    password: "12345678"
  },
  {
    username: "lorenzomasieri",
    name: "lorenzomasieri",
    email: "lorenzomasieri@gmail.com",
    password: "12345678"
  },
  {
    username: "egilia",
    name: "egilia",
    email: "egilia@gmail.com",
    password: "12345678"
  },
  {
    username: "whisky_d7",
    name: "whisky_d7",
    email: "whisky_d7@gmail.com",
    password: "12345678"
  },
  {
    username: "designbyfatima",
    name: "designbyfatima",
    email: "designbyfatima@gmail.com",
    password: "12345678"
  },
  {
    username: "elite_designs2u",
    name: "elite_designs2u",
    email: "elite_designs2u@gmail.com",
    password: "12345678"
  },
  {
    username: "gatranaya",
    name: "gatranaya",
    email: "gatranaya@gmail.com",
    password: "12345678"
  },
  {
    username: "chelsyarts",
    name: "chelsyarts",
    email: "chelsyarts@gmail.com",
    password: "12345678"
  },
  {
    username: "agifantastik",
    name: "agifantastik",
    email: "agifantastik@gmail.com",
    password: "12345678"
  },
  {
    username: "unclenine",
    name: "unclenine",
    email: "unclenine@gmail.com",
    password: "12345678"
  },
  {
    username: "danielalauro",
    name: "danielalauro",
    email: "danielalauro@gmail.com",
    password: "12345678"
  },
  {
    username: "raiannegouvea",
    name: "raiannegouvea",
    email: "raiannegouvea@gmail.com",
    password: "12345678"
  },
  {
    username: "tuiebrek",
    name: "tuiebrek",
    email: "tuiebrek@gmail.com",
    password: "12345678"
  },
  {
    username: "coldmedina2000",
    name: "coldmedina2000",
    email: "coldmedina2000@gmail.com",
    password: "12345678"
  },
  {
    username: "metierpalette",
    name: "metierpalette",
    email: "metierpalette@gmail.com",
    password: "12345678"
  },
  {
    username: "salmashahzadi44",
    name: "salmashahzadi44",
    email: "salmashahzadi44@gmail.com",
    password: "12345678"
  },
  {
    username: "quanvu",
    name: "quanvu",
    email: "quanvu@gmail.com",
    password: "12345678"
  },
  {
    username: "alnoman1971",
    name: "alnoman1971",
    email: "alnoman1971@gmail.com",
    password: "12345678"
  },
  {
    username: "dnzrteen",
    name: "dnzrteen",
    email: "dnzrteen@gmail.com",
    password: "12345678"
  },
  {
    username: "abdulghan441281",
    name: "abdulghan441281",
    email: "abdulghan441281@gmail.com",
    password: "12345678"
  },
  {
    username: "minksone",
    name: "minksone",
    email: "minksone@gmail.com",
    password: "12345678"
  },
  {
    username: "aldiramdan",
    name: "aldiramdan",
    email: "aldiramdan@gmail.com",
    password: "12345678"
  },
  {
    username: "artisco99",
    name: "artisco99",
    email: "artisco99@gmail.com",
    password: "12345678"
  },
  {
    username: "victoriant99",
    name: "victoriant99",
    email: "victoriant99@gmail.com",
    password: "12345678"
  },
  {
    username: "meriam23",
    name: "meriam23",
    email: "meriam23@gmail.com",
    password: "12345678"
  },
  {
    username: "strongro",
    name: "strongro",
    email: "strongro@gmail.com",
    password: "12345678"
  },
  {
    username: "evan528",
    name: "evan528",
    email: "evan528@gmail.com",
    password: "12345678"
  },
  {
    username: "vergosann",
    name: "vergosann",
    email: "vergosann@gmail.com",
    password: "12345678"
  },
  {
    username: "nikithakamath21",
    name: "nikithakamath21",
    email: "nikithakamath21@gmail.com",
    password: "12345678"
  },
  {
    username: "rickystudio23",
    name: "rickystudio23",
    email: "rickystudio23@gmail.com",
    password: "12345678"
  },
  {
    username: "chisarieswendha",
    name: "chisarieswendha",
    email: "chisarieswendha@gmail.com",
    password: "12345678"
  },
  {
    username: "caet_art",
    name: "caet_art",
    email: "caet_art@gmail.com",
    password: "12345678"
  },
  {
    username: "deloket",
    name: "deloket",
    email: "deloket@gmail.com",
    password: "12345678"
  },
  {
    username: "tanyavasileva",
    name: "tanyavasileva",
    email: "tanyavasileva@gmail.com",
    password: "12345678"
  }
]
const design_type = [
  {
      id: 1,
      name: "Logos"
  },
  {
      id: 2,
      name: "Illustrations"
  },
  {
      id: 3,
      name: "Pattern Design"
  },
  {
      id: 4,
      name: "Fonts & Typography"
  }

]
const design_style = [{name: "minimalist", id: 1},
{name: "hand drawn", id: 2}
,{name: "vintage", id: 3}
,{name: "3d", id: 4}
,{name: "modern", id: 5}
,{name: "realistic", id: 6}
,{name: "sketch", id: 7}
,{name: "cartoon", id: 8}
,{name: "pop art", id: 9}
,{name: "abstract", id: 10}
,{name: "anime", id: 11}
,{name: "line art", id: 12}
,{name: "typography", id: 13}
,{name: "font design", id: 14}
,{name: "calligraphy", id: 15}
,{name: "hand lettering", id: 16}
]

const posts = [
    {
      authorId:"a8450d12-c0d7-4672-a105-d7f20dfba48c",
      priceStartFrom: 60,
      imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/192437271/original/3fb8af5466dc09f13e2afaccf22c6708f0a8976e.jpg",
      designTypeId: 1,
      designStyleId: 1
    },
    {
      authorId:"a8450d12-c0d7-4672-a105-d7f20dfba48c",
      priceStartFrom: 15,
      imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/292635463/original/e6d48abe79bee1a9cdc2c71e83c88513440fc393.jpg",
      designTypeId: 1,
      designStyleId: 1
    },
    {
      authorId:"a8450d12-c0d7-4672-a105-d7f20dfba48c",
      priceStartFrom: 10,
      imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/109611151/original/42d4814c676b9f4320152d541bb6c8be7cd83d39.jpg",
      designTypeId: 1,
      designStyleId: 1
    },
    {
      authorId:"a8450d12-c0d7-4672-a105-d7f20dfba48c",
      priceStartFrom: 5,
      imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/132488260/original/955d6d66789bd57075f25da7de2b3a4233b2e26a.jpg",
      designTypeId: 1,
      designStyleId: 1
    },
    {
      authorId:"a8450d12-c0d7-4672-a105-d7f20dfba48c",
      priceStartFrom: 400,
      imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/122531603/original/eccdc57ef960b6cc51853d37a1ff9034af618deb.jpg",
      designTypeId: 1,
      designStyleId: 1
    },
    {
      authorId:"5be5c67e-cad0-4363-a4b5-3cc6967247b7",
      priceStartFrom: 5,
      imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/191938134/original/e3663e702416ecc37762670e28541d9f9010ef2f.jpg",
      designTypeId: 1,
      designStyleId: 1
    },
    {
      authorId:"a8450d12-c0d7-4672-a105-d7f20dfba48c",
      priceStartFrom: 25,
      imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/252190289/original/39c3fb8f7ffc672137dda958551a68ee43b36636.jpg",
      designTypeId: 1,
      designStyleId: 1
    },
    {
      authorId: "cff20465-82de-4bbf-8bf5-992c6966ce3e",
      priceStartFrom: 20,
      imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/201404443/original/1ee458d8c8eb46b803215afd40e36e052caac646.jpg",
      designTypeId: 1,
      designStyleId: 1
    },
    {
      authorId: "e48f62d1-81c2-462e-be04-f1fe469b797e",
      priceStartFrom: 125,
      imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/82346046/original/0ff2f3c391712543510006e490f96cc488ab3526.jpg",
      designTypeId: 1,
      designStyleId: 1
    },
    {
      authorId: "f59d6a00-55d0-4d3d-9978-de3ec3842a81",
      priceStartFrom: 25,
      imageUrl: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/68748376/original/7d9d3d6e4efd2e35bc8e8b3cc2dcf2fde1e27271.jpg",
      designTypeId: 1,
      designStyleId: 1
    }
]


async function main(){
    for(let newType of design_type){
        await prisma.designType.create({
            data: newType
        })
    }
    for(let newStyle of design_style){
        await prisma.designStyle.create({
            data: newStyle
        })
    }
      // create all users first
  const createdUsers = await Promise.all(
    json_users.map(newUser => prisma.user.create({ data: newUser }))
    
  );

  // create posts for each user
  for (let user of createdUsers) {
    const userPosts = json_posts.filter(post => post.username === user.username);
    for (let newPost of userPosts) {
      const post = await prisma.post.create({
        data: {
          title: "Title",
          description: null,
          imageUrl: newPost.imageUrl,
          priceStartFrom: newPost.priceStartFrom,
          author: { connect: { id: user.id } },
          design_type: { connect: { id: newPost.designTypeId } },
          design_style: { connect: { id: newPost.designStyleId } },
        },
      });

      console.log(`Created post ${post.id} for user ${user.username}`);
    }
  }
}
  
  //   await prisma.user.createMany({
  //     data: {}
  // })
    




main().catch(e => {
    console.log(e);
    process.exit(1);
}).finally(() => {
    prisma.$disconnect;
})