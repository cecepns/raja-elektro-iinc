import { MessageCircle } from 'lucide-react'

const WA_NUMBER = '6282249445697'
const WA_URL = `https://wa.me/${WA_NUMBER}`

export default function FloatingWaButton() {
  return (
    <a
      href={WA_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-lg hover:bg-[#20BD5A] hover:scale-105 active:scale-95 transition-all"
      aria-label="Chat via WhatsApp"
    >
      <MessageCircle className="w-7 h-7" strokeWidth={2} />
    </a>
  )
}
