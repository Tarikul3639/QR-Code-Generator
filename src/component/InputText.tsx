import { IInput } from "@/types"

interface InputTextProps {
  inputData: IInput
  setInputData: React.Dispatch<React.SetStateAction<IInput>>
}

export const InputText: React.FC<InputTextProps> = ({
  inputData,
  setInputData
}) => {
  return (
    <div className="w-full flex flex-col gap-2 rounded-2xl bg-white dark:bg-zinc-900">
      <textarea
        id="inputText"
        rows={3}
        className="w-full px-4 py-2 text-sm border border-green-500/50 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#22C55E] dark:bg-zinc-800 dark:border-zinc-600 dark:focus:ring-[#22C55E] transaction-all duration-300 resize-none"
        placeholder="Type your text here..."
        value={inputData.data.text}
        onChange={(e) =>
          setInputData({ type: "Text", data: { text: e.target.value } })
        }
      />
    </div>
  )
}
