import { Injectable, NotFoundException } from '@nestjs/common';
import { Types } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { VideoDto } from './models/video.dto';
import * as mongoose from 'mongoose';
import { VideoQuery } from './models/video.query';

@Injectable()
export class VideosService {
  constructor(@InjectModel(VideoDto.name) private model: Model<VideoDto>) {}

  async create(video: VideoDto): Promise<VideoDto> {
    video._id = new mongoose.Types.ObjectId();
    return await this.model.create(video);
  }

  async update(id: string, video: VideoDto): Promise<VideoDto> {
    video._id = this.toObjectId(id);
    const result = await this.model
      .findByIdAndUpdate(video._id, video, { new: true })
      .exec();

    if (result === null) {
      throw new NotFoundException();
    }

    return result;
  }

  async delete(id: string): Promise<VideoDto> {
    const result = await this.model
      .findByIdAndRemove(this.toObjectId(id))
      .exec();

    if (result === null) {
      throw new NotFoundException();
    }

    return result;
  }

  async findOne(id: string): Promise<VideoDto> {
    const result = await this.model.findById(this.toObjectId(id)).exec();
    if (result === null) {
      throw new NotFoundException();
    }
    return result;
  }

  async findAll(query: VideoQuery): Promise<VideoDto[]> {
    const filter: any = {
      timesViewed: { $gt: query.viewedMoreThan ?? -1 },
    };

    if (query.onlyPublic !== undefined) {
      if (query.onlyPublic === 'true') {
        filter.isPrivate = { $eq: false };
      }
    }

    return await this.model
      .find(filter)
      .skip(query.page * query.limit)
      .limit(query.limit)
      .exec();
  }

  private toObjectId(id: string): Types.ObjectId {
    return new mongoose.Types.ObjectId(id);
  }
}
