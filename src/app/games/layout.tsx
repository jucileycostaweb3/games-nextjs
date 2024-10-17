export default function GamesLayout({ children }: {children: React.ReactNode}) {
  return <div className="flex flex-col w-full">
    {children}
  </div>
}