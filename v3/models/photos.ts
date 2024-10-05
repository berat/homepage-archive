export interface PhotoDataTypes {
  id: number;
  width: number;
  height: number;
  description: string;
  urls: { large: string; regular: string; raw: string; small: string };
  color: string | null;
  links: {
    html: string;
  };
  user: {
    username: string;
    name: string;
  };
}
