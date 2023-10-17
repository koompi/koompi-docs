import React from "react";

export default function Footer() {
  return (
    <>
      <div className="bg-[#f2f2f2] py-6">
        <div className="container ">
          <div className="grid grid-cols-4  gap-4">
            <div className="flex justify-center items-center gap-3">
              <svg
                width="25"
                height="18"
                viewBox="0 0 25 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19.325.45H5.435C2.709.45.5 2.686.5 5.445v7.028c0 2.759 2.21 4.995 4.935 4.995h13.89c2.726 0 4.935-2.236 4.935-4.995V5.446c0-2.759-2.21-4.995-4.935-4.995Zm-3.337 8.851L9.49 12.438a.261.261 0 0 1-.373-.239V5.73a.26.26 0 0 1 .378-.235l6.498 3.332c.193.1.19.38-.006.474Z"
                  fill="#000"
                ></path>
              </svg>
              <span className="font-bold text-xl text-black">Youtube</span>
            </div>

            <div className="flex justify-center items-center gap-3">
              <svg
                width="27"
                height="26"
                viewBox="0 0 27 26"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M13.442 0C6.079 0 .108 5.949.108 13.287c0 5.87 3.821 10.85 9.119 12.608.666.123.91-.288.91-.639 0-.317-.012-1.363-.018-2.474-3.709.804-4.491-1.568-4.491-1.568-.607-1.535-1.48-1.944-1.48-1.944-1.21-.825.09-.808.09-.808 1.34.094 2.044 1.37 2.044 1.37 1.19 2.031 3.119 1.444 3.88 1.104.12-.858.465-1.445.847-1.776-2.962-.336-6.075-1.476-6.075-6.567 0-1.45.521-2.636 1.374-3.567-.138-.334-.595-1.685.13-3.516 0 0 1.118-.357 3.667 1.363a12.804 12.804 0 0 1 3.337-.448c1.133.005 2.274.153 3.34.448 2.545-1.72 3.663-1.363 3.663-1.363.725 1.83.269 3.182.13 3.516.855.931 1.373 2.116 1.373 3.567 0 5.104-3.12 6.227-6.088 6.556.478.412.904 1.22.904 2.46 0 1.778-.015 3.21-.015 3.647 0 .354.24.767.916.637 5.294-1.758 9.11-6.737 9.11-12.606C26.775 5.95 20.805 0 13.442 0Z"
                  fill="#000"
                ></path>
              </svg>
              <span className="font-bold text-xl text-black">Github</span>
            </div>

            <div className="flex justify-center items-center gap-3">
              <svg
                width="24"
                height="20"
                viewBox="0 0 24 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M20.886 5.988c0-.2-.004-.397-.013-.594a9.327 9.327 0 0 0 2.291-2.378 9.169 9.169 0 0 1-2.637.723 4.612 4.612 0 0 0 2.02-2.54 9.238 9.238 0 0 1-2.917 1.114 4.594 4.594 0 0 0-7.828 4.189 13.041 13.041 0 0 1-9.468-4.799 4.59 4.59 0 0 0 1.422 6.131 4.58 4.58 0 0 1-2.08-.573c-.002.018-.002.037-.002.058A4.595 4.595 0 0 0 5.36 11.82a4.61 4.61 0 0 1-2.075.08 4.6 4.6 0 0 0 4.291 3.19 9.219 9.219 0 0 1-5.705 1.965c-.37 0-.736-.02-1.096-.064a13.007 13.007 0 0 0 7.042 2.063c8.448 0 13.07-6.998 13.07-13.067Z"
                  fill="#000"
                ></path>
              </svg>
              <span className="font-bold text-xl text-black">Twitter</span>
            </div>
            <div className="flex justify-center items-center gap-3">
              <svg
                width="23"
                height="20"
                viewBox="0 0 23 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="m8.468 18.267.343-5.287 9.405-8.65c.416-.387-.086-.574-.637-.237L5.969 11.58.95 9.955C-.13 9.643-.141 8.88 1.194 8.33L20.75.631c.894-.412 1.75.225 1.408 1.625l-3.33 16.01c-.234 1.138-.907 1.413-1.838.888l-5.07-3.825-2.437 2.413c-.281.287-.514.525-1.016.525Z"
                  fill="#000"
                ></path>
              </svg>
              <span className="font-bold text-xl text-black">Telegram</span>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white pt-12 footer">
        <div className="container">
          <div className="grid grid-cols-4  gap-4">
            <div>
              <h3 className="font-bold text-lg mb-4">Getting Started</h3>
              <ul>
                <li>Fuse Network</li>
                <li>Mobile Stack</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Under the hood</h3>
              <ul>
                <li>Fuse Network</li>
                <li>Mobile Stack</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">General</h3>
              <ul>
                <li>Fuse Network</li>
                <li>Mobile Stack</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">
                Subscribe to Newsletter
              </h3>
              <ul>
                <li>Fuse Network</li>
                <li>Mobile Stack</li>
              </ul>
            </div>
          </div>
          <div className="text-center mt-10 pb-4">
            © {new Date().getFullYear()} <b>Selendra</b>. All Rights Reserved.
          </div>
        </div>
      </div>
    </>
  );
}
