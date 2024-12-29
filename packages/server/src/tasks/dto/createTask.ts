import { descriptionValidator, nameValidator } from './decorators/decorators';
import { taskProps } from './task.interface';

export class CreateTaskDto
  implements Omit<taskProps, 'id' | 'createdAt' | 'status'>
{
  @nameValidator()
  name: string;

  @descriptionValidator()
  description?: string = '';
}
