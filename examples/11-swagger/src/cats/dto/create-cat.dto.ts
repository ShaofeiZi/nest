import { IsString, IsInt } from 'class-validator';
import { ApiModelProperty } from '@nestjs/swagger';

export class CreateCatDto {
  @ApiModelProperty({ type: String, description:'姓名',required:false})
  @IsString()
  readonly name;

  @ApiModelProperty({ type: Number, description: '年龄'})
  @IsInt()
  readonly age;

  @ApiModelProperty({ type: String })
  @IsString()
  readonly breed;
}
