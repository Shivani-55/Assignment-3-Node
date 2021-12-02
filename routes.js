const express =  require("express");
const router = express.Router();
const isAdmin = true;

router.get("/products" , (req,res,next)=>{
    if(isAdmin==true){
        next();
    }else{
        res.status(403).json({"message": "You are Unauthorized"})
    }
},
    (req,res) =>{
        res.json([	
            {
                "imgUrl": "https://guesseu.scene7.com/is/image/GuessEU/M63H24W7JF0-L302-ALTGHOST?wid=1500&fmt=jpeg&qlt=80&op_sharpen=0&op_usm=1.0,1.0,5,0&iccEmbed=0",
                "name": "CHECK PRINT SHIRT",
                "price": 110
            },
            {
                "imgUrl": "https://guesseu.scene7.com/is/image/GuessEU/FLGLO4FAL12-BEIBR?wid=700&amp;fmt=jpeg&amp;qlt=80&amp;op_sharpen=0&amp;op_usm=1.0,1.0,5,0&amp;iccEmbed=0",
                "name": "GLORIA HIGH LOGO SNEAKER",
                "price": 91
            },
            {
                "imgUrl": "https://guesseu.scene7.com/is/image/GuessEU/HWVG6216060-TAN?wid=700&amp;fmt=jpeg&amp;qlt=80&amp;op_sharpen=0&amp;op_usm=1.0,1.0,5,0&amp;iccEmbed=0",
                "name": "CATE RIGID BAG",
                "price": 94.5
            },
            {
                "imgUrl": "http://guesseu.scene7.com/is/image/GuessEU/WC0001FMSWC-G5?wid=520&fmt=jpeg&qlt=80&op_sharpen=0&op_usm=1.0,1.0,5,0&iccEmbed=0",
                "name": "GUESS CONNECT WATCH",
                "price": 438.9
            },
            {
                "imgUrl": "https://guesseu.scene7.com/is/image/GuessEU/AW6308VIS03-SAP?wid=700&amp;fmt=jpeg&amp;qlt=80&amp;op_sharpen=0&amp;op_usm=1.0,1.0,5,0&amp;iccEmbed=0",
                "name": "'70s RETRO GLAM KEFIAH",
                "price": 20
            }
        
            ]);
});
  

router.get("/users" , (req,res,next)=>{
    if(isAdmin==true){
        next();
    }else{
        res.status(403).json({"message": "You are Unauthorized"})
    }
},
    (req,res) =>{
        res.json([
            {
                "id": 1,
                "name": "Leanne Graham",
                "username": "Bret",
                "email": "Sincere@april.biz",
                "address": {
                  "street": "Kulas Light",
                  "suite": "Apt. 556",
                  "city": "Gwenborough",
                  "zipcode": "92998-3874",
                  "geo": {
                    "lat": "-37.3159",
                    "lng": "81.1496"
                  }
                },
                "phone": "1-770-736-8031 x56442",
                "website": "hildegard.org",
                "company": {
                  "name": "Romaguera-Crona",
                  "catchPhrase": "Multi-layered client-server neural-net",
                  "bs": "harness real-time e-markets"
                }
              },
              {
                "id": 2,
                "name": "Ervin Howell",
                "username": "Antonette",
                "email": "Shanna@melissa.tv",
                "address": {
                  "street": "Victor Plains",
                  "suite": "Suite 879",
                  "city": "Wisokyburgh",
                  "zipcode": "90566-7771",
                  "geo": {
                    "lat": "-43.9509",
                    "lng": "-34.4618"
                  }
                },
                "phone": "010-692-6593 x09125",
                "website": "anastasia.net",
                "company": {
                  "name": "Deckow-Crist",
                  "catchPhrase": "Proactive didactic contingency",
                  "bs": "synergize scalable supply-chains"
                }
              },
              {
                "id": 3,
                "name": "Clementine Bauch",
                "username": "Samantha",
                "email": "Nathan@yesenia.net",
                "address": {
                  "street": "Douglas Extension",
                  "suite": "Suite 847",
                  "city": "McKenziehaven",
                  "zipcode": "59590-4157",
                  "geo": {
                    "lat": "-68.6102",
                    "lng": "-47.0653"
                  }
                },
                "phone": "1-463-123-4447",
                "website": "ramiro.info",
                "company": {
                  "name": "Romaguera-Jacobson",
                  "catchPhrase": "Face to face bifurcated interface",
                  "bs": "e-enable strategic applications"
                }
              },
              {
                "id": 4,
                "name": "Patricia Lebsack",
                "username": "Karianne",
                "email": "Julianne.OConner@kory.org",
                "address": {
                  "street": "Hoeger Mall",
                  "suite": "Apt. 692",
                  "city": "South Elvis",
                  "zipcode": "53919-4257",
                  "geo": {
                    "lat": "29.4572",
                    "lng": "-164.2990"
                  }
                },
                "phone": "493-170-9623 x156",
                "website": "kale.biz",
                "company": {
                  "name": "Robel-Corkery",
                  "catchPhrase": "Multi-tiered zero tolerance productivity",
                  "bs": "transition cutting-edge web services"
                }
              }
        ])
            
});
    


module.exports = router 