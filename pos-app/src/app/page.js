'use client';
import { Form, Formik, Field, ErrorMessage } from "formik";
import { loginSchema } from '~/schemas/loginSchema';
import { useAuthMutation } from "~/api/useAuthMutation";
import { useZustandStores } from "~/zustandStores";

export default function Home() {
    const { users, createUsers } = useZustandStores()

    const handleAuthMutationSuccess = (data) => {
        createUsers('Hello')
        alert('Ok')
    }

    const handleAuthMutationError = (error) => {
        alert(error.message)
    }

    const {mutate, status} = useAuthMutation({
        onSuccess: handleAuthMutationSuccess, 
        onError: handleAuthMutationError
    })

  return (
    <div className="flex justify-center items-center h-[100vh]">
      <div className="w-[500px] flex flex-col justify-center items-center">
          <h1 className="py-3 text-xl font-light">
              Welcome, 
              <span className="px-1 text-orange-500 font-bold">
                  Admin
              </span>
          </h1>
          <Formik
            initialValues={{
                username: '',
                password: ''
            }}
            validationSchema={loginSchema}
            onSubmit={(values, {resetForm}) => { 
                const {username, password} = values
                mutate({username, password}, {
                    onSuccess: () => resetForm()
                })
            }}
          >
            {
                ({dirty, isValid}) => {
                    return(
                        <div className="w-full">
                            <Form>
                                <div className="flex flex-col gap-3 w-full">
                                    <Field 
                                        autocomplete="off"
                                        name="username"
                                        className="input border border-gray w-full py-3 px-3 rounded-md"
                                        placeholder="Type your Username"
                                    />
                                    <ErrorMessage 
                                        name="username"
                                    />
                                    <Field 
                                        autocomplete="off"
                                        name="password"
                                        type="password"
                                        className="input border border-gray w-full py-3 px-3 rounded-md"
                                        placeholder="Type your Password"
                                    />
                                    <ErrorMessage 
                                        name="password"
                                    />
                                    <p className="text-right pt-0 pb-5">
                                        Forgot Password? 
                                    </p>
                                    <button 
                                        type="submit"
                                        disabled={!(dirty && isValid) || status === 'pending'}
                                        className="btn bg-orange-500 text-white w-full py-3 rounded-md hover:bg-black">
                                        Login to Account
                                    </button>
                                </div>
                            </Form>
                        </div>
                    )
                }
            }
          </Formik>
      </div>
  </div>
  );
}
