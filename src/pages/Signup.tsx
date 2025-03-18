import SignupForm from "@/components/form/SignupForm";
import SignupLeft from "@/components/page/SignupLeft";

export default function Signup() {
  return (
    <div className="container bg-background px-5 mx-auto gap-10 h-svh flex flex-wrap justify-center items-center">
        <SignupLeft/>
        <div className="login_form w-auto lg:w-[350px]">
            <SignupForm/>
        </div>
      </div>
  )
}
