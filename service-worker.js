if(!self.define){let e,s={};const a=(a,d)=>(a=new URL(a+".js",d).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(d,i)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(s[c])return;let r={};const b=e=>a(e,c),t={module:{uri:c},exports:r,require:b};s[c]=Promise.all(d.map((e=>t[e]||b(e)))).then((e=>(i(...e),r)))}}define(["./workbox-2db7c85a"],(function(e){"use strict";e.setCacheNameDetails({prefix:"Letter"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.clientsClaim(),e.precacheAndRoute([{url:"assets/_plugin-vue_export-helper.cdc0426e.js",revision:"25e3a5dcaf00fb2b1ba0c8ecea6d2560"},{url:"assets/00-grammar.html.8e5a8cc4.js",revision:"bb19dad1f61ad15ee6e7298e679609f2"},{url:"assets/00-grammar.html.9117e15d.js",revision:"f02e6b8e61eabeb79a2ee2e437e733b1"},{url:"assets/00install.html.30287b99.js",revision:"6d2dd4388de39135bd061c3b69074d03"},{url:"assets/00install.html.63afe059.js",revision:"7c8a86f23f1a35a109fb06afac44de49"},{url:"assets/00install.html.69eb0226.js",revision:"c5e349f70dfea1bc2a588b991e47d261"},{url:"assets/00install.html.9d7691fa.js",revision:"e133a094039a1f55142a42142bc47a2a"},{url:"assets/00install.html.a983506b.js",revision:"39bbb098988a6717a6a66b439a23d416"},{url:"assets/00install.html.de0f87b9.js",revision:"225988bbe46e5159579ae5f1d22dbe5c"},{url:"assets/00install.html.de29e622.js",revision:"1f6b1d6b35277893f6bd4705dc31d002"},{url:"assets/00install.html.f38e5c82.js",revision:"b3d6e3769fc2b4ba5f9680ace5c3d51b"},{url:"assets/01concept.html.7f224cb4.js",revision:"4faa7f441c7ed97ad96ff1e83a4836ab"},{url:"assets/01concept.html.ea4e190c.js",revision:"b741bdafdf0f2335223e704cbcfd16c7"},{url:"assets/01config.html.8da7d063.js",revision:"16dd6c520fad1f5623fd91b429ad23d7"},{url:"assets/01config.html.baef1716.js",revision:"1e95d6cd5ca628868ffb151d2c338e78"},{url:"assets/01platform.html.18a79fee.js",revision:"a16b83c517dd0a94fb3c80f676df0e51"},{url:"assets/01platform.html.fcb68847.js",revision:"c3cd2161cf9639c77d2b82425525bca6"},{url:"assets/02command.html.2019728f.js",revision:"3f50eda375340b0dea6c41e4ed4003dd"},{url:"assets/02command.html.df87ca63.js",revision:"bf9a417f04eb5addd5110629031313cb"},{url:"assets/02field.html.246071de.js",revision:"91acd4d7f611d7fe35395258f0e5cf86"},{url:"assets/02field.html.3638fd39.js",revision:"d2e3047eebda5fa0e02cd53aeb92231f"},{url:"assets/404.html.178fc410.js",revision:"76d8fe3a1025f9de55100c3a92bff908"},{url:"assets/404.html.ca9a15d5.js",revision:"aecb8a76e83e0fcc5a1348c6f7236afe"},{url:"assets/app.2ce2785e.js",revision:"cc713481d0df1cd64be8596effaf47e3"},{url:"assets/article1.html.6205087c.js",revision:"267e05f7b937a8f31ec990f761671d1b"},{url:"assets/article1.html.960ef1dc.js",revision:"11379bf65801db8124163272b943e297"},{url:"assets/article10.html.885ba0b4.js",revision:"d87b2ca30633590fa40901be8c1eb27b"},{url:"assets/article10.html.d25070db.js",revision:"722478b3911f7c7ed1c52b65b7e9972d"},{url:"assets/article11.html.1b5f691a.js",revision:"297adf008a48b031e01d50cadadb2776"},{url:"assets/article11.html.f9635468.js",revision:"54eb3d2bc18d7a5ac0dba27cd9e516bb"},{url:"assets/article12.html.a86d803c.js",revision:"b866dbd945f7a515fda1450fb1214cac"},{url:"assets/article12.html.fc1b5ada.js",revision:"5f4826e061e476f71134110fed589470"},{url:"assets/article2.html.88a3a917.js",revision:"90b0cfa2d8ab869675dd2a90a8e86ebe"},{url:"assets/article2.html.eb26f55f.js",revision:"4e4a64fbf71dfc164c8500b787e74db8"},{url:"assets/article3.html.2321150f.js",revision:"85d233858d90eaacf64a0f40f7cca15a"},{url:"assets/article3.html.c6ba9736.js",revision:"507a4d52207bc4bebb8376757531dc8e"},{url:"assets/article4.html.167da8ff.js",revision:"9d4be7b10d97e7f99cf1e01f920314c9"},{url:"assets/article4.html.a4cc5911.js",revision:"9c84a5a4053dbee26d2d7569fba8e36c"},{url:"assets/article5.html.d0aff9a0.js",revision:"2640cf5c864d49129b5694f6688505f8"},{url:"assets/article5.html.fd6867a7.js",revision:"e2ad1c2b0cfd5b6d5a97eb3044912325"},{url:"assets/article6.html.1d9324ff.js",revision:"45a83e49bffb8617c024a69cc3a50baf"},{url:"assets/article6.html.80cef3dd.js",revision:"f9484e926d134f07f4d02cf82a0ec04a"},{url:"assets/article7.html.0d54635c.js",revision:"1588bac61c9c107e2c624b40c0a31ccd"},{url:"assets/article7.html.9a924663.js",revision:"0b1fb43fb142cf750412a8a52512e388"},{url:"assets/article8.html.96654a46.js",revision:"1652e2e41ec126559f4fcc5324d88e46"},{url:"assets/article8.html.dc950bc4.js",revision:"67d1a903b1098b9fdc8fdca3e853e6ab"},{url:"assets/article9.html.0cfa6ea9.js",revision:"5c63280cc9d8f5e68cc305da77322d0f"},{url:"assets/article9.html.ec533190.js",revision:"25588cbb83f71770a85b5afd1781e5d4"},{url:"assets/disable.html.4b78688c.js",revision:"ca91b1b08fdd6f15416a0067baa8021e"},{url:"assets/disable.html.6366ad95.js",revision:"34c8073c7bf2f8d82a14a119b506a886"},{url:"assets/encrypt.html.7fc367d4.js",revision:"5097ee330c42d6c938966284d0f728f5"},{url:"assets/encrypt.html.a270c59c.js",revision:"91df11ef3d2dcac581e8b05782c4ff10"},{url:"assets/giscus.e34d3fcc.js",revision:"b68290d9179cd80e54b96bcf54f0ae25"},{url:"assets/highlight.esm.9b852bc5.js",revision:"7755765e29eda27238d3160a257e85bd"},{url:"assets/index.html.0008b783.js",revision:"a025d18765e78d7ea4feab554a10d148"},{url:"assets/index.html.0151b521.js",revision:"5bdc325a3ca21587ff8b78e299da8fc5"},{url:"assets/index.html.02440e97.js",revision:"9c271fd76c5500e8dab5d526b5db8874"},{url:"assets/index.html.09a5a229.js",revision:"c1d51a6708a41e65e2fc713e30fef0e6"},{url:"assets/index.html.09dae84c.js",revision:"9c271fd76c5500e8dab5d526b5db8874"},{url:"assets/index.html.0d1d479b.js",revision:"4752a0fa0c5cafcdedd2ecf9f249d035"},{url:"assets/index.html.0e406331.js",revision:"9c271fd76c5500e8dab5d526b5db8874"},{url:"assets/index.html.123b07ea.js",revision:"6299881ad155ccc5347bb00ff54c2511"},{url:"assets/index.html.13d313b1.js",revision:"9c271fd76c5500e8dab5d526b5db8874"},{url:"assets/index.html.153de128.js",revision:"9c271fd76c5500e8dab5d526b5db8874"},{url:"assets/index.html.15b47bdb.js",revision:"9c271fd76c5500e8dab5d526b5db8874"},{url:"assets/index.html.1870a05a.js",revision:"9c271fd76c5500e8dab5d526b5db8874"},{url:"assets/index.html.1ead1e77.js",revision:"65dcdb05c97101b9149cd1e7b225e407"},{url:"assets/index.html.20250559.js",revision:"2d8e59d3f02bd7100137052caf75c27e"},{url:"assets/index.html.2609268b.js",revision:"9c271fd76c5500e8dab5d526b5db8874"},{url:"assets/index.html.2b15665a.js",revision:"9c271fd76c5500e8dab5d526b5db8874"},{url:"assets/index.html.2bad9dfc.js",revision:"c4774b7d71264f903992f5b2aafb9dd9"},{url:"assets/index.html.2dfe7de3.js",revision:"9c271fd76c5500e8dab5d526b5db8874"},{url:"assets/index.html.2e91ae50.js",revision:"aa25c691f6cff75b56c71c580314d2c5"},{url:"assets/index.html.2ecf0999.js",revision:"9c271fd76c5500e8dab5d526b5db8874"},{url:"assets/index.html.318da8ad.js",revision:"0b36ff4c0b0fa335088b4a7652f4da38"},{url:"assets/index.html.34c68237.js",revision:"5bef51713fe35416a642f713419f3951"},{url:"assets/index.html.3699750d.js",revision:"749dfe1acca52cdb491fbb4d285681a2"},{url:"assets/index.html.4117c81e.js",revision:"871a6d22298b08c8028812ea6a0c9609"},{url:"assets/index.html.42109dd1.js",revision:"e5ecd28d631919d04e78f4be740df853"},{url:"assets/index.html.436d8a52.js",revision:"34dbf63f3ce18794cc2b13e539acd085"},{url:"assets/index.html.466c4ea7.js",revision:"9c271fd76c5500e8dab5d526b5db8874"},{url:"assets/index.html.477620da.js",revision:"f9dc90034b47af8055f0992e6b67d192"},{url:"assets/index.html.4acf990a.js",revision:"7bba3c9afd2faac0953077338f348cd8"},{url:"assets/index.html.4c52b8e8.js",revision:"4ce8dd5a81fb1b3aafaa70ff13e41a19"},{url:"assets/index.html.4f9aa19e.js",revision:"9c271fd76c5500e8dab5d526b5db8874"},{url:"assets/index.html.5337bae9.js",revision:"9c271fd76c5500e8dab5d526b5db8874"},{url:"assets/index.html.54e1070d.js",revision:"4703d8507fabbe7fd11ddbd3dd809078"},{url:"assets/index.html.581db70c.js",revision:"9c271fd76c5500e8dab5d526b5db8874"},{url:"assets/index.html.5a5c228e.js",revision:"4daa85447989708389213cb5034ff09e"},{url:"assets/index.html.63a5ea41.js",revision:"d46f00f42ef74cb484676d38b5135131"},{url:"assets/index.html.6f3412da.js",revision:"9c271fd76c5500e8dab5d526b5db8874"},{url:"assets/index.html.7172b128.js",revision:"8f56a86049e31e0b467b1fe51fa7bfbb"},{url:"assets/index.html.72e4cdd2.js",revision:"0c93b86bb516627bf478c9e6b8eee597"},{url:"assets/index.html.79708d25.js",revision:"aa2c079ce1a1b3dec312979f8ba43ef7"},{url:"assets/index.html.7c63f5ad.js",revision:"c567f71db621e8689ec288da9b0796c4"},{url:"assets/index.html.7d35f1da.js",revision:"05dd8dcee010005551e4a526331ea48a"},{url:"assets/index.html.966e9f7c.js",revision:"96895068fdbc59b6a637dc09c2f7325a"},{url:"assets/index.html.9aba4a3f.js",revision:"9c271fd76c5500e8dab5d526b5db8874"},{url:"assets/index.html.a21101a3.js",revision:"aea364fa6151bb78a680946b5f353fd4"},{url:"assets/index.html.a7cceff8.js",revision:"06263c1d11a96f111acea3057621466e"},{url:"assets/index.html.a840018b.js",revision:"ffd69f902128579dbf0e199abfb345eb"},{url:"assets/index.html.aa4ce6b8.js",revision:"9c271fd76c5500e8dab5d526b5db8874"},{url:"assets/index.html.b3242100.js",revision:"9c271fd76c5500e8dab5d526b5db8874"},{url:"assets/index.html.bca5336b.js",revision:"d6639081db7b4cedd54842e21042063e"},{url:"assets/index.html.bcd39d3c.js",revision:"9c271fd76c5500e8dab5d526b5db8874"},{url:"assets/index.html.c074b670.js",revision:"5138899ac2ae3562ba01fb155ed86827"},{url:"assets/index.html.c1af45e5.js",revision:"fe5423f09884ed2a9638808266a3a1d3"},{url:"assets/index.html.c7129808.js",revision:"9c271fd76c5500e8dab5d526b5db8874"},{url:"assets/index.html.c919aaf8.js",revision:"07900686de0d0be6a23582862c979cae"},{url:"assets/index.html.ca8dc12d.js",revision:"c9e4ecdd96fb65ec31a702855113fa34"},{url:"assets/index.html.cac21257.js",revision:"9c271fd76c5500e8dab5d526b5db8874"},{url:"assets/index.html.cc8eaad4.js",revision:"894d8ceff7749a550a5538cae48fa474"},{url:"assets/index.html.ced1906a.js",revision:"9c271fd76c5500e8dab5d526b5db8874"},{url:"assets/index.html.d0eeb9b8.js",revision:"9c271fd76c5500e8dab5d526b5db8874"},{url:"assets/index.html.daa3a7d7.js",revision:"cae3c4517bf7447759bf9bab015f61e5"},{url:"assets/index.html.e42837d3.js",revision:"2a473ef6bc34fe04e62a07310e16db7d"},{url:"assets/index.html.e9d74599.js",revision:"d6a4b0a39152af135a0527d3dd6b1edd"},{url:"assets/index.html.f20d9c39.js",revision:"0ce5e2c757ef7b64e2adb8ce25cefeee"},{url:"assets/index.html.f604d94e.js",revision:"9c271fd76c5500e8dab5d526b5db8874"},{url:"assets/index.html.fcf4967b.js",revision:"9c271fd76c5500e8dab5d526b5db8874"},{url:"assets/intro.html.4052ea5f.js",revision:"a5d676f26a53a7b3148edc3d5dc55d17"},{url:"assets/intro.html.8d88a0f2.js",revision:"787a4ce585c9b38a34e2aa89923522e7"},{url:"assets/league-gothic.38fcc721.ttf",revision:"91295fa87df918411b49b7531da5d558"},{url:"assets/league-gothic.5eef6df8.woff",revision:"cd382dc8a9d6317864b5810a320effc5"},{url:"assets/league-gothic.8802c66a.eot",revision:"9900a4643cc63c5d8f969d2196f72572"},{url:"assets/markdown.esm.77e8db25.js",revision:"0d05be8d1ccc17a6f2270457575848a1"},{url:"assets/markdown.html.1ecd7ff4.js",revision:"704a67108aae7c46fcf851c05aa78172"},{url:"assets/markdown.html.f68904e8.js",revision:"0695e850036897f33a3f2521cab2e0d5"},{url:"assets/math.esm.cb9d4be3.js",revision:"e77d289bc577da4e7341dc5a62209df1"},{url:"assets/network.html.59486931.js",revision:"ab2a29685dae5bb3b5850893c95ad088"},{url:"assets/network.html.638b8ace.js",revision:"4ac65fd8cfc2492d7532f5c8886c4395"},{url:"assets/notes.esm.62c5f19d.js",revision:"b055b0fe912d3e63c622ee92caf08028"},{url:"assets/page.html.28fde378.js",revision:"de9fe795445a5de5ec6a8bbc7914dbeb"},{url:"assets/page.html.868f5b9e.js",revision:"fd176f8636ccafa2e772dd5b6b30c40e"},{url:"assets/photoswipe.esm.f594e77b.js",revision:"58c8e5a3e1981882b36217b62f1c7bae"},{url:"assets/reveal.esm.41ec5d7f.js",revision:"40ef902ff74efca41d50e4c94edb2b83"},{url:"assets/search.0782d0d1.svg",revision:"83621669651b9a3d4bf64d1a670ad856"},{url:"assets/search.esm.04894411.js",revision:"7d8008309758cac57a4dd66a633819ba"},{url:"assets/slide.html.1b3cda92.js",revision:"5b0c1c837d518f162ef492ede508a26b"},{url:"assets/slide.html.9ee47e18.js",revision:"32edd5cf42f38c3548877258c6c99516"},{url:"assets/source-sans-pro-italic.05d3615f.woff",revision:"e74f0128884561828ce8c9cf5c284ab8"},{url:"assets/source-sans-pro-italic.ad4b0799.eot",revision:"72217712eb8d28872e7069322f3fda23"},{url:"assets/source-sans-pro-italic.d13268af.ttf",revision:"8256cfd7e4017a7690814879409212cd"},{url:"assets/source-sans-pro-regular.c1865d89.ttf",revision:"2da39ecf9246383937da11b44b7bd9b4"},{url:"assets/source-sans-pro-regular.d4eaa48b.woff",revision:"e7acc589bb558fe58936a853f570193c"},{url:"assets/source-sans-pro-regular.dce8869d.eot",revision:"1d71438462d532b62b05cdd7e6d7197d"},{url:"assets/source-sans-pro-semibold.a53e2723.ttf",revision:"f3565095e6c9158140444970f5a2c5ed"},{url:"assets/source-sans-pro-semibold.b0abd273.woff",revision:"1cb8e94f1185f1131a0c895165998f2b"},{url:"assets/source-sans-pro-semibold.ebb8918d.eot",revision:"0f3da1edf1b5c6a94a6ad948a7664451"},{url:"assets/source-sans-pro-semibolditalic.7225cacc.woff",revision:"6b058fc2634b01d837c3432316c3141f"},{url:"assets/source-sans-pro-semibolditalic.dfe0b47a.eot",revision:"58153ac7194e141d1e73ea88c6b63861"},{url:"assets/source-sans-pro-semibolditalic.e8ec22b6.ttf",revision:"c7e698a4d0956f4a939f42a05685bbf5"},{url:"assets/style.454933b7.css",revision:"dfc6289ce86a82d47016f2587b318462"},{url:"assets/test01.html.7ee9757d.js",revision:"2627f441f7af35c937b0b47387992f11"},{url:"assets/test01.html.eeca1127.js",revision:"001c60f5db173427b17537d5e282bb8e"},{url:"assets/test02.html.a78ed28b.js",revision:"f46da50ef468226ac6f41a6e5d7c8243"},{url:"assets/test02.html.ed9d6323.js",revision:"dcc899baa037dd70898039b16b495354"},{url:"assets/zoom.esm.78977eba.js",revision:"8b3ee4f6f71ef2a7c85901cba6d23344"},{url:"index.html",revision:"454eeb3e56a0ac60361e36859615bab5"},{url:"404.html",revision:"0dccdf956611d730ee8d486a70217d6d"}],{}),e.cleanupOutdatedCaches()}));
//# sourceMappingURL=service-worker.js.map
