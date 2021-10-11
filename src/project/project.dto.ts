import { IsInt, IsString } from 'class-validator';
import { ApiModelProperty } from '@nestjs/swagger/dist/decorators/api-model-property.decorator';

export class ProjectDto {
  @IsString()
  @ApiModelProperty({ example: '123123'})
  id: string;

  @IsString()
  @ApiModelProperty({ example: 'jack'})
  name: string;

  @IsString()
  @ApiModelProperty({ example: '000000'})
  des: string;

  @IsInt()
  @ApiModelProperty({ example: 1})
  time: number
}
