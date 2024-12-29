import { IsOptional } from 'class-validator';
import {
  dateValidator,
  descriptionValidator,
  nameValidator,
  statusValidator,
} from './decorators/decorators';
import { taskProps } from './task.interface';

export class UpdateTaskDto implements Partial<taskProps> {
  @IsOptional()
  @nameValidator(0)
  name?: string;

  @descriptionValidator()
  description?: string;

  @dateValidator()
  finishedAt?: Date;

  @statusValidator()
  status?: boolean;
}
