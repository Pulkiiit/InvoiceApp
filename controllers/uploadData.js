const papa = require('papaparse');
const fs = require('fs'); 
const Bill = require('../models/billing');
const ejs = require('ejs');
const path = require('path');

const fillData = async (req,res) => {
    console.log(req.file);
    // capture data and parse it
    const file = fs.createReadStream(req.file.path);
    papa.parse(file, {
        delimiter: ',',
        complete: async (result) => {
            const data = result.data;
            // console.log(data);
            // query data anmd store it in mongo
            // filter out data to add
            const idList = new Set();
            const nameList = new Set();
            const dateList = new Set();
            const itemList = [];
            data.forEach((element, index) => {
                if (index !== 0) {
                    idList.add(element[0]);
                    nameList.add(element[1]);
                    dateList.add(element[2]);
                };
            });
            // console.log(idList);
            // console.log(nameList);
            // console.log(dateList);
            var s = [];
            for (const i of idList) {
                const temp = (data.filter((e) => e[0] === i));
                s.push(temp);
            }
            //delete file
            fs.unlink(`${req.file.path}`, (err) => {
                if (err) console.log(err);
            });
            for (let i = 0; i < s.length; i++){
                const tempArray = [];
                for (let j = 0; j < s[i].length; j++) {
                    const temp = {};
                    temp.name = s[i][j][3];
                    temp.quantity = s[i][j][4];
                    temp.price = s[i][j][5];
                    tempArray.push(temp);
                }
                //console.log(tempArray);
                itemList.push(tempArray);
            }
            console.log(itemList);
            // console.log(nameList);
            //now adding enteries
            const idArr = Array.from(idList);
            const nameArr = Array.from(nameList);
            const dateArr = Array.from(dateList);
            // console.log(idArr);
            for (let i = 0; i < idArr.length; i++){
                const a = await Bill.create({
                    customername: nameArr[i],
                    orderid: idArr[i],
                    orderdate: dateArr[i],
                    items : itemList[i]
                });
            }
            const totalArr = [];
            for (let i = 0; i < idArr.length; i++){
                let amount = 0;
                itemList[i].forEach((e) => {
                    let price = Number(e.price);
                        // Math.round(Number(e.price));
                    amount += price;
                });
                totalArr[i] = amount.toFixed(2);
            }
            res.render(path.join(__dirname,'..','views','index.ejs'),{name : nameArr,order : idArr ,price : totalArr});
        }
    });
}

module.exports = { fillData };