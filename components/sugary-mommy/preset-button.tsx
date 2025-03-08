"use client"

interface PresetButtonProps {
  label: string
  message: string
  onClick: (message: string) => void
  disabled?: boolean
}

export function PresetButton({ label, message, onClick, disabled }: PresetButtonProps) {
  return (
    <button
      onClick={() => onClick(message)}
      disabled={disabled}
      className="bg-background border border-primary/20 text-foreground hover:bg-primary/10 font-pixel-body p-2 pixel-corners transition-colors text-sm"
    >
      {label}
    </button>
  )
}

