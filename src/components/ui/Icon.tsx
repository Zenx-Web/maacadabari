import {
  Film,
  Sparkles,
  PenTool,
  LayoutGrid,
  Gamepad2,
  Tv,
  Camera,
  type LucideProps,
} from "lucide-react";

// Standardized on Lucide only, per design-tokens.json's icon.library
// decision — never mix icon libraries in one component tree. Static
// map (not the `icons` barrel export) so unused icons tree-shake out;
// extend this map as new category icons are introduced.
const iconMap = {
  Film,
  Sparkles,
  PenTool,
  LayoutGrid,
  Gamepad2,
  Tv,
  Camera,
} as const;

export type IconName = keyof typeof iconMap;

export function Icon({
  name,
  className,
  ...props
}: { name: string } & LucideProps) {
  const LucideIcon = iconMap[name as IconName];
  if (!LucideIcon) return null;
  return <LucideIcon className={className} {...props} />;
}
