# express-http-response-pages
EHRP is simple middleware for express, it allow you to send a nice page for http error (404, 500, ...)


To do so, EHRP give you two way of working.

## Todo
Like you can see, this package is work in progress.
In a recent futur, i will :

 * Add a more complete list of http-error
 * Add a way to customize the rendered page
 * Add a language support


## Basic usage
You can pass EHRP method as **routes** definition

```
const app = require('express')()
const ehrp = require('express-http-response-pages')

app.get('/', (req, res) => { ... })

// Return the Not Found page on unused routes
app.use('*', ehrp.notFound)

app.listen(3000)
```

## Advanced usage
You can also use the EHRP as a **middleware**.

This allow you to trigger the render of an http-error page.

```
app.use(ehrp.middleware)

app.get('/', (req, res) => {
	doSomething()
	.then( data => {
		res.render('home')
	})
	.catch(e => {
		res.internalError()
	})
})
```


### Disclaimer
English is not my first language, if you see a typo or any mistake, do a **PR**.

If you see something bad in my code, just contact me! I love improving my **javascript**

Don't hesitate to contribute as well if you have a great idea for this package.

