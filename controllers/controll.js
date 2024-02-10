// Đường dẫn đến hình ảnh áo

const aoData = [
  "https://static.pullandbear.net/2/photos//2023/I/0/1/p/7241/303/511/7241303511_2_6_8.jpg?t=1683276056999&imwidth=1125",
  "https://www.hypeandvice.com/cdn/shop/products/ScoopNeckCropTop-HunterGreen-Back_800x.jpg?v=1668549558",
  "https://img01.ztat.net/article/spp-media-p1/cf8dfc59281845019b92521672e88a07/ccc4a474205441a5907e4e10485a347e.jpg?imwidth=103&filter=packshot",

  "https://static.zara.net/photos///2023/I/0/1/p/3641/839/800/2/w/824/3641839800_6_1_1.jpg?ts=1699960738461",

  "https://www.promees.pl/5032-home_default/karen-top.jpg",

  "https://a.allegroimg.com/s360/11d9f2/99b8b2604c2397db5ec558402458/PRETTYLITTLETHING-BORDOWY-TOP-PRZEZROCZYSTY-R-M-J451093",
  "https://m.media-amazon.com/images/I/71yn61cmTFL._AC_SX522_.jpg",

  "https://m.media-amazon.com/images/I/516E8v4bpDL._AC_SX425_.jpg",
  "https://m.media-amazon.com/images/I/41iYDEIAOjL._AC_SY1000_.jpg",
  "https://images.fashiola.pl/product-list/300x450/mytheresa/631708522/cropped-cotton-shirt.webp",

  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHwSAi7jQJDDMC3sGpj_dQl9AP3x07dOL-CbQ5V_LZIKdgtciZLlIPdAijHgO5xbiGzYc&usqp=CAU",

  "https://shop.goop-img.com/cdn-cgi/image/height=464,width=464,dpr=3,format=auto,onerror=redirect,metadata=copyright/spree/images/attachments/000/082/408/original/open-uri20220922-14-1p9vr8b?version=1663864905.webp",
  "https://cdn.shopify.com/s/files/1/0259/5448/4284/products/SKIMS-BRA-BR-UWR-2294-ONX_medium.jpg?v=1672267993",
  "https://www.thirdlove.com/cdn/shop/files/PDP_FLAT_TSBRA_MOCHA.jpg?v=1687920577&width=335",
  "https://cdn.shopify.com/s/files/1/0259/5448/4284/files/SKIMS-BRA-BR-WRL-1891-BRZ_x280.jpg?v=1683159061",

  "https://product.hstatic.net/200000726923/product/br009_w_ed125b372cfc47d79ef6a069890aa0ce.jpg",

  "https://www.terstal.nl/media/catalog/product/cache/2f8025849ea9fc157503f0ee688c0554/2/1/2105450-108_default_1.jpg",

  "https://m.media-amazon.com/images/I/71e3gFMcC4S._AC_UY1000_.jpg",

  "https://cdn11.bigcommerce.com/s-mqq1i1xa2c/images/stencil/160w/products/76304/5164264/778587_black_1__50416.1697032148.jpg?c=1",
  "https://m.media-amazon.com/images/I/61QpGzzztsL._AC_UY1000_.jpg",

  "https://m.media-amazon.com/images/I/71NM-4Hw3mL._AC_UY1000_.jpg",

  "https://m.media-amazon.com/images/I/51CNGGtkg6L._AC_SX569_.jpg",
  "https://m.media-amazon.com/images/I/71y-dlYbWGL._AC_UY1000_.jpg",
];

// Đường dẫn đến hình ảnh quần

