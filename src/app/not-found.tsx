import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="glow-top relative flex min-h-[70vh] items-center overflow-hidden">
      <Container className="max-w-6xl">
        <div className="max-w-lg">
          <p className="text-[11px] uppercase tracking-[0.18em] text-ink-subtle">
            Error 404
          </p>
          <h1 className="headline mt-5 text-[34px] font-semibold text-ink sm:text-[42px]">
            Halaman tidak ditemukan
          </h1>
          <p className="mt-5 text-[15px] leading-relaxed text-ink-muted">
            Halaman yang Anda cari mungkin sudah dipindahkan atau tidak
            tersedia.
          </p>
          <div className="mt-9 flex flex-col gap-2.5 sm:flex-row">
            <Button href="/" icon={<ArrowRight className="h-4 w-4" />}>
              Kembali ke Beranda
            </Button>
            <Button href="/contact" variant="outline">
              Hubungi Kami
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
}
