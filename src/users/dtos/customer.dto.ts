import {
  IsString,
  IsNotEmpty,
  IsPhoneNumber,
  IsArray,
  ValidateNested,
} from 'class-validator';
import { PartialType } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { CreateSkillDto } from './skill.dto';

export class CreateCustomerDto {
  @IsString()
  @IsNotEmpty()
  readonly name: string;

  @IsString()
  @IsNotEmpty()
  readonly lastName: string;

  @IsPhoneNumber()
  @IsNotEmpty()
  readonly phone: string;

  @IsNotEmpty()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateSkillDto)
  readonly skills: CreateSkillDto[];
}

export class UpdateCustomerDto extends PartialType(CreateCustomerDto) {}
