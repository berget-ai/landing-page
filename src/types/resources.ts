export interface ResourceOption {
  name: string;
  cpu: number;
  memory: number;
  storage: number;
  price: number;
}

export interface ClusterResources {
  cpu: number;
  memory: number;
  storage: number;
  workers: number;
}