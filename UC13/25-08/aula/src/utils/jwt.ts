import jwt from "jsonwebtoken";

interface Payload {
  id: number;
  email: string;
}
// payload são as informações que enviamos do nosso usuário
export const generateToken = (payload: Payload) => {
  // O método sign de JWT retorna o token JWT
  // enviamos as infomações do usuário(PAYLOAD)
  // o nosso secret
  // e a informação de quando expira

  return jwt.sign(payload, process.env.JWT_SECRET!, {
    expiresIn: Number(process.env.JWT_EXPIRES_IN) || "1d",
  });
};
export function verifyToken(token: string): jwt.JwtPayload | string | null {
  try {
    // valida o token que estamos passando
    // se for válido, retorna as informações decodificadas do payload (no nosso caso, id e email)
    return jwt.verify(token, process.env.JWT_SECRET!);
  } catch (error) {
    // se não for válido, retorna null
    return null;
  }
}
