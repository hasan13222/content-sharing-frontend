import { useNavigate } from "react-router-dom";
import { Button } from "../ui/button";
import Profile from "./Profile";
import { useGetMyInfo } from "@/hooks/auth.hooks";

export default function NavigationBar() {

  const navigate = useNavigate();
  const { data: myInfo } = useGetMyInfo();

  return (
    <>
      <div className="border-b border-gray-200">
        <div className="sticky z-50 top-0 flex justify-between items-center px-1 sm:px-2 md:px-4 lg:px-36 container mx-auto py-3 bg-background">
          {/* logo */}
          <div className="logo">
            <h1 className="text-3xl text-primary font-bold">
              <a href="/">ShareThots</a>
            </h1>
          </div>

          {/* register, login, profile */}
          <div className="user_profile flex gap-2 items-center">
            {myInfo?.data &&
              <Profile />}
            {!myInfo?.data &&
              <><Button className='text-white' onClick={() => navigate('/signup')}>Signup</Button>
                <Button className='text-white' onClick={() => navigate('/login')}>Login</Button></>}
          </div>
        </div>
      </div>
    </>
  )
}
