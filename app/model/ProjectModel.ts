import BaseModel from './BaseModel';

export default interface BlogModel extends BaseModel {
    timeLine: string | null;
}
