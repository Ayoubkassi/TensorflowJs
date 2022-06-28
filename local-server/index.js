let express = require('express');
let app = express();
const PORT = 5000

app.use((req,res,next)=>{
  console.log(`${new Date()} - ${req.method} request for ${req.url}`);
  next();
});

app.use(express.static("../static"))

app.listen(PORT,()=>{
  console.log(`App listen on port ${PORT}`)
});
