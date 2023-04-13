let dbUsers = [
  {
      Username : "Safwan",
      password : "safwan14",
      name : "safwan",
      email : "safwannazar99@gmail.com"
  }
  ,
  {
      Username : "Ali",
      password : "1234",
      name : "ALi",
      email : "ali@gmail.com"
  }
  ,
  {
      Username : "abu",
      password : "12345",
      name : "Abut",
      email : "abu88@gmail.com"
  }
]

const express = require('express')
const app = express()
const port = 3000

app.use(express.json())

app.post('/login', (req, res) => {
  console.log(req.body)

  let result = login(req.body.username,req.body.password)

  let Token = generateToken(result)
  res.send(Token)
})

app.get('/test', (req, res) => {
  res.send('A B C D F G H I J K L M N O P Q R S T U V W X Y Z')
})

app.get('/bye',verifyToken,(req, res) =>{
    res.send('SELAMAT MALAM AIR MATA')
  })

app.post('/register', (req, res) => {

    let result= register
    (

      req.body.username,
      req.body.password,
      req.body.name,
      req.body.email

    )

    res.send(result)
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

function login(reqUsername,reqpassword)
{
    let matchuser= dbUsers.find(
        x => x.Username == reqUsername)

    if (!matchuser)return "User not found"
    if(matchuser.password==reqpassword)
{
    return matchuser
}
else
{
    return "invalid password"
}

}

function register(reqUsername, reqpassword, reqname,reqemail)
{
    dbUsers.push
    (
        {
        Username: reqUsername,
        password: reqpassword,
        name:   reqname,
        email : reqemail    
        }
    )
}

const jwt = require('jsonwebtoken')
function generateToken(userData)
{
  const Token = jwt.sign
  (
    userData,'inipassword',
    {expiresIn: 60 }
  );
  return Token
}

//try to log in
console.log(login ("Safwan","safwan14"))

register("alibaba","1234","alisepet","alisepet@gmail.com")
console.log(login ("alibaba","1234"))

function verifyToken(req, res, next)
{
  let header = req.headers.authorization
  console.log(header)

  let token = header.split('')[1]

  jwt.verify(token,'inipassword',function(err,decoded)
  {
    if(err)
    {
      res.send('invalid Token')

    }
    req.user = decoded
    next()
  });
  }