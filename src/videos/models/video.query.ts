import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class VideoQuery {
  @ApiProperty({
    minimum: 0,
    maximum: 100,
    format: 'int32',
    default: 0,
    required: true,
  })
  @IsNumber()
  page: number;

  @ApiProperty({
    format: 'int32',
    default: 10,
    required: true,
  })
  @IsNumber()
  limit: number;

  @ApiProperty({
    format: 'boolean',
    default: false,
    required: true,
    description: 'If true, will retrieve only public videos',
  })
  @IsString()
  @IsNotEmpty()
  onlyPublic: string;

  @ApiProperty({
    format: 'int32',
    default: -1,
    required: true,
    description:
      'will retrieve only videos that were viewed more times than the number passed',
  })
  @IsNumber()
  viewedMoreThan: number;
}
