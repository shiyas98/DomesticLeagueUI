export interface Tournament {
  uid: number;
  tid: number;
  tcode: string;
  name: string;
  logo: string;
  format: string;
  teamscount: number;
  location: string;
  description: string;
  startdate: string;
  enddate: string;
  code: string;
  fid: string;
}

export interface TournamentResponse {
  data: Tournament[];
}
