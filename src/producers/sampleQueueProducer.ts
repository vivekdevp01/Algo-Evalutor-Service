// import SampleQueue from "../queues/sampleQueue";
import SampleQueue from "../queues/sampleQueue";

export default async function(name: string,payload:Record<string,unknown>, priority: number){
       await SampleQueue.add(name,payload,{priority});
       // console.log("added");
}

