const mongoose=require('mongoose')

mongoose.connect('mongodb://localhost:27017/wce_alumni',
{useCreateIndex:true ,useNewUrlParser:true,useUnifiedTopology: true })


// mongodb+srv://vaishnavi:vaishnavi@cluster0.c9rxb.mongodb.net/Alumni_management_system?retryWrites=true&w=majority
