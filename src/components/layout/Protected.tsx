import { useGetMyInfo } from "@/hooks/auth.hooks";
import { Loader2 } from "lucide-react";
import { Navigate } from "react-router-dom";

const Protected = ({ children }: any) => {
  
    const { data: myInfo, isPending, isError } = useGetMyInfo();

  if (isPending) {
    return (
      <div className="bg-white/50 absolute flex justify-center items-center left-0 top-0 w-svh h-svh">
        <Loader2 className="h-4 w-4 animate-spin mr-2" />
      </div>
    );
  }

  if (isError) {
    return <Navigate to="/" />;
  }

  if (myInfo?.data) {
    return <>{children}</>;
  }
};

export default Protected;
