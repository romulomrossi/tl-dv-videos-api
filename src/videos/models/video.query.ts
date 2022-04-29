import { ApiProperty } from '@nestjs/swagger';

export class VideoQuery {
  @ApiProperty({
    minimum: 0,
    maximum: 100,
    format: 'int32',
    default: 0,
    required: true,
  })
  page: number;

  @ApiProperty({
    format: 'int32',
    default: 10,
    required: true,
  })
  limit: number;

  @ApiProperty({
    format: 'boolean',
    default: false,
    required: true,
    description: 'If true, will retrieve only public videos',
  })
  onlyPublic: string;

  @ApiProperty({
    format: 'int32',
    default: -1,
    required: true,
    description:
      'will retrieve only videos that were viewed more times than the number passed',
  })
  viewedMoreThan: number;
}
