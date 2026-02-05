// utils/password.ts
import bcrypt from "bcryptjs";

const SALT_ROUNDS = 10;

export async function saltAndHashPassword(password: string): Promise<string> {
  const hash = await bcrypt.hash(password, SALT_ROUNDS);
  return hash;
}

export async function verifyPassword(
  password: string,
  hash: string,
): Promise<boolean> {
  return bcrypt.compare(password, hash);
}
