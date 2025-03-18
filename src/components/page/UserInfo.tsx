
import { useGetMyProfile } from "@/hooks/profile.hooks";
import { FaEdit } from "react-icons/fa";
// import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTrigger,
} from "@/components/ui/dialog"
import UpdateProfileForm from "../form/UpdateProfileForm";
import { DialogDescription, DialogTitle } from "@radix-ui/react-dialog";
import { useContext } from "react";
import { DialogStateContext } from "@/provider/DialogStateProvider";


const UserInfo = ({ myInfo }: any) => {
    const { data: myProfile } = useGetMyProfile();

    const { updateProDialog, setUpdateProDialog } = useContext(DialogStateContext);

    return (
        <>
            <div className="post_header flex items-center border p-5 rounded-md mb-3">
                <div className="user flex items-center gap-5">
                    <img className="w-36 object-contain" src="/man.png" alt="avatar" />
                    <div className="flex flex-col">
                        <h3 className="text-lg font-medium flex gap-2 items-center">
                            <span>{myInfo?.data?.fullname}</span>{" "}

                            {/* update profile trigger */}
                            <Dialog
                                onOpenChange={() => setUpdateProDialog("open")}
                                open={updateProDialog === "close" ? false : undefined}>
                                <DialogTrigger asChild>
                                    <FaEdit className="cursor-pointer" />
                                </DialogTrigger>
                                <DialogContent className="sm:max-w-[425px] min-h-auto max-h-full overflow-auto">
                                    <DialogHeader>
                                        <DialogTitle>Update profile</DialogTitle>
                                        <DialogDescription>
                                            Make changes to your profile here. Click save when you're done.
                                        </DialogDescription>
                                    </DialogHeader>
                                    {/* update profile form */}
                                    <UpdateProfileForm profileData={myProfile?.data} userId={myInfo?.data?.id} />
                                </DialogContent>
                            </Dialog>
                        </h3>
                        <p>{myProfile?.data?.occupation}</p>
                        <p>{myInfo?.data?.email}</p>
                        <p>{myProfile?.data?.phone}</p>
                        <p>{myProfile?.data?.address}</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default UserInfo;
