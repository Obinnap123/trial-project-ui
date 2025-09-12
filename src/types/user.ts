export interface User {
  id: number;
  image: string;
  name: string;
  username: string;
  location: string;
  isSarah?: boolean;
}

export interface UserStats {
  tag: string;
  values: {
    data1: number;
    data2: number;
    status: string;
  };
}
