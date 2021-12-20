const path = require('path');
const router = require('express').Router();

router.get('/contact', (req, res)=>{
  res.sendFile(path.join(__dirname, "../public/contact.html"));
})

router.get("*", (req, res)=>{
  res.sendFile(path.join(__dirname, "../public/index.html"));
});
// router.get('/', (req, res) => {
//   res.sendFile(path.join(__dirname, "../public/occult.html"))
// });

// router.get('/occult', (req, res) => {
//   res.sendFile(path.join(__dirname, "../public/occult.html"))
// });
module.exports = router;