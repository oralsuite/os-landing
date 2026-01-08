'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import Link from 'next/link';
import { Button, Input, Alert } from '@/components/ui';
import { laboratoryRegisterSchema, LaboratoryRegisterFormData } from '@/lib/validations';
import { api } from '@/lib/api';
import { saveAuth, redirectToDashboard } from '@/lib/auth';
import type { RegisterLaboratoryDto } from '@/types/auth';

export function LaboratoryRegisterForm() {
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LaboratoryRegisterFormData>({
    resolver: zodResolver(laboratoryRegisterSchema),
  });

  const onSubmit = async (data: LaboratoryRegisterFormData) => {
    setError(null);
    setIsLoading(true);

    try {
      const registerData: RegisterLaboratoryDto = {
        email: data.email,
        password: data.password,
        role: 'LABORATORY',
        laboratoryProfile: {
          businessName: data.businessName,
          taxId: data.taxId || undefined,
          contactName: data.contactName || undefined,
          address: data.address || undefined,
          city: data.city || undefined,
          state: data.state || undefined,
          postalCode: data.postalCode || undefined,
          phone: data.phone || undefined,
          website: data.website || undefined,
          description: data.description || undefined,
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
          placeholder="contacto@laboratorio.com"
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
        <h3 className="text-lg font-medium text-gray-900">Datos del laboratorio</h3>

        <Input
          label="Nombre del laboratorio"
          placeholder="Laboratorio Dental Excellence"
          required
          error={errors.businessName?.message}
          {...register('businessName')}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Input
            label="CUIT/RUT/RFC"
            placeholder="30-12345678-9"
            error={errors.taxId?.message}
            {...register('taxId')}
          />

          <Input
            label="Nombre de contacto"
            placeholder="Juan Pérez"
            error={errors.contactName?.message}
            {...register('contactName')}
          />
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-medium text-gray-900">
          Ubicación{' '}
          <span className="text-sm font-normal text-gray-500">(opcional)</span>
        </h3>

        <Input
          label="Dirección"
          placeholder="Av. Principal 123"
          error={errors.address?.message}
          {...register('address')}
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Input
            label="Ciudad"
            placeholder="Buenos Aires"
            error={errors.city?.message}
            {...register('city')}
          />

          <Input
            label="Provincia/Estado"
            placeholder="Buenos Aires"
            error={errors.state?.message}
            {...register('state')}
          />

          <Input
            label="Código postal"
            placeholder="C1000"
            error={errors.postalCode?.message}
            {...register('postalCode')}
          />
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-medium text-gray-900">
          Contacto{' '}
          <span className="text-sm font-normal text-gray-500">(opcional)</span>
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Input
            label="Teléfono"
            placeholder="+54 11 1234-5678"
            error={errors.phone?.message}
            {...register('phone')}
          />

          <Input
            label="Sitio web"
            placeholder="https://www.laboratorio.com"
            error={errors.website?.message}
            {...register('website')}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Descripción
          </label>
          <textarea
            placeholder="Breve descripción del laboratorio y servicios..."
            className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            rows={3}
            {...register('description')}
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
