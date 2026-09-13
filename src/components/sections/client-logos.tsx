import Image from "next/image";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/section";
import { clients } from "@/config/clients";

export function ClientLogos() {
  return (
    <Container className="max-w-6xl">
      <Eyebrow className="text-center">Dipercaya oleh</Eyebrow>
      <div className="mt-8 grid grid-cols-2 gap-px overflow-hidden rounded-lg border border-line bg-line sm:grid-cols-4 md:grid-cols-5">
        {clients.map((client) => (
          <div
            key={client.name}
            className="flex h-24 items-center justify-center bg-surface-0 p-5 grayscale transition-all duration-200 hover:grayscale-0"
          >
            <Image
              src={client.logo}
              alt={client.name}
              width={120}
              height={48}
              className="h-auto max-h-10 w-auto max-w-full object-contain"
            />
          </div>
        ))}
      </div>
    </Container>
  );
}
