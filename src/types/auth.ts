// Enums
export type UserRole = 'DENTIST' | 'LABORATORY' | 'ADMIN';

// DTOs
export interface LoginDto {
  email: string;
  password: string;
}

export interface DentistProfileDto {
  firstName: string;
  lastName: string;
  licenseNumber?: string;
  specialization?: string;
  clinicName?: string;
  clinicAddress?: string;
  clinicPhone?: string;
  clinicCity?: string;
  clinicState?: string;
}

export interface LaboratoryProfileDto {
  businessName: string;
  taxId?: string;
  contactName?: string;
  address?: string;
  city?: string;
  state?: string;
  postalCode?: string;
  phone?: string;
  website?: string;
  description?: string;
}

export interface RegisterDentistDto {
  email: string;
  password: string;
  role: 'DENTIST';
  dentistProfile: DentistProfileDto;
}

export interface RegisterLaboratoryDto {
  email: string;
  password: string;
  role: 'LABORATORY';
  laboratoryProfile: LaboratoryProfileDto;
}

export type RegisterDto = RegisterDentistDto | RegisterLaboratoryDto;

// Responses
export interface AuthUser {
  id: string;
  email: string;
  role: UserRole;
}

export interface AuthResponse {
  accessToken: string;
  user: AuthUser;
}

// Error Response
export interface ApiError {
  message: string | string[];
  error: string;
  statusCode: number;
}
