import "@/css/maxbit.css";
import "@/app/globals.css";

export default function MaxPacketsAttack() {
  return (
    <div className="p-4" id="outer">
      <div>
        <div className="flex">
          <div id="icon">
            <svg
              width="50"
              height="50"
              viewBox="0 0 50 50"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                width="50"
                height="50"
                rx="25"
                fill="#78FF97"
                fillOpacity="0.1"
              />
              <path
                d="M27.0408 22.9592L24.5298 25.4702"
                stroke="#78FF97"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M27.0009 18.9975V22.9992H31.0025L35.0042 18.9975L32.3361 17.6639L31.0025 14.9958L27.0009 18.9975Z"
                stroke="#78FF97"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M23.9996 16.9716C19.4361 17.2517 15.9064 21.0825 16 25.6537C16.0936 30.2248 19.7771 33.9079 24.3482 34.001C28.9194 34.0941 32.7498 30.5639 33.0294 26.0004"
                stroke="#78FF97"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M29.2117 26.0004C28.9427 28.4635 26.8174 30.3009 24.3413 30.2111C21.8652 30.1213 19.8786 28.1347 19.7888 25.6586C19.699 23.1825 21.5364 21.0572 23.9995 20.7882"
                stroke="#78FF97"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <h2 id="title">Maximum Attack Volumes</h2>
        </div>
        <p id="BITS">PACKETS</p>
        <h2 id="digits">
          136.5
          <span id="unit">Gbps</span>
        </h2>
        <p id="text">
          <span className="block">Maximum Volume </span> Of The{" "}
          <span className="border-b-2 px-2" id="mitigated">
            Mitigated
          </span>{" "}
          Attacks
        </p>
        <div className="flex  mt-5 mx-2" id="rate">
          <div className="mx-1 px-2 rounded" id="rate-block">
            135.2 Mpps
          </div>
          <div className="mx-1 px-2 rounded" id="border">
            134.9 Mpps
          </div>
          <div className="mx-1 px-2 rounded" id="border">
            108.7 Mpps
          </div>
          <div className="mx-1 px-2 rounded" id="border">
            91.3 Mpps
          </div>
        </div>
      </div>
    </div>
  );
}
