// let s:string="hello"
import express from "express";
import serverConfig from "./config/serverConfig";
import apiRouter from "./routes";
import sampleQueueProducer from "./producers/sampleQueueProducer";
import SampleWorker from "./workers/sampleWorker";
const app = express();


app.use('/api',apiRouter);
app.listen(serverConfig.PORT,()=>{
    console.log(`listening ${serverConfig.PORT}`);
SampleWorker('SampleQueue');
    sampleQueueProducer('SampleJob',{
      name:"vivsek",
      company:"google",
      position:"sde3",
      location:"blr"  
    },2);
    sampleQueueProducer('SampleJob',{
        name:"vivek",
        company:"ama",
        position:"sde3",
        location:"blr"  
      },1);
      sampleQueueProducer('SampleJob',{
        name:"rok",
        company:"amaz",
        position:"sde3",
        location:"blr"  
      },1);
})