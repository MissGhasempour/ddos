import "@/css/maxbit.css";
export default function MaxBitsAttack() {
  return (
    <div className="border p-4 w-200" id="outer">
      <div className="w-200">
        <div className="flex">
          <div id="space-icon"></div>
          <h2>Maximum Attack Volumes</h2>
        </div>
        <p>BITS</p>
        <h2></h2>
        <p>
          <span className="block">Maximum Volume </span> Of The{" "}
          <span className="text-purple-600 border-b-2 px-2">Mitigated</span>{" "}
          Attacks
        </p>
        <div className="flex mt-5 mx-2" id="rate">
          <div className="border mx-1">830.5 Gbps </div>
          <div className="border mx-1">826.7 Gbps</div>
          <div className="border mx-1">795.8 Gbps</div>
          <div className="border mx-1">786.5 Gbps </div>
        </div>
      </div>
    </div>
  );
}
