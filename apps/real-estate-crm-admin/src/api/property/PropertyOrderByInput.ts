import { SortOrder } from "../../util/SortOrder";

export type PropertyOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  location?: SortOrder;
  price?: SortOrder;
  name?: SortOrder;
  description?: SortOrder;
  agentId?: SortOrder;
};
