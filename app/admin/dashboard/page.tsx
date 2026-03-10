import CardSummaryAdmin from "@/components/admin/dashboard/CardSummaryAdmin";
import Phase from "./Right/Phase";
import RecentAlert from "./Right/RecentAlert";
import LeftSummary from "./Left/LeftSummary";
import ActiveTrainees from "./Left/ActiveTrainees";
import DailyReport from "./Left/DailyReport";

export default function DashboardAdmin() {
  return (
    <div className={`flex flex-col gap-8 w-full dashboard-admin-cont`}>
      <CardSummaryAdmin></CardSummaryAdmin>
      <div className="w-full flex flex-col gap-8 h-full">
        <LeftSummary></LeftSummary>
        <div className="grid grid-cols-2 gap-8 progress-alert-cont">
          <Phase></Phase>
          <RecentAlert></RecentAlert>
        </div>
        <ActiveTrainees></ActiveTrainees>
        <DailyReport></DailyReport>
      </div>
    </div>
  );
}
