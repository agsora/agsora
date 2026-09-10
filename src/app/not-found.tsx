import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { RibbonLogo } from "@/components/ribbon-logo";

export default function NotFound() {
  return (
    <div className="relative flex min-h-[70vh] items-center overflow-hidden bg-mesh bg-grid">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-transparent to-white" />
      <Container className="text-center">
        <div className="mx-auto flex justify-center">
          <RibbonLogo className="h-12 w-12" />
        </div>
        <p className="mt-6 text-sm font-semibold uppercase tracking-wide text-blue">
          404
        </p>
        <h1 className="mt-3 text-3xl font-bold tracking-tight text-navy sm:text-4xl">
          Halaman tidak ditemukan
        </h1>
        <p className="mx-auto mt-4 max-w-md text-base text-muted">
          Halaman yang Anda cari mungkin sudah dipindahkan atau tidak
          tersedia. Mari kembali ke beranda AG·SORA.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Button href="/" size="lg" icon={<ArrowRight className="h-4 w-4" />}>
            Kembali ke Beranda
          </Button>
          <Button href="/contact" size="lg" variant="outline">
            Hubungi Kami
          </Button>
        </div>
      </Container>
    </div>
  );
}
