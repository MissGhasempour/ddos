import "@/css/trafic.css";
import FlowChart from "@/lib/FlowChart";
export default async function TraficChart() {
  const response = await fetch("http://156.255.1.102:6523/task/chart");
  const data = await response.json();
  return (
    <div className="border border-zinc-400 p-4 pt-7" id="outer">
      <div className="flex">
        <h1>Traffic Flow Chart</h1>
        <div className="flex relative left-10 rounded">
          <div className="border px-2 py-1 rounded">1 day</div>
          <div className="border px-2 py-1 rounded bg-slate-700">1 week</div>
          <div className="border px-2 py-1 rounded">1 hour</div>
        </div>
        <div className="relative left-15 border rounded mb-2 p-2 w-60 ">
          <p className=""> Analysis based on volume</p>
          <svg
            width="10"
            height="6"
            viewBox="0 0 10 6"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className=" left-53 bottom-5 text-xl "
          >
            <path
              d="M1 1L5 5L9 1"
              stroke="white"
              strokeOpacity="0.4"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
      <div className="relative left-64 p-2 border rounded bg-slate-700 w-60">
        <p className="border-b-2 mb-3 pb-2">Analysis based on volume</p>
        <p>Analysis based on packet</p>
      </div>
      <FlowChart data={data} />
    </div>
  );
}
