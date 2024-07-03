'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "d34f9e7a75dc79fe7e0bb79a2df67c16",
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
".git/index": "834dcffba50e946de0ef8be4c8e3b07d",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "7b73c1895d59c2816026fd135640ebbc",
".git/logs/refs/heads/master": "7b73c1895d59c2816026fd135640ebbc",
".git/logs/refs/remotes/origin/master": "c4c4304a69404dd45a872f98892633ed",
".git/objects/00/84943c80858dd1060e467615c392b5e5f7a5bb": "48d2b5ae68448358d54e3be04bf7430d",
".git/objects/01/393ddb608dcb87f729d22421ba1e8ebafda25d": "faea73de2f4cb64b66a2cfc402cd7a4a",
".git/objects/05/bd98db6204b35d45ad2ea04c9560c70fcf0392": "af15c177de3257bf8953a711931cd913",
".git/objects/05/e299752b369e80aa1dcd495625fc9a541a0aa6": "ddef12afb1ef96f4236dd53e3d26101e",
".git/objects/06/a9b6ff46b051c9dea632f4fc512ae4afa54fc1": "655f0dea9f110b49490430ab26f94d82",
".git/objects/06/ef0d04b031881ab98db4e73c66ee93ceba767d": "cc3cded76ce0ae04846685098ece2d78",
".git/objects/07/2d7c098201e41d19249b8c9366c38be5d3a43e": "e5b8b7428ee60e07d2c8cf33364e7519",
".git/objects/07/74c17c0fa7a7e87e24a6935830998d92b52c75": "cd62ee54b7ceea7b2a7804e69b1d9134",
".git/objects/08/6b1680a01ea12a282dc6474bea8b523ba20e29": "597bee6e3f83d653493b1407d30be23c",
".git/objects/0b/cc7899ccc40d9d9a1b6ba8b8565a757808b53e": "d6dfc9eec862a508b99fba7e6245a3da",
".git/objects/0e/2b397b087a878df6a452ca436809806f50fb67": "8de98cfce18e7c949679777de410ef49",
".git/objects/0f/48d18faeaa47c8ddd7478f878661b2c1fa4aec": "ad96b0d80d7a23b84377d4bfc29ef816",
".git/objects/0f/c344c7e8b9e32ea1ad91f30ded22556352d7bf": "52815189e89c41b9dd2454241dbbf30b",
".git/objects/10/4b76ea1b0f147ddb0afa8e9db0a270d2c2a5ce": "a49535d91872321658e438f4d81538e1",
".git/objects/13/da1f22ec4f03c601b243906482137263ddfd8c": "54cdf2a00d9602567ce2520a56d8afa2",
".git/objects/14/32ffad079885075ceb316fe4e3c1a402df603f": "165c328fe9e15cacd0ff6e2889d1f3ff",
".git/objects/15/1684ed796cf6a017c887e5da2355cfc359edc3": "0152c211f7d32af450dcfe947787d1bf",
".git/objects/15/1fb1dc9bdb19463736e5bf41f36c66da6c9db7": "b633eb04fafd981f38116b5786cc8f04",
".git/objects/16/5ce0ddf03a820a38f48cba9aa0c9df9b6e6b79": "71df17c95c3124eada62b59e7dabda78",
".git/objects/17/6b97be0b60204e8e3d4e8e9744036d1efd2f28": "f41752125d024f926b01350d801dffc7",
".git/objects/18/7fb8665f783afd63383c1007cf7f6e0e3a5963": "3e6b015e92f87da8095e7261eb8aff65",
".git/objects/18/eb401097242a0ec205d5f8abd29a4c5e09c5a3": "f6c569ef70469cd83a4ab33010f83d45",
".git/objects/1a/7bbe8b39c64e02f2947bc85444fc978d87ea86": "4e0c42353349cc018a1997779b0e9600",
".git/objects/1b/19c25f38094813d816b8089cd4a76a18fbb925": "5ce68a5d26446af40b741a6d24c9a013",
".git/objects/1e/7d4ca5f626467e55ccdbce3226edf3b50898b6": "120e1b2e1efc6e4073c4732c8f3dcd22",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/20/cb2f80169bf29d673844d2bb6a73bc04f3bfb8": "d7947f223c44c0e877fdc0eddaa85181",
".git/objects/23/637bc3573701e2ad80a6f8be31b82926b4715f": "5f84f5c437bb2791fdc8411523eae8ff",
".git/objects/24/bc26535b2cd3d69c2eaf52e37bbb89eea15f19": "b902c2df33dbbab50fcc1473fa7fe3ee",
".git/objects/28/937a98f4969879f4079488064721cee010e14c": "f26c07e0d18fa8b1a69a58fcefef7759",
".git/objects/28/a3b2130bb86b4f6dd2b38ba28396b833b5f063": "cd33f18b4494cb9d379141eeb42c3dd8",
".git/objects/2a/1763dcb98d6f1a9e833483412ce1871528b8fe": "1ae66b0a3c890de40f63d79680e38076",
".git/objects/2d/87b0ce398b3ce164c4df964c738f694e016bc9": "9501df580caa8cf0fb9e3392c887487a",
".git/objects/31/6e1fd2b0efb1a069ad1b3dc231a033a925f5e0": "ca779e4c8e5d427525fa75b9303877eb",
".git/objects/31/b97affe8251dc70ca5b65bf6ef4f50ee644af5": "c57507495a292200c84180bcc8bb73e1",
".git/objects/32/77914143254d1a14ad6ea504029516658b4cc7": "1ba2f636828def113216bfa7a9a947a5",
".git/objects/33/030cb013290a4f2fa2d5c65b0695e70285cb52": "420f3386c31383d99022f5c70f3fa795",
".git/objects/33/b87b1025138f1bee8aacfe3c1837e08ad40100": "b89bc56d9f49b7df04ed9f6958a313e3",
".git/objects/35/ef9ae87161d6a956df83daa0bbeb3f14bfc350": "af15eb1757063ed04a90ee9c68537217",
".git/objects/36/6f62582cc69986c5b74aabcb7c2586fa42b984": "b52600de971e210e369df662320e0199",
".git/objects/3b/cdf61db7c463ef311a2ff5f91e73de3b7f2e6b": "0ec35572980299d445c743c9ebd0c090",
".git/objects/3c/53da6e2cb0130407d8d1864997012a6156ca87": "db5c469270a649c546fecdfccddfc84b",
".git/objects/3f/6928085a6cac1d7b9a768946301e7a18ae5776": "a2519848f5ee9f12c5c5d364ad0c74cc",
".git/objects/40/d66a6b52ca75543fd3efd661e5d91d47bba680": "f422dd671e2bdb0a45644dff7d256d56",
".git/objects/41/b7758d847b27c6d42a43d91abaa7bf79e98492": "ec8efe1eb99b9fd3b74cae599d152707",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "0bb82caa96c962530864f28e847f4ab9",
".git/objects/49/8610758c22ecd875382361bfd0ef627cb33fed": "2c2abcb8641ae6721ea3ae7e695d26cb",
".git/objects/49/a939893c87a2b03c5eea898709353a6bda14f8": "21d0b9a7d30e1fa1461cda831e2a6be8",
".git/objects/49/adebdb511c8c293b28db3f6792e5bac28cdc32": "81ef0ed892ac844ebc65145150ca7534",
".git/objects/49/d2c7b463fc030880a05dc25377db1786175154": "4936c48efcaf1a8b16a36c8d7d29cf51",
".git/objects/4a/39079e580dc9be820cba2fae41238c49eaa798": "ada1a19fea32fbb6719120809b9eae60",
".git/objects/4a/8b564f5defc2e5c786ccc5a794a0cd06a01d35": "10740e4629c032a9ed45afedfa2a0413",
".git/objects/4b/f4aa19addaa4eb5ef387d1007235f8b1d81e53": "6785a0a22e169685b8dada1819e2c4e1",
".git/objects/4c/08b87d483354357437a990d7bf94b5da13787d": "e55c33e51e7d7aab008f234e1c07dd59",
".git/objects/51/3ec1e394b0f66531b074c835b3e0d1fa1a461f": "10c65b9dc98bffaa95f3a26bf5c36ac5",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/54/1efc799c3a5c19c7ee6f57e5680bce10c90656": "d46eb385f7f53ba65a43bb73d1dabcfb",
".git/objects/55/a68d9d09bd6b39b9db8712296f8d7fc62b0ebb": "40415baa9e194a881d715452c09a8271",
".git/objects/58/356635d1dc89f2ed71c73cf27d5eaf97d956cd": "a5139be2d64fbf291c1118a06e2877ae",
".git/objects/58/b007afeab6938f7283db26299ce2de9475d842": "c9afe800e603c7935de25bc40ffd8226",
".git/objects/58/b6d0a7b06141105bcbe42ca649caaab1181a05": "dcdfbd2453fe5ae3b7fbe356fe27d2ca",
".git/objects/59/62efb2dffef4c259bda261b128fcab4b659c34": "11e1a7683fedc73b6a0da57ee3c6a112",
".git/objects/5a/7b05e1be311772247124911182fda78fde2cec": "d38bfbb93663df272dc4920186bd1040",
".git/objects/5a/9a8812a94f91b00d4eb989186ae8fb8c61a4ff": "6d7712d43db18aacfc0232e7a4208ff3",
".git/objects/5d/1ae56751759a3b0fa523342559a79fcb511733": "74420d9dc30e7b15270b64202e57760c",
".git/objects/5d/66673f169ed851bcce1020033223216d44f561": "cc989fea238afe69b1f95429e47dcab1",
".git/objects/62/c89ee094658c7a9465824fdb42793a64ea557b": "f3689ac7c02f4de317cd4075064badde",
".git/objects/64/b3fb934aa778120f7b5a7253f3fdc0b37a04fb": "5a7e40506591008184365662760c287b",
".git/objects/65/bc3e3fe24c0eddb64bbdd46af7d235ece4de39": "fae261beca98a77dc9a2166e7de6b3d9",
".git/objects/68/0433becec780542681b654d7cd84007cdf6b2d": "1bf9bd48a8bbb3a7ac26b4ec280ba91d",
".git/objects/68/e3002a9e2580159b7cf3fd1f2c2b2895cee062": "c28d58d8c4e28b264c9104b7614d9746",
".git/objects/6b/cc266d9097e98ec94ac2b72c1eaf6cdb30ed85": "25564f8767de6fb5f95aad1e5cfdba8d",
".git/objects/6f/22a3c707391c896a354e4bbc76e3b41e1545d0": "f37502ba1d727130a4c9ac840411ba91",
".git/objects/6f/9cad4c116bc8d72e2497226abb5c05ee64982c": "0d104480d68c1652a53721377a02a882",
".git/objects/71/3f932c591e8f661aa4a8e54c32c196262fd574": "7825fa2a8de4953cac3eb1b68e02600a",
".git/objects/71/7117947090611c3967f8681ab1ac0f79bca7fc": "ad4e74c0da46020e04043b5cf7f91098",
".git/objects/71/7809363ed19bdd7e1d78f6e421e40a96bc29e3": "9414a3044cb191cc3f57340f57c3dc93",
".git/objects/71/8e6ebe8a8fc17a5cf5ddc6c68f3e99daab31e6": "525e23a7b691b28543b82a01e9cd8092",
".git/objects/72/a8da15a3924b06ea2c65ef4ff025bad2a58326": "0b1dd6665d0a91dd2c9f6968f7080a31",
".git/objects/78/6506f132d63504087b300967530397a31fb3ac": "349514b910cd0cd25db8c21168365163",
".git/objects/79/bd529be1fde13af569f0b166ff58643e44a67f": "08dc10f85dffae0ebde86a5a53cf608c",
".git/objects/7a/0a637216accfb71a45129912c8dd2bb7c2c39c": "2711d7ea285b1dee6e9101b0f7fe1017",
".git/objects/7b/2cc4d7cb0039fdc133d2837652842fcd0d129c": "c5d979d0892522842fb8b8c0f78fd100",
".git/objects/7e/9c3d474491f462a4859fe798a14138bb6f5c37": "96981463dccde4d3cee40a115d95ce41",
".git/objects/7f/cc5739d48f332abd63504e0ad4793732440842": "31e2d063207f4b5968bc4989698cb090",
".git/objects/81/44a70ef4a04d943a4c0af2d2b247fcb1774e46": "a9834d0a813048b1da671ea38467f76b",
".git/objects/81/8f1910813adf1a7ff835f19df9703756dba4ab": "826c0aa622ec09b993a87c1063ffafac",
".git/objects/82/e0bcad1b1d27541168acd1bf4e829200f66ce4": "dc9ba04830fa22f72d31227db70ae6d4",
".git/objects/88/75b4040365ba6428fe9e5b621a2cd8aae6c142": "9bd7aa5127c70a5ea1725de01e58f83f",
".git/objects/88/904510564ce2601277581e3840232bbcd6cf9d": "34c701f4ffa852992aefae7745d261d9",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8e/d4abc71affc01b3078e195da6efdc7c647adf1": "53f0b3f67723c85fdc6bde0c7a3b98cb",
".git/objects/8f/4a07937abe859e4c0b3e43281048df9f29c3df": "4096b43971f72dba9e7e4863243d84bd",
".git/objects/8f/6443d86e63ab28177389dcf2eae2f509b96e17": "5aa8f7fbfa9b0ed19e9604750695d3ae",
".git/objects/8f/8eebfa7fa931243d3eb05d481a6866bf2e3465": "f1ae89f0a533a0dbb02411bfc5646b8a",
".git/objects/90/351f02bfdb8f84aea699c8c22a98bf81e9ba69": "132379ab94b3581ce2d8d673cf94d5cb",
".git/objects/90/e1f5a506d2420c4c667af16b52466a3715bcb8": "8abf18ff79943abdb1b18704fbf8b28f",
".git/objects/94/bfb1463ad8331bfd687bc751b8920b133da744": "fd2d8c0d844b234856b36b93f652048f",
".git/objects/94/c39a572af17acff1581d643a528a28550c7085": "a9284dc3a4080b703e9c08554a0e127e",
".git/objects/94/f7d06e926d627b554eb130e3c3522a941d670a": "8a68cf9111e34dab3527830024de996f",
".git/objects/97/32e4a396788d0f9a7458f98539e63397a6b7aa": "2112ddaf56ed37d5c96550aa498625a4",
".git/objects/99/da85cf98e3e21561af2e28fc2ee1d1c73a9b9c": "c1a453fb0bcb5cc54671f9003e798036",
".git/objects/99/fc15a1afcc71557e2f018879ea775bbf37c63d": "39a0efd864b3e86864757dd4c9917305",
".git/objects/9b/60f71c21c7600d83579e0d7d316538e8112781": "2e05e1c4e8feac89693fcfde7374c17f",
".git/objects/9c/b74aa20db23edbb31d44bb96b2ea460db76ea5": "026706a40e1fb6b177ead744611b33bc",
".git/objects/a1/da1bae3c62b985f48ca4e0dd825a0846f94e9c": "117e60e382c50803e1ac65df835e9b54",
".git/objects/a5/762dc475fe342f308e28c60da627eef0e88d7a": "cef764c3f4c36c346d33076cbbf14442",
".git/objects/a6/59e00463e0ed62a497a207126495512bf62fee": "1b9c3a5403c57bd6db85d23b5ef8741a",
".git/objects/a6/fa38a81f6e14f84aa97ac1cd6c29b41862a444": "d38ce7ec63a585ddccb14d9d2d6849a0",
".git/objects/ad/bc3e8cf7828bb5eb17f89d630bb822a0347253": "29aca56bcd66f57d4f2e576fe15fd910",
".git/objects/af/742adee0a85dd21ea96cbd84182e30e085d6cf": "aa25b932ec40efacb1efe27e7cf25d82",
".git/objects/b3/aef25de7851c4ec25a0ce51a16316bdddb3fb9": "c3b0162d72357658d02833584474b94e",
".git/objects/b3/ebbd38f666d4ffa1a394c5de15582f9d7ca6c0": "acffaef415384586af017e5ae7f0d1fd",
".git/objects/b5/0254288cc6319d153c4af1d64870d95ee2436f": "468a6506934a07c970a4739eae75eedd",
".git/objects/b5/feb3c9a6ae6c2de2de6ece54a2715baa33cd66": "6966eb95a0bbc101b1a0e8ecf8a2f34a",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b8/a13c9d5827c31c13caaa2caf5a84f282935645": "3a7657dbc152c5966d58f6840fa6f07d",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/6afadba6a50508e17dabf3f734b8e40dab68a6": "ccddf06900de1cb3428d26ce64efff5f",
".git/objects/ba/ffda60a525b3cda93af22c1f9eb03c23110825": "deeb3dc1f0c190e6391b3f174a8f9d79",
".git/objects/bb/92e3d8b68afd4b515c22df3111b1ad60282e71": "699bfb5e593685498b47be95ad46f72e",
".git/objects/bd/b926be0a88065f26cd934bed5031fe2d9967ae": "551217e0c16ed2c988609cdebae1efb1",
".git/objects/bf/2385802382f40da907eddddcf45c0016d30506": "3bc2eee1b62a3f61519e14102e539438",
".git/objects/bf/f3912a9bdd0f45850791eacd77118773e22c46": "6252ef9884e6f2b2c30e6abb0fc1a0b9",
".git/objects/c0/0a6122f84ec8605cf22fa520c7a3fc5b87cff5": "fae5655504164d0b891e93e6c763c709",
".git/objects/c5/f4bc2a4da91586f3005813077f0d0aa9040f82": "3191028b787554cee4652f5050144bff",
".git/objects/c6/897d6802711e55599efa0f1502418071a1ebaa": "7a7fde1bddccff2490c5aa1829091acb",
".git/objects/c9/bf8af1b92c723b589cc9afadff1013fa0a0213": "5fa10c835c8e287b1fb7beb9ce0f5bbd",
".git/objects/ca/44fdc99c7db08a4103f20c0a37c894b5853474": "b1f9205ecde72f24d684d3cca372cfe5",
".git/objects/cc/5f86b8183531b9d4cb7f7d0da71847f0276214": "7576842bff565acfd3ccfe28b31ed4cd",
".git/objects/cc/6ed967f832fd0ad5628591179dd777227f5946": "445d348cf334e3f01e275b4b85209550",
".git/objects/d0/850a6eeedec72028ad2c9c3777ef0b4721ec7c": "6e07ee9aa6a1dc05ed1008b4c522d9c8",
".git/objects/d1/098e7588881061719e47766c43f49be0c3e38e": "5f32ac9757f448a77d70bf96052de5dd",
".git/objects/d1/60a684330d435f902e83fed0c28cca5933f1d7": "a7fb6075ee09a9cc04bf75b48788c0e3",
".git/objects/d3/bb877fa88f3b0d98de4567054e5065e0861d15": "e3cbce418d36190fdc3bff64f5d2b260",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d4/6545e9bc5542e3ea593d815acfb02385eaffa0": "66245e94595122be746cd6dfe1b2dc9e",
".git/objects/d5/b52f5ea9a2686c79a9b0801223981e2b8381d5": "7997b2bf1bd941ba1a41873f66b8ea6e",
".git/objects/d6/47e36ccde2c65e1b8f7feda3bf8c2b2e2932f4": "8ee24b5227010dca5ceffc96c14b36b6",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/d9/06936e079e2d31a1b02cbf9daf8cb4f3c6cc40": "ab7365b1dc2d62eda18d02d8e22ec0d7",
".git/objects/de/b403627c88074fcaddb27b4fddfeba007e7727": "55d1a3af35ce927b5dba8f290a23ceda",
".git/objects/df/7d2dcb89ab89da87467c0e1059b38c8d8f9296": "534f3183d78a0e2c26089d1cf390b6ce",
".git/objects/e0/3706c7d5f1c83e2fc6e663bd0cb7a0dc3c3faa": "1e715a8c42554e4aefa112badc294657",
".git/objects/e1/5ec66f24c3c482c11f1d46b218c391b3acd41f": "baf2c032cabf294335f280a0b9f6f876",
".git/objects/e4/de4a7ba0714b6fdc69cf0b2b38d2dbecd1b5c9": "a4688ad0b5c2e68c43e76cb7683c11ae",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/e7/62a780bfecb6931b18544fa9981f0e343fb150": "f14bed41565fd2fe596aaca29306f013",
".git/objects/e7/7c22739ba978785be30f943ff23da4d647e859": "9121e1f41a0027c5cc08e023d22324bd",
".git/objects/e7/c07db54f1add5c1c5dcceab3d06628b8bd5569": "fd9cfe25e8d5ba4c8de0dbcd157ed179",
".git/objects/e7/fce0dd38e31ae9c8ef4c957d7e72eeb1608dd4": "c82b73d0d9e7122da088043f7a073b84",
".git/objects/e8/2c5850db3a3482d0c954a4dc122c02de555ce7": "d357cd906b3805bf81477f5527cca086",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ec/a02c822f046fd71fd1323cac2c90174fd457b0": "14efbd4e1e3795426c77cc0f5ac8f0a1",
".git/objects/ed/bc49f27ff0d2715f1fa07d6a1268fac8832813": "57992b872a0576ccc138f4e7fa8225ed",
".git/objects/ef/7695bd0edaffb17a8eb2d4b5938df6fe6a83ca": "c2a718f58946732af77ed0aa131b21b4",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f2/3ffd2d9235a121df44ce935b2060205859e700": "2e52e3304b0afbf462d3f29cb7a47c87",
".git/objects/f3/bb495cb7af2bd5047a8aa677d6eda24a28d833": "79c7142f2ed110e547b5fe4fd9589fb6",
".git/objects/f5/b1be28e9374fa3ab83b9b7065032b46dc45e06": "59b8b15387c3b6bf5f18c5d6c8f604ed",
".git/objects/f8/5a37ca89d71e86c224585aae1dcca5f40a163a": "0518e6b3464c0adf41dea502cbe93583",
".git/objects/f8/8ff6c7b305602c0ec5218b53cec72b11f720c6": "5443695fe5a608b4622acc3159a54417",
".git/objects/fc/6b0e49c89c98293ce8588b40e57392938756fc": "4e3197de881f471e34358315162978f1",
".git/objects/fc/e0228ae8cf29de12522b983b85dd9468a24f8a": "6ae1172237fd4eb96f828e756a289d96",
".git/objects/fd/3afaf031fc1ec9876ed93fba9b1caf50cc09f4": "43a572529b8d6b82aae6ed3a2dd40ad2",
".git/objects/fd/afbd8f43334b46cc3a0887d79d9ebfb3212437": "429ec47a7c2ba902e82c981978dcc88b",
".git/objects/fd/f019f4db90f154538bbecb2370602e0bf9be71": "1e66c707956d78f12aefb0edf1c8bda1",
".git/objects/fe/3914bcf3baf9d87a873a444cac8aaf9dcd54c1": "372add7dd6cdabc32b9333e8d66bff72",
".git/objects/fe/6dfbbd17e9358781a301156b49ca48296e084b": "0c10f60ae51bc0df397b00abc82c929d",
".git/objects/ff/eb6c521313f8246d81bdb88ba8b2ff1678de11": "a226e9c4f482212107110ed8af24c76f",
".git/refs/heads/master": "1f63d464f677f0ae778eaa44af01306c",
".git/refs/remotes/origin/master": "1f63d464f677f0ae778eaa44af01306c",
"assets/AssetManifest.bin": "845d6dc3023d3fc8b72ab9ff46f78da8",
"assets/AssetManifest.bin.json": "a1844c9257dd0eac07da3de24c791c3f",
"assets/AssetManifest.json": "3a4eb7548eedf3c2615814b8b2af6282",
"assets/assets/back1.jpeg": "fb7e02241e976e740caf3c817997acfd",
"assets/assets/certificates/Amazon_Hackon.png": "8b50f055d20316cd46cb9edea84a723d",
"assets/assets/certificates/Certificate_c.png": "f94b7a72554a54b64f58f580ac00fc92",
"assets/assets/certificates/Certificate_cpp.png": "d071efa1083d06209b508e8111588062",
"assets/assets/certificates/Certificate_python.png": "e58b0e1876fe3c40a35c2d060488172d",
"assets/assets/certificates/HackerHorizon.png": "a6f4c4bf106f80be1a0480f4257e2651",
"assets/assets/certificates/SIH2023.png": "a4efa83dfcebf9b5cc4350355abb7ccf",
"assets/assets/certificates/udemy.png": "c3ba47eef8f7b8223ea7e3a4a5e0366b",
"assets/assets/codechef.jpg": "e3ad216dd8ef74d1594a04c78b695f30",
"assets/assets/github.png": "2d1d884fec7e32cbc53f4549be70fb5b",
"assets/assets/gmail.png": "5fcdc56deb93d5b5e14fa4effd32a356",
"assets/assets/leetcod.png": "125c0930798f6f768fa2fa37d06babfa",
"assets/assets/linkedin.png": "bfa8c401b35cb6f8ec3e25cc5040ad41",
"assets/assets/meals_app_assets/details.jpg": "714a4da436eb6da22057ec241249f5fd",
"assets/assets/meals_app_assets/favourite.jpg": "e2df1a7de96562266c0983592c97fb29",
"assets/assets/meals_app_assets/homescreen.jpg": "7f9355f260c0843e809fd0a96f37d9ab",
"assets/assets/meals_app_assets/menu1.jpg": "13a7576f792864daf6098c4a3f56c79e",
"assets/assets/meals_app_assets/menu2.jpg": "77013fc7f56d07b414c635c336784f85",
"assets/assets/meals_app_assets/sidebar.jpg": "866eaf8ee97fe6681fd34bbd9778060b",
"assets/assets/portfolio_assets/aboout.jpg": "9fd7a87074d9dd49316ddfd45013a450",
"assets/assets/portfolio_assets/contact.jpg": "4508628e928c3f20000ad0ff2cf646fa",
"assets/assets/portfolio_assets/home.jpg": "224e0267894e74e86810a008a0bb32f3",
"assets/assets/portfolio_assets/projects.jpg": "028f4d8874161764b2ec95f6e435b5f7",
"assets/assets/portfolio_assets/side_bar.jpg": "1f647bef94d80eb4eb4e48f72dd86835",
"assets/assets/portfolio_assets/timeline.jpg": "a8e9ce4f1fa02025211785b0c2a9b4d2",
"assets/assets/portfolio_img.jpg": "62d29f930529fffcc1de7b34f7e1e739",
"assets/assets/tech_icons/dart.png": "9facb0eecb231b0ffc7a4443ca397b4c",
"assets/assets/tech_icons/firebase.png": "af3eb3e5b60af9ae45cd0d3460f8cb3b",
"assets/assets/tech_icons/flutter.png": "4666c6f37293d6922acc38ca779a9a05",
"assets/assets/unit_converter_assets/example1.jpg": "12ca8a2a09deb53b832eb1d915e54e8d",
"assets/assets/unit_converter_assets/example2.jpg": "5d7539494e639e91394dcf9ecfefda80",
"assets/assets/unit_converter_assets/example3.jpg": "b90fb952f2e74b8a98eba6268addf32c",
"assets/assets/unit_converter_assets/example4.jpg": "ac46cebcb931e4192dfd772727114a7a",
"assets/assets/unit_converter_assets/home_dark.jpg": "7cdd940edbbea86f22cd31293896e5c0",
"assets/assets/unit_converter_assets/home_light.jpg": "4345f492ac23537fa3216472c1d796cc",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "fffb28532de4ecdfc80c156931b71094",
"assets/NOTICES": "8b515295647c647fb1171813f95fdc96",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"flutter_bootstrap.js": "4adc7c59eb572411d0cf9b95f1ffab1f",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "be33fcc4147d5f4b41c281f4846b0d09",
"/": "be33fcc4147d5f4b41c281f4846b0d09",
"main.dart.js": "bdf16adb62aa149ab86c94c95d968661",
"manifest.json": "e74af8957b5899dc6da961caee768ec9",
"version.json": "009c9e65172e010890f7f65fde438006"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
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
