//********************************* Connection Requirements (Postman and MongoDb) ************************************* */
const express = require("express");
const cors = require('cors');
const app = express();
app.use(express.json());
app.use(cors());

require("dotenv").config();
const port = process.env.port || 10000;

app.listen(port,()=>{
  console.log(`Server listening at http://localhost:${port}`);
})

// mongodb+srv://deepanshidey03:ZmYkKdDeo6YDiJDt@cluster0.kwz2v2j.mongodb.net/ReThread
const mongoose = require("mongoose");
const uri = "mongodb+srv://deepanshidey03:ZmYkKdDeo6YDiJDt@cluster0.kwz2v2j.mongodb.net/ReThread";
mongoose
  .connect(uri)
  .then(() => console.log("MongoDB connected…"))
  .catch((err) => console.log(err));

//************************************ Defining Schema ************************************/

//********************* Product Schema *****************/
const Schema1 = mongoose.Schema;
const ProductSchema = new Schema1({
  product_name:{
    type:String,
    required:true,
    trim:true,
    minlength:3
  },
  category:{
    type:String,
    required:true,
    trim:true,
    minlength:3
  },
  sub_cat:{
    type:String,
    required:true,
    trim:true,
    minlength:3
  },
  size:{
    type:String,
    required:true,
    trim:true,
  },
  color:{
    type:String,
    required:true,
    trim:true,
  },
  material:{
    type:String,
    required:true,
    trim:true
  },
  brand:{
    type:String,
    trim:true
  },
  price:{
    type:Number,
    required:true,
    trim:true
  }
});

//********************* User Deatils Schema *****************/
const Schema2 = mongoose.Schema;
const UserSchema = new Schema2({
  user_name:{
    type:String,
    required:true,
    trim:true,
    minlength:3
  },
  email:{
    type:String,
    unique:true,
    required:true,
    match: [/.+\@.+\..+/, "Please fill a valid email address"]
  },
  contact:{
    type:Number,
    required:true,
    trim:true,
    minlength:10
  },
  address:{
    type:String,
    required:true,
    trim:true,
    minlength:3
  },
  earning:{
    type:Number,
    default:0,
  },
  cart:{
    type:[String],
    default:[]
  },
  orders:{
    type:[String],
    default:[]
  }
})

//************************ Resell Request Schema **********************/
const Schema3 = mongoose.Schema;
const ResellSchema = new Schema3({
  user_name:{
    type:String,
    required:true,
    trim:true,
    minlength:3
  },
  product_name:{
    type:String,
    required:true,
    trim:true,
    minlength:3
  },
  description:{
    type:String,
    required:true,
    trim:true,
    minlength:3
  },
  size:{
    type:String,
    required:true,
    trim:true,
  },
  color:{
    type:String,
    required:true,
    trim:true,
  },
  img_front:{
    type:String,
    // required:true
  },
  img_back:{
    type:String,
    // required:true
  },
  condition:{
    type:String,
    required:true,
    trim:true,
    minlength:3
  },
  reason:{
    type:String,
    required:true,
    trim:true,
  },
  material:{
    type:String,
    required:true,
    trim:true
  },
  brand:{
    type:String,
    trim:true
  },
  shipping_method:{
    type:String,
    required:true,
    trim:true,
  },
  mrp:{
    type:Number,
    required:true,
    trim:true
  },
  resell_price:{
    type:Number,
    required:true,
    trim:true
  }
})

//******************************** Collection Creation ******************************/
const Products = mongoose.model("products", ProductSchema);
const Users = mongoose.model("users", UserSchema);
const Resell = mongoose.model("resell", ResellSchema);

//*****************************  Sample document entries ****************************/
// const product1 = new Products({
//   product_name: "Long Trench Coat",
//   category:"women",
//   sub_cat:"coats",
//   size: "M",
//   color: "Grey",
//   material:"Wool",
//   brand:"Athena",
//   price: 450
// });

// const user1 = new Users({
//   user_name: "user1",
//   email: "user1@example.com",
//   contact:9395208190,
//   address:"Guwahati",
//   earning:0,
//   cart:[],
//   orders:[]
// });

// const user2 = new Users({
//   user_name: "user2",
//   email: "user2@example.com",
//   contact:9345208198,
//   address:"Delhi",
//   earning:120,
//   cart:["Running Shoes","Heeled Boots"],
//   orders:[]
// });

