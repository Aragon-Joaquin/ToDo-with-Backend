import { IsString, MaxLength, MinLength } from 'class-validator';
import { taskProps } from './task.interface';

export class CreateTaskDto
  implements Omit<taskProps, 'id' | 'createdAt' | 'status'>
{
  @IsString()
  @MinLength(5)
  @MaxLength(30)
  name: string;

  @MaxLength(100)
  description?: string = '';
}
