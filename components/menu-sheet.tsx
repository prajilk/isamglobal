"use client"

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { ArrowRight, Menu } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import { Button } from "./ui/button"

const MenuSheet = () => {
  const [open, setOpen] = useState(false)
  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger className="md:hidden">
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
            href="/#hero-section"
            onClick={() => setOpen(false)}
            className="cursor-pointer bg-transparent text-gray-700 transition-colors hover:bg-transparent hover:text-gray-900"
          >
            Home
          </Link>
          <Link
            href="/#about-section"
            onClick={() => setOpen(false)}
            className="cursor-pointer bg-transparent text-gray-700 transition-colors hover:bg-transparent hover:text-gray-900"
          >
            About
          </Link>
          <Link
            href="/#solutions-section"
            onClick={() => setOpen(false)}
            className="cursor-pointer bg-transparent text-gray-700 transition-colors hover:bg-transparent hover:text-gray-900"
          >
            Services
          </Link>
          <Link
            href="/#what-we-do"
            onClick={() => setOpen(false)}
            className="cursor-pointer bg-transparent text-gray-700 transition-colors hover:bg-transparent hover:text-gray-900"
          >
            What we do
          </Link>

          <Link href="/#form-section" onClick={() => setOpen(false)}>
            <Button className="rounded-full font-semibold" size="lg">
              Contact
              <span className="flex items-center justify-center rounded-full bg-white p-1 text-primary">
                <ArrowRight className="h-4 w-4" strokeWidth={2} />
              </span>
            </Button>
          </Link>
        </div>
      </SheetContent>
    </Sheet>
  )
}

export default MenuSheet
