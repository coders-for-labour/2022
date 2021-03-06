doctype html
html(lang="en")
	head
		meta(charset="utf-8")
		meta(http-equiv="x-ua-compatible", content="ie=edge")
		meta(name="viewport", content="width=device-width, initial-scale=1")
		meta(name="twitter:card", content="summary_large_image")
		meta(name="twitter:site", content="http://2022.withlabour.com")
		meta(name="twitter:title", content="To Twenty Twenty Two")
		meta(name="twitter:description", content="The 2017 General Election Decision Game")
		meta(name="twitter:image", content="http://2022.withlabour.com/assets/banner2.jpg")
		meta(property="og:url", content="http://2022.withlabour.com")
		meta(property="og:type", content="website")
		meta(property="og:title", content="To Twenty Twenty Two")
		meta(property="og:description", content="The 2017 General Election Decision Game")
		meta(property="og:image", content="http://2022.withlabour.com/assets/banner2.jpg")
		script!= "(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');ga('create', 'UA-83321918-5', 'auto'); ga('send', 'pageview');"
		if devMode
			title [DEVELOPMENT] #{title}
		else
			title= title
		each stylesheet in stylesheets
			if stylesheet.href
				link(rel="stylesheet", href=stylesheet.href)
			else
				style!= stylesheet.contents
		each script in scripts
			if script.src
				script(src=script.src)
			else
				script!= script.contents
	body.enyo-unselectable
