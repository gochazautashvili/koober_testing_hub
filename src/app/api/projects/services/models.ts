import { IProjectSelector } from './selectors';

export interface IProjectsResponse {
  hasMore: boolean;
  page_count: number;
  projects: IProjectSelector[];
}
