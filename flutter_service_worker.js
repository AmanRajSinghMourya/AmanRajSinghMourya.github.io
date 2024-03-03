'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "b3db44e0b62512e27505251390a09877",
".git/config": "394f9790490848f4adcbecc00e6f82a1",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "feeb83c5d129e6ae60d624ec1e32f239",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "a6d96c0666286acb6da7d3c1c421a307",
".git/logs/refs/heads/master": "a6d96c0666286acb6da7d3c1c421a307",
".git/logs/refs/remotes/origin/master": "8d095f45dc454d3ed93a9d127259ebb8",
".git/objects/00/84943c80858dd1060e467615c392b5e5f7a5bb": "48d2b5ae68448358d54e3be04bf7430d",
".git/objects/07/74c17c0fa7a7e87e24a6935830998d92b52c75": "cd62ee54b7ceea7b2a7804e69b1d9134",
".git/objects/16/5ce0ddf03a820a38f48cba9aa0c9df9b6e6b79": "71df17c95c3124eada62b59e7dabda78",
".git/objects/17/6b97be0b60204e8e3d4e8e9744036d1efd2f28": "f41752125d024f926b01350d801dffc7",
".git/objects/18/7fb8665f783afd63383c1007cf7f6e0e3a5963": "3e6b015e92f87da8095e7261eb8aff65",
".git/objects/1a/7bbe8b39c64e02f2947bc85444fc978d87ea86": "4e0c42353349cc018a1997779b0e9600",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/23/637bc3573701e2ad80a6f8be31b82926b4715f": "5f84f5c437bb2791fdc8411523eae8ff",
".git/objects/28/937a98f4969879f4079488064721cee010e14c": "f26c07e0d18fa8b1a69a58fcefef7759",
".git/objects/32/77914143254d1a14ad6ea504029516658b4cc7": "1ba2f636828def113216bfa7a9a947a5",
".git/objects/33/b87b1025138f1bee8aacfe3c1837e08ad40100": "b89bc56d9f49b7df04ed9f6958a313e3",
".git/objects/3c/53da6e2cb0130407d8d1864997012a6156ca87": "db5c469270a649c546fecdfccddfc84b",
".git/objects/49/a939893c87a2b03c5eea898709353a6bda14f8": "21d0b9a7d30e1fa1461cda831e2a6be8",
".git/objects/49/d2c7b463fc030880a05dc25377db1786175154": "4936c48efcaf1a8b16a36c8d7d29cf51",
".git/objects/4a/39079e580dc9be820cba2fae41238c49eaa798": "ada1a19fea32fbb6719120809b9eae60",
".git/objects/4b/f4aa19addaa4eb5ef387d1007235f8b1d81e53": "6785a0a22e169685b8dada1819e2c4e1",
".git/objects/4c/08b87d483354357437a990d7bf94b5da13787d": "e55c33e51e7d7aab008f234e1c07dd59",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/55/a68d9d09bd6b39b9db8712296f8d7fc62b0ebb": "40415baa9e194a881d715452c09a8271",
".git/objects/59/62efb2dffef4c259bda261b128fcab4b659c34": "11e1a7683fedc73b6a0da57ee3c6a112",
".git/objects/5a/7b05e1be311772247124911182fda78fde2cec": "d38bfbb93663df272dc4920186bd1040",
".git/objects/5d/66673f169ed851bcce1020033223216d44f561": "cc989fea238afe69b1f95429e47dcab1",
".git/objects/68/0433becec780542681b654d7cd84007cdf6b2d": "1bf9bd48a8bbb3a7ac26b4ec280ba91d",
".git/objects/68/e3002a9e2580159b7cf3fd1f2c2b2895cee062": "c28d58d8c4e28b264c9104b7614d9746",
".git/objects/6b/cc266d9097e98ec94ac2b72c1eaf6cdb30ed85": "25564f8767de6fb5f95aad1e5cfdba8d",
".git/objects/6f/9cad4c116bc8d72e2497226abb5c05ee64982c": "0d104480d68c1652a53721377a02a882",
".git/objects/71/7117947090611c3967f8681ab1ac0f79bca7fc": "ad4e74c0da46020e04043b5cf7f91098",
".git/objects/71/7809363ed19bdd7e1d78f6e421e40a96bc29e3": "9414a3044cb191cc3f57340f57c3dc93",
".git/objects/71/8e6ebe8a8fc17a5cf5ddc6c68f3e99daab31e6": "525e23a7b691b28543b82a01e9cd8092",
".git/objects/79/bd529be1fde13af569f0b166ff58643e44a67f": "08dc10f85dffae0ebde86a5a53cf608c",
".git/objects/7b/2cc4d7cb0039fdc133d2837652842fcd0d129c": "c5d979d0892522842fb8b8c0f78fd100",
".git/objects/81/8f1910813adf1a7ff835f19df9703756dba4ab": "826c0aa622ec09b993a87c1063ffafac",
".git/objects/82/e0bcad1b1d27541168acd1bf4e829200f66ce4": "dc9ba04830fa22f72d31227db70ae6d4",
".git/objects/88/75b4040365ba6428fe9e5b621a2cd8aae6c142": "9bd7aa5127c70a5ea1725de01e58f83f",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8f/4a07937abe859e4c0b3e43281048df9f29c3df": "4096b43971f72dba9e7e4863243d84bd",
".git/objects/8f/8eebfa7fa931243d3eb05d481a6866bf2e3465": "f1ae89f0a533a0dbb02411bfc5646b8a",
".git/objects/90/351f02bfdb8f84aea699c8c22a98bf81e9ba69": "132379ab94b3581ce2d8d673cf94d5cb",
".git/objects/90/e1f5a506d2420c4c667af16b52466a3715bcb8": "8abf18ff79943abdb1b18704fbf8b28f",
".git/objects/94/bfb1463ad8331bfd687bc751b8920b133da744": "fd2d8c0d844b234856b36b93f652048f",
".git/objects/94/c39a572af17acff1581d643a528a28550c7085": "a9284dc3a4080b703e9c08554a0e127e",
".git/objects/99/da85cf98e3e21561af2e28fc2ee1d1c73a9b9c": "c1a453fb0bcb5cc54671f9003e798036",
".git/objects/9c/b74aa20db23edbb31d44bb96b2ea460db76ea5": "026706a40e1fb6b177ead744611b33bc",
".git/objects/a1/da1bae3c62b985f48ca4e0dd825a0846f94e9c": "117e60e382c50803e1ac65df835e9b54",
".git/objects/a6/59e00463e0ed62a497a207126495512bf62fee": "1b9c3a5403c57bd6db85d23b5ef8741a",
".git/objects/af/742adee0a85dd21ea96cbd84182e30e085d6cf": "aa25b932ec40efacb1efe27e7cf25d82",
".git/objects/b5/0254288cc6319d153c4af1d64870d95ee2436f": "468a6506934a07c970a4739eae75eedd",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/bd/b926be0a88065f26cd934bed5031fe2d9967ae": "551217e0c16ed2c988609cdebae1efb1",
".git/objects/c0/0a6122f84ec8605cf22fa520c7a3fc5b87cff5": "fae5655504164d0b891e93e6c763c709",
".git/objects/c5/f4bc2a4da91586f3005813077f0d0aa9040f82": "3191028b787554cee4652f5050144bff",
".git/objects/c6/897d6802711e55599efa0f1502418071a1ebaa": "7a7fde1bddccff2490c5aa1829091acb",
".git/objects/ca/44fdc99c7db08a4103f20c0a37c894b5853474": "b1f9205ecde72f24d684d3cca372cfe5",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d5/b52f5ea9a2686c79a9b0801223981e2b8381d5": "7997b2bf1bd941ba1a41873f66b8ea6e",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/e0/3706c7d5f1c83e2fc6e663bd0cb7a0dc3c3faa": "1e715a8c42554e4aefa112badc294657",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/e7/62a780bfecb6931b18544fa9981f0e343fb150": "f14bed41565fd2fe596aaca29306f013",
".git/objects/e8/2c5850db3a3482d0c954a4dc122c02de555ce7": "d357cd906b3805bf81477f5527cca086",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f5/b1be28e9374fa3ab83b9b7065032b46dc45e06": "59b8b15387c3b6bf5f18c5d6c8f604ed",
".git/objects/fc/6b0e49c89c98293ce8588b40e57392938756fc": "4e3197de881f471e34358315162978f1",
".git/objects/fc/e0228ae8cf29de12522b983b85dd9468a24f8a": "6ae1172237fd4eb96f828e756a289d96",
".git/objects/fd/f019f4db90f154538bbecb2370602e0bf9be71": "1e66c707956d78f12aefb0edf1c8bda1",
".git/objects/fe/3914bcf3baf9d87a873a444cac8aaf9dcd54c1": "372add7dd6cdabc32b9333e8d66bff72",
".git/objects/fe/6dfbbd17e9358781a301156b49ca48296e084b": "0c10f60ae51bc0df397b00abc82c929d",
".git/refs/heads/master": "9ea3e0af761abe4f9b935f4097943de0",
".git/refs/remotes/origin/master": "9ea3e0af761abe4f9b935f4097943de0",
"assets/AssetManifest.bin": "c7edb736cef098a05daa98e7336e0104",
"assets/AssetManifest.bin.json": "8df268675d05cc26d4926947a96a6c94",
"assets/AssetManifest.json": "b199782548dc931c4d2b0e58aadd7909",
"assets/assets/back1.jpeg": "fb7e02241e976e740caf3c817997acfd",
"assets/assets/certificate1.png": "378cd6c1289114e65d927b850615ed03",
"assets/assets/certificate2.png": "01652a7d00099f8d7786e3488a710723",
"assets/assets/codechef.jpg": "e3ad216dd8ef74d1594a04c78b695f30",
"assets/assets/dart.png": "9facb0eecb231b0ffc7a4443ca397b4c",
"assets/assets/firebase.png": "af3eb3e5b60af9ae45cd0d3460f8cb3b",
"assets/assets/flutter.png": "4666c6f37293d6922acc38ca779a9a05",
"assets/assets/github.png": "2d1d884fec7e32cbc53f4549be70fb5b",
"assets/assets/gmail.png": "5fcdc56deb93d5b5e14fa4effd32a356",
"assets/assets/leetcod.png": "125c0930798f6f768fa2fa37d06babfa",
"assets/assets/linkedin.png": "bfa8c401b35cb6f8ec3e25cc5040ad41",
"assets/assets/portfolio_img.jpg": "62d29f930529fffcc1de7b34f7e1e739",
"assets/assets/ss1.png": "c775a88030a7c3b11f41542ffc7fd8a3",
"assets/assets/udemy-flutter.jpg": "7811164ccdd84806b731f798f388c6a4",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/fonts/MaterialIcons-Regular.otf": "fffb28532de4ecdfc80c156931b71094",
"assets/NOTICES": "e72b5c8c6693e25cdb1cf3d4ab4fd2bf",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "17ee8e30dde24e349e70ffcdc0073fb0",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "f3307f62ddff94d2cd8b103daf8d1b0f",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "04f83c01dded195a11d21c2edf643455",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "76f530d6a79ad11dd30ec55eef26c74c",
"/": "76f530d6a79ad11dd30ec55eef26c74c",
"main.dart.js": "42ef4476603f89f3cb70ccf59438e446",
"manifest.json": "e74af8957b5899dc6da961caee768ec9",
"version.json": "009c9e65172e010890f7f65fde438006"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
