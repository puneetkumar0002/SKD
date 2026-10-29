import React from "react";
import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
  const schemaItems = [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://skdgroupofinstitutions.com/",
    },
    ...items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 2,
      name: item.label,
      item: item.href
        ? `https://skdgroupofinstitutions.com${item.href}`
        : undefined,
    })),
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: schemaItems,
          }),
        }}
      />

      <nav
        aria-label="Breadcrumb"
        className="py-3 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
      >
        <ol className="flex items-center space-x-2 text-xs sm:text-sm text-[#66758C] overflow-x-auto whitespace-nowrap py-1">
          <li>
            <Link
              href="/"
              className="inline-flex items-center hover:text-[#2855E8] transition-colors"
            >
              <Home className="w-3.5 h-3.5 mr-1" />
              <span>Home</span>
            </Link>
          </li>

          {items.map((item, index) => {
            const isLast = index === items.length - 1;
            return (
              <li key={index} className="flex items-center space-x-2">
                <ChevronRight className="w-3 h-3 text-slate-400 shrink-0" />
                {isLast || !item.href ? (
                  <span
                    className="font-semibold text-[#101F3D] truncate max-w-[200px] sm:max-w-none"
                    aria-current="page"
                  >
                    {item.label}
                  </span>
                ) : (
                  <Link
                    href={item.href}
                    className="hover:text-[#2855E8] transition-colors"
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}
