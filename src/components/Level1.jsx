import { useState } from "react";

export default function Level1() {
  const [isGuest, setIsGuest] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [guestName, setGuestName] = useState("");
  const [submitted, setSubmitted] = useState(false);
  return (
    <>
      <h1 className="text-3xl font-bold m-3">Level 1</h1>

      {submitted ? (
        <div className="my-2 p-5 border border-gray-400 rounded-xl bg-gray-100 text-black shadow shadow-gray-300 w-[80%] md:w-[30%] max-w-[1000px] flex flex-col justify-center font-semibold">
          <h1>{`Name: ${name}`}</h1>
          <h1>{`Email: ${email}`}</h1>
          {isGuest ? (
            <h1>{`Guest Name: ${guestName}`}</h1>
          ) : (
            <h1>Guest user was not enabled</h1>
          )}
        </div>
      ) : (
        <div className="p-5 border border-gray-400 rounded-xl bg-gray-100 text-black shadow shadow-gray-300 w-[80%] md:w-[30%] max-w-[1000px] flex flex-col justify-center items-center">
          <form
            className="w-full flex flex-col items-center space-y-3 h-full"
            onSubmit={(e) => {
              e.preventDefault();
              setSubmitted(true);
            }}
          >
            <div className="w-full">
              <label htmlFor="name" className="text-xs">
                Name
              </label>
              <input
                className="w-full p-2 border border-gray-400 rounded-lg shadow shadow-gray-300"
                type="text"
                placeholder="Enter Name"
                value={name}
                id="name"
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="w-full">
              <label htmlFor="email" className="text-xs">
                Email
              </label>
              <input
                className="w-full p-2 border border-gray-400 rounded-lg shadow shadow-gray-300"
                type="email"
                placeholder="Enter Email"
                value={email}
                id="email"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="w-full flex items-center space-x-2">
              <input
                type="checkbox"
                id="guest"
                onChange={(e) => setIsGuest(e.target.checked)}
              />
              <label htmlFor="guest" className="text-sm">
                Are you attending with a guest?
              </label>
            </div>
            {isGuest && (
              <div className="w-full">
                <label htmlFor="guest" className="text-xs">
                  Guest name
                </label>
                <input
                  className="w-full p-2 border border-gray-400 rounded-lg shadow shadow-gray-300"
                  id="guest"
                  type="text"
                  placeholder="Enter Guest Name"
                  value={guestName}
                  onChange={(e) => setGuestName(e.target.value)}
                  required
                />
              </div>
            )}
            <button
              className="w-full p-2 bg-blue-500 text-white rounded-lg shadow shadow-gray-300"
              type="submit"
            >
              Submit
            </button>
          </form>
        </div>
      )}
    </>
  );
}
