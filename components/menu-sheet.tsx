"use client"

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

const MenuSheet = () => {
  const [open, setOpen] = useState(false)
  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger>
        <Menu />
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Menu</SheetTitle>
          <SheetDescription className="sr-only">Menu</SheetDescription>
        </SheetHeader>

        {/* Nav links */}
        <div className="flex flex-col gap-9 px-6 font-semibold">
          <Link
            href="#hero-section"
            onClick={() => setOpen(false)}
            className="cursor-pointer bg-transparent text-gray-700 transition-colors hover:bg-transparent hover:text-gray-900"
          >
            Home
          </Link>
          <Link
            href="#about-section"
            onClick={() => setOpen(false)}
            className="cursor-pointer bg-transparent text-gray-700 transition-colors hover:bg-transparent hover:text-gray-900"
          >
            About
          </Link>
          <Link
            href="#solutions-section"
            onClick={() => setOpen(false)}
            className="cursor-pointer bg-transparent text-gray-700 transition-colors hover:bg-transparent hover:text-gray-900"
          >
            Services
          </Link>
          <Link
            href="#what-we-do"
            onClick={() => setOpen(false)}
            className="cursor-pointer bg-transparent text-gray-700 transition-colors hover:bg-transparent hover:text-gray-900"
          >
            What we do
          </Link>
        </div>
      </SheetContent>
    </Sheet>
  )
}

export default MenuSheet
