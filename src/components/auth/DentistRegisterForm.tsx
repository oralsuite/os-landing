'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import Link from 'next/link';
import { Button, Input, Alert } from '@/components/ui';
import { dentistRegisterSchema, DentistRegisterFormData } from '@/lib/validations';
import { api } from '@/lib/api';
import { saveAuth, redirectToDashboard } from '@/lib/auth';
import type { RegisterDentistDto } from '@/types/auth';

export function DentistRegisterForm() {
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<DentistRegisterFormData>({
    resolver: zodResolver(dentistRegisterSchema),
  });

  const onSubmit = async (data: DentistRegisterFormData) => {
    setError(null);
    setIsLoading(true);

    try {
      const registerData: RegisterDentistDto = {
        email: data.email,
        password: data.password,
        role: 'DENTIST',
        dentistProfile: {
          firstName: data.firstName,
          lastName: data.lastName,
          licenseNumber: data.licenseNumber || undefined,
          specialization: data.specialization || undefined,
          clinicName: data.clinicName || undefined,
          clinicAddress: data.clinicAddress || undefined,
          clinicPhone: data.clinicPhone || undefined,
          clinicCity: data.clinicCity || undefined,
          clinicState: data.clinicState || undefined,
        },
      };

      const response = await api.register(registerData);
      saveAuth(response);
      redirectToDashboard();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Error al registrarse');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {error && <Alert variant="error">{error}</Alert>}

      <div className="space-y-4">
        <h3 className="text-lg font-medium text-gray-900">Datos de acceso</h3>

        <Input
          label="Email"
          type="email"
          placeholder="tu@email.com"
          required
          error={errors.email?.message}
          {...register('email')}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Input
            label="Contraseña"
            type="password"
            placeholder="********"
            required
            error={errors.password?.message}
            {...register('password')}
          />

          <Input
            label="Confirmar contraseña"
            type="password"
            placeholder="********"
            required
            error={errors.confirmPassword?.message}
            {...register('confirmPassword')}
          />
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-medium text-gray-900">Datos personales</h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Input
            label="Nombre"
            placeholder="Juan"
            required
            error={errors.firstName?.message}
            {...register('firstName')}
          />

          <Input
            label="Apellido"
            placeholder="Pérez"
            required
            error={errors.lastName?.message}
            {...register('lastName')}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Input
            label="Matrícula profesional"
            placeholder="MP-12345"
            error={errors.licenseNumber?.message}
            {...register('licenseNumber')}
          />

          <Input
            label="Especialización"
            placeholder="Ortodoncia"
            error={errors.specialization?.message}
            {...register('specialization')}
          />
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-medium text-gray-900">
          Datos de la clínica{' '}
          <span className="text-sm font-normal text-gray-500">(opcional)</span>
        </h3>

        <Input
          label="Nombre de la clínica"
          placeholder="Clínica Dental Sonrisa"
          error={errors.clinicName?.message}
          {...register('clinicName')}
        />

        <Input
          label="Dirección"
          placeholder="Av. Principal 123"
          error={errors.clinicAddress?.message}
          {...register('clinicAddress')}
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Input
            label="Ciudad"
            placeholder="Buenos Aires"
            error={errors.clinicCity?.message}
            {...register('clinicCity')}
          />

          <Input
            label="Provincia/Estado"
            placeholder="Buenos Aires"
            error={errors.clinicState?.message}
            {...register('clinicState')}
          />

          <Input
            label="Teléfono"
            placeholder="+54 11 1234-5678"
            error={errors.clinicPhone?.message}
            {...register('clinicPhone')}
          />
        </div>
      </div>

      <Button type="submit" className="w-full" isLoading={isLoading}>
        Crear cuenta
      </Button>

      <p className="text-center text-sm text-gray-600">
        ¿Ya tienes cuenta?{' '}
        <Link href="/login" className="text-blue-600 hover:underline">
          Inicia sesión
        </Link>
      </p>
    </form>
  );
}
