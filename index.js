const mongoose = require('mongoose');

// let url="https://loclahost:8080/user"
// http-mongodb-protocol;




//mongoose asynchronous function follow- so use then(res) catch(err);

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/test');
  }

  main()
  .then(()=>{
    console.log("conncection successful");
  }).catch((err)=>{
    console.log(err);
  })


  //schema define for our table/collection-userSchema

  const userSchema=new mongoose.Schema(
    {
        name:'String',
        email:'String',
        age:'Number',
    }
  );

  const User = mongoose.model('User', userSchema);

//   const user1=new User({name:"avinash",email:"avinash234@gmail.com",age:90});
//   user1.save();

//   const user2=new User({name:"manish",email:"manish23@gmail.com",age:90});
//   user2.save()
//   .then((res)=>{
//     console.log(res);
//   }).catch((err)=>{
//     console.log(err);
//   })

// for creating new value
// User.insertMany(
//     [
        
//         {name:"ramu",email:"ramu45@gmail.com",age:90},
//         {name:"shamu",email:"shamu45@gmail.com",age:70},
//         {name:"lamu",email:"lmu45@gmail.com",age:20},
//         {name:"riumu",email:"riohmu45@gmail.com",age:40},
//     ]
// )

// .then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(err);
// })


// User.find()
// .then((res)=>{
//   console.log(res);
// })
// .catch((err)=>{
//   console.log(err)
// });




// User.findById({_id:"67130a53d08c0fe14ede8a22"})
// .then((res)=>{
//   console.log(res);
// })
// .catch((err)=>{
//   console.log(err);
// })

//for update that return value not return so we use findandupdate


// User.updateOne({name:"riumu"},{age:90})
// .then((res)=>{
//   console.log(res)
// }).catch((err)=>{
//   console.log(err);
// })


//in this its return old value that not update value

// User.findOneAndUpdate({name:"ramu"},{age:50})
// .then((res)=>{
//   console.log(res)
// })
// .catch((err)=>{
//   console.log(err);
// })

//for getting update value we have to pass option {new:true}-that actually return new value with updation

// User.findOneAndUpdate({name:"shamu"},{age:90},{new:true})
// .then((res)=>{
//   console.log(res);
// }).catch((err)=>{
//   console.log(err);
// })



//delete value


// User.deleteOne({name:"shamu"},{new:true})
// .then((res)=>{
//   console.log(res);
// })
// .catch((err)=>{
//   console.log(err);
// })


//delete many

// User.deleteMany()
// .then((res)=>{
//   console.log(res)
// })
// .catch((err)=>{
//   console.log(err);
// })



//mostly we use findByIdAndDelete  //update // findById