const quanData = [
  "https://cdn.shopify.com/s/files/1/1210/0178/products/f4b3de43951b718a5080bac1f74ab4db_800x_c59e0c4c-1515-4fed-84ae-463112e5d5fc_2048x.jpg",
  "https://dictionary.cambridge.org/vi/images/thumb/trouse_noun_001_18227.jpg?version=5.0.376",

  "https://www.soccersportfitness.ca/cdn/shop/products/Champion_Woven_Short_femme_M9215_001.jpg?v=1543093154",

  "https://thenorthface.com.ph/cdn/shop/products/7491.jpg?v=1687698134",
  "https://milano.com/cdn/shop/products/F00025384121_01_81bdbc65-0ac9-423f-a8fb-b4bb5040cd63_grande.jpg?v=1678841245",
  "https://thesimplefolk.co/cdn/shop/products/TheTerryShort_Walnut_900x.jpg?v=1683800971",

  "https://cdn.webshopapp.com/shops/294900/files/370875973/terry-short-terracotta.jpg",

  "https://static.pullandbear.net/2/photos/2024/V/0/1/p/3395/308/800/3395308800_1_1_3.jpg?t=1698406805157",
  "https://eu.sandro-paris.com/dw/image/v2/BCMW_PRD/on/demandware.static/-/Sites-sandro-catalog-master-H13/default/dw3b81308b/images/h13/Sandro_SFPJU00902-11_V_P.jpg?sw=638&sh=822&sm=fit&cx=224&cy=0&cw=1551&ch=2000",
  "https://hobb.vn/public/media//2022/3.%20pree-fall%2022/q3.jpg",

  "https://upload.wikimedia.org/wikipedia/commons/9/96/COLLECTIE_TROPENMUSEUM_Rok_met_panoramische_beschildering_van_Indonesisch_landschap_TMnr_6217-7.jpg",
  "https://www.wickeddragon.co.uk/user/products/WD_RZ_1981B.jpg",
  "https://www.filippa-k.com/dw/image/v2/BFNP_PRD/on/demandware.static/-/Sites-filippa-k-master-catalog/default/dw7e961c56/hi-res/28829-1433-AW22-5-F-9.jpg?sw=1653&sh=2480&sm=cut&sfrm=jpeg",

  "https://cipopakk.hu/UserFiles/Product/thumb/tn-1907940-999995-1636712015.jpg",
  "https://product.hstatic.net/1000283722/product/23w230300702_cam_2_c071178e7e054ed69463714b6fceb313.jpg",
  "https://product.hstatic.net/1000283722/product/sku38_xanh-nhat__1__2cbcc68ca94d4c1a9ab9858364f1bf4b_grande.jpg",
  "https://product.hstatic.net/1000366086/product/upload_bfd3fdc87bbb48758f8eb3003e6de15d.jpg",

  "https://cdn.savagex.com/media/images/products/UD2355978-7560/GARDEN-MAZE-CHEEKY-PANTY-UD2355978-7560-LAYDOWN-1200x1600.jpg",
  "https://cdn.savagex.com/media/images/products/UD2252682-5209/VELVET-VIXEN-BRAZILIAN-PANTY-UD2252682-5209-LAYDOWN-1200x1600.jpg",
  "https://media-resize.adoreme.com/resize/1360/gallery/2023/12/61az4a7bv_amore-cheeky-dark-red/full.jpeg?format=webp",
  "https://cdn-images.farfetch-contents.com/13/81/93/13/13819313_17446523_600.jpg",
  "https://thewebster.com/media/catalog/product/0/6/061428-2509-01.jpg",
  "https://i.ebayimg.com/images/g/lpQAAOSwfsNkc7Sx/s-l1200.webp",
  "https://wacoal.ph/media/amasty/amoptmobile/catalog/product/cache/4c8b7c066cfdd9b920ad328bf023fdff/s/s/ssphzone-1638150099-frontjpg_jpg.webp",
];

// Đường dẫn đến hình ảnh giày/dép

