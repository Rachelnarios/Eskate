const express = require('express');
const path = require('path');
const session = require("express-session");
const bodyParser = require('body-parser');
const db = require("./db.js");
const PORT = process.env.PORT || 3000;
const app = express()
.use(express.static(path.join(__dirname, 'public')))
.use(bodyParser.urlencoded({ extended: false }))
.use(session({
    secret: 'secret',
    resave: false,
    saveUninitialized: true,
}))
.set('views', path.join(__dirname, 'views'))
.set('view engine', 'hbs');



//---------------Requests that serve up HTML-----------------------------------
app.get('/', (req, res) => res.sendFile("/index.html"))
app.get('/station', (req, res) => res.render('station'))
app.get('/land', (req, res) => res.render('land'))
app.get('/usertrips', (req, res) => res.render('usertrips'))


//---------------Requests that alter the state of the database-----------------

//Listen for requests to register a new user to the DB
app.post('/register',(req,res)=>{
    db.userModel.find({username:req.body.username},(err,data)=>{
        if (err){
            console.log(err);
        }else if(data[0]){
            //Here it would serve up an error page that says this username exists already
            console.log("Username already exists");
        }else{
            const newUser = new db.userModel({
                username: req.body.username,
                email: req.body.email,
                history_trips: []
            });
            newUser.save((err)=>{
                if (err){
                    console.log(err);
                }else{
                    req.session.regenerate((err)=>{
                        req.session.user = req.body.username;
                        req.session.isAuth = true;
                        res.redirect("/");
                    })
                }
            })
        }
    })
})

//Function that listens for log in requests
app.post("/login",(req,res)=>{
    db.userModel.find({username:req.body.username},(err,data)=>{
        if (err){
            console.log(err);
        }else if(!data[0]){
            //Here it would serve up an error page that says we could not find your username
            console.log("Sorry we could not find your username");
        }else{
            req.session.regenerate((err)=>{
                req.session.user = req.body.username;
                req.session.isAuth = true;
                res.redirect("/");
        })};
    });
    });

 //Enter in station name with the request and it will return all data about that station
    app.post("/stationcheck",(req,res)=>{
        db.stationModel.find({name:req.body.name},(err,data)=>{
            if (err){
                console.log(err);
            }else if(!data[0]){
                res.send(data[0]);
            }else{
                //Station not found
                console.log("Station with name "+req.body.name+" not found");
                res.send("Station with name "+req.body.name+" not found");
            }
        })
    })


    app.post("/takeboard",(req,res)=>{
        db.stationModel.findOneAndUpdate({name:req.body.stationName},{ $inc: {available_skateboards: -1} },(err,data)=>{
            if (err){
                console.log(err);
            }else if(!data){
                //Station not found
                console.log("Station with name "+req.body.name+" not found");
                res.send("Station with name "+req.body.name+" not found");
            }
            else{
                if(data.available_skateboards>0){
                db.tripModel.find({user_id:req.session.username},(err,data)=>{
                    if (err){
                        console.log(err);
                    }else if(data[0]){
                        //User alrady has a board checked out
                        res.send("You alread have a current trip going!");
                    }else{
                        const newTrip = new db.tripModel({
                            user_id: req.session.user,
	                       // board_id: {type: mongoose.Schema.Types.ObjectId, ref:'Skateboard'},
	                        start_station: req.body.stationName,
	                        check_out_time: req.body.checkoutTime
                        }).save();
                    }
                });
            }
        }
        })
    })
    //Return a board
    app.post("/returnboard",(err,data)=>{
        db.tripModel.findOneAndDelete({user_id:req.session.username},(err,data)=>{
            if (err){
                console.log(err);
            }else if(data[0]){
                //User doesn't have any current trips
                res.send("You don't have any boards to return");
            }else{
                const user = data[0].user_id;
                const start = data[0].start_station;
                const checkout = data[0].check_out_time;
                const completedTrip = new db.completedTripsModel({
                    user_id: user,
                   // board_id: {type: mongoose.Schema.Types.ObjectId, ref:'Skateboard'},
                    start_station: start,
                    end_station: req.body.stationName,
                    check_out_time: checkout,
                    return_time: req.body.time
                })
            }
        });
    })

app.listen(PORT, () => console.log(`Listening on ${ PORT }`))
