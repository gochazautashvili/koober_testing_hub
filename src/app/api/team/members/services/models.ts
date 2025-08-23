import { IMemberSelector } from './selectors';

export interface IMembersResponse {
  hasMore: boolean;
  page_count: number;
  members: IMemberSelector[];
}
