import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu";
import { queryClient } from "@/main";
import { useNavigate } from "react-router-dom";
  
export default function Profile() {
  const navigate = useNavigate();

  async function logoutHandler(){
    localStorage.removeItem('token');    
    navigate('/');
    window.location.reload();
    await queryClient.invalidateQueries({ queryKey: ['get_my_info'] });
    await queryClient.invalidateQueries({ queryKey: ['get_my_profile'] });
  }
  return (
    <>
        <DropdownMenu>
              <DropdownMenuTrigger>
                <img className="h-12 object-contain" src="/man.png" alt="profile" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="min-w-[200px]">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator className='bg-gray-200 mb-2' />
                <DropdownMenuItem className='cursor-pointer hover:text-white' onClick={() => navigate('/profile')}>
                  Profile
                </DropdownMenuItem>

                <DropdownMenuItem className='cursor-pointer hover:text-white' onClick={logoutHandler}>
                  Logout
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
    </>
  )
}
