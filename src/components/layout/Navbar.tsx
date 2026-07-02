import { Search, UserCircle2 } from "lucide-react";

function Navbar() {
  return (
    <header className="flex h-14 items-center justify-between border-b border-slate-700 bg-slate-900 px-6">

      {/* Left */}

      <h1 className="text-xl font-bold text-cyan-400">
        Interview Atlas
      </h1>

      {/* Right */}

      <div className="flex items-center gap-5">

        <Search
          size={20}
          className="cursor-pointer text-slate-400 hover:text-white"
        />

        <div className="flex items-center gap-2">

          <UserCircle2
            size={22}
            className="text-slate-300"
          />

          <span className="text-sm text-slate-300">
            Guest
          </span>

        </div>

      </div>

    </header>
  );
}

export default Navbar;