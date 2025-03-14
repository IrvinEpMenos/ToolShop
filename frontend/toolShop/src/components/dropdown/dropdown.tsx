"use client";

import { ChevronDown, PieChart, MousePointerClick, ShieldCheck, Puzzle, Repeat, PlayCircle, Phone } from "lucide-react";
import { Popover, PopoverButton, PopoverPanel, PopoverGroup } from "@headlessui/react";

const products = [
  { name: "Categoria 1", description: "Descripcion loren ipsum", href: "#", icon: PieChart },
  { name: "Categoria 1", description: "Descripcion loren ipsum", href: "#", icon: MousePointerClick },
  { name: "Categoria 1", description: "Descripcion loren ipsum", href: "#", icon: ShieldCheck },
  { name: "Categoria 1", description: "Descripcion loren ipsum", href: "#", icon: Puzzle },
  { name: "Categoria 1", description: "Descripcion loren ipsum", href: "#", icon: Repeat },
];

const callsToAction = [
  { name: "Watch demo", href: "#", icon: PlayCircle },
  { name: "Contact sales", href: "#", icon: Phone },
];

export default function Dropdown() {
  return (
    <div className="p-6 bg-gray-900 text-white">
      <PopoverGroup>
        <Popover className="relative">
          <PopoverButton className="flex items-center gap-x-1 text-sm font-semibold">
            Categorias
            <ChevronDown className="size-5 text-gray-400" />
          </PopoverButton>

          <PopoverPanel className="absolute top-full left-0 z-10 mt-3 w-64 overflow-hidden rounded-lg bg-gray-800 shadow-lg ring-1 ring-gray-700 transition">
            <div className="p-4">
              {products.map((item) => (
                <div key={item.name} className="group flex items-center gap-x-4 p-4 rounded-lg hover:bg-gray-700">
                  <div className="flex size-10 items-center justify-center rounded-lg bg-gray-700 group-hover:bg-gray-600">
                    <item.icon className="size-6 text-gray-300 group-hover:text-indigo-400" />
                  </div>
                  <div>
                    <a href={item.href} className="block font-semibold text-white">
                      {item.name}
                    </a>
                    <p className="mt-1 text-gray-300 text-sm">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="grid grid-cols-2 divide-x divide-gray-700 bg-gray-800">
              {callsToAction.map((item) => (
                <a key={item.name} href={item.href} className="flex items-center gap-x-2.5 p-3 font-semibold text-white hover:bg-gray-700">
                  <item.icon className="size-5 text-gray-400" />
                  {item.name}
                </a>
              ))}
            </div>
          </PopoverPanel>
        </Popover>
      </PopoverGroup>
    </div>
  );
}
