//function to revalidate path
import { revalidatePath } from "next/cache";
export function revPath(path: string) {
 revalidatePath(path);
}