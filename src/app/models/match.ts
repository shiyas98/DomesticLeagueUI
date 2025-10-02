

export interface Match {
  mid: number;
  tid?: number;              // Nullable<int> → number | null (using ? for optional)
  uid: number;
  code: string;
  stadium: string;
  place: string;
  description: string;
  team1id?: number;
  team1name: string;
  team1logo: string;
  team2id?: number;
  team2name: string;
  team2logo: string;
  totalminutes: string;
  playerscount?: number;
  date: string;
  time: string;
  formatteddate: string;
  formattedtime: string;
  teams: TeamMatch[];             // List<Team> → Team[]
  status: string;
  team1score: number;
  team2score: number;
  matchNumber?: number;      // int? → optional number
}

export interface TeamMatch {
  teid: number;
  mid: number;
  teamname: string;
  type: string;
  isactive?: boolean;   // bool? → optional boolean
}