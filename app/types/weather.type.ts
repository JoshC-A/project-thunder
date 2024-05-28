export type Weather = {
  id?: number;
  created_at?: string;
  location?: string;
  feels_like?: number;
  condition?: string;
  icon?: string;
  wind_mph?: number;
  uv_index?: number;
  temperature?: number;
};
