import { PartialType } from '@nestjs/mapped-types';
import { CreateWritingTaskOverviewDto } from './create-writing-task-overview.dto';

export class UpdateWritingTaskOverviewDto extends PartialType(CreateWritingTaskOverviewDto) {}
