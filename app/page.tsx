import NavbarDemo from "@/components/shared/navbar";
import Home from "./(home)/home/page";

export default function Page() {
  return (
    <div className="flex flex-col gap-10 min-h-screen  bg-zinc-50  dark:bg-black">
      <NavbarDemo>
        <Home />
      </NavbarDemo>
    </div>
  );
}
