import { ImageIcon } from 'lucide-react'

export default function ImagePlaceholder({ className = '', aspectRatio = 'aspect-video', label = 'Gambar placeholder' }) {
  return (
    <div
      className={`rounded-xl border-2 border-dashed border-slate-300 bg-slate-100 flex flex-col items-center justify-center text-slate-500 ${aspectRatio} ${className}`}
    >
      <ImageIcon className="w-12 h-12 mb-2 opacity-60" strokeWidth={1.5} />
      <span className="text-sm font-medium">{label}</span>
    </div>
  )
}
