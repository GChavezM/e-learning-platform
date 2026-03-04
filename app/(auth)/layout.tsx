export default function AuthLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="starfield absolute inset-0 opacity-40" />
        <div className="bg-primary/20 pointer-events-none absolute -right-1/4 -bottom-1/2 h-200 w-200 rounded-full blur-[120px]" />
        <div className="fromt-[#111716]/80 pointer-events-none absolute inset-0 bg-linear-to-b to-transparent" />
      </div>
      <main className="flex min-h-screen items-center justify-center p-4 sm:p-8">{children}</main>
    </div>
  );
}
