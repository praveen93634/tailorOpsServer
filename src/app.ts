import express from 'express';
import connectDB from './config/database';
import route from './routes/index';
import cors from 'cors'
// import getTenantModel from './config/dbAdmin'
import { getTenentModel } from './config/dbAdmin';
import { getCustomerModel } from './utils/tenantconnection';
import {response} from './helper/commenrespons'
const app = express();

// Middleware
app.use(express.json());

// Test route
app.get('/', (req, res) => {
    res.send('Welcome to the server!');
});
app.use(cors({
    origin:process.env.FrontEnd_BaseUrl,
    Credential:true
}))
app.use('/', route);
app.post('/tenant', async (req, res) => {
   try{
     let {tenantId,name} = req.body;
    let tenantModel = await getTenentModel();
    let tenant = new tenantModel({ id: tenantId, name: name });
     if (!tenant) {
            return response(req,res,"",404,"Not Found") 
        }
    let doc = await tenantModel.findOneAndUpdate({ id: tenantId }, { id: tenantId, name: name });
    if (!doc) {
    tenant = new tenantModel({ id: tenantId, name: name });
      await tenant.save(); 
    }
   return response(req,req,tenant,200,"SuccessFully Created")
   }
   catch(error:any){
    response(req,res,error,500,error.message)
   }
})
app.post('/customer', async (req, res) => {
    try{
    let tenantId = req.body.tenantId;
    let customerName = req.body.customer;
    let tenantModel = await getTenentModel();
    let tenant = await tenantModel.findOne({ id: tenantId })
    if (!tenant) {
        response(req,res,"",404,"Not Found") 
    }
    let customerModel = await getCustomerModel(tenantId);
    let customer = new customerModel({ customerName });
    let doc = await customerModel.findOneAndUpdate({ customerName }, { customerName });
    if (!doc) {
        customer = new customerModel({customerName});
      await customer.save(); 
    }
    response(req,res,customer,200,"SuccessFully Created")
    }
    catch(err:any){
        response(req,res,err,500,err.message)
    }
})

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
});
