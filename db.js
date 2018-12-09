const mongoose = require('mongoose');
//const URLSlugs = require('mongoose-url-slugs'); (Not planning to use this)

// add your schemas
// use plugins (for slug)
// register your model

const User = new mongoose.Schema({
  username: {type: String, required: true},
  email: {type: String, required:true},
  history_trips: [{
  		start_station: {type: String},
  		end_station: {type: String},
  		check_out_time: {type: Date},
  		return_time: {type: Date}
  		}]
});

const Station = new mongoose.Schema({
	name:{type:String, required:true},
	lat:{type:Number, required:true},
	lng:{type:Number, required:true},
	total_dock: {type:Number, required:true},
	available_skateboards: {type:Number, required:true}
}); 

const Skateboard = new mongoose.Schema({
	in_use: {type: Boolean, default:false}
});

const Current_Trip = new mongoose.Schema({
	user_id: {type: String},
	start_station: {type: String},
	check_out_time: {type: String, required:true}
});

const Completed_Trips = new mongoose.Schema({
  	user_id: {type: mongoose.Schema.Types.ObjectId, ref:'User'},
  	start_station: {type: mongoose.Schema.Types.ObjectId, ref:'Station'},
  	end_station: {type: mongoose.Schema.Types.ObjectId, ref:'Station'},
  	check_out_time: {type: Date, required:true},
  	return_time: {type: Date, required:true}
});



module.exports = {
userModel: mongoose.model('User', User),
stationModel: mongoose.model('Station', Station),
skateboardModel: mongoose.model('Skateboard', Skateboard),
tripModel: mongoose.model('Trip', Current_Trip),
completedTripsModel:mongoose.model('Complete',Completed_Trips)
}

mongoose.connect('mongodb://localhost/eskate');