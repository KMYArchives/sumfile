"use strict";var Base64={encode:function(){El.value("#md4-hash",JSON.parse(Storage.get("md4-hash")).base64),El.value("#md5-hash",JSON.parse(Storage.get("md5-hash")).base64),El.value("#sha1-hash",JSON.parse(Storage.get("sha1-hash")).base64),El.value("#sha224-hash",JSON.parse(Storage.get("sha224-hash")).base64),El.value("#sha256-hash",JSON.parse(Storage.get("sha256-hash")).base64),El.value("#sha384-hash",JSON.parse(Storage.get("sha384-hash")).base64),El.value("#sha512-hash",JSON.parse(Storage.get("sha512-hash")).base64)},decode:function(){El.value("#md4-hash",JSON.parse(Storage.get("md4-hash")).hex),El.value("#md5-hash",JSON.parse(Storage.get("md5-hash")).hex),El.value("#sha1-hash",JSON.parse(Storage.get("sha1-hash")).hex),El.value("#sha224-hash",JSON.parse(Storage.get("sha224-hash")).hex),El.value("#sha256-hash",JSON.parse(Storage.get("sha256-hash")).hex),El.value("#sha384-hash",JSON.parse(Storage.get("sha384-hash")).hex),El.value("#sha512-hash",JSON.parse(Storage.get("sha512-hash")).hex)}},Hashes={crc32:function(t){return new Promise(function(a,e){var s=crypt.createHash(algo),h=fs.createReadStream(t);h.on("error",e),h.on("data",function(a){s.update(a)}),h.on("close",function(){a(s.digest("hex"))})})},core:function(a,t){return new Promise(function(a,e){var s=crypt.createHash(t),h=fs.createReadStream(JSON.parse(Storage.get("current-file")).path);h.on("error",e),h.on("data",function(a){s.update(a)}),h.on("close",function(){a(s.digest("hex"))})})},md4:function(a){Hashes.core(a.path,"md4").then(function(a){Storage.set("md4-hash",JSON.stringify({hex:a,base64:base64(a)})),El.value("#md4-hash",a)})},md5:function(a){Hashes.core(a.path,"md5").then(function(a){Storage.set("md5-hash",JSON.stringify({hex:a,base64:base64(a)})),El.value("#md5-hash",a)})},sha1:function(a){Hashes.core(a.path,"sha1").then(function(a){Storage.set("sha1-hash",JSON.stringify({hex:a,base64:base64(a)})),El.value("#sha1-hash",a)})},sha224:function(a){Hashes.core(a.path,"sha224").then(function(a){Storage.set("sha224-hash",JSON.stringify({hex:a,base64:base64(a)})),El.value("#sha224-hash",a)})},sha256:function(a){Hashes.core(a.path,"sha256").then(function(a){Storage.set("sha256-hash",JSON.stringify({hex:a,base64:base64(a)})),El.value("#sha256-hash",a)})},sha384:function(a){Hashes.core(a.path,"sha384").then(function(a){Storage.set("sha384-hash",JSON.stringify({hex:a,base64:base64(a)})),El.value("#sha384-hash",a)})},sha512:function(a){Hashes.core(a.path,"sha512").then(function(a){Storage.set("sha512-hash",JSON.stringify({hex:a,base64:base64(a)})),El.value("#sha512-hash",a)})},all_basic_hashes:function(a){this.md4(a),this.md5(a),this.sha1(a),this.sha224(a),this.sha256(a),this.sha384(a),this.sha512(a)}},OpenFile={open:function(){var e=this;selectFiles().then(function(a){_.forEach(a,function(a){Storage.set("current-file",JSON.stringify({name:a.name,path:a.path,type:a.type,size:a.size,lastModified:a.lastModifiedDate})),El.show(["#hex-btn","#b64-btn","#back-page","#actions-area"]),El.text("#title-label",e.name()),Hashes.all_basic_hashes(a),console.log()})})},name:function(){return JSON.parse(Storage.get("current-file")).name}};