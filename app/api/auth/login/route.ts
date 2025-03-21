import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    // Intenta extraer el payload del body.
    const { usuario, password } = await req.json() ?? {};

    // Valida que usuario y password estén presentes.
    if (!usuario || !password) {
      return NextResponse.json(
        { response: 'El usuario y la contraseña son obligatorios' },
        { status: 400 }
      );
    }

    // Mock de validación de credenciales.
    if (usuario === 'camilo@gmail.com' && password === '1234') {
      return NextResponse.json(
        { response: 'success' },
        { status: 200 }
      );
    } else {
      return NextResponse.json(
        { response: 'Credenciales inválidas' },
        { status: 401 } // O 400 según preferencia
      );
    }
  } catch (error: any) {
    // Captura cualquier excepción para devolver un mensaje genérico.
    return NextResponse.json(
      { error: error?.message || 'Ocurrió un error inesperado' },
      { status: 500 }
    );
  }
}
