interface N1PanelService {
  cancel: boolean;
  category: string;
  dripfeed: boolean;
  max: number;
  min: number;
  name: string;
  rate: number;
  refill: boolean;
  service: string;
  type: string;
}

interface AppCategory {
  id: string;
  name: string;
  platform: string;
}

interface AppService {
  id: string;
  n1_id: string;
  cancel: boolean;
  category: string;
  dripfeed: boolean;
  max: number;
  min: number;
  name: string;
  rate: number;
  refill: boolean;
  service: string;
  type: string;
}

enum AppCommandeStatus {
  INITIAL = "initiated",
  PAID = "paid",
  PENDING = "pending",
  PROCESSING = "processing",
  COMPLETED = "completed",
  CANCELLED = "canceled",
}
export { N1PanelService, AppCategory, AppService, AppCommandeStatus };
