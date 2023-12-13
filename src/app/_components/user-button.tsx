import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

export function OurUserButton() {
  return (
    <>
      <SignedIn>
        <UserButton afterSignOutUrl="/" />
      </SignedIn>
      <SignedOut>
        <SignInButton>
          <button className="rounded-full bg-white/10 px-10 py-3 font-semibold transition hover:bg-white/20">
            Sign In
          </button>
        </SignInButton>
      </SignedOut>
    </>
  );
}
