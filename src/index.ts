// let s:string="hello"
import express from "express";
import bodyParser from "body-parser";
import serverConfig from "./config/serverConfig";
import apiRouter from "./routes";
// import sampleQueueProducer from "./producers/sampleQueueProducer";
import SampleWorker from "./workers/sampleWorker";

const { Queue } = require('bullmq');
const { createBullBoard } = require('@bull-board/api');
const { BullAdapter } = require('@bull-board/api/bullAdapter');
// const { BullMQAdapter } = require('@bull-board/api/bullMQAdapter');
const { ExpressAdapter } = require('@bull-board/express');

const sampleQueue = new Queue('SampleQueue', {
  redis: { port: serverConfig.REDIS_PORT, host: serverConfig.REDIS_HOST, password: serverConfig.REDIS_PASSWORD },
}); // if you have a special connection to redis.
// const someOtherQueue = new Queue('someOtherQueueName');
// const queueMQ = new Queue('queueMQName');

const serverAdapter = new ExpressAdapter();
serverAdapter.setBasePath('/admin/queues');

createBullBoard({
  queues: [new BullAdapter(sampleQueue)],
  serverAdapter: serverAdapter,
});

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(bodyParser.text());

app.use('/admin/queues', serverAdapter.getRouter());


app.use('/api',apiRouter);
app.listen(serverConfig.PORT,()=>{
    console.log(`listening ${serverConfig.PORT}`);
SampleWorker('SampleQueue');
console.log(`all queues are stored in https://localhost:${serverConfig.PORT}/admin/queues`);
    // sampleQueueProducer('SampleJob',{
    //   name:"vivsek",
    //   company:"google",
    //   position:"sde3",
    //   location:"blr"  
    // },2);
})