import { Check, Copy, Download } from "lucide-react"
import { useState } from "react"

interface ButtonsProps {
  result: string | null
}

export const Buttons: React.FC<ButtonsProps> = ({ result }) => {
  const [isLoading, setIsLoading] = useState(false)
  const [isCopied, setIsCopied] = useState(false)

  const handleDownload = async () => {
    try {
      setIsLoading(true)
      // setTimeout(() => setIsLoading(false), 2000)
      if (result) {
        const link = document.createElement("a")
        link.href = result
        link.download = "qr-code.png"
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
      }
    } catch {
      setIsLoading(false)
    } finally {
      setIsLoading(false)
    }
  }

  const handleCopy = async () => {
    if (!result) return
    try {
      await navigator.clipboard.writeText(result)
      setIsCopied(true)
      setTimeout(() => setIsCopied(false), 2000)
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <div className="w-full flex gap-3 items-center">
      {/* Download Button - Pill Shape */}
      <button
        disabled={isLoading}
        onClick={handleDownload}
        className="
          flex items-center justify-center gap-2 w-full py-3 px-6 rounded-full
          bg-[#38E079]/15 text-[#38E079] transition-all duration-200
          hover:bg-[#38E079]/20 active:scale-[0.97] disabled:opacity-50
        ">
        <Download
          size={18}
          strokeWidth={2.5}
          className={isLoading ? "animate-pulse" : ""}
        />
        <span className="font-bold text-[13px] tracking-tight">
          {isLoading ? "Processing..." : "PNG"}
        </span>
      </button>

      {/* Copy Button - Pill Shape */}
      <button
        onClick={handleCopy}
        className="
          flex items-center justify-center gap-2 w-full py-3 px-6 rounded-full
          bg-[#F3F4F6] text-[#4B5563] transition-all duration-200
          hover:bg-[#E5E7EB] active:scale-[0.97]
          dark:bg-white/5 dark:text-gray-300 dark:hover:bg-white/10
        ">
        {isCopied ? (
          <>
            <Check size={18} strokeWidth={2.5} className="text-[#38E079]" />
            <span className="font-bold text-[#38E079] text-[13px] tracking-tight">
              Copied
            </span>
          </>
        ) : (
          <>
            <Copy size={18} strokeWidth={2.5} className="opacity-80" />
            <span className="font-bold text-[13px] tracking-tight">Copy</span>
          </>
        )}
      </button>
    </div>
  )
}
