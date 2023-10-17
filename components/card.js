import React from "react";

export default function Card() {
  return (
    <div className="rounded-xl bg-white shadow-sm transition-all cursor-pointer dark:bg-red p-4 border border-gray-100">
      <img
        src="https://docs.fuse.io/img/new-ms-p.svg"
        alt=""
        className="w-full"
      />
      <h3 className="font-bold text-xl my-4">Quick Start</h3>
      <p>
        Find links to valuable resources and websites that will bring you up to
        speed on building on Fuse.
      </p>
    </div>
  );
}
