import { QrCode } from "lucide-react"

const Header: React.FC = () => {
  return (
    <header className="w-full bg-[#29A38F]/2 dark:bg-[#121417]/2 backdrop-blur-sm">
      <div className="flex items-center gap-2 font-bold px-2">
        <span className="flex items-center justify-center p-2 bg-[#22C55E]/10 rounded-2xl shadow-sm dark:bg-zinc-800">
          <QrCode size={32} className="text-[#22C55E]" />
        </span>
        <h2 className="text-[#121417] dark:text-white text-[16px] font-bold leading-tight tracking-tight">
          QR Generator
        </h2>
      </div>
    </header>
  )
}
export default Header
