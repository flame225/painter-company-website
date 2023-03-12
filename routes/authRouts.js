const { Router } = require('express');


const router = Router();


router.get("/index", (req,res)=>{
    res.render("index")
})
 
router.get("/about", (req,res)=>{
    res.render("about")
})


router.get("/contact", (req,res)=>{
    res.render("contact")
})


router.get("/service", (req,res)=>{
    res.render("service")
})

router.get("/team", (req,res)=>{
    res.render("team")
})


module.exports = router;