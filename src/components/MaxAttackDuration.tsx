import style from "@/css/duration.module.css";
import '@/app/globals.css';

export default function MaxAttackDuration() {
  return (
    <div className="flex border border-zinc-400" id="outer">
      <div id={style.icon}>
        <svg
          width="200"
          height="104"
          viewBox="0 0 200 104"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          id="inner-ico"
        >
          <g opacity="0.3">
            <path
              d="M46.9675 9.96675C76.2593 -19.3251 123.743 -19.3251 153.035 9.96675C182.327 39.2586 182.327 86.7423 153.035 116.034C123.743 145.326 76.2593 145.326 46.9675 116.034C17.6756 86.7423 17.6756 39.2586 46.9675 9.96675"
              stroke="white"
              strokeWidth="8"
              strokeLinejoin="round"
            />
            <path
              d="M100.068 46.3337C90.8011 46.3337 83.3345 53.8004 83.3345 63.0004C83.3345 72.2004 90.8011 79.6671 100.001 79.6671C109.201 79.6671 116.668 72.2004 116.668 63.0004C116.734 53.8004 109.268 46.3337 100.068 46.3337"
              stroke="white"
              strokeWidth="8"
              strokeLinejoin="round"
            />
            <path
              d="M145.985 54.5175C146.535 57.2675 146.877 60.0842 146.877 63.0009"
              stroke="white"
              strokeWidth="8"
              strokeLinejoin="round"
            />
            <path
              d="M100.001 16.1252C102.917 16.1252 105.734 16.4586 108.484 17.0169"
              stroke="white"
              strokeWidth="8"
              strokeLinejoin="round"
            />
            <path
              d="M53.1254 63.0004C53.1254 37.1171 74.117 16.1254 100 16.1254"
              stroke="white"
              strokeWidth="8"
              strokeLinejoin="round"
            />
            <path
              d="M111.834 51.1673L133.168 29.834"
              stroke="white"
              strokeWidth="8"
              strokeLinejoin="round"
            />
          </g>
        </svg>
      </div>
      <div id={style.time}>
        <div id={style.timeItem}>
          <div className="border border-slate-700 p-2 mx-4 my-2 bg-slate-700 rounded">
            56
          </div>
          <p className="mx-4">DAYS</p>
        </div>
        <div id={style.timeItem}>
          <div className="border border-slate-700 p-2 mx-4 my-2 bg-slate-700 rounded">
            15
          </div>
          <p className="mx-4">HOURS</p>
        </div>
        <div id={style.timeItem}>
          <div className="border border-slate-700 p-2 mx-4 my-2 bg-slate-700 rounded">
            55
          </div>
          <p className="mx-4">MINUTES</p>
        </div>
      </div>
      <div>
        <h2 id={style.maximum}>Maximum</h2>
        <h2 id={style.text}>Attack Duration</h2>
      </div>
    </div>
  );
}
