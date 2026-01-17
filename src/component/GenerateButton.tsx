import { Sparkles } from "lucide-react"

interface GenerateButtonProps {
  handleGenerate: () => void
  isLoading?: boolean
}

export const GenerateButton: React.FC<GenerateButtonProps> = ({
  handleGenerate,
  isLoading
}) => {
  return (
    <button
      onClick={handleGenerate}
      disabled={isLoading}
      className="flex items-center justify-center gap-2 text-black text-sm w-full py-3 bg-[#38e079] hover:bg-[#39dc70] font-bold rounded-2xl transition-colors duration-300 active:scale-[0.98] dark:text-white">
      <Sparkles size={18} />
      <span>{isLoading ? "Generating..." : "Generate QR"}</span>
    </button>
  )
}
