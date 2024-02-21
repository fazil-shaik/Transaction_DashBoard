const express = require('express')
const contro = require('./Controllers/Controll.js')
const Transac_tion = require('./Controllers/Transaction.js')
// const Requitd = require('./Routes/Routes.js')
const initializeDatabase = require('./db/db.js');
const app = express()


//db connnection
initializeDatabase()
  .then(db => {
    console.log('Database initialized successfully');
  })
  .catch(err => {
    console.error('Failed to initialize database:', err);
    process.exit(1); 
  });

  //controllers

app.use('/api/data',contro)

app.use('/transaction',Transac_tion)



app.listen(8000,()=>{
    console.log(`App is listening`)
})