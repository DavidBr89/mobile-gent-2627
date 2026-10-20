export interface Image {
  width: number;
  height: number;
  url: string;
  ratio: string;
}

export interface TMEvent {
  id: string;
  name: string;
  images: Image[];
}

export interface TMResponse {
  _embedded: {
    events: TMEvent[];
  };
}
