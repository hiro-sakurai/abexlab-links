const cors = require('cors');

module.exports = (req, res) => {
  // CORS sozlamalari
  res.setHeader('Access-Control-Allow-Origin', '*'); // Bu * o'rniga faqat kerakli domenni kiritishingiz mumkin
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  res.status(200).json({ 
    link1: "https://abexlab.uz",
    link2: "https://abex.uz",
    link3: "https://t.me/Sakurai_Hiro"
  });
};
