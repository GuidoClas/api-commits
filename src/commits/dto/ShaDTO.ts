import { IsString, IsAlphanumeric, Length } from 'class-validator';

export class ShaDTO {
  @IsString()
  @IsAlphanumeric()
  @Length(40, 40)
  sha: string;
}