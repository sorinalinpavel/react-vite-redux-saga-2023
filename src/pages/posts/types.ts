export interface IPostsResponse {
  id: number;
  title: string;
}

export interface ProductsState {
  posts: any;
  pending: boolean;
  error: string | null;
}

export interface IPostsParams {
  email: string | null;
}
