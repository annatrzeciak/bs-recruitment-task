import { PageMetadata } from "./pageMetadata";

export interface PageResponse<T> {
  Data: T[];
  Metadata: PageMetadata;
}
