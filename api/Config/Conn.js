require('mongoose')
.connect(process.env.DB_CONNECT)
.then(()=>{
  console.log('MongoDB Connected')
})
.catch(()=>{
  console.log('MongoDB Not Connected')
})