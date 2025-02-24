import { IsEmail, IsNotEmpty, IsPhoneNumber, IsString, MinLength, IsOptional, IsBase64} from 'class-validator';

export class CreatePatientDto {
    @IsNotEmpty({ message: 'First name is required' })
    @IsString({ message: 'First name must be a string' })
    firstName: string;

    @IsNotEmpty({ message: 'Last name is required' })
    @IsString({ message: 'Last name must be a string' })
    lastName: string;

    @IsNotEmpty({ message: 'Email is required' })
    @IsEmail({}, { message: 'Invalid email address' })
    email: string;

    @IsNotEmpty({ message: 'Password is required' })
    @MinLength(8, { message: 'Password must be at least 8 characters long' })
    password: string;

    @IsPhoneNumber('ET', { message: 'Invalid Ethiopian phone number' })
    phoneNumber: string;

    role: string = 'patient'; 
    @IsOptional()
    medicalHistory?: Array<Buffer>; 


    speciality = 'patient'
}
