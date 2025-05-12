import "@/app/globals.css";
import "@/css/cumulative.css";
export default function CumulativeAttack() {
  return (
    <div id="width" className="border border-zinc-400">
      <h1 className="m-7 text-center">
        Cumulative Sum of Mitigated DDoS Attacks
      </h1>
      <div className="flex mx-7">
        <div className="border border-zinc-400 p-5">
          <p>Billion Packets</p>
          <h2 className="my-4">66455.45</h2>
          <p>
            Total Number of <span className="border-b">Dropped Packets</span>{" "}
          </p>
        </div>
        <div className="border border-zinc-400 p-5">
          <p>Peta Bytes</p>
          <h2 className="my-4">68.72</h2>
          <p>
            Total Number of <span className="border-b">Dropped Bytes</span>{" "}
          </p>
        </div>
      </div>
    </div>
  );
}
