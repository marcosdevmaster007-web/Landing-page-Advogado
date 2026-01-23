import { MessageCircle } from "lucide-react";

export function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/5511999999999?text=Olá, gostaria de mais informações."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-40 group"
      aria-label="Contato pelo WhatsApp"
    >
      {/* Glow effect */}
      <div className="absolute inset-0 bg-green-500 rounded-full blur-xl opacity-30 group-hover:opacity-50 transition-opacity animate-pulse" />
      
      {/* Button */}
      {/* <div className="relative flex items-center justify-center w-16 h-16 bg-gradient-to-br from-green-400 to-green-600 rounded-full shadow-lg hover:shadow-green-500/30 hover:shadow-xl transition-all duration-300 group-hover:scale-110">
        <MessageCircle className="w-7 h-7 text-white" />
      </div> */}

      {/* Tooltip */}
      <div className="absolute right-full mr-4 top-1/2 -translate-y-1/2 px-4 py-2 bg-obsidian/90 backdrop-blur-sm border border-green-500/30 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
        <span className="text-sm text-cream font-medium">Fale Conosco</span>
        {/* <div className="absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-obsidian/90 border-r border-t border-green-500/30 rotate-45" /> */}
        
      </div>
      <img width="60" height="60" src="https://img.icons8.com/color/60/whatsapp--v1.png" alt="whatsapp--v1"/>
    </a>
  );
}
