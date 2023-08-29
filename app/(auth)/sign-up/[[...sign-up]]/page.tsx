/**
 * Renders a sign-in page using the `SignIn` component from the `@clerk/nextjs` library.
 * @returns JSX element
 */
import { SignIn } from "@clerk/nextjs";
 
export default function Page() {
  return <SignIn />;
}