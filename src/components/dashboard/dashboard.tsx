import MitigateAttack from "../MitigateAttack";
import CumulativeAttack from "../CumulativeAttack";
import MaxBitsAttack from "../MaxBitsAttack";
import Sidebar from "../Sidebar";
import Header from "../Header";
import MaxPacketsAttack from "../MaxPacketsAttack";
import TraficChart from "../TraficChart";
import MaxAttackDuration from "../MaxAttackDuration";

export default function Dashboard() {
  return (
    <div className="flex">
      <Sidebar />
      <div id="container">
        <Header />
        <main className="mx-8 mt-50">
          <div className="flex">
            <div className="flex">
              <MitigateAttack />
              <CumulativeAttack />
            </div>
            <div className="flex">
              <MaxBitsAttack />
              <MaxPacketsAttack />
            </div>
          </div>

          <div className="flex">
            <TraficChart />
            <MaxAttackDuration />
          </div>
        </main>
      </div>
    </div>
  );
}
