import { IInput } from "@/types"
import { Link2, AlertCircle } from "lucide-react"
import { useMemo } from "react"

interface InputURLProps {
  inputData: IInput
  setInputData: React.Dispatch<React.SetStateAction<IInput>>
}

export const InputURL: React.FC<InputURLProps> = ({ inputData, setInputData }) => {
  const url = inputData.data.url

  const isValidURL = useMemo(() => {
    if (!url) return true
    try {
      new URL(url)
      return true
    } catch {
      return false
    }
  }, [url])

  return (
    <div className="w-full relative flex flex-col gap-1.5">
      <div className="relative">
        <input
          type="url"
          id="inputURL"
          className={`
            w-full px-4 py-2.5 pl-12 text-[15px] rounded-2xl
            bg-white dark:bg-zinc-800
            border-[1.5px]
            transition-all duration-300
            focus:outline-none focus:ring-[1px]
            ${
              isValidURL
                ? "border-[#38E079]/40 focus:ring-[#38E079]"
                : "border-red-400/60 focus:ring-red-400 pr-10"
            }
          `}
          placeholder="https://google.com"
          value={url}
          onChange={(e) =>
            setInputData({ type: "URL", data: { url: e.target.value } })
          }
        />

        <span className="absolute top-1/2 left-4 -translate-y-1/2 text-gray-400">
          <Link2 size={20} />
        </span>

        {!isValidURL && (
          <span className="absolute top-1/2 right-4 -translate-y-1/2 text-red-400">
            <AlertCircle size={18} />
          </span>
        )}
      </div>

      {!isValidURL && (
        <p className="text-xs text-red-400 pl-2">
          Please enter a valid URL (https://...)
        </p>
      )}
    </div>
  )
}
