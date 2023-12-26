import { Pizza } from 'lucide-react'
import { Outlet } from 'react-router-dom'

export function AuthLayout() {
  return (
    <div className="grid min-h-screen grid-cols-2">
      <div className="flex h-full flex-col justify-between border-r border-foreground/5 bg-muted p-10 text-muted-foreground">
        <div className="text-lg- flex items-center gap-3  text-foreground">
          <Pizza className="h-5 w-5" />
          <span className="font-semibold">Pizza 2U</span>
        </div>
        <footer className="text-sm">
          Painel do parceiro &copy; Pizza 2U - {new Date().getFullYear()}
        </footer>
      </div>

      <div className="flex flex-col items-center justify-center">
        <Outlet />
      </div>
    </div>
  )
}
