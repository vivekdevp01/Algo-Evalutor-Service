import {Request, Response} from 'express';
import { CreateSubmissionDto } from '../dtos/createSubmissionDtos';

export function addSubmission(req: Request, res: Response){
    const submissionDto=req.body as CreateSubmissionDto;
console.log(submissionDto);

    //TODO: Perform validation and save the submission to the database or storage service
    return res.status(200).json({
        success:true,
        error:{},
        message:"Successfully collected submission",
        data:submissionDto
    });
}