// const resell1 = new Resell({
//   user_name: "user2",
//   product_name:"Printed T-Shirt",
//   description:"Tshirt with stunning Planet Prints",
//   size:"S",
//   color:"Blue",
//   condition:"Excellent",
//   reason:"Didn't fit",
//   material:"Cotton",
//   brand:"Kinsey",
//   shipping_method:"Local Delivery",
//   mrp:500,
//   resell_price:250
// });

// const resell2 = new Resell({
//   user_name: "user1",
//   product_name:"Formal Blazer",
//   description:"Slim Fit Black Formal Blazer",
//   size:"M",
//   color:"Black",
//   condition:"Excellent",
//   reason:"Didn't use much",
//   material:"Polyester",
//   brand:"Mast & Harbour",
//   shipping_method:"Speed Post",
//   mrp:700,
//   resell_price:340
// });

// ************************* Add sample documents to the database ***************************
// const addDocsToDB = async () => {
//   try {
//     await product1.save();
//     console.log("Product 1 added successfully!");

//     await user1.save();
//     console.log("User 1 added successfully!");
//     await user2.save();
//     console.log("User 2 added successfully!");

//     await resell1.save();
//     console.log("Resell Product 1 added successfully!");
//     await resell2.save();
//     console.log("Resell Product 2 added successfully!");

//   } catch (error) {
//     console.error("Error adding users:", error);
//   }
// };
// addDocsToDB();

// ***********************************List of Possible Routes*********************************
//***************************************** GET *******************************************
//Route for Home Page
app.get("/home",(req,res)=>{
  res.send("This is the Home Page")
})

//Route for SignUp Page
app.get("/sign-up",(req,res)=>{
  res.send("This is the Sign Up Page")
})

//Route for Login Page
app.get("/login",(req,res)=>{
  res.send("This is the Login Page")
})

//Route for Selling Page
app.get("/selling",(req,res)=>{
  res.send("This is the Selling Page")
})

//Route for Selling Form Page
app.get("/selling/product-form",(req,res)=>{
  res.send("This is the Selling Form Page")
})

// Route for all Products Page
app.get("/all-products",async(req,res)=>{
try {
  const doc = await Products.find();
  res.json(doc);
} catch (error) {
  res.status(500).send(error);
}
});

// Route to view all users
app.get("/all-users",async(req,res)=>{
  try {
    const doc = await Users.find();
    res.json(doc);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Route for all Reselling submissions Page
app.get("/resell-storage",async(req,res)=>{
  try {
    const doc = await Resell.find();
    res.json(doc);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Route to view to perticular user by Id
app.get("/user-by-id/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const doc = await Users.findById(id);
    if (doc) {
      res.json(doc);
    } else {
      res.status(404).send('User not found');
    }
  } catch (error) {
    res.status(500).send(error);
  }
});

// Route to view to perticular user by Contact
app.get("/user-by-contact/:contact", async (req, res) => {
  try {
    const contact = req.params.contact;
    const user = await Users.findOne({contact: contact});
    if (user) {
      res.json(user);
    } else {
      res.status(404).send('User not found');
    }
  } catch (error) {
    res.status(500).send(error);
  }
});

// Route for category's products
app.get("/:category/products", async (req, res) => {
  try {
    const category = req.params.category;
    const products = await Products.find({category: category});
    if (products.length > 0) {
      res.json(products);
    } else {
      res.status(404).send('No products found for this category');
    }
  } catch (error) {
    res.status(500).send(error);
  }
});

// Route for category's subcategories products
app.get("/:category/:subcat/products", async (req, res) => {
  const category = req.params.category;
  const subcat = req.params.subcat;
  try {
    const products = await Products.find({category: category, sub_cat: subcat});
    if (products.length > 0) {
      res.json(products);
    } else {
      res.status(404).send("No products found for this sub-category");
    }
  } catch (error) {
    res.status(500).send(error);
  }
});

// Route for subcategory's specific products
app.get("/:category/:subcat/products/:id", async (req, res) => {
  const category = req.params.category;
  const subcat = req.params.subcat;
  const id = req.params.id;
  try {
    const product = await Products.findOne({category: category, sub_cat: subcat, _id: id});
    if (product) {
      res.json(product);
    } else {
      res.status(404).send("No such Product found");
    }
  } catch (error) {
    res.status(500).send(error);
  }
});


// Route for user's profile
app.get("/user-profile/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const user = await Users.findById(id);
    if (user) {
      res.json(user);
    } else {
      res.status(404).send('User not found');
    }
  } catch (error) {
    res.status(500).send(error);
  }
});

// Route for user's earning
app.get("/user-earning/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const user = await Users.findById(id);
    if (user) {
      res.json({earning: user.earning});
    } else {
      res.status(404).send('User not found');
    }
  } catch (error) {
    res.status(500).send(error);
  }
});

