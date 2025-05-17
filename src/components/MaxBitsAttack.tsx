import "@/css/maxbit.css";
import "@/app/globals.css";

export default function MaxBitsAttack() {
  return (
    <div className="p-4" id="outer">
      <div className="">
        <div className="flex">
          <div id="space-icon">
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
                d="M25.94 24.06L18.87 31.13"
                stroke="#78FF97"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M19.633 25.999L16.17 25.181C15.789 25.091 15.655 24.618 15.931 24.341L18.685 21.587C18.87 21.402 19.121 21.296 19.384 21.294L22.489 21.267"
                stroke="#78FF97"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M32.8789 21.975L33.6869 18.087C33.9069 17.029 32.9709 16.093 31.9129 16.313L28.0249 17.121C26.8799 17.359 25.8299 17.926 25.0039 18.753L21.8139 21.942C20.5969 23.159 19.8049 24.737 19.5549 26.44L19.5439 26.513C19.3859 27.6 19.7499 28.697 20.5259 29.474V29.474C21.3019 30.25 22.3999 30.614 23.4869 30.455L23.5599 30.444C25.2629 30.195 26.8409 29.402 28.0579 28.185L31.2469 24.996C32.0739 24.17 32.6409 23.12 32.8789 21.975V21.975Z"
                stroke="#78FF97"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M26.4 17.714C28.711 19.29 30.71 21.289 32.286 23.6"
                stroke="#78FF97"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M24 30.367L24.818 33.83C24.908 34.211 25.381 34.345 25.658 34.069L28.412 31.315C28.597 31.13 28.703 30.879 28.705 30.616L28.732 27.511"
                stroke="#78FF97"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <h2 id="title">Maximum Attack Volumes</h2>
        </div>
        <p id="BITS">BITS</p>
        <h2 id="digits">
          831.6
          <span id="unit">Gbps</span>
        </h2>
        <p id="text">
          <span className="block">Maximum Volume </span> Of The{" "}
          <span className="text-purple-600 border-b-2 px-2" id="mitigated">
            Mitigated
          </span>{" "}
          Attacks
        </p>
        <div className="flex mt-5 mx-2" id="rate">
          <div className="mx-1 px-2 rounded" id="rate-block">
            830.5 Gbps{" "}
          </div>
          <div className="mx-1 px-2 rounded" id="border">
            826.7 Gbps
          </div>
          <div className="mx-1 px-2 rounded" id="border">
            795.8 Gbps
          </div>
          <div className="mx-1 px-2 rounded" id="border">
            786.5 Gbps{" "}
          </div>
        </div>
      </div>
    </div>
  );
}
