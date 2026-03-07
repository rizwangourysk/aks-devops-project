const express = require('express')
const app = express()

app.get('/', (req,res)=>{
    res.send("Azure DevOps + AKS CI/CD Pipeline Working 🚀")
})

app.listen(3000, ()=>{
    console.log("App running on port 3000")
})