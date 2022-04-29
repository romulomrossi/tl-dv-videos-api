import { AutoMap } from '@automapper/classes';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import * as mongoose from 'mongoose';

export type VideoDtoDocument = VideoDto & Document;

@Schema({ collection: 'videos' })
export class VideoDto {
  @Prop()
  @AutoMap()
  _id: mongoose.Types.ObjectId;

  @Prop()
  @AutoMap()
  name: string;

  @Prop()
  @AutoMap()
  url: string;

  @Prop()
  @AutoMap()
  thumbnailUrl: string;

  @Prop()
  @AutoMap()
  isPrivate: boolean;

  @Prop()
  @AutoMap()
  timesViewed: number;
}

export const VideoSchema = SchemaFactory.createForClass(VideoDto);
