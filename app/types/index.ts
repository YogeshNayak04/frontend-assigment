
export interface Row {
  id: number;
  timestamp: string;
  status: string;
  link?: string;
  statusType?: 'loading' | 'error' | 'success';
}

export interface Company {
  name: string;
  icon: any ;
  status?: string;
}