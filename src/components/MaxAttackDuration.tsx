import "@/css/duration.css";
export default function MaxAttackDuration() {
  return (
    <div className="flex border border-zinc-400" id="outer">
      <div id="icon"></div>
      <div className="flex relative left-100 mt-4">
        <div>
          <div className="border border-slate-700 p-2 mx-4 my-2 bg-slate-700 rounded">
            56
          </div>
          <p className="mx-4">DAYS</p>
        </div>
        <div>
          <div className="border border-slate-700 p-2 mx-4 my-2 bg-slate-700 rounded">
            15
          </div>
          <p className="mx-4">HOURS</p>
        </div>
        <div>
          <div className="border border-slate-700 p-2 mx-4 my-2 bg-slate-700 rounded">
            55
          </div>
          <p className="mx-4">MINUTES</p>
        </div>
      </div>
      <div className="relative left-110 mt-8">
        <h2 className="text-green-300">Maximum</h2>
        <h2>Attack Duration</h2>
      </div>
    </div>
  );
}
