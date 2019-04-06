function html_tag(tag) {
	function log_message(msg){
		console.log('<' + tag + '>' + msg)
	}
	return log_message
}
// log_message('This is a test')

print_h1 = html_tag('h1')
print_h1("Test Headline!")
print_h1('Another Headline')

print_p = html_tag('p')
print_p('Test Paragraph!')
