'use client';
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { Form, Formik, Field, ErrorMessage } from "formik";
import { loginSchema } from '~/schemas/loginSchema';
export default function Home() {

    const {mutate, status} = useMutation({
        mutationFn: async(username, password) => {
            return await axios.get(`http://localhost:5000/users?username=${username}&password=${password}`)
        }, 
        onSuccess: (data) => {
            console.log('Success')
            console.log(data)
        },
        onError: (error) => {
            console.log('Error')
        }
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
            onSubmit={(values) => {
                const {username, password} = values
                mutate(username, password)
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
