import Link from 'next/link';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui';
import { DentistRegisterForm } from '@/components/auth';

export default function DentistRegisterPage() {
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
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </div>
              <div>
                <CardTitle>Registro de Odontólogo</CardTitle>
                <CardDescription>
                  Crea tu cuenta profesional para conectar con laboratorios
                </CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <DentistRegisterForm />
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
