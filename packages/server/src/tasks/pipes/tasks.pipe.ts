import {
  ArgumentMetadata,
  HttpException,
  HttpStatus,
  Injectable,
  PipeTransform,
} from '@nestjs/common';

@Injectable()
export class TasksPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    const { type } = metadata;

    if (type !== 'param')
      throw new HttpException(
        'Only accepting HTTP Param for this route',
        HttpStatus.BAD_REQUEST,
      );

    const taskID = parseInt(value?.id);
    if (taskID == null && isNaN(taskID))
      throw new HttpException(
        'the query ID must be a number',
        HttpStatus.BAD_REQUEST,
      );

    return taskID;
  }
}
