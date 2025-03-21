import BaseModel from './BaseModel';

export default interface ProjectModel extends BaseModel {
    timeLine: string | null;
}
