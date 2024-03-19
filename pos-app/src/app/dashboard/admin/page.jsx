'use client';
import { Form, Formik, Field, ErrorMessage } from "formik";
import HeaderDashboard from "~/components/cores/HeaderDashboard";
import { useCreateAdminMutation } from "~/api/useCreateAdminMutation"

const AdminPage = () => {
    const {handleCreateAdmin, isLoading} = useCreateAdminMutation()

    return(
        <div>
            <HeaderDashboard 
                breadcumbsLink='Dashboard / Admin'
                title='Create New Admin'
            />
            <Formik
                initialValues={{
                    username: '',
                    email: '',
                    password: '',
                    role: ''
                }}
                // validationSchema={loginSchema}
                onSubmit={(values) => { 
                    handleCreateAdmin(values)
                }}
            >
                    {
                        ({dirty, isValid}) => {
                            return(
                                <Form>
                                <div className="px-14 py-10">
                                    <div className="w-full flex flex-col gap-3">
                                        <div className="flex gap-7">
                                            <div className="flex flex-col w-full">
                                                <label>
                                                    Username
                                                </label>
                                                <Field 
                                                    name="username"
                                                    className="input border border-gray-300 w-full py-3 px-3 rounded-md"
                                                    placeholder="Type Admin Name"
                                                />
                                            </div>
                                            <div className="flex flex-col w-full">
                                                <label>
                                                    Email
                                                </label>
                                                <Field 
                                                    name="email"
                                                    className="input border border-gray-300 w-full py-3 px-3 rounded-md"
                                                    placeholder="Type Admin Email"
                                                />
                                            </div>
                                        </div>
                                        <div className="flex gap-7">
                                            <div className="flex flex-col w-full">
                                                <label>
                                                    Password
                                                </label>
                                                <Field 
                                                    name="password"
                                                    className="input border border-gray-300 w-full py-3 px-3 rounded-md"
                                                    placeholder="Type Admin Password"
                                                />
                                            </div>
                                            <div className="flex flex-col w-full">
                                                <label>
                                                    Role
                                                </label>
                                                <Field as="select" name='role' className="input border border-gray-300 w-full py-3 px-3 rounded-md">
                                                    <option>
                                                        Choose Role
                                                    </option>
                                                    <option value="admin">
                                                        ADMIN
                                                    </option>
                                                    <option value="super_admin">
                                                        SUPER_ADMIN
                                                    </option>
                                                </Field>
                                            </div>
                                        </div>
                                        <button 
                                            disabled={!(dirty && isValid) || isLoading}
                                            className="btn bg-orange-500 text-white w-full py-3 rounded-md hover:bg-black">
                                            Create Admin
                                        </button>
                                    </div>
                                </div>
                                </Form>     
                            )
                        }
                    }
            </Formik>
        </div>
    )
}

export default AdminPage;