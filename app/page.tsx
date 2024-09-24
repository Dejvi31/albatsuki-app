import HomeGrid from "@/components/HomeGrid";
import LoginButton from "@/components/LoginButton";
import Logo from "@/components/Logo";

export default function Home() {
  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <Logo />
      <LoginButton />
      <HomeGrid />
    </div>
  );
}
