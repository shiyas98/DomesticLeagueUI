export interface TournamentWebResponse {
  tournamentCount: number;
  totalMatchCount: number;
  totalTeamCount: number;
  totalPlayerCount: number;
  tournaments: TournamentItem[];
}

export interface TournamentItem {
  uid: number;
  tid: number;
  tcode: string | null;
  name: string;
  logo: string;
  format: string | null;
  teamscount: number;
  matchesCount: number;
  location: string;
  description: string;
  startdate: string;   // ISO date/time as string from API
  enddate: string;     // same as above
  aid: number;
  organizer: string | null;
  status: string;      // "Ongoing" | "Upcoming" | "Completed"
}