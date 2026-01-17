import { QrCode } from "lucide-react"

interface QRPreviewProps {
  result: string | null
}

export const QRPreview: React.FC<QRPreviewProps> = ({ result }) => {
  return (
    <div className="w-full flex flex-col gap-2 h-48 items-center justify-center rounded-2xl bg-white dark:bg-zinc-900 border-[3px] border-dashed border-green-600/50 dark:border-zinc-600">
      {!result ? (
        <div className="flex flex-col items-center gap-2">
          <div className="flex items-center justify-center p-4 bg-green-100/50 dark:bg-zinc-800 rounded-2xl">
            <QrCode size={64} className="text-green-900 dark:text-zinc-500" />
          </div>
          <div className="text-center">
            <p className="text-sm font-medium text-[#578e85] dark:text-[#a0c4bf]">
              Preview Window
            </p>
            <p className="text-xs text-[#578e85]/70 dark:text-[#a0c4bf]/50 mt-1">
              Waiting for input...
            </p>
          </div>
        </div>
      ) : (
        <img
          src={result}
          alt="QR Code Preview"
          className="max-w-full max-h-full object-contain rounded-2xl"
        />
      )}
    </div>
  )
}