const shoeData = [
  "https://images.meesho.com/images/products/117768507/akpxd_512.webp",
  "https://images.meesho.com/images/products/100931186/v4f5i_512.webp",
  "https://i.pinimg.com/474x/73/11/98/731198a38e76734a98b2fcc2af7ea6a7.jpg",
  "https://www.soloto.com/cdn/shop/products/1_52ae70bd-d290-4199-a374-ed96ca61ff5a.jpg?v=1671441196",
  "https://m.media-amazon.com/images/I/61ddIIAnVJL._AC_UY1000_.jpg",
  "https://news.harvard.edu/wp-content/uploads/2022/02/20220218_dresscode.jpg",
  "https://www.veralishoes.com.au/cdn/shop/products/Harley_Blush_Satin_sort_2_tags_MKT_pcode_V-BLSHSAT.jpg_cxkkph.jpg?v=1689723181",
  "https://m.media-amazon.com/images/I/613I9dfXBjL._AC_UY1000_.jpg",
  (src = "../assets/images/allbody/feet_high_leftnew.png"),
  "https://cdn.obag.filoblu.com/media/catalog/product/cache/25162cc576cf81151d28507649e6339b/o/s/oshsd103_evs00_820_notag_unica_l1.jpg",

  "https://flyingtiger.com/cdn/shop/products/flip-flops-size-36-37-textile-flying-tiger-copenhagen-923033.jpg?v=1665594137",
  "https://www.alcott.eu/dw/image/v2/BDJZ_PRD/on/demandware.static/-/Sites-catalog-alcott-master/default/dw8464b90f/hi-res/SN116UOY11_C3377_002.jpg?sw=1000&sh=1350&q=90&strip=false",
  "https://5.imimg.com/data5/ECOM/Default/2023/3/294399649/TU/YA/SR/13078142/1d1c98c2-926d-4390-ae74-4285745dcc51-15558060-originnm80prcnt-500x500.webp",
  "https://m.media-amazon.com/images/I/71xn5gaFSSL._AC_UY1000_.jpg",
  "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/41XTyvWGQeL._AC_.jpg",
  "https://iltex.us/cdn/shop/products/iltex-apparel-shoes-sandals-women-football-flip-flops-29810297176098_grande.jpg?v=1658007812",
  "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/71HFwSd3gFL._AC_UF894,1000_QL80_.jpg",
  "https://m.media-amazon.com/images/I/51a66TDQP3L.jpg",

  "https://ae01.alicdn.com/kf/S8e937ba5418f4d2ea72e6b912d8bfc65l.jpg?width=750&height=750&hash=1500",
  "https://my-test-11.slatic.net/p/319923a12e2368a837edf45cb712d1dd.jpg",
  "https://i5.walmartimages.com/asr/49c3f593-385a-4594-9453-881550179156.6011247f0757eb0e48a079f695d658e4.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF",

  "https://supersports.com.vn/cdn/shop/products/10001-160-1.jpg?v=1703643598",
  "https://d2ob0iztsaxy5v.cloudfront.net/product/174978/1749783560_zm.jpg",

  "https://www.charleskeith.vn/dw/image/v2/BCWJ_PRD/on/demandware.static/-/Sites-vn-products/default/dw89cdf660/images/hi-res/2022-L6-CK1-60280239-1-35-1.jpg?sw=756&sh=1008",

  "https://product.hstatic.net/200000726949/product/colbie_black_004-002-029_main_sq_nt_2400x2400_f77742388bc14dc3928c8f4dc3efd3aa_master.jpg",
  "https://product.hstatic.net/1000356936/product/silver_w30331_d__4__a99a29c9260a4fa9b1fa2a922fdcddd2_large.jpg",

  "https://img.fruugo.com/product/3/11/86298113_max.jpg",
  "https://product.hstatic.net/1000288980/product/a13ecba5f37948f192edeb152e4798d8_fe868d59e69e4d23b0d3d9b1eddb607c_master.jpg",
  "https://s3-eu-west-1.amazonaws.com/images.linnlive.com/3652a9295a74cb8d24e7ccf3f427714a/b3d7fc44-6276-480f-b721-7255f2368c73.jpg",
  "https://reyma.am/media/image/ae/40/3b/00-00033286_1_1280x1280.jpg",
  "https://images-na.ssl-images-amazon.com/images/I/812LnrPWx9L.jpg",
  "https://bhsh.widen.net/content/kbtfr4aiim/jpeg/AQ7071-002.jpg?w=700&h=700&quality=80&keep=s&crop=no",
  "https://m.media-amazon.com/images/I/61AdRxgWufL._AC_UY1000_.jpg",
  "https://ae01.alicdn.com/kf/S8088b82bdd024b859998ef268cd23413l.jpg_300x300Q70.jpg_.webp",
  "https://www.seamido.com/storage/2017/02/products-KarinLuna-Britsish-Sexy-Knee-High-Boots-Women-Lace-Up-Buckle-Thick-Platform-Winter-Shoes-With-Fur-_6.jpg",
  "https://dms.deckers.com/ugg/image/upload/f_auto,q_auto,dpr_auto/w_900/v1637602211/catalog/images/transparent/5521-WRCH_1.png?_s=RAABAB0",
  "https://img01.ztat.net/article/spp-media-p1/069652f6f04b457ebd6723b45e244529/e4340e54d33e45dfbfd9b1464bc45534.jpg?imwidth=1800&filter=packshot",
  "https://m.media-amazon.com/images/I/71FTZL5BTBL._AC_UY300_.jpg",
  "https://cdn.shopify.com/s/files/1/0259/9832/7888/products/marcs-trella-flat-in-black-and-camel-leather-24656_1_large.jpg?v=1695610160",
  "https://www.malonesouliers.com/cdn/shop/files/BRUNI-10-6_BROWN_NAPPA_A.jpg?v=1684410213&width=1000",
  "https://www.sojoee.com/wp-content/uploads/2023/09/FTW-1206-Pink-ankle-strap-sandals-450x450.jpg",
  "https://d2ob0iztsaxy5v.cloudfront.net/product/134148/1341487040_main.jpg",
];

