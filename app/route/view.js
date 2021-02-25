const router = require('express').Router();
const fetch = require('node-fetch');


router.get('/', async (req, res) => {
    const city = "jakarta";
    const url_api = `http://localhost:3000/articles/1`;
  
    try {
      await fetch(url_api,{
        method: 'get',
        headers: {'Content-Type': 'application/json','access_token': '8eb1004a63984139c3552c6d0491828f'}
    }).then(res => res.json())
        .then(data => {
            // console.log(data);
          if (data.message === 'city not found') {
              
            res.render('index', {
              city: data.id,
              des: null,
              icon: null,
              temp: null
            })
          } else {
            console.log(data.data);
            const city = data.data.id;
            const des = data.data.title;
            const icon = "data.body";
            const temp = data.data.author_id;
  
            res.render('index', {
              city, des, icon, temp
            });
          }
        });
  
    } catch (err) {
        console.log(err);
      res.render('index', {
        city: 'something wrong',
        des: null,
        icon: null,
        temp: null
      })
    }
  
  })

module.exports = router;
