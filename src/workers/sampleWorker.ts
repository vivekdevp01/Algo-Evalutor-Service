import { Job,Worker } from "bullmq";

// import { IJob } from "../types/bullMqJob";
import redisConnection from "../config/redisConfig";
// import { WorkerResponse } from "../types/bullMqWorkerResponse";
import SampleJob from "../jobs/SampleJob";

export default function SampleWorker(queueName:string){
    // console.log("setup",redisConnection);
    new Worker(
        queueName,
        async(job:Job)=>{
            if(job.name==="SampleJob"){
            const sampleJobInstance = new SampleJob(job.data);    

            sampleJobInstance.handle(job);

            return true;
            }
        },{
           connection: redisConnection 
        }
    );
} 