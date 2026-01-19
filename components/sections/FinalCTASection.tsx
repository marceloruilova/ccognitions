import {Link} from '@/i18n/navigation';

export default function FinalCTASection() {
  return (
    <section className="bg-blue-600 text-white">
      <div className="container mx-auto px-4 py-20 text-center">
        <h2 className="text-4xl font-bold">¿Quieres reducir costos sin sacrificar calidad?</h2>
        <Link href="/contact"
           className="inline-block mt-8 bg-white text-blue-600 font-bold py-3 px-8 rounded-lg text-lg hover:bg-gray-100">
            Hablemos de tu proyecto
        </Link>
      </div>
    </section>
  );
}
