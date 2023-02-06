export interface IPosts {
  id: number;
  title: string;
}

export interface IPostsResponse {
  posts: IPosts[];
}

export interface PostsState {
  posts: any;
  pending: boolean;
  error: string | null;
}

export interface IPostsParams {
  email: string | null;
}