// túi xách
const bagData = [
  "https://www.takeaseat.sg/wp-content/uploads/2022/03/Materns-Secondary-School-Bag-1.jpg",
  "https://www.smythson.com/dw/image/v2/BCQH_PRD/on/demandware.static/-/Sites-sm4-master-catalog/default/dw7d0a38d5/images/AW22/LLGS/1201063/1201063_w_s1.jpg?sw=656&sh=656&q=100",
  "https://m.media-amazon.com/images/I/41jEXdcI53L._SS600_.jpg",
  "https://vismiintrend.com/wp-content/uploads/2023/05/61UtLgdQNwL._UY500_.jpg",
  "https://www.flannels.com/images/products/71526003_h.jpg",
  "https://saint-laurent.dam.kering.com/m/23ed33ecd335ddd2/Thumbnail-715232DV7071000_A.jpg?v=2",
  "https://bottega-veneta.dam.kering.com/m/2c75696a4d62e376/Thumbnail-776764VCPP16915_A.jpg?v=2",
  "https://images-cdn.ubuy.co.in/6540283285b4b8351817da2d-small-crossbody-bags-shoulder-bag-for.jpg",
  "https://ae01.alicdn.com/kf/Ha3eee24ea2fd4adf8786788a8c62ba64t/Korean-Canvas-Shoulder-Bag-Zipper-Luxury-Women-Bags-Designer-Ladies-Messenger-Bag-Female-Simple-Handbag-Solid.jpg",
  "https://ih1.redbubble.net/image.1089542049.7679/ssrco,tote,cotton,canvas_creme,flatlay,tall_portrait,750x1000-bg,f8f8f8.1u1.jpg",
  "https://cdn11.bigcommerce.com/s-62pjwo3vq9/images/stencil/2560x2560/products/30430/42266/BAG-01__74959.1660188780.jpg?c=1",
  "https://accessorizelondon.in/cdn/shop/products/MA-38909470001_1_0c7b5fce-21ed-4e6c-a776-341a0f977443.jpg?v=1659094507",
  "https://images-cdn.ubuy.co.in/634fc34dae62c34895286f36-hde-small-fashion-purse-for-little-girls.jpg",
  "https://apatchy.co.uk/cdn/shop/files/goldpurseback_800x.jpg?v=1690208940",
  "https://www.tusting.co.uk/wp-content/uploads/Tusting-AW20-Coin-Purse-Red-1.jpg",
];

