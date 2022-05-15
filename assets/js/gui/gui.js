window.onload = e => {

	Events.click( close_btn, e => { Windows.main_window_close() })

	Events.click( minimize_btn, e => { Windows.main_window_minimize() })

}