import { IJob } from "../types/bullMqJob";
import { Job } from "bullmq";

export default class SampleJob implements IJob{
    name: string;
    payLoad: Record<string, unknown>;
    constructor(payload:Record<string,unknown>){
        this.payLoad=payload;
           this.name=this.constructor.name;
    }

    handle=(job?:Job)=>{
        console.log('Handler of the job called');
        console.log(this.payLoad);
        if(job){
           console.log(job.name,job.id,job.data) ;
        }
    };

    failed=(job?: Job):void =>{
        console.log('Failed handler of the job called');
        if(job){
            console.log(job.id);
        }
    }
}