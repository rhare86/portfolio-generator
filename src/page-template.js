<<<<<<< HEAD
module.exports = (name, github) => {
    return `
    <!DOCTYPE html>
    <html lang="en">
    
=======
const generatePage = (name, github) => {
    return `
    <!DOCTYPE html> 
    <html lang="en"> 
>>>>>>> 4284409e998827a4620e913650f79807f330b467
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>Portfolio Demo</title>
    </head>
<<<<<<< HEAD
    
=======
  
>>>>>>> 4284409e998827a4620e913650f79807f330b467
    <body>
      <h1>${name}</h1>
      <h2><a href="https://github.com/${github}">Github</a></h2>
    </body>
    </html>
    `;
  };
<<<<<<< HEAD
  
  
=======

module.exports = generatePage;
>>>>>>> 4284409e998827a4620e913650f79807f330b467
