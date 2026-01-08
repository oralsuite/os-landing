import Link from 'next/link';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui';
import { LaboratoryRegisterForm } from '@/components/auth';

export default function LaboratoryRegisterPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white py-12 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center gap-2">
            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">O</span>
            </div>
            <span className="text-xl font-bold text-gray-900">OralSuite</span>
          </Link>
        </div>

        <Card variant="elevated">
          <CardHeader>
            <div className="flex items-center gap-3 mb-2">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                  />
                </svg>
              </div>
              <div>
                <CardTitle>Registro de Laboratorio</CardTitle>
                <CardDescription>
                  Registra tu laboratorio dental para recibir órdenes de trabajo
                </CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <LaboratoryRegisterForm />
          </CardContent>
        </Card>

        <p className="text-center text-sm text-gray-500 mt-6">
          <Link href="/register" className="text-blue-600 hover:underline">
            Volver a opciones de registro
          </Link>
        </p>
      </div>
    </div>
  );
}
