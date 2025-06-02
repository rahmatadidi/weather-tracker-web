import { TrendingUp } from "lucide-react";

export function Header() {
  return (
    <header className="bg-white border-b">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="bg-blue-600 p-2 rounded-lg">
              <TrendingUp className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-blue-600">CurrencyX</h1>
              <p className="text-xs text-muted-foreground">
                Powered by Fixer.io
              </p>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#" className="text-muted-foreground hover:text-blue-600">
              Rates
            </a>
            <a href="#" className="text-muted-foreground hover:text-blue-600">
              API
            </a>
            <a href="#" className="text-muted-foreground hover:text-blue-600">
              About
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
