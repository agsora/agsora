import { LogoMark } from "@/components/brand-logo";

/** AG·SORA mark + wordmark in the admin colours. */
export function AdminBrand({ center = false }: { center?: boolean }) {
  return (
    <span className="sn-brand-lockup" style={center ? { justifyContent: "center" } : undefined}>
      <LogoMark className="h-6" />
      <span>AG·SORA</span>
    </span>
  );
}