// dây chuyền
const necklaceData = [
  "https://res.cloudinary.com/kendra-scott/image/upload/q_auto,f_auto,dpr_auto/w_640,h_800,c_fit/Catalogs/kendrascott/Spring-2-2023/Product-Images/kendra-scott-caillin-pendant-necklace-gold-ivory-mop-00.jpeg",
  "https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dwfed21fc8/images/hi-res/51W1D12IM1BA00_2.jpg?sw=640&sh=640",
  "https://static.malabargoldanddiamonds.com/media/catalog/product/cache/5/image/9df78eab33525d08d6e5fb8d27136e95/n/e/negenorucby031.jpg",
  "https://i.ebayimg.com/images/g/QlsAAOSwDi9kIeSX/s-l1200.webp",
  "https://i.ebayimg.com/images/g/1koAAOSwls5Y66uI/s-l1200.webp",
  "https://m.media-amazon.com/images/I/51joUDd-G9L.jpg",
  "https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw19a37390/images/hi-res/5111192FEABBP3_1.jpg?sw=640&sh=640",
  "https://kinclimg4.bluestone.com/f_webp,c_scale,w_418,b_rgb:f0f0f0/giproduct/BIPO0793N12_YAA18DIG6XXXXXXXX_ABCD00-PICS-00003-1024-59335.png",
];

// toc
const hair = [
  "https://m.media-amazon.com/images/I/51hTfNTcCZL.jpg",
  "https://media.karousell.com/media/photos/products/2023/1/30/instock_korean_light_brown_pur_1675071165_c7ee5355_progressive.jpg",
  "https://static-01.daraz.pk/p/2bd41bda5e987120bc63283a2793ed45.jpg_750x400.jpg_.webp",
  "https://i5.walmartimages.com/asr/b07fbda1-0be1-4bbe-8cdc-448186daec8c_1.0839b844c53e6d8074dd7861cc4c5b0e.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
  "https://e7.pngegg.com/pngimages/226/747/png-clipart-hairstyle-wig-girl-hair-women-s-wig-illustration-image-file-formats-face.png",
  "https://i.pinimg.com/originals/a2/ed/20/a2ed207f83b59bf3fda01a851b86dc25.png",
  "https://c0.klipartz.com/pngpicture/386/523/gratis-png-peluca-naranja-cabello-castano-peluca-cabello-largo-capelli-cabello-thumbnail.png",
  "https://i.pinimg.com/236x/58/e7/17/58e717cc817010f99187815f5ff01e43.jpg",
  "https://i.pinimg.com/474x/e8/34/e1/e834e1f423cdf66c0f7eb1ebd0da3d36.jpg",
  "https://e7.pngegg.com/pngimages/365/79/png-clipart-wig-long-hair-hairstyle-cabelo-hair-people-hair.png",
  "https://img.favpng.com/22/6/24/blond-wig-hairstyle-png-favpng-m9YxLe0dw081FFyEsHR5f05tU.jpg",
  "https://www.nicepng.com/png/detail/94-940502_stardoll-hair-png-brown.png",
  "https://allpngfree.com/thumbnail/hair-png--thumbnail-1644712469.jpg",
  'https://w7.pngwing.com/pngs/255/290/png-transparent-wig-hairstyle-adobe-shop-psd-hair-photography-people-sticker.png'
];
// Hiển thị danh sách áo khi tab được chọn
$("#top").on("click", function () {
  displayClothes(aoData, "#ao");
});

// Hiển thị danh sách quần khi tab được chọn
$("#bottom").on("click", function () {
  displayClothes(quanData, "#quan");
});

// Function hiển thị danh sách quần áo
function displayClothes(data, tabId) {
  const tabContent = $(tabId);
  tabContent.empty(); // Xóa nội dung cũ

  data.forEach((item) => {
    const img = $("<img>", {
      src: item,
      class: "clothes-item",
      alt: "Clothes",
    });
    tabContent.append(img);
  });
}

// Xử lý sự kiện khi click vào nút Thử Đồ
$("#try-on-btn").on("click", function () {
  // Thêm logic xử lý khi click vào nút Thử Đồ
  // Ví dụ: thay đổi hình ảnh người mẫu với áo, quần được chọn
});

