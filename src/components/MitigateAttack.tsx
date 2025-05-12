import CountOfAttack from "@/lib/CountOfAttack";
import styles from "@/css/mitigate.module.css";

export default function MitigateAttack() {
  return (
    <div className="flex border border-zinc-400" id={styles.outer}>
      <div>
        <div className="relative">
          <svg
            width="52"
            height="40"
            viewBox="0 0 52 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="mt-20 ml-40"
          >
            <svg
              width="5"
              height="14"
              viewBox="0 0 5 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.75 2.29156L2.75 11.2166"
                stroke="white"
                strokeOpacity="0.2"
                strokeWidth="4"
                strokeLinecap="round"
              />
            </svg>
            <svg
              width="5"
              height="39"
              viewBox="0 0 5 39"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute left-60"
            >
              <path
                d="M2.82666 2.217L2.82666 36.217"
                stroke="white"
                strokeOpacity="0.2"
                strokeWidth="4"
                strokeLinecap="round"
                className="absolute left-30"
              />
            </svg>
            <svg
              width="5"
              height="27"
              viewBox="0 0 5 27"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.79834 2.54156L2.79834 24.2166"
                stroke="white"
                strokeOpacity="0.2"
                strokeWidth="4"
                strokeLinecap="round"
              />
            </svg>
            <svg
              width="5"
              height="18"
              viewBox="0 0 5 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.77417 2.04156L2.77417 15.2166"
                stroke="white"
                strokeOpacity="0.2"
                strokeWidth="4"
                strokeLinecap="round"
                className="absolute left-40"
              />
            </svg>

            <path
              d="M2.85213 37.3946C2.85213 37.3946 13.5461 34.0607 26.1571 25.4605C44.6356 12.8588 46.2902 2.76963 46.2902 2.76963M46.2902 2.76963L36.2525 5.33251M46.2902 2.76963L49.8708 11.9364"
              stroke="white"
              strokeOpacity="0.4"
              strokeWidth="4"
              strokeLinecap="round"
              className="absolute left-60"
            />
          </svg>

          <h1></h1>
          <CountOfAttack />
          <p className="mt-30 ml-15 text-center">
            Number Of{" "}
            <span className="text-purple-600 border-b-2 px-2">Mitigated</span>{" "}
            Attacks
          </p>
        </div>
      </div>
    </div>
  );
}
