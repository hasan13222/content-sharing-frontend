import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from 'yup';
import { Button } from "../ui/button";
import { Loader2 } from "lucide-react";
import { useUpdateProfile } from "@/hooks/profile.hooks";
import { useContext } from "react";
import { DialogStateContext } from "@/provider/DialogStateProvider";

const validationSchema = Yup.object({
    occupation: Yup.string(),
    phone: Yup.string(),
    address: Yup.string(),
});

// Infer TypeScript type from the schema
export type TProfile = Yup.InferType<typeof validationSchema>;

export default function UpdateProfileForm({ profileData, userId }: { profileData: TProfile, userId: string }) {

    const { setUpdateProDialog} = useContext(DialogStateContext);
    const {
        mutate: handleUpdateProfile,
        isPending,
    } = useUpdateProfile();

    function updateProfileHandler(values: TProfile) {
        handleUpdateProfile({...values, userId });
        setUpdateProDialog("close");
    }

    return (
        <div>
            <Formik
                initialValues={{ occupation: profileData?.occupation, address: profileData?.address, phone: profileData?.phone, }}
                validationSchema={validationSchema}
                onSubmit={updateProfileHandler}
            >
                {({ isSubmitting }) => (
                    <Form>
                        <div className="flex flex-col gap-1 mb-2">
                            <label>Occupation</label>
                            <div>
                                <Field defaultValue={profileData?.occupation} className="border rounded-md pl-2 p-1 bg-white w-full" placeholder="Occupation" type="text" name="occupation" />
                                <ErrorMessage className="text-red-500" name="occupation" component="div" />
                            </div>

                        </div>

                        <div className="flex flex-col gap-1 mb-2">
                            <label>Phone</label>
                            <div>
                                <Field defaultValue={profileData?.phone} className="border rounded-md pl-2 p-1 bg-white w-full" placeholder="Phone" type="text" name="phone" />
                                <ErrorMessage className="text-red-500" name="phone" component="div" />
                            </div>

                        </div>
                        <div className="flex flex-col gap-1 mb-2">
                            <label>Address</label>
                            <div>
                                <Field defaultValue={profileData?.address} className="border rounded-md pl-2 p-1 bg-white w-full" placeholder="Address" type="text" name="address" />
                                <ErrorMessage className="text-red-500" name="address" component="div" />
                            </div>

                        </div>

                        <Button className="text-white mt-1" type="submit" disabled={isSubmitting}>
                            {isPending ? <Loader2 className="h-4 w-4 animate-spin mr-2" /> : "Submit"}
                        </Button>

                       
                    </Form>
                )}
            </Formik>
        </div>
    )
}
