import "@/app/globals.css";
import styles from "@/css/cumulative.module.css";

export default function CumulativeAttack() {
  return (
    <div id="outer">
      <h1 className="m-7 text-center" id={styles.title}>
        Cumulative Sum of Mitigated DDoS Attacks
      </h1>
      <div className="flex mx-7">
        <div className="p-5 w-60" id="border">
          <p  id={styles.billionPackets}>Billion Packets</p>
          <h2  id={styles.digits}>66455.45</h2>
          <div id={styles.droppedPackets}>
            <p>Total Number </p> 
            <p>
              of <span className="border-b">Dropped Packets</span>
            </p>
          </div>
        </div>
        <div className="p-5 w-60" id="border">
          <p id={styles.billionPackets}>Peta Bytes</p>
          <h2 id={styles.digits}>68.72</h2>
          <div id={styles.droppedPackets}>
            <p>Total Number </p> 
            <p>
              of <span className="border-b">Dropped Bytes</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
