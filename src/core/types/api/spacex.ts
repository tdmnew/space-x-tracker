type Links = {
  reddit: string | null;
  article: string;
  wikipedia: string;
};

export type Mission = {
  description: string;
  manufacturers: string[];
  mission_id: string;
  mission_name: string;
  payload_ids: string[];
  twitter: string;
  website: string;
  wikipedia: string;
};

export type History = {
  details: string;
  event_date_unix: number;
  event_date_utc: string;
  flight_number: number;
  id: number;
  links: Links;
  title: string;
};

export type Payload = {
  customers: string[];
  manufacturer: string;
  nationality: string;
  norad_id: number[];
  orbit: string;
  payload_id: string;
  payload_mass_kg: number;
  payload_mass_lbs: number;
  payload_type: string;
};
