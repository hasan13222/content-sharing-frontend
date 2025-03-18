import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from 'yup';
import { Button } from "../ui/button";
import { useUserSignup } from "@/hooks/auth.hooks";
import { Loader2 } from "lucide-react";

const validationSchema = Yup.object({
    fullname: Yup.string()
        .required("The is field is required"),
    email: Yup.string()
        .email("Invalid email format")
        .required("The is field is required"),
    password: Yup.string()
        .min(6, "Password must be at least 6 characters")
        .required("The is field is required"),
    confirmPassword: Yup.string()
        .oneOf([Yup.ref("password")], "Passwords must match")
        .required("The is field is required"),
});

// Infer TypeScript type from the schema
export type TSignup = Yup.InferType<typeof validationSchema>;

export default function SignupForm() {

    const {
        mutate: handleUserSignup,
        isPending,
    } = useUserSignup();

    function sigupHandler(values: TSignup) {
        const newUser = { fullname: values.fullname, email: values.email, password: values.password };
        handleUserSignup(newUser);
    }

    return (
        <div>
            <Formik
                initialValues={{ fullname: "", email: "", password: "", confirmPassword: "" }}
                validationSchema={validationSchema}
                onSubmit={sigupHandler}
            >
                {({ isSubmitting }) => (
                    <Form>
                        <div className="flex flex-col gap-1 mb-2">
                            <label>Full Name</label>
                            <div>
                                <Field className="border rounded-md pl-2 p-1 bg-white w-full" placeholder="Full Name" type="text" name="fullname" />
                                <ErrorMessage className="text-red-500" name="fullname" component="div" />
                            </div>

                        </div>

                        <div className="flex flex-col gap-1 mb-2">
                            <label>Email</label>
                            <Field className="border rounded-md pl-2 p-1 bg-white w-full" placeholder="Email" type="email" name="email" />
                            <ErrorMessage className="text-red-500" name="email" component="div" />
                        </div>

                        <div className="flex flex-col gap-1 mb-2">
                            <label>Password</label>
                            <Field className="border rounded-md pl-2 p-1 bg-white w-full" placeholder="Password" type="password" name="password" />
                            <ErrorMessage className="text-red-500" name="password" component="div" />
                        </div>
                        <div className="flex flex-col gap-1 mb-2">
                            <label>Confirm Password</label>
                            <Field className="border rounded-md pl-2 p-1 bg-white w-full" placeholder="Retype Password" type="password" name="confirmPassword" />
                            <ErrorMessage className="text-red-500" name="confirmPassword" component="div" />
                        </div>
                        <Button className="text-white mt-1" type="submit" disabled={isSubmitting}>
                            {isPending ? <Loader2 className="h-4 w-4 animate-spin mr-2" /> : "Signup"}
                        </Button>

                        <p className="mt-1">Already signed up? Go to <a className="" href="/login"><Button type="button" className="text-white bg-secondary">Login</Button></a></p>

                        
                    </Form>
                )}
            </Formik>
        </div>
    )
}
