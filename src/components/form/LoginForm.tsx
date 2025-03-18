import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from 'yup';
import { Button } from "../ui/button";
import { useUserLogin } from "@/hooks/auth.hooks";
import { TSignup } from "./SignupForm";
import { Loader2 } from "lucide-react";

const validationSchema = Yup.object({
    email: Yup.string()
        .email("Invalid email format")
        .required("The is field is required"),
    password: Yup.string()
        .min(6, "Password must be at least 6 characters")
        .required("The is field is required"),
});

export default function LoginForm() {

    const {
        mutate: handleUserLogin,
        isPending,
    } = useUserLogin();

    function loginHandler(values: Pick<TSignup, "email" | "password">) {
        handleUserLogin(values);
    }

    return (
        <div>
            <Formik
                initialValues={{ email: "", password: "" }}
                validationSchema={validationSchema}
                onSubmit={loginHandler}
            >
                {({ isSubmitting }) => (
                    <Form>

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

                        <Button className="text-white" type="submit" disabled={isSubmitting}>
                            {isPending ? <Loader2 className="h-4 w-4 animate-spin mr-2" /> : "Login"}
                        </Button>
                        <p className="mt-1">Already signed up? Go to <a className="" href="/signup"><Button type="button" className="text-white bg-secondary">Signup</Button></a></p>
                        
                    </Form>
                )}
            </Formik>
        </div>
    )
}
