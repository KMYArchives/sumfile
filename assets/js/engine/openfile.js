const OpenFile = {

	open () {
		selectFiles().then(files => {
			_.forEach(files, file => {
				Storage.set('current-file', JSON.stringify({
					name: file.name,
					path: file.path,
					type: file.type,
					size: file.size,
					lastModified: file.lastModifiedDate,
				}))

				El.show(['#hex-btn', '#b64-btn', '#back-page', '#actions-area'])
				El.text('#title-label', this.name())

				Hashes.all_basic_hashes(file)
				console.log(
					
				)
			})
		})
	},

	name () {
		return JSON.parse(
			Storage.get('current-file')
		).name
	}

}