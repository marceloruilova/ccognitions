import Image from 'next/image';

export default function PainPointsSection() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold">El modelo tradicional es lento y costoso</h2>
        <p className="mt-4 text-lg text-gray-600">
          Equipos de 9 personas, reuniones interminables, y costos fijos altos antes de ver una línea de código.
        </p>
        <div className="mt-8 flex justify-center">
          <Image
            src="/images/overhead.png"
            alt="Representación visual del overhead"
            width={600}
            height={450}
            className="rounded-lg"
          />
        </div>
      </div>
    </section>
  );
}
