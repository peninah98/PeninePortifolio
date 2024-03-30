import { ReactElement, useEffect, useState } from "react"

export default function Counter(): ReactElement {
  const [count, setCount] = useState(0)
  useEffect(() => {
    console.log(`The count changed to: ${count}`)
    return () => {
      console.log(
        `I am being cleaned up dear use effect is being recreated with the new value`
      )
    }
  }, [count])

  return (
    <div className="bg-emerald-100 w-1/2 rounded-2xl mx-auto p-10 mt-10 items-center flex flex-col">
      <h1 className="text-center text-emerald-700 text-lg py-7 font-bold">
        Counter
      </h1>
      <div className="grid grid-cols-3 gap-5 mx-auto items-center justify-center">
        <button
          className="text-white bg-emerald-700 p-3"
          onClick={() => setCount(count - 1)}>
          Decrement
        </button>
        <button
          className="text-white bg-emerald-700 p-3"
          onClick={() => setCount(count * 0)}>
          Reset
        </button>
        <button
          className="text-white bg-emerald-700 p-3"
          onClick={() => setCount(count + 1)}>
          Increment
        </button>
      </div>
      <div className="flex text-emerald-700 text-lg my-10 items-center mx-auto">
        <p className="font-mono bg-emerald-500 items-center p-10 rounded-md left-1/2 right-1/2">
          {count}
        </p>
      </div>
    </div>
  )
}
