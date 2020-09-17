export default function getThumbnailTemplate(
  title: string,
  thumbnail_logo: string[]
) {
  return `<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    
    <title>Thumbnail</title>
  
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@700&display=swap" rel="stylesheet">
  
    <style>
      body {
        margin: 0;
        font-family: Roboto, sans-serif;
        color: #FFF;
        background: #121212;
        background-image: 
          radial-gradient(circle at 25px 25px, rgba(255, 255, 255, 0.2) 2%, transparent 0%), 
          radial-gradient(circle at 75px 75px, rgba(255, 255, 255, 0.2) 2%, transparent 0%);
        background-size: 100px 100px;
        height: 100vh;
      }
  
      #wrapper {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-align: center;
      }
  
      h1 {
        font-size: 62px;
        line-height: 80px;
        max-width: 80%;
      }
      
      .logo-wrapper {
        display: flex;
        align-items: center;
        align-content: center;
        justify-content: center;
        justify-items: center;
        margin-bottom: 1.5rem;
    }
        .logo {
            margin: 0 75px;
        }
        .plus {
            color: #BBB;
            font-family: Times New Roman, Verdana;
            font-size: 100px;
        }
        .spacer {
            margin: 150px;
        }
      .heading {
        font-size: 62px;
        font-style: normal;
        line-height: 1.2;
        max-width: 80%;
    }
    </style>
  </head>
  <body>
    <div id="wrapper">
      <div class="logo-wrapper">
        ${thumbnail_logo
          .map((img, index) => getPlusSign(index) + getImage(img))
          .join("")}
      </div>
      <div class="heading">${title}</div>
    </div>
  </body>
  </html>`;
}

function getImage(thumbnail_logo: string) {
  return `<img class="logo" alt="logotipo generator" src=${thumbnail_logo} width="150" height="150" />
    `;
}

function getPlusSign(i: number) {
  return i === 0 ? "" : '<div class="plus">+</div>';
}
