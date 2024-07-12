export type User = {
  id: string;
  name: string;
  avatar?: string;
  color: string;
  groupIds: Group["id"][];
};

export type Group = {
  id: string;
  name: string;
};
