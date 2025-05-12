import "@/css/maxbit.css";
export default function MaxPacketsAttack() {
  return (
    <div className="border border-zinc-400 p-4" id="outer">
      <div>
        <div className="flex">
          <div id="icon"></div>
          <h2>Maximum Attack Volumes</h2>
        </div>
        <p>PACKETS</p>
        <h2></h2>
        <p>
          <span className="block">Maximum Volume </span> Of The{" "}
          <span className="text-purple-600 border-b-2 px-2">Mitigated</span>{" "}
          Attacks
        </p>
        <div className="flex  mt-5 mx-2" id="rate">
          <div className="border mx-1">135.2 Mpps</div>
          <div className="border mx-1">134.9 Mpps</div>
          <div className="border mx-1">108.7 Mpps</div>
          <div className="border mx-1">91.3 Mpps</div>
        </div>
      </div>
    </div>
  );
}
