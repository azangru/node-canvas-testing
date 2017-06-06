let Express = require('express');

let drawImage = require('./draw');

let app = Express();
app.disable('x-powered-by');


app.use( (req, res) => {

  let result = drawImage();
    console.log("Program is using memory: " + JSON.stringify(process.memoryUsage()));
    res.set('Content-Type', 'image/png');
    // result.pngStream().pipe(res);
    let buffer = result.toBuffer();
    res.send(buffer);
})

let server = app.listen(3000, () => {
  console.log(`Server is running on port 3000`);
});
