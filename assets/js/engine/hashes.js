const Hashes = {

	crc32 (path) {
		return new Promise(function (resolve, reject) {
			const hash = crypt.createHash(algo)
			const input = fs.createReadStream(path)
		
			input.on('error', reject)
		
			input.on('data', function (chunk) {
				hash.update(chunk);
			})
		
			input.on('close', function () {
				resolve(hash.digest('hex'))
			})
		})
	},

	core (path, algo) {
		return new Promise(function (resolve, reject) {
			const hash = crypt.createHash(algo)
			const input = fs.createReadStream(
				JSON.parse(
					Storage.get('current-file')
				).path
			)
		
			input.on('error', reject)
		
			input.on('data', function (chunk) {
				hash.update(chunk);
			})
		
			input.on('close', function () {
				resolve(hash.digest('hex'))
			})
		})
	},

	md4 (file) {
		Hashes.core(
			file.path, 'md4'
		).then( hash => {
			Storage.set('md4-hash', JSON.stringify({
				hex: hash,
				base64: base64(hash)
			}))
			
			El.value("#md4-hash", hash)
		})
	},

	md5 (file) {
		Hashes.core(
			file.path, 'md5'
		).then( hash => {
			Storage.set('md5-hash', JSON.stringify({
				hex: hash,
				base64: base64(hash)
			}))
			
			El.value("#md5-hash", hash)
		})
	},

	sha1 (file) {
		Hashes.core(
			file.path, 'sha1'
		).then( hash => {
			Storage.set('sha1-hash', JSON.stringify({
				hex: hash,
				base64: base64(hash)
			}))
			
			El.value("#sha1-hash", hash)
		})
	},

	sha224 (file) {
		Hashes.core(
			file.path, 'sha224'
		).then( hash => {
			Storage.set('sha224-hash', JSON.stringify({
				hex: hash,
				base64: base64(hash)
			}))
			
			El.value("#sha224-hash", hash)
		})
	},

	sha256 (file) {
		Hashes.core(
			file.path, 'sha256'
		).then( hash => {
			Storage.set('sha256-hash', JSON.stringify({
				hex: hash,
				base64: base64(hash)
			}))
			
			El.value("#sha256-hash", hash)
		})
	},

	sha384 (file) {
		Hashes.core(
			file.path, 'sha384'
		).then( hash => {
			Storage.set('sha384-hash', JSON.stringify({
				hex: hash,
				base64: base64(hash)
			}))
			
			El.value("#sha384-hash", hash)
		})
	},

	sha512 (file) {
		Hashes.core(
			file.path, 'sha512'
		).then( hash => {
			Storage.set('sha512-hash', JSON.stringify({
				hex: hash,
				base64: base64(hash)
			}))

			El.value("#sha512-hash", hash)
		})
	},

	all_basic_hashes (file) {
		this.md4(file)
		this.md5(file)
		this.sha1(file)
		this.sha224(file)
		this.sha256(file)
		this.sha384(file)
		this.sha512(file)
	},

}