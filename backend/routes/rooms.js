const router = require('express').Router();
const cors = require('cors')

router.use(cors())
router.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
let rooms ={
    R1:{
        LightSet:[0,0]
    },
    R2:{
        LightSet:[0,0]
    }
}


let Message= {msg:"Since you are leaving anyway! Take out the trash."}
let doors=[false,false,false]

router.get('/status/:id',(req,res)=>{
    res.status(200).json(rooms["R"+req.params.id])
})
router.post('/status',(req,res)=>{
    console.log(req.body)
})



router.get('/mainGate',(req,res)=>{
    res.status(200).json(doors[0])
})
router.post('/mainGate',(req,res)=>{
    doors[0]= req.body.main
    res.status(200).send()
})




router.get('/msg',(req,res)=>{
    res.status(200).json(Message)
})
router.post('/msg',(req,res)=>{
    Message= {msg:req.body.msg}
    res.status(200).send()
})


router.get('/room/:id',(req,res)=>{
    res.status(200).json(rooms["R"+req.params.id]).send()
})
router.post('/room',(req,res)=>{
    const {room , id , Switch} = req.body;
    console.log(rooms["R"+room])
    rooms["R"+room].LightSet = Switch;
    console.log(rooms["R"+room])
    res.status(200).send()
})

module.exports = router