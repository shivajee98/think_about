export default function LoadingSpinner() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-slate-50">
      <div className="relative">
        <div className="w-16 h-16 border-4 border-blue-900/20 border-t-blue-900 rounded-full animate-spin"></div>
        <div className="absolute inset-0 w-16 h-16 border-4 border-transparent border-r-blue-700 rounded-full animate-spin animation-delay-150"></div>
      </div>
    </div>
  )
}
