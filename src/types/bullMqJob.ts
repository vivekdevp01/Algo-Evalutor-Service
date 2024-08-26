import { Job } from "bullmq";

export interface IJob{
    name:string,
    payLoad?: Record<string,unknown>,
    handle:(job?:Job) => void,
    failed:(job?:Job) => void


}