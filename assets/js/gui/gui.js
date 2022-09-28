window.onload = e => {

	El.hide(['#hex-btn', '#b64-btn', '#back-page', '#actions-area'])
	El.text('#title-label', 'All hashes')

	Events.click( '#back-page', e => {
		El.hide(['#hex-btn', '#b64-btn', '#back-page', '#actions-area'])
		El.text('#title-label', 'All hashes')
	})

	Events.click( '#b64-btn', e => {
		Base64.encode()
		
		Classes.add('#b64-btn', act_class)
		Classes.remove('#hex-btn', act_class)
	})

	Events.click( '#hex-btn', e => {
		Base64.decode()
		
		Classes.add('#hex-btn', act_class)
		Classes.remove('#b64-btn', act_class)
	})

	Events.click( el_add_file_btn, e => { OpenFile.open() })

	Events.click( close_btn, e => { Windows.main_window_close() })

	Events.click( minimize_btn, e => { Windows.main_window_minimize() })

}