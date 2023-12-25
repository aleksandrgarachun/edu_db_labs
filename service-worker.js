/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "349f57d8faecb6f8a0a962c40afb80e3"
  },
  {
    "url": "assets/css/0.styles.baa501a4.css",
    "revision": "cefff3f8c27847bd006c320ad3563c8b"
  },
  {
    "url": "assets/img/3table.98bb1ea3.jpg",
    "revision": "98bb1ea3eb55d48dc6391a174bfb4d3d"
  },
  {
    "url": "assets/img/add-files.db7b7c00.png",
    "revision": "db7b7c005ca5aef8d8d7afb2492ec536"
  },
  {
    "url": "assets/img/delate-user1-showresult.c445221d.png",
    "revision": "c445221db3866d139092360b2535bd91"
  },
  {
    "url": "assets/img/delate-user1.3fc6e1e5.png",
    "revision": "3fc6e1e50e978425bf5303ce9403d373"
  },
  {
    "url": "assets/img/delate-user3-from3users.28e8244d.png",
    "revision": "28e8244d90dbc7ba8850e41107c656f5"
  },
  {
    "url": "assets/img/get-user1.0e1f6f46.png",
    "revision": "0e1f6f46d66aed7f15bb31f3825f1c71"
  },
  {
    "url": "assets/img/get-user2-from3users.0352c169.png",
    "revision": "0352c1692253e9979bd60d0d3b9bd66f"
  },
  {
    "url": "assets/img/photo-post-user1.10ec1ba4.png",
    "revision": "10ec1ba433c267140859c7e604bf053e"
  },
  {
    "url": "assets/img/put-file2-from-files.ccd217e7.png",
    "revision": "ccd217e77a5ede01ffeb604bc1f5a154"
  },
  {
    "url": "assets/img/put-user1-showresult.bf2205a3.png",
    "revision": "bf2205a3afecb5d02808c91c280471ea"
  },
  {
    "url": "assets/img/put-user1.d1cf3644.png",
    "revision": "d1cf364427b8d03f7edfe3ccf591a997"
  },
  {
    "url": "assets/img/resultOf-delate1user.cbb8bfe6.png",
    "revision": "cbb8bfe6631c661632a6e164457a2670"
  },
  {
    "url": "assets/img/resultOfFiles.62b35d28.png",
    "revision": "62b35d282e924f5fa2c3dd95067f7741"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.b59ca781.js",
    "revision": "39e29111f52c370d1a137ef9eefbef25"
  },
  {
    "url": "assets/js/11.33205cae.js",
    "revision": "369ae883b30bd84e6e1faf9568fe1154"
  },
  {
    "url": "assets/js/12.4e9ed508.js",
    "revision": "db7d0cc577360eac9445145fa10f73d6"
  },
  {
    "url": "assets/js/13.c4170fb5.js",
    "revision": "ae66f9c3552be2c828fd0fd1dcfdf64f"
  },
  {
    "url": "assets/js/14.3abf31d7.js",
    "revision": "9ba942219a6b61e8fbf4816af109e69d"
  },
  {
    "url": "assets/js/15.be6aa669.js",
    "revision": "9994b92a569fab6fd9f033574f2c1c72"
  },
  {
    "url": "assets/js/16.ad973f94.js",
    "revision": "930fa9523866e1be3757cd2cb37bda93"
  },
  {
    "url": "assets/js/17.c7252b1b.js",
    "revision": "57d3ba9948b49336d08bc4db11643703"
  },
  {
    "url": "assets/js/18.e48a1dbf.js",
    "revision": "9cbef31fad872c16806a0cc39aa7fadc"
  },
  {
    "url": "assets/js/19.df7d4087.js",
    "revision": "cdd9d4b9c6596ad7c051520a3d67dbca"
  },
  {
    "url": "assets/js/2.e7b2bbe2.js",
    "revision": "81fc9dd33e3a32687c0916a06dd44499"
  },
  {
    "url": "assets/js/20.92d88311.js",
    "revision": "1261d7fa77120af44362ed18941905e8"
  },
  {
    "url": "assets/js/21.445347aa.js",
    "revision": "aa688fec90140eea99d8065cc30e6272"
  },
  {
    "url": "assets/js/22.569e5d31.js",
    "revision": "72443e6ca220b399273c63aeb86904b4"
  },
  {
    "url": "assets/js/23.9cc657ba.js",
    "revision": "d078dbdac03579e1f1bb1cbb69cf22fb"
  },
  {
    "url": "assets/js/24.39a5c816.js",
    "revision": "ece1ea4be73d72962863e8b56a843890"
  },
  {
    "url": "assets/js/26.9c6c8ef1.js",
    "revision": "4fa089712c0ae80f2d15b533a7984b9e"
  },
  {
    "url": "assets/js/3.4f6903fe.js",
    "revision": "f90255feb19918f2bb94fb4b0db35b71"
  },
  {
    "url": "assets/js/4.c60a31fc.js",
    "revision": "6832a823208970a0cee82afea146afc6"
  },
  {
    "url": "assets/js/5.4698dad1.js",
    "revision": "bc0ff595b846299e03939565cf152d3f"
  },
  {
    "url": "assets/js/6.e0bfc8f5.js",
    "revision": "7b225eb5f151d8710bbe3eec9b33f75d"
  },
  {
    "url": "assets/js/7.450784fd.js",
    "revision": "55d70d6d70d0fc997b262b9c8f2e0fd9"
  },
  {
    "url": "assets/js/8.f5843999.js",
    "revision": "c855dc6eef094e92aca884d8b93a8fd5"
  },
  {
    "url": "assets/js/9.c112129d.js",
    "revision": "dca8aca7a23065518a2d2405b4cb3788"
  },
  {
    "url": "assets/js/app.c3e0211a.js",
    "revision": "74e34e586d7ea1440ac374c08ba542aa"
  },
  {
    "url": "conclusion/index.html",
    "revision": "d5e4a56ba9052f32a590c51b5450b15c"
  },
  {
    "url": "design/index.html",
    "revision": "7c538792a530c43b0718d465ec25a6f8"
  },
  {
    "url": "index.html",
    "revision": "6c5bae079ccc12ae731e449fa3c7059e"
  },
  {
    "url": "intro/index.html",
    "revision": "1a77cee9b06ef4d226fa494cf363c282"
  },
  {
    "url": "license.html",
    "revision": "70a2edbdcd1a16b29dc6ec11e14ab937"
  },
  {
    "url": "myAvatar.png",
    "revision": "b76db1e62eb8e7fca02a487eb3eac10c"
  },
  {
    "url": "requirements/index.html",
    "revision": "c0d130a4701e56304cfc4b5b048c6423"
  },
  {
    "url": "requirements/stakeholders-needs.html",
    "revision": "e33a5dc2d846650e49a968902b9e3404"
  },
  {
    "url": "requirements/state-of-the-art.html",
    "revision": "195d8ff1d1d583c3841307e22fecec66"
  },
  {
    "url": "software/index.html",
    "revision": "8396fa396995d2c3131ca8e2d750bdb3"
  },
  {
    "url": "test/index.html",
    "revision": "808dcdf5d479bd931b91ef313f2430c6"
  },
  {
    "url": "use cases/index.html",
    "revision": "b0d1ae585e4d2919e2a971ec6d69853c"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
