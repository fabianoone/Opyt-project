"use client"

import { useRouter } from "next/navigation";
import { useState } from "react";
import Calculate from "./Calculate";

export default function LeadForm() {
    const router = useRouter();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [whatsapp, setWhatsapp] = useState('');
    const [city, setCity] = useState('São Paulo');
    const [isLoading, setIsLoading] = useState(false);
    const [submissionMessage, setSubmissionMessage] = useState('');

    const handleSubmit = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        setIsLoading(true);

        const lead = { name, email, whatsapp, city };
        try {
            const res = await fetch('http://localhost:4000/api/leads', {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(lead)
            });

            if (res.status === 200) {
                setSubmissionMessage('Cadastro realizado com successo!');
                setIsLoading(false);

                setName('');
                setEmail('')
                setWhatsapp('')
                setCity('');

                setTimeout(() => {
                    setSubmissionMessage('');
                }, 3000);
            } else {
                setSubmissionMessage('Erro ao tentar cadastrar. Tente novamente.');
                setIsLoading(false);
            }
        } catch (error) {
            console.log('Erro ao tentar salvar o lead no back-end');
            setSubmissionMessage('Erro ao tentar salvar os dados.');
            setIsLoading(false);
        }

    };
    
    return (
        <>
            <form onSubmit={handleSubmit} className="w-full">
                <div className="mb-5 flex flex-col">
                    <label htmlFor="name" className="block mb-2 text-sm font-bold text-gray-900 dark:text-white">Nome*</label>
                    <input
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                        type="text" name="name" id="name" placeholder="Nome" required
                    />
                    
                    <label htmlFor="email" className="block mb-2 text-sm font-bold text-gray-900 dark:text-white mt-3">E-mail*</label>
                    <input
                        onChange={(e) => setEmail(e.target.value)}
                        value={email} 
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                        type="email" name="email" id="email" placeholder="Seu e-mail" required
                    />
                    
                    <label htmlFor="whatsapp" className="block mb-2 text-sm font-bold text-gray-900 dark:text-white mt-3">Telefone Whatsapp (DDD + Número)*</label>
                    <input
                        onChange={(e) => setWhatsapp(e.target.value)}
                        value={whatsapp} 
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                        type="tel" name="whatsapp" id="whatsapp" placeholder="WhatsApp" required
                    />
                    
                    <label htmlFor="city" className="block mb-2 text-sm font-bold text-gray-900 dark:text-white mt-3">Qual é a sua cidade:</label>
                    <input
                        onChange={(e) => setCity(e.target.value)}
                        value={city} 
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                        type="text" name="city" id="city" placeholder="Digite sua cidade..." required
                    />
                    
                    <Calculate />

                    {submissionMessage && (
                            <div
                                className={`mt-4 p-2 text-white ${
                                submissionMessage.includes('successo') ? 'bg-green-500' : 'bg-red-500'
                                }`}
                            >{submissionMessage}</div>
                            )}
                    <button 
                        className={`btn-cadastrar uppercase font-bold mx-auto mt-9 mb-6 ${isLoading && 'opacity-50 cursor-not-allowed'}`}
                        disabled={isLoading}
                    >{isLoading ? 'Cadastrando...' : 'Me cadastrar'}
                    </button>

                    <a href="https://api.whatsapp.com/send?phone=+5562994066070&text=Oi,%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20os%20planos%20Opyt" className="btn-whatsapp uppercase font-bold mx-auto" target="_blank">Chama no ZAP!</a>
                </div>
            </form>
        </>
    )
}