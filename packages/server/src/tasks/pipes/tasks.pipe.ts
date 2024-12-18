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
    if (type !== 'query')
      throw new HttpException(
        'Only accepting HTTP Queries for this route',
        HttpStatus.BAD_REQUEST,
      );

    const taskID = parseInt(value['id']);
    if (value['id'] && isNaN(taskID))
      throw new HttpException(
        'the query ID must be a number',
        HttpStatus.BAD_REQUEST,
      );

    return { ...value, id: taskID };
  }
}
