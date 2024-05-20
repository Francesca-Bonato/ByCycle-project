import { useState } from "react";
import Button from "../components/Button";

const Community = () => {
  const [thread, setThread] = useState("");

  const handleSubmit = (e) => {
      e.preventDefault();
      console.log({ thread });
      setThread("");
  };
  return (
      <>
          <main className='flex flex-col items-center justify-center pt-16 px-5 md:px-10 lg:px-16 2xl:text-lg'>
          <h2 className="text-center text-neutral-800 text-[44px] font-medium leading-[55px]">Create a Thread</h2>
              <form className='pt-8' onSubmit={handleSubmit}>
                  <div className="flex flex-col justify-center items-center gap-6">
                      <label htmlFor='thread' className="font-semibold">Title / Description</label>
                      <input
                      className="w-full content-stretch p-[10px] border border-gray-300 rounded-3xl "
                          type='text'
                          name='thread'
                          required
                          value={thread}
                          onChange={(e) => setThread(e.target.value)}
                      />
                      <Button innerText="Create Thread"/>
                  </div>
              </form>
          </main>
      </>
  );
};

export default Community
