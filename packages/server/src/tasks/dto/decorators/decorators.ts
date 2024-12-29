import { Transform } from 'class-transformer';
import {
  IsBoolean,
  IsDate,
  IsOptional,
  IsString,
  MaxLength,
  MinDate,
  MinLength,
} from 'class-validator';
import { applyDecorators } from '@nestjs/common';

export const nameValidator = (min: number = 5, max: number = 30) => {
  return applyDecorators(
    IsString(),
    Transform(({ value }: { value: string }) => value.trim()),
    MinLength(min),
    MaxLength(max),
  );
};

export const descriptionValidator = (max: number = 100) => {
  return applyDecorators(
    IsOptional(),
    Transform(({ value }: { value: string }) => value?.trim()),
    MaxLength(max),
  );
};

export const dateValidator = () => {
  return applyDecorators(
    IsOptional(),
    Transform(({ value }) => new Date(value)),
    IsDate(),
    MinDate(new Date('2020-01-01')), //YY-MM-DD
  );
};

export const statusValidator = () => {
  return applyDecorators(IsOptional(), IsBoolean());
};
