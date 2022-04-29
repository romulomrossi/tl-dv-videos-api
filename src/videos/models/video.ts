import { AutoMap } from '@automapper/classes';
import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsNumber, IsString, IsUrl } from 'class-validator';
import * as mongoose from 'mongoose';

export class Video {
  @AutoMap()
  @ApiProperty({ type: 'string' })
  _id: mongoose.Types.ObjectId;

  @AutoMap()
  @IsString()
  @ApiProperty({
    required: true,
    example: 'Crazy Frog',
  })
  name: string;

  @AutoMap()
  @IsUrl()
  @ApiProperty({
    required: true,
    example: 'https://www.youtube.com/watch?v=k85mRPqvMbE',
  })
  url: string;

  @AutoMap()
  @IsUrl()
  @ApiProperty({
    required: true,
    example: 'https://www.youtube.com/watch?v=k85mRPqvMbE',
  })
  thumbnailUrl: string;

  @AutoMap()
  @IsBoolean()
  @ApiProperty({
    required: true,
    example: false,
  })
  isPrivate: boolean;

  @AutoMap()
  @IsNumber()
  @ApiProperty({
    required: true,
    example: 0,
  })
  timesViewed: number;
}
