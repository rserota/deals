// For authoring Nightwatch tests, see
// https://nightwatchjs.org/guide

console.log(process.env.NODE_ENV)
module.exports = {
	'default e2e tests': browser => {
		browser
			.init()
			.waitForElementVisible('#app')
			.click('.view-deal')
			.waitForElementVisible('#deal-modal')
			.assert.elementPresent('.modal-img')
			.end()
	},

}
