import Link from 'next/link';
import { Card, CardContent } from '@/components/ui';

export default function RegisterPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white flex items-center justify-center p-4">
      <div className="w-full max-w-2xl">
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center gap-2">
            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">O</span>
            </div>
            <span className="text-xl font-bold text-gray-900">OralSuite</span>
          </Link>
        </div>

        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Crear una cuenta
          </h1>
          <p className="text-gray-600">
            Selecciona el tipo de cuenta que deseas crear
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <Link href="/register/dentist" className="block">
            <Card
              variant="elevated"
              className="h-full hover:shadow-xl transition-shadow cursor-pointer border-2 border-transparent hover:border-blue-500"
            >
              <CardContent className="text-center py-8">
                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-10 h-10 text-blue-600"
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
                <h2 className="text-xl font-bold text-gray-900 mb-2">
                  Soy Odontólogo
                </h2>
                <p className="text-gray-600 text-sm">
                  Registra tu clínica dental y conecta con laboratorios de
                  confianza para tus trabajos.
                </p>
              </CardContent>
            </Card>
          </Link>

          <Link href="/register/laboratory" className="block">
            <Card
              variant="elevated"
              className="h-full hover:shadow-xl transition-shadow cursor-pointer border-2 border-transparent hover:border-blue-500"
            >
              <CardContent className="text-center py-8">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-10 h-10 text-green-600"
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
                <h2 className="text-xl font-bold text-gray-900 mb-2">
                  Soy Laboratorio
                </h2>
                <p className="text-gray-600 text-sm">
                  Registra tu laboratorio dental y recibe órdenes de trabajo de
                  odontólogos verificados.
                </p>
              </CardContent>
            </Card>
          </Link>
        </div>

        <p className="text-center text-sm text-gray-600 mt-8">
          ¿Ya tienes cuenta?{' '}
          <Link href="/login" className="text-blue-600 hover:underline">
            Inicia sesión
          </Link>
        </p>
      </div>
    </div>
  );
}
