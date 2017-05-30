module.exports = function makeHtml(status, text){
  return `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link href="https://fonts.googleapis.com/css?family=Arvo:700" rel="stylesheet">
    <style>
    *{font-family: 'Arvo', serif;}
    body{
      background: #435058;
    }
    div{
      position: absolute; top: 50%; left: 50%;
      transform: translateX(-50%) translateY(-50%);
      width: 800px; height: 600px;
      line-height: 600px;
      text-align: center;
    }
    .status{
      color: #435058;
      text-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
      font-size: 400px;
    }
    .text{
      color: #DCF763;
      font-size: 24px;
      letter-spacing: 5px;
    }
    .text:after{
      content: '';
      position: absolute;
      top: 50%; left: 50%;
      width: 100px; height: 2px;
      background: #DCF763;
      transform: translateX(-50%) translateY(24px);
    }
    </style>
    <title>${status} - ${text}</title>
  </head>
  <body>
    <div class="status">${status}</div>
    <div class="text">${text}</div>
  </body>
  </html>

  `
}
