import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, useForm } from '@inertiajs/react';
import { PageProps } from '@/types';
import PrimaryButton from '@/Components/PrimaryButton';
import { FormEvent, useState } from 'react';
import Modal from '@/Components/Modal';
import InputLabel from '@/Components/InputLabel';
import TextInput from '@/Components/TextInput';
import InputError from '@/Components/InputError';


interface ITenant {


    name: string;
    email: string;
    password: string;
    domain: string;
    password_confirmation: string;

}


export default function Index({ auth }: PageProps) {

    const { data, setData, post, errors, reset, setError } = useForm<ITenant>({

        name: '',
        email: '',
        password: '',
        password_confirmation: '',
        domain: '',

    });

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {

        e.preventDefault();

        post(route("tenants.store"), {

            onSuccess: (data) => {
                
                setOpen(false);
                reset();
                window.location.href = route('dashboard');


            },
            onError: (errors) => {

                console.log(errors);

            }
        });


    }
    const [open, setOpen] = useState<boolean>(false);
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">Tenant</h2>}
        >
            <Head title="Tenants" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">

                </div>

                <div className='mx-auto mt-4 max-w-7xl sm:px-6 lg:px-8'>
                    <div className='overflow-hidden bg-white shadow-sm dark:bg-gray-800 sm:rounded-lg'>
                        <div className='p-6 text-gray-900 dark:text-gray-100'>
                            <PrimaryButton onClick={() => setOpen(true)}>Create Tenant</PrimaryButton>

                        </div>
                    </div>
                </div>


            </div>

            <Modal maxWidth='sm' show={open} onClose={() => setOpen(false)}>

                <form onSubmit={handleSubmit}>
                    <div className="relative flex flex-col justify-center rounded-lg bg-dark-900 dark:bg-gray-800">
                        <div className="flex flex-col gap-4 p-6">
                            <div className="w-full max-w-sm min-w-[200px]">
                                <InputLabel className="block mb-2 text-sm text-black" id="name">
                                    Tenant Name
                                </InputLabel>
                                <TextInput onChange={(e) => {
                                    setData('name', e.target.value);
                                    setError('name', '');

                                }} value={data.name} name='name' type='text' className="w-full px-3 py-2 text-sm transition duration-300 bg-transparent border rounded-md shadow-sm placeholder:text-slate-400 text-slate-700 border-slate-200 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 focus:shadow" />

                            </div>

                            {
                                errors.name && <InputError message={errors.name} />
                            }

                            <div className="w-full max-w-sm min-w-[200px]">
                                <InputLabel className="block mb-2 text-sm text-slate-600" id="email">
                                    Tenant Email
                                </InputLabel>

                                <TextInput onChange={(e) => {
                                    setData('email', e.target.value);
                                    setError('email', '');
                                }} value={data.email} name='email' type='email' className="w-full px-3 py-2 text-sm transition duration-300 bg-transparent border rounded-md shadow-sm placeholder:text-slate-400 text-slate-700 border-slate-200 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 focus:shadow" />

                            </div>

                            {
                                errors.email && <InputError message={errors.email} />
                            }


                            <div className="w-full max-w-sm min-w-[200px]">
                                <InputLabel className="block mb-2 text-sm text-slate-600" id="password">
                                    Tenant Password
                                </InputLabel>
                                <TextInput
                                    onChange={(e) => {
                                        setData('password', e.target.value);
                                        setError('password', '');
                                    }}
                                    value={data.password}
                                    name="password" type='password' className="w-full px-3 py-2 text-sm transition duration-300 bg-transparent border rounded-md shadow-sm placeholder:text-slate-400 text-slate-700 border-slate-200 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 focus:shadow" />

                            </div>

                            {
                                errors.password && <InputError message={errors.password} />
                            }



                            <div className="w-full max-w-sm min-w-[200px]">
                                <InputLabel className="block mb-2 text-sm text-slate-600" id="confirm">
                                    Confirm
                                </InputLabel>
                                <TextInput
                                    onChange={(e) => {
                                        setData('password_confirmation', e.target.value);
                                        setError('password_confirmation', '');
                                    }}
                                    value={data.password_confirmation}
                                    name="password_confirmation" type='password' className="w-full px-3 py-2 text-sm transition duration-300 bg-transparent border rounded-md shadow-sm placeholder:text-slate-400 text-slate-700 border-slate-200 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 focus:shadow" />

                            </div>

                            {
                                errors.password_confirmation && <InputError message={errors.password_confirmation} />
                            }


                            <div className="w-full max-w-sm min-w-[200px]">
                                <InputLabel className="block mb-2 text-sm text-slate-600" id="domain">
                                    Domain
                                </InputLabel>
                                <TextInput
                                    onChange={(e) => {
                                        setData('domain', e.target.value);
                                        setError('domain', '');
                                    }}
                                    value={data.domain}
                                    name="domain" type='text' className="w-full px-3 py-2 text-sm transition duration-300 bg-transparent border rounded-md shadow-sm placeholder:text-slate-400 text-slate-700 border-slate-200 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 focus:shadow" />

                            </div>

                            {
                                errors.domain && <InputError message={errors.domain} />
                            }
                        </div>
                        <div className="p-6 pt-0">

                            <PrimaryButton className="flex w-full px-4 py-2 text-sm text-center text-white transition-all border border-transparent rounded-md shadow-md bg-slate-800 hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="submit">Create Tenant</PrimaryButton>


                        </div>
                    </div>
                </form>



            </Modal>
        </AuthenticatedLayout>
    );
}
