const fs = require('fs');
const Category = require('../models/category');
const Blog = require('../models/blog');
const Todo = require('../models/todo');
const weatherURL = 'https://api.open-meteo.com/v1/forecast?latitude=43.2501&longitude=-79.8496&hourly=temperature_2m,weathercode&timezone=America%2FNew_York&forecast_days=1';
const weatherIconCode = [
    {
        condition : 'clear sky',
        weathercode : [0],
        width : '1239px',
        height: '437px'
    },
    {
        condition: 'cloudy',
        weathercode: [1,2,3],
        width: '1360px',
        height: '437px'
    },
    {
        condition: 'fog',
        weathercode: [45,48],
        width: '1241px',
        height: '155px'
    },
    {
        condition: 'rain',
        weathercode: [51,53,55,61,63,65],
        width: '1241px',
        height: '296px'
    },
    {
        condition: 'freezing drizzle',
        weathercode: [56,57],
        width: '1360px',
        height: '155px'
    },
    {
        condition: 'snow',
        weathercode: [71,73,75,77],
        width: '1123px',
        height: '296px'
    },
    {
        condition: 'thunderstorm',
        weathercode: [95,96,99],
        width: '887px',
        height: '155px'
    }
]




const index_get = (req, res) => {
    const typesArr = [];
    const namesArr = [];

    fetch(weatherURL, {
        method: 'GET',
    })
    .then(response => response.json())
    .then(data => {
        let weaCode;
        let tempCode;
        let weatherNums = data['hourly'].weathercode;
        let tempNums = data['hourly'].temperature_2m;
        let now = new Date();
        let hour = now.getHours();

        // get the number
        if(hour==24){ 
            weaCode = weatherNums[hour-1];
            tempCode = tempNums[hour-1];
        }
        else{ 
            weaCode = weatherNums[hour];
            tempCode = tempNums[hour];
        };  

        // the object of that weather
        let weatherObj = weatherIconCode.find( ({weathercode}) => weathercode.includes(weaCode) );
        let bgposition = weatherObj.width+' '+weatherObj.height;

        Category.find()
        .then(result=>{
            if(result.length==0){
                const defaultCategory = new Category({
                    name: 'small animals',
                    mediaType: 'photo',
                    txtBody: 'Hope the little creatures heal you for the whole day'
                });
                defaultCategory.save()
                .then(res.redirect('/'))
                .catch(err => console.log(err));
            } 

            result.forEach(e => {
                namesArr.push(e.name);

                if(typesArr.indexOf(e.mediaType) < 0){
                    typesArr.push(e.mediaType);
                }            
            })
            
            Category.aggregate([{$sample: {size: 1}}])
            .then((response)=>{

                const selectDoc = response[0].name;

                const [fileName, fileNumber] = loopImg(selectDoc);

                Todo.find()
                .then(result => {
                    const todos = result;

                    Blog.find()
                    .then(result => {

                        res.render('index', {
                            title: 'Home', 
                            typesArr, 
                            bgposition, 
                            tempCode, 
                            blogs: result, 
                            selectDoc,
                            fileName,
                            fileNumber,
                            namesArr,
                            todos
                        })
                    
                    })
                    .catch(err => console.log(err));
                })
                .catch(err => console.log(err));
                
            })
            .catch(err => console.log(err));

            
        })
        .catch(err => console.log(err));

    })
    .catch(err => console.log(err))
}

const specific_index_get = (req, res) => {
    const tagName = req.params.tagName;
    const typesArr = [];
    const namesArr = [];

    fetch(weatherURL, {
        method: 'GET',
    })
    .then(response => response.json())
    .then(data => {
        let weaCode;
        let tempCode;
        let weatherNums = data['hourly'].weathercode;
        let tempNums = data['hourly'].temperature_2m;
        let now = new Date();
        let hour = now.getHours();

        // weather code adapted
        if(hour==24){ 
            weaCode = weatherNums[hour-1];
            tempCode = tempNums[hour-1];
        }
        else{ 
            weaCode = weatherNums[hour];
            tempCode = tempNums[hour];
        };  

        // the object of that weather
        let weatherObj = weatherIconCode.find( ({weathercode}) => weathercode.includes(weaCode) );
        let bgposition = weatherObj.width+' '+weatherObj.height;

        Category.find()
        .then(result=>{
            result.forEach(e => {
                namesArr.push(e.name);

                if(typesArr.indexOf(e.mediaType) < 0){
                    typesArr.push(e.mediaType);
                }            
            })

            // the only difference, find by tag name and regenerate based on it
            Category.findOne({name: tagName})
            .then((response)=>{
                const selectDoc = tagName;

                const [fileName, fileNumber] = loopImg(selectDoc);

                Todo.find()
                .then(result => {
                    const todos = result;

                    Blog.find()
                    .then(result => {

                        res.render('index', {
                            title: 'Home', 
                            typesArr, 
                            bgposition, 
                            tempCode, 
                            blogs: result, 
                            selectDoc,
                            fileName,
                            fileNumber,
                            namesArr,
                            todos
                        })
                    
                    })
                    .catch(err => console.log(err));
                })
                .catch(err => console.log(err));
                
            })
            .catch(err => console.log(err));

        })
        .catch(err => console.log(err));

    })
    .catch(err => console.log(err))
}

const loopImg = (name) => {
    const fileName = fs.readdirSync('./public/imgs/'+name);
    const fileNumber = fileName.length;
    return [fileName, fileNumber]
}

module.exports = {
    index_get,
    specific_index_get
    
}