// Route for user's shopping cart
app.get("/user-cart/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const user = await Users.findById(id);
    if (user) {
      res.json({cart: user.cart});
    } else {
      res.status(404).send('User not found');
    }
  } catch (error) {
    res.status(500).send(error);
  }
});

// Route for user's order history
app.get("/user-orders/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const user = await Users.findById(id);
    if (user) {
      res.json({orders: user.orders});
    } else {
      res.status(404).send('User not found');
    }
  } catch (error) {
    res.status(500).send(error);
  }
});

// Route for user's payment
app.get("/user-payment/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const user = await Users.findById(id);
    if (user) {
      res.json({payment: user.payment});
    } else {
      res.status(404).send('User not found');
    }
  } catch (error) {
    res.status(500).send(error);
  }
});


// Route for subcategory's product filter
app.get("/:category/:subcat/filter-products", async (req, res) => {
  const category = req.params.category;
  const subcat = req.params.subcat;
  const color = req.query.color;
  const size = req.query.size;
  const gender = req.query.gender;
  const price = req.query.price;
  try {
    let query = {category: category, subcategory: subcat};
    if (color) query.color = color;
    if (size) query.size = size;
    if (gender) query.gender = gender;
    if (price) query.price = {$lte: price};
    const products = await Products.find(query);
    if (products.length > 0) {
      res.json(products);
    } else {
      res.status(404).send("No products found for this sub-category");
    }
  } catch (error) {
    res.status(500).send(error);
  }
});


//************************************ POST ************************************

app.post("/:category/:subcat/add-product", async (req, res) => {
  const category = req.params.category;
  const subcat = req.params.subcat;
  const newProduct = new Products({ ...req.body, category: category, sub_cat: subcat });
  try {
    await newProduct.save();
    res.send("Product added");
  } catch (error) {
    res.status(500).send(error);
  }
});

// Add selling from
app.post("/user-selling-form", async (req, res) => {
  const newForm = new Resell(req.body);
  try {
    await newForm.save();
    res.send('Form submitted successfully');
  } catch (error) {
    res.status(500).send(error);
  }
});

// Add new user
app.post("/new-user", async (req, res) => {
  const newUser = new Users({ ...req.body});
  const id = newUser._id;
  try {
    await newUser.save();
    res.send(`${req.body.user_name} added and id is ${id}`);
  } catch (error) {
    res.status(500).send(error);
  }
});

//********************************** PUT ***************************************

// Updating details of a product
app.put("/:category/:subcat/product-update/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const updatedProduct = await Products.findByIdAndUpdate(id, req.body, { new: true });
    if (updatedProduct) {
      res.send(`${updatedProduct.product_name} updated`);
    } else {
      res.status(404).send("Product not found");
    }
  } catch (error) {
    res.status(500).send(error);
  }
});

//********************************** PATCH ******************************************

// Updating a particular detail of a product
app.patch("/:category/:subcat/partial-product-update/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const updatedProduct = await Products.findByIdAndUpdate(id, req.body, { new: true });
    if (updatedProduct) {
      res.send("Product partially updated");
    } else {
      res.status(404).send("No such product found");
    }
  } catch (error) {
    res.status(500).send(error);
  }
});

// Updating a particular detail of a user
app.patch("/user-details-update/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const updatedUser = await Users.findByIdAndUpdate(id, req.body, { new: true });
    if (updatedUser) {
      res.send("User Details updated");
    } else {
      res.status(404).send("No such user found");
    }
  } catch (error) {
    res.status(500).send(error);
  }
});

//********************************** DELETE ******************************************

// Deleting a Product
app.delete("/:category/:subcat/delete-product/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const deletedProduct = await Products.findByIdAndDelete(id);
    if (deletedProduct) {
      res.send(`Product ${deletedProduct.product_name} deleted`);
    } else {
      res.status(404).send("No such product found");
    }
  } catch (error) {
    res.status(500).send(error);
  }
});

// Deleting a user
app.delete("/delete-user/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const deletedUser = await Users.findByIdAndDelete(id);
    if (deletedUser) {
      res.send(`User ${deletedUser.user_name} deleted`);
    } else {
      res.status(404).send("No such user found");
    }
  } catch (error) {
    res.status(500).send(error);
  }
});

//************************************************************************************
app.get("/*", (req, res) => {
  res.send("You are on the wrong route. Here's the list of possible routes");
});
