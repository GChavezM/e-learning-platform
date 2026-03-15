export default function AdminLoading() {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#060A12]">
      <style>{`
        @keyframes spin-rocket {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        .spinning-rocket {
          animation: spin-rocket 3s linear infinite;
          display: inline-block;
          font-size: 4rem;
        }
      `}</style>

      {/* Spinning Rocket */}
      <div className="spinning-rocket mb-6">🚀</div>

      {/* Loading Text */}
      <h1 className="font-space-grotesk animate-pulse bg-linear-to-r from-[#1DCD9E] to-cyan-400 bg-clip-text text-center text-xl font-bold text-transparent">
        Loading mission...
      </h1>

      {/* Starfield Background Effect */}
      <div className="starfield pointer-events-none absolute inset-0" aria-hidden="true" />
    </div>
  );
